import { workers } from "@/data/data";
import Image from "next/image";
import { useEffect, useState } from "react";

const AddWorker = ({ show, closeShow }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [last_name, setLast_name] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [profile_pic, setProfile_pic] = useState("");
  const [username, setUsername] = useState("");

  return (
    show && (
      <div className="z-100">
        <div className="fixed left-0 top-0  opacity-60 bg-[#3F3E3E] min-h-[100vh] w-[100%] z-20"></div>
        <div className="fixed z-50 flex gap-4 rounded-[10px] flex-col top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#FFF] p-[20px]">
          <h1 className="font-semibold">New worker</h1>
          <form className="flex flex-col gap-6">
            <input
              value={first_name}
              onChange={(e) => setFirst_name(e.target.value)}
              type="text"
              name="text"
              id="text"
              className="bg-[#D9D9D9] rounded-[10px] py-[10px] px-[16px] placeholder:text-[#6B6B6B] outline-none"
              placeholder="first name"
            />
            <input
              value={last_name}
              onChange={(e) => setLast_name(e.target.value)}
              type="text"
              name="text"
              id="text"
              className="bg-[#D9D9D9] rounded-[10px] py-[10px] px-[16px] placeholder:text-[#6B6B6B] outline-none"
              placeholder="first name"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              name="email"
              id="email"
              className="bg-[#D9D9D9] rounded-[10px] py-[10px] px-[16px] placeholder:text-[#6B6B6B] outline-none"
              placeholder="Email"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              className="bg-[#D9D9D9] rounded-[10px] py-[10px] px-[16px] placeholder:text-[#6B6B6B] outline-none"
              placeholder="Password"
            />

            <div className="flex justify-between">
              <form>
                <select
                  value={speciality}
                  onChange={(e) => setSpeciality(e.target.value)}
                  name="job"
                  id="job"
                  className="bg-[#D9D9D9]  px-[16px] py-[6px] rounded-[10px]"
                >
                  <option value="Plomber">Plomber</option>
                  <option value="Mason">Mason</option>
                  <option value="Carpunter">Carpunter</option>
                  <option value="Generale">Generale</option>
                </select>
                <br />
                <input
                  type="file"
                  value={profile_pic}
                  onChange={(e) => setProfile_pic(e.target.value)}
                  // Accepte uniquement les fichiers de type image
                  // onChange={handleImageChange}
                  className="mt-2" // Marge supplémentaire pour l'espacement
                />
              </form>
            </div>

            <button className="rounded-[20px] bg-[#FE7F26] py-[8px] text-[14px]">
              Confirm
            </button>
          </form>
          <span className="absolute top-[-10px] right-[-10px] flex items-center justify-center w-[30px] h-[30px] border-[1px] border-[black] rounded-[50%] bg-[#FE7F26] cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
              onClick={closeShow}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </span>
        </div>
      </div>
    )
  );
};

export default AddWorker;
