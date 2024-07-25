import axios from 'axios';

export interface Location {
  city: string;
  region: string;
  country: string;
  loc: string; // "latitude,longitude"
}

export async function getUserLocation(): Promise<Location> {
  const response = await axios.get<Location>('https://ipinfo.io/json?token=e845c03e3583aa');
  return response.data;
}

