"use client";
import React from "react";
import { useQuery } from "react-query";
import { getEmployers } from "@/lib/mockApi";

const Workers = () => {
  const { isLoading, error, data } = useQuery("employers", getEmployers);

  return (
    <>
      {isLoading && <p className="text-white/70">Loading workers…</p>}
      {error && <p className="text-red-400">Error: {`${error}`}</p>}
      {data && (
        <ul>
          {data.employes.map((employ) => (
            <li
              key={employ.id}
              className="mb-[10px] flex items-center justify-between rounded-[16px] border border-white/10 bg-white/5 px-[20px] py-[14px]"
            >
              <span className="flex items-center w-[200px]">
                {/* Use img tag to avoid external domain config */}
                <img
                  src={employ.img || "/Header/human.svg"}
                  alt={`${employ.first_name} ${employ.last_name}`}
                  className="h-[40px] w-[40px] rounded-full object-cover"
                />
                <span className="pl-[16px] font-semibold">
                  {employ.first_name} {employ.last_name}
                </span>
              </span>
              <span className="w-[200px] text-center font-medium text-white/80">
                {employ.speciality}
              </span>
              <span className="w-[200px] text-center font-medium text-white/80">
                {employ.status}
              </span>
              <span className="flex w-[200px] items-center justify-center gap-1 text-[#FE7F26]">
                {employ.rank}
              </span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Workers;
