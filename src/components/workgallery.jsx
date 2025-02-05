import React from "react";

const WorkGallery = () => {
  const galleryItems = [
    {
      src: "sourin.jpg",
      artist: "Sourin India Handbags Photoshoot",
      description: "We collaborated with Sourin India to create a vibrant Instagram campaign showcasing their stylish handbags. The photoshoot featured trendy settings, diverse models, and engaging content like short videos and GIFs, all designed to highlight their innovative brand spirit. With clear call-to-action buttons and a cohesive visual theme, the campaign boosted engagement, increased conversions, and strengthened their brand identity.",
      client: "Sourin India",
      date: "January 2023"
    },
    
    {
      src: "Blysk.jpg",
      artist: "Blysk Jewelleries Photoshoot",
      description: "We worked with Blysk Jewelleries on a high-impact photoshoot, capturing over 100 jewelry pieces in just one day. With a team of skilled models, photographers, and a makeup artist, we produced versatile, high-resolution images that highlighted the brand's elegance and craftsmanship. These images were tailored for e-commerce, websites, and marketing use, helping boost engagement, conversions, and brand perception.",
      client: "Blysk Jewelleries",
      date: "February 2023"
    },    
    {
      src: "Cubecon.jpg",
      artist: "cubecon",
      description: "The photoshoot for KubeCon focused on creating a youthful and vibrant work gallery for their website by showcasing their t-shirt designs in a way that resonated with college students. With a diverse group of models and carefully curated props and settings, the shoot highlighted the energy and inclusivity of college life. High-resolution images captured dynamic poses and detailed views of the t-shirts, emphasizing their unique designs while ensuring versatility for use across social media, e-commerce, and marketing. The result was a professional, budget-friendly execution that enhanced KubeCon's brand appeal and broadened its reach within the college demographic.",
         client: "CubeCon T-Shirt Photoshoot",
      date: "June 2024"
    },
    {
      src: "w3.JPG",
      artist: "Bridal",
      description: "A stunning bridal photoshoot highlighting the richness of Indian wedding traditions. Featuring intricate attire and exquisite jewelry, the shoot captured the elegance and cultural essence of a grand wedding.",
      client: "Wedding Collection",
      date: "December 2023"
    },    
  ];

  return (
    <div className="bg-gradient-to-br from-blackpy-16">
      <section className="mt-10">
        <div className="container mx-auto px-4">
        <div className="text-center mb-24">
          <h1 className="text-6xl font-extrabold mb-6 bg-clip-text text-transparent 
            bg-gradient-to-r from-white to-purple-400">
            Work Gallery
          </h1>
          <div className="w-24 h-1 bg-[#d749ff] mx-auto rounded-full"/>
        </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl shadow-2xl group 
                          cursor-pointer transform transition-all duration-500 
                          hover:scale-105 hover:z-50"
              >
                <img
                  src={item.src}
                  alt={item.artist}
                  className="w-full h-[600px] object-cover transition-transform 
                          duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/75 opacity-0 
                            group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute inset-0 p-8 flex flex-col 
                              justify-center items-center text-center 
                              transform translate-y-10 group-hover:translate-y-0 
                              transition-transform duration-500">
                    <h3 className="text-3xl font-bold text-white mb-4">
                      {item.artist}
                    </h3>
                    <p className="text-gray-200 text-lg mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="text-purple-400 text-sm">
                      <p className="mb-2">Client: {item.client}</p>
                      <p>Date: {item.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkGallery;