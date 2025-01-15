

import React, { useState, useEffect } from 'react';
import client from "../sanity-config/sanityClient";

// Full-Screen Popup Gallery Component
const FullScreenGalleryPopup = ({ isOpen, onClose, images }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg overflow-y-auto flex flex-col">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white bg-gray-700 rounded-full p-2 hover:bg-gray-500 z-50"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Gallery Content */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-white text-3xl font-bold text-center mb-8">Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="w-full h-full">
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-200 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ModelCard Component
// function ModelCard({ name, image, gallery, description }) {
//   const [showGallery, setShowGallery] = useState(false);
//   const allImages = [image, ...(gallery || [])];

//   return (
//     <>
//       <div className="p-4 w-full">
//         <div
//           className="relative w-full h-[500px] group overflow-hidden rounded-2xl shadow-lg 
//             transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
//           onClick={() => setShowGallery(true)}
//         >
//           <img
//             src={image}
//             alt={name}
//             className="w-full h-full object-cover transition-transform duration-300 
//               group-hover:scale-110"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
//           <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
//             <h3 className="text-3xl font-bold mb-2">{name}</h3>
//             {description && (
//               <p className="text-sm text-gray-200 line-clamp-2">{description}</p>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Full-Screen Popup */}
//       <FullScreenGalleryPopup
//         isOpen={showGallery}
//         onClose={() => setShowGallery(false)}
//         images={allImages}
//       />
//     </>
//   );
// }


function ModelCard({ name, image, gallery, description }) {
  const [showGallery, setShowGallery] = useState(false);
  const allImages = [image, ...(gallery || [])];

  return (
    <>
      <div className="p-4 w-full">
        <div
          className="relative w-full h-[500px] group overflow-hidden rounded-2xl shadow-lg 
            transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
          onClick={() => setShowGallery(true)}
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 
              group-hover:scale-110"
          />
          {/* Gradient overlay with smooth transition */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent 
            opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Content container with smooth transition */}
          <div className="absolute inset-x-0 bottom-0 p-6 text-white transform transition-all duration-300">
            {/* Name and description container */}
            <div className="relative overflow-hidden">
              {/* Name with smooth transition */}
              <h3 className="text-3xl font-bold transform translate-y-0 group-hover:-translate-y-2 
                transition-transform duration-300">
                {name}
              </h3>
              
              {/* Description with smooth fade and slide */}
              <p className="text-sm text-gray-200 mt-2 opacity-0 transform translate-y-4 
                group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <FullScreenGalleryPopup
        isOpen={showGallery}
        onClose={() => setShowGallery(false)}
        images={allImages}
      />
    </>
  );
}

// CategoryButton Component
function CategoryButton({ category, activeCategory, onClick }) {
  return (
    <div className="p-2">
      <button
        onClick={() => onClick(category)}
        className={`px-6 py-2 rounded-full text-lg font-medium transition-all duration-300
          ${activeCategory === category 
            ? "bg-purple-600 text-white" 
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
      >
        {category}
      </button>
    </div>
  );
}

// OurModels Component
function OurModels() {
  const [models, setModels] = useState([]);
  const [filteredModels, setFilteredModels] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const result = await client.fetch(`
          *[_type == "professionals" && professionalType == "model"] {
            name,
            category,
            "profileUrl": image.asset->url,
            description,
            "galleryUrls": gallery[].asset->url
          }
        `);
        setModels(result);
        setFilteredModels(result);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchModels();
  }, []);

  const handleCategoryChange = (category) => {
    if (category === activeCategory) return;

    setActiveCategory(category);

    if (category === 'all') {
      setFilteredModels(models);
    } else {
      setFilteredModels(models.filter(model => 
        model.category.toLowerCase() === category.toLowerCase()
      ));
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-2xl text-gray-600">Loading models...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-2xl text-red-600">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="w-full px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h1 className="text-6xl font-extrabold mb-6 mt-5 bg-clip-text text-transparent 
            bg-gradient-to-r from-white to-purple-400">
            Our Models
          </h1>
          <div className="w-24 h-1 bg-[#d749ff] mx-auto rounded-full" />
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center mb-16">
          {["all", "fresher", "intermediate", "experienced"].map((category) => (
            <CategoryButton 
              key={category}
              category={category} 
              activeCategory={activeCategory} 
              onClick={handleCategoryChange} 
            />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredModels.map((model, index) => (
            <ModelCard
              key={index}
              name={model.name}
              image={model.profileUrl}
              gallery={model.galleryUrls}
              description={model.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurModels;