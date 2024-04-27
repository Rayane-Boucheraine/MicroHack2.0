import Image from "next/image"
import prob from '../../../../public/problems/prob.png'
import human from '../../../../public/Header/human.svg'
import { workers } from "@/data/data";

const Problems = () => {
  return (
    <div className="flex gap-[60px] items-center bg-[#FFFFFF] w-fit p-[30px_60px] rounded-[8px] mb-[40px] max-md:flex-col max-md:px-[20px]">
      <div className="flex flex-col gap-4">
        <Image src={prob} className="" />
        <div>
          <div className="flex justify-between items-center  mb-[10px]">
            <h2 className="relative text-[18px] text-[#6B6B6B] after:absolute after:left-0 after:rounded-[50%] after:top-[50%] after:translate-y-[-50%]  after:w-[8px] after:h-[8px] after:bg-[#FC1414] pl-[26px]">
              Paint the walls on C2
            </h2>
            <Image src={human} className="w-[22px] h-[22px] rounded-[50%]" />
          </div>
          <p className="text-[#6B6B6B] text-[14px]">
            Analyzing project requirements and creating a <br /> budget.
            Analyzing project requirements and <br /> creating a budget.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-[#6B6B6B]">Choose a worker to solve it :</h3>
        <ul className="grid grid-cols-2	gap-[10px]">
          {workers.map((worker, index) => {
            return (
              <li
                key={index}
                className="cursor-pointer rounded-[16px] flex items-center gap-2 bg-[#F1F1F1] py-[6px] w-[200px] px-[10px] max-md:w-[160px] duration-300 hover:border-[1px] hover:border-[#FE7F26]"
              >
                <Image
                  src={worker.img}
                  className=" rounded-[50%] w-[36px] h-[36px]"
                />
                <div className="flex flex-col">
                  <span className=" font-semibold text-[13px]">
                    {worker.name}
                  </span>
                  <span className="text-[10px] text-[#FE7F26]">
                    {worker.status}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
        <button className="rounded-[20px] bg-[#FE7F26] py-[8px] text-[#141414] font-medium text-[14px]">
          Auto choose best fit
        </button>
        <button className="rounded-[20px] bg-[#F1F1F1] text-[#6B6B6B] py-[8px] text-[14px]">
          Ignore
        </button>
      </div>
    </div>
  );
}

export default Problems