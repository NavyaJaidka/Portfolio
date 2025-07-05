
import { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/home' },
    { name: 'Projects', href: '/projects' },
    { name: 'Skills', href: '/skills' },
    { name: 'Certifications', href: '/certifications' },
    { name: 'About', href: '/about' },
  ];

  const isActive = (href: string) => location.pathname === href;

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="absolute top-0 left-0 right-0 bg-transparent backdrop-blur-sm border-b border-gray-700/20 dark:border-gray-700/50 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/home" className="text-2xl font-bold bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200">
            Navya Jaidka
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-3 py-2 font-medium transition-all duration-300 hover:scale-105 ${
                  isActive(item.href)
                    ? 'text-black dark:text-yellow-400'
                    : 'text-black dark:text-gray-300 hover:text-gray-700 dark:hover:text-yellow-400'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-black to-gray-800 dark:from-yellow-500 dark:via-yellow-400 dark:to-yellow-300 rounded-full"></div>
                )}
              </Link>
            ))}
            
            {/* Dark Mode Toggle */}
            
          </nav>

          {/* Mobile Menu Button and Dark Mode Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-700/20 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              {isDarkMode ? (
                <Sun size={20} className="text-yellow-500 dark:text-yellow-400" />
              ) : (
                <Moon size={20} className="text-black" />
              )}
            </button>
            <button
              className="p-2 rounded-lg hover:bg-gray-700/20 dark:hover:bg-gray-800 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} className="text-black dark:text-yellow-400" /> : <Menu size={24} className="text-black dark:text-yellow-600" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700/30 dark:border-gray-700/50 bg-gray-100/80 dark:bg-gray-900/95 backdrop-blur-lg">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 font-medium transition-colors duration-200 rounded-lg ${
                    isActive(item.href)
                      ? 'text-black dark:text-yellow-400 bg-gray-200/80 dark:bg-yellow-900/20'
                      : 'text-black dark:text-gray-300 hover:text-gray-700 dark:hover:text-yellow-400 hover:bg-gray-200/60 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
