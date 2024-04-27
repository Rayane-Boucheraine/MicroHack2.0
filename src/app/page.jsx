"use client";

import Image from "next/image";
import logo from "../../public/logo.svg";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#EEEEEE] h-screen w-screen">
      <Image src={logo} className="mb-[40px]" />
      <form className="bg-[#FFFFFF] flex flex-col gap-8 p-[20px] rounded-[10px]">
        <label className=" font-semibold text-[18px]">
          Login to your account:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="w-[340px] bg-[#D9D9D9] px-[20px] py-[8px] placeholder:text-[#6B6B6B] rounded-[10px] outline-none"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="w-[340px] bg-[#D9D9D9] px-[20px] py-[8px] placeholder:text-[#6B6B6B] rounded-[10px] outline-none"
        />
        <input
          type="submit"
          value="Confirm"
          className="bg-[#FE7F26] w-fit mx-[auto] px-[24px] py-[6px] cursor-pointer rounded-[10px]"
        />
      </form>
    </div>
  );
}
