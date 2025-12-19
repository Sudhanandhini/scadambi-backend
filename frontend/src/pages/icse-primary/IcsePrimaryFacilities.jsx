import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Monitor, Trophy, Library, Building2, Users, Target, Dumbbell, ChevronLeft, ChevronRight, Image as ImageIcon, Play, Pause } from 'lucide-react';
import IcsePrimaryHeader from './IcsePrimaryHeader';
import IcsePrimaryFooter from './IcsePrimaryFooter';

import img1 from "../../assets/icse-primary/1.png"
import img2 from "../../assets/icse-primary/2.png"
import img3 from "../../assets/icse-primary/3.png"
import img4 from "../../assets/icse-primary/4.png"
import img5 from "../../assets/icse-primary/5.png"
import img6 from "../../assets/icse-primary/6.png"
import img11 from "../../assets/icse-primary/11.png"
import img12 from "../../assets/icse-primary/12.png"
import img13 from "../../assets/icse-primary/13.png"
import img14 from "../../assets/icse-primary/14.png"
import img15 from "../../assets/icse-primary/15.png"
import img16 from "../../assets/icse-primary/16.png"

const IcsePrimaryFacilities = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [galleryIndex, setGalleryIndex] = useState(0);
    const [isPlayingSports, setIsPlayingSports] = useState(true);
    const [isPlayingGallery, setIsPlayingGallery] = useState(true);

    const facilities = [
        { 
            icon: <BookOpen />, 
            title: "21 Classrooms", 
            description: "Spacious, well-ventilated, and well-equipped learning spaces for optimal education",
            color: "blue"
        },
        { 
            icon: <Monitor />, 
            title: "Computer Lab", 
            description: "Modern computer lab with latest technology for digital learning and IT education",
            color: "purple"
        },
        { 
            icon: <Users />, 
            title: "Language Room", 
            description: "Dedicated interactive space for language development and communication skills",
            color: "green"
        },
        { 
            icon: <Library />, 
            title: "Common Library", 
            description: "Well-stocked library with diverse collection of books for all grades",
            color: "orange"
        },
        { 
            icon: <Trophy />, 
            title: "Sports Facilities", 
            description: "Comprehensive indoor and outdoor games facilities for physical development",
            color: "red"
        }
    ];

    const sportsSlides = [
        {
            title: "Sports - Indoor and Outdoor Games",
            subtitle: "Exercise and Drill",
            description: "Regular physical exercise sessions to promote fitness, discipline, and healthy lifestyle habits among students",
            image: img1,
            type: "exercise"
        },
        {
            title: "Indoor Games",
            subtitle: "Chess and Snake & Ladder",
            description: "Strategic board games that develop cognitive skills, logical thinking, problem-solving abilities and patience",
            image: img3,
            type: "indoor"
        },
        {
            title: "Indoor Games",
            subtitle: "Match It and Super Minute",
            description: "Interactive games that enhance memory, concentration, quick thinking and hand-eye coordination skills",
            image: img4,
            type: "indoor"
        },
        {
            title: "Outdoor Games",
            subtitle: "Relay Race and Running Race",
            description: "Athletic activities building stamina, speed, teamwork, competitive spirit and cardiovascular fitness",
            image: img5,
            type: "outdoor"
        },
        {
            title: "Outdoor Games",
            subtitle: "Kho Kho and Throw Ball",
            description: "Traditional and modern team sports fostering cooperation, agility, strategy and sportsmanship",
            image: img6,
            type: "outdoor"
        }
    ];

    const galleryImages = [
        { id: 1, image: img11, title: "Team Games " },
        { id: 2, image: img12, title: "Sports Activities" },
        { id: 3, image: img13, title: "Indoor Games" },
        { id: 4, image: img14, title: "Creative Activities" },
        { id: 5, image: img15, title: "Outdoor Sports" },
        { id: 6, image: img16, title: "Exercise and Drill" }
    ];

    // Auto-play for sports slider
    useEffect(() => {
        let interval;
        if (isPlayingSports) {
            interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % sportsSlides.length);
            }, 4000); // Change slide every 4 seconds
        }
        return () => clearInterval(interval);
    }, [isPlayingSports, sportsSlides.length]);

    // Auto-play for gallery slider
    useEffect(() => {
        let interval;
        if (isPlayingGallery) {
            interval = setInterval(() => {
                setGalleryIndex((prev) => {
                    if (prev < galleryImages.length - 4) {
                        return prev + 1;
                    } else {
                        return 0; // Loop back to start
                    }
                });
            }, 3000); // Change gallery every 3 seconds
        }
        return () => clearInterval(interval);
    }, [isPlayingGallery, galleryImages.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % sportsSlides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + sportsSlides.length) % sportsSlides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const nextGallery = () => {
        if (galleryIndex < galleryImages.length - 4) {
            setGalleryIndex(galleryIndex + 1);
        }
    };

    const prevGallery = () => {
        if (galleryIndex > 0) {
            setGalleryIndex(galleryIndex - 1);
        }
    };

    const toggleSportsAutoplay = () => {
        setIsPlayingSports(!isPlayingSports);
    };

    const toggleGalleryAutoplay = () => {
        setIsPlayingGallery(!isPlayingGallery);
    };

    const getSlideIcon = (type) => {
        switch(type) {
            case 'exercise': return <Dumbbell size={48} />;
            case 'indoor': return <Target size={48} />;
            case 'outdoor': return <Trophy size={48} />;
            default: return <Trophy size={48} />;
        }
    };

    const getSlideColor = (type) => {
        switch(type) {
            case 'exercise': return 'from-blue-500 to-blue-700';
            case 'indoor': return 'from-purple-500 to-purple-700';
            case 'outdoor': return 'from-green-500 to-green-700';
            default: return 'from-primary to-blue-800';
        }
    };

    const getIconColor = (color) => {
        const colors = {
            blue: "bg-blue-100 text-blue-600",
            purple: "bg-purple-100 text-purple-600",
            green: "bg-green-100 text-green-600",
            orange: "bg-orange-100 text-orange-600",
            red: "bg-red-100 text-red-600"
        };
        return colors[color] || colors.blue;
    };

    return (
        <div className="min-h-screen bg-background">
            <IcsePrimaryHeader />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-blue-900 text-white relative overflow-hidden mt-20">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
                    <div className="absolute bottom-20 right-10 w-40 h-40 border-4 border-white rounded-full"></div>
                    <div className="absolute top-1/2 left-1/3 w-24 h-24 border-4 border-white rounded-full"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        className="text-center"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                            className="inline-block mb-6"
                        >
                            <Building2 className="w-20 h-20 text-white/90" />
                        </motion.div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">Facilities and Infrastructure</h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            World-class infrastructure designed for holistic development and comprehensive learning
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Campus Overview Section */}
            <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                            Our Campus
                        </span>
                        <h2 className="text-4xl font-bold text-primary mb-4">Campus Overview</h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-primary/5 to-blue-50 rounded-3xl p-8 md:p-12 shadow-lg border-2 border-primary/10 mb-16"
                    >
                        <div className="flex items-start gap-4 mb-6">
                            <div className="bg-primary text-white p-3 rounded-xl">
                                <Building2 size={28} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-primary mb-2">Primary Wing Location</h3>
                                <p className="text-gray-600">Strategic placement for optimal learning environment</p>
                            </div>
                        </div>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Primary Wing is situated in <strong>Basement floor and 1st Floor</strong> in the main campus of 
                            <strong> S Cadambi Vidya Kendra</strong>, providing a dedicated and focused learning environment 
                            for our young learners.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Facilities Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                            What We Offer
                        </span>
                        <h2 className="text-4xl font-bold text-primary mb-4">Our Facilities</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            State-of-the-art facilities designed to nurture every aspect of student development
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {facilities.map((facility, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100"
                            >
                                <div className={`${getIconColor(facility.color)} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                                    {React.cloneElement(facility.icon, { size: 32 })}
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">{facility.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{facility.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sports Slider Section with Autoplay */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                            Physical Development
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Sports & Games</h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                           Sports and Games are instrumental tools in shaping a holistic learning experience for our students, influencing not just their physical health but their mental and social development as well. In our fast-paced, digitally-driven world where sedentary lifestyles are becoming the norm, we should recognise the importance of sports and games in students' lives
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100"
                    >
                        <div className="relative">
                            <div className="relative min-h-[300px]">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentSlide}
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -100 }}
                                        transition={{ duration: 0.5 }}
                                        className="grid lg:grid-cols-2 gap-0"
                                    >
                                        <div className="relative h-[300px] lg:h-auto">
                                            <img 
                                                src={sportsSlides[currentSlide].image}
                                                alt={sportsSlides[currentSlide].subtitle}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:hidden"></div>
                                        </div>

                                        <div className="p-8 md:p-12 flex flex-col justify-center">
                                            <div className={`bg-gradient-to-br ${getSlideColor(sportsSlides[currentSlide].type)} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white`}>
                                                {getSlideIcon(sportsSlides[currentSlide].type)}
                                            </div>
                                            
                                            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                                                {sportsSlides[currentSlide].title}
                                            </h3>
                                            
                                            <h4 className="text-2xl font-bold text-secondary mb-6">
                                                {sportsSlides[currentSlide].subtitle}
                                            </h4>
                                            
                                            <p className="text-lg text-gray-700 leading-relaxed">
                                                {sportsSlides[currentSlide].description}
                                            </p>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Play/Pause Button */}
                            <button
                                onClick={toggleSportsAutoplay}
                                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-primary w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all z-10"
                            >
                                {isPlayingSports ? <Pause size={20} /> : <Play size={20} />}
                            </button>

                            <button
                                onClick={prevSlide}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-secondary hover:bg-secondary/90 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all z-10"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-secondary hover:bg-secondary/90 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all z-10"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>

                        <div className="bg-gray-50 py-6 px-8">
                            <div className="flex justify-center items-center gap-3">
                                {sportsSlides.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className={`transition-all ${
                                            currentSlide === index 
                                                ? 'bg-secondary w-12 h-3' 
                                                : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
                                        } rounded-full`}
                                    />
                                ))}
                            </div>
                            <div className="text-center mt-4 text-gray-600 font-semibold">
                                {currentSlide + 1} / {sportsSlides.length}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Horizontal Gallery Slider with Autoplay */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                            Visual Gallery
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Sports & Games</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Explore our vibrant campus life through this collection of moments
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Play/Pause Button for Gallery */}
                        <div className="flex justify-center mb-6">
                            <button
                                onClick={toggleGalleryAutoplay}
                                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg transition-all"
                            >
                                {isPlayingGallery ? (
                                    <>
                                        <Pause size={20} />
                                        <span className="font-semibold">Pause Slideshow</span>
                                    </>
                                ) : (
                                    <>
                                        <Play size={20} />
                                        <span className="font-semibold">Play Slideshow</span>
                                    </>
                                )}
                            </button>
                        </div>

                        <div className="overflow-hidden">
                            <motion.div 
                                className="flex gap-6"
                                animate={{ x: `-${galleryIndex * (100 / 4)}%` }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                {galleryImages.map((item, idx) => (
                                    <motion.div
                                        key={item.id}
                                        className="min-w-[calc(25%-18px)] flex-shrink-0"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="relative rounded-2xl overflow-hidden shadow-xl h-64 group">
                                            <img 
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                                    <h4 className="text-white font-bold text-lg">{item.title}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        {galleryIndex > 0 && (
                            <button
                                onClick={prevGallery}
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white hover:bg-gray-50 text-primary w-12 h-12 rounded-full flex items-center justify-center shadow-xl transition-all z-10 border-2 border-gray-200"
                            >
                                <ChevronLeft size={24} />
                            </button>
                        )}
                        {galleryIndex < galleryImages.length - 4 && (
                            <button
                                onClick={nextGallery}
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white hover:bg-gray-50 text-primary w-12 h-12 rounded-full flex items-center justify-center shadow-xl transition-all z-10 border-2 border-gray-200"
                            >
                                <ChevronRight size={24} />
                            </button>
                        )}

                        <div className="flex justify-center items-center gap-2 mt-8">
                            {Array.from({ length: galleryImages.length - 3 }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setGalleryIndex(index)}
                                    className={`transition-all rounded-full ${
                                        galleryIndex === index 
                                            ? 'bg-secondary w-12 h-3' 
                                            : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
                                    }`}
                                />
                            ))}
                        </div>

                        <div className="text-center mt-4">
                            <span className="text-gray-600 font-semibold">
                                Showing {galleryIndex + 1}-{Math.min(galleryIndex + 4, galleryImages.length)} of {galleryImages.length}
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>

          
        </div>
    );
};

export default IcsePrimaryFacilities;