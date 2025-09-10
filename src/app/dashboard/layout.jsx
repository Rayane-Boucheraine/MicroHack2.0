"use client";
import Aside from "@/components/dashboard/Aside";
import Header from "@/components/dashboard/Header";
import { useState } from "react";

const layout = ({ children }) => {
  const [asideOpen, setAsideOpen] = useState(false);
  return (
    <div className="min-h-screen w-full bg-[#0b0c0f] text-white">
      {/* subtle bg gradient */}
      <div className="pointer-events-none fixed inset-0 bg-gradient-to-br from-[#FE7F26]/10 via-transparent to-transparent" />
      <div className="relative flex">
        <Aside open={asideOpen} onClose={() => setAsideOpen(false)} />
        <div className="ml-0 w-full md:ml-[280px]">
          <div className="px-5 pt-6">
            <Header onToggleAside={() => setAsideOpen(true)} />
          </div>
          <main className="px-5 pb-12">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default layout;
