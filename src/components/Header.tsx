import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Courses', path: '/courses' },
  { name: 'Faculty', path: '/faculty' },
  { name: 'Notice', path: '/notice' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeLinkStyle = {
    color: '#607AFB',
    fontWeight: '700',
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-light-gray/80 backdrop-blur-sm border-b border-gray-200' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-3">
            <img src="/images/logo.png" alt="MMINS Logo" className="h-8 w-8" />
            <span className="text-lg font-bold whitespace-nowrap" style={{ color: '#0090FE' }}>Maheshtala Municipal Institute Of Nursing Sciences</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className="text-sm font-medium text-dark-blue hover:text-primary transition-colors"
                style={({ isActive }) => isActive && link.path !== '/' ? activeLinkStyle : undefined}
                end={link.path === '/'}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <a href="#" className="bg-primary text-white text-sm font-bold py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors">
              Apply Now
            </a>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
        <div className="flex flex-col gap-4 px-4 pt-2 pb-4 border-t border-gray-200 bg-light-gray/95">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-dark-blue hover:text-primary transition-colors"
              style={({ isActive }) => isActive ? activeLinkStyle : undefined}
              end={link.path === '/'}
            >
              {link.name}
            </NavLink>
          ))}
          <a href="#" className="bg-primary text-white text-center text-sm font-bold py-2.5 px-4 rounded-lg hover:bg-opacity-90 transition-colors mt-2">
            Apply Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
