import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, ArrowLeft } from 'lucide-react';
import logo from '../../assets/images/S-Cadambi_Logo.png';

const PlaySchoolHeader = () => {
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
        { name: 'Home', path: '/play-school' },
        { name: 'About', path: '/play-school/about' },
        { 
            name: 'Academic', 
            path: '/play-school/academic',
            children: [
                { name: 'Academic Calendar', path: '/play-school/calendar' },
                { name: 'School Timings', path: '/play-school/timings' }
            ]
        },
        { name: 'Admissions', path: '/play-school/admissions' },
        { name: 'Facilities', path: '/play-school/facilities' },
        { name: 'Activities', path: '/play-school/activities' },
        { name: 'Gallery', path: '/play-school/gallery' },
        { name: 'News', path: '/play-school/news' },
        { name: 'Contact', path: '/play-school/contact' }
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
            <div className="bg-[#0F2A4A] text-white py-2">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-between items-center text-sm">
                        <div className="flex items-center space-x-4">
                            <Link to="/" className="flex items-center hover:text-[#FDB913] transition-colors">
                                <ArrowLeft size={14} className="mr-1" />
                                Back to Main Site
                            </Link>
                            <span className="hidden sm:inline">|</span>
                            <a
                                href="mailto:Shishuchaitanya2013@gmail.com"
                                className="hidden sm:flex items-center hover:text-[#FDB913] transition-colors"
                            >
                                <Mail size={14} className="mr-1" />
                                Shishuchaitanya2013@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center">
                            <span className="text-xs">Shishu Chaitanya - Ages 2.5-6 years</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        {/* Logo */}
                        <Link to="/play-school" className="flex items-center space-x-3">
                           
                             <div className="w-[300px] bg-white   flex items-center justify-center">
                                                        <img src={logo} alt="S. Cadambi Vidya Kendra Logo" className="w-full h-full object-contain" />
                                                    </div>

                            <div>
                               
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
                                                ? 'text-[#FDB913] bg-[#FDB913]/10'
                                                : 'text-gray-700 hover:text-[#FDB913] hover:bg-gray-50'
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
                                                                    ? 'text-[#FDB913] bg-[#FDB913]/10'
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
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`block px-4 py-3 rounded-lg font-semibold transition-all ${
                                            isActive(item)
                                                ? 'text-[#FDB913] bg-[#FDB913]/10'
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
                                                            ? 'text-[#FDB913] bg-[#FDB913]/10'
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
                                to="/play-school/admissions"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block w-full bg-[#FDB913] hover:bg-[#FDB913]/90 text-[#0F2A4A] text-center font-bold px-6 py-3 rounded-lg transition-all mt-4"
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

export default PlaySchoolHeader;
