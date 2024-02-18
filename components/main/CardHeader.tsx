import React from "react";
import LogoSvg from "../svgs/LogoSvg";
interface CardHeaderProps {
  date: string;
}
const CardHeader = ({ date }: CardHeaderProps) => {
  return (
    <div className="flex justify-between item-center bg-[#30314c]  p-4">
      <div className="text-base font-semibold">{date}</div>
      <div className="flex items-center">
        <LogoSvg />
      </div>
    </div>
  );
};

export default CardHeader;
