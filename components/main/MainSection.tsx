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
  function goToNextWeek() {
    setDates((prevDates) => {
      return [
        "19 Feb",
        "20 Feb",
        "21 Feb",
        "22 Feb",
        "23 Feb",
        "24 Feb",
        "25 Feb",
      ];
    });
  }
  function goToPreviousWeek() {
    setDates((prevDates) => {
      return ["5 Feb", "6 Feb", "7 Feb", "8 Feb", "9 Feb", "10 Feb", "11 Feb"];
    });
  }

  return (
    <main className=" relative p-8 pl-72 -screen ">
      <div className="fixed left-64 flex justify-between p-4 mx-auto fit-screen">
        <div className="flex gap-4">
          <DateSwitcher
            startDate={dates[0]}
            endDate={dates[dates.length - 1]}
            onDateDecrement={goToPreviousWeek}
            onDateIncrement={goToNextWeek}
          />
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
