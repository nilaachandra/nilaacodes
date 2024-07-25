declare module 'haversine-distance' {
    function haversine(start: { latitude: number; longitude: number }, end: { latitude: number; longitude: number }): number;
    export = haversine;
  }