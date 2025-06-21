import React, { useState } from 'react';
import { motion } from 'framer-motion';

const tabs = ["Experience", "Education", "Skills", "About Me"];

const content = {
  Experience: [
    {
      year: "Summer 2024",
      role: "FullStack Development Intern",
      company: "Intimetec Vision soft Pvt Ltd"
    },
    {
      year: "Summer 2023",
      role: "Flutter Intern",
      company: "I7 Infomedia LLP"
    },
    {
      year: "Summer 2022",
      role: "Web Development Intern",
      company: "Matrix Solutions"
    },
  ],
  Education: [
    "B.Tech in Computer Science - Poornima Institute of Engineering and Technology, Jaipur",
    "12th - Gurukul Senior Secondary School, Khinyala",
    "10th - Gurukul Senior Secondary School, Khinyala"
  ],
  Skills: [
    "React.js", "Node.js", "Tailwind CSS", "MongoDB", "Firebase", "Appwrite", "Flutter", "Git"
  ],
  "About Me": [
    "I'm a passionate developer who loves building smart and scalable web applications. I am driven by curiosity to explore new challenges and understanding the ever-evolving tech landscape. In addition to my technical expertise, I pride myself on my problem solving abilities, analytical thinking, and effective communication skills."
  ]
};

const Resume = () => {
  const [activeTab, setActiveTab] = useState("Experience");

  return (
    <motion.section
      className="min-h-screen bg-gradient-to-b from-[#14001a] to-[#2e0052] text-white p-8 flex flex-col md:flex-row"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Left Sidebar */}
      <div className="flex md:flex-col gap-4 md:w-1/4 mb-6 md:mb-0">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
              activeTab === tab
                ? "bg-purple-500 text-white"
                : "bg-[#1a1a1a] text-white hover:bg-purple-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Right Content */}
      <div className="md:w-3/4 md:pl-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{activeTab}</h2>

        {/* Experience */}
        {activeTab === "Experience" && (
          <div className="grid md:grid-cols-2 gap-6">
            {content.Experience.map((exp, idx) => (
              <div
                key={idx}
                className="bg-[#1a1a1a] rounded-xl p-6 shadow-lg hover:shadow-purple-500 transition"
              >
                <p className="text-purple-400 font-semibold mb-2">{exp.year}</p>
                <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                <p className="text-gray-400">{exp.company}</p>
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {activeTab === "Education" && (
  <div className="grid md:grid-cols-2 gap-6">
    {/* Replace this static list with styled cards */}
    <div className="bg-[#1a1a1a] rounded-xl p-6 shadow-lg hover:shadow-purple-500 transition">
      <p className="text-purple-400 font-semibold mb-2">2021-2025</p>
      <h3 className="text-lg font-bold mb-1">BTech in Computer Science</h3>
      <p className="text-gray-400">PIET, Jaipur</p>
    </div>
    <div className="bg-[#1a1a1a] rounded-xl p-6 shadow-lg hover:shadow-purple-500 transition">
      <p className="text-purple-400 font-semibold mb-2">2018-2019</p>
      <h3 className="text-lg font-bold mb-1">Senior Secondary Class</h3>
      <p className="text-gray-400">Gurukul Senior Secondary School, Khinyala</p>
    </div>
    <div className="bg-[#1a1a1a] rounded-xl p-6 shadow-lg hover:shadow-purple-500 transition">
      <p className="text-purple-400 font-semibold mb-2">2016-2017</p>
      <h3 className="text-lg font-bold mb-1">Secondary Class</h3>
      <p className="text-gray-400">Gurukul Senior Secondary School, Khinyala</p>
    </div>
  </div>
)}

        {/* Skills */}
        {activeTab === "Skills" && (
          <div className="grid md:grid-cols-3 gap-4">
            {content.Skills.map((skill, idx) => (
              <div
                key={idx}
                className="bg-[#1a1a1a] rounded-xl p-4 text-center shadow-md hover:shadow-purple-500 transition"
              >
                <span className="text-purple-300 font-semibold">{skill}</span>
              </div>
            ))}
          </div>
        )}

        {/* About Me */}
        {activeTab === "About Me" && (
          <div className="bg-[#1a1a1a] rounded-xl p-6 shadow-lg hover:shadow-purple-500 transition max-w-3xl">
            <p className="text-gray-300 leading-relaxed">{content["About Me"][0]}</p>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Resume;
