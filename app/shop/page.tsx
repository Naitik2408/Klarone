"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/shared/Footer";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  ChevronDown,
  X,
  Plus,
  Minus,
  Check,
  Sparkles,
  ArrowRight,
  Search,
  ArrowUpRight,
  Star,
  StarHalf,
  Laptop
} from "lucide-react";
import { mockFamilies, mockVariants, getFamilyStats } from "@/lib/mock-data";

// Mock Data
const filters = [
  { name: "EXPLORE CATEGORIES", type: "accordion", defaultOpen: false },
  {
    name: "SIZE",
    type: "checkbox",
    defaultOpen: true,
    options: [
      { label: "13-inch", count: 56, checked: false },
      { label: "14-inch", count: 145, checked: true },
      { label: "15-inch", count: 103, checked: false },
      { label: "16-inch", count: 84, checked: false },
      { label: "17-inch", count: 71, checked: false },
    ]
  },
  { name: "WORKFLOW", type: "accordion", defaultOpen: false },
  { name: "FAMILY", type: "accordion", defaultOpen: false },
  { name: "REFURBISHED", type: "accordion", defaultOpen: false },
  {
    name: "PRICE",
    type: "range",
    defaultOpen: true,
    min: "$499",
    max: "$10,500"
  },
  { name: "BRAND", type: "accordion", defaultOpen: false },
  {
    name: "PROCESSOR",
    type: "checkbox",
    defaultOpen: true,
    options: [
      { label: "Apple M Series", count: 43, checked: false },
      { label: "Intel Core Ultra", count: 145, checked: true },
      { label: "AMD Ryzen AI", count: 39, checked: false },
    ]
  },
  { name: "MEMORY", type: "accordion", defaultOpen: false },
];

