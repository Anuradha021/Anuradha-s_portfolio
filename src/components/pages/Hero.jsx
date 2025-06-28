import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const Home = () => {
  return (
    <section className="min-h-screen w-full bg-purple-900 flex flex-col md:flex-row text-white">
      {/* === Black Card on Top of Purple Background === */}
      <motion.div
        className="bg-black md:w-2/3 w-full m-8 rounded-xl shadow-lg flex flex-col md:flex-row p-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* === Left Content === */}
        <div className="flex-1 flex flex-col justify-center">
          <p className="text-sm text-purple-400 mb-2">Software Developer</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hello I'm <br />
            <span className="text-purple-500">Anuradha Joshi</span>
          </h1>
          <p className="mt-4 max-w-xl text-gray-300 text-sm md:text-base leading-relaxed">
            Passionate Computer Science student with strong technical and analytical skills,
            equipped with hands-on experience from diverse internships. I am committed to
            continuous learning and contributing to innovative ideas.
          </p>

          {/* Buttons and Socials */}
          <div className="mt-6 flex gap-4 flex-wrap items-center">
            <a
              href="/files/Anuradha-CV.pdf"
              download
              className="border-2 border-purple-500 text-sm px-4 py-2 rounded-full hover:bg-purple-600 transition-all flex items-center gap-2"
            >
              DOWNLOAD CV <span className="text-lg">⬇️</span>
            </a>
           <a href="https://github.com/Anuradha021" target="_blank" rel="noreferrer">
  <FaGithub className="text-2xl hover:text-purple-400" />
</a>
            <a href="https://linkedin.com/in/anuradha-joshi-701422256" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-2xl hover:text-purple-400" />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <FaInstagram className="text-2xl hover:text-purple-400" />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <FaTwitter className="text-2xl hover:text-purple-400" />
            </a>
          </div>
        </div>

       {/* === Image with Animated Dashed Line to the Right === */}
<motion.div
  className="hidden md:flex items-center justify-center relative flex-1"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>
  <img
    src="/images/anuradha_photo.jpg"
    alt="Anuradha"
    className="rounded-xl h-[30rem] w-[20rem] object-cover border-4 border-purple-500 shadow-xl z-10"
  />

  {/* Vertical dashed line on the right side of the image */}
  <div className="absolute right-[-40px] top-0 h-full w-[2px] animate-dash-line"></div>
</motion.div>

      </motion.div>

      {/* === Right Side Stats === */}
      <div className="md:w-1/3 w-full flex flex-col justify-center items-center p-10 gap-6">
        <Stat number={1} label="Years of Experience" />
        <Stat number={8} label="Projects" />
        <Stat number={8} label="Technologies Mastered" />
        <Stat number={5} label="Languages Learned" />
        <Stat number={21} label="Code Commits" />
      </div>
    </section>
  );
};

// Stats Reusable
const Stat = ({ number, label }) => (
  <motion.div
    className="text-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-4xl font-bold">
      <CountUp end={number} duration={2} />
    </h2>
    <p className="text-sm text-gray-200">{label}</p>
  </motion.div>
);

export default Home;
