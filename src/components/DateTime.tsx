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
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDateTime = format(now, formatString, { locale: enIN });
      setCurrentDateTime(formattedDateTime);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [formatString]);

  return <div>{currentDateTime}</div>;
};

export default DateTime;

