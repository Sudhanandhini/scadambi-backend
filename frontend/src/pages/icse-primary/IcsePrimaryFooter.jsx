import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Clock, Facebook, ArrowRight, Heart, Phone } from 'lucide-react';
import logo from '../../assets/images/S-Cadambi_Logo-white.png';

const IcsePrimaryFooter = () => {
    const quickLinks = [
        { name: 'About Us', path: '/icse-primary/about' },
        { name: 'Academic', path: '/icse-primary/academic' },
        { name: 'Admissions', path: '/icse-primary/admissions' },
        { name: 'Facilities', path: '/icse-primary/facilities' },
        { name: 'Activities', path: '/icse-primary/activities' },
        { name: 'Faculty', path: '/icse-primary/faculty' },
        { name: 'Gallery', path: '/icse-primary/gallery' },
        { name: 'News & Events', path: '/icse-primary/news' },
        { name: 'Contact Us', path: '/icse-primary/contact' }
    ];

    const programs = [
        { name: 'S. Cadambi Shishu Chaitanya', link: '/play-school' },
        { name: 'S.Cadambi Education Center Pre Primary School', link: '/pre-primary' },
        { name: 'S Cadambi Vidya Kendra English Secondary School', link: '/icse-primary' },
        { name: 'S. Cadambi Vidya Kendra English High School [ICSE]', link: '/icse-high' },
        { name: 'S.Cadambi Vidya Kendra High School [State] ', link: '/high-school' },
        { name: 'S Cadambi Independent PU College', link: '/pu-college' },
    ];

    return (
        <footer className="bg-[#0F2A4A] text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* About Section */}
                    <div>
                        <div className="w-[300px]  flex items-center justify-center mb-4">
                <img src={logo} alt="S. Cadambi Vidya Kendra Logo" className="w-full h-full object-contain" />
              </div>

                        <p className="text-white/90 mb-4 leading-relaxed">
                            Building strong foundations through quality education. "Building Values through Education"
                        </p>
                       
                        <div className="flex items-center space-x-4">
                            <a
                                href="https://www.facebook.com/profile.php?id=100095136330780&mibextid=ZbWKwL"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 hover:bg-secondary hover:text-primary p-3 rounded-lg transition-all"
                            >
                                <Facebook size={20} />
                            </a>
                        </div>
                        <Link
                            to="/"
                            className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-all flex items-center border border-white/20 py-4 my-4"
                        >
                            <ArrowRight size={18} className="mr-2 rotate-180" />
                            Visit Main Website
                        </Link>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-secondary">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, idx) => (
                                <li key={idx}>
                                    <Link
                                        to={link.path}
                                        className="flex items-center text-white/90 hover:text-secondary transition-colors group"
                                    >
                                        <ArrowRight size={16} className="mr-2 group-hover:translate-x-1 transition-transform" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Programs */}
                    {/* Programs */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-secondary">Our Divisions</h3>
                        <ul className="space-y-3">
                            {programs.map((item, idx) => (
                                <li key={idx}>
                                    <Link
                                        to={item.link}
                                        className="flex items-center text-white/90 hover:text-secondary transition-colors group"
                                    >
                                        <ArrowRight
                                            size={16}
                                            className="mr-2 group-hover:translate-x-1 transition-transform"
                                        />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>


                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-secondary">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="text-secondary mr-3 mt-1 shrink-0" size={20} />
                                <span className="text-white/90 text-sm">
                                    # 1025, 10th Main Road,<br />
                                    2nd Cross Road, 3rd Stage,<br />
                                    Basaveshwaranagar,<br />
                                    Bangalore - 560079
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="text-secondary mr-3 shrink-0" size={20} />
                                <a href="mailto:scvk123@rediffmail.com" className="text-white/90 hover:text-secondary transition-colors text-sm">
                                    scvk123@rediffmail.com
                                </a>
                            </li>
                            <li className="flex items-start">
                                <Clock className="text-secondary mr-3 mt-1 shrink-0" size={20} />
                                <span className="text-white/90 text-sm">
                                    Mon - Fri: 8:45 AM - 2:30 PM<br />
                                    Sat: 8:45 AM - 11:40 AM<br />
                                    Every 2nd Saturday: Holiday
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/80">
                        <p className="flex items-center">
                            © 2025 S. Cadambi ICSE Primary Wing. All rights reserved.
                        </p>
                        <div className="flex items-center space-x-6">
                            <a
                                href="https://www.sunsys.in/"
                                className="flex items-center hover:text-white transition"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Made with
                                <Heart className="mx-1 text-secondary" size={16} fill="currentColor" />
                                by Sunsys Technologies
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default IcsePrimaryFooter;
