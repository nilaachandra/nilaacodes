"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { calculateDistance } from "@/lib/calculateDistance";
import { Location, getLocation } from "@/lib/getLocation";
import { getUserIp } from "@/lib/getUserIp";

// Hardcoded server coordinates
const SERVER_LAT = 24.834678; // Your latitude
const SERVER_LON = 92.816569; // Your longitude

const LocationDistance: React.FC = () => {
  const [distance, setDistance] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the user's IP address
        const userIp = await getUserIp();

        // Fetch the user's location based on the IP address
        const userLocation = await getLocation(userIp);

        // Extract user coordinates from location data
        const [userLat, userLon] = userLocation.loc.split(",").map(Number);

        // Calculate the distance between the user's location and the server's fixed coordinates
        const distance = calculateDistance(
          userLat,
          userLon,
          SERVER_LAT,
          SERVER_LON
        );

        // Update the distance state
        setDistance(distance);
      } catch (err: any) {
        // Handle errors and update the error state
        if (axios.isAxiosError(err)) {
          setError(`Failed to fetch location: ${err.message}`);
        } else {
          setError(`Unexpected error: ${err}`);
        }
      }
    };

    fetchData();
  }, []);

  // Render error message if there's an error
  if (error) {
    return <h1 className=" text-zinc-800">Error: {error}</h1>;
  }

  // Render loading message if distance is still being calculated
  if (distance === null) {
    return <h1 className=" text-zinc-800 text-xs">Calculating.....</h1>;
  }

  // Render the calculated distance
  return (
    <h1 className="text-xs text-zinc-800">
      {distance.toFixed(2)} km away!
    </h1>
  );
};

export default LocationDistance;
