// src/pages/Work.jsx
import React, { useState } from "react";
import split from "../../assets/split.png";
// Replace with your image
import ProjectCard from "../ProjectCard";
import movie_store from "../../assets/movie_store.png"
const projects = [
  {
    number: 1,
    title: "Spli Expense  ",
    desc:
      "The Split Expense App is designed to help groups of friends, roommates, or teams manage shared expenses efficiently. Users can create or join groups, add expenses, and track who paid what. The app automatically calculates each member's balance and shows how much they owe or are owed. Users must be authenticated to access or contribute to any group, ensuring secure and private data handling. The interface is responsive and easy to use across all devices, making expense tracking simple and intuitive for users on the go.",
    tech: "ReactJS, Node,Express, TailwindCSS",
    image: split,
    liveLink: "https://your-live-demo-link.com",
    githubLink: "https://github.com/Anuradha021/split_expense",
  },
  {
    number: 2,
    title: "Movie Store ",
    desc:
      "This a Web app having interactive UI, with attractive user interface where you can search and see ratings and descriptions of your favourite movie. All It to movies are fetched using IMDB Api and you can also provide your rating into it. is basically a Frontend project which | have created to learn to handle data fetching from API’s and also handle side effects, prop drilling, component creation in effective way so to improve code readability.",
    tech: "ReactJS, Node,Express, TailwindCSS",
    image: movie_store,
    liveLink: "https://your-live-demo-link.com",
    githubLink: "https://github.com/Anuradha021/Your_movie_store",
  },
  
  // Add more project objects here
];

const Work = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="min-h-screen bg-purple-900 text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <ProjectCard {...projects[index]} />

        {/* Arrows */}
        <div className="flex justify-center gap-4 mt-10">
          <button onClick={handlePrev} className="bg-purple-500 px-4 py-2 rounded hover:bg-purple-600">
            {"<"}
          </button>
          <button onClick={handleNext} className="bg-purple-500 px-4 py-2 rounded hover:bg-purple-600">
            {">"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Work;
