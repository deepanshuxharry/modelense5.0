import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-[#000] text-gray-800 border-t border-gray-200 conti_foot">
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Logo */}
          <div className="flex items-center justify-start">
            <img
              src="logo.png" // Replace with your logo path
              alt="Logo"
              className="h-20 w-20 mr-3"
            />
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg text-purple-600 mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/our-models" className="hover:text-purple-500">
                  Models
                </Link>
              </li>
              <li><Link to="/photographers" className="hover:text-purple-500">Photographers</Link></li>
              <li><Link to="/makeupartist" className="hover:text-purple-500">Makeup Artists</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg text-purple-600 mb-4">Contact</h3>
            <p className="text-gray-700">New Delhi, Delhi</p>
            <p className="text-gray-700">+91 8178517101</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.instagram.com/modelens.in/" className="text-purple-600 hover:text-purple-800">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/modelens/posts/?feedView=all" className="text-purple-600 hover:text-purple-800">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:modelensofficial@gmail.com" className="text-purple-600 hover:text-purple-800">
                <i className="fab fa-google"></i>
              </a>
            </div>
          </div>

          {/* Policy */}
          <div>
            <h3 className="font-semibold text-lg text-purple-600 mb-4">Policy</h3>
            <ul className="space-y-2">
              <li><a href="https://drive.google.com/file/d/1V6d0rccG1SIHewm3YGgiBmJxO__a5cJB/view" className="hover:text-purple-500">Terms and Conditions</a></li>
              {/* <li><a href="#" className="hover:text-purple-500">Privacy Policy</a></li> */}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} photographer. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
