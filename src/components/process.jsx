import React, { useEffect, useRef } from "react";

const ProcessSection = () => {
  const processSteps = [
    {
      number: "01",
      title: "Discuss",
      description: "Meet with clients to understand their needs and requirements.",
      icon: "💬"
    },
    {
      number: "02",
      title: "Plan",
      description: "Create a detailed plan and storyboard for the shoot.",
      icon: "📋"
    },
    {
      number: "03",
      title: "Shoot",
      description: "Execute the photoshoot with our professional team and equipment.",
      icon: "📸"
    },
    {
      number: "04",
      title: "Edit",
      description: "Edit and refine the images to ensure top-notch quality.",
      icon: "🎨"
    },
    {
      number: "05",
      title: "Deliver",
      description: "Deliver the final product to the client, ready for use.",
      icon: "🚀"
    },
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    const stepElements = document.querySelectorAll('.process-step');
    stepElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className=" mx-auto relative process_sec pt-5 mt-10">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"/>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"/>
      </div>

      <div className="text-center mb-16 relative">
        <h1 className=" mt-5 pt-5 text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent 
          bg-gradient-to-r from-white to-purple-400">
          The Process - Behind The Scenes
        </h1>
        <span className="text-purple-400 text-sm font-medium tracking-wider uppercase mb-2 block">
          Our Working Process
        </span>
        <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full"/>
      </div>

      <div className="relative">
        {/* Animated connecting line */}
        <div className="absolute hidden md:block left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600/30 via-purple-400/30 to-purple-600/30 -translate-x-1/2"/>

        {processSteps.map((step, index) => (
          <div 
            key={index} 
            className={`process-step relative flex flex-col md:flex-row items-center opacity-0
              ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} mb-12 md:mb-24`}
          >
            <div className={`w-full md:w-1/2 p-6 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
              <div className="space-y-4 group">
                <span className="inline-block text-purple-400 text-sm font-mono bg-purple-500/10 
                  px-3 py-1 rounded-full">
                  {step.number}
                </span>
                <h3 className="text-2xl font-bold text-white flex items-center gap-2
                  ${index % 2 === 0 ? 'md:justify-end' : ''} group-hover:text-purple-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-300 group-hover:text-white transition-colors">
                  {step.description}
                </p>
              </div>
            </div>

            {/* Enhanced Circle and Icon */}
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-purple-600/10 border-2 border-purple-600 
                flex items-center justify-center relative z-10 my-4 md:my-0
                transform transition-all duration-300 hover:scale-110 hover:rotate-12
                hover:border-purple-400 hover:bg-purple-500/20 group">
                <span className="text-3xl transform transition-transform duration-300 group-hover:scale-125">
                  {step.icon}
                </span>
                {/* Pulse effect */}
                <div className="absolute inset-0 rounded-full border-2 border-purple-400/20 
                  animate-ping opacity-75"/>
              </div>
            </div>

            <div className="hidden md:block w-full md:w-1/2"/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
