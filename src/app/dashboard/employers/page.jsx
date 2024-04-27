import Image from "next/image";
import ty_pe from "../../../../public/tasks/type.svg";
import Workers from "@/components/dashboard/workers/Workers";

const Employers = () => {
  return (
    <div className="relative">
      <div className="flex justify-end items-center w-[90%] max-md:w-[98%] mb-[16px]">
        <span className="absolute w-[82%] max-md:w-[74%] h-[3px] bg-[#D9D9D9] left-0"></span>
        <div className="flex items-center">
          <Image src={ty_pe} className="relative right-0" />
          All Tasks
        </div>
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
          <span className="text-[#6B6B6B] font-medium max-md:pr-[10px]">Rating</span>
        </li>
        <Workers />
      </ul>
    </div>
  );
};

export default Employers;
