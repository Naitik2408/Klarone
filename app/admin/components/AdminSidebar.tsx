"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  MessageSquare,
  Mail,
  BarChart2,
  GitMerge,
  Activity,
  UserCircle,
  Settings,
  Users2
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const NAV_ITEMS = [
  {
    title: "MAIN",
    items: [
      { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
      { name: "Product", href: "/admin/product", icon: Package },
      { name: "Order", href: "/admin/order", icon: ShoppingCart },
      { name: "Customer", href: "/admin/customer", icon: Users },
      { name: "Chat", href: "/admin/chat", icon: MessageSquare, badge: 2 },
    ]
  },
  {
    title: "OTHER",
    items: [
      { name: "Email", href: "/admin/email", icon: Mail, badge: 3 },
      { name: "Analytics", href: "/admin/analytics", icon: BarChart2 },
      { name: "Integration", href: "/admin/integration", icon: GitMerge },
      { name: "Performance", href: "/admin/performance", icon: Activity },
    ]
  },
  {
    title: "ACCOUNT",
    items: [
      { name: "Members", href: "/admin/members", icon: Users2 },
      { name: "Account", href: "/admin/account", icon: UserCircle },
      { name: "Setting", href: "/admin/setting", icon: Settings },
    ]
  }
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[260px] bg-[#ffffff] border-r border-[#dddddd] flex flex-col shrink-0">
      {/* Logo Area */}
      <div className="h-[88px] flex items-center px-6 border-b border-[#dddddd]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-[12px] flex items-center justify-center shadow-none overflow-hidden">
            <img src="/icon.webp" alt="Klarone Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="font-heading font-medium text-[18px] text-[#181d26] leading-tight">Klarone</h1>
            <p className="text-[11px] text-[#41454d] font-medium tracking-wide uppercase">Admin Panel</p>
          </div>
        </div>
      </div>

      {/* Nav Links */}
      <div className="flex-1 overflow-y-auto py-6 px-6 no-scrollbar">
        {NAV_ITEMS.map((section, idx) => (
          <div key={idx} className="mb-8 last:mb-0">
            <h2 className="text-[11px] font-medium text-[#41454d] tracking-wider mb-4 px-3">{section.title}</h2>
            <div className="flex flex-col gap-1">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-[6px] text-[14px] font-medium transition-all group ${
                      isActive 
                        ? "bg-[#f8fafc] text-[#181d26] border border-[#dddddd]" 
                        : "text-[#41454d] hover:bg-[#f8fafc] hover:text-[#181d26] border border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-[18px] h-[18px] ${isActive ? "text-[#181d26]" : "text-[#41454d] group-hover:text-[#181d26]"}`} />
                      {item.name}
                    </div>
                    {item.badge && (
                      <Badge variant="destructive" className="w-5 h-5 flex items-center justify-center p-0 text-[10px] rounded-full leading-none">
                        {item.badge}
                      </Badge>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* User Profile */}
      <div className="p-6 border-t border-[#dddddd]">
        <div className="flex items-center gap-3 px-3 py-2 rounded-[10px] hover:bg-[#f8fafc] cursor-pointer transition-colors border border-transparent hover:border-[#dddddd]">
          <Avatar className="w-10 h-10">
            <AvatarImage src="/Hero/hero3.webp" alt="Rafatar" className="object-cover" />
            <AvatarFallback>RF</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="text-[14px] font-medium text-[#181d26] truncate">Rafatar</div>
            <div className="text-[12px] text-[#41454d] truncate">Fatar66@gmail.com</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
