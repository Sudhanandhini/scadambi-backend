import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { School, BookOpen, Shield, Camera, Heart, Sparkles, Baby, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import class1 from "../../assets/pre-primary/class1.jpg"
import library from "../../assets/pre-primary/library.jpg"
import sport3 from "../../assets/pre-primary/sport2.jpg"
import safety1 from "../../assets/pre-primary/safety1.jpg"
import safety from "../../assets/pre-primary/fire.jpg"
import class2 from "../../assets/pre-primary/class2.jpg"
import aid from "../../assets/pre-primary/aid2.jpg"

const PrePrimaryFacilities = () => {
    const [currentSlide, setCurrentSlide] = useState(0);


    const facilities = [
        {
            icon: School,
            title: "Child-Friendly Classrooms",
            description: "Spacious and well-ventilated classrooms designed specifically for young children with child-centered furniture and colorful learning materials that create an engaging learning environment.",
            image: class1
        },
        {
            icon: BookOpen,
            title: "Mini Library",
            description: "Mini Library fosters a lifelong love for reading, builds foundational skills and encourages imagination and curiosity by accessing books which improves language, communication and critical thinking skills while making learning a joyful, comfortable part of daily life.",
            image: library
        },
        {
            icon: Heart,
            title: "Well-Equipped Play Area",
            description: "We have a well-equipped play area to develop fundamental physical, social and emotional skills like fine motor, gross motor skills, problem-solving skills, boost self-confidence, balance and coordination which helps in the holistic development of the child.",
            image: sport3
        },
        {
            icon: Camera,
            title: "CCTV Surveillance",
            description: "24/7 CCTV monitoring covering all classrooms, corridors, and play areas for complete safety and security of children. Parents can have peace of mind knowing their children are in a secure environment.",
            image: safety1
        },
        {
            icon: Shield,
            title: "Safety & Security Measures",
            description: "Comprehensive safety measures including fire extinguishers, controlled access, rounded furniture edges, and non-toxic materials throughout the campus. Regular safety drills are conducted to ensure preparedness.",
            image: safety
        },
        {
            icon: Baby,
            title: "Child-Centered Furniture",
            description: "Age-appropriate, child-sized furniture designed to promote independence and comfortable learning experiences. All furniture has rounded edges and is made from child-safe materials.",
            image: class2
        },
        {
            icon: Award,
            title: "Teaching Aids & Resources",
            description: "Modern teaching resources including visual aids, manipulatives, educational toys, and interactive learning materials that support various learning styles and developmental needs.",
            image: aid
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % facilities.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + facilities.length) % facilities.length);
    };


    // Auto Play Slider
    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % facilities.length);
        }, 4000); // autoplay speed

        return () => clearInterval(interval);
    }, [facilities.length]);


    // Extract the current facility and icon
    const currentFacility = facilities[currentSlide];
    const CurrentIcon = currentFacility.icon;

    return (
        <div className="pt-20 min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-primary to-primary/90 text-white py-20 mt-16">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm">
                            World-Class Infrastructure
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold font-serif mt-3 mb-6">
                            Our Facilities
                        </h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                            Safe, secure, focused and sound learning environment with necessary amenities for young learners
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Campus Overview */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-3xl p-12 border-2 border-secondary/20 shadow-xl">
                        <div className="text-center mb-8">
                            <div className="bg-gradient-to-br from-secondary to-secondary/80 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                                <School className="text-primary" size={40} />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mb-6">
                                Campus Overview
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
                                S. Cadambi Education Center offers a <strong className="text-primary">comfortable, safe, secured, focused and sound learning environment</strong> for students by providing necessary amenities and various facilities. Our campus is equipped with well-ventilated classrooms, mini library, spacious play area, CCTV surveillance, fire extinguishers, teaching resources, sports resources, child-centered furniture and good sanitation.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* Facilities Slider */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="text-center mb-12">
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm">Explore Our Campus</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mt-3 mb-4">
                            Featured Facilities
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Discover our state-of-the-art facilities designed for young learners
                        </p>
                    </div>

                    <div className="relative">
                        {/* Slider Container */}
                        <div className="overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentSlide}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="bg-white rounded-3xl  overflow-hidden">
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
                                            {/* Image */}
                                            <div className="relative overflow-hidden h-96 lg:h-[500px]">
                                                <img
                                                    src={currentFacility.image}
                                                    alt={currentFacility.title}
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                                            </div>

                                            {/* Content */}
                                            <div className="p-10 lg:p-16">
                                                <div className="bg-gradient-to-br from-primary to-primary/80 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                                                    <CurrentIcon className="text-white" size={40} />
                                                </div>
                                                <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif mb-6">
                                                    {currentFacility.title}
                                                </h2>
                                                <p className="text-gray-700 text-lg leading-relaxed">
                                                    {currentFacility.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
                            <button
                                onClick={prevSlide}
                                className="bg-secondary hover:bg-secondary/90 text-primary p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 pointer-events-auto"
                                aria-label="Previous facility"
                            >
                                <ChevronLeft size={28} />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="bg-secondary hover:bg-secondary/90 text-primary p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 pointer-events-auto"
                                aria-label="Next facility"
                            >
                                <ChevronRight size={28} />
                            </button>
                        </div>

                        {/* Dots Indicator */}
                        <div className="flex justify-center items-center mt-8 gap-3">
                            {facilities.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentSlide(idx)}
                                    className={`h-3 rounded-full transition-all ${idx === currentSlide
                                            ? 'bg-primary w-10'
                                            : 'bg-gray-300 hover:bg-primary/50 w-3'
                                        }`}
                                    aria-label={`Go to facility ${idx + 1}`}
                                />
                            ))}
                        </div>

                        {/* Counter */}
                        <div className="text-center mt-6">
                            <span className="text-gray-600 font-semibold">
                                {currentSlide + 1} / {facilities.length}
                            </span>
                        </div>
                    </div>
                </motion.section>

                {/* Highlights Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 lg:p-16 border-2 border-gray-100 shadow-xl">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mb-6">
                                Why Our Facilities Stand Out
                            </h2>
                            <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                                Every aspect of our infrastructure is designed with young children in mind
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { icon: Shield, label: "100% Safe", desc: "Child-safe environment" },
                                { icon: Camera, label: "24/7 Monitored", desc: "CCTV surveillance" },
                                { icon: Heart, label: "Caring Staff", desc: "Trained professionals" },
                                { icon: Sparkles, label: "Modern Facilities", desc: "Latest amenities" }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-secondary group"
                                >
                                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-secondary/20 group-hover:to-secondary/10 transition-all">
                                        <item.icon className="text-primary group-hover:text-secondary transition-colors" size={40} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                                        {item.label}
                                    </h3>
                                    <p className="text-gray-600 text-lg">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* Additional Features Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border-2 border-primary/20 hover:shadow-xl transition-all">
                            <div className="bg-gradient-to-br from-primary to-primary/80 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                                <Shield className="text-white" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">Safety First</h3>
                            <p className="text-gray-700 leading-relaxed">
                                All safety protocols and measures strictly followed to ensure child protection
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-8 border-2 border-secondary/20 hover:shadow-xl transition-all">
                            <div className="bg-gradient-to-br from-secondary to-secondary/80 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                                <Heart className="text-primary" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">Hygienic Environment</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Clean and sanitized facilities maintained throughout the day
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border-2 border-primary/20 hover:shadow-xl transition-all">
                            <div className="bg-gradient-to-br from-primary to-primary/80 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                                <Sparkles className="text-white" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">Spacious Areas</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Well-ventilated and spacious classrooms and play areas for comfort
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-gradient-to-r from-primary to-primary/90 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full -mr-32 -mt-32"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -ml-48 -mb-48"></div>

                        <div className="relative z-10 text-center">
                            <School className="mx-auto mb-6 text-secondary" size={64} />
                            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">
                                Visit & Explore With Us
                            </h2>
                            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                              Bring your child for an exciting activity visit and experience our playful, safe and joyful learning environment.
                            </p>
                             <a
                                href="/scadambi/pre-primary/activities"
                                className="bg-secondary hover:bg-secondary/90 text-primary font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                            >
                                  Plan Activity Visit
                            </a>
                          
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PrePrimaryFacilities;