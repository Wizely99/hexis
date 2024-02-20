import Link from "next/link";
import React from "react";

interface ItemProps {
  name: string;
  svg: React.JSX.Element;
  color?: string;
  href?: string;
}

const SidebarItem = ({ name, svg, color, href = "#" }: ItemProps) => {
  return (
    <Link
      href={href}
      key={name}
      className={`${
        color || ""
      } flex justify-center sidebar-item items-center p-2 mb-4`}
    >
      <div className="w-6 h-6">{svg}</div>
      <span className="hidden ml-3 sidebar-item-text">{name}</span>
    </Link>
  );
};

export default SidebarItem;
