"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { calculateDistance } from '@/lib/calculateDistance';
import { Location, getUserLocation } from '@/lib/getUserLocation';
import { getServerLocation } from '@/lib/getServerLocation';

const LocationDistance: React.FC = () => {
  const [distance, setDistance] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const serverLocation = await getServerLocation();
        const userLocation = await getUserLocation();

        const [serverLat, serverLon] = serverLocation.loc.split(',').map(Number);
        const [userLat, userLon] = userLocation.loc.split(',').map(Number);

        const distance = calculateDistance(userLat, userLon, serverLat, serverLon);
        setDistance(distance);
      } catch (err: any) {
        if (axios.isAxiosError(err)) {
          setError(`Failed to fetch location: ${err.message}`);
        } else {
          setError(`Unexpected error: ${err}`);
        }
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (distance === null) {
    return <div>Loading...</div>;
  }

  return <div>Distance to server: {distance.toFixed(2)} km</div>;
};

export default LocationDistance;
