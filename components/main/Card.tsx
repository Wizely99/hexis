import React, { useEffect, useMemo, useState } from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardCodeOne from "./CardCodeOne";
import CarbCodeTwo from "./CarbCodeTwo";
import CardButtons from "./CardButtons";
import { dateToShortString } from "@/utils/dateUtils";
import WorkoutOne from "./WorkoutOne";
interface CardProps {
  date: Date;
}
const Card = ({ date }: CardProps) => {
  const cardObjectsJSX = [CarbCodeTwo, CardCodeOne, WorkoutOne];
  const [cardObjects, setcardObjects] = useState<(() => React.JSX.Element)[]>(
    []
  );
  const removeItem = () => {
    setcardObjects(cardObjects.slice(0, -1));
  };

  const addItem = () => {
    // Add random item from cardObjectsJSX
    const randomIndex = Math.floor(Math.random() * cardObjectsJSX.length);
    //add random obj to state
    setcardObjects([...cardObjects, cardObjectsJSX[randomIndex]]);
    console.log("add item");
  };
  return (
    <div
      key={dateToShortString(date)}
      className=" border border-[#30314c] bg-[#17152d] w-72   "
    >
      <CardHeader {...{ date }} />
      <CardBody />
      <div className="p-4">
        {cardObjects.map((obj, index) => (
          <React.Fragment key={index}>{obj()}</React.Fragment>
        ))}
      </div>
      <CardButtons addItem={addItem} removeItem={removeItem} />
    </div>
  );
};

export default Card;
