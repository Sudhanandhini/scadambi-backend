import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react';
import logo from '../assets/images/S-Cadambi_Logo-white.png';

const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div>
                        <div className="w-[300px] flex items-center justify-center mb-4">
                <img src={logo} alt="S. Cadambi Vidya Kendra Logo" className="w-full h-full object-contain" />
              </div>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                            Empowering students to become global citizens through academic excellence and holistic development.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                                <a key={idx} href="#" className="text-gray-400 hover:text-secondary transition-colors">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                  <div>
    <h4 className="text-lg font-bold mb-6 text-secondary">Quick Links</h4>

    <ul className="space-y-3">
        {[
            { name: 'About Us', link: '/about' },
            { name: 'Admissions', link: '/admissions' },
            { name: 'Academics', link: '/academics' },
            { name: 'Campus Life', link: '/campus-life' },
            { name: 'Careers', link: '/careers' },
            { name: 'Contact', link: '/contact' },
        ].map((item) => (
            <li key={item.name}>
                <a 
                    href={item.link} 
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                    {item.name}
                </a>
            </li>
        ))}
    </ul>
</div>


                    {/* Divisions */}
                   <div>
    <h4 className="text-lg font-bold mb-6 text-secondary">Our Divisions</h4>

    <ul className="space-y-3">
        {[
             { name: 'S. Cadambi Shishu Chaitanya', link: '/scadambi/play-school' },
            { name: 'S.Cadambi Education Center Pre Primary School', link: '/scadambi/pre-primary' },
            { name: 'S Cadambi Vidya Kendra English Secondary School', link: '/scadambi/icse-primary' },
            { name: 'S. Cadambi Vidya Kendra English high School [ICSE]', link: '/scadambi/icse-high' },
            { name: 'S.Cadambi Vidya Kendra High School [State] ', link: '/scadambi/high-school' },
            { name: 'S Cadambi Independent PU College', link: '/scadambi/pu-college' },
        ].map((item) => (
            <li key={item.name}>
                <a 
                    href={item.link} 
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                    {item.name}
                </a>
            </li>
        ))}
    </ul>
</div>


                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-secondary">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <MapPin size={20} className="text-secondary flex-shrink-0 mt-1" />
                                <span className="text-gray-300 text-sm">123 Academic Avenue, Knowledge City, State - 560001</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={20} className="text-secondary flex-shrink-0" />
                                <span className="text-gray-300 text-sm">+91 98765 43210</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={20} className="text-secondary flex-shrink-0" />
                                <span className="text-gray-300 text-sm">admissions@scadambi.edu.in</span>
                            </li>
                        </ul>
                    </div>

                </div>

             

                <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/80">

                        <p className="flex items-center">
                            © 2025 S. Cadambi Wing. All rights reserved.
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


            </div>
        </footer>
    );
};

export default Footer;
