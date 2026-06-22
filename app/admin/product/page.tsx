"use client";

import { useRouter } from "next/navigation";
import { Search, Filter, MoreHorizontal, ChevronDown, Plus, Laptop, Cpu, MemoryStick, HardDrive, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { mockFamilies, getFamilyStats } from "@/lib/mock-data";

export default function ProductPage() {
  const router = useRouter();

  // Calculate aggregated stats across all families
  const totalFamilies = mockFamilies.length;
  let totalVariantsAll = 0;
  let totalUnitsAll = 0;
  let rentedUnitsAll = 0;

  mockFamilies.forEach(family => {
    const stats = getFamilyStats(family.id);
    totalVariantsAll += stats.totalVariants;
    totalUnitsAll += stats.totalUnits;
    rentedUnitsAll += stats.rentedUnits;
  });

  return (
    <div className="flex flex-col gap-6 max-w-[1600px] mx-auto pb-10">
      
      {/* Header Area */}
      <div>
        <h1 className="text-2xl font-semibold text-[#181d26] tracking-tight">Product Families</h1>
        <p className="text-sm text-[#9297a0] mt-1">Manage core laptop models and their inventory.</p>
      </div>

      {/* Aggregate Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-[#dddddd] shadow-none rounded-[10px]">
          <CardContent className="p-5 flex flex-col gap-1">
            <span className="text-[13px] font-medium text-[#41454d]">Total Families</span>
            <span className="text-2xl font-semibold text-[#181d26] tracking-tight">{totalFamilies}</span>
          </CardContent>
        </Card>
        <Card className="border-[#dddddd] shadow-none rounded-[10px]">
          <CardContent className="p-5 flex flex-col gap-1">
            <span className="text-[13px] font-medium text-[#41454d]">Total Variants</span>
            <span className="text-2xl font-semibold text-[#181d26] tracking-tight">{totalVariantsAll}</span>
          </CardContent>
        </Card>
        <Card className="border-[#dddddd] shadow-none rounded-[10px]">
          <CardContent className="p-5 flex flex-col gap-1">
            <span className="text-[13px] font-medium text-[#41454d]">Total Inventory Units</span>
            <span className="text-2xl font-semibold text-[#181d26] tracking-tight">{totalUnitsAll}</span>
          </CardContent>
        </Card>
        <Card className="border-[#dddddd] shadow-none rounded-[10px]">
          <CardContent className="p-5 flex flex-col gap-1">
            <span className="text-[13px] font-medium text-[#41454d]">Currently Rented</span>
            <span className="text-2xl font-semibold text-[#181d26] tracking-tight">{rentedUnitsAll}</span>
          </CardContent>
        </Card>
      </div>

      {/* Main Table Card */}
      <Card className="border-[#dddddd] shadow-none rounded-[10px] overflow-hidden flex flex-col gap-0 p-0">
        
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-4 border-b border-[#dddddd] bg-white gap-4">
          <div className="relative w-full sm:w-[320px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9297a0]" />
            <input 
              type="text" 
              placeholder="Search product families..." 
              className="w-full h-9 pl-9 pr-4 bg-[#f8fafc] border border-[#dddddd] rounded-[6px] text-[13px] text-[#181d26] outline-none focus:border-[#1b61c9] transition-colors placeholder:text-[#9297a0]"
            />
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Button variant="outline" className="h-9 px-3 rounded-[6px] border-[#dddddd] text-[#181d26] text-[13px] hover:bg-[#f8fafc] shadow-none flex items-center gap-1.5">
              Bulk Actions <ChevronDown className="w-3.5 h-3.5 text-[#9297a0]" />
            </Button>
            <Button variant="outline" className="h-9 px-3 rounded-[6px] border-[#dddddd] text-[#181d26] text-[13px] hover:bg-[#f8fafc] shadow-none flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5" />
              Filters
            </Button>
            <Button onClick={() => router.push('/admin/product/add')} className="h-9 px-4 rounded-[6px] bg-[#181d26] hover:bg-[#0d1218] text-white text-[13px] font-medium shadow-none flex items-center gap-1.5">
              <Plus className="w-3.5 h-3.5" />
              Add Product
            </Button>
          </div>
        </div>

        {/* Table Content */}
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-[#f8fafc] [&_tr]:border-b-[#dddddd]">
                <TableRow className="hover:bg-transparent">
                  <TableHead className="w-[40px] px-4 py-3"><Checkbox className="border-[#dddddd] data-[state=checked]:bg-[#181d26] data-[state=checked]:border-[#181d26]" /></TableHead>
                  <TableHead className="font-medium text-[#41454d] text-[12px] uppercase tracking-wider py-3">Product Family</TableHead>
                  <TableHead className="font-medium text-[#41454d] text-[12px] uppercase tracking-wider py-3">Category</TableHead>
                  <TableHead className="font-medium text-[#41454d] text-[12px] uppercase tracking-wider py-3 text-right">Variants</TableHead>
                  <TableHead className="font-medium text-[#41454d] text-[12px] uppercase tracking-wider py-3 text-right">Total Units</TableHead>
                  <TableHead className="font-medium text-[#41454d] text-[12px] uppercase tracking-wider py-3 text-right">Available</TableHead>
                  <TableHead className="font-medium text-[#41454d] text-[12px] uppercase tracking-wider py-3 text-right">Rented</TableHead>
                  <TableHead className="font-medium text-[#41454d] text-[12px] uppercase tracking-wider py-3 text-right">Sold</TableHead>
                  <TableHead className="w-[50px] py-3"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockFamilies.map((family) => {
                  const stats = getFamilyStats(family.id);
                  return (
                    <TableRow key={family.id} className="border-b-[#dddddd] hover:bg-[#f8fafc] cursor-pointer transition-colors group" onClick={() => router.push(`/admin/product/${family.id}`)}>
                      <TableCell className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                        <Checkbox className="border-[#dddddd] data-[state=checked]:bg-[#181d26] data-[state=checked]:border-[#181d26]" />
                      </TableCell>
                      <TableCell className="py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-[6px] bg-[#f0f2f5] border border-[#dddddd] flex items-center justify-center shrink-0">
                            <Laptop className="w-5 h-5 text-[#9297a0]" />
                          </div>
                          <div className="flex flex-col">
                            <span className="font-medium text-[#181d26] text-[14px] group-hover:text-[#1b61c9] transition-colors">{family.brand} {family.series} {family.model_name}</span>
                            <span className="text-[#9297a0] text-[12px]">ID: {family.id}</span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="py-3">
                        <span className="text-[#41454d] text-[13px]">{family.category}</span>
                      </TableCell>
                      <TableCell className="py-3 text-right">
                        <span className="text-[#181d26] text-[13px] font-medium">{stats.totalVariants}</span>
                      </TableCell>
                      <TableCell className="py-3 text-right">
                        <span className="text-[#181d26] text-[13px]">{stats.totalUnits}</span>
                      </TableCell>
                      <TableCell className="py-3 text-right">
                        <span className="text-[#0d9488] text-[13px] font-medium">{stats.availableUnits}</span>
                      </TableCell>
                      <TableCell className="py-3 text-right">
                        <span className="text-[#d97706] text-[13px] font-medium">{stats.rentedUnits}</span>
                      </TableCell>
                      <TableCell className="py-3 text-right">
                        <span className="text-[#41454d] text-[13px]">{stats.soldUnits}</span>
                      </TableCell>
                      <TableCell className="py-3 text-right" onClick={(e) => e.stopPropagation()}>
                        <DropdownMenu>
                          <DropdownMenuTrigger className="inline-flex items-center justify-center rounded-[6px] h-8 w-8 p-0 text-[#9297a0] hover:text-[#181d26] hover:bg-[#f0f2f5] outline-none transition-colors">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-[160px] rounded-[8px] border-[#dddddd] shadow-sm">
                            <DropdownMenuLabel className="text-[11px] font-medium text-[#9297a0] uppercase tracking-wider">Actions</DropdownMenuLabel>
                            <DropdownMenuItem className="text-[13px] text-[#181d26] focus:bg-[#f8fafc] cursor-pointer" onClick={() => router.push(`/admin/product/${family.id}`)}>View Variants</DropdownMenuItem>
                            <DropdownMenuItem className="text-[13px] text-[#181d26] focus:bg-[#f8fafc] cursor-pointer">Edit Family Info</DropdownMenuItem>
                            <DropdownMenuSeparator className="bg-[#dddddd]" />
                            <DropdownMenuItem className="text-[13px] text-[#c5221f] focus:bg-[#fce8e6] focus:text-[#c5221f] cursor-pointer">Archive</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </CardContent>

        {/* Pagination */}
        <div className="flex items-center justify-between p-4 border-t border-[#dddddd] bg-[#f8fafc] text-[13px] text-[#9297a0]">
          <div>Showing {mockFamilies.length} product families</div>
          <div className="flex gap-1">
            <Button variant="outline" disabled className="h-8 px-3 rounded-[6px] border-[#dddddd] bg-white text-[#9297a0] shadow-none">Previous</Button>
            <Button variant="outline" disabled className="h-8 px-3 rounded-[6px] border-[#dddddd] bg-white text-[#9297a0] shadow-none">Next</Button>
          </div>
        </div>

      </Card>
    </div>
  );
}
