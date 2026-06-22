"use client";

import { useState } from "react";
import { Search, Filter, MoreHorizontal, ChevronDown, Plus, UserCircle2 } from "lucide-react";
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
const mockCustomers = [
  {
    id: "CUST-001",
    name: "Alice Freeman",
    email: "alice.f@example.com",
    phone: "+91 98765 43210",
    totalOrders: 12,
    totalSpent: "₹4,12,000.00",
    status: "active",
    avatar: "/Hero/hero3.webp",
    joinDate: "Jan 12, 2024"
  },
  {
    id: "CUST-002",
    name: "David Chen",
    email: "david.c@example.com",
    phone: "+91 98765 43211",
    totalOrders: 3,
    totalSpent: "₹1,89,990.00",
    status: "active",
    avatar: "/top/top1.webp",
    joinDate: "Mar 05, 2024"
  },
  {
    id: "CUST-003",
    name: "Sarah Jones",
    email: "sarah.j@example.com",
    phone: "+91 98765 43212",
    totalOrders: 0,
    totalSpent: "₹0.00",
    status: "inactive",
    avatar: "/top/top5.webp",
    joinDate: "Sep 22, 2024"
  },
  {
    id: "CUST-004",
    name: "Michael Ross",
    email: "m.ross@example.com",
    phone: "+91 98765 43213",
    totalOrders: 8,
    totalSpent: "₹3,45,500.00",
    status: "active",
    avatar: "/top/top2.webp",
    joinDate: "Nov 15, 2024"
  },
  {
    id: "CUST-005",
    name: "Emma Wilson",
    email: "emma.w@example.com",
    phone: "+91 98765 43214",
    totalOrders: 1,
    totalSpent: "₹2,89,990.00",
    status: "active",
    avatar: "",
    joinDate: "Dec 01, 2024"
  }
];

export default function AdminCustomerPage() {
  const [selectedCustomers, setSelectedCustomers] = useState<string[]>([]);

  const toggleSelectAll = () => {
    if (selectedCustomers.length === mockCustomers.length) {
      setSelectedCustomers([]);
    } else {
      setSelectedCustomers(mockCustomers.map((c) => c.id));
    }
  };

  const toggleSelect = (id: string) => {
    if (selectedCustomers.includes(id)) {
      setSelectedCustomers(selectedCustomers.filter((c) => c !== id));
    } else {
      setSelectedCustomers([...selectedCustomers, id]);
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
              placeholder="Search customers..." 
              className="flex-1 bg-transparent border-none outline-none py-2 text-[14px] text-[#181d26] placeholder:text-[#41454d]"
            />
          </div>
          <div className="flex items-center gap-3">
            {selectedCustomers.length > 0 && (
              <span className="text-[13px] text-[#41454d] font-medium">
                {selectedCustomers.length} selected
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
              Add Customer
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
                      checked={selectedCustomers.length === mockCustomers.length && mockCustomers.length > 0}
                      onCheckedChange={toggleSelectAll}
                      className="border-[#9297a0] data-[state=checked]:bg-[#181d26] data-[state=checked]:border-[#181d26] rounded-[4px]"
                    />
                  </TableHead>
                  <TableHead className="text-[12px] font-medium uppercase tracking-wider text-[#41454d]">Customer</TableHead>
                  <TableHead className="text-[12px] font-medium uppercase tracking-wider text-[#41454d]">Contact</TableHead>
                  <TableHead className="text-[12px] font-medium uppercase tracking-wider text-[#41454d]">Orders</TableHead>
                  <TableHead className="text-[12px] font-medium uppercase tracking-wider text-[#41454d] text-right">Total Spent</TableHead>
                  <TableHead className="text-[12px] font-medium uppercase tracking-wider text-[#41454d]">Status</TableHead>
                  <TableHead className="w-[80px] text-right text-[12px] font-medium uppercase tracking-wider text-[#41454d] px-6">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockCustomers.map((customer) => (
                  <TableRow key={customer.id} className="border-b border-[#dddddd] last:border-0 hover:bg-[#f8fafc] transition-colors">
                    <TableCell className="px-6 py-4">
                      <Checkbox 
                        checked={selectedCustomers.includes(customer.id)}
                        onCheckedChange={() => toggleSelect(customer.id)}
                        className="border-[#9297a0] data-[state=checked]:bg-[#181d26] data-[state=checked]:border-[#181d26] rounded-[4px]"
                      />
                    </TableCell>
                    <TableCell className="py-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10 border border-[#dddddd]">
                          {customer.avatar ? (
                            <AvatarImage src={customer.avatar} alt={customer.name} className="object-cover" />
                          ) : (
                            <AvatarFallback className="bg-[#f8fafc] text-[#41454d]">
                              <UserCircle2 className="w-5 h-5" />
                            </AvatarFallback>
                          )}
                        </Avatar>
                        <div className="flex flex-col">
                          <span className="text-[14px] font-medium text-[#181d26] leading-tight">{customer.name}</span>
                          <span className="text-[12px] text-[#9297a0] mt-0.5">Joined {customer.joinDate}</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="py-4">
                      <div className="flex flex-col">
                        <span className="text-[13px] text-[#181d26] leading-tight">{customer.email}</span>
                        <span className="text-[12px] text-[#9297a0] mt-0.5">{customer.phone}</span>
                      </div>
                    </TableCell>
                    <TableCell className="py-4">
                      <span className="text-[14px] font-medium text-[#181d26]">{customer.totalOrders}</span>
                    </TableCell>
                    <TableCell className="py-4 text-right">
                      <span className="text-[14px] font-medium text-[#181d26]">{customer.totalSpent}</span>
                    </TableCell>
                    <TableCell className="py-4">
                      {customer.status === "active" ? (
                        <div className="flex items-center gap-1.5 px-2 py-1 rounded-[6px] w-fit bg-[#e6f4ea] text-[#137333]">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#137333]"></div>
                          <span className="text-[12px] font-medium tracking-wide">Active</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5 px-2 py-1 rounded-[6px] w-fit bg-[#f1f3f4] text-[#41454d]">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#9297a0]"></div>
                          <span className="text-[12px] font-medium tracking-wide">Inactive</span>
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
                            View Profile
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-[13px] text-[#181d26] rounded-[6px] focus:bg-[#f8fafc] cursor-pointer">
                            Email Customer
                          </DropdownMenuItem>
                          <DropdownMenuSeparator className="bg-[#dddddd] my-1" />
                          <DropdownMenuItem className="text-[13px] text-[#c5221f] rounded-[6px] focus:bg-[#fce8e6] cursor-pointer">
                            Delete Customer
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
              Showing <strong>1</strong> to <strong>5</strong> of <strong>173,247</strong> customers
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
                  <PaginationLink href="#" className="h-8 w-8 text-[13px] rounded-[6px] hover:bg-[#f8fafc] text-[#41454d]">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" className="h-8 w-8 text-[13px] rounded-[6px] hover:bg-[#f8fafc] text-[#41454d]">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis className="w-8 h-8 text-[#9297a0]" />
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
