"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Save, X, Info, ChevronRight, Copy, Trash2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface UnitForm {
  id: string;
  serial: string;
  condition: string;
  status: string;
  battery: string;
  color: string;
  purchasePrice: string;
  sellingPrice: string;
  notes: string;
}

const generateId = () => Math.random().toString(36).substr(2, 9);

const defaultUnit: UnitForm = {
  id: generateId(),
  serial: "",
  condition: "refurbished_a",
  status: "available",
  battery: "",
  color: "",
  purchasePrice: "",
  sellingPrice: "",
  notes: ""
};

export default function AddInventoryPage() {
  const router = useRouter();
  
  // State for multiple physical units
  const [units, setUnits] = useState<UnitForm[]>([{ ...defaultUnit }]);

  const addUnit = () => {
    setUnits([...units, { ...defaultUnit, id: generateId() }]);
  };

  const duplicateUnit = (unitToCopy: UnitForm) => {
    setUnits([...units, { ...unitToCopy, id: generateId(), serial: "" }]);
  };

  const removeUnit = (idToRemove: string) => {
    if (units.length > 1) {
      setUnits(units.filter(unit => unit.id !== idToRemove));
    }
  };

  const updateUnit = (id: string, field: keyof UnitForm, value: string) => {
    setUnits(units.map(unit => unit.id === id ? { ...unit, [field]: value } : unit));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/admin/product');
  };

  return (
    <div className="flex flex-col gap-6 max-w-[1400px] mx-auto pb-12">
      
      {/* Header Area */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-[14px] font-normal tracking-wide">
          <span className="text-[#5f6368] hover:text-[#181d26] transition-colors cursor-pointer" onClick={() => router.push('/admin/product')}>Products</span>
          <ChevronRight className="w-3.5 h-3.5 text-[#9297a0]" />
          <span className="text-[#181d26]">Add Inventory</span>
        </div>
        
        {/* Top Action Footer */}
        <div className="flex items-center gap-3">
          <Button type="button" variant="outline" onClick={() => router.back()} className="h-9 px-4 rounded-[6px] border-[#dddddd] text-[#41454d] text-[13px] hover:bg-[#f8fafc] shadow-none flex items-center gap-2">
            Cancel
          </Button>
          <Button onClick={handleSave} className="h-9 px-5 rounded-[6px] bg-[#181d26] hover:bg-[#0d1218] text-white text-[13px] font-medium shadow-none flex items-center gap-2">
            <Save className="w-4 h-4" />
            Save Inventory
          </Button>
        </div>
      </div>

      <form id="inventory-form" onSubmit={handleSave} className="flex flex-col gap-8">
        
        {/* Step 1 - Product Family */}
        <Card className="border-[#dddddd] shadow-none rounded-[10px]">
          <CardHeader className="border-b border-[#dddddd] pb-4 bg-[#f8fafc] rounded-t-[10px]">
            <CardTitle className="text-[16px] font-medium text-[#181d26]">1. Product Family</CardTitle>
            <p className="text-[13px] text-[#9297a0] mt-1">Define the core laptop model (e.g. ThinkPad T480). If it already exists, units will be added to it.</p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-medium text-[#181d26]">Brand</label>
                <select className="w-full h-10 px-3 bg-[#ffffff] border border-[#dddddd] rounded-[6px] text-[14px] text-[#181d26] outline-none focus:border-[#1b61c9] transition-colors">
                  <option value="">Select a brand...</option>
                  <option value="lenovo">Lenovo</option>
                  <option value="dell">Dell</option>
                  <option value="hp">HP</option>
                  <option value="apple">Apple</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-medium text-[#181d26]">Series</label>
                <input 
                  type="text" 
                  placeholder="e.g. ThinkPad, Latitude" 
                  className="w-full h-10 px-3 bg-[#ffffff] border border-[#dddddd] rounded-[6px] text-[14px] text-[#181d26] outline-none focus:border-[#1b61c9] transition-colors placeholder:text-[#9297a0]"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-medium text-[#181d26]">Model Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. T480" 
                  className="w-full h-10 px-3 bg-[#ffffff] border border-[#dddddd] rounded-[6px] text-[14px] text-[#181d26] outline-none focus:border-[#1b61c9] transition-colors placeholder:text-[#9297a0]"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-medium text-[#181d26]">Category</label>
                <select className="w-full h-10 px-3 bg-[#ffffff] border border-[#dddddd] rounded-[6px] text-[14px] text-[#181d26] outline-none focus:border-[#1b61c9] transition-colors">
                  <option value="business">Business Laptop</option>
                  <option value="gaming">Gaming Laptop</option>
                  <option value="ultrabook">Ultrabook</option>
                  <option value="student">Student Laptop</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step 2 - Product Variant */}
        <Card className="border-[#dddddd] shadow-none rounded-[10px]">
          <CardHeader className="border-b border-[#dddddd] pb-4 bg-[#f8fafc] rounded-t-[10px]">
            <CardTitle className="text-[16px] font-medium text-[#181d26]">2. Product Variant</CardTitle>
            <p className="text-[13px] text-[#9297a0] mt-1">Specify the exact hardware configuration and baseline pricing. If this variant exists, units will be added to it.</p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5">
              <div className="flex flex-col gap-2 lg:col-span-2">
                <label className="text-[13px] font-medium text-[#181d26]">CPU / Processor</label>
                <input 
                  type="text" 
                  placeholder="e.g. Intel Core i5 8th Gen" 
                  className="w-full h-10 px-3 bg-[#ffffff] border border-[#dddddd] rounded-[6px] text-[14px] text-[#181d26] outline-none focus:border-[#1b61c9] transition-colors placeholder:text-[#9297a0]"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-medium text-[#181d26]">RAM</label>
                <select className="w-full h-10 px-3 bg-[#ffffff] border border-[#dddddd] rounded-[6px] text-[14px] text-[#181d26] outline-none focus:border-[#1b61c9] transition-colors">
                  <option value="">Select...</option>
                  <option value="8gb">8GB</option>
                  <option value="16gb">16GB</option>
                  <option value="32gb">32GB</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-medium text-[#181d26]">Storage (SSD)</label>
                <select className="w-full h-10 px-3 bg-[#ffffff] border border-[#dddddd] rounded-[6px] text-[14px] text-[#181d26] outline-none focus:border-[#1b61c9] transition-colors">
                  <option value="">Select...</option>
                  <option value="256gb">256GB SSD</option>
                  <option value="512gb">512GB SSD</option>
                  <option value="1tb">1TB SSD</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-medium text-[#181d26]">Base Price (₹)</label>
                <input 
                  type="number" 
                  placeholder="0" 
                  className="w-full h-10 px-3 bg-[#ffffff] border border-[#dddddd] rounded-[6px] text-[14px] text-[#181d26] outline-none focus:border-[#1b61c9] transition-colors placeholder:text-[#9297a0]"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-medium text-[#181d26]">Rental Price/Mo (₹)</label>
                <input 
                  type="number" 
                  placeholder="0" 
                  className="w-full h-10 px-3 bg-[#ffffff] border border-[#dddddd] rounded-[6px] text-[14px] text-[#181d26] outline-none focus:border-[#1b61c9] transition-colors placeholder:text-[#9297a0]"
                />
              </div>
            </div>
            
            <div className="bg-[#e8f0fe] rounded-[6px] p-3 flex items-start gap-2 mt-6 inline-flex">
              <Info className="w-4 h-4 text-[#1b61c9] mt-0.5 shrink-0" />
              <p className="text-[12.5px] text-[#1b61c9] leading-tight">
                All physical units added below will be strictly tied to this configuration. Base prices defined here are displayed on the shop frontend.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Step 3 - Physical Units List */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-[16px] font-medium text-[#181d26]">3. Inventory Units</h2>
              <p className="text-[13px] text-[#9297a0] mt-1">Add actual physical laptops. Duplicate rows to copy condition and override prices.</p>
            </div>
            <Button 
              type="button" 
              onClick={addUnit}
              className="h-9 px-4 rounded-[6px] bg-[#f8fafc] border border-[#dddddd] hover:bg-[#e0e2e6] text-[#181d26] text-[13px] font-medium shadow-none flex items-center gap-1.5"
            >
              <Plus className="w-3.5 h-3.5" />
              Add Blank Unit
            </Button>
          </div>

          <div className="flex flex-col gap-4">
            {units.map((unit, index) => (
              <Card key={unit.id} className="border-[#dddddd] shadow-none rounded-[10px] overflow-visible">
                <div className="flex items-center justify-between p-3 border-b border-[#dddddd] bg-[#f8fafc] rounded-t-[10px]">
                  <span className="text-[13px] font-medium text-[#41454d]">Unit #{index + 1}</span>
                  <div className="flex items-center gap-1">
                    <Button 
                      type="button" 
                      variant="ghost" 
                      size="sm"
                      onClick={() => duplicateUnit(unit)}
                      className="h-7 px-2.5 text-[#1b61c9] hover:text-[#1b61c9] hover:bg-[#e8f0fe] text-[12px] flex items-center gap-1.5 rounded-[4px]"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      Duplicate
                    </Button>
                    {units.length > 1 && (
                      <Button 
                        type="button" 
                        variant="ghost" 
                        size="icon"
                        onClick={() => removeUnit(unit.id)}
                        className="h-7 w-7 text-[#9297a0] hover:text-[#c5221f] hover:bg-[#fce8e6] rounded-[4px]"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </Button>
                    )}
                  </div>
                </div>
                
                <CardContent className="p-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-x-4 gap-y-5">
                    
                    <div className="flex flex-col gap-2 xl:col-span-2">
                      <label className="text-[12px] font-medium text-[#41454d]">Serial Number <span className="text-[#c5221f]">*</span></label>
                      <input 
                        type="text" 
                        value={unit.serial}
                        onChange={(e) => updateUnit(unit.id, 'serial', e.target.value)}
                        placeholder="e.g. GV0Y063" 
                        className="w-full h-9 px-3 bg-[#ffffff] border border-[#dddddd] rounded-[6px] text-[13px] text-[#181d26] outline-none focus:border-[#1b61c9] transition-colors placeholder:text-[#9297a0]"
                        required
                      />
                    </div>

                    <div className="flex flex-col gap-2 xl:col-span-2">
                      <label className="text-[12px] font-medium text-[#41454d]">Condition Grade</label>
                      <select 
                        value={unit.condition}
                        onChange={(e) => updateUnit(unit.id, 'condition', e.target.value)}
                        className="w-full h-9 px-3 bg-[#ffffff] border border-[#dddddd] rounded-[6px] text-[13px] text-[#181d26] outline-none focus:border-[#1b61c9] transition-colors"
                      >
                        <option value="new">New</option>
                        <option value="open_box">Open Box</option>
                        <option value="refurbished_a">Refurbished A</option>
                        <option value="refurbished_b">Refurbished B</option>
                        <option value="refurbished_c">Refurbished C</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2 xl:col-span-2">
                      <label className="text-[12px] font-medium text-[#41454d]">Status</label>
                      <select 
                        value={unit.status}
                        onChange={(e) => updateUnit(unit.id, 'status', e.target.value)}
                        className="w-full h-9 px-3 bg-[#ffffff] border border-[#dddddd] rounded-[6px] text-[13px] text-[#181d26] outline-none focus:border-[#1b61c9] transition-colors"
                      >
                        <option value="available">Available</option>
                        <option value="reserved">Reserved</option>
                        <option value="under_inspection">Under Inspection</option>
                        <option value="repair">Repair</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2 xl:col-span-1">
                      <label className="text-[12px] font-medium text-[#41454d]">Battery %</label>
                      <input 
                        type="number" 
                        min="0" max="100"
                        value={unit.battery}
                        onChange={(e) => updateUnit(unit.id, 'battery', e.target.value)}
                        placeholder="92" 
                        className="w-full h-9 px-3 bg-[#ffffff] border border-[#dddddd] rounded-[6px] text-[13px] text-[#181d26] outline-none focus:border-[#1b61c9] transition-colors placeholder:text-[#9297a0]"
                      />
                    </div>

                    <div className="flex flex-col gap-2 xl:col-span-1">
                      <label className="text-[12px] font-medium text-[#41454d]">Color</label>
                      <input 
                        type="text" 
                        value={unit.color}
                        onChange={(e) => updateUnit(unit.id, 'color', e.target.value)}
                        placeholder="Silver" 
                        className="w-full h-9 px-3 bg-[#ffffff] border border-[#dddddd] rounded-[6px] text-[13px] text-[#181d26] outline-none focus:border-[#1b61c9] transition-colors placeholder:text-[#9297a0]"
                      />
                    </div>

                    <div className="flex flex-col gap-2 xl:col-span-2">
                      <label className="text-[12px] font-medium text-[#41454d]">Override Sell Price</label>
                      <div className="relative">
                        <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#9297a0] text-[13px]">₹</span>
                        <input 
                          type="number" 
                          value={unit.sellingPrice}
                          onChange={(e) => updateUnit(unit.id, 'sellingPrice', e.target.value)}
                          placeholder="Uses Variant Price" 
                          className="w-full h-9 pl-6 pr-3 bg-[#ffffff] border border-[#dddddd] rounded-[6px] text-[13px] text-[#181d26] outline-none focus:border-[#1b61c9] transition-colors placeholder:text-[#9297a0]"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 xl:col-span-6">
                      <label className="text-[12px] font-medium text-[#41454d]">Internal Notes</label>
                      <input 
                        type="text"
                        value={unit.notes}
                        onChange={(e) => updateUnit(unit.id, 'notes', e.target.value)}
                        placeholder="Optional remarks regarding scratches, accessories..." 
                        className="w-full h-9 px-3 bg-[#ffffff] border border-[#dddddd] rounded-[6px] text-[13px] text-[#181d26] outline-none focus:border-[#1b61c9] transition-colors placeholder:text-[#9297a0]"
                      />
                    </div>

                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </form>

    </div>
  );
}
