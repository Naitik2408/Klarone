import Link from "next/link";

export default function GallerySection() {
  return (
    <section id="gallery" className="relative w-full pt-[80px] lg:pt-[120px] bg-white overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-tight text-surface-dark mb-6">
            Top Recommended Laptops
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#666666]">
            Based on our expert analysis, here are the most frequently recommended laptops for our community this month.
          </p>
        </div>

        {/* Categories Masonry Grid Container */}
        <div className="relative w-full h-[600px] sm:h-[800px] lg:h-[1000px] overflow-hidden">
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-4 sm:gap-6 pt-12">
              <div className="relative w-full aspect-3/4 rounded-2xl overflow-hidden shadow-sm group cursor-pointer bg-gray-100">
                <img src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&h=1066&fit=crop" alt="MacBook Air M2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-transparent flex items-end p-6">
                  <h3 className="text-white text-[20px] sm:text-[24px] font-medium tracking-tight">MacBook Air M2</h3>
                </div>
              </div>
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-sm group cursor-pointer bg-gray-100">
                <img src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&h=800&fit=crop" alt="Dell XPS 13" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-transparent flex items-end p-6">
                  <h3 className="text-white text-[20px] sm:text-[24px] font-medium tracking-tight">Dell XPS 13</h3>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4 sm:gap-6 -mt-8 lg:-mt-16">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-sm group cursor-pointer bg-gray-100">
                <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=800&fit=crop" alt="MacBook Pro 14" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-transparent flex items-end p-6">
                  <h3 className="text-white text-[20px] sm:text-[24px] font-medium tracking-tight">MacBook Pro 14"</h3>
                </div>
              </div>
              <div className="relative w-full aspect-3/4 rounded-2xl overflow-hidden shadow-sm group cursor-pointer bg-gray-100">
                <img src="https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?w=800&h=1066&fit=crop" alt="Lenovo ThinkPad X1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-transparent flex items-end p-6">
                  <h3 className="text-white text-[20px] sm:text-[24px] font-medium tracking-tight">Lenovo ThinkPad X1</h3>
                </div>
              </div>
            </div>

            {/* Column 3 (Hidden on mobile) */}
            <div className="hidden lg:flex flex-col gap-6 pt-24">
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-sm group cursor-pointer bg-gray-100">
                <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=600&fit=crop" alt="Microsoft Surface Pro" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-transparent flex items-end p-6">
                  <h3 className="text-white text-[20px] sm:text-[24px] font-medium tracking-tight">Microsoft Surface Pro</h3>
                </div>
              </div>
              <div className="relative w-full aspect-3/4 rounded-2xl overflow-hidden shadow-sm group cursor-pointer bg-gray-100">
                <img src="https://images.unsplash.com/photo-1504707748692-419802cf939d?w=800&h=1066&fit=crop" alt="Asus ROG Zephyrus" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-transparent flex items-end p-6">
                  <h3 className="text-white text-[20px] sm:text-[24px] font-medium tracking-tight">Asus ROG Zephyrus</h3>
                </div>
              </div>
            </div>

          </div>

          {/* Fade Overlay & Button */}
          <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-linear-to-t from-white via-white/90 to-transparent flex items-end justify-center pb-12 z-10">
            <Link href="#examples" className="inline-flex items-center justify-center h-14 rounded-full bg-surface-dark px-10 text-[16px] font-medium text-white hover:bg-black transition-all shadow-xl shadow-black/10">
              Explore More Recommendations
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
