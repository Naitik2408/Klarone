import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const topLaptops = [
  {
    id: 1,
    name: "MacBook Air M3 - Midnight",
    tagline: "Free Engraving",
    price: "₹114900.00",
    image: "/top/top5.webp",
    colors: ["#2e3641", "#e3e4e6", "#f0e4d3", "#6f7377"]
  },
  {
    id: 2,
    name: "Lenovo ThinkPad X1 - Carbon Fiber",
    tagline: "Best Seller",
    price: "₹145000.00",
    image: "/top/top1.webp",
    colors: ["#181d26", "#e3e4e6"]
  },
  {
    id: 3,
    name: "Dell XPS 14 - Platinum",
    tagline: "New Arrival",
    price: "₹169990.00",
    image: "/top/top2.webp",
    colors: ["#e3e4e6", "#181d26"]
  },
  {
    id: 4,
    name: "ASUS ROG Zephyrus G14 - Eclipse",
    tagline: "Gamer's Choice",
    price: "₹154990.00",
    image: "/top/top3.webp",
    colors: ["#6f7377", "#ffffff"]
  },
  {
    id: 5,
    name: "HP Spectre x360 - Nightfall Black",
    tagline: "Premium 2-in-1",
    price: "₹139999.00",
    image: "/top/top4.webp",
    colors: ["#181d26", "#b08d57", "#1c305b"]
  }
];

export default function TopSoldSection() {
  return (
    <section id="top-picks" className="w-full py-[80px] lg:py-[120px] bg-white overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 mb-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-tight text-surface-dark mb-6">
            Top Sold Laptops of the Month
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#666666]">
            Based on our community's recommendations, these are the devices people are actively choosing right now.
          </p>
        </div>
      </div>

      {/* Auto Scrolling Marquee */}
      <div className="relative w-full overflow-hidden flex">

        <div className="flex gap-6 px-6 animate-scroll-left w-max hover:paused py-4">
          {/* Original List */}
          {topLaptops.map((laptop) => (
            <div key={laptop.id} className="w-[300px] sm:w-[320px] shrink-0 bg-white rounded-3xl p-6 sm:p-8 flex flex-col border border-[#e5e7eb] group cursor-pointer hover:shadow-lg transition-all">
              <div className="relative w-full aspect-square mb-6 flex items-center justify-center">
                <img src={laptop.image} alt={laptop.name} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700" />
              </div>
              
              <div className="flex items-center justify-center gap-2 mb-6">
                {laptop.colors.map((color, index) => (
                  <div key={index} className="w-4 h-4 rounded-full border border-gray-200 shadow-inner" style={{ backgroundColor: color }}></div>
                ))}
              </div>

              <div className="flex flex-col flex-1">
                <p className="text-[13px] font-medium text-[#c2410c] mb-1">{laptop.tagline}</p>
                <h3 className="text-[18px] sm:text-[20px] font-medium text-surface-dark mb-6 leading-snug">{laptop.name}</h3>
                <p className="text-[14px] text-[#41454d] mt-auto">MRP {laptop.price} (Incl. of all taxes)</p>
              </div>
            </div>
          ))}
          {/* Duplicated List for infinite scroll loop */}
          {topLaptops.map((laptop) => (
            <div key={`dup-${laptop.id}`} className="w-[300px] sm:w-[320px] shrink-0 bg-white rounded-3xl p-6 sm:p-8 flex flex-col border border-[#e5e7eb] group cursor-pointer hover:shadow-lg transition-all">
              <div className="relative w-full aspect-square mb-6 flex items-center justify-center">
                <img src={laptop.image} alt={laptop.name} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700" />
              </div>
              
              <div className="flex items-center justify-center gap-2 mb-6">
                {laptop.colors.map((color, index) => (
                  <div key={index} className="w-4 h-4 rounded-full border border-gray-200 shadow-inner" style={{ backgroundColor: color }}></div>
                ))}
              </div>

              <div className="flex flex-col flex-1">
                <p className="text-[13px] font-medium text-[#c2410c] mb-1">{laptop.tagline}</p>
                <h3 className="text-[18px] sm:text-[20px] font-medium text-surface-dark mb-6 leading-snug">{laptop.name}</h3>
                <p className="text-[14px] text-[#41454d] mt-auto">MRP {laptop.price} (Incl. of all taxes)</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
