"use client"

import Image from "next/image";
import notification from "../../../public/Header/notification.svg";
import human from "../../../public/Header/human.svg";
import add from "../../../public/Header/add.svg";
import { useState } from "react";
import AddTask from "./AddTask";

const Header = () => {
  const [show, setShow] = useState(false);
  const handlleShow = () => {
    setShow(true);
  };
  const closeShow = () => {
    setShow(false)
  }

  return (
    <header className="flex justify-between items-center w-[99%] mb-[80px]">
      <div className="flex items-center gap-6 w-[80%] max-md:block">
        <form className="w-[100%]">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search For Workers"
            className="bg-[#FFF] w-[100%] rounded-[12px] py-[10px] px-[20px] outline-none max-md:hidden"
          />
        </form>
        <button
          className="flex items-center gap-2 bg-[#FE7F26] px-[10px] py-[6px] rounded-[12px] w-[160px] max-md:w-[140px]"
          onClick={handlleShow}
        >
          <Image src={add} />
          Add Task
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="cursor-pointer text-[#FE7F26] w-8 h-8 max-md:hidden"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
          />
        </svg>
      </div>
      <div className="flex gap-6 items-center">
        <Image src={notification} className="w-[20px]" />
        <Image
          src={human}
          className="rounded-[50%] w-[40px] h-[40px] border-[.4px] border-[solid] border-[#C3C1C1]"
        />
      </div>
      <AddTask show={show} handlleShow={handlleShow} closeShow={closeShow} />
    </header>
  );
};

export default Header;
