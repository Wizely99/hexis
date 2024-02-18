"use client";
import React, { useState } from "react";
import ProgressIndicator from "./ProgressIndicator";
import CardCodeOne from "./CardCodeOne";
import CarbCodeTwo from "./CarbCodeTwo";

function CardBody() {
  const [clickCount, setClickCount] = useState(0);
  return (
    <div className="p-4 bg-[#26273d] !rounded-none">
      <ProgressIndicator
        name="Calories"
        value={200}
        total={1000}
        bg={"bg-white"}
      />
      <ProgressIndicator name="Carbs" value={500} total={1000} />
      <ProgressIndicator name="Protein" value={300} total={1000} />
      <ProgressIndicator name="Fat" value={700} total={1000} />
      <div className="p-4">
        <CardCodeOne></CardCodeOne>
        <CarbCodeTwo></CarbCodeTwo>
      </div>
      <div className="card">
        <div className="flex items-center p-3 justify-between">
          <button
            type="button"
            className="w-20 h-10 rounded-lg shadow border border-blue-500 flex-col justify-center items-center inline-flex"
            onClick={() => {
              setClickCount((prevCount) => {
                const newCount = prevCount + 1;
                alert(newCount);
                return newCount;
              });
            }}
          >
            +
          </button>
          <button
            type="button"
            className="w-20 h-10 rounded-lg shadow border border-blue-500 flex-col justify-center items-center inline-flex"
            onClick={() => {
              setClickCount((prevCount) => {
                const newCount = prevCount - 1;
                alert(newCount);
                return newCount;
              });
            }}
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardBody;
