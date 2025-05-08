import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Mobile App Design",
      image:
        "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800&q=80",
      description: "UI/UX Design for mobile streaming app",
    },
    {
      id: 2,
      title: "Website Redesign",
      image:
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80",
      description: "Modern website redesign for furniture company",
    },
    {
      id: 3,
      title: "Mobile App Design",
      image:
        "https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=800&q=80",
      description: "UI/UX Design for productivity app",
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-20 px-6 md:px-12 lg:px-24 bg-[#1E1B2E] text-white relative"
    >
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-10 w-24 h-12 text-white opacity-10">
        <svg
          viewBox="0 0 100 50"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path d="M0 25h100 M20 10l60 30 M20 40l60-30" />
        </svg>
      </div>
      <div className="absolute top-20 right-20 w-12 h-12 text-white opacity-10">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2v20" />
          <path d="M2 12h20" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            My Awesome Portfolio
          </h2>
          <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v8" />
              <path d="M8 12h8" />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <Card
              key={item.id}
              className="bg-[#252338] border-none rounded-xl overflow-hidden h-full"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Decorative zigzag at bottom */}
      <div className="w-full flex justify-center mt-16">
        <svg
          width="120"
          height="24"
          viewBox="0 0 120 24"
          fill="none"
          stroke="white"
          strokeWidth="1"
          className="opacity-30"
        >
          <path d="M0 12 L20 4 L40 20 L60 8 L80 16 L100 4 L120 12" />
        </svg>
      </div>
    </section>
  );
};

export default Portfolio;
