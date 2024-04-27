"use client";
import Image from "next/image";
import ty_pe from "../../../../public/tasks/type.svg";
import Workers from "@/components/dashboard/workers/Workers";
import { useState } from "react";
import AddTask from "@/components/dashboard/AddTask";
import AddWorker from "./AddWorker";

const Employers = () => {
  const [show, setShow] = useState(false);
  const handlleShow = () => {
    setShow(true);
  };
  const closeShow = () => {
    setShow(false);
  };
  return (
    <div className="relative">
      <div className="flex justify-end items-center w-[90%] mb-[16px]">
        <span className=" w-[82%] h-[3px] bg-[#D9D9D9]"></span>
        <div className="flex items-center">
          <button
            className="flex items-center gap-2 bg-[#FE7F26] px-[10px] py-[6px] rounded-[12px] w-[160px]"
            onClick={handlleShow}
          >
            Add worker
          </button>
        </div>
      </div>
      <ul className="flex flex-col w-[96%]">
        <li className="flex mb-[10px]">
          <span className="w-[114px]"></span>
          <span className="text-[#6B6B6B] w-[210px] font-medium">
            Full Name
          </span>
          <span className="text-[#6B6B6B] w-[246px] font-medium">
            Speciality
          </span>
          <span className="text-[#6B6B6B] w-[234px] font-medium">Status</span>
          <span className="text-[#6B6B6B] font-medium">Rating</span>
        </li>
        <AddWorker
          show={show}
          handlleShow={handlleShow}
          closeShow={closeShow}
        />

        <Workers />
      </ul>
    </div>
  );
};

export default Employers;
