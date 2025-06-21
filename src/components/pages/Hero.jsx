import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.section
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
    >
      {/* Profile Image (optional) */}
     <img src="/images/anuradha_photo.jpg" className="w-32 h-32 rounded-full border-4 border-purple-500 mb-6" /> 

      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-center">
        Hello, I'm{' '}
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          Anuradha
        </span>
      </h1>

      <p className="text-lg text-gray-300 max-w-2xl text-center mb-8">
        A full stack developer passionate about building responsive web apps and solving real-world problems with code.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
     <div className="mt-8 flex flex-col items-center gap-4">
  {/* Button row with icons and download button aligned horizontally */}
  <div className="flex items-center gap-6">
    {/* GitHub */}
    <a
      href="https://github.com/Anuradha021"
      target="_blank"
      rel="noreferrer"
      className="text-white text-3xl hover:text-purple-400 transition-all"
    >
      <i className="fab fa-github"></i>
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/anuradha-joshi-701422256"
      target="_blank"
      rel="noreferrer"
      className="text-white text-3xl hover:text-purple-400 transition-all"
    >
      <i className="fab fa-linkedin"></i>
    </a>

    {/* Download CV Button */}
    <a
      href="/files/Anuradha-CV.pdf"
      download
      className="bg-transparent text-white border border-purple-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-purple-600 hover:border-purple-600 transition"
    >
      Download CV
    </a>
  </div>
</div>

      </div>

      <div className="mt-10 w-[80%] max-w-4xl h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 animate-pulse rounded-full"></div>
    </motion.section>
  );
};

export default Home;
