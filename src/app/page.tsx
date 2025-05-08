import React from "react";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Portfolio from "@/components/sections/portfolio";
import VideoSection from "@/components/sections/video-section";
import Contact from "@/components/sections/contact";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1E1B2E] text-white">
      <Navigation />

      <main>
        <Hero />

        <VideoSection />

        <Services />

        <Portfolio />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
