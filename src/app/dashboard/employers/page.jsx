"use client";
import Image from "next/image";
import ty_pe from "../../../../public/tasks/type.svg";
import Workers from "@/components/dashboard/workers/Workers";
import { useState } from "react";
import AddWorker from "@/components/dashboard/workers/AddWorker";

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
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white/80">
          <Image src={ty_pe} alt="Workers" className="h-6 w-6" />
          <h2 className="text-xl font-semibold">Workers</h2>
        </div>
        <button
          className="rounded-xl bg-gradient-to-r from-[#FE7F26] to-[#ff974d] px-4 py-2 font-medium text-[#141414] shadow-sm hover:opacity-95"
          onClick={handlleShow}
        >
          Add workers
        </button>
        <AddWorker show={show} closeShow={closeShow} />
      </div>
      <ul className="flex flex-col">
        <li className="mb-[10px] flex text-white/60">
          <span className="w-[114px]" />
          <span className="w-[210px] max-md:w-[160px] font-medium max-md:text-[14px]">
            Full Name
          </span>
          <span className="md:w-[246px] max-md:w-[170px] font-medium max-md:text-[14px]">
            Speciality
          </span>
          <span className="w-[234px] max-md:w-[120px] font-medium max-md:text-[14px]">
            Status
          </span>
          <span className="font-medium max-md:pr-[10px]">Rating</span>
        </li>
        <Workers />
      </ul>
    </div>
  );
};

export default Employers;
