// import React from 'react';

// const GetInTouchForm = () => {
//   return (
//     <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 p-10 rounded-2xl shadow-lg max-w-4xl mx-auto mtb-80">
//       <h2 className="text-3xl font-extrabold text-left text-gray-800 mb-6 md:text-4xl">
//         Get in Touch
//       </h2>
//       <form
//         action="https://formspree.io/f/your-form-id"  // Replace with your Formspree form endpoint  kr luga baad me kuldeep se puch 
//         method="POST"
//         className="grid grid-cols-1 gap-6 md:grid-cols-2"
//       >
//         <div className="md:col-span-1">
//           <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
//             Full Name
//           </label>
//           <input
//             type="text"
//             id="fullName"
//             name="fullName"
//             className="border border-gray-300 px-4 py-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
//             placeholder="Enter your full name"
//           />
//         </div>
//         <div className="md:col-span-1">
//           <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             className="border border-gray-300 px-4 py-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
//             placeholder="Enter your email"
//           />
//         </div>
//         <div className="md:col-span-1">
//           <label htmlFor="mobileNo" className="block text-gray-700 font-medium mb-2">
//             Mobile no.
//           </label>
//           <input
//             type="tel"
//             id="mobileNo"
//             name="mobileNo"
//             className="border border-gray-300 px-4 py-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
//             placeholder="Enter your mobile number"
//           />
//         </div>
//         <div className="md:col-span-1">
//           <label htmlFor="organisationLink" className="block text-gray-700 font-medium mb-2">
//             Organisation's link
//           </label>
//           <input
//             type="url"
//             id="organisationLink"
//             name="organisationLink"
//             className="border border-gray-300 px-4 py-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
//             placeholder="Enter your organisation's link"
//           />
//         </div>
//         <div className="md:col-span-2">
//           <p className="text-gray-700 font-medium mb-3">What services are you interested in?</p>
//           <div className="flex flex-wrap gap-3">
//             {['Brand Photoshoot', 'Modelling', 'Photography', 'Brand Consultant', 'Makeup', 'Others'].map((service) => (
//               <label key={service} className="flex items-center bg-gray-100 px-3 py-2 rounded-full cursor-pointer hover:bg-blue-100">
//                 <input type="checkbox" name="services" value={service} className="hidden" />
//                 <span className="text-sm text-gray-600">{service}</span>
//               </label>
//             ))}
//           </div>
//         </div>
//         <div className="md:col-span-2">
//           <p className="text-gray-700 font-medium mb-3">How did you hear about us?</p>
//           <div className="flex gap-4">
//             {['Instagram', 'LinkedIn', 'Referrals'].map((option) => (
//               <label key={option} className="flex items-center bg-gray-100 px-3 py-2 rounded-full cursor-pointer hover:bg-blue-100">
//                 <input type="radio" name="referral" value={option} className="hidden" />
//                 <span className="text-sm text-gray-600">{option}</span>
//               </label>
//             ))}
//           </div>
//         </div>
//         <div className="md:col-span-2">
//           <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
//             Want to add any specific message?
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             rows="4"
//             className="border border-gray-300 px-4 py-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
//             placeholder="Enter your message"
//           ></textarea>
//         </div>
//         <div className="md:col-span-2 flex justify-start">
//           <button
//             type="submit"
//             className="bg-defaulty text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300"
//           >
//             Send
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default GetInTouchForm;

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const GetInTouchForm = () => {
  const [focusedField, setFocusedField] = useState(null);
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    mobile: '',
    organisationLink: '',
    services: [],
    source: '',
    message: ''
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black-50 via-black py-16 px-4 mt-6 contiform">
           <div className="text-center mb-12">
          <h1 className="text-6xl font-extrabold mb-6 mt-5 bg-clip-text text-transparent 
            bg-gradient-to-r from-white to-purple-400">
           Contact Us
          </h1>
          <div className="w-24 h-1 bg-[#d749ff] mx-auto rounded-full" />
        </div>

      <motion.div 
        className="container mx-auto max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden mt-5"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left side - Hero Section */}
          <div className="bg-gradient-to-br from-purple-600 to-black p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <motion.div 
              className="relative z-10"
              variants={containerVariants}
            >
              <motion.h1 
                className="text-5xl font-bold mb-6 leading-tight"
                variants={itemVariants}
              >
                Let's make it <br/>a reality!
              </motion.h1>
              <motion.p 
                className="text-lg opacity-90 mb-8"
                variants={itemVariants}
              >
                We're excited to work with you soon! Please share your details & we'll get back in 2-3 working days!
              </motion.p>
              <motion.div 
                className="space-y-4"
                variants={itemVariants}
              >
                <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                <a 
                  href="mailto:modelensofficial@gmail.com" 
                  className="flex items-center gap-3 text-white/90 hover:text-white transition-colors group"
                >
                  <svg 
                    className="w-6 h-6 group-hover:scale-110 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  modelensofficial@gmail.com
                </a>
              </motion.div>
            </motion.div>

            {/* Decorative circles */}
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-white/10 rounded-full"></div>
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-white/10 rounded-full"></div>
          </div>

          {/* Right side - Form */}
          <div className="p-12">
            <form 
              action="https://formspree.io/f/xjkgrlpl"
              method="POST"
              className="space-y-8"
            >
              {/* Input fields */}
              {[
                { name: 'fullName', label: 'Full Name', type: 'text',  },
                { name: 'email', label: 'Email', type: 'email',  },
                { name: 'mobile', label: 'Mobile no.', type: 'tel',  },
                { name: 'organisationLink', label: "Organisation's link", type: 'url',  }
              ].map((field) => (
                <motion.div 
                  key={field.name}
                  variants={itemVariants}
                  className="relative"
                >
                  <label 
                    className={`absolute left-0 transition-all duration-300 ${
                      focusedField === field.name || formState[field.name]
                        ? '-top-6 text-sm text-purple-600'
                        : 'top-0 text-gray-500'
                    }`}
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    className="w-full border-b-2 border-gray-200 py-2 focus:border-purple-600 focus:outline-none transition-colors bg-transparent"
                    placeholder={field.placeholder}
                    onFocus={() => setFocusedField(field.name)}
                    onBlur={() => setFocusedField(null)}
                    onChange={(e) => setFormState({ ...formState, [field.name]: e.target.value })}
                  />
                </motion.div>
              ))}

              {/* Services Selection */}
              <motion.div variants={itemVariants} className="space-y-4">
                <p className="font-medium text-gray-700">What services are you interested in?</p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Brand Photoshoot',
                    'Modelling',
                    'Photography',
                    'Brand consultant',
                    'Makeup',
                    'Others'
                  ].map((service) => (
                    <label 
                      key={service} 
                      className="flex items-center gap-3 group cursor-pointer"
                    >
                      <div className="relative">
                        <input
                          type="checkbox"
                          name="services[]"
                          value={service}
                          className="appearance-none w-5 h-5 border-2 border-gray-300 rounded transition-colors
                            checked:bg-purple-600 checked:border-purple-600 cursor-pointer"
                        />
                        <svg
                          className="absolute inset-0 w-5 h-5 text-white pointer-events-none opacity-0 check:opacity-100 transition-opacity"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path d="M20 6L9 17l-5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-gray-600 group-hover:text-purple-600 transition-colors">
                        {service}
                      </span>
                    </label>
                  ))}
                </div>
              </motion.div>

              {/* Source Selection */}
              <motion.div variants={itemVariants} className="space-y-4">
                <p className="font-medium text-gray-700">How did you hear about us?</p>
                <div className="flex flex-wrap gap-6">
                  {['Instagram', 'LinkedIn', 'Referrals'].map((source) => (
                    <label 
                      key={source} 
                      className="flex items-center gap-3 group cursor-pointer"
                    >
                      <div className="relative">
                        <input
                          type="radio"
                          name="source"
                          value={source}
                          className="appearance-none w-5 h-5 border-2 border-gray-300 rounded-full transition-colors
                            checked:border-purple-600 cursor-pointer"
                        />
                        <div className="absolute inset-0 m-1 rounded-full transition-colors peer-checked:bg-purple-600"></div>
                      </div>
                      <span className="text-gray-600 group-hover:text-purple-600 transition-colors">
                        {source}
                      </span>
                    </label>
                  ))}
                </div>
              </motion.div>

              {/* Message */}
              <motion.div variants={itemVariants}>
                <label className="font-medium text-gray-700 block mb-2">
                  Want to add any specific message?
                </label>
                <textarea
                  name="message"
                  rows="4"
                  className="w-full border-2 border-gray-200 rounded-lg p-3 focus:border-purple-600 focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-lg font-medium
                  hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300
                  focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GetInTouchForm;