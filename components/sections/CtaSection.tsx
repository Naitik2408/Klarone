import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="w-full py-[80px] lg:py-[120px] bg-white">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="relative w-full bg-[#111111] rounded-3xl overflow-hidden flex flex-col md:flex-row items-center justify-between">
          
          {/* Left Content */}
          <div className="p-10 md:p-16 lg:p-24 z-10 max-w-2xl relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white/90 text-sm font-medium mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#00A7B5] animate-pulse"></span>
              Free Expert Consultation
            </div>
            
            <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-medium leading-[1.1] tracking-tight text-white mb-6">
              Still confused even after using the AI?
            </h2>
            <p className="text-[16px] md:text-[18px] text-white/70 mb-10 max-w-lg leading-relaxed">
              Technology can be overwhelming. Get a free, personalized consultation from our human experts to help you choose the perfect device with complete confidence.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/consultation" className="inline-flex items-center justify-center h-14 rounded-full bg-[#00A7B5] px-8 text-[16px] font-medium text-white hover:bg-[#008f9c] transition-all shadow-xl shadow-[#00A7B5]/20 group">
                Talk to an Expert
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
              <Link href="/find-laptop" className="inline-flex items-center justify-center h-14 rounded-full bg-white/10 border border-white/20 px-8 text-[16px] font-medium text-white hover:bg-white/20 transition-all">
                Try AI Again
              </Link>
            </div>
          </div>

          {/* Right Image (Workspace/Tech) */}
          <div className="w-full md:w-1/2 h-[300px] md:h-full md:absolute md:right-0 md:top-0 bottom-0 pointer-events-none">
            {/* Using a mask image gradient to seamlessly fade the image into the background color on the left edge */}
            <div className="absolute inset-0 bg-linear-to-r from-[#111111] via-[#111111]/70 to-transparent z-10 hidden md:block"></div>
            <div className="absolute inset-0 bg-linear-to-t from-[#111111] via-[#111111]/70 to-transparent z-10 md:hidden block"></div>
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1000&h=800&fit=crop" 
              alt="Expert Consultation" 
              className="w-full h-full object-cover opacity-60" 
            />
          </div>

        </div>
      </div>
    </section>
  );
}
