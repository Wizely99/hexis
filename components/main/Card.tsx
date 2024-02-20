import React, { useState } from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardCodeOne from "./CardCodeOne";
import CarbCodeTwo from "./CarbCodeTwo";
import CardButtons from "./CardButtons";
import WorkoutOne from "./WorkoutOne";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { dateToShortString } from "@/utils/dateUtils";
import { useHiddenMacroContext } from "@/hooks/useHiddenMacro";
interface CardProps {
  date: Date;
}
const Card = ({ date }: CardProps) => {
  const hidden = useHiddenMacroContext();
  const cardObjectsJSX = [CarbCodeTwo, CardCodeOne, WorkoutOne];
  const { getItem, setItem } = useLocalStorage<number[]>(
    dateToShortString(date),
    []
  );
  const cardObjectIndexes = getItem() || [];

  const initial = cardObjectIndexes.map((index) => cardObjectsJSX[index]);
  const [cardObjects, setcardObjects] = useState<(() => React.JSX.Element)[]>(
    initial as (() => React.JSX.Element)[]
  );

  const removeItems = () => {
    // Remove last item from cardObjects
    cardObjectIndexes.pop();
    setItem(cardObjectIndexes);
    setcardObjects(cardObjects.slice(0, -1));
  };

  const addItem = () => {
    // Add random item from cardObjectsJSX
    const randomIndex = Math.floor(Math.random() * cardObjectsJSX.length);
    cardObjectIndexes.push(randomIndex);
    setItem(cardObjectIndexes);
    //add random obj to state
    setcardObjects([...cardObjects, cardObjectsJSX[randomIndex]]);
    console.log("add item");
  };
  return (
    <div className=" border border-[#30314c] bg-[#17152d] w-72   ">
      <CardHeader {...{ date }} />
      <CardBody />
      <div className={`p-4 ${hidden && "hidden"}`}>
        {cardObjects.map((obj, index) => (
          <React.Fragment key={index}>{obj()}</React.Fragment>
        ))}
      </div>
      <CardButtons addItem={addItem} removeItem={removeItems} />
    </div>
  );
};

export default Card;
