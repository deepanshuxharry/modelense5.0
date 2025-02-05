import React, { useState, useEffect } from 'react';
import client from "../sanity-config/sanityClient";
import imageUrlBuilder from '@sanity/image-url';

// Initialize the image URL builder
const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

function Event() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const query = '*[_type == "event"]';
    client.fetch(query).then((data) => setEvents(data));
  }, []);

  return (
    <div className="pt-32 min-h-screen bg-gradient-to-b from-black to-purple-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            Upcoming Events
          </h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event._id} className="group relative h-[450px] rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute inset-0">
                <img 
                  src={urlFor(event.eventImage).url()}  // Use urlFor to get the image URL
                  alt={event.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
              </div>
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform transition-all duration-500 group-hover:translate-y-[-100%]">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {event.name}
                  </h3>
                  <p className="text-purple-300 text-lg">
                    {new Date(event.date).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </p>
                </div>

                <div className="opacity-0 transform translate-y-full transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  <p className="text-gray-200 mb-6 line-clamp-3">
                    {event.description}
                  </p>
                  <a
                    href={event.bookingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full py-4 px-8 text-center text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold transform transition-all duration-300 hover:scale-105 hover:from-purple-500 hover:to-pink-500"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Event;