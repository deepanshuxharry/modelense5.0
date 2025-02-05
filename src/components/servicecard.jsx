import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ image, title, description, className = '' }) => {
  return (
    <div
      className={`relative overflow-hidden rounded-xl shadow-lg transform 
      transition-all duration-500 hover:scale-105 hover:shadow-2xl ${className}
      hover:-translate-y-2`}
      style={{ 
        width: '350px', 
        height: '450px',
        perspective: '1000px'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10"/>
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-end p-8 z-20 
        bg-gradient-to-t from-black/90 via-black/50 to-transparent">
        <h3 className="text-white text-3xl font-bold mb-4 transform transition-all 
          duration-300 hover:scale-105 text-center">
          {title}
        </h3>
        <p className="text-gray-200 text-lg mb-6 opacity-0 transform translate-y-4 
          transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 
          text-center">
          {description}
        </p>
        <div className="w-16 h-1 bg-[#d749ff] rounded-full mb-4 transform scale-0 
          transition-transform duration-300 group-hover:scale-100"/>
      </div>
    </div>
  );
};

const ServiceCards = () => {
  return (
    <div className="relative bg-black text-white py-32 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[#d749ff] opacity-5 
        background-pattern rotate-12 scale-150"/>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h1 className="text-6xl font-extrabold mb-6 bg-clip-text text-transparent 
            bg-gradient-to-r from-white to-purple-400">
            Our Services
          </h1>
          <div className="w-24 h-1 bg-[#d749ff] mx-auto rounded-full"/>
        </div>

        <div className="flex flex-wrap justify-center gap-12 md:gap-16 lg:gap-20">
          {[
            {
              to: "/our-models",
              image: "https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80",
              title: "Models",
              description: "Connect with professional models for your next project"
            },
            {
              to: "/photographers",
              image: "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80",
              title: "Photographers",
              description: "Find expert photographers to capture your perfect moment"
            },
            {
              to: "/makeupartist",
              image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80",
              title: "Makeup Artists",
              description: "Hire talented makeup artists for your transformation"
            }
          ].map((service, index) => (
            <Link 
              to={service.to} 
              key={index}
              className="group transform transition-all duration-300 hover:scale-105"
            >
              <ServiceCard
                image={service.image}
                title={service.title}
                description={service.description}
                className="w-full"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
