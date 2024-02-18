import React from "react";
interface ProgressIndicatorProps {
  name: string;
  value: number;
  total: number;
  bg?: string;
}
function ProgressIndicator({ name, value, total, bg }: ProgressIndicatorProps) {
  const percent = (value / total) * 100;
  return (
    <div className="p-2">
      <div className="w-full bg-gray-700 rounded-full h-1 mb-2 ">
        <div
          className={`${bg || "bg-blue-600"} h-1.5 rounded-full `}
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-stone-50 text-xs capitalize leading-none tracking-wide">
          {name}
        </div>
        <div className="text-stone-50 text-xs leading-tight tracking-tight">
          {value}/{total} kcal
        </div>
      </div>
    </div>
  );
}

export default ProgressIndicator;
