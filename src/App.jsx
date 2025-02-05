import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"; // Ensure Router is imported
import { motion } from 'framer-motion'; // Import framer-motion for smooth transitions
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import GetInTouchForm from "./components/GetInTouchForm";
import ServiceCards from "./components/servicecard";
import Footer from "./components/Footer";
import OurModels from "./components/OurModels";
import ProcessSection from "./components/process";
import Portfolio from "./components/portfolio";
import TeamSection from "./components/team";
import WorkGallery from "./components/workgallery";
import MakeupArtist from "./components/MakeupArtist";
import Photographers from "./components/Photographers";
import Number from "./components/Number";
import Event from './components/Event';


function App() {
  return (
    <Router> {/* Wrap everything inside Router */}
      <div>
        <Navbar />

        <Routes>
          {/* Home page route */}
          <Route
            path="/"
            element={
              <>
                <div className="pt-20">
                  <HeroSection />
                  <ServiceCards />
                   <Number /> 
                  <WorkGallery />
                  <ProcessSection />

                </div>
              </>
            }
          />
          
          {/* Other routes */}
        
          <Route path="/contact" element={<GetInTouchForm />} />
          <Route path="/services" element={<ServiceCards />} />
          <Route path="/our-models" element={<OurModels />} />
          <Route path="/team" element={<TeamSection />} />
          <Route path="/events" element={<Event/>} />
          <Route path="/makeupartist" element={<MakeupArtist />} />
          <Route path="/photographers" element={<Photographers />} />
          <Route path="/number" element={<Number />} />

        </Routes>

        <Footer />
      </div>
    </Router>  
  );
}

export default App;
