import Image from "next/image";
import ty_pe from "../../../../public/tasks/type.svg";
import Workers from "@/components/dashboard/workers/Workers";

const Employers = () => {
  return (
    <div className="relative">
      <div className="flex justify-end items-center w-[90%] mb-[16px]">
        <span className="absolute w-[82%] h-[3px] bg-[#D9D9D9] left-0"></span>
        <div className="flex items-center">
          <Image src={ty_pe} className="relative right-0" />
          All Tasks
        </div>
      </div>
      <ul className="flex flex-col w-[96%]">
        <li className="flex mb-[10px]">
          <span className="w-[114px]"></span>
          <span className="text-[#6B6B6B] w-[210px] font-medium">Full Name</span>
          <span className="text-[#6B6B6B] w-[246px] font-medium">Speciality</span>
          <span className="text-[#6B6B6B] w-[234px] font-medium">Status</span>
          <span className="text-[#6B6B6B] font-medium">Rating</span>
        </li>
        <Workers />
      </ul>
    </div>
  );
};

export default Employers;
