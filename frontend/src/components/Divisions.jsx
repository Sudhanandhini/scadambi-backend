import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Baby, BookOpen, GraduationCap, School, ArrowUpRight, Trophy, Palette } from 'lucide-react';

import preschoolImg from '../assets/images/division_preschool.png';
import primaryImg from '../assets/images/division_primary.png';
import highschoolImg from '../assets/images/division_highschool.png';
import collegeImg from '../assets/images/division_college.png';
import sportsImg from '../assets/images/division_sports.png';

const divisions = [
    {
        id: 'preschool',
        title: 'S. Cadambi Shishu Chaitanya',
        age: 'Ages 2.5 - 6',
        description: 'Inspiring little learners everyday',
        icon: Baby,
        color: 'from-blue-400 to-blue-600',
        image: preschoolImg,
        link: '/scadambi/play-school'
    },
    {
        id: 'primary',
        title: 'S.Cadambi Education Center Pre Primary School',
        age: 'Grades 1-5',
        description: 'Sowing seeds of Knowledge for Success',
        icon: BookOpen,
        color: 'from-green-400 to-green-600',
        image: primaryImg,
        link: '/scadambi/pre-primary'
    },
     {
        id: 'icseprimary',
        title: 'S Cadambi Vidya Kendra English Secondary School',
        age: 'Grades 1-5',
        description: 'Building Values through Education',
        icon: GraduationCap,
        color: 'from-red-500 to-red-700',
        image: collegeImg,
        link: '/scadambi/icse-primary'
    },
    {
        id: 'highschool',
        title: 'S.Cadambi Vidya Kendra High School [State]',
        age: 'Grades 8-10',
        description: 'Jnanam Paramam Balam',
        icon: School,
        color: 'from-orange-400 to-orange-600',
        image: highschoolImg,
        link: '/scadambi/high-school'
    },
   
    {
        id: 'sports',
        title: 'S. Cadambi Vidya Kendra English High School [ICSE]',
        age: 'All Ages',
        description: 'We kindle imagination, ignite inquiry, Foster accomplishment ',
        icon: Trophy,
        color: 'from-yellow-400 to-yellow-600',
        image: sportsImg,
        link: '/scadambi/icse-high'
    },
    {
        id: 'arts',
        title: 'S Cadambi Independent PU College',
        age: 'All Ages',
        description: 'Development through the application of knowledge.',
        icon: Palette,
        color: 'from-purple-400 to-purple-600',
        image: 'https://images.unsplash.com/photo-1460661619275-dbea996984c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        link: '/scadambi/pu-college'
    }
];

// Marquee Component
const MarqueeSection = () => {
    const marqueeItems = [
        "Excellence in Education",
        "Holistic Development",
        "21st Century Skills",
        "World-Class Faculty",
        "State-of-the-Art Infrastructure",
        "Global Curriculum",
        "Individual Attention",
        "Innovation & Creativity"
    ];

    return (
        <div className="w-full overflow-hidden bg-gradient-to-r from-primary to-primary/90 py-4 mb-12 relative">
            {/* Gradient Overlays for fade effect */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />

            <div className="relative flex overflow-hidden">
                {/* First marquee */}
                <div className="flex animate-marquee whitespace-nowrap">
                    {marqueeItems.map((item, index) => (
                        <span
                            key={`first-${index}`}
                            className="mx-6 text-[16px] md:text-[20px] font-bold text-white font-serif flex items-center"
                        >
                            {item}
                            <span className="mx-6 text-secondary">✦</span>
                        </span>
                    ))}
                </div>

                {/* Duplicate marquee for seamless loop */}
                <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap">
                    {marqueeItems.map((item, index) => (
                        <span
                            key={`second-${index}`}
                            className="mx-6 text-[16px] md:text-[20px] font-bold text-white font-serif flex items-center"
                        >
                            {item}
                            <span className="mx-6 text-secondary">✦</span>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Divisions = () => {
    const [activeId, setActiveId] = useState('preschool');

    return (
        <section id="academics" className="pb-24 bg-background relative overflow-hidden min-h-[800px] flex flex-col">
            {/* Decorative Background Elements */}
            {/* <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 -left-24 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
            </div> */}

            {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12 w-full">
                <div className="text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-secondary font-bold tracking-widest uppercase text-sm"
                    >
                        Academic Excellence
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold font-serif text-primary mt-3 mb-6"
                    >
                        A Journey of Discovery
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 max-w-2xl mx-auto text-lg"
                    >
                        We offer a seamless educational journey tailored to every stage of a child's development.
                    </motion.p>
                </div>
            </div> */}

            {/* Marquee Section */}
            <MarqueeSection />

            <div className="flex-1 w-full max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row gap-4 md:gap-4 min-h-[800px] md:h-[600px] pb-12">
                {divisions.map((div) => (
                    <motion.div
                        key={div.id}
                        layout
                        onHoverStart={() => setActiveId(div.id)}
                        onClick={() => setActiveId(div.id)}
                        className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out ${activeId === div.id ? 'flex-[3] min-h-[300px] md:min-h-0' : 'flex-[1] md:flex-[0.5] min-h-[80px] md:min-h-0'
                            }`}
                    >
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                            style={{
                                backgroundImage: `url(${div.image})`,
                                transform: activeId === div.id ? 'scale(1.0)' : 'scale(1.1)'
                            }}
                        />

                        {/* Gradient Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent transition-opacity duration-500 ${activeId === div.id ? 'opacity-90' : 'opacity-70 hover:opacity-80'
                            }`} />

                        {/* Content */}
                        <div className="absolute inset-0 p-6 flex flex-col justify-between">
                            {/* Top Icon (Visible always, but moves) */}
                            <div className={`flex justify-between items-center md:items-start ${activeId !== div.id ? 'justify-start md:justify-center' : ''}`}>
                                <div className={`p-3 rounded-2xl bg-gradient-to-br ${div.color} text-white shadow-lg shrink-0 z-10`}>
                                    <div.icon size={24} />
                                </div>
                                {activeId === div.id && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold border border-white/10 ml-auto md:ml-0"
                                    >
                                        {div.age}
                                    </motion.div>
                                )}
                            </div>

                            {/* Vertical Title (When collapsed) */}
                            {activeId !== div.id && (
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none pl-16 md:pl-0">
                                    <h3 className="text-xl md:text-2xl font-bold text-white font-serif tracking-wider whitespace-nowrap transform md:-rotate-90 origin-center opacity-80">
                                        {div.title}
                                    </h3>
                                </div>
                            )}

                            {/* Expanded Content */}
                            <AnimatePresence>
                                {activeId === div.id && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ delay: 0.1, duration: 0.3 }}
                                        className="flex flex-col justify-end h-full"
                                    >
                                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif leading-tight">
                                            {div.title}
                                        </h3>
                                        <p className="text-gray-100 text-base md:text-lg leading-relaxed mb-6 max-w-xl">
                                            {div.description}
                                        </p>
                                        <a
                                            href={div.link}
                                            className="flex items-center text-secondary font-bold text-sm tracking-wide gap-2 group w-fit"
                                        >
                                            <span>EXPLORE PROGRAM</span>
                                            <ArrowUpRight
                                                size={18}
                                                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                            />
                                        </a>

                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Active Border */}
                        <div className={`absolute inset-0 border-2 rounded-3xl transition-colors duration-300 pointer-events-none ${activeId === div.id ? 'border-white/20' : 'border-transparent'
                            }`} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Divisions;