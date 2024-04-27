"use client";
import Image from "next/image";
import ty_pe from "../../../../public/tasks/type.svg";
import Workers from "@/components/dashboard/workers/Workers";
import { useState } from "react";

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
      <div className="flex justify-end items-center w-[90%] max-md:w-[98%] mb-[16px]">
        <button
          className="flex items-center gap-2 bg-[#FE7F26] px-[10px] py-[6px] rounded-[12px] w-[160px] max-md:w-[140px]"
          onClick={handlleShow}
        >
          Add Task
        </button>
      </div>
      <ul className="flex flex-col w-[96%] max-md:w-[100%]">
        <li className="flex mb-[10px]">
          <span className="w-[114px]"></span>
          <span className="text-[#6B6B6B] w-[210px] max-md:w-[160px] font-medium max-md:text-[14px]">
            Full Name
          </span>
          <span className="text-[#6B6B6B] md:w-[246px] max-md:w-[170px] font-medium max-md:text-[14px]">
            Speciality
          </span>
          <span className="text-[#6B6B6B] w-[234px] max-md:w-[120px] font-medium max-md:text-[14px]">
            Status
          </span>
          <span className="text-[#6B6B6B] font-medium max-md:pr-[10px]">
            Rating
          </span>
        </li>
        <Workers />
      </ul>
    </div>
  );
};

export default Employers;
