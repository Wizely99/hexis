"use client";
import React from "react";
import ProgressIndicator from "./ProgressIndicator";

function CardBody() {
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
    </div>
  );
}

export default CardBody;
