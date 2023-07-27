import React from 'react';
import Project1 from "../assets/wellbeing1.jpg"
import Project2 from "../assets/attendhub1.png"
import Project3 from "../assets/blogsite.png"
import Project4 from "../assets/todo1.png"
import Project5 from "../assets/arogya sahiya.png"
import Project6 from "../assets/keeper1.png"
import Project7 from "../assets/drumkit.png"
import Project8 from "../assets/todo-by-react.png"
import '../../index.css';
import { FiArrowRight } from 'react-icons/fi';

const Projects = () => {

  return (
    <div id="projects" className="w-full min-h-screen text-gray-300 bg-gradient-to-b from-blue-900 to-black">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-4xl font-bold text-yellow-300 mb-6 my-10 text-center">My <span className="text-red-500">Projects</span></h2>
        <p className="text-white mb-8 text-lg text-center">
        Here are some of my best projects,  the rest of the projects are available on GitHub (Click on Images to see Hosted Webite)
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <div className="bg-white rounded-lg shadow-lg">
            <img src={Project1} alt="Property" className="w-full max-h-66 object-cover rounded-t-lg h-1/3 md:h-66" />
              <div className="py-4 px-2 md:py-6 md:px-4 text-center justify-center">
                <h3 className="text-lg font-medium text-gray-900">WellBeing - Hospital & Doctor Appointment System</h3>
                  <p className="mt-2 text-gray-500 text-sm">Created a professional Appointment System “WellBeing” using MERN Stack.</p>
                  <button className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-red-500">
                <a
                  id
                  href='https://github.com/VivekDev01/WellBeing'
                    
                >
                  More info on GitHub    <FiArrowRight className="mr-2 inline-block" />
                </a>
                </button>
              </div>
            </div>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="bg-white rounded-lg shadow-lg">
            <img src={Project2} alt="Property" className="w-full max-h-66 object-cover rounded-t-lg h-1/3 md:h-66" />
               <div className="py-4 px-2 md:py-6 md:px-4 text-center justify-center">
                <h3 className="text-lg font-medium text-gray-900">AttendHub - AI based Attedance Management System</h3>
                   <p className="mt-2 text-gray-500 text-sm">Created a professional Attendance Management System using MERN Stack and ML/AI (Group Project)</p>             
                   <button className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-red-500">
                <a
                  id
                  href='https://github.com/VivekDev01/AttendHub'
                    
                >
                  More info on GitHub    <FiArrowRight className="mr-2 inline-block" />
                </a>
                </button>
              </div>
            </div>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="bg-white rounded-lg shadow-lg">
            <img src={Project3} alt="Property" className="w-full max-h-66 object-cover rounded-t-lg h-1/3 md:h-66" />
               <div className="py-4 px-2 md:py-6 md:px-4 text-center justify-center">
                <h3 className="text-lg font-medium text-gray-900">Blog Webite</h3>
                   <p className="mt-2 text-gray-500 text-sm">Created a professional Blog website for my blog posts using Node, Express, MongoDB, EJS, HTML, CSS.</p>           
                <button className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-red-500">
                <a
                  id
                  href='https://github.com/VivekDev01/my-personal-blog-website'
                    
                >
                   More info on GitHub    <FiArrowRight className="mr-2 inline-block" />
                </a>
                </button>
              </div>
            </div>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="bg-white rounded-lg shadow-lg">
            <img src={Project4} alt="Property" className="w-full max-h-66 object-cover rounded-t-lg h-1/3 md:h-66" />              
            <div className="py-4 px-2 md:py-6 md:px-4 text-center justify-center">
                <h3 className="text-lg font-medium text-gray-900">ToDo App</h3>
                  <p className="mt-2 text-gray-500 text-sm">Created a professional Todo app using Node, Express, MongoDB, EJS, HTML, CSS.</p>
                  <button className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-red-500">
                <a
                  id
                  href='https://github.com/VivekDev01/to-do-list'
                    
                >
                  More info on GitHub    <FiArrowRight className="mr-2 inline-block" />
                </a>
                </button>
              </div>
            </div>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="bg-white rounded-lg shadow-lg">
            <img src={Project8} alt="Property" className="w-full max-h-66 object-cover rounded-t-lg h-1/3 md:h-66" />              
            <div className="py-4 px-2 md:py-6 md:px-4 text-center justify-center">
                <h3 className="text-lg font-medium text-gray-900">ToDo App by React</h3>
                  <p className="mt-2 text-gray-500 text-sm">Created a professional Todo app using React</p>
                  <button className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-red-500">
                <a
                  id
                  href='https://github.com/VivekDev01/to-do-list-byreact'
                    
                >
                  More info on GitHub    <FiArrowRight className="mr-2 inline-block" />
                </a>
                </button>
              </div>
            </div>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="bg-white rounded-lg shadow-lg">
            <img src={Project5} alt="Property" className="w-full max-h-66 object-cover rounded-t-lg h-1/3 md:h-66" />              
            <div className="py-4 px-2 md:py-6 md:px-4 text-center justify-center">
                <h3 className="text-lg font-medium text-gray-900">Aarogya Sahiya</h3>
                  <p className="mt-2 text-gray-500 text-sm">Created a simple Management app layout for sahiyas using Node, Express, EJS, HTML, CSS.</p>          
                  <button className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-red-500">
                
                <a
                  id
                  href='https://github.com/VivekDev01/Arogya-Sahiya'
                    
                >
                  More info on GitHub    <FiArrowRight className="mr-2 inline-block" />
                </a>
                </button>
              </div>
            </div>
          </div>


          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="bg-white rounded-lg shadow-lg">
            <img src={Project6} alt="Property" className="w-full max-h-66 object-cover rounded-t-lg h-1/3 md:h-66"  onClick={() => window.open('https://keeper-app-vds.netlify.app/', '_blank')}/>              
            <div className="py-4 px-2 md:py-6 md:px-4 text-center justify-center">
                <h3 className="text-lg font-medium text-gray-900">Keeper App</h3>
                   <p className="mt-2 text-gray-500 text-sm">Created a simple keeper app using React.</p>
                   <button className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-red-500">
                <a
                  id
                  href='https://github.com/VivekDev01/keeper-app'
                    
                >
                  More info on GitHub    <FiArrowRight className="mr-2 inline-block" />
                </a>
                </button>
              </div>
            </div>
          </div>

           <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="bg-white rounded-lg shadow-lg">
            <img src={Project7} alt="Property" className="w-full max-h-66 object-cover rounded-t-lg h-1/3 md:h-66" onClick={() => window.open('https://drum-kit-new.vercel.app/', '_blank')} />              
            <div className="py-4 px-2 md:py-6 md:px-4 text-center justify-center">
               <h3 className="text-lg font-medium text-gray-900">Drum Kit</h3>
                  <p className="mt-2 text-gray-500 text-sm">Created a interesting drum kit using HTML, CSS, JavaScript.</p>
                   <button className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-red-500">
                <a
                  id
                  href='https://github.com/VivekDev01/drum-kit-new'
                    
                >
                   More info on GitHub    <FiArrowRight className="mr-2 inline-block" />
                </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;