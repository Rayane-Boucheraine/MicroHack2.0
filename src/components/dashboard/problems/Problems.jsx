import Image from "next/image";
import prob from "../../../../public/problems/prob.png";
import human from "../../../../public/Header/human.svg";
import { workers } from "@/data/data";

const Problems = () => {
  return (
    <div className="mb-[40px] flex w-full max-w-5xl items-center gap-[40px] rounded-[12px] border border-white/10 bg-white/5 p-[24px] max-md:flex-col max-md:px-[20px]">
      <div className="flex flex-1 flex-col gap-4">
        <Image src={prob} alt="Problem screenshot" className="rounded-xl" />
        <div>
          <div className="mb-[10px] flex items-center justify-between">
            <h2 className="relative pl-[26px] text-[18px] text-white after:absolute after:left-0 after:top-[50%] after:h-[8px] after:w-[8px] after:translate-y-[-50%] after:rounded-[50%] after:bg-[#FC1414]">
              Paint the walls on C2
            </h2>
            <Image src={human} alt="Reporter" className="h-[22px] w-[22px] rounded-[50%]" />
          </div>
          <p className="text-[14px] text-white/70">
            Analyzing project requirements and creating a budget. Analyzing project
            requirements and creating a budget.
          </p>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4">
        <h3 className="text-white/80">Choose a worker to solve it:</h3>
        <ul className="grid grid-cols-2 gap-[10px]">
          {workers.map((worker, index) => {
            return (
              <li
                key={index}
                className="flex cursor-pointer items-center gap-2 rounded-[16px] border border-white/10 bg-white/5 px-[10px] py-[6px] duration-300 hover:border-[#FE7F26] max-md:w-[160px]"
              >
                <Image
                  src={worker.img}
                  alt={worker.name}
                  className="h-[36px] w-[36px] rounded-[50%]"
                />
                <div className="flex flex-col">
                  <span className="text-[13px] font-semibold">{worker.name}</span>
                  <span className="text-[10px] text-[#FE7F26]">{worker.status}</span>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="flex gap-3">
          <button className="rounded-[20px] bg-[#FE7F26] px-4 py-[8px] text-[14px] font-medium text-[#141414]">
            Auto choose best fit
          </button>
          <button className="rounded-[20px] border border-white/10 bg-white/5 px-4 py-[8px] text-[14px] text-white/80">
            Ignore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Problems;
