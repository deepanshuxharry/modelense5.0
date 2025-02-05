import React, { useState, useEffect } from 'react';

const CardCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    {
      name: 'Lavanya',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
      text: 'Great services and amazing staff!',
    },
    {
      name: 'Divya',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
      text: 'Modelens have a great team!',
    },
    {
      name: 'Tousif',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
      text: 'Incredible experience working with Modelens!',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="flex justify-center items-center mt-8 overflow-hidden">
      <div className="relative flex justify-center items-center w-full max-w-md md:max-w-lg">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute w-full transform transition-all duration-1000 ease-in-out ${
              activeIndex === index
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-full'
            }`}
          >
            <div className="bg-white p-6 rounded-lg shadow-xl text-center hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-purple-500"
              />
              <h3 className="text-xl font-semibold text-purple-600">{testimonial.name}</h3>
              <p className="text-gray-700 mt-2">{testimonial.text}</p>
              <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:outline-none">
                Show More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;