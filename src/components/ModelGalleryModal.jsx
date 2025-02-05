// // OurModels.jsx
// import React, { useState, useEffect } from 'react';
// import client from "../sanity-config/sanityClient";
// import { XIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

// // First, let's create a Gallery Modal Component
// const ModelGalleryModal = ({ isOpen, onClose, images, modelName }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   if (!isOpen) return null;

//   const handlePrevious = () => {
//     setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
//       <div className="relative w-full max-w-6xl">
//         {/* Close Button */}
//         <button 
//           onClick={onClose}
//           className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
//         >
//           <XIcon className="w-8 h-8" />
//         </button>

//         {/* Main Image */}
//         <div className="relative h-[80vh] flex items-center justify-center">
//           <img
//             src={images[currentIndex]}
//             alt={`${modelName} ${currentIndex + 1}`}
//             className="max-h-full max-w-full object-contain"
//           />
          
//           {/* Navigation Buttons */}
//           <button
//             onClick={handlePrevious}
//             className="absolute left-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70"
//           >
//             <ChevronLeftIcon className="w-8 h-8" />
//           </button>
          
//           <button
//             onClick={handleNext}
//             className="absolute right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70"
//           >
//             <ChevronRightIcon className="w-8 h-8" />
//           </button>
//         </div>

//         {/* Thumbnails */}
//         <div className="absolute bottom-4 left-0 right-0">
//           <div className="flex justify-center gap-2 px-4 overflow-x-auto">
//             {images.map((img, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => setCurrentIndex(idx)}
//                 className={`w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden 
//                   ${currentIndex === idx ? 'ring-2 ring-white' : 'opacity-50'}`}
//               >
//                 <img
//                   src={img}
//                   alt={`Thumbnail ${idx + 1}`}
//                   className="w-full h-full object-cover"
//                 />
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Update ModelCard Component
// const ModelCard = ({ name, image, description, galleryImages }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [isGalleryOpen, setIsGalleryOpen] = useState(false);

//   return (
//     <>
//       <div 
//         className="relative w-80 h-[500px] group overflow-hidden rounded-2xl shadow-lg 
//           transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         onClick={() => setIsGalleryOpen(true)}
//       >
//         {/* Background Image */}
//         <div className="absolute inset-0 z-0">
//           <img 
//             src={image} 
//             alt={name} 
//             className="w-full h-full object-cover transition-transform duration-300 
//               group-hover:scale-110"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
//         </div>

//         {/* Model Details */}
//         <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
//           <h3 className={`text-3xl font-bold mb-2 transition-all duration-500 
//             ${isHovered ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
//             {name}
//           </h3>

//           {/* Hover Description */}
//           <div 
//             className={`absolute inset-0 bg-black/80 flex items-center justify-center p-6 
//               transition-all duration-500 transform 
//               ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}
//           >
//             <p className="text-center text-white text-base leading-relaxed">
//               {description}
//             </p>
//           </div>
//         </div>
//       </div>

//       <ModelGalleryModal
//         isOpen={isGalleryOpen}
//         onClose={() => setIsGalleryOpen(false)}
//         images={[image, ...galleryImages]} // Include main image in gallery
//         modelName={name}
//       />
//     </>
//   );
// };

// // Update OurModels Component
// function OurModels() {
//   const [models, setModels] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchModels = async () => {
//       try {
//         const result = await client.fetch(`
//           *[_type == "models"] {
//             name,
//             "mainImage": image.asset->url,
//             description,
//             "galleryImages": gallery[]{"url": asset->url}
//           }
//         `);
//         setModels(result);
//         setIsLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setIsLoading(false);
//       }
//     };

//     fetchModels();
//   }, []);

//   if (isLoading) return <div className="text-center py-12">Loading...</div>;
//   if (error) return <div className="text-center py-12 text-red-500">Error: {error}</div>;

//   return (
//     <div className="container mx-auto px-4 py-12">
//       <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-12 text-white">
//         Our Models
//       </h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
//         {models.map((model, index) => (
//           <ModelCard 
//             key={index}
//             name={model.name}
//             image={model.mainImage}
//             description={model.description}
//             galleryImages={model.galleryImages?.map(img => img.url) || []}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default OurModels;


import React, { useState, useEffect } from 'react';
import client from "../sanity-config/sanityClient";

function ModelCard({ name, image, description }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-80 h-[500px] group overflow-hidden rounded-2xl shadow-lg 
        transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-300 
            group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>

      {/* Model Details */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
        {/* Name */}
        <h3 className={`text-3xl font-bold mb-2 transition-all duration-500 
          ${isHovered ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          {name}
        </h3>

        {/* Book Now Button */}
        <div 
          className={`absolute left-1/2 -translate-x-1/2 bottom-6 z-20 transition-all duration-500 
            ${isHovered 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-full'}`}
        >
          <button 
            className="bg-[#8b5cf6] text-white px-6 py-2 rounded-full 
              font-semibold hover:bg-[#818cf8] transition-colors duration-300 
              shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Book Now
          </button>
        </div>

        {/* Hover Description */}
        <div 
          className={`absolute inset-0 bg-black/80 flex items-center justify-center p-6 
            transition-all duration-500 transform 
            ${isHovered 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-full'}`}
        >
          <p className="text-center text-white text-base leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function OurModels() {
  const [models, setModels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const result = await client.fetch(
          `*[_type == "models"] {
            name,
            "profileUrl": image.asset->url,
            description
          }`
        );
        setModels(result);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchModels();
  }, []);

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
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl md:text6xl font-extrabold text-center mb-15 text-white">Our Models</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        {models.map((model, index) => (
          <ModelCard 
            key={index}
            name={model.name}
            image={model.profileUrl}
            description={model.description}
          />
        ))}
      </div>
    </div>
  );
}

export default OurModels;
