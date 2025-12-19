import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Menu, X, ChevronDown, ArrowLeft } from 'lucide-react';
import logo from '../../assets/images/S-Cadambi_Logo.png';

const HighSchoolHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const navItems = [
    { name: 'Home', path: '/high-school' },
    { name: 'About', path: '/high-school/about' },
    {
      name: 'Academic',
      path: '/high-school/academic',
      dropdown: [
        { name: 'Curriculum', path: '/high-school/academic' },
        { name: 'School Timings', path: '/high-school/schooltime' },
        { name: 'Academic Calendar', path: '/high-school/calender' },
      ]
    },
    { name: 'Admissions', path: '/high-school/admissions' },
    { name: 'Facilities', path: '/high-school/facilities' },
    { name: 'Activities', path: '/high-school/activities' },
    { name: 'News', path: '/high-school/news' },
    { name: 'Contact', path: '/high-school/contact' },
  ];

  return (
    <>
      {/* Top Bar */}


       <div className="bg-[#0F2A4A] text-white py-2">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-between items-center text-sm">
                        <div className="flex items-center space-x-4">
                            <Link to="/" className="flex items-center hover:text-[#FDB913] transition-colors">
                                <ArrowLeft size={14} className="mr-1" />
                                Back to Main Site
                            </Link>
                            <span className="hidden sm:inline">|</span>
                            <a href="mailto:scvk123@rediffmail.com" className="hidden sm:flex items-center hover:text-[#FDB913] transition-colors">
                                <Mail size={14} className="mr-1" />
                                scadambistatehighschool@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center">
                            <span className="text-xs">High School - Grades 6-10</span>
                        </div>
                    </div>
                </div>
            </div>







      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-white shadow-lg'
            : 'bg-white'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Title */}
            <Link to="/high-school" className="flex items-center gap-4">
              <div className="w-[300px] bg-white  flex items-center justify-center">
                <img src={logo} alt="S. Cadambi Vidya Kendra Logo" className="w-full h-full object-contain" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <>
                      <button className="px-4 py-2 text-primary hover:text-secondary font-medium transition-colors flex items-center gap-1">
                        {item.name}
                        <ChevronDown size={16} />
                      </button>
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-4 border-secondary">
                        {item.dropdown.map((dropItem) => (
                          <Link
                            key={dropItem.name}
                            to={dropItem.path}
                            className="block px-4 py-3 text-primary hover:bg-secondary hover:text-white transition-colors first:rounded-t-lg last:rounded-b-lg"
                          >
                            {dropItem.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`px-4 py-2 font-medium transition-colors ${isActive(item.path)
                          ? 'text-secondary border-b-2 border-secondary'
                          : 'text-primary hover:text-secondary'
                        }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-primary hover:text-secondary transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className="w-full text-left px-4 py-2 text-primary hover:bg-yellow-50 rounded-lg font-medium transition-colors flex items-center justify-between"
                      >
                        {item.name}
                        <ChevronDown
                          size={16}
                          className={`transform transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''
                            }`}
                        />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.dropdown.map((dropItem) => (
                            <Link
                              key={dropItem.name}
                              to={dropItem.path}
                              onClick={toggleMobileMenu}
                              className="block px-4 py-2 text-primary hover:bg-yellow-50 rounded-lg transition-colors"
                            >
                              {dropItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={toggleMobileMenu}
                      className={`block px-4 py-2 rounded-lg font-medium transition-colors ${isActive(item.path)
                          ? 'bg-secondary text-white'
                          : 'text-primary hover:bg-yellow-50'
                        }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/high-school/admissions"
                onClick={toggleMobileMenu}
                className="block text-center px-6 py-3 bg-secondary text-white rounded-full font-semibold hover:bg-yellow-600 transition-all mt-4"
              >
                Enroll Now
              </Link>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default HighSchoolHeader;
