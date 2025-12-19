import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, ArrowLeft, ChevronDown } from 'lucide-react';
import logo from '../../assets/images/S-Cadambi_Logo.png';

const PuCollegeHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/pu-college' },
    { name: 'About', path: '/pu-college/about' },
    {
      name: 'Academic',
      path: '/pu-college/academic',
      children: [
        { name: 'Curriculum', path: '/pu-college/academic' },
        { name: 'Academic Calendar', path: '/pu-college/calender' },
        { name: 'School Timings', path: '/pu-college/schooltime' }
      ]
    },
    { name: 'Admissions', path: '/pu-college/admissions' },
     { name: 'Activity', path: '/pu-college/activities' },
    { name: 'Facilities', path: '/pu-college/facilities' },
     { name: 'Gallery', path: '/pu-college/gallery' },
    { name: 'Contact', path: '/pu-college/contact' }
  ];

  const isActive = (item) => {
    if (item.children) {
      return item.children.some(child =>
        location.pathname.startsWith(child.path)
      );
    }
    return location.pathname === item.path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-md'
      }`}
    >
      {/* Top Bar */}
      <div className="bg-[#0F2A4A] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center hover:text-[#FDB913]">
              <ArrowLeft size={14} className="mr-1" />
              Back to Main Site
            </Link>
            <a
              href="mailto:cadambicollege@gmail.com"
              className="hidden sm:flex items-center hover:text-[#FDB913]"
            >
              <Mail size={14} className="mr-1" />
             cadambicollege@gmail.com
            </a>
          </div>
          <span className="text-xs">PU College – Science & Commerce</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/pu-college" className="flex items-center gap-3">
               <div className="w-[300px] bg-white  flex items-center justify-center">
                <img src={logo} alt="S. Cadambi Vidya Kendra Logo" className="w-full h-full object-contain" />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-2">
              {navItems.map((item, idx) =>
                item.children ? (
                  <div key={idx} className="relative group">
                    <button
                      className={`flex items-center gap-1 px-4 py-2 rounded-lg font-semibold ${
                        isActive(item)
                          ? 'text-[#FDB913] bg-[#FDB913]/10'
                          : 'text-gray-700 hover:text-[#FDB913]'
                      }`}
                    >
                      {item.name}
                      <ChevronDown size={16} />
                    </button>
                    <div className="absolute left-0 mt-2 w-52 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all">
                      {item.children.map((child, cidx) => (
                        <Link
                          key={cidx}
                          to={child.path}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={idx}
                    to={item.path}
                    className={`px-4 py-2 rounded-lg font-semibold ${
                      isActive(item)
                        ? 'text-[#FDB913] bg-[#FDB913]/10'
                        : 'text-gray-700 hover:text-[#FDB913]'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </nav>

            {/* Mobile Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-xl border-t">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item, idx) =>
              item.children ? (
                <div key={idx}>
                  <button
                    onClick={() =>
                      setOpenMobileDropdown(
                        openMobileDropdown === idx ? null : idx
                      )
                    }
                    className="w-full flex justify-between px-4 py-3 font-semibold"
                  >
                    {item.name}
                    <ChevronDown size={18} />
                  </button>
                  {openMobileDropdown === idx &&
                    item.children.map((child, cidx) => (
                      <Link
                        key={cidx}
                        to={child.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block pl-8 py-2 text-gray-700"
                      >
                        {child.name}
                      </Link>
                    ))}
                </div>
              ) : (
                <Link
                  key={idx}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 font-semibold text-gray-700"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default PuCollegeHeader;
