"use client";
import { useEffect, useState } from "react";

import { display } from "@/app/resources/config";
import { person } from "@/app/resources/content";
import { Navbar } from "@/components/Navbar";


type TimeDisplayProps = {
  timeZone: string;
  locale?: string;
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = "en-GB" }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export default TimeDisplay;

export const Header = () => {
  return (
    <header className="flex justify-between w-full items-center px-4 py-6 fixed z-3 top-0">
      <div className="text-sm w-4/12">{display.location && <>{person.location}</>}</div>

      <div className="w-4/12 flex justify-center">
        <Navbar />
      </div>

      <div className="text-sm w-4/12 flex justify-end">{display.time && <TimeDisplay timeZone={person.timezone} />}</div>
    </header>
  );
}