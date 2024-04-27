import { tasksReady } from "@/data/data";
import { tasksOngoing } from "@/data/data";
import { tasksFinished } from "@/data/data";
import { problemss } from "@/data/data";
import Image from "next/image";

const Column = ({ state, color }) => {
  return (
    <div className="w-[25%] max-md:w-[100%]">
      <div className="relative flex items-center bg-[#FFFFFF] py-[12px] px-[20px] rounded-[10px] mb-[12px]">
        <span className="text-[20px] flex items-center text-[#6B6B6B]">
          {state}{" "}
          <span className="w-[28px] h-[16xpx] text-[15px] rounded-[50%] flex items-center justify-center text-[#E4E4E4] border-[solid] border-[1px] border-[#E4E4E4] ml-[10px]">
            2
          </span>{" "}
        </span>
        <span
          className="absolute w-[14px] h-[14px] rounded-[50%] right-4"
          style={{ backgroundColor: color }}
        ></span>
      </div>
      <ul>
        {state === "Ready" &&
          tasksReady.map((task, index) => (
            <li
              key={index}
              className="bg-[#FFFFFF] p-[16px] rounded-[12px] mb-[12px] duration-300 hover:border-[1px] hover:border-[#FE7F26]"
            >
              <div className="flex justify-between mb-[8px]">
                <div className="text-[12px]">
                  {task.job} |{" "}
                  <span className="text-[#FE7F26]">{task.status}</span>
                </div>
                <div>
                  <Image
                    src={task.img}
                    className="w-[26px] h-[26px] rounded-[50%]"
                  />
                </div>
              </div>
              <div className="relative">
                <p className="text-[15px] flex items-center">
                  <span className="absolute w-[10px] h-[10px] bg-[#D9D9D9] rounded-[50%]"></span>
                  <span className="pl-[20px]">{task.taskInfo}</span>
                </p>
              </div>
            </li>
          ))}

        {state === "Ongoing" &&
          tasksOngoing.map((task, index) => (
            <li
              key={index}
              className="bg-[#FFFFFF] p-[16px] rounded-[12px] mb-[12px] duration-300 hover:border-[1px] hover:border-[#FE7F26]"
            >
              <div className="flex justify-between mb-[8px]">
                <div className="text-[12px]">
                  {task.job} |{" "}
                  <span className="text-[#FE7F26]">{task.status}</span>
                </div>
                <div>
                  <Image
                    src={task.img}
                    className="w-[26px] h-[26px] rounded-[50%]"
                  />
                </div>
              </div>
              <p className="text-[15px] flex items-center">
                <span className="absolute w-[10px] h-[10px] bg-[#FFBB38] rounded-[50%]"></span>
                <span className="pl-[20px]">{task.taskInfo}</span>
              </p>
            </li>
          ))}

        {state === "Finished" &&
          tasksFinished.map((task, index) => (
            <li
              key={index}
              className="bg-[#FFFFFF] p-[16px] rounded-[12px] mb-[12px] duration-300 hover:border-[1px] hover:border-[#FE7F26]"
            >
              <div className="flex justify-between mb-[8px]">
                <div className="text-[12px]">
                  {task.job} |{" "}
                  <span className="text-[#FE7F26]">{task.status}</span>
                </div>
                <div>
                  <Image
                    src={task.img}
                    className="w-[26px] h-[26px] rounded-[50%]"
                  />
                </div>
              </div>
              <p className="text-[15px] flex items-center">
                <span className="absolute w-[10px] h-[10px] bg-[#41D4A8] rounded-[50%]"></span>
                <span className="pl-[20px]">{task.taskInfo}</span>
              </p>
            </li>
          ))}

        {state === "Problems" &&
          problemss.map((task, index) => (
            <li
              key={index}
              className="bg-[#FFFFFF] p-[16px] rounded-[12px] mb-[12px] duration-300 hover:border-[1px] hover:border-[#FE7F26]"
            >
              <div className="flex justify-between mb-[8px]">
                <div className="text-[12px]">
                  {task.job} |{" "}
                  <span className="text-[#FE7F26]">{task.status}</span>
                </div>
                <div>
                  <Image
                    src={task.img}
                    className="w-[26px] h-[26px] rounded-[50%]"
                  />
                </div>
              </div>
              <p className="text-[15px] flex items-center">
                <span className="absolute w-[10px] h-[10px] bg-[#FC1414] rounded-[50%]"></span>
                <span className="pl-[20px]">{task.taskInfo}</span>
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Column;
