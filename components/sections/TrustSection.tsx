export default function TrustSection() {
  return (
    <section className="w-full py-[80px] lg:py-[120px] bg-surface-dark text-white">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="max-w-xl">
            <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-tight text-white mb-6">
              Trusted by a Growing Global Community
            </h2>
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-12 lg:pl-12">
            <p className="text-[16px] md:text-[18px] text-gray-400">
              Join thousands of professionals, students, and businesses using Klarone to make smarter, more confident technology decisions.
            </p>

            <div className="grid grid-cols-2 gap-12">
              <div className="flex flex-col gap-2">
                <span className="text-[48px] md:text-[64px] font-medium text-white leading-none">10K+</span>
                <span className="text-[14px] text-gray-400 font-medium">Recommendations Made</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[48px] md:text-[64px] font-medium text-white leading-none">50+</span>
                <span className="text-[14px] text-gray-400 font-medium">Brands Analyzed</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-baseline gap-1">
                  <span className="text-[48px] md:text-[64px] font-medium text-white leading-none">4.9</span>
                  <span className="text-[20px] text-gray-400 font-medium">/5</span>
                </div>
                <span className="text-[14px] text-gray-400 font-medium">User Satisfaction</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[48px] md:text-[64px] font-medium text-white leading-none">₹5Cr+</span>
                <span className="text-[14px] text-gray-400 font-medium">Budget Optimized</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
