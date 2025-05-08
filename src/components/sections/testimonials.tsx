"use client";

import TestimonialCard from "@/components/testimonial-card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "John is an exceptional developer who consistently delivers high-quality code. His attention to detail and problem-solving skills make him a valuable asset to any team.",
      name: "Sarah Johnson",
      title: "CTO at TechStart",
      imageSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      quote:
        "Working with John was a pleasure. He understood our requirements perfectly and delivered a solution that exceeded our expectations. His communication skills are top-notch.",
      name: "Michael Chen",
      title: "Product Manager at InnovateCorp",
      imageSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    },
    {
      quote:
        "John's technical expertise and dedication to quality made our project a success. He's not just a developer but a true problem solver who thinks about the big picture.",
      name: "Emily Rodriguez",
      title: "Founder at WebSolutions",
      imageSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  return (
    <section id="testimonials" className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight mb-12 text-center">
          Testimonials
        </h2>

        {isMobile ? (
          <div className="relative">
            <TestimonialCard {...testimonials[currentIndex]} />
            <div className="flex justify-center mt-6 gap-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={prevTestimonial}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={nextTestimonial}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
