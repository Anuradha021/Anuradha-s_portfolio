import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-black text-white">
      <h1 className="text-3xl font-bold">Hi<span className="text-purple-500">.</span></h1>
      <ul className="flex gap-4">
        <li><Link to="/" className="hover:text-purple-400">Home</Link></li>
        
        <li><Link to="/services" className="hover:text-purple-400">Services</Link></li>
        <li><Link to="/Resume" className="hover:text-purple-400">Resume</Link></li>
        <li><Link to="/contact" className="hover:text-purple-400">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
