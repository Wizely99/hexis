"use client";
import React, { useState } from "react";
import Card from "./Card";
import LoggedUser from "./LoggedUser";
import MacrosButton from "./MacrosButton";
import DateSwitcher from "./DateSwitcher";
import { addDays, getWeekDays } from "@/utils/dateUtils";
const MainSection = () => {
  const today = new Date();
  const weekDays = getWeekDays(today);
  const [dates, setDates] = useState(weekDays);

  function goToNextWeek() {
    setDates(dates.map((date) => addDays(date, 7)));
  }

  function goToPreviousWeek() {
    setDates(dates.map((date) => addDays(date, -7)));
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
