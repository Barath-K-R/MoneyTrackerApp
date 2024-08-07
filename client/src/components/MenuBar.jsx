import React from "react";
import { IoAlbumsSharp } from "react-icons/io5";
const MenuBar = () => {
  return (
    <div className="flex flex-col items-center pt-4 h-screen w-16 bg-yellow-200">
      <section className="flex flex-col items-center cursor-pointer">
        <IoAlbumsSharp size={30} />
        <span className="text-sm">Records</span>
      </section>
    </div>
  );
};

export default MenuBar;
