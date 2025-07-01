import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-black text-white">
      <h1 className="text-3xl font-bold">Hi<span className="text-purple-500">.</span></h1>
      <ul className="flex gap-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-purple-400 font-semibold border-b-2 border-purple-500 pb-1" : "hover:text-purple-400"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "text-purple-400 font-semibold border-b-2 border-purple-500 pb-1" : "hover:text-purple-400"
            }
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              isActive ? "text-purple-400 font-semibold border-b-2 border-purple-500 pb-1" : "hover:text-purple-400"
            }
          >
            Resume
          </NavLink>
        </li>
          <li>
          <NavLink
            to="/work"
            className={({ isActive }) =>
              isActive ? "text-purple-400 font-semibold border-b-2 border-purple-500 pb-1" : "hover:text-purple-400"
            }
          >
            Work
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-purple-400 font-semibold border-b-2 border-purple-500 pb-1" : "hover:text-purple-400"
            }
          >
            Contact
          </NavLink>
        </li>
       
      </ul>
    </nav>
  );
};

export default Navbar;
