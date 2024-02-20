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
    <main className=" relative p-8 pl-[88px]  sm:pl-28  ">
      <HiddenMacroContext.Provider value={isHidden}>
        <div className="fixed left-0 pl-[88px]  sm:pl-28 top-0 flex flex-col gap-2 sm:gap-4 sm:flex-row justify-between z-40 px-10 py-4 sm:py-6 mx-auto fit-screen  bg-[#17152d]">
          <div className="flex sm:gap-4 gap-2 flex-col sm:flex-row">
            <DateSwitcher
              startDate={dates[0]}
              endDate={dates[dates.length - 1]}
              onDateDecrement={goToPreviousWeek}
              onDateIncrement={goToNextWeek}
            />
            <MacrosButton hidden={isHidden} onClick={toggleHidden} />
          </div>
          <LoggedUser />
        </div>
        <div className="overflow-x-auto mt-44 sm:mt-24">
          <div className="bg-white flex flex-col sm:flex-row ">
            {dates.map((date) => (
              <Card key={dateToShortString(date)} date={date} />
            ))}
          </div>
        </div>
      </HiddenMacroContext.Provider>
    </main>
  );
};

export default MainSection;
