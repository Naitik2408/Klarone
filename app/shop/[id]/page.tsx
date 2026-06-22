"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/shared/Footer";
import { Laptop, ChevronRight, Check, ShieldCheck, BatteryCharging, ArrowRight } from "lucide-react";
import { mockFamilies, mockVariants, mockUnits, getVariantStats } from "@/lib/mock-data";

export default function ShopProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  
  const familyId = params.id as string;
  const family = mockFamilies.find(f => f.id === familyId);
  const variants = mockVariants.filter(v => v.product_family_id === familyId);
  
  const [selectedVariantId, setSelectedVariantId] = useState<string | null>(
    variants.length > 0 ? variants[0].id : null
  );

  if (!family) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-[#181d26]">Product not found.</h1>
        <button onClick={() => router.push('/shop')} className="mt-4 text-[#1b61c9] hover:underline">Return to Shop</button>
      </div>
    );
  }

  const selectedVariant = variants.find(v => v.id === selectedVariantId);
  const variantStats = selectedVariant ? getVariantStats(selectedVariant.id) : { availableUnits: 0 };
  
  // Get unique condition grades for the selected variant
  const variantUnits = mockUnits.filter(u => u.variant_id === selectedVariant?.id && u.status === 'available');
  const availableGrades = Array.from(new Set(variantUnits.map(u => u.condition_grade)));

  const getGradeDisplay = (grade: string) => {
    switch(grade) {
      case 'new': return 'New';
      case 'open_box': return 'Open Box';
      case 'refurbished_a': return 'Grade A (Excellent)';
      case 'refurbished_b': return 'Grade B (Good)';
      case 'refurbished_c': return 'Grade C (Fair)';
      default: return grade;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#1b61c9] selection:text-white font-sans text-surface-dark">
      <Header />
      
      <main className="flex-1 max-w-[1400px] mx-auto w-full px-4 sm:px-8 py-8 pt-24 sm:pt-32 pb-20">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[13px] font-medium text-[#9297a0] mb-8">
          <span onClick={() => router.push('/shop')} className="hover:text-[#181d26] cursor-pointer transition-colors">Shop</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="hover:text-[#181d26] cursor-pointer transition-colors">{family.category}</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#181d26]">{family.brand} {family.series} {family.model_name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">
          
          {/* Left: Images */}
          <div className="flex flex-col gap-4">
            <div className="aspect-[4/3] bg-[#f8fafc] rounded-[20px] flex items-center justify-center p-10 border border-[#dddddd]">
              <Laptop className="w-64 h-64 text-[#dddddd]" />
            </div>
          </div>

          {/* Right: Details & Selectors */}
          <div className="flex flex-col">
            <h1 className="text-4xl font-semibold tracking-tight text-[#181d26] mb-2">
              {family.brand} {family.series} {family.model_name}
            </h1>
            <p className="text-[#5f6368] text-[16px] leading-relaxed mb-6">
              {family.description}
            </p>

            {variants.length === 0 ? (
              <div className="p-6 bg-[#f8fafc] rounded-[10px] text-center text-[#9297a0]">
                Currently out of stock.
              </div>
            ) : (
              <>
                <div className="flex items-end gap-3 mb-8 pb-8 border-b border-[#dddddd]">
                  <span className="text-4xl font-bold tracking-tight text-[#181d26]">
                    ₹{selectedVariant?.base_price.toLocaleString()}
                  </span>
                  {selectedVariant?.rental_price && (
                    <span className="text-[14px] text-[#5f6368] mb-1">
                      or rent for ₹{selectedVariant.rental_price.toLocaleString()}/mo
                    </span>
                  )}
                </div>

                {/* Configuration Selector */}
                <div className="mb-8">
                  <h3 className="text-[14px] font-semibold tracking-wide text-[#181d26] mb-3 uppercase">Configuration</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {variants.map(variant => (
                      <button 
                        key={variant.id}
                        onClick={() => setSelectedVariantId(variant.id)}
                        className={`flex flex-col text-left p-4 rounded-[10px] border-2 transition-all ${
                          selectedVariantId === variant.id 
                            ? 'border-[#1b61c9] bg-[#f0f5ff]' 
                            : 'border-[#dddddd] hover:border-[#9297a0] bg-white'
                        }`}
                      >
                        <span className={`font-semibold text-[15px] ${selectedVariantId === variant.id ? 'text-[#1b61c9]' : 'text-[#181d26]'}`}>
                          {variant.ram} / {variant.ssd}
                        </span>
                        <span className="text-[13px] text-[#5f6368] mt-1">{variant.cpu}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Stock Details */}
                <div className="bg-[#f8fafc] rounded-[12px] p-6 mb-8 border border-[#dddddd]">
                  <h3 className="text-[14px] font-semibold tracking-wide text-[#181d26] mb-4">INVENTORY STATUS</h3>
                  
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[14px] text-[#41454d]">Availability</span>
                      {variantStats.availableUnits > 0 ? (
                        <span className="text-[14px] font-semibold text-[#0d9488] flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#0d9488]"></span>
                          {variantStats.availableUnits} in stock
                        </span>
                      ) : (
                        <span className="text-[14px] font-semibold text-[#c5221f]">Out of stock</span>
                      )}
                    </div>
                    
                    {variantStats.availableUnits > 0 && (
                      <>
                        <div className="h-[1px] bg-[#dddddd] w-full my-1"></div>
                        <div className="flex items-center justify-between">
                          <span className="text-[14px] text-[#41454d]">Available Grades</span>
                          <div className="flex flex-wrap gap-2 justify-end">
                            {availableGrades.map((grade, idx) => (
                              <span key={idx} className="bg-white border border-[#dddddd] text-[#181d26] text-[12px] font-medium px-2 py-1 rounded-[4px]">
                                {getGradeDisplay(grade)}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[14px] text-[#41454d]">Battery Health</span>
                          <span className="text-[14px] text-[#181d26] flex items-center gap-1.5 font-medium">
                            <BatteryCharging className="w-4 h-4 text-[#0d9488]" />
                            Tested & Verified
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3">
                  <button 
                    disabled={variantStats.availableUnits === 0}
                    className="w-full h-14 bg-[#181d26] hover:bg-[#0d1218] text-white rounded-[8px] font-semibold text-[15px] flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                  >
                    Buy Now
                  </button>
                  <button 
                    disabled={variantStats.availableUnits === 0 || !selectedVariant?.rental_price}
                    className="w-full h-14 bg-white hover:bg-[#f8fafc] text-[#181d26] border-2 border-[#181d26] rounded-[8px] font-semibold text-[15px] flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Rent Now
                  </button>
                </div>

                {/* Guarantee */}
                <div className="mt-8 flex items-center gap-3 justify-center text-[13px] text-[#5f6368]">
                  <ShieldCheck className="w-5 h-5 text-[#0d9488]" />
                  <span>Klarone Certified. 6 Month Warranty Included.</span>
                </div>

              </>
            )}
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}
