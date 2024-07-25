"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { calculateDistance } from '@/lib/calculateDistance';
import { Location, getLocation } from '@/lib/getLocation';
import { getUserIp } from '@/lib/getUserIp';

// Hardcoded server coordinates
const SERVER_LAT = 24.8346780; // Example latitude
const SERVER_LON = 92.8165690; // Example longitude

const LocationDistance: React.FC = () => {
  const [distance, setDistance] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userIp = await getUserIp();
        const userLocation = await getLocation(userIp);

        console.log('User Location:', userLocation);

        const [userLat, userLon] = userLocation.loc.split(',').map(Number);

        console.log('Server Coordinates:', SERVER_LAT, SERVER_LON);
        console.log('User Coordinates:', userLat, userLon);

        const distance = calculateDistance(userLat, userLon, SERVER_LAT, SERVER_LON);
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
