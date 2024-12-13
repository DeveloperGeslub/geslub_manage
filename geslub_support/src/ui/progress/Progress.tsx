import React, { FC } from "react";

interface ProgressProps {
  value: number;
  max?: number;
  className?: string; 
}

const Progress: FC<ProgressProps> = ({ value, max = 100, className }) => {
  return (
    <div className={`relative w-full h-2 bg-gray-200 rounded-full overflow-hidden ${className || ""}`}>
      <div
        className="absolute h-full bg-blue-500"
        style={{ width: `${(value / max) * 100}%` }}
      ></div>
    </div>
  );
};

export default Progress;
