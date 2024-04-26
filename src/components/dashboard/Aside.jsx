"use client"
import { links1, links2 } from '@/data/data';
import Link from 'next/link';
import Image from 'next/image';
import Logo from "../../../public/logo.svg"
import logout from "../../../public/Aside/Logout.svg";
import { usePathname } from 'next/navigation';

const Aside = () => {
  const pathName = usePathname()
  return (
    <aside className="fixed bottom-0 left-0 bg-[#FFFFFF] ml-[1%] w-[16%] h-[95vh] p-[40px_0] rounded-[26px] top-[50%] translate-y-[-50%]">
      <Image
        src={Logo}
        className="relative left-[50%] translate-x-[-50%] mb-[80px] w-[160px]"
      />
      <ul className="relative flex flex-col gap-4 w-[180px] left-[50%] translate-x-[-50%] after:absolute after:bottom-[-130px] after:left-[50%] after:translate-x-[-50%] after:w-[100%] after:h-[3px] after:bg-[#D9D9D9]">
        {links1.map((link, index) => {
          return (
            <Link
              key={index}
              href={link.href}
              className={`px-[20px] py-[8px] rounded-[10px] flex items-center gap-4 duration-500  hover:bg-[#FE7F26] ${
                pathName === link.href && "bg-[#FE7F26]"
              }`}
            >
              <Image src={link.icon} />
              {link.name}
            </Link>
          );
        })}
      </ul>
      <ul className="relative flex flex-col gap-4 mt-[160px] w-[180px] left-[50%] translate-x-[-50%]">
        {links2.map((link, index) => {
          return (
            <Link
              key={index}
              href={link.href}
              className={`px-[20px] py-[8px] rounded-[10px] flex items-center gap-4 duration-500  hover:bg-[#FE7F26] ${
                pathName === link.href && "bg-[#FE7F26]"
              }`}
            >
              <Image src={link.icon} />
              {link.name}
            </Link>
          );
        })}
        <li>
          <button className="px-[20px] py-[8px] rounded-[10px] flex items-center gap-4">
            <Image src={logout} /> Logout
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default Aside