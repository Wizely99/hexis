import React from "react";
import SidebarItem from "./SidebarItem";
import FuelSvg from "../svgs/FuelSvg";
import ProfileSvg from "../svgs/ProfileSvg";
import NotesSvg from "../svgs/NotesSvg";
import BackSvg from "../svgs/BackSvg";
import Link from "next/link";

const items = [
  { name: "Fuel plan", svg: FuelSvg() },
  { name: "Notes", svg: NotesSvg() },
  { name: "Profile", svg: ProfileSvg() },
];
const Sidebar = () => {
  return (
    <nav className=" sidebar bg-[#17152d] fixed top-0 left-0 z-50 min-h-screen  sm:w-64 p-5 transition-all duration-150 ease-in-out border-r-2 hover:w-64 hover:p-10 ">
      <div className="">
        {SidebarItem({ name: "Back", svg: BackSvg(), href: "#" })}
        <div className="border-t"></div>
      </div>
      <div className="space-y-4 mt-6">
        {items.map((item, index) => (
          <Link key={index} href="#">
            <SidebarItem {...item} href="#" />
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;
