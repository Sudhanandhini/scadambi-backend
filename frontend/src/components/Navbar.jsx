import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/S-Cadambi_Logo-white.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [divisionsOpen, setDivisionsOpen] = useState(false);
    const [mobileDivisionsOpen, setMobileDivisionsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Check if we are on the home page for transparent header logic
    const isHome = location.pathname === '/';

    const divisions = [
        { name: 'S. Cadambi Shishu Chaitanya', link: '/play-school' },
        { name: 'S.Cadambi Education Center Pre Primary School', link: '/pre-primary' },
        { name: 'S Cadambi Vidya Kendra English Secondary School', link: '/icse-primary' },
        { name: 'S. Cadambi Vidya Kendra English high School [ICSE]', link: '/icse-high' },
        { name: 'S.Cadambi Vidya Kendra High School [State]', link: '/high-school' },
        { name: 'S Cadambi Independent PU College', link: '/pu-college' },
    ];

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Academics', href: '/academics' },
        { name: 'Admissions', href: '/admissions' },
        { name: 'Facilities', href: '/facilities' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${
                scrolled || !isHome ? 'bg-[#0F2A4A] backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 cursor-pointer">
                        <div className="w-[300px] flex items-center justify-center">
                            <img src={logo} alt="S. Cadambi Vidya Kendra Logo" className="w-full h-full object-contain" />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={`text-sm font-medium transition-colors hover:text-secondary ${
                                    scrolled || !isHome ? 'text-white' : 'text-white/90'
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        
                        {/* Divisions Dropdown - Desktop */}
                        <div 
                            className="relative"
                            onMouseEnter={() => setDivisionsOpen(true)}
                            onMouseLeave={() => setDivisionsOpen(false)}
                        >
                            <button
                                className={`text-sm font-medium transition-colors hover:text-secondary flex items-center gap-1 ${
                                    scrolled || !isHome ? 'text-white' : 'text-white/90'
                                }`}
                            >
                                Our Divisions
                                <ChevronDown size={16} className={`transition-transform ${divisionsOpen ? 'rotate-180' : ''}`} />
                            </button>
                            
                            <AnimatePresence>
                                {divisionsOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full right-0 mt-2 w-80 bg-white rounded-lg shadow-xl overflow-hidden"
                                    >
                                        <div className="py-2">
                                            {divisions.map((division, index) => (
                                                <Link
                                                    key={index}
                                                    to={division.link}
                                                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#0F2A4A] hover:text-white transition-colors border-b border-gray-100 last:border-b-0"
                                                    onClick={() => setDivisionsOpen(false)}
                                                >
                                                    {division.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                     
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`${scrolled || !isHome ? 'text-white' : 'text-white'} focus:outline-none`}
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white shadow-xl overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-8 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-4 text-base font-medium text-text hover:text-primary hover:bg-gray-50 rounded-md border-b border-gray-100"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            
                            {/* Divisions Dropdown - Mobile */}
                            <div className="border-b border-gray-100">
                                <button
                                    onClick={() => setMobileDivisionsOpen(!mobileDivisionsOpen)}
                                    className="w-full flex items-center justify-between px-3 py-4 text-base font-medium text-text hover:text-primary hover:bg-gray-50 rounded-md"
                                >
                                    Our Divisions
                                    <ChevronDown 
                                        size={20} 
                                        className={`transition-transform ${mobileDivisionsOpen ? 'rotate-180' : ''}`} 
                                    />
                                </button>
                                
                                <AnimatePresence>
                                    {mobileDivisionsOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden bg-gray-50 rounded-md mb-2"
                                        >
                                            {divisions.map((division, index) => (
                                                <Link
                                                    key={index}
                                                    to={division.link}
                                                    onClick={() => {
                                                        setIsOpen(false);
                                                        setMobileDivisionsOpen(false);
                                                    }}
                                                    className="block px-6 py-3 text-sm text-gray-700 hover:text-[#0F2A4A] hover:bg-gray-100 border-b border-gray-200 last:border-b-0"
                                                >
                                                    {division.name}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div className="pt-4">
                                <Link to="/admissions" onClick={() => setIsOpen(false)}>
                                    <button className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg shadow-md">
                                        Apply Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;