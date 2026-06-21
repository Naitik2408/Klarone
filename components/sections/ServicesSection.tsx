import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Laptop Advisory",
    subtitle: "AI-driven recommendations verified by experts. Know exactly what you need.",
    image: "/service/service2.webp",
    link: "#advisory",
    position: "bottom"
  },
  {
    id: 2,
    title: "New & Refurbished",
    subtitle: "Shop with confidence. Rigorously tested, certified devices with warranty.",
    image: "/service/service3.webp",
    link: "#shop",
    position: "top"
  },
  {
    id: 3,
    title: "Laptop Rentals",
    subtitle: "Powerful technology for temporary projects, without the huge upfront cost.",
    image: "/service/service4.webp",
    link: "#rent",
    position: "bottom"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-[80px] lg:py-[120px] bg-white overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-tight text-surface-dark mb-6">
            Everything You Need
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#666666]">
            Whether you want to buy new, find a certified refurbished deal, or just rent for a project, we have you covered.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 lg:h-[500px]">
          {services.map((service, index) => (
            <Link 
              key={service.id} 
              href={service.link}
              className={`group relative w-full h-[400px] lg:h-full rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-xl ${
                index === 1 ? 'lg:flex-2' : 'lg:flex-1'
              }`}
            >
              {/* Background Image */}
              <img 
                src={service.image} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Gradient Overlay based on position */}
              <div 
                className={`absolute inset-0 ${
                  service.position === 'top' 
                    ? 'bg-linear-to-b from-black/80 via-black/10 to-transparent' 
                    : 'bg-linear-to-t from-black/80 via-black/10 to-transparent'
                }`}
              ></div>

              {/* Content */}
              <div 
                className={`absolute left-0 w-full p-8 flex justify-between ${
                  service.position === 'top' ? 'top-0 items-start' : 'bottom-0 items-end'
                }`}
              >
                <div className="flex flex-col text-white max-w-[80%]">
                  <h3 className="text-[20px] lg:text-[24px] font-medium mb-1 leading-snug">{service.title}</h3>
                  <p className="text-[14px] lg:text-[15px] text-white/80 line-clamp-2">{service.subtitle}</p>
                </div>
                
                {/* Arrow Icon Button */}
                <div className="w-10 h-10 shrink-0 rounded-full border border-white/30 flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-white group-hover:text-black group-hover:border-white transition-all ml-4">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
