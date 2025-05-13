
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import AirplaneLogo from '../assets/airplane-logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-primary/80 backdrop-blur-lg shadow-lg' : 'bg-primary/50 backdrop-blur-lg'
    } border-b border-white/10`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative h-10 w-10">
                <img 
                  src={AirplaneLogo}
                  alt="ReliabilityIQ Logo" 
                  className="h-10 w-10 p-1 rounded-full bg-white/10 border-2 border-secondary shadow-lg shadow-secondary/20 group-hover:scale-110 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-transparent rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">ReliabilityIQ</span>
                <span className="text-xs text-secondary/80">Aircraft Intelligence</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-secondary transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-secondary after:transition-all">Home</Link>
            <Link to="/product" className="text-gray-300 hover:text-secondary transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-secondary after:transition-all">Product</Link>
            <Link to="/interactive-demo" className="text-gray-300 hover:text-secondary transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-secondary after:transition-all">Interactive Demo</Link>
            <Link to="/contact" className="text-gray-300 hover:text-secondary transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-secondary after:transition-all">Contact</Link>
            <Link 
              to="/contact" 
              className="bg-secondary/20 border border-secondary text-secondary px-4 py-2 rounded-md hover:bg-secondary hover:text-white transition-all duration-300 hover:shadow-md hover:shadow-secondary/30"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-secondary transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden glass-effect rounded-lg mt-2 animate-fade-up">
            <div className="pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-300 hover:text-secondary transition-colors duration-300 hover:bg-white/5 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/product"
                className="block px-3 py-2 text-gray-300 hover:text-secondary transition-colors duration-300 hover:bg-white/5 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Product
              </Link>
              <Link
                to="/interactive-demo"
                className="block px-3 py-2 text-gray-300 hover:text-secondary transition-colors duration-300 hover:bg-white/5 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Interactive Demo
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-300 hover:text-secondary transition-colors duration-300 hover:bg-white/5 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 mt-4 bg-secondary text-white rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
