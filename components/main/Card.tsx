import React from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
interface CardProps {
  date: string;
}
const Card = ({ date }: CardProps) => {
  return (
    <div className=" border border-[#30314c] bg-[#17152d] w-72   ">
      <CardHeader {...{ date: date }} />
      <CardBody />
    </div>
  );
};

export default Card;
