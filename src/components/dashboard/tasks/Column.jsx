import Image from "next/image";
import add from "../../../../public/Header/human.svg";

const Column = ({ state, color, data }) => {
  if (state === "en-cours-exucution") {
    state = "Ongoing";
  }
  if (state === "finish") {
    state = "Finished";
  }
  if (state === "probleme") {
    state = "Problems";
  }
  if (state === "ready") {
    state = "Ready";
  }
  return (
    <div className="w-[25%] max-md:w-[100%]">
      <div className="relative mb-3 flex items-center rounded-xl border border-white/10 bg-white/5 px-4 py-3">
        <span className="flex items-center text-[18px] text-white">
          {state}{" "}
          <span className="ml-2 flex h-[20px] w-[28px] items-center justify-center rounded-full border border-white/20 text-[12px] text-white/70">
            {data?.length}
          </span>{" "}
        </span>
        <span
          className="absolute right-4 h-[12px] w-[12px] rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
      <ul>
        {state === "Ready" &&
          data?.map((task, index) => (
            <li
              key={index}
              className="mb-[12px] rounded-[12px] border border-white/10 bg-white/5 p-[16px] duration-300 hover:border-[#FE7F26]"
            >
              <div className="flex justify-between mb-[8px]">
                <div className="text-[12px] text-white/80">
                  {task.speciality} |{" "}
                  <span className="text-[#FE7F26]">{task.importance}</span>
                </div>
                <div>
                  {task?.employes?.length > 0 && (
                    <Image
                      src={add}
                      alt="Assigned"
                      className="w-[26px] h-[26px] rounded-[50%]"
                    />
                  )}
                </div>
              </div>
              <div className="relative">
                <p className="flex items-center text-[15px] text-white">
                  <span className="absolute h-[10px] w-[10px] rounded-full bg-[#D9D9D9]"></span>
                  <span className="pl-[20px]">{task.description}</span>
                </p>
              </div>
            </li>
          ))}

        {state === "Ongoing" &&
          data?.map((task, index) => (
            <li
              key={index}
              className="mb-[12px] rounded-[12px] border border-white/10 bg-white/5 p-[16px] duration-300 hover:border-[#FE7F26]"
            >
              <div className="flex justify-between mb-[8px]">
                <div className="text-[12px] text-white/80">
                  {task.speciality} |{" "}
                  <span className="text-[#FE7F26]">{task.importance}</span>
                </div>
                <div>
                  {task?.employes?.length > 0 && (
                    <Image
                      src={add}
                      alt="Assigned"
                      className="w-[26px] h-[26px] rounded-[50%]"
                    />
                  )}
                </div>
              </div>
              <p className="flex items-center text-[15px] text-white">
                <span className="absolute h-[10px] w-[10px] rounded-full bg-[#FFBB38]"></span>
                <span className="pl-[20px]">{task.description}</span>
              </p>
            </li>
          ))}

        {state === "Finished" &&
          data?.map((task, index) => (
            <li
              key={index}
              className="mb-[12px] rounded-[12px] border border-white/10 bg-white/5 p-[16px] duration-300 hover:border-[#FE7F26]"
            >
              <div className="flex justify-between mb-[8px]">
                <div className="text-[12px] text-white/80">
                  {task.speciality} |{" "}
                  <span className="text-[#FE7F26]">{task.importance}</span>
                </div>
                <div>
                  {task?.employes?.length > 0 && (
                    <Image
                      src={add}
                      alt="Assigned"
                      className="w-[26px] h-[26px] rounded-[50%]"
                    />
                  )}
                </div>
              </div>
              <p className="flex items-center text-[15px] text-white">
                <span className="absolute h-[10px] w-[10px] rounded-full bg-[#41D4A8]"></span>
                <span className="pl-[20px]">{task.description}</span>
              </p>
            </li>
          ))}

        {state === "Problems" &&
          data?.map((task, index) => (
            <li
              key={index}
              className="mb-[12px] rounded-[12px] border border-white/10 bg-white/5 p-[16px] duration-300 hover:border-[#FE7F26]"
            >
              <div className="flex justify-between mb-[8px]">
                <div className="text-[12px] text-white/80">
                  {task.speciality} |{" "}
                  <span className="text-[#FE7F26]">{task.importance}</span>
                </div>
                <div>
                  {task?.employes?.length > 0 && (
                    <Image
                      src={add}
                      alt="Assigned"
                      className="w-[26px] h-[26px] rounded-[50%]"
                    />
                  )}
                </div>
              </div>
              <p className="flex items-center text-[15px] text-white">
                <span className="absolute h-[10px] w-[10px] rounded-full bg-[#FC1414]"></span>
                <span className="pl-[20px]">{task.description}</span>
              </p>
            </li>
          ))}
        {data?.length === 0 && (
          <li className="rounded-xl border border-white/10 bg-white/5 p-4 text-center text-white/60">
            No items
          </li>
        )}
      </ul>
    </div>
  );
};

export default Column;
