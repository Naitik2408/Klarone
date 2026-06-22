"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Search, Filter, MoreHorizontal, ChevronDown, Plus, ChevronRight, Battery, Tag, MemoryStick, HardDrive, CheckCircle2, Users, ShoppingCart, Wrench } from "lucide-react";
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
import { mockFamilies, mockVariants, mockUnits, getVariantStats } from "@/lib/mock-data";

export default function VariantDetailPage() {
  const router = useRouter();
  const params = useParams();
  const [searchQuery, setSearchQuery] = useState("");

  const family = mockFamilies.find(f => f.id === params.id);
  const variant = mockVariants.find(v => v.id === params.variantId);
  const units = mockUnits.filter(u => u.variant_id === params.variantId);
  
  if (!family || !variant) {
    return <div className="p-10 text-center text-[#9297a0]">Product Variant not found.</div>;
  }

  const stats = getVariantStats(variant.id);

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'available': return 'bg-[#e8fce8] text-[#0d9488] border-[#a7f3d0]';
      case 'rented': return 'bg-[#fef3c7] text-[#d97706] border-[#fde68a]';
      case 'sold': return 'bg-[#f1f5f9] text-[#475569] border-[#cbd5e1]';
      case 'repair': return 'bg-[#fee2e2] text-[#e11d48] border-[#fecaca]';
      default: return 'bg-[#f8fafc] text-[#41454d] border-[#e2e8f0]';
    }
  };

  const getGradeDisplay = (grade: string) => {
    switch(grade) {
      case 'new': return 'New';
      case 'open_box': return 'Open Box';
      case 'refurbished_a': return 'Grade A';
      case 'refurbished_b': return 'Grade B';
      case 'refurbished_c': return 'Grade C';
      default: return grade;
    }
  };

  return (
    <div className="flex flex-col gap-6 max-w-[1600px] mx-auto pb-10">
      
      {/* Header Area */}
      <div className="flex items-center gap-2 text-[14px] font-normal tracking-wide mb-3">
        <span className="text-[#5f6368] hover:text-[#181d26] transition-colors cursor-pointer" onClick={() => router.push('/admin/product')}>Products</span>
        <ChevronRight className="w-3.5 h-3.5 text-[#9297a0]" />
        <span className="text-[#5f6368] hover:text-[#181d26] transition-colors cursor-pointer" onClick={() => router.push(`/admin/product/${family.id}`)}>{family.brand} {family.series} {family.model_name}</span>
        <ChevronRight className="w-3.5 h-3.5 text-[#9297a0]" />
        <span className="text-[#181d26]">{variant.cpu} • {variant.ram}</span>
      </div>

      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-[#181d26] tracking-tight">{family.brand} {family.series} {family.model_name}</h1>
          <div className="flex items-center gap-3 mt-2 text-sm text-[#41454d]">
            <span className="font-medium">{variant.cpu}</span>
            <span className="text-[#dddddd]">|</span>
            <span className="flex items-center gap-1.5"><MemoryStick className="w-4 h-4 text-[#9297a0]" /> {variant.ram}</span>
            <span className="text-[#dddddd]">|</span>
            <span className="flex items-center gap-1.5"><HardDrive className="w-4 h-4 text-[#9297a0]" /> {variant.ssd}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={() => router.push('/admin/product/add')} className="h-9 px-4 rounded-[6px] bg-[#181d26] hover:bg-[#0d1218] text-white text-[13px] font-medium shadow-none flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add Inventory Unit
          </Button>
        </div>
      </div>

      {/* Aggregate Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
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
        <Card className="border-[#dddddd] shadow-none rounded-[10px]">
          <CardContent className="p-5 flex flex-col gap-1">
            <span className="text-[13px] font-medium text-[#41454d]">In Repair</span>
            <span className="text-2xl font-semibold text-[#e11d48] tracking-tight">{stats.repairUnits}</span>
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
              placeholder="Search serial numbers, tags..." 
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
                  <TableHead className="font-medium text-[#41454d] text-[12px] uppercase tracking-wider py-3">Inventory Code / SN</TableHead>
                  <TableHead className="font-medium text-[#41454d] text-[12px] uppercase tracking-wider py-3">Condition</TableHead>
                  <TableHead className="font-medium text-[#41454d] text-[12px] uppercase tracking-wider py-3">Battery</TableHead>
                  <TableHead className="font-medium text-[#41454d] text-[12px] uppercase tracking-wider py-3 text-right">Purchase</TableHead>
                  <TableHead className="font-medium text-[#41454d] text-[12px] uppercase tracking-wider py-3 text-right">Selling Price</TableHead>
                  <TableHead className="font-medium text-[#41454d] text-[12px] uppercase tracking-wider py-3 text-center">Status</TableHead>
                  <TableHead className="w-[50px] py-3"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {units.map((unit) => {
                  return (
                    <TableRow key={unit.id} className="border-b-[#dddddd] hover:bg-[#f8fafc] cursor-pointer transition-colors group">
                      <TableCell className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                        <Checkbox className="border-[#dddddd] data-[state=checked]:bg-[#181d26] data-[state=checked]:border-[#181d26]" />
                      </TableCell>
                      <TableCell className="py-3">
                        <div className="flex flex-col gap-0.5">
                          <span className="font-medium text-[#181d26] text-[13px]">{unit.inventory_code}</span>
                          <span className="text-[#9297a0] text-[12px]">SN: {unit.serial_number}</span>
                        </div>
                      </TableCell>
                      <TableCell className="py-3">
                        <div className="flex items-center gap-1.5 text-[13px] text-[#41454d]">
                          <Tag className="w-3.5 h-3.5 text-[#9297a0]" />
                          {getGradeDisplay(unit.condition_grade)}
                        </div>
                      </TableCell>
                      <TableCell className="py-3">
                        <div className="flex items-center gap-1.5 text-[13px] text-[#41454d]">
                          <Battery className="w-3.5 h-3.5 text-[#9297a0]" />
                          {unit.battery_health}%
                        </div>
                      </TableCell>
                      <TableCell className="py-3 text-right">
                        <span className="text-[#9297a0] text-[13px]">₹{unit.purchase_price.toLocaleString()}</span>
                      </TableCell>
                      <TableCell className="py-3 text-right">
                        <span className="text-[#181d26] text-[13px] font-medium">₹{unit.selling_price.toLocaleString()}</span>
                      </TableCell>
                      <TableCell className="py-3 text-center">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium border ${getStatusColor(unit.status)} uppercase tracking-wider`}>
                          {unit.status.replace('_', ' ')}
                        </span>
                      </TableCell>
                      <TableCell className="py-3 text-right" onClick={(e) => e.stopPropagation()}>
                        <DropdownMenu>
                          <DropdownMenuTrigger className="inline-flex items-center justify-center rounded-[6px] h-8 w-8 p-0 text-[#9297a0] hover:text-[#181d26] hover:bg-[#f0f2f5] outline-none transition-colors">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-[160px] rounded-[8px] border-[#dddddd] shadow-sm">
                            <DropdownMenuLabel className="text-[11px] font-medium text-[#9297a0] uppercase tracking-wider">Actions</DropdownMenuLabel>
                            <DropdownMenuItem className="text-[13px] text-[#181d26] focus:bg-[#f8fafc] cursor-pointer">Edit Unit</DropdownMenuItem>
                            <DropdownMenuItem className="text-[13px] text-[#181d26] focus:bg-[#f8fafc] cursor-pointer">Change Status</DropdownMenuItem>
                            <DropdownMenuSeparator className="bg-[#dddddd]" />
                            <DropdownMenuItem className="text-[13px] text-[#c5221f] focus:bg-[#fce8e6] focus:text-[#c5221f] cursor-pointer">Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  );
                })}
                {units.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center py-10 text-[#9297a0] text-[14px]">
                      No physical units found for this configuration.
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
