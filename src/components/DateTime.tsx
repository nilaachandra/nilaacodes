"use client"
import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { enUS } from "date-fns/locale"; // Import locale for US English

type DateTimeProps = {
  formatString?: string;
};

const DateTime: React.FC<DateTimeProps> = ({ formatString = "MMMM d, yyyy" }) => {
  const [currentDateTime, setCurrentDateTime] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDateTime = format(now, formatString, { locale: enUS });
      setCurrentDateTime(formattedDateTime);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [formatString]);

  return <div>{currentDateTime}</div>;
};

export default DateTime;

