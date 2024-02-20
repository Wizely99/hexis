"use client";
import { useState } from "react";
import Card from "./Card";

import { addDays, dateToShortString, getWeekDays } from "@/utils/dateUtils";
import DateSwitcher from "./DateSwitcher";
import LoggedUser from "./LoggedUser";
import MacrosButton from "./MacrosButton";
import { HiddenMacroContext } from "@/hooks/useHiddenMacro";

const MainSection = () => {
  const [isHidden, setIsHidden] = useState(false);
  const today = new Date();
  const weekDays = getWeekDays(today);
  const [dates, setDates] = useState(weekDays);

  function goToNextWeek() {
    setDates(dates.map((date) => addDays(date, 7)));
  }

  function goToPreviousWeek() {
    setDates(dates.map((date) => addDays(date, -7)));
  }
  function toggleHidden() {
    setIsHidden(!isHidden);
  }

  return (
    <main className=" relative p-8 pl-28  ">
      <HiddenMacroContext.Provider value={isHidden}>
        <div className="fixed left-64 top-0 flex justify-between z-40 px-10 py-6 mx-auto fit-screen  bg-[#17152d]">
          <div className="flex gap-4">
            <DateSwitcher
              startDate={dates[0]}
              endDate={dates[dates.length - 1]}
              onDateDecrement={goToPreviousWeek}
              onDateIncrement={goToNextWeek}
            />
            <MacrosButton onClick={toggleHidden} />
          </div>
          <LoggedUser />
        </div>
        <div className="overflow-x-auto mt-24">
          <div className="bg-white flex flex-col sm:flex-row ">
            {dates.map((date, index) => (
              <Card key={dateToShortString(date)} date={date} />
            ))}
          </div>
        </div>
      </HiddenMacroContext.Provider>
    </main>
  );
};

export default MainSection;
