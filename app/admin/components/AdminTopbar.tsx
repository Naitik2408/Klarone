"use client";

import { Search, Calendar, Filter, Bell, Download, ChevronDown, Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function AdminTopbar() {
  return (
    <header className="h-[88px] bg-[#ffffff] border-b border-[#dddddd] flex items-center justify-between px-6 shrink-0">
      {/* Left: Search */}
      <div className="flex-1 max-w-md">
        <div className="bg-[#ffffff] rounded-full py-2.5 px-4 flex items-center gap-3 border border-[#dddddd] w-[280px] transition-all focus-within:border-[#1b61c9] hover:border-[#9297a0]">
          <Search className="w-[18px] h-[18px] text-[#41454d]" />
          <input 
            type="text" 
            placeholder="Smart Search..." 
            className="flex-1 bg-transparent border-none outline-none text-[14px] text-[#181d26] placeholder:text-[#41454d]"
          />
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-6">
        
        {/* Avatars */}
        <div className="hidden lg:flex items-center">
          <div className="flex -space-x-2 mr-2">
            <Avatar className="w-8 h-8 border-2 border-white">
              <AvatarImage src="/Hero/hero3.webp" className="object-cover" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <Avatar className="w-8 h-8 border-2 border-white">
              <AvatarImage src="/top/top1.webp" className="object-cover" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <Avatar className="w-8 h-8 border-2 border-white">
              <AvatarImage src="/top/top5.webp" className="object-cover" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <Avatar className="w-8 h-8 border-2 border-white">
              <AvatarImage src="/top/top2.webp" className="object-cover" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
          <Button size="icon" className="w-8 h-8 rounded-full border-2 border-white -ml-2 z-10">
            <Plus className="w-4 h-4" />
          </Button>
        </div>

        <div className="h-6 w-px bg-[#dddddd] hidden lg:block"></div>

        {/* Date Filter */}
        <button className="hidden sm:flex items-center gap-2 text-[14px] font-medium text-[#181d26] hover:text-[#1b61c9] transition-colors">
          <Calendar className="w-4 h-4 text-[#41454d]" />
          Last Month
          <ChevronDown className="w-4 h-4 text-[#41454d]" />
        </button>

        {/* Filter */}
        <button className="hidden sm:flex items-center gap-2 text-[14px] font-medium text-[#181d26] hover:text-[#1b61c9] transition-colors">
          <Filter className="w-4 h-4 text-[#41454d]" />
          Filter by
        </button>

        {/* Notifications */}
        <button className="relative p-2 text-[#41454d] hover:text-[#181d26] transition-colors border border-[#dddddd] rounded-[6px]">
          <Bell className="w-[18px] h-[18px]" />
          <span className="absolute top-1 right-1.5 w-2 h-2 bg-[#aa2d00] rounded-full border border-[#ffffff]"></span>
        </button>

        {/* Export Button */}
        <Button className="px-6 h-[44px] rounded-[12px] bg-[#181d26] hover:bg-[#0d1218] text-white text-[16px] font-medium flex items-center gap-2 shadow-none">
          <Download className="w-4 h-4" />
          Export
        </Button>

      </div>
    </header>
  );
}
