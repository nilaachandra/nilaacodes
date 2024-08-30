"use client"
import React, { useRef, useState, useEffect } from 'react';
import { toast } from 'sonner';
import { Button } from '../../components/ui/button';

type Point = [number, number];
type Path = Point[];

const SignatureCanvas: React.FC<{ onSave?: (imageData: string) => void }> = ({ onSave }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [paths, setPaths] = useState<Path[]>([]);
  const [currentPath, setCurrentPath] = useState<Path>([]);
  const [signatureImage, setSignatureImage] = useState<string | null>(null);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        setContext(ctx);
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.strokeStyle = 'black';
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high"
      }
    }
  }, []);

  const getCoordinates = (event: React.MouseEvent | React.TouchEvent): Point => {
    const canvas = canvasRef.current;
    if (!canvas) return [0, 0];

    const rect = canvas.getBoundingClientRect();
    if ('touches' in event) {
      return [
        event.touches[0].clientX - rect.left,
        event.touches[0].clientY - rect.top
      ];
    } else {
      return [
        event.clientX - rect.left,
        event.clientY - rect.top
      ];
    }
  };

  const startDrawing = (event: React.MouseEvent | React.TouchEvent) => {
    if (isDisabled) return;
    event.preventDefault();
    setIsDrawing(true);
    const [x, y] = getCoordinates(event);
    setCurrentPath([[x, y]]);
    if (context) {
      context.beginPath();
      context.moveTo(x, y);
    }
  };

  const draw = (event: React.MouseEvent | React.TouchEvent) => {
    if (isDisabled) return;
    event.preventDefault();
    if (!isDrawing || !context) return;
    const [x, y] = getCoordinates(event);
    setCurrentPath((prev) => [...prev, [x, y]]);
    context.lineTo(x, y);
    context.stroke();
  };

  const stopDrawing = () => {
    if (isDisabled) return;
    if (isDrawing) {
      setIsDrawing(false);
      setPaths((prev) => [...prev, currentPath]);
      setCurrentPath([]);
      if (context) {
        context.closePath();
      }
    }
  };

  const clearCanvas = () => {
    if (isDisabled) return;
    const canvas = canvasRef.current;
    if (canvas && context) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      setPaths([]);
      setSignatureImage(null);
    }
  };

  const undo = () => {
    if (isDisabled) return;
    if (paths.length === 0 || !context) return;
    const canvas = canvasRef.current;
    if (canvas) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      const newPaths = [...paths];
      newPaths.pop();
      setPaths(newPaths);
      redrawPaths(newPaths);
    }
  };

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

  const isCanvasBlank = (): boolean => {
    return paths.length === 0;
  };

  const saveSignature = () => {
    if (isCanvasBlank()) {
      toast.error("Cannot save blank signature. Please draw something first.");
      return;
    }

    const canvas = canvasRef.current;
    if (canvas) {
      const base64Image = canvas.toDataURL('image/png');
      setSignatureImage(base64Image);
      setIsDisabled(true);
      if (onSave) {
        onSave(base64Image);
      }
    }
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <p className='text-xs text-left w-full leading-none gap-2'>Sign here and click done when you are finished!</p>
      <canvas
        ref={canvasRef}
        width={400}
        height={200}
        className={`border touch-none border-gray-300 rounded-lg bg-white w-full ${isDisabled ? 'cursor-not-allowed opacity-50' : ''}`}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseOut={stopDrawing}
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={stopDrawing}
      />
      <div className="grid justify-end w-full space-x-2 grid-cols-3 items-center px-2">
        <div className='col-span-2'>
          {signatureImage && (
            <p className='text-xs text-left leading-none'>Signature saved! Now you can Sign.</p>
          )}
        </div>
        <div className='flex justify-end gap-2 w-full col-span-1'>
          <h1 className={`text-sm cursor-pointer ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={clearCanvas}>Clear</h1>
          <h1 className={`text-sm cursor-pointer ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={undo}>Undo</h1>
          <h1 className={`text-sm cursor-pointer ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={saveSignature}>Done</h1>
        </div>
      </div>

    </div>
  );
};

export default SignatureCanvas;