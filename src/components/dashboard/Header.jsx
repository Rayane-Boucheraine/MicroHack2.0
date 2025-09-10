"use client";

import Image from "next/image";
import notification from "../../../public/Header/notification.svg";
import human from "../../../public/Header/human.svg";
import add from "../../../public/Header/add.svg";
import { useState } from "react";
import AddTask from "./AddTask";

const Header = ({ onToggleAside = () => {} }) => {
  const [show, setShow] = useState(false);
  const handlleShow = () => setShow(true);
  const closeShow = () => setShow(false);

  return (
    <header className="mb-6 flex w-full items-center justify-between">
      <div className="flex w-[80%] items-center gap-3 max-md:w-full">
        <button
          className="rounded-lg p-2 text-white/80 hover:bg-white/10 md:hidden"
          aria-label="Open sidebar"
          onClick={onToggleAside}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <label htmlFor="search" className="sr-only">
          Search for workers
        </label>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for workers"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white outline-none placeholder:text-white/50 max-md:hidden"
        />
        <button
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#FE7F26] to-[#ff974d] px-4 py-2 font-medium text-[#141414] shadow-sm hover:opacity-95 max-md:mt-3"
          onClick={handlleShow}
        >
          <Image src={add} alt="Add" className="h-5 w-5" />
          Add Task
        </button>
      </div>
      <div className="flex items-center gap-6">
        <Image src={notification} alt="Notifications" className="w-[20px]" />
        <Image
          src={human}
          alt="User avatar"
          className="h-[40px] w-[40px] rounded-full border border-white/10"
        />
      </div>
      <AddTask show={show} handlleShow={handlleShow} closeShow={closeShow} />
    </header>
  );
};

export default Header;
