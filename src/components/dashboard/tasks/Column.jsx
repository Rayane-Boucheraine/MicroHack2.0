const Column = ({ state, color }) => {
  return (
    <div className="relative flex items-center bg-[#FFFFFF] w-[25%] py-[12px] px-[20px] rounded-[10px]">
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
  );
};

export default Column;
