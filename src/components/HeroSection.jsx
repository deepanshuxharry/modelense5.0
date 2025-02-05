import React, { useEffect, useState } from "react";
import { Camera, Play, ArrowRight } from "lucide-react";

const modelProfiles = [
  { name: "Model 1", path: "M1.JPG" },
  { name: "Model 2", path: "M2.JPG" },
  { name: "Model 3", path: "M3.JPG" },
  { name: "Model 4", path: "M4.JPG" },
  { name: "Model 5", path: "M5.JPG" },
  { name: "Model 6", path: "M6.JPG" },
  { name: "Model 7", path: "M7.JPG" },
  { name: "Model 8", path: "M8.JPG" },
];

function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [models, setModels] = useState(modelProfiles); // Directly use modelProfiles

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 200); // Delay the slide-up effect
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#1e293b] via-[#0a0a0a] to-[#0a0a0a] text-gray-100 py-16 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black via-black to-black"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side: Text Content */}
          <div className="space-y-6 pr-4">
            {/* Animated header with glow effect */}
            <h1
              className="text-4xl md:text-5xl font-extrabold mb-4 text-left bg-clip-text text-transparent 
              bg-gradient-to-r from-white via-[#bfdbfe] to-[#bfdbfe] 
              animate-gradient-x"
            >
              Welcome to Modelens
            </h1>

            {/* Refined subtitle with slide-up effect */}
            <p
              className={`text-base md:text-xl mb-6 text-left text-gray-200 leading-relaxed transition-transform duration-[1200ms] ease-out transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              We specialize in creating stunning visual narratives for brands,
              companies, and individuals. Transform your vision into impactful
              and memorable branding solutions.
            </p>

            {/* Enhanced Call-to-Action Button */}
            {/* <div className="flex flex-wrap space-x-4 ">
              <button
                className=" bgmain_clr group relative overflow-hidden px-6 py-2 md:px-8 md:py-3 rounded-full 
                bg-indigo-500 hover:bg-indigo-600 transition-all duration-300 
                flex items-center justify-center space-x-2 
                transform hover:-translate-y-1 hover:scale-105 
                shadow-md hover:shadow-lg"
              >
                <span className="absolute inset-0  opacity-0 group-hover:opacity-20 transition-opacity"></span>
                <Play className="mr-2 w-5 h-5 md:w-6 md:h-6 text-white" />
                <span className="font-semibold text-sm md:text-base ">
                  <a href="https://n3slge5h3us.typeform.com/to/oLy3MqVY" target="_blank" rel="noopener noreferrer">Schedule a Call</a>
                </span>
                <ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          </div> */}

<div className="flex flex-wrap space-x-4 ">
              <a
                href="/contact"
                target="_blank"
                rel="noopener noreferrer"
                className=" bgmain_clr group relative overflow-hidden px-6 py-2 md:px-8 md:py-3 rounded-full 
                bg-indigo-500 hover:bg-indigo-600 transition-all duration-300 
                flex items-center justify-center space-x-2 
                transform hover:-translate-y-1 hover:scale-105 
                shadow-md hover:shadow-lg"
              >
                <span className="absolute inset-0  opacity-0 group-hover:opacity-20 transition-opacity"></span>
                <Play className="mr-2 w-5 h-5 md:w-6 md:h-6 text-white" />
                <span className="font-semibold text-sm md:text-base ">
                  Schedule a Call
                </span>
                <ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>


          {/* Right Side: Image Gallery */}
          <div className="grid grid-cols-4 gap-2 md:gap-4 mt-8 md:mt-0">
            {models.map((model, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-md 
                  transform transition-all duration-300 
                  hover:scale-105 hover:rotate-1 
                  hover:shadow-lg group relative"
              >
                <img
                  src={model.path} // Use `path` from modelProfiles
                  alt={model.name}
                  className="w-full h-full object-cover 
                    transition-transform duration-300 
                    group-hover:brightness-90"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity 
                  flex items-end p-2 md:p-4"
                >
                  <Camera className="text-gray-300 absolute top-2 right-2 md:top-4 md:right-4 w-4 h-4 md:w-6 md:h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <p className="text-gray-100 font-semibold text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    {/* {model.name} */}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
