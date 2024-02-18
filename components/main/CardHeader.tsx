import React from "react";
import LogoSvg from "../svgs/LogoSvg";
import { dateToShortString } from "@/utils/dateUtils";
interface CardHeaderProps {
  date: Date;
}
const CardHeader = ({ date }: CardHeaderProps) => {
  return (
    <div className="flex justify-between item-center bg-[#30314c]  p-4">
      <div className="text-base font-semibold">{dateToShortString(date)}</div>
      <div className="flex items-center">
        <LogoSvg />
      </div>
    </div>
  );
};

export default CardHeader;
