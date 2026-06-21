import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Globe, MessageCircle, Share2 } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full flex flex-col transition-all duration-300">
      {/* Top Bar */}
      <div className="w-full bg-[#111111]/50 backdrop-blur-md text-gray-400 h-10 flex items-center border-b border-white/10 relative z-10">
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 lg:px-12 text-[12px] sm:text-[13px]">
          
          {/* Left: Contact Info */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
              <Phone className="w-3.5 h-3.5 text-[#00A7B5]" />
              <span className="font-medium tracking-wide">+91 9060557296</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
              <Mail className="w-3.5 h-3.5 text-[#00A7B5]" />
              <span className="font-medium tracking-wide">info@klarone.in</span>
            </div>
          </div>

          {/* Center: Welcome Message */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center">
            <span className="font-medium">
              Welcome to Klarone! <span className="text-white">Book your FREE consultation today.</span>
            </span>
          </div>

          {/* Right: Social Icons */}
          <div className="flex items-center gap-3">
            <Link href="#" className="text-gray-400 hover:text-[#00A7B5] transition-colors">
              <Globe className="w-3.5 h-3.5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#00A7B5] transition-colors">
              <MessageCircle className="w-3.5 h-3.5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#00A7B5] transition-colors">
              <Share2 className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </div>

      {/* Main Navbar */}
      <div className="w-full bg-white/80 backdrop-blur-md border-b border-transparent transition-all duration-300">
        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-12">
        
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="flex items-center justify-center transition-transform group-hover:scale-105">
            <Image src="/logo.webp" alt="Klarone Logo" width={110} height={32} className="object-contain h-7 w-auto" style={{ width: 'auto' }} />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#how-it-works" className="text-[14px] font-medium text-[#666666] hover:text-surface-dark transition-colors relative group">
            How it Works
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-surface-dark transition-all group-hover:w-full"></span>
          </Link>
          <Link href="#services" className="text-[14px] font-medium text-[#666666] hover:text-surface-dark transition-colors relative group">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-surface-dark transition-all group-hover:w-full"></span>
          </Link>
          <Link href="#top-picks" className="text-[14px] font-medium text-[#666666] hover:text-surface-dark transition-colors relative group">
            Top Picks
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-surface-dark transition-all group-hover:w-full"></span>
          </Link>
          <Link href="#faq" className="text-[14px] font-medium text-[#666666] hover:text-surface-dark transition-colors relative group">
            FAQ
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-surface-dark transition-all group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <Link 
            href="/shop" 
            className="hidden sm:inline-flex h-10 items-center justify-center rounded-full border border-hairline bg-white px-5 text-[14px] font-medium text-surface-dark transition-all hover:bg-gray-50"
          >
            Shop Now
          </Link>
          <Link 
            href="/find-laptop" 
            className="inline-flex h-10 items-center justify-center rounded-full bg-surface-dark px-5 text-[14px] font-medium text-white transition-all hover:bg-black"
          >
            Find My Laptop
          </Link>
        </div>

      </div>
      </div>
    </header>
  );
}
