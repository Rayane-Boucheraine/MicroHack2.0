import { Employers } from '@/data/data';
import Image from 'next/image';

const Workers = () => {
  return (
    <>
      {Employers.map((employ, index) => {
        return (
          <li
            key={index}
            className="flex justify-between items-center bg-[#FFFFFF] px-[30px] py-[16px] mb-[10px] rounded-[16px] max-md:px-[10px]"
          >
            <span className="flex items-center text-center md:w-[200px]">
              <Image src={employ.img} className="rounded-[50%] w-[40px]" />
              <span className="font-semibold pl-[40px] max-md:pl-[10px] max-md:text-[14px]">
                {employ.name}
              </span>
            </span>
            <span className="font-semibold text-center max-md:text-[14px] md:w-[200px]">
              {employ.speciality}
            </span>
            <span className="font-semibold text-cente max-md:text-[14px] md:w-[200px]">
              {employ.status}
            </span>
            <span className="flex gap-1 text-[#FE7F26] text-center items-center justify-center max-md:text-[14px] md:w-[200px]">
              {employ.rating}
            </span>
            <button className="text-[#FE7F26] rounded-[10px] px-[40px] py-[4px] border-[solid] border-[1px] border-[#FE7F26] rounded-[16px] max-md:hidden">
              Show Profile
            </button>
          </li>
        );
      })}
    </>
  );
}

export default Workers