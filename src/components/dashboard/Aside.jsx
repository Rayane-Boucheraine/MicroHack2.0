"use client";
import { links1, links2 } from "@/data/data";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/Logo.svg";
import logout from "../../../public/Aside/Logout.svg";
import { usePathname } from "next/navigation";

const Aside = ({ open = false, onClose = () => {} }) => {
  const pathName = usePathname();

  // classes: desktop visible; mobile slides in
  const panelBase =
    "fixed left-0 top-0 z-30 h-screen w-[82%] max-w-[260px] bg-[#0f0f10] border-r border-white/10 p-4 md:fixed md:left-0 md:top-0 md:bottom-0 md:h-[95vh] md:w-[260px] md:ml-4 md:my-4 md:rounded-[16px] md:bg-white/5 md:backdrop-blur-md";
  const mobileState = open ? "translate-x-0" : "-translate-x-full";

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-20 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={onClose}
        />
      )}
      <aside className={`${panelBase} transition-transform duration-300 md:translate-x-0 ${mobileState}`}>
        <div className="flex items-center justify-between pb-4">
          <div className="flex items-center gap-2">
            <Image src={Logo} alt="BuildFlow Logo" className="w-[128px]" />
          </div>
          <button
            className="rounded-lg p-2 text-white/70 hover:bg-white/10 md:hidden"
            aria-label="Close sidebar"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="space-y-4">
          <span className="px-2 text-xs uppercase tracking-wider text-white/50">Main</span>
          <nav className="flex flex-col gap-1">
          {links1.map((link, index) => {
            const active = pathName === link.href;
            return (
              <Link
                key={index}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`group relative flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FE7F26]/60 ${
                  active
                    ? "bg-[#FE7F26]/15 text-white"
                    : "text-white/85 hover:bg-white/5"
                }`}
                onClick={onClose}
              >
                <span className={`absolute left-0 top-1/2 h-5 -translate-y-1/2 rounded-r ${active ? "w-1 bg-[#FE7F26]" : "w-0"}`} />
                <span className={`flex h-7 w-7 items-center justify-center rounded-md ${active ? "bg-[#FE7F26]/25" : "bg-white/5 group-hover:bg-white/10"}`}>
                  <Image src={link.icon} alt="" className="h-4 w-4 opacity-90" />
                </span>
                <span className="font-medium">{link.name}</span>
              </Link>
            );
          })}
          </nav>
        </div>
        <div className="my-4 h-px w-full bg-white/10" />
        <div className="space-y-2">
          <span className="px-2 text-xs uppercase tracking-wider text-white/50">General</span>
          <nav className="flex flex-col gap-1">
          {links2.map((link, index) => {
            const active = pathName === link.href;
            return (
              <Link
                key={index}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`group relative flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FE7F26]/60 ${
                  active
                    ? "bg-[#FE7F26]/15 text-white"
                    : "text-white/85 hover:bg-white/5"
                }`}
                onClick={onClose}
              >
                <span className={`absolute left-0 top-1/2 h-5 -translate-y-1/2 rounded-r ${active ? "w-1 bg-[#FE7F26]" : "w-0"}`} />
                <span className={`flex h-7 w-7 items-center justify-center rounded-md ${active ? "bg-[#FE7F26]/25" : "bg-white/5 group-hover:bg-white/10"}`}>
                  <Image src={link.icon} alt="" className="h-4 w-4 opacity-90" />
                </span>
                <span className="font-medium">{link.name}</span>
              </Link>
            );
          })}
          </nav>
        </div>
        <div className="mt-auto" />
        <div className="pt-3">
          <button className="inline-flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm text-white/85 hover:bg-white/5">
            <Image src={logout} alt="Logout" className="h-5 w-5 opacity-90" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Aside;
