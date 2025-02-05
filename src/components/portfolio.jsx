import React from "react";

// Portfolio data with sample images
const portfolioData = [
  {
    id: 1,
    link: "#",
    image: "https://via.placeholder.com/400x300?text=Portfolio+1",
    alt: "Portfolio 1",
    title: "Sample Project 1",
  },
  {
    id: 2,
    link: "#",
    image: "https://via.placeholder.com/400x300?text=Portfolio+2",
    alt: "Portfolio 2",
    title: "Sample Project 2",
  },
  {
    id: 3,
    link: "#",
    image: "https://via.placeholder.com/400x300?text=Portfolio+3",
    alt: "Portfolio 3",
    title: "Sample Project 3",
  },
  {
    id: 4,
    link: "#",
    image: "https://via.placeholder.com/400x300?text=Portfolio+4",
    alt: "Portfolio 4",
    title: "Sample Project 4",
  },
  {
    id: 5,
    link: "#",
    image: "https://via.placeholder.com/400x300?text=Portfolio+5",
    alt: "Portfolio 5",
    title: "Sample Project 5",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h4 className="text-3xl font-semibold text-center text-black mb-8 slide-right">Explore the Projects</h4>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioData.map((item) => (
            <div key={item.id} className="portfolio-item bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <a href={item.link} className="block relative slide-left">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-80 object-cover slide-right"
                />
                <h2 className=" slide-right absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white text-lg px-4 py-2 rounded">
                  {item.title}
                </h2>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
