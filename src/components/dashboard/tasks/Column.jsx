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
    <div className="w-[25%]">
      <div className="relative flex items-center bg-[#FFFFFF] py-[12px] px-[20px] rounded-[10px] mb-[12px]">
        <span className="text-[20px] flex items-center text-[#6B6B6B]">
          {state}{" "}
          <span className="w-[28px] h-[16xpx] text-[15px] rounded-[50%] flex items-center justify-center text-[#E4E4E4] border-[solid] border-[1px] border-[#E4E4E4] ml-[10px]">
            {data.length}
          </span>{" "}
        </span>
        <span
          className="absolute w-[14px] h-[14px] rounded-[50%] right-4"
          style={{ backgroundColor: color }}
        ></span>
      </div>
      <ul>
        {state === "Ready" &&
          data.map((task, index) => (
            <li
              key={index}
              className="bg-[#FFFFFF] p-[16px] rounded-[12px] mb-[12px]"
            >
              <div className="flex justify-between mb-[8px]">
                <div className="text-[12px]">
                  {task.speciality} |{" "}
                  <span className="text-[#FE7F26]">{task.importance}</span>
                </div>
                <div>
                  {task?.employes?.length > 0 && (
                    <Image
                      src={add}
                      className="w-[26px] h-[26px] rounded-[50%]"
                    />
                  )}
                </div>
              </div>
              <div className="relative">
                <p className="text-[15px] flex items-center">
                  <span className="absolute w-[10px] h-[10px] bg-[#D9D9D9] rounded-[50%]"></span>
                  <span className="pl-[20px]">{task.description}</span>
                </p>
              </div>
            </li>
          ))}

        {state === "Ongoing" &&
          data.map((task, index) => (
            <li
              key={index}
              className="bg-[#FFFFFF] p-[16px] rounded-[12px] mb-[12px]"
            >
              <div className="flex justify-between mb-[8px]">
                <div className="text-[12px]">
                  {task.speciality} |{" "}
                  <span className="text-[#FE7F26]">{task.importance}</span>
                </div>
                <div>
                  {task?.employes?.length > 0 && (
                    <Image
                      src={add}
                      className="w-[26px] h-[26px] rounded-[50%]"
                    />
                  )}
                </div>
              </div>
              <p className="text-[15px] flex items-center">
                <span className="absolute w-[10px] h-[10px] bg-[#FFBB38] rounded-[50%]"></span>
                <span className="pl-[20px]">{task.description}</span>
              </p>
            </li>
          ))}

        {state === "Finished" &&
          data.map((task, index) => (
            <li
              key={index}
              className="bg-[#FFFFFF] p-[16px] rounded-[12px] mb-[12px]"
            >
              <div className="flex justify-between mb-[8px]">
                <div className="text-[12px]">
                  {task.speciality} |{" "}
                  <span className="text-[#FE7F26]">{task.importance}</span>
                </div>
                <div>
                  {task?.employes?.length > 0 && (
                    <Image
                      src={add}
                      className="w-[26px] h-[26px] rounded-[50%]"
                    />
                  )}
                </div>
              </div>
              <p className="text-[15px] flex items-center">
                <span className="absolute w-[10px] h-[10px] bg-[#41D4A8] rounded-[50%]"></span>
                <span className="pl-[20px]">{task.description}</span>
              </p>
            </li>
          ))}

        {state === "Problems" &&
          data.map((task, index) => (
            <li
              key={index}
              className="bg-[#FFFFFF] p-[16px] rounded-[12px] mb-[12px]"
            >
              <div className="flex justify-between mb-[8px]">
                <div className="text-[12px]">
                  {task.speciality} |{" "}
                  <span className="text-[#FE7F26]">{task.importance}</span>
                </div>
                <div>
                  {task?.employes?.length > 0 && (
                    <Image
                      src={add}
                      className="w-[26px] h-[26px] rounded-[50%]"
                    />
                  )}
                </div>
              </div>
              <p className="text-[15px] flex items-center">
                <span className="absolute w-[10px] h-[10px] bg-[#FC1414] rounded-[50%]"></span>
                <span className="pl-[20px]">{task.description}</span>
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Column;
