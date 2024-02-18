"use client";
import React from "react";
interface DateSwitcherProps {
  startDate: string;
  endDate: string;
  onDateIncrement: () => void;
  onDateDecrement: () => void;
}
function DateSwitcher({
  startDate,
  endDate,
  onDateIncrement,
  onDateDecrement,
}: DateSwitcherProps) {
  return (
    <div className="flex items-center justify-center px-4 py-2 bg-gray-700 rounded-lg gap-3">
      <svg
        onClick={onDateDecrement}
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 512 512"
        color="#359cef"
        className="cursor-pointer text-[#359cef] w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="48"
          d="M328 112L184 256l144 144"
        ></path>
      </svg>
      <div className="text-white text-base font-normal leading-normal tracking-tight">
        {startDate} - {endDate}
      </div>
      <svg
        onClick={onDateIncrement}
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 512 512"
        color="#359cef"
        className=" cursor-pointer text-[#359cef] w-6 h-6"
        height="24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="48"
          d="M184 112l144 144-144 144"
        ></path>
      </svg>
    </div>
  );
}

export default DateSwitcher;
