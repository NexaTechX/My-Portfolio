"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-12 lg:px-24 bg-[#1E1B2E] text-white relative"
    >
      {/* Decorative elements */}
      <div className="absolute bottom-10 right-10 w-12 h-12 text-white opacity-10">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
      </div>
      <div className="absolute top-20 left-20 w-8 h-8 text-white opacity-10">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contact me for the service you want to use
          </h2>
        </div>

        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                value={formState.name}
                onChange={handleChange}
                required
                className="bg-[#252338] border-none rounded-xl text-white placeholder:text-gray-400 h-12"
              />
            </div>
            <div className="space-y-2">
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your email address"
                value={formState.email}
                onChange={handleChange}
                required
                className="bg-[#252338] border-none rounded-xl text-white placeholder:text-gray-400 h-12"
              />
            </div>
            <div className="space-y-2">
              <Textarea
                id="message"
                name="message"
                placeholder="Your message"
                value={formState.message}
                onChange={handleChange}
                required
                className="min-h-32 bg-[#252338] border-none rounded-xl text-white placeholder:text-gray-400"
              />
            </div>
            <div className="flex justify-center">
              <Button
                type="submit"
                className="bg-[#5D5FEF] hover:bg-[#4B4ACF] text-white px-8 py-3 rounded-xl"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Contact us"}
              </Button>
            </div>
            {isSubmitted && (
              <p className="text-green-400 text-center mt-4">
                Thank you! Your message has been sent successfully.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
