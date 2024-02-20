"use client";
import React from "react";
import SidebarItem from "./SidebarItem";
import FuelSvg from "../svgs/FuelSvg";
import ProfileSvg from "../svgs/ProfileSvg";
import NotesSvg from "../svgs/NotesSvg";
import BackSvg from "../svgs/BackSvg";

const items = [
  { name: "Fuel plan", svg: FuelSvg(), color: "text-blue-500" },
  { name: "Notes", svg: NotesSvg() },
  { name: "Profile", svg: ProfileSvg() },
];
const Sidebar = () => {
  return (
    <nav className=" sidebar flex   flex-col bg-[#17152d] fixed top-0 left-0 z-50 min-h-screen w-20 hover:w-48  sm:w-24 p-5 transition-all duration-150 ease-in-out border-r-2 sm:hover:w-64 hover:p-10 ">
      {SidebarItem({
        name: "Back",
        svg: BackSvg(),
      })}

      <div className="my-8  border-2 border-[#44455e] w-full rounded-lg"></div>
      {/* {isHovered ? "Hovered!" : "Not Hovered"} */}
      {items.map((item, index) => (
        <SidebarItem key={index} {...item} href="#" />
      ))}
    </nav>
  );
};

export default Sidebar;
