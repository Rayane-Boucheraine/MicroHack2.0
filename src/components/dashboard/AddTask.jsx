"use client";
import Image from "next/image";
import { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { getEmployers, addTask } from "@/lib/mockApi";

const AddTask = ({ show, closeShow }) => {
  const queryClient = useQueryClient();
  const [name, setName] = useState("");
  const [status, setStatus] = useState("Urgent");
  const [job, setJob] = useState("Plumber");
  const [selectedWorker, setSelectedWorker] = useState(null);
  const {
    isLoading,
    error,
    data: workersData,
  } = useQuery("employers", getEmployers);
  return (
    show && (
      <div className="z-100">
        <div className="fixed left-0 top-0  opacity-60 bg-[#3F3E3E] min-h-[100vh] w-[100%] z-20"></div>
        <div className="fixed z-50 flex gap-4 rounded-[10px] flex-col top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#FFF] py-[20px] px-[20px] max-md:w-[86%]">
          <h1 className="font-semibold">Task Information</h1>
          <form className="flex flex-col gap-6">
            <input
              type="text"
              name="name"
              id="name"
              className="bg-[#D9D9D9] rounded-[10px] py-[10px] px-[16px] placeholder:text-[#6B6B6B] outline-none"
              placeholder="Write the task..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="flex justify-between">
              <select
                name="status"
                id="status"
                className="bg-[#D9D9D9] w-[46%] px-[16px] py-[6px] rounded-[10px]"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Urgent">Urgent</option>
                <option value="Moderete">Moderete</option>
                <option value="Not Urgent">Not Urgent</option>
              </select>
              <select
                name="job"
                id="job"
                className="bg-[#D9D9D9] w-[46%] px-[16px] py-[6px] rounded-[10px]"
                value={job}
                onChange={(e) => setJob(e.target.value)}
              >
                <option value="Plumber">Plumber</option>
                <option value="Mason">Mason</option>
                <option value="Carpenter">Carpenter</option>
                <option value="General">General</option>
              </select>
            </div>
            <label htmlFor="">Choose a worker to solve it</label>
            <ul className="grid grid-cols-2	gap-[10px]">
              {workersData?.employes?.map((worker, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => setSelectedWorker(worker.id)}
                    className={`cursor-pointer rounded-[16px] flex items-center gap-2 bg-[#F1F1F1] py-[6px] w-[200px] px-[10px] max-md:w-[150px] hover:border-[1px] hover:border-[#FE7F26] ${selectedWorker === worker.id ? "border-[#FE7F26] border" : ""}`}
                  >
                    <img src={worker.img || "/Header/human.svg"} alt={`${worker.first_name} ${worker.last_name}`} className=" rounded-[50%] w-[36px] h-[36px] object-cover" />
                    <div className="flex flex-col">
                      <span className=" font-semibold text-[13px]">
                        {worker.first_name} {worker.last_name}
                      </span>
                      <span className="text-[10px] text-[#FE7F26]">{worker.status}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
            <button className="rounded-[20px] bg-[#F1F1F1] text-[#6B6B6B] py-[8px] text-[#141414] font-medium text-[14px]">
              Auto choose best fit
            </button>
            <button
              className="rounded-[20px] bg-[#FE7F26] py-[8px] text-[14px]"
              onClick={(e) => {
                e.preventDefault();
                addTask({
                  description: name,
                  importance: status,
                  speciality: job,
                  employe_id: selectedWorker,
                }).then(() => {
                  queryClient.invalidateQueries(["tasks"]);
                  closeShow();
                });
              }}
            >
              Confirm
            </button>
          </form>
          <span className="absolute top-[-10px] right-[-10px] flex items-center justify-center w-[30px] h-[30px] border-[1px] border-[black] rounded-[50%] bg-[#FE7F26] cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
              onClick={closeShow}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </span>
        </div>
      </div>
    )
  );
};

export default AddTask;
