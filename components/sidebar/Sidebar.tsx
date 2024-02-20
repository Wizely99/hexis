"use client";
import React from "react";
import SidebarItem from "./SidebarItem";
import FuelSvg from "../svgs/FuelSvg";
import ProfileSvg from "../svgs/ProfileSvg";
import NotesSvg from "../svgs/NotesSvg";
import BackSvg from "../svgs/BackSvg";
import Link from "next/link";
import useHover from "@/hooks/useHover";

const items = [
  { name: "Fuel plan", svg: FuelSvg(), color: "text-blue-500" },
  { name: "Notes", svg: NotesSvg() },
  { name: "Profile", svg: ProfileSvg() },
];
const Sidebar = () => {
  const { isHovered, bind } = useHover();

  return (
    <nav
      {...bind}
      className={` sidebar flex  ${
        isHovered ? "items-start" : "items-center"
      } flex-col bg-[#17152d] fixed top-0 left-0 z-50 min-h-screen  sm:w-24 p-5 transition-all duration-150 ease-in-out border-r-2 hover:w-64 hover:p-10 `}
    >
      {SidebarItem({
        name: "Back",
        svg: BackSvg(),
        href: "#",
        hidden: isHovered,
      })}

      <div className="border-t"></div>
      {/* {isHovered ? "Hovered!" : "Not Hovered"} */}
      {items.map((item, index) => (
        <SidebarItem key={index} {...item} hidden={isHovered} href="#" />
      ))}
    </nav>
  );
};

export default Sidebar;
