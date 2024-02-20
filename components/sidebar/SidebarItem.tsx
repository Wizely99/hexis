import Link from "next/link";
import React from "react";

interface ItemProps {
  name: string;
  svg: React.JSX.Element;
  color?: string;
  href: string;
  hidden: boolean;
}

const SidebarItem = ({ name, svg, color, hidden, href = "#" }: ItemProps) => {
  return (
    <Link href={href} key={name} className={`${color}`}>
      <div className="flex items-center mb-6">
        <div className="w-6 h-6">{svg}</div>
        <span className={`ml-3 ${!hidden && "hidden"}`}>{name}</span>
      </div>
    </Link>
  );
};

export default SidebarItem;
