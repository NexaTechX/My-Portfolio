import React from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#1E1B2E] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Enver Is The Best Choice?
            </h2>
            <p className="text-gray-300 mb-4">
              Watch this one minute video so you understand why you should use
              our services!
            </p>
          </div>

          <div className="relative rounded-xl overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 relative">
              <div className="absolute inset-0 bg-gray-800 rounded-xl">
                <div className="w-full h-full relative">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                    alt="Team meeting"
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button className="w-16 h-16 rounded-full bg-[#5D5FEF] hover:bg-[#4B4ACF] flex items-center justify-center">
                      <Play className="h-6 w-6 text-white" fill="white" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
