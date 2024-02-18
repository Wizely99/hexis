"use client";
import React, { useState } from "react";
import Card from "./Card";
import LoggedUser from "./LoggedUser";
import MacrosButton from "./MacrosButton";
import DateSwitcher from "./DateSwitcher";

const MainSection = () => {
  const [dates, setDates] = useState([
    "12 Feb",
    "13 Feb",
    "14 Feb",
    "15 Feb",
    "16 Feb",
    "17 Feb",
    "18 Feb",
  ]);
  return (
    <main className=" relative p-8 pl-72 -screen ">
      <div className="fixed left-64 flex justify-between p-4 mx-auto fit-screen">
        <div className="flex gap-4">
          <DateSwitcher />
          <MacrosButton />
        </div>
        <LoggedUser />
      </div>
      <div className="overflow-x-auto mt-24">
        <div className="bg-white flex flex-col sm:flex-row ">
          {dates.map((date, index) => (
            <Card key={index} date={date} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default MainSection;
