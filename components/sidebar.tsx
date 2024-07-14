"use client";

import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="space-y-4 oy-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashobard" className="flex items-center pl-3 mb-14">
          <div className="relatvie w-8 h-8 mr-4">
            <Image fill alt="logo" src="/logo.png" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
