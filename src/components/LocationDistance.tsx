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
    console.log('Component mounted');
    const fetchData = async () => {
      try {
        console.log('Fetching server location...');
        const serverLocation = await getServerLocation();
        console.log('Server Location:', serverLocation);

        console.log('Fetching user location...');
        const userLocation = await getUserLocation();
        console.log('User Location:', userLocation);

        const [serverLat, serverLon] = serverLocation.loc.split(',').map(Number);
        const [userLat, userLon] = userLocation.loc.split(',').map(Number);

        console.log('Server Coordinates:', serverLat, serverLon);
        console.log('User Coordinates:', userLat, userLon);

        const distance = calculateDistance(userLat, userLon, serverLat, serverLon);
        console.log('Calculated Distance:', distance);

        setDistance(distance);
      } catch (err: any) {
        console.error('Error occurred:', err);
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
