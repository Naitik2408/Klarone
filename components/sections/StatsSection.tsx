import { CheckCircle2, MessageCircle, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Instagram = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const Facebook = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const socialLinks = [
  {
    name: "Instagram",
    username: "@klarone.tech",
    icon: Instagram,
    href: "#",
    hoverColor: "group-hover:text-pink-500",
    bgHover: "hover:border-pink-500/50"
  },
  {
    name: "LinkedIn",
    username: "Klarone",
    icon: Linkedin,
    href: "#",
    hoverColor: "group-hover:text-blue-400",
    bgHover: "hover:border-blue-400/50"
  },
  {
    name: "Facebook",
    username: "Klarone Official",
    icon: Facebook,
    href: "#",
    hoverColor: "group-hover:text-blue-600",
    bgHover: "hover:border-blue-600/50"
  },
  {
    name: "WhatsApp Group",
    username: "Join the discussion",
    icon: MessageCircle,
    href: "#",
    hoverColor: "group-hover:text-green-500",
    bgHover: "hover:border-green-500/50"
  }
];

export default function StatsSection() {
  return (
    <section id="community" className="w-full py-[80px] lg:py-[120px] bg-[#181d26] text-white">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="max-w-xl">
            <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-tight text-white mb-6">
              Join the Klarone Community
            </h2>
            <p className="text-[16px] md:text-[18px] text-gray-400 mb-8">
              Get exclusive access to our best insights and advice before anyone else. Connect with us on your favorite platform.
            </p>
            <ul className="flex flex-col gap-4">
              {[
                "Unbiased Buying Guides",
                "Personalized Technology Recommendations",
                "Actionable Technology Tips",
                "Exclusive Product Updates"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-[16px] text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#00A7B5] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Content - Social Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link 
                  key={social.name}
                  href={social.href}
                  className={`group bg-[#1d1f25] p-6 sm:p-8 rounded-3xl border border-gray-800 transition-all duration-300 ${social.bgHover} hover:bg-[#23262d]`}
                >
                  <div className="flex items-start justify-between mb-8">
                    <div className="p-3 rounded-xl bg-[#181d26] transition-colors border border-gray-800/50 shadow-inner group-hover:bg-[#1d1f25]">
                      <Icon className={`w-6 h-6 text-gray-400 transition-colors ${social.hoverColor}`} />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-[18px] font-medium text-white mb-1">{social.name}</h3>
                  <p className="text-[14px] text-gray-400">{social.username}</p>
                </Link>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
