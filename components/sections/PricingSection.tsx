import Link from "next/link";

export default function PricingSection() {
  return (
    <section id="why-klarone" className="w-full py-[80px] lg:py-[120px] bg-white">
      <div className="mx-auto max-w-[1000px] px-6 lg:px-12">
        
        {/* Signature Dark Card for Mission Statement */}
        <div className="bg-surface-dark rounded-2xl p-12 lg:p-16 text-center shadow-xl">
          <h2 className="text-[32px] md:text-[40px] font-medium leading-[1.2] tracking-tight text-white mb-8">
            Technology should not be confusing.
          </h2>
          <p className="text-[18px] md:text-[20px] text-gray-300 leading-relaxed max-w-2xl mx-auto mb-10">
            Most people buy devices based on advertisements, confusing specifications, or pressure from salespeople. Klarone exists to help people make smarter technology decisions.
          </p>
          <Link href="#expert" className="inline-flex items-center justify-center h-12 rounded-full bg-white px-8 text-[15px] font-medium text-surface-dark hover:bg-gray-100 transition-all">
            Talk To An Expert
          </Link>
        </div>

      </div>
    </section>
  );
}
