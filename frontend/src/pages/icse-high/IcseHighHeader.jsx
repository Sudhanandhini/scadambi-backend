import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, ArrowLeft, ChevronDown } from 'lucide-react';

import logo from '../../assets/images/S-Cadambi_Logo.png';

const IcseHighHeader = () => {
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

    const navItems = [
        { name: 'Home', path: '/icse-high' },
        { name: 'About', path: '/icse-high/about' },
        { 
            name: 'Academic', 
            path: '/icse-high/academic',
            children: [
                { name: 'Curriculum', path: '/icse-high/academic' },
                { name: 'School Timings', path: '/icse-high/timings' },
                { name: 'Academic Calendar', path: '/icse-high/calendar' }
            ]
        },
        { name: 'Admissions', path: '/icse-high/admissions' },
        { name: 'Activity', path: '/icse-high/activites' },
                { name: 'Facilities', path: '/icse-high/facilities' },
                { name: 'Gallery', path: '/icse-high/gallery' },
                 { name: 'News', path: '/icse-high/news' },
        { name: 'Contact', path: '/icse-high/contact' }
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-md'}`}>
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
                                scvk123@rediffmail.com
                            </a>
                        </div>
                        <div className="flex items-center">
                            <span className="text-xs">ICSE High School - Grades 6-10</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        {/* Logo */}
                        <Link to="/icse-high" className="flex items-center space-x-3">
                            <div className="w-[300px] bg-white  flex items-center justify-center">
                                           <img src={logo} alt="S. Cadambi Vidya Kendra Logo" className="w-full h-full object-contain" />
                                         </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-1">
                            {navItems.map((item, idx) => (
                                <div 
                                    key={idx} 
                                    className="relative"
                                    onMouseEnter={() => item.children && setActiveDropdown(idx)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <Link 
                                        to={item.path} 
                                        className={`px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-1 ${
                                            isActive(item.path) 
                                                ? 'text-[#FDB913] bg-[#FDB913]/10' 
                                                : 'text-gray-700 hover:text-[#FDB913] hover:bg-gray-50'
                                        }`}
                                    >
                                        {item.name}
                                        {item.children && <ChevronDown size={16} />}
                                    </Link>

                                    {/* Dropdown Menu */}
                                    {item.children && activeDropdown === idx && (
                                        <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                                            {item.children.map((child, childIdx) => (
                                                <Link
                                                    key={childIdx}
                                                    to={child.path}
                                                    className={`block px-4 py-2 text-sm font-medium transition-colors ${
                                                        isActive(child.path)
                                                            ? 'text-[#FDB913] bg-[#FDB913]/10'
                                                            : 'text-gray-700 hover:text-[#FDB913] hover:bg-gray-50'
                                                    }`}
                                                >
                                                    {child.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Mobile Menu Button */}
                        <button 
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                            className="lg:hidden text-[#0F2A4A] p-2"
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
                                        onClick={() => !item.children && setIsMobileMenuOpen(false)} 
                                        className={`flex items-center justify-between px-4 py-3 rounded-lg font-semibold transition-all ${
                                            isActive(item.path) 
                                                ? 'text-[#FDB913] bg-[#FDB913]/10' 
                                                : 'text-gray-700 hover:bg-gray-50'
                                        }`}
                                    >
                                        {item.name}
                                        {item.children && <ChevronDown size={16} />}
                                    </Link>
                                    
                                    {/* Mobile Dropdown */}
                                    {item.children && (
                                        <div className="ml-4 mt-2 space-y-1">
                                            {item.children.map((child, childIdx) => (
                                                <Link
                                                    key={childIdx}
                                                    to={child.path}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className={`block px-4 py-2 text-sm rounded-lg transition-colors ${
                                                        isActive(child.path)
                                                            ? 'text-[#FDB913] bg-[#FDB913]/10'
                                                            : 'text-gray-600 hover:text-[#FDB913] hover:bg-gray-50'
                                                    }`}
                                                >
                                                    {child.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <Link 
                                to="/icse-high/admissions" 
                                onClick={() => setIsMobileMenuOpen(false)} 
                                className="block w-full bg-[#FDB913] hover:bg-[#f5a503] text-[#0F2A4A] text-center font-bold px-6 py-3 rounded-lg transition-all mt-4"
                            >
                                Apply Now
                            </Link>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
};

export default IcseHighHeader;