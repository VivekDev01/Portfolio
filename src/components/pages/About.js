import React from 'react';
import AboutImg from "../assets/manwithpc.png"
const About = () => {
  return (

    <div id='about' className='w-full min-h-screen p-2 flex flex-col md:flex-row justify-center items-center md:py-16 bg-black'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <h2 className="text-3xl md:text-5xl font-bold text-yellow-300 mb-4 my-5">
            About <span className="text-red-500">Me</span>
          </h2>
          <h2 className='py-4 text-gray-300 text-2xl'>Hi there, my name is Vivek Dev Shah</h2>
          <div class="border border-white p-4">
            <p class="text-lg md:text-xl text-white mb-8">
              <p class="text-2xl font-serif"></p>
              I am a final-year BTech(Hons) student at the prestigious Indian Institute of Information Technology, Ranchi - an Institute of National Importance under an act of govt & MoE. I am a web Developer using MERN Stack.
              <br />
              <br />
              My passion lies at the intersection of Web development using the dynamic MERN Stack and the captivating realms of Artificial Intelligence and Machine Learning.
              <br />
              <br />
              Learning new things always excites me, and I am constantly seeking new challenges to expand my knowledge and skills.
            </p>
          </div>
        </div>
        <div className="w-72 h-72 md:w-auto md:h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 mx-auto my-4">
          <img src={AboutImg} className="rounded-xl w-full h-full object-cover" alt="/" />
        </div>

      </div>
      <br />
    </div>

  );
};

export default About;


