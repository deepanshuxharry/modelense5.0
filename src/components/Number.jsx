import React from 'react'

function Number() {
    return (
        <div className="text-center py-8 mt-12 mb-5 workbef">
                <div className="text-center mb-12">
          <h1 className="text-6xl font-extrabold mb-6 mt-5 bg-clip-text text-transparent 
            bg-gradient-to-r from-white to-purple-400">
            Modelens has worked with
          </h1>
          <div className="w-24 h-1 bg-[#d749ff] mx-auto rounded-full" />
        </div>
        <div class="about-stats">
            <div data-animation="fadeInLeft" class="stat animated fadeInLeft">
                <h3>250+</h3>
                <p>People</p>
            </div>
            <div data-animation="fadeInLeft" class="stat animated fadeInLeft">
                <h3>15+</h3>
                <p>Team Members</p>
            </div>
            <div data-animation="fadeInLeft" class="stat animated fadeInLeft">
                <h3>15+</h3>
                <p>Companies Worked</p>
            </div>
        </div>
          <div className="grid  md:grid-cols-1  max-w-4xl mx-auto ">
            <div className="text-center">
              <img
                src="work.png"
                alt="work"
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>

          </div>
        </div>
      );
}

export default Number