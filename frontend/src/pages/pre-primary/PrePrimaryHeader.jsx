import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, ArrowLeft } from 'lucide-react';
import logo from '../../assets/images/S-Cadambi_Logo.png';

const PrePrimaryHeader = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', path: '/pre-primary' },
        { name: 'About', path: '/pre-primary/about' },
        { 
            name: 'Academic', 
            path: '/pre-primary/academic',
            children: [
                { name: 'Academic Calendar', path: '/pre-primary/calender' },
                { name: 'School Timings', path: '/pre-primary/schooltime' }
            ]
        },
        { name: 'Admissions', path: '/pre-primary/admissions' },
        { name: 'Facilities', path: '/pre-primary/facilities' },
        { name: 'Activities', path: '/pre-primary/activities' },
        {name:'Gallery', path:'/pre-primary/gallery'},
        { name: 'News', path: '/pre-primary/news' },
        { name: 'Contact', path: '/pre-primary/contact' }
    ];

    const isActive = (item) => {
        if (item.path === location.pathname) return true;
        if (item.children) {
            return item.children.some((child) => child.path === location.pathname);
        }
        return false;
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-md'
            }`}
        >
            {/* Top Bar */}
            <div className="bg-primary text-white py-2">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-between items-center text-sm">
                        <div className="flex items-center space-x-4">
                            <Link to="/" className="flex items-center hover:text-secondary transition-colors">
                                <ArrowLeft size={14} className="mr-1" />
                                Back to Main Site
                            </Link>
                            <span className="hidden sm:inline">|</span>
                            <a
                                href="mailto:scvk123@rediffmail.com"
                                className="hidden sm:flex items-center hover:text-secondary transition-colors"
                            >
                                <Mail size={14} className="mr-1" />
                                scvk123@rediffmail.com
                            </a>
                        </div>
                        <div className="flex items-center">
                            <span className="text-xs">Pre-Primary Wing - Ages 3-6 years</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        {/* Logo */}
                        <Link to="/pre-primary" className="flex items-center space-x-3">
                             <div className="w-[300px] bg-white  flex items-center justify-center">
                <img src={logo} alt="S. Cadambi Vidya Kendra Logo" className="w-full h-full object-contain" />
              </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-1">
                            {navItems.map((item, idx) => (
                                <div key={idx} className="relative group">
                                    <Link
                                        to={item.path}
                                        className={`px-4 py-2 rounded-lg font-semibold transition-all flex items-center ${
                                            isActive(item)
                                                ? 'text-secondary bg-secondary/10'
                                                : 'text-gray-700 hover:text-secondary hover:bg-gray-50'
                                        }`}
                                    >
                                        {item.name}
                                    </Link>

                                    {/* Dropdown for Academic */}
                                    {item.children && (
                                        <div
                                            className="
                                                absolute left-0 top-full pt-2 
                                                opacity-0 translate-y-1 pointer-events-none
                                                group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                                                transition-all duration-150 ease-out
                                            "
                                        >
                                            <div className="w-56 bg-white rounded-lg shadow-lg border border-gray-100">
                                                <div className="py-2">
                                                    {item.children.map((subItem, subIdx) => (
                                                        <Link
                                                            key={subIdx}
                                                            to={subItem.path}
                                                            className={`block px-4 py-2 text-sm rounded-md ${
                                                                location.pathname === subItem.path
                                                                    ? 'text-secondary bg-secondary/10'
                                                                    : 'text-gray-700 hover:bg-gray-50'
                                                            }`}
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Enroll Button */}
                        {/* <Link
                            to="/pre-primary/admissions"
                            className="hidden lg:block bg-secondary hover:bg-secondary/90 text-primary font-bold px-6 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                        >
                            Enroll Now
                        </Link> */}

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden text-primary p-2"
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
                        <nav className="space-y-2">
                            {navItems.map((item, idx) => (
                                <div key={idx}>
                                    <Link
                                        to={item.path}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`block px-4 py-3 rounded-lg font-semibold transition-all ${
                                            isActive(item)
                                                ? 'text-secondary bg-secondary/10'
                                                : 'text-gray-700 hover:bg-gray-50'
                                        }`}
                                    >
                                        {item.name}
                                    </Link>

                                    {/* Mobile sub-links for Academic */}
                                    {item.children && (
                                        <div className="mt-1 space-y-1 pl-6">
                                            {item.children.map((subItem, subIdx) => (
                                                <Link
                                                    key={subIdx}
                                                    to={subItem.path}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                                                        location.pathname === subItem.path
                                                            ? 'text-secondary bg-secondary/10'
                                                            : 'text-gray-600 hover:bg-gray-50'
                                                    }`}
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}

                            <Link
                                to="/pre-primary/admissions"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block w-full bg-secondary hover:bg-secondary/90 text-primary text-center font-bold px-6 py-3 rounded-lg transition-all mt-4"
                            >
                                Enroll Now
                            </Link>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
};

export default PrePrimaryHeader;
