"use client"
import React, { useRef, useState, useEffect } from 'react';
import { toast } from 'sonner';
import { Button } from '../../components/ui/button';

// Define types for our coordinate system and paths
type Point = [number, number]; // A point is an array of two numbers [x, y]
type Path = Point[]; // A path is an array of points

const SignatureCanvas: React.FC = () => {
  // Ref for the canvas element
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // State for tracking drawing status and storing paths
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [paths, setPaths] = useState<Path[]>([]); // All completed paths
  const [currentPath, setCurrentPath] = useState<Path>([]); // Current drawing path

  // Set up the canvas context on component mount
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        setContext(ctx);
        // Set initial drawing styles
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.strokeStyle = 'black';
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high"
      }
    }
  }, []);

  // Helper function to get coordinates for both mouse and touch events
  const getCoordinates = (event: React.MouseEvent | React.TouchEvent): Point => {
    const canvas = canvasRef.current;
    if (!canvas) return [0, 0];

    const rect = canvas.getBoundingClientRect();
    if ('touches' in event) {
      // Touch event
      return [
        event.touches[0].clientX - rect.left,
        event.touches[0].clientY - rect.top
      ];
    } else {
      // Mouse event
      return [
        event.clientX - rect.left,
        event.clientY - rect.top
      ];
    }
  };

  // Start drawing when the user starts interacting with the canvas
  const startDrawing = (event: React.MouseEvent | React.TouchEvent) => {
    event.preventDefault(); // Prevent default behavior (e.g., scrolling on touch devices)
    setIsDrawing(true);
    const [x, y] = getCoordinates(event);
    setCurrentPath([[x, y]]); // Start a new path
    if (context) {
      context.beginPath();
      context.moveTo(x, y);
    }
  };

  // Continue drawing as the user moves their mouse/finger
  const draw = (event: React.MouseEvent | React.TouchEvent) => {
    event.preventDefault();
    if (!isDrawing || !context) return;
    const [x, y] = getCoordinates(event);
    setCurrentPath((prev) => [...prev, [x, y]]); // Add point to current path
    context.lineTo(x, y);
    context.stroke();
  };

  // Stop drawing when the user lifts their mouse/finger
  const stopDrawing = () => {
    if (isDrawing) {
      setIsDrawing(false);
      setPaths((prev) => [...prev, currentPath]); // Add current path to all paths
      setCurrentPath([]); // Reset current path
      if (context) {
        context.closePath();
      }
    }
  };

  // Clear the entire canvas
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas && context) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      setPaths([]); // Clear all stored paths
    }
  };

  // Undo the last drawn path
  const undo = () => {
    if (paths.length === 0 || !context) return;
    const canvas = canvasRef.current;
    if (canvas) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      const newPaths = [...paths];
      newPaths.pop(); // Remove the last path
      setPaths(newPaths);
      redrawPaths(newPaths); // Redraw the remaining paths
    }
  };

  // Helper function to redraw all paths (used for undo)
  const redrawPaths = (pathsToDraw: Path[]) => {
    if (!context) return;
    pathsToDraw.forEach((path) => {
      context.beginPath();
      path.forEach(([x, y], i) => {
        if (i === 0) {
          context.moveTo(x, y);
        } else {
          context.lineTo(x, y);
        }
      });
      context.stroke();
      context.closePath();
    });
  };

  // Check if the canvas is blank (no paths drawn)
  const isCanvasBlank = (): boolean => {
    return paths.length === 0;
  };

  // Save the signature as a WebP image
  const saveSignature = () => {
    if (isCanvasBlank()) {
      toast.error("Cannot save blank signature. Please draw something first.");
      return;
    }

    const canvas = canvasRef.current;
    if (canvas) {
      // Convert canvas to base64 string
      const base64Image = canvas.toDataURL('image/png');

      // Create a temporary textarea to copy the base64 string
      const tempTextArea = document.createElement('textarea');
      tempTextArea.value = base64Image;
      document.body.appendChild(tempTextArea);
      tempTextArea.select();
      document.execCommand('copy');
      document.body.removeChild(tempTextArea);

      toast.success("Signature copied as base64 string!");

      // Optional: You can also return the base64 string if you want to use it elsewhere
      return base64Image;
    }
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <canvas
        ref={canvasRef}
        width={400}
        height={200}
        className="border touch-none border-gray-300 rounded-lg bg-white w-full"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseOut={stopDrawing}
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={stopDrawing}
      />
      <div className="flex justify-end w-full space-x-2">
        <h1 className='text-sm cursor-pointer' onClick={clearCanvas}>Clear</h1>
        <h1 className='text-sm cursor-pointer' onClick={undo}>Undo</h1>
        {/* <Button className='' onClick={saveSignature}>Save</Button> */}
      </div>
    </div>
  );
};

export default SignatureCanvas;