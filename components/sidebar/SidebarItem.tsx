import Link from "next/link";
import React from "react";

interface ItemProps {
  name: string;
  svg: React.JSX.Element;
  color?: string;
  href: string;
}

const SidebarItem = ({ name, svg, color, href = "#" }: ItemProps) => {
  return (
    <Link href={href} key={name}>
      <div className="flex items-center mb-6">
        <div className="w-6 h-6">{svg}</div>
        <span className="ml-3">{name}</span>
      </div>
    </Link>
  );
};

export default SidebarItem;
