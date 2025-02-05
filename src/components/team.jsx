import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const founders = [
    {
      name: "Kashish Raizada",
      position: "Founder & CEO",
      image: "Kashish Raizada _ Founder & CEO.jpg",
      description: "Leading the vision of Modelens, transforming ideas into stunning visuals that captivate and resonate with audiences. Specializing in creating unique and powerful visual narratives that help brands stand out.",
    }
  ];

  const teamMembers = [
    {
      name: "Lavanya Khamani",
      position: "Co-Lead",
      image: "Lavanya Khamani_ Co-lead .jpg",
    },
    {
      name: "Sonia",
      position: "Co-Lead & Event Manager",
      image: "Sonia _ Co Lead & Event Manager .jpg",
    },
    {
      name: "Kanika",
      position: "Social Media Writer",
      image: "Kanika _ Social Media Writer .jpg",
    },
    {
      name: "Hardik",
      position: "Tech Manager & Web Developer",
      image: "Hardik manager.jpg",
      link: "https://www.linkedin.com/in/hardikchadha1/",
    },
    {
      name: "Darakhshan",
      position: "Web Developer and Designer",
      image: "Darakhshan web developer.jpg",
      link: "https://www.linkedin.com/in/darakhshan-zehra-6072ba257/",
    },
    {
      name: "Dhruv Jain",
      position: "Full Stack Developer",
      image: "Dhruv backend developer.jpg",
      link: "https://www.linkedin.com/in/dhruv-jain-7000b6227/",
    },
    {
      name: "Divya",
      position: "Web Developer and Designer",
      image: "Divya Web Developer.jpg",
      link: "https://www.linkedin.com/in/divya-chaudhary-327615285",
    },
  ];

  return (
    <div className="min-h-screen py-20 mt-5 ">

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent 
          bg-gradient-to-r from-purple-400 to-white mb-2 mt-5">
          Meet Our Team
        </h2>
        <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full mb-8"/>
      </motion.div>

      {/* Founder Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto px-4 mb-32"
      >
        {founders.map((founder, index) => (
          <div key={index} className="relative group">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div 
                initial={{ x: -50 }}
                animate={{ x: 0 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-purple-600/20 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300"/>
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="relative z-10 w-full h-[500px] object-cover rounded-2xl shadow-xl"
                />
              </motion.div>
              
              <motion.div 
                initial={{ x: 50 }}
                animate={{ x: 0 }}
                className="space-y-6 p-6"
              >
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-white">{founder.name}</h3>
                  <p className="text-purple-400 text-xl">{founder.position}</p>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {founder.description}
                </p>
              </motion.div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Team Grid */}
      <div class="rowss">

      <div class="effect12 containerss">
            <img src="umang2.jpeg" class="firstImg" alt=""></img>
            <img src="umang.jpeg" class="secondImg" alt=""></img>
            <img src="umang.jpeg" class="thirdImg" alt=""></img>
            <div className="overlay">
            <h1>Umang Pradhan</h1>
            <p>Tech Manager</p>
            </div>
        </div>

        <div class="effect12 containerss">
            <img src="deep.jpeg" class="firstImg" alt=""></img>
            <img src="deep3.jpeg" class="secondImg" alt=""></img>
            <img src="deep3.jpeg" class="thirdImg" alt=""></img>
            <div className="overlay">
            <h1>Deepanshu Sharma</h1>
            <p>Backend Developer</p>
            </div>
        </div>

  

        </div>

      
      <div className="max-w-7xl mx-auto px-4">

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
              onClick={() => member.link && window.open(member.link, "_blank")}
            >
              <div className="absolute inset-0 bg-purple-600/20 rounded-xl transform group-hover:translate-x-2 
                group-hover:translate-y-2 transition-transform duration-300"/>
                
              <div className="relative bg-gray-900 rounded-xl overflow-hidden">
                <div className="aspect-w-3 aspect-h-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"/>
                </div>
                <div className="absolute bottom-0 w-full p-6 space-y-2 transform translate-y-6 
                  group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-purple-400">{member.position}</p>
                </div>
              </div>
              
            </motion.div>
            
          ))}

        </motion.div>
        
      </div>




    </div>
  );
};

export default TeamSection;
