"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface HeroProps {
  name?: string;
  title?: string;
  tagline?: string;
  imageUrl?: string;
}

export default function Hero({
  name = "Nexatech",
  title = "Build Your Awesome Platform",
  tagline = "Next studio is a digital studio that offers several services such as UI/UX Design to developers, we will provide the best service for those of you who use our services.",
  imageUrl = "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&q=80",
}: HeroProps) {
  const onViewWorkClick = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 bg-[#1E1B2E] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-8 h-8 text-white opacity-20">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      </div>
      <div className="absolute bottom-1/3 left-1/4 w-12 h-12 text-white opacity-10">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 12h18M12 3v18" />
        </svg>
      </div>
      <div className="absolute top-1/3 left-1/3 w-24 h-12 text-white opacity-10">
        <svg
          viewBox="0 0 100 50"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path d="M0 25h100 M20 10l60 30 M20 40l60-30" />
        </svg>
      </div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="flex flex-col justify-center z-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-[#5D5FEF] flex items-center justify-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="font-medium">{name}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {title}
          </h1>

          <p className="text-lg text-gray-300 mb-8 max-w-lg">{tagline}</p>

          <div>
            <Button
              onClick={onViewWorkClick}
              className="group bg-[#5D5FEF] hover:bg-[#4B4ACF] text-white px-6 py-3 rounded-md"
            >
              Our Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Right content - Image */}
        <div className="relative flex justify-center items-center z-10">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-4 border-[#5D5FEF]/20 shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&q=80"
              alt="Man in yellow sweater"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Decorative elements around image */}
          <div className="absolute -top-10 -right-10 w-20 h-20 border-2 border-[#5D5FEF]/30 rounded-full"></div>
          <div className="absolute -bottom-5 -left-5 w-10 h-10 border border-white/20 rounded-full"></div>

          {/* Additional decorative elements from the design */}
          <div className="absolute top-1/4 right-1/4 text-white opacity-20">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
          <div className="absolute bottom-1/4 right-1/3 text-white opacity-10">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