export default function CatalogPage() {
  const [isAiSlideOpen, setAiSlideOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setAiSlideOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const [openFilters, setOpenFilters] = useState<Record<string, boolean>>(() => {
    const initialState: Record<string, boolean> = {};
    filters.forEach(f => {
      initialState[f.name] = f.defaultOpen;
    });
    return initialState;
  });

  const toggleFilter = (name: string) => {
    setOpenFilters(prev => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div className="relative flex min-h-screen flex-col bg-white text-black font-sans">
      <Header />
      <main className="flex-1 mt-[80px] lg:mt-[100px] pb-[120px]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">

          {/* Active Filters Bar */}
          <div className="sticky top-[120px] z-30 bg-white flex flex-col lg:flex-row lg:items-center justify-between py-3 lg:py-4 border-y border-gray-200 mb-8 gap-4">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <span className="text-[18px] font-medium text-surface-dark">145 products found</span>

              <div className="flex flex-wrap items-center gap-2">
                {["14-inch", "Intel Core Ultra", "Space Gray", "Silver"].map((pill) => (
                  <button key={pill} className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 text-[12px] font-medium text-surface-dark hover:border-gray-400 transition-colors">
                    {pill}
                    <X className="w-3 h-3 text-gray-500" />
                  </button>
                ))}
                {["Price Range"].map((pill) => (
                  <button key={pill} className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 text-[12px] font-medium text-surface-dark hover:border-gray-400 transition-colors">
                    $499 - $10,500
                    <X className="w-3 h-3 text-gray-500" />
                  </button>
                ))}
              </div>

              <button className="text-[13px] font-medium text-surface-dark underline underline-offset-4 hover:text-[#00A7B5] transition-colors">
                Clear filters
              </button>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="text-[14px] text-gray-500">Sort by:</span>
              <button className="flex items-center gap-1 text-[14px] font-medium text-surface-dark hover:text-[#00A7B5] transition-colors">
                Price (High-Low)
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Sidebar Filters */}
            <div className="w-full lg:w-[240px] shrink-0 flex flex-col gap-0">
              {/* Smart Search Trigger Button */}
              <div className="mb-8">
                <button
                  onClick={() => setAiSlideOpen(true)}
                  className="w-full bg-white rounded-full py-3.5 px-5 flex items-center gap-3 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all text-left group"
                >
                  <Search className="w-[18px] h-[18px] text-gray-400 group-hover:text-[#00A7B5] transition-colors shrink-0" />
                  <span className="flex-1 text-[14px] text-gray-500 font-medium truncate">Smart Search...</span>
                </button>
              </div>

              {filters.map((filter, idx) => (
                <div key={idx} className="border-b border-gray-100 last:border-0 py-5">
                  <button
                    onClick={() => toggleFilter(filter.name)}
                    className="flex items-center justify-between w-full text-left"
                  >
                    <span className="text-[13px] font-medium tracking-wide text-surface-dark">{filter.name}</span>
                    {openFilters[filter.name] ? (
                      <Minus className="w-4 h-4 text-gray-500" />
                    ) : (
                      <Plus className="w-4 h-4 text-gray-500" />
                    )}
                  </button>

                  {/* Filter Content */}
                  {openFilters[filter.name] && (
                    <div className="mt-4">
                      {filter.type === "checkbox" && filter.options && (
                        <div className="flex flex-col gap-3">
                          {filter.options.map((opt, oIdx) => (
                            <label key={oIdx} className="flex items-center gap-3 cursor-pointer group">
                              <div className={`w-4 h-4 rounded-[3px] border flex items-center justify-center transition-colors ${opt.checked ? 'bg-surface-dark border-surface-dark' : 'border-gray-300 group-hover:border-gray-500'}`}>
                                {opt.checked && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                              </div>
                              <span className={`text-[14px] flex-1 ${opt.checked ? 'font-medium text-surface-dark' : 'text-gray-600'}`}>{opt.label}</span>
                              <span className="text-[13px] text-gray-400">{opt.count}</span>
                            </label>
                          ))}
                        </div>
                      )}

                      {filter.type === "range" && (
                        <div className="flex items-center gap-2">
                          <div className="flex-1 relative">
                            <input type="text" defaultValue={filter.min} className="w-full border border-gray-200 rounded-md py-2 px-3 text-[13px] text-surface-dark focus:outline-none focus:border-[#00A7B5]" />
                          </div>
                          <span className="text-[13px] text-gray-400">to</span>
                          <div className="flex-1 relative">
                            <input type="text" defaultValue={filter.max} className="w-full border border-gray-200 rounded-md py-2 px-3 text-[13px] text-surface-dark focus:outline-none focus:border-[#00A7B5]" />
                          </div>
                        </div>
                      )}

                      {filter.type === "accordion" && (
                        <div className="text-[13px] text-gray-500 italic">Options loading...</div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Product Grid */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockFamilies.map((family) => {
                const variants = mockVariants.filter(v => v.product_family_id === family.id);
                const minPrice = variants.length > 0 ? Math.min(...variants.map(v => v.base_price)) : 0;
                const stats = getFamilyStats(family.id);

                return (
                  <Link href={`/shop/${family.id}`} key={family.id} className="group flex flex-col gap-4">
                    {/* Product Image Card */}
                    <div className="relative aspect-[4/3] bg-[#f8fafc] rounded-[16px] flex items-center justify-center p-8 overflow-hidden group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
                      {/* Placeholder Icon */}
                      <Laptop className="w-24 h-24 text-[#dddddd] group-hover:scale-105 transition-transform duration-500 ease-out" />
                      
                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        <span className="bg-[#181d26] text-white text-[10px] font-bold tracking-wider px-2 py-1 rounded-[4px]">FAMILY</span>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col gap-2">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-semibold text-[16px] text-[#181d26] leading-tight group-hover:text-[#1b61c9] transition-colors">
                          {family.brand} {family.series} {family.model_name}
                        </h3>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-[15px] text-[#181d26]">Starting from ₹{minPrice.toLocaleString()}</span>
                      </div>
                      
                      <div className="flex items-center gap-3 text-[12px] text-[#9297a0] mt-1">
                        <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#1b61c9]"></span> {stats.totalVariants} Variants</span>
                        <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#0d9488]"></span> {stats.availableUnits} In Stock</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

        </div>
      </main>
      <Footer />

      <Dialog open={isAiSlideOpen} onOpenChange={setAiSlideOpen}>
        <DialogContent className="bg-transparent border-none shadow-none sm:max-w-3xl p-0 top-10 sm:top-[10%] translate-y-0" showCloseButton={false}>
          <DialogTitle className="sr-only">Smart Search</DialogTitle>
          <DialogDescription className="sr-only">Search for laptops using AI</DialogDescription>
          
          {/* Top Search Input Box */}
          <div className="bg-white rounded-3xl p-3 px-5 flex items-center gap-3 shadow-lg w-full">
            <Search className="w-[18px] h-[18px] text-gray-400" />
            <input 
              type="text" 
              placeholder="Enter your requirements (e.g. laptop for coding)" 
              className="flex-1 bg-transparent border-none outline-none text-[14px] text-surface-dark placeholder:text-gray-400"
              autoFocus
            />
          </div>

          {/* Results Box */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-xl mt-3 flex flex-col gap-4 w-full">

            <div className="flex flex-col gap-3">
              <span className="text-[14px] text-gray-600">AI Recommendations '3'</span>

              {/* Items List - Scrollable */}
              <div className="flex flex-col max-h-[40vh] overflow-y-auto pr-2 no-scrollbar">
                {/* Item 1 */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3.5 border-b border-gray-100 last:border-0 group cursor-pointer gap-3">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden flex items-center justify-center p-2 shrink-0">
                      <img src="/top/top5.webp" alt="Laptop" className="w-full h-full object-contain mix-blend-multiply" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[15px] font-medium text-surface-dark group-hover:text-[#00A7B5] transition-colors">MacBook Air M2</span>
                      <div className="flex items-center gap-1.5 text-[12px] text-gray-500">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                        <span>Best for coding & battery life</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[#f59e0b] sm:ml-auto shrink-0 pl-[62px] sm:pl-0">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current text-gray-300" />
                    <span className="text-[12px] text-gray-500 ml-1.5">4.8 (124)</span>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3.5 border-b border-gray-100 last:border-0 group cursor-pointer gap-3">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden flex items-center justify-center p-2 shrink-0">
                      <img src="/top/top1.webp" alt="Laptop" className="w-full h-full object-contain mix-blend-multiply" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[15px] font-medium text-surface-dark group-hover:text-[#00A7B5] transition-colors">Lenovo ThinkPad E14</span>
                      <div className="flex items-center gap-1.5 text-[12px] text-gray-500">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                        <span>Excellent keyboard and durability</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[#f59e0b] sm:ml-auto shrink-0 pl-[62px] sm:pl-0">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <StarHalf className="w-3.5 h-3.5 fill-current" />
                    <span className="text-[12px] text-gray-500 ml-1.5">4.5 (89)</span>
                  </div>
                </div>
                
                {/* Item 3 */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3.5 border-b border-gray-100 last:border-0 group cursor-pointer gap-3">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden flex items-center justify-center p-2 shrink-0">
                      <img src="/top/top2.webp" alt="Laptop" className="w-full h-full object-contain mix-blend-multiply" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[15px] font-medium text-surface-dark group-hover:text-[#00A7B5] transition-colors">ASUS ROG Zephyrus</span>
                      <div className="flex items-center gap-1.5 text-[12px] text-gray-500">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                        <span>High performance for intense workloads</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[#f59e0b] sm:ml-auto shrink-0 pl-[62px] sm:pl-0">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current text-gray-300" />
                    <span className="text-[12px] text-gray-500 ml-1.5">4.2 (45)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
