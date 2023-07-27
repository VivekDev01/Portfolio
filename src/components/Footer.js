import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Footer() {
return (
  <div className="bg-black text-gray-400">
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-auto mb-4 md:mb-0">
          <h2 className="font-bold text-lg mb-2">Contact Me</h2>
           <a href="mailto:vivek65.ugcs20@iiitranchi.ac.in" className="inline-block mr-4">
           <FaEnvelope className="inline-block mr-2" />
            Email
          </a>
        </div>

     
      <div className="w-full md:w-auto mb-4 md:mb-0">
          <h2 className="font-bold text-lg mb-2">Social Media</h2>
            <a href="https://instagram.com/vivek_dev01" className="inline-block mr-4">
            <FaInstagram className="inline-block mr-2" />
              Instagram
            </a>
            <a href="https://www.linkedin.com/in/vivek-dev-shah-654521212/" className="inline-block mr-4">
            <FaLinkedin className="inline-block mr-2" />
              LinkedIn
            </a>
            <a href="https://github.com/VivekDev01/" className="inline-block"  >
            <FaGithub className="inline-block mr-2" />
              GitHub
            </a>
        </div>
    </div>
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between">
          <div className="text-sm text-gray-400">
            <p>All rights reserved &copy; 2023</p>
          </div>

          <div className="text-sm text-gray-400">
            <p>
               Vivek Dev Shah
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;