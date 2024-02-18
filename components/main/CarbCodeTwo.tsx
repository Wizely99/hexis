import React from "react";

function CarbCodeTwo() {
  return (
    <div className="mb-3">
      <div className="relative p-3 rounded-2xl bg-gradient-to-r from-[#1ba499] to-[#1ba4994D] !rounded-b-none">
        <div className="flex items-center justify-between text-base font-semibold mb-2">
          <span>Breakfast</span>
          <span>12:36</span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="">700-900 Kcal</span>•<span>10-20g C</span>
        </div>
      </div>
      <div className="relative p-3 rounded-2xl pt-0 px-0  bg-gradient-to-r from-[#fb9402] to-[#fb94024D] !rounded-t-none">
        <div className="p-2 max-w-96 text-xs bg-[#30314c]">
          <div className="flex items-center justify-between font-semibold mb-2">
            <span className="flex items-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="mr-1"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>{" "}
              700 Kcal
            </span>
            <span>10:15</span>
          </div>
          <div className="flex items-center justify-between separator-disc">
            <span className="">50g C</span>
            <span>40g P</span>
            <span>20g F</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarbCodeTwo;
