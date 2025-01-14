"use client"
import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { enIN } from "date-fns/locale/en-IN";

type DateTimeProps = {
  formatString?: string;
};

const DateTime: React.FC<DateTimeProps> = ({ formatString = "MMMM d, yyyy" }) => {
  const [currentDateTime, setCurrentDateTime] = useState<string>("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formattedDate = format(now, formatString, { locale: enIN });
      const ampm = format(now, 'a');
      setCurrentDateTime(`${formattedDate} ${ampm}`);
    };

    updateDateTime(); // Initial update
    const interval = setInterval(updateDateTime, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [formatString]);

  return <div className="text-xs">{currentDateTime}</div>;
};

export default DateTime;

