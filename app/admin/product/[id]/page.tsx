"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Search, Filter, MoreHorizontal, ChevronDown, Plus, ChevronRight, Cpu, MemoryStick, HardDrive, Edit, CheckCircle2, Users, ShoppingCart } from "lucide-react";
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
import { mockFamilies, mockVariants, getFamilyStats, getVariantStats } from "@/lib/mock-data";

export default function ProductFamilyDetailPage() {
  const router = useRouter();
  const params = useParams();
  const [searchQuery, setSearchQuery] = useState("");

  const family = mockFamilies.find(f => f.id === params.id);
  const variants = mockVariants.filter(v => v.product_family_id === params.id);
  
  if (!family) {
    return <div className="p-10 text-center text-[#9297a0]">Product Family not found.</div>;
  }

  const stats = getFamilyStats(family.id);

  return (
    <div className="flex flex-col gap-6 max-w-[1600px] mx-auto pb-10">
      
      {/* Header Area */}
      <div className="flex items-center gap-2 text-[14px] font-normal tracking-wide mb-3">
        <span className="text-[#5f6368] hover:text-[#181d26] transition-colors cursor-pointer" onClick={() => router.push('/admin/product')}>Products</span>
        <ChevronRight className="w-3.5 h-3.5 text-[#9297a0]" />
        <span className="text-[#181d26]">{family.brand} {family.series} {family.model_name}</span>
      </div>

      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-[#181d26] tracking-tight">{family.brand} {family.series} {family.model_name}</h1>
          <p className="text-sm text-[#9297a0] mt-1">{family.category} • ID: {family.id}</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="h-9 px-4 rounded-[6px] border-[#dddddd] text-[#41454d] text-[13px] hover:bg-[#f8fafc] shadow-none flex items-center gap-2">
            <Edit className="w-4 h-4" />
            Edit Family
          </Button>
          <Button onClick={() => router.push('/admin/product/add')} className="h-9 px-4 rounded-[6px] bg-[#181d26] hover:bg-[#0d1218] text-white text-[13px] font-medium shadow-none flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add Variant
          </Button>
        </div>
      </div>

      {/* Aggregate Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        <Card className="border-[#dddddd] shadow-none rounded-[10px]">
          <CardContent className="p-5 flex flex-col gap-1">
            <span className="text-[13px] font-medium text-[#41454d]">Total Variants</span>
            <span className="text-2xl font-semibold text-[#181d26] tracking-tight">{stats.totalVariants}</span>
          </CardContent>
        </Card>
        <Card className="border-[#dddddd] shadow-none rounded-[10px]">
          <CardContent className="p-5 flex flex-col gap-1">
            <span className="text-[13px] font-medium text-[#41454d]">Total Units</span>
            <span className="text-2xl font-semibold text-[#181d26] tracking-tight">{stats.totalUnits}</span>
          </CardContent>
        </Card>
        <Card className="border-[#dddddd] shadow-none rounded-[10px]">
          <CardContent className="p-5 flex flex-col gap-1">
            <span className="text-[13px] font-medium text-[#41454d]">Available</span>
            <span className="text-2xl font-semibold text-[#0d9488] tracking-tight">{stats.availableUnits}</span>
          </CardContent>
        </Card>
        <Card className="border-[#dddddd] shadow-none rounded-[10px]">
          <CardContent className="p-5 flex flex-col gap-1">
            <span className="text-[13px] font-medium text-[#41454d]">Rented</span>
            <span className="text-2xl font-semibold text-[#d97706] tracking-tight">{stats.rentedUnits}</span>
          </CardContent>
        </Card>
        <Card className="border-[#dddddd] shadow-none rounded-[10px]">
          <CardContent className="p-5 flex flex-col gap-1">
            <span className="text-[13px] font-medium text-[#41454d]">Sold</span>
            <span className="text-2xl font-semibold text-[#181d26] tracking-tight">{stats.soldUnits}</span>
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
              placeholder="Search variants by CPU, RAM..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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
          </div>
        </div>

        {/* Table Content */}
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-[#f8fafc] [&_tr]:border-b-[#dddddd]">
                <TableRow className="hover:bg-transparent">
                  <TableHead className="w-[40px] px-4 py-3"><Checkbox className="border-[#dddddd] data-[state=checked]:bg-[#181d26] data-[state=checked]:border-[#181d26]" /></TableHead>
                  <TableHead className="font-medium text-[#41454d] text-[12px] uppercase tracking-wider py-3">Configuration</TableHead>
                  <TableHead className="font-medium text-[#41454d] text-[12px] uppercase tracking-wider py-3 text-right">Base Price</TableHead>
                  <TableHead className="font-medium text-[#41454d] text-[12px] uppercase tracking-wider py-3 text-right">Rental/Mo</TableHead>
                  <TableHead className="font-medium text-[#41454d] text-[12px] uppercase tracking-wider py-3 text-right">Units</TableHead>
                  <TableHead className="font-medium text-[#41454d] text-[12px] uppercase tracking-wider py-3 text-right">Available</TableHead>
                  <TableHead className="w-[50px] py-3"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {variants.map((variant) => {
                  const vStats = getVariantStats(variant.id);
                  return (
                    <TableRow key={variant.id} className="border-b-[#dddddd] hover:bg-[#f8fafc] cursor-pointer transition-colors group" onClick={() => router.push(`/admin/product/${family.id}/variant/${variant.id}`)}>
                      <TableCell className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                        <Checkbox className="border-[#dddddd] data-[state=checked]:bg-[#181d26] data-[state=checked]:border-[#181d26]" />
                      </TableCell>
                      <TableCell className="py-3">
                        <div className="flex flex-col gap-1.5">
                          <span className="font-medium text-[#181d26] text-[14px] group-hover:text-[#1b61c9] transition-colors">{variant.cpu}</span>
                          <div className="flex items-center gap-3 text-[12px] text-[#5f6368]">
                            <div className="flex items-center gap-1"><MemoryStick className="w-3.5 h-3.5 text-[#9297a0]"/> {variant.ram}</div>
                            <div className="flex items-center gap-1"><HardDrive className="w-3.5 h-3.5 text-[#9297a0]"/> {variant.ssd}</div>
                            {variant.touch_screen && <span className="bg-[#e8f0fe] text-[#1b61c9] px-1.5 py-0.5 rounded-[4px] text-[10px] font-medium leading-none">TOUCH</span>}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="py-3 text-right">
                        <span className="text-[#181d26] text-[13px] font-medium">₹{variant.base_price.toLocaleString()}</span>
                      </TableCell>
                      <TableCell className="py-3 text-right">
                        <span className="text-[#181d26] text-[13px]">₹{variant.rental_price.toLocaleString()}</span>
                      </TableCell>
                      <TableCell className="py-3 text-right">
                        <span className="text-[#181d26] text-[13px]">{vStats.totalUnits}</span>
                      </TableCell>
                      <TableCell className="py-3 text-right">
                        <span className="text-[#0d9488] text-[13px] font-medium">{vStats.availableUnits}</span>
                      </TableCell>
                      <TableCell className="py-3 text-right" onClick={(e) => e.stopPropagation()}>
                        <DropdownMenu>
                          <DropdownMenuTrigger className="inline-flex items-center justify-center rounded-[6px] h-8 w-8 p-0 text-[#9297a0] hover:text-[#181d26] hover:bg-[#f0f2f5] outline-none transition-colors">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-[160px] rounded-[8px] border-[#dddddd] shadow-sm">
                            <DropdownMenuLabel className="text-[11px] font-medium text-[#9297a0] uppercase tracking-wider">Actions</DropdownMenuLabel>
                            <DropdownMenuItem className="text-[13px] text-[#181d26] focus:bg-[#f8fafc] cursor-pointer" onClick={() => router.push(`/admin/product/${family.id}/variant/${variant.id}`)}>View Units</DropdownMenuItem>
                            <DropdownMenuItem className="text-[13px] text-[#181d26] focus:bg-[#f8fafc] cursor-pointer">Edit Variant</DropdownMenuItem>
                            <DropdownMenuSeparator className="bg-[#dddddd]" />
                            <DropdownMenuItem className="text-[13px] text-[#c5221f] focus:bg-[#fce8e6] focus:text-[#c5221f] cursor-pointer">Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  );
                })}
                {variants.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-10 text-[#9297a0] text-[14px]">
                      No variants found for this product family.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>

      </Card>
    </div>
  );
}
