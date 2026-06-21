"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What makes Klarone different from a regular electronics store?",
    answer: "We focus on personalized advisory and guaranteeing you get the right tech, rather than just pushing inventory. We analyze your unique workflow and budget to recommend the perfect device, so you can buy with confidence."
  },
  {
    question: "How does the laptop recommendation process work?",
    answer: "It's simple: you tell us your budget, profession, and specific software needs. Our system, verified by human experts, matches you with the absolute best devices that fit your exact use case without overspending."
  },
  {
    question: "Are your refurbished laptops reliable?",
    answer: "Yes. Every refurbished device undergoes rigorous health checks, battery testing, and comes with a comprehensive warranty and quality grade. We only recommend devices we would confidently use ourselves."
  },
  {
    question: "Can I rent a laptop for just one month?",
    answer: "Absolutely. We offer flexible rental terms perfect for students, freelancers, temporary projects, and businesses needing to scale up their workforce for short periods without huge upfront costs."
  },
  {
    question: "How do I talk to an expert?",
    answer: "Simply click 'Find My Laptop' or reach out to us via our WhatsApp community link. Our technology experts are ready to provide free, unbiased guidance."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="w-full py-[80px] lg:py-[120px] bg-white">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-tight text-surface-dark mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#666666]">
            Everything you need to know about Klarone and our technology advisory process. 
            We're here to make buying your next laptop transparent and stress-free.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Image */}
          <div className="relative w-full rounded-3xl overflow-hidden shadow-sm flex items-center justify-center bg-gray-50 aspect-square lg:aspect-auto lg:h-[600px]">
            <img src="/Hero/hero3.webp" alt="Technology Setup" className="w-full h-full object-cover block hover:scale-105 transition-transform duration-700" />
          </div>

          {/* Right Column - FAQs */}
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${
                    isOpen ? "border-[#00A7B5] shadow-sm" : "border-[#e2e8f0] hover:border-gray-300"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none bg-white"
                  >
                    <span className={`text-[16px] md:text-[18px] font-medium transition-colors ${isOpen ? "text-surface-dark" : "text-surface-dark"}`}>
                      {faq.question}
                    </span>
                    <div className="shrink-0 text-surface-dark">
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </button>
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out bg-white ${
                      isOpen ? "max-h-[200px] pb-6 opacity-100" : "max-h-0 pb-0 opacity-0"
                    }`}
                  >
                    <p className="text-[15px] md:text-[16px] text-[#666666] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
