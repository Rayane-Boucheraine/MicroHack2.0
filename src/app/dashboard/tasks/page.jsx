import ty_pe from "../../../../public/tasks/type.svg";
import Tasks from "../../../components/dashboard/tasks/Tasks.jsx";
import Image from "next/image";

const Task = () => {
  return (
    <div className="relative">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white/80">
          <Image src={ty_pe} alt="Tasks" className="h-6 w-6" />
          <h2 className="text-xl font-semibold">All Tasks</h2>
        </div>
      </div>
      <Tasks />
    </div>
  );
};

export default Task;
