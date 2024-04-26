import { Employers } from '@/data/data';
import Image from 'next/image';

const Workers = () => {
  return (
    <>
      {Employers.map((employ, index) => {
        return (
          <li key={index} className="flex justify-between items-center bg-[#FFFFFF] px-[30px] py-[16px] mb-[10px] rounded-[16px]">
            <span className="flex items-center w-[200px] text-center">
              <Image src={employ.img} className="rounded-[50%] w-[40px]" />
              <span className="font-semibold pl-[40px]">{employ.name}</span>
            </span>
            <span className="font-semibold w-[200px] text-center">
              {employ.speciality}
            </span>
            <span className="font-semibold w-[200px] text-center">
              {employ.status}
            </span>
            <span className="flex gap-1 text-[#FE7F26] w-[200px] text-center items-center justify-center">
              {employ.rating}
            </span>
            <button className="text-[#FE7F26] rounded-[10px] px-[40px] py-[4px] border-[solid] border-[1px] border-[#FE7F26] rounded-[16px]">
              Show Profile
            </button>
          </li>
        );
      })}
    </>
  );
}

export default Workers