"use client";
import React from "react";
import { useQuery } from "react-query";
import Image from "next/image";
import { BACKEND_URL } from "@/data/data";

const Workers = () => {
  const { isLoading, error, data } = useQuery("employers", async () => {
    const response = await fetch(`${BACKEND_URL}/users/get_all_employes/`);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    return await response.json();
  });
  console.log(data);

  return (
    <>
      {isLoading && <p>Loading data...</p>}
      {error && <p className="text-red-500">Error: {error.message}</p>}
      {data && (
        <ul>
          {data?.map((employ) => (
            <li
              key={employ.id}
              className="flex justify-between items-center bg-[#FFFFFF] px-[30px] py-[16px] mb-[10px] rounded-[16px]"
            >
              <span className="flex items-center w-[200px] text-center">
                <Image src={employ.img} className="rounded-[50%] w-[40px]" />
                <span className="font-semibold pl-[40px]">
                  {employ.username}
                </span>
              </span>
              <span className="font-semibold w-[200px] text-center">
                {employ.speciality}
              </span>
              <span className="font-semibold w-[200px] text-center">
                {employ.status}
              </span>
              <span className="flex gap-1 text-[#FE7F26] w-[200px] text-center items-center justify-center">
                {employ.rank}
              </span>
              {/* <button className="text-[#FE7F26] rounded-[10px] px-[40px] py-[4px] border-[solid] border-[1px] border-[#FE7F26] rounded-[16px]">
                Show Profile
              </button> */}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Workers;
