"use client";

import { useState } from "react";
import { Search, Filter, MoreHorizontal, ChevronDown, Plus, UserCircle2, Shield, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// --- Mock Data ---
const mockMembers = [
  {
    id: "MEM-001",
    name: "Thomas Anderson",
    email: "thomas.a@klarone.com",
    role: "Administrator",
    status: "active",
    avatar: "/Hero/hero3.webp",
    lastActive: "2 mins ago"
  },
  {
    id: "MEM-002",
    name: "Jessica Taylor",
    email: "jessica.t@klarone.com",
    role: "Support Lead",
    status: "active",
    avatar: "/top/top1.webp",
    lastActive: "1 hour ago"
  },
  {
    id: "MEM-003",
    name: "Mark Johnson",
    email: "mark.j@klarone.com",
    role: "Editor",
    status: "invited",
    avatar: "/top/top5.webp",
    lastActive: "Never"
  },
  {
    id: "MEM-004",
    name: "Emily Davis",
    email: "emily.d@klarone.com",
    role: "Support Agent",
    status: "suspended",
    avatar: "/top/top2.webp",
    lastActive: "2 days ago"
  },
  {
    id: "MEM-005",
    name: "Alex Smith",
    email: "alex.s@klarone.com",
    role: "Editor",
    status: "active",
    avatar: "",
    lastActive: "5 mins ago"
  }
];

export default function AdminMembersPage() {
  const [selectedMembers, setSelectedMembers] = useState<string[]>([]);

  const toggleSelectAll = () => {
    if (selectedMembers.length === mockMembers.length) {
      setSelectedMembers([]);
    } else {
      setSelectedMembers(mockMembers.map((m) => m.id));
    }
  };

  const toggleSelect = (id: string) => {
    if (selectedMembers.includes(id)) {
      setSelectedMembers(selectedMembers.filter((m) => m !== id));
    } else {
      setSelectedMembers([...selectedMembers, id]);
    }
  };

  const getRoleIcon = (role: string) => {
    switch(role) {
      case 'Administrator': return <Shield className="w-3.5 h-3.5" />;
      case 'Support Lead': return <Settings className="w-3.5 h-3.5" />;
      default: return <User className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="flex flex-col gap-4 max-w-[1600px] mx-auto">
      
      {/* Main Table Card */}
      <Card className="border-[#dddddd] shadow-none rounded-[10px] overflow-hidden p-0 gap-0">
        
        {/* Table Toolbar */}
        <div className="p-4 border-b border-[#dddddd] bg-[#ffffff] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 w-full sm:max-w-xs bg-[#ffffff] rounded-[6px] border border-[#dddddd] px-3 focus-within:border-[#1b61c9] transition-colors">
            <Search className="w-4 h-4 text-[#41454d]" />
            <input 
              type="text" 
              placeholder="Search team members..." 
              className="flex-1 bg-transparent border-none outline-none py-2 text-[14px] text-[#181d26] placeholder:text-[#41454d]"
            />
          </div>
          <div className="flex items-center gap-3">
            {selectedMembers.length > 0 && (
              <span className="text-[13px] text-[#41454d] font-medium">
                {selectedMembers.length} selected
              </span>
            )}
            <Button variant="outline" className="h-9 px-3 rounded-[6px] border-[#dddddd] text-[#181d26] text-[13px] hover:bg-[#f8fafc] shadow-none flex items-center gap-1.5">
              Bulk Actions <ChevronDown className="w-3.5 h-3.5 text-[#9297a0]" />
            </Button>
            <Button variant="outline" className="h-9 px-3 rounded-[6px] border-[#dddddd] text-[#181d26] text-[13px] hover:bg-[#f8fafc] shadow-none flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5" />
              Filters
            </Button>
            <Button className="h-9 px-4 rounded-[6px] bg-[#181d26] hover:bg-[#0d1218] text-white text-[13px] font-medium shadow-none flex items-center gap-1.5">
              <Plus className="w-3.5 h-3.5" />
              Invite Member
            </Button>
          </div>
        </div>

        {/* Table Content */}
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-[#f8fafc] hover:bg-[#f8fafc] border-b border-[#dddddd]">
                <TableRow className="border-none hover:bg-transparent">
                  <TableHead className="w-[50px] px-6 text-[#41454d]">
                    <Checkbox 
                      checked={selectedMembers.length === mockMembers.length && mockMembers.length > 0}
                      onCheckedChange={toggleSelectAll}
                      className="border-[#9297a0] data-[state=checked]:bg-[#181d26] data-[state=checked]:border-[#181d26] rounded-[4px]"
                    />
                  </TableHead>
                  <TableHead className="text-[12px] font-medium uppercase tracking-wider text-[#41454d]">Member</TableHead>
                  <TableHead className="text-[12px] font-medium uppercase tracking-wider text-[#41454d]">Role</TableHead>
                  <TableHead className="text-[12px] font-medium uppercase tracking-wider text-[#41454d]">Last Active</TableHead>
                  <TableHead className="text-[12px] font-medium uppercase tracking-wider text-[#41454d]">Status</TableHead>
                  <TableHead className="w-[80px] text-right text-[12px] font-medium uppercase tracking-wider text-[#41454d] px-6">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockMembers.map((member) => (
                  <TableRow key={member.id} className="border-b border-[#dddddd] last:border-0 hover:bg-[#f8fafc] transition-colors">
                    <TableCell className="px-6 py-4">
                      <Checkbox 
                        checked={selectedMembers.includes(member.id)}
                        onCheckedChange={() => toggleSelect(member.id)}
                        className="border-[#9297a0] data-[state=checked]:bg-[#181d26] data-[state=checked]:border-[#181d26] rounded-[4px]"
                      />
                    </TableCell>
                    <TableCell className="py-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10 border border-[#dddddd]">
                          {member.avatar ? (
                            <AvatarImage src={member.avatar} alt={member.name} className="object-cover" />
                          ) : (
                            <AvatarFallback className="bg-[#f8fafc] text-[#41454d]">
                              <UserCircle2 className="w-5 h-5" />
                            </AvatarFallback>
                          )}
                        </Avatar>
                        <div className="flex flex-col">
                          <span className="text-[14px] font-medium text-[#181d26] leading-tight">{member.name}</span>
                          <span className="text-[12px] text-[#9297a0] mt-0.5">{member.email}</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="py-4">
                      <div className="flex items-center gap-2">
                        <div className="text-[#41454d]">
                          {getRoleIcon(member.role)}
                        </div>
                        <span className="text-[13px] text-[#181d26] font-medium">{member.role}</span>
                      </div>
                    </TableCell>
                    <TableCell className="py-4">
                      <span className="text-[13px] text-[#41454d]">{member.lastActive}</span>
                    </TableCell>
                    <TableCell className="py-4">
                      {member.status === "active" && (
                        <div className="flex items-center gap-1.5 px-2 py-1 rounded-[6px] w-fit bg-[#e6f4ea] text-[#137333]">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#137333]"></div>
                          <span className="text-[12px] font-medium tracking-wide">Active</span>
                        </div>
                      )}
                      {member.status === "invited" && (
                        <div className="flex items-center gap-1.5 px-2 py-1 rounded-[6px] w-fit bg-[#e8f0fe] text-[#1b61c9]">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#1b61c9]"></div>
                          <span className="text-[12px] font-medium tracking-wide">Invited</span>
                        </div>
                      )}
                      {member.status === "suspended" && (
                        <div className="flex items-center gap-1.5 px-2 py-1 rounded-[6px] w-fit bg-[#fce8e6] text-[#c5221f]">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#c5221f]"></div>
                          <span className="text-[12px] font-medium tracking-wide">Suspended</span>
                        </div>
                      )}
                    </TableCell>
                    <TableCell className="px-6 py-4 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-[6px] text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-[#e0e2e6] hover:text-[#181d26] h-8 w-8 p-0 text-[#41454d] border-none bg-transparent outline-none">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-[160px] rounded-[10px] border-[#dddddd] shadow-lg bg-[#ffffff] p-1">
                          <DropdownMenuLabel className="text-[11px] font-medium text-[#9297a0] uppercase tracking-wider px-2 py-1.5">Actions</DropdownMenuLabel>
                          <DropdownMenuItem className="text-[13px] text-[#181d26] rounded-[6px] focus:bg-[#f8fafc] cursor-pointer">
                            Edit Profile
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-[13px] text-[#181d26] rounded-[6px] focus:bg-[#f8fafc] cursor-pointer">
                            Change Role
                          </DropdownMenuItem>
                          <DropdownMenuSeparator className="bg-[#dddddd] my-1" />
                          <DropdownMenuItem className="text-[13px] text-[#c5221f] rounded-[6px] focus:bg-[#fce8e6] cursor-pointer">
                            Suspend Member
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          {/* Pagination */}
          <div className="px-4 py-3 border-t border-[#dddddd] bg-[#ffffff] flex items-center justify-between">
            <span className="text-[13px] text-[#41454d]">
              Showing <strong>1</strong> to <strong>5</strong> of <strong>12</strong> members
            </span>
            <Pagination className="justify-end w-auto">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" className="h-8 text-[13px] rounded-[6px] hover:bg-[#f8fafc] text-[#41454d]" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive className="h-8 w-8 text-[13px] rounded-[6px] bg-[#f8fafc] border border-[#dddddd] text-[#181d26] font-medium">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" className="h-8 text-[13px] rounded-[6px] hover:bg-[#f8fafc] text-[#41454d]" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>

        </CardContent>
      </Card>

    </div>
  );
}
