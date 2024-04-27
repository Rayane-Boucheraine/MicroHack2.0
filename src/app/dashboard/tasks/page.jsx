import ty_pe from "../../../../public/tasks/type.svg";
import Tasks from "../../../components/dashboard/tasks/Tasks.jsx";
import Image from "next/image";

const Task = () => {
  return (
    <div className="relative">
      <div className="flex justify-end items-center w-[90%] mb-[16px]">
        <span className="absolute w-[82%] h-[3px] bg-[#D9D9D9] left-0"></span>
      </div>
      <div>
        <Tasks />
      </div>
    </div>
  );
};

export default Task;
