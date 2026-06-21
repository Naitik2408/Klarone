"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/shared/Footer";
import { 
  Star, 
  Minus, 
  Plus, 
  Heart, 
  Share2, 
  CheckCircle2, 
  ThumbsUp, 
  ThumbsDown,
  ChevronRight,
  Play
} from "lucide-react";

const product = {
  name: "MacBook Air M3 - 15-inch",
  price: "₹1,34,900.00",
  rating: 4.8,
  reviewsCount: 260,
  colors: [
    { name: "Midnight", hex: "#2e3641", image: "/top/top5.webp" },
    { name: "Starlight", hex: "#f0e4d3", image: "/top/top5.webp" },
    { name: "Space Gray", hex: "#6f7377", image: "/top/top5.webp" },
    { name: "Silver", hex: "#e3e4e6", image: "/top/top5.webp" }
  ],
  configs: ["8GB Unified Memory", "16GB Unified Memory", "24GB Unified Memory"],
  storage: ["256GB SSD", "512GB SSD", "1TB SSD"],
  images: [
    "/top/top5.webp",
    "/top/top1.webp",
    "/top/top2.webp"
  ]
};

const relatedProducts = [
  { id: 1, name: "Lenovo ThinkPad X1", price: "₹1,45,000", image: "/top/top1.webp", rating: 4.9 },
  { id: 2, name: "Dell XPS 14", price: "₹1,69,990", image: "/top/top2.webp", rating: 4.7 },
  { id: 3, name: "ASUS ROG Zephyrus G14", price: "₹1,54,990", image: "/top/top3.webp", rating: 4.8 },
  { id: 4, name: "HP Spectre x360", price: "₹1,39,999", image: "/top/top4.webp", rating: 4.6 }
];

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedConfig, setSelectedConfig] = useState(0);
  const [selectedStorage, setSelectedStorage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <div className="relative flex min-h-screen flex-col bg-white text-black overflow-hidden font-sans">
      <Header />
      <main className="flex-1 mt-[120px] pb-[80px]">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-[13px] text-[#666666] mb-10">
            <Link href="/" className="hover:text-surface-dark transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/shop" className="hover:text-surface-dark transition-colors">Laptops</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-surface-dark font-medium">{product.name}</span>
          </nav>

          {/* Top Section: Images & Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
            
            {/* Left: Images */}
            <div className="flex flex-col-reverse lg:flex-row gap-4 lg:h-[600px]">
              {/* Thumbnails */}
              <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-y-auto lg:w-24 shrink-0 no-scrollbar">
                {product.images.map((img, i) => (
                  <button 
                    key={i} 
                    onClick={() => setMainImage(img)}
                    className={`w-20 h-20 lg:w-full lg:h-24 shrink-0 rounded-xl border-2 overflow-hidden transition-all flex items-center justify-center p-2 bg-gray-50 ${
                      mainImage === img ? "border-[#00A7B5]" : "border-transparent hover:border-gray-300"
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-contain mix-blend-multiply" />
                  </button>
                ))}
              </div>
              
              {/* Main Image */}
              <div className="flex-1 bg-gray-50 rounded-3xl flex items-center justify-center p-12 overflow-hidden relative border border-gray-100">
                <img 
                  src={mainImage} 
                  alt={product.name} 
                  className="w-full h-full object-contain mix-blend-multiply transition-all duration-500 hover:scale-105"
                />
              </div>
            </div>

            {/* Right: Details */}
            <div className="flex flex-col">
              <h1 className="text-[28px] md:text-[36px] font-heading font-semibold text-surface-dark leading-[1.2] mb-3">
                {product.name}
              </h1>
              <div className="text-[24px] md:text-[28px] font-medium text-surface-dark mb-8">
                {product.price}
              </div>

              {/* Colors */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[14px] font-medium text-surface-dark">Color:</span>
                  <span className="text-[14px] text-[#666666]">{product.colors[selectedColor].name}</span>
                </div>
                <div className="flex items-center gap-3">
                  {product.colors.map((color, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedColor(i)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                        selectedColor === i ? "border-2 border-[#00A7B5] p-0.5" : "border border-gray-200"
                      }`}
                    >
                      <div className="w-full h-full rounded-full shadow-inner" style={{ backgroundColor: color.hex }}></div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Memory */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[14px] font-medium text-surface-dark">Memory</span>
                  <a href="#" className="text-[13px] text-[#00A7B5] hover:underline">Configuration guide</a>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.configs.map((conf, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedConfig(i)}
                      className={`px-5 py-2.5 rounded-full text-[14px] font-medium border transition-all ${
                        selectedConfig === i 
                          ? "bg-surface-dark text-white border-surface-dark" 
                          : "bg-white text-surface-dark border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      {conf}
                    </button>
                  ))}
                </div>
              </div>

              {/* Storage */}
              <div className="mb-10">
                <div className="flex items-center mb-3">
                  <span className="text-[14px] font-medium text-surface-dark">Storage</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.storage.map((stor, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedStorage(i)}
                      className={`px-5 py-2.5 rounded-full text-[14px] font-medium border transition-all ${
                        selectedStorage === i 
                          ? "bg-surface-dark text-white border-surface-dark" 
                          : "bg-white text-surface-dark border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      {stor}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                {/* Quantity */}
                <div className="flex items-center border border-gray-200 rounded-full h-14 px-2">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-black hover:bg-gray-50 rounded-full transition-colors">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-10 text-center text-[15px] font-medium">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-black hover:bg-gray-50 rounded-full transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Add to Cart / Request */}
                <button className="flex-1 h-14 bg-surface-dark text-white rounded-full font-medium text-[16px] hover:bg-black transition-all shadow-xl shadow-black/5">
                  Request Consultation
                </button>

                {/* Wishlist */}
                <button className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-red-500 hover:border-red-500 hover:bg-red-50 transition-all">
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <button className="flex items-center gap-2 text-[14px] font-medium text-surface-dark hover:text-[#00A7B5] transition-colors">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
                <button className="text-[14px] font-medium text-surface-dark hover:text-[#00A7B5] transition-colors">
                  View All Variations
                </button>
              </div>

            </div>
          </div>

          {/* Middle Section: Tabs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24 border-t border-gray-100 pt-16">
            <div className="flex flex-col">
              <div className="flex items-center gap-8 mb-8 border-b border-gray-100">
                {["description", "specifications", "shipping"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 text-[15px] font-medium capitalize transition-all relative ${
                      activeTab === tab ? "text-surface-dark" : "text-[#888888] hover:text-surface-dark"
                    }`}
                  >
                    {tab === "shipping" ? "Shipping & Returns" : tab}
                    {activeTab === tab && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-surface-dark rounded-t-full"></span>
                    )}
                  </button>
                ))}
              </div>
              
              <div className="text-[15px] text-[#666666] leading-relaxed">
                {activeTab === "description" && (
                  <div>
                    <p className="mb-4">
                      Supercharged by M3, the 15-inch MacBook Air is incredibly portable. With up to 18 hours of battery life and a spacious Liquid Retina display, you can take it anywhere and blaze through work and play.
                    </p>
                    <p className="mb-4">
                      The M3 chip brings even greater capabilities and features to MacBook Air. And with a powerful 8-core CPU and up to 10-core GPU, it keeps things running smoothly.
                    </p>
                    <button className="text-surface-dark font-medium hover:text-[#00A7B5] underline underline-offset-4 mt-2 transition-colors">
                      Show More
                    </button>
                  </div>
                )}
                {activeTab === "specifications" && (
                  <ul className="space-y-3">
                    <li className="flex gap-4"><span className="font-medium text-surface-dark w-32">Processor:</span> Apple M3 chip</li>
                    <li className="flex gap-4"><span className="font-medium text-surface-dark w-32">Display:</span> 15.3-inch Liquid Retina</li>
                    <li className="flex gap-4"><span className="font-medium text-surface-dark w-32">Weight:</span> 1.51 kg (3.3 pounds)</li>
                    <li className="flex gap-4"><span className="font-medium text-surface-dark w-32">Ports:</span> 2x Thunderbolt / USB 4, MagSafe 3</li>
                  </ul>
                )}
                {activeTab === "shipping" && (
                  <p>
                    Free standard delivery on all orders. You can return your device within 14 days of receipt, no questions asked. All devices come with a 1-year limited warranty.
                  </p>
                )}
              </div>
            </div>

            {/* Video/Image block next to tabs */}
            <div className="relative w-full h-[300px] rounded-3xl overflow-hidden bg-gray-100 group cursor-pointer border border-gray-100">
              <img src="/Hero/hero3.webp" alt="Lifestyle" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                <div className="w-16 h-16 rounded-full bg-white/90 text-surface-dark flex items-center justify-center shadow-xl backdrop-blur-sm group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 ml-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="mb-24">
            <h2 className="text-[24px] md:text-[28px] font-heading font-semibold text-surface-dark mb-8">
              Related Laptops
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(item => (
                <Link key={item.id} href="#" className="group">
                  <div className="bg-gray-50 rounded-3xl p-6 mb-4 aspect-square flex items-center justify-center relative overflow-hidden border border-gray-100 group-hover:border-gray-200 transition-colors">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    {[1,2,3,4,5].map(star => (
                      <Star key={star} className={`w-3.5 h-3.5 ${star <= Math.floor(item.rating) ? "fill-[#eab308] text-[#eab308]" : "fill-gray-200 text-gray-200"}`} />
                    ))}
                  </div>
                  <h3 className="text-[16px] font-heading font-semibold text-surface-dark mb-1 group-hover:text-[#00A7B5] transition-colors">{item.name}</h3>
                  <div className="text-[15px] text-[#666666] font-medium">{item.price}</div>
                </Link>
              ))}
            </div>
          </div>

          {/* Ratings & Reviews */}
          <div className="pt-16 border-t border-gray-100">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-[24px] md:text-[28px] font-heading font-semibold text-surface-dark">
                Ratings & reviews
              </h2>
              <button className="h-12 px-6 bg-surface-dark text-white rounded-full font-medium text-[14px] hover:bg-black transition-all shadow-md">
                Write a Review
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              
              {/* Left Column: Summary */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 mb-8">
                  <div className="flex items-end gap-4 mb-2">
                    <span className="text-[48px] font-medium text-surface-dark leading-none">{product.rating}</span>
                    <div className="pb-1">
                      <div className="flex items-center gap-1 mb-1">
                        {[1,2,3,4,5].map(star => (
                          <Star key={star} className="w-4 h-4 fill-[#eab308] text-[#eab308]" />
                        ))}
                      </div>
                      <span className="text-[13px] text-[#888888]">({product.reviewsCount} reviews)</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mt-8">
                    {[
                      { stars: 5, count: 178, percent: 70 },
                      { stars: 4, count: 72, percent: 25 },
                      { stars: 3, count: 8, percent: 3 },
                      { stars: 2, count: 0, percent: 0 },
                      { stars: 1, count: 2, percent: 1 }
                    ].map(row => (
                      <div key={row.stars} className="flex items-center gap-4">
                        <span className="w-12 text-[13px] text-[#666666]">{row.stars} Stars</span>
                        <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-[#eab308] rounded-full" style={{ width: `${row.percent}%` }}></div>
                        </div>
                        <span className="w-6 text-right text-[13px] text-[#666666]">{row.count}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-heading font-semibold text-surface-dark">Customer photos</h3>
                    <button className="text-[13px] font-medium text-surface-dark hover:text-[#00A7B5] underline transition-colors">See All</button>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[1,2,3,4,5,6].map(i => (
                      <div key={i} className="aspect-square rounded-xl bg-gray-100 overflow-hidden cursor-pointer border border-gray-200">
                         <img src="/Hero/hero3.webp" alt="Review Photo" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Reviews List */}
              <div className="lg:col-span-2 flex flex-col gap-10">
                
                {/* Review 1 */}
                <div className="border-b border-gray-100 pb-10">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-1 mb-2">
                        {[1,2,3,4,5].map(star => (
                          <Star key={star} className="w-3.5 h-3.5 fill-[#eab308] text-[#eab308]" />
                        ))}
                      </div>
                      <div className="font-medium text-surface-dark">Kathryn Murphy</div>
                    </div>
                    <div className="flex items-center gap-1.5 text-[13px] font-medium text-[#16a34a]">
                      <CheckCircle2 className="w-4 h-4" />
                      Verified Purchase
                    </div>
                  </div>
                  <p className="text-[15px] text-[#666666] mb-6 leading-relaxed">
                    Great machine! The M3 chip is incredibly fast, and the battery easily lasts me through a full day of coding and meetings. The 15-inch screen is a huge plus without making it too heavy.
                  </p>
                  <div className="flex gap-2 mb-6">
                    <div className="w-20 h-20 rounded-xl bg-gray-100 overflow-hidden border border-gray-200">
                      <img src="/Hero/hero3.webp" alt="Customer Photo" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-[13px] text-[#888888]">
                      <span>Was this review helpful?</span>
                      <button className="flex items-center gap-1 hover:text-surface-dark transition-colors"><ThumbsUp className="w-4 h-4" /> 18</button>
                      <button className="flex items-center gap-1 hover:text-surface-dark transition-colors"><ThumbsDown className="w-4 h-4" /> 0</button>
                    </div>
                    <div className="text-[13px] text-[#888888]">February 1, 2025</div>
                  </div>
                </div>

                {/* Review 2 */}
                <div className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-1 mb-2">
                        {[1,2,3,4,5].map(star => (
                          <Star key={star} className="w-3.5 h-3.5 fill-[#eab308] text-[#eab308]" />
                        ))}
                      </div>
                      <div className="font-medium text-surface-dark">Cameron Williamson</div>
                    </div>
                    <div className="flex items-center gap-1.5 text-[13px] font-medium text-[#16a34a]">
                      <CheckCircle2 className="w-4 h-4" />
                      Verified Purchase
                    </div>
                  </div>
                  <p className="text-[15px] text-[#666666] mb-6 leading-relaxed">
                    Incredibly quiet and cool even when I have dozens of tabs and design software open. The Midnight color looks gorgeous, though it is a bit of a fingerprint magnet. Highly recommend this for designers!
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-[13px] text-[#888888]">
                      <span>Was this review helpful?</span>
                      <button className="flex items-center gap-1 hover:text-surface-dark transition-colors"><ThumbsUp className="w-4 h-4" /> 16</button>
                      <button className="flex items-center gap-1 hover:text-surface-dark transition-colors"><ThumbsDown className="w-4 h-4" /> 0</button>
                    </div>
                    <div className="text-[13px] text-[#888888]">January 28, 2025</div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
