import Aside from "@/components/dashboard/Aside";
import Header from "@/components/dashboard/Header";

const layout = ({ children }) => {
  return (
    <div className="px-[16px] py-[16px] flex gap-[20px] bg-[#EEEEEE] w-[100%] min-h-[100vh]">
      <Aside />
      <div className="w-[84%] ml-[18%]">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default layout;