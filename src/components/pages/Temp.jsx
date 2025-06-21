import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const services = [
  {
    id: "01",
    title: "FrontEnd Development",
    desc: "The process of building the visual and interactive parts of a website or application.",
  },
  {
    id: "02",
    title: "Backend Development",
    desc: "The process of working on the server-side software of a website, ensuring the website functions properly.",
  },
  {
    id: "03",
    title: "Problem Solving",
    desc: "Techniques in computer science that includes methods for finding solutions to complex issues.",
  },
  {
    id: "04",
    title: "Responsive Building",
    desc: "Approach to make web pages render well on all screen sizes and resolutions while ensuring usability.",
  },
];

const Services = () => {
  return (
    <section className="bg-black text-white py-16">
      <h2 className="text-4xl font-bold text-center mb-12">
        <span className="text-white">Services</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative border border-purple-500 rounded-xl p-6 bg-[#2a0033] transition-transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500"
          >
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-purple-300">{service.id}</span>
              <div className="bg-white text-purple-800 p-2 rounded-full">
                <FaArrowRight />
              </div>
            </div>
            <h3 className="mt-6 text-xl font-bold text-white">{service.title}</h3>
            <p className="text-sm text-gray-300 mt-2">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
