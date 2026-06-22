"use client";

import { useState } from "react";
import { Search, Filter, MoreHorizontal, ChevronDown, CheckCircle2, Clock, XCircle, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
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
const mockOrders = [
  {
    id: "ORD-9081",
    customerName: "Alice Freeman",
    email: "alice.f@example.com",
    date: "Oct 24, 2025",
    status: "delivered",
    total: "₹3,49,900.00",
    items: 2,
    paymentMethod: "Credit Card"
  },
  {
    id: "ORD-9082",
    customerName: "David Chen",
    email: "david.c@example.com",
    date: "Nov 02, 2025",
    status: "processing",
    total: "₹1,89,990.00",
    items: 1,
    paymentMethod: "UPI"
  },
  {
    id: "ORD-9083",
    customerName: "Sarah Jones",
    email: "sarah.j@example.com",
    date: "Nov 05, 2025",
    status: "shipped",
    total: "₹1,45,000.00",
    items: 1,
    paymentMethod: "Net Banking"
  },
  {
    id: "ORD-9084",
    customerName: "Michael Ross",
    email: "m.ross@example.com",
    date: "Dec 10, 2025",
    status: "delivered",
    total: "₹1,65,990.00",
    items: 3,
    paymentMethod: "Credit Card"
  },
  {
    id: "ORD-9085",
    customerName: "Emma Wilson",
    email: "emma.w@example.com",
    date: "Jan 05, 2026",
    status: "cancelled",
    total: "₹2,89,990.00",
    items: 1,
    paymentMethod: "Refunded"
  }
];

export default function AdminOrderPage() {
  const [selectedOrders, setSelectedOrders] = useState<string[]>([]);

  const toggleSelectAll = () => {
    if (selectedOrders.length === mockOrders.length) {
      setSelectedOrders([]);
    } else {
      setSelectedOrders(mockOrders.map((o) => o.id));
    }
  };

  const toggleSelect = (id: string) => {
    if (selectedOrders.includes(id)) {
      setSelectedOrders(selectedOrders.filter((o) => o !== id));
    } else {
      setSelectedOrders([...selectedOrders, id]);
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
              placeholder="Search orders..." 
              className="flex-1 bg-transparent border-none outline-none py-2 text-[14px] text-[#181d26] placeholder:text-[#41454d]"
            />
          </div>
          <div className="flex items-center gap-3">
            {selectedOrders.length > 0 && (
              <span className="text-[13px] text-[#41454d] font-medium">
                {selectedOrders.length} selected
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
              <FileDown className="w-3.5 h-3.5" />
              Export
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
                      checked={selectedOrders.length === mockOrders.length && mockOrders.length > 0}
                      onCheckedChange={toggleSelectAll}
                      className="border-[#9297a0] data-[state=checked]:bg-[#181d26] data-[state=checked]:border-[#181d26] rounded-[4px]"
                    />
                  </TableHead>
                  <TableHead className="text-[12px] font-medium uppercase tracking-wider text-[#41454d]">Order ID</TableHead>
                  <TableHead className="text-[12px] font-medium uppercase tracking-wider text-[#41454d]">Customer</TableHead>
                  <TableHead className="text-[12px] font-medium uppercase tracking-wider text-[#41454d]">Date</TableHead>
                  <TableHead className="text-[12px] font-medium uppercase tracking-wider text-[#41454d]">Status</TableHead>
                  <TableHead className="text-[12px] font-medium uppercase tracking-wider text-[#41454d]">Payment</TableHead>
                  <TableHead className="text-[12px] font-medium uppercase tracking-wider text-[#41454d] text-right">Total</TableHead>
                  <TableHead className="w-[80px] text-right text-[12px] font-medium uppercase tracking-wider text-[#41454d] px-6">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockOrders.map((order) => (
                  <TableRow key={order.id} className="border-b border-[#dddddd] last:border-0 hover:bg-[#f8fafc] transition-colors">
                    <TableCell className="px-6 py-4">
                      <Checkbox 
                        checked={selectedOrders.includes(order.id)}
                        onCheckedChange={() => toggleSelect(order.id)}
                        className="border-[#9297a0] data-[state=checked]:bg-[#181d26] data-[state=checked]:border-[#181d26] rounded-[4px]"
                      />
                    </TableCell>
                    <TableCell className="py-4">
                      <span className="text-[14px] font-medium text-[#181d26] leading-tight">{order.id}</span>
                      <div className="text-[12px] text-[#9297a0] mt-0.5">{order.items} {order.items === 1 ? 'item' : 'items'}</div>
                    </TableCell>
                    <TableCell className="py-4">
                      <div className="flex flex-col">
                        <span className="text-[14px] font-medium text-[#181d26] leading-tight">{order.customerName}</span>
                        <span className="text-[12px] text-[#9297a0] mt-0.5">{order.email}</span>
                      </div>
                    </TableCell>
                    <TableCell className="py-4">
                      <span className="text-[13px] text-[#41454d]">{order.date}</span>
                    </TableCell>
                    <TableCell className="py-4">
                      {order.status === "delivered" && (
                        <div className="flex items-center gap-1.5 text-[#137333] bg-[#e6f4ea] px-2 py-1 rounded-[6px] w-fit">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span className="text-[12px] font-medium tracking-wide">Delivered</span>
                        </div>
                      )}
                      {order.status === "processing" && (
                        <div className="flex items-center gap-1.5 text-[#b06000] bg-[#fef2e0] px-2 py-1 rounded-[6px] w-fit">
                          <Clock className="w-3.5 h-3.5" />
                          <span className="text-[12px] font-medium tracking-wide">Processing</span>
                        </div>
                      )}
                      {order.status === "shipped" && (
                        <div className="flex items-center gap-1.5 text-[#1b61c9] bg-[#e8f0fe] px-2 py-1 rounded-[6px] w-fit">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span className="text-[12px] font-medium tracking-wide">Shipped</span>
                        </div>
                      )}
                      {order.status === "cancelled" && (
                        <div className="flex items-center gap-1.5 text-[#c5221f] bg-[#fce8e6] px-2 py-1 rounded-[6px] w-fit">
                          <XCircle className="w-3.5 h-3.5" />
                          <span className="text-[12px] font-medium tracking-wide">Cancelled</span>
                        </div>
                      )}
                    </TableCell>
                    <TableCell className="py-4">
                      <span className="text-[13px] text-[#41454d]">{order.paymentMethod}</span>
                    </TableCell>
                    <TableCell className="py-4 text-right">
                      <span className="text-[14px] font-medium text-[#181d26]">{order.total}</span>
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
                            View Order
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-[13px] text-[#181d26] rounded-[6px] focus:bg-[#f8fafc] cursor-pointer">
                            Update Status
                          </DropdownMenuItem>
                          <DropdownMenuSeparator className="bg-[#dddddd] my-1" />
                          <DropdownMenuItem className="text-[13px] text-[#c5221f] rounded-[6px] focus:bg-[#fce8e6] cursor-pointer">
                            Cancel Order
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
              Showing <strong>1</strong> to <strong>5</strong> of <strong>1,248</strong> orders
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
