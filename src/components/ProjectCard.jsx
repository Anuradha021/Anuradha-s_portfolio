// src/components/ProjectCard.jsx
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ number, title, desc, tech, image, liveLink, githubLink }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10">
      {/* Left: Text Content */}
      <div className="flex-1 text-left">
        <h2 className="text-6xl font-extrabold text-purple-400 mb-2">0{number}</h2>
        <h3 className="text-3xl font-bold mb-4">{title}</h3>
        <p className="text-gray-300 text-sm mb-4 leading-loose">{desc}</p>
        <p className="text-purple-300 text-sm italic mb-4">{tech}</p>

        {/* Links */}
        <div className="flex items-center gap-6 mt-2">
          <a href={liveLink} target="_blank" rel="noreferrer" className="text-purple-400 text-xl">
            <FiExternalLink />
          </a>
          <a href={githubLink} target="_blank" rel="noreferrer" className="text-purple-400 text-xl">
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Right: Image */}
      <div className="bg-white rounded-2xl p-4">
        <img src={image} alt={title} className="w-[300px] md:w-[400px] rounded-lg" />
      </div>
    </div>
  );
};

export default ProjectCard;
