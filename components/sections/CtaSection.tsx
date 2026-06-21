import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="w-full py-[80px] lg:py-[120px] bg-white">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="relative w-full bg-surface-soft rounded-3xl overflow-hidden shadow-sm flex flex-col md:flex-row items-center justify-between border border-[#e2e8f0]">
          
          {/* Left Content */}
          <div className="p-10 md:p-16 lg:p-24 z-10 max-w-2xl">
            <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-medium leading-[1.1] tracking-tight text-surface-dark mb-6">
              Still Confused?
            </h2>
            <p className="text-[16px] md:text-[18px] text-[#666666] mb-10 max-w-md">
              Tell us what you need. We'll help you find the right technology.
            </p>
            <Link href="#find-laptop" className="inline-flex items-center justify-center h-14 rounded-full bg-surface-dark px-10 text-[16px] font-medium text-white hover:bg-black transition-all shadow-xl shadow-black/10">
              Find My Laptop
            </Link>
          </div>

          {/* Right Image (Workspace/Tech) */}
          <div className="w-full md:w-1/2 h-[300px] md:h-full md:absolute md:right-0 md:top-0 bottom-0 pointer-events-none">
            {/* Using a mask image gradient to seamlessly fade the image into the background color on the left edge */}
            <div className="absolute inset-0 bg-linear-to-r from-surface-soft via-surface-soft/50 to-transparent z-10 hidden md:block"></div>
            <img 
              src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1000&h=800&fit=crop" 
              alt="Workspace" 
              className="w-full h-full object-cover" 
            />
          </div>

        </div>
      </div>
    </section>
  );
}
