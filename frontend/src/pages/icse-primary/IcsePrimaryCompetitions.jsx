import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Palette, Music, Book, Award, Star, Sparkles, ChevronLeft, ChevronRight, Users, Lightbulb, Brain, Theater, Mic } from 'lucide-react';
import IcsePrimaryHeader from './IcsePrimaryHeader';
import IcsePrimaryFooter from './IcsePrimaryFooter';


import img1 from "../../assets/icse-primary/Picture1.jpg"
import img2 from "../../assets/icse-primary/Picture12.jpg"
import img3 from "../../assets/icse-primary/Picture13.jpg"

import img4 from "../../assets/icse-primary/Picture4.jpg"
import img5 from "../../assets/icse-primary/Picture5.jpg"
import img6 from "../../assets/icse-primary/Picture6.png"

import img7 from "../../assets/icse-primary/Picture19.jpg"
import img9 from "../../assets/icse-primary/Picture17.jpg"
import img10 from "../../assets/icse-primary/Picture16.jpg"
import img12 from "../../assets/icse-primary/Picture15.jpg"
import img13 from "../../assets/icse-primary/Picture14.jpg"
import img11 from "../../assets/icse-primary/Picture11.jpg"
import img14 from "../../assets/icse-primary/Picture22.jpg"
import img15 from "../../assets/icse-primary/Picture21.jpg"

import img16 from "../../assets/icse-primary/Picture23.jpg"
import img17 from "../../assets/icse-primary/Picture121.jpg"
import img18 from "../../assets/icse-primary/Picture131.jpg"

import img20 from "../../assets/icse-primary/Picture32.jpg"

import img21 from "../../assets/icse-primary/Picture33.png"
import img24 from "../../assets/icse-primary/Picture34.png"
import img25 from "../../assets/icse-primary/Picture35.png"

import img26 from "../../assets/icse-primary/Picture36.png"
import img27 from "../../assets/icse-primary/Picture37.png"

import img30 from "../../assets/icse-primary/Picture42.jpg"
import img31 from "../../assets/icse-primary/Picture41.jpg"
import img32 from "../../assets/icse-primary/Picture43.jpg"
import img33 from "../../assets/icse-primary/Picture44.jpg"
import img34 from "../../assets/icse-primary/Picture45.jpg"
import img35 from "../../assets/icse-primary/Picture47.jpg"
import img36 from "../../assets/icse-primary/Picture46.jpg"
import img37 from "../../assets/icse-primary/Picture48.jpg"

import img51 from "../../assets/icse-primary/art/Picture2.jpg"
import img52 from "../../assets/icse-primary/art/Picture3.jpg"
import img53 from "../../assets/icse-primary/art/Picture4.jpg"
import img54 from "../../assets/icse-primary/art/Picture5.jpg"
import img55 from "../../assets/icse-primary/art/Picture6.jpg"
import img56 from "../../assets/icse-primary/art/Picture7.jpg"
import img57 from "../../assets/icse-primary/art/Picture8.jpg"
import img58 from "../../assets/icse-primary/art/Picture9.jpg"
import img59 from "../../assets/icse-primary/art/Picture10.jpg"
import img61 from "../../assets/icse-primary/art/Picture11.jpg"
import img60 from "../../assets/icse-primary/art/Picture12.jpg"
import img62 from "../../assets/icse-primary/art/Picture13.jpg"
import img63 from "../../assets/icse-primary/art/Picture14.jpg"
import img64 from "../../assets/icse-primary/art/Picture15.jpg"
import img65 from "../../assets/icse-primary/art/Picture16.jpg"
import img66 from "../../assets/icse-primary/art/Picture17.jpg"
import img67 from "../../assets/icse-primary/art/Picture18.jpg"
import img68 from "../../assets/icse-primary/art/Picture19.jpg"
import img69 from "../../assets/icse-primary/art/Picture20.jpg"
import img70 from "../../assets/icse-primary/art/Picture21.jpg"
import img71 from "../../assets/icse-primary/art/Picture22.jpg"
import img72 from "../../assets/icse-primary/art/Picture23.jpg"
import img73 from "../../assets/icse-primary/art/Picture24.jpg"
import img74 from "../../assets/icse-primary/art/Picture25.jpg"
import img75 from "../../assets/icse-primary/art/Picture26.jpg"
import img76 from "../../assets/icse-primary/art/Picture27.jpg"
import img77 from "../../assets/icse-primary/art/Picture28.jpg"





const IcsePrimaryCompetitions = () => {
    const [activeSlide1, setActiveSlide1] = useState(0);
    const [activeSlide2, setActiveSlide2] = useState(0);
    const [activeSlide3, setActiveSlide3] = useState(0);
    const [activeSlide4, setActiveSlide4] = useState(0);
    const [activeSlide5, setActiveSlide5] = useState(0);
    const [activeSlide6, setActiveSlide6] = useState(0);
     const [activeSlide7, setActiveSlide7] = useState(0);

    // Competition images for sliders (replace with actual images)
    const slider1Images = [
        { src: img1, title: "Pick and Speak Competition" },
        { src: img2, title: "Environmental Day" },
        { src: img3, title: "Pick and Speak Competition" },
    ];

    const slider2Images = [
        { src: img4, title: "Memory Test Competition" },
        { src: img5, title: "Cognitive Skills" },
          { src: img6, title: "Memory Test Competition" },
    ];

    const slider3Images = [
        { src: img7 , title: "Fancy Dress Competition" },
      
        { src: img9 , title: "Fancy Dress Competition" },
        { src: img10, title: "Creative Costumes" },
        { src: img11 , title: "Fancy Dress Competition" },
        { src: img12, title: "Creative Costumes" },
        { src: img13 , title: "Fancy Dress Competition" },
        { src: img14, title: "Creative Costumes" },
        { src: img15 , title: "Fancy Dress Competition" },
        { src: img16, title: "Creative Costumes" },
        { src: img17 , title: "Fancy Dress Competition" },
        { src: img18, title: "Creative Costumes" },
    ];

    const slider4Images = [
        { src: img51, title: "Art Competition" },
        { src: img52, title: "Creative Activities" },
         { src: img53, title: "Art Competition" },
        { src: img54, title: "Creative Activities" },
         { src: img55, title: "Art Competition" },
        { src: img56, title: "Creative Activities" },
         { src: img57, title: "Art Competition" },
        { src: img58, title: "Creative Activities" },
         { src: img59, title: "Art Competition" },
        { src: img60, title: "Creative Activities" },
         { src: img61, title: "Art Competition" },
        { src: img62, title: "Creative Activities" },
         { src: img63, title: "Art Competition" },
        { src: img64, title: "Creative Activities" },
         { src: img65, title: "Art Competition" },
        { src: img67, title: "Creative Activities" },
         { src: img68, title: "Art Competition" },
        { src: img69, title: "Creative Activities" },
         { src: img70, title: "Art Competition" },
        { src: img71, title: "Creative Activities" },
         { src: img75, title: "Art Competition" },
        { src: img72, title: "Creative Activities" },
         { src: img73, title: "Art Competition" },
        { src: img74, title: "Creative Activities" },
         { src: img51, title: "Art Competition" },
        { src: img52, title: "Creative Activities" },
         { src: img51, title: "Art Competition" },
        { src: img52, title: "Creative Activities" },
         { src: img66, title: "Creative Activities" },
         { src: img76, title: "Art Competition" },
        { src: img77, title: "Creative Activities" },



    ];

    const slider5Images = [
        { src: img25, title: "GK Quiz Competition" },
        { src: img24, title: "Knowledge Testing" },
         { src: img26, title: "GK Quiz Competition" },
        { src: img27, title: "Knowledge Testing" }
    ];

    const slider6Images = [
        { src: img30, title: "GK Quiz Competition" },
        { src: img31, title: "Knowledge Testing" },
        { src: img32, title: "GK Quiz Competition" },
        { src: img33, title: "Knowledge Testing" },
        { src: img34, title: "GK Quiz Competition" },
        { src: img35, title: "Knowledge Testing" },
        { src: img36, title: "GK Quiz Competition" },
        { src: img37, title: "Knowledge Testing" },
    ];


     const slider7Images = [
        { src: img20, title: "GK Quiz Competition" },
        { src: img21, title: "Knowledge Testing" },
       
        
    ];

    const fancyDressThemes = [
        { grade: "5th STD", theme: "Mythological characters", icon: "👑" },
        { grade: "4th STD", theme: "Famous personalities", icon: "⭐" },
        { grade: "3rd STD", theme: "Historical characters", icon: "📜" },
        { grade: "2nd STD", theme: "Costume of different states of India", icon: "🎭" },
        { grade: "1st STD", theme: "Costume of things we use in daily life", icon: "🎨" }
    ];

    const artCompetitionThemes = [
        { grade: "5th STD", theme: "Rangoli for girls / Kite Making for boys", icon: "🪁" },
        { grade: "4th STD", theme: "Torana Making", icon: "🌺" },
        { grade: "3rd STD", theme: "Flower bouquet making", icon: "💐" },
        { grade: "2nd STD", theme: "Greeting card making", icon: "💌" },
        { grade: "1st STD", theme: "Clay model making", icon: "🎨" }
    ];

    const otherCompetitions = [
        {
            icon: Theater,
            title: "Mono Acting Competition",
            description: "Individual dramatic performance showcasing acting skills and theatrical expression",
            color: "blue"
        },
        {
            icon: Trophy,
            title: "Olympiad Preliminary Round",
            description: "Academic olympiad across various subjects for competitive excellence",
            color: "green"
        },
        {
            icon: Book,
            title: "Oratory Competition",
            description: "Public speaking competition to develop communication and presentation skills",
            color: "orange"
        }
    ];

    // Auto-play for all sliders
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide1((prev) => (prev + 1) % slider1Images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [slider1Images.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide2((prev) => (prev + 1) % slider2Images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [slider2Images.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide3((prev) => (prev + 1) % slider3Images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [slider3Images.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide4((prev) => (prev + 1) % slider4Images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [slider4Images.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide5((prev) => (prev + 1) % slider5Images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [slider5Images.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide6((prev) => (prev + 1) % slider6Images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [slider6Images.length]);

     useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide7((prev) => (prev + 1) % slider7Images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [slider7Images.length]);

    // const ImageSlider = ({ images, activeSlide, setActiveSlide, iconComponent: IconComponent, iconColor = "text-primary" }) => (
    //     <div className="bg-white rounded-3xl p-6 shadow-2xl border-2 border-gray-100">
    //         <div className="relative">
    //             <div className="aspect-[4/3] rounded-2xl overflow-hidden">
    //                 <AnimatePresence mode="wait">
    //                     <motion.div
    //                         key={activeSlide}
    //                         initial={{ opacity: 0 }}
    //                         animate={{ opacity: 1 }}
    //                         exit={{ opacity: 0 }}
    //                         transition={{ duration: 0.5 }}
    //                         className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative"
    //                     >
    //                         {IconComponent && <IconComponent size={120} className="text-gray-300" />}
    //                         <div className="absolute inset-0 flex flex-col items-center justify-center">
    //                             <Sparkles size={48} className={`${iconColor} mb-4`} />
    //                             <span className="text-gray-600 text-lg font-semibold text-center px-4">
    //                                 {images[activeSlide].title}
    //                             </span>
    //                         </div>
    //                     </motion.div>
    //                 </AnimatePresence>
    //             </div>

    //             {/* Slider Controls */}
    //             {images.length > 1 && (
    //                 <>
    //                     <button
    //                         onClick={() => setActiveSlide((prev) => (prev - 1 + images.length) % images.length)}
    //                         className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all"
    //                     >
    //                         <ChevronLeft size={20} />
    //                     </button>
    //                     <button
    //                         onClick={() => setActiveSlide((prev) => (prev + 1) % images.length)}
    //                         className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all"
    //                     >
    //                         <ChevronRight size={20} />
    //                     </button>

    //                     {/* Counter */}
    //                     <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-1 rounded-full text-sm font-semibold">
    //                         {activeSlide + 1} / {images.length}
    //                     </div>
    //                 </>
    //             )}
    //         </div>

    //         {/* Dots */}
    //         {images.length > 1 && (
    //             <div className="flex justify-center gap-2 mt-6">
    //                 {images.map((_, index) => (
    //                     <button
    //                         key={index}
    //                         onClick={() => setActiveSlide(index)}
    //                         className={`transition-all rounded-full ${
    //                             activeSlide === index 
    //                                 ? 'bg-primary w-8 h-3' 
    //                                 : 'bg-gray-300 w-3 h-3'
    //                         }`}
    //                     />
    //                 ))}
    //             </div>
    //         )}
    //     </div>
    // );

    const ImageSlider = ({ images, activeSlide, setActiveSlide }) => (
        <div className="bg-white rounded-3xl p-6 shadow-2xl border-2 border-gray-100">
            <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeSlide}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="w-full h-full relative"
                        >
                            <img
                                src={images[activeSlide].src}
                                alt={images[activeSlide].title}
                                className="w-full h-full object-contain"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Slider Controls */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={() => setActiveSlide((prev) => (prev - 1 + images.length) % images.length)}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => setActiveSlide((prev) => (prev + 1) % images.length)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all"
                        >
                            <ChevronRight size={20} />
                        </button>

                        {/* Counter */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-1 rounded-full text-sm font-semibold">
                            {activeSlide + 1} / {images.length}
                        </div>
                    </>
                )}
            </div>

            {/* Dots */}
            {images.length > 1 && (
                <div className="flex justify-center gap-2 mt-6">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveSlide(index)}
                            className={`transition-all rounded-full ${activeSlide === index
                                    ? 'bg-primary w-8 h-3'
                                    : 'bg-gray-300 w-3 h-3'
                                }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );


    const getColorClasses = (color) => {
        const colors = {
            purple: "bg-purple-100 text-purple-600",
            blue: "bg-blue-100 text-blue-600",
            pink: "bg-pink-100 text-pink-600",
            green: "bg-green-100 text-green-600",
            orange: "bg-orange-100 text-orange-600"
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
                            <Trophy className="w-20 h-20 text-white/90" />
                        </motion.div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">Competitions</h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            Platforms for students to showcase their talents and excel in various domains
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border-2 border-gray-100 text-center">
                            <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                                Competitions This Year
                            </span>
                            <h2 className="text-3xl font-bold text-primary mb-6">Building Excellence Through Competition</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                We encourage students to learn and grow in various areas including academics, arts, culture and sports.
                                Competitions are organized at different levels, such as within a classroom and across different classes,
                                providing every student an opportunity to shine.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Competition 1: Pick and Speak (Slider Left, Content Right) */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Image Slider */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <ImageSlider
                                images={slider1Images}
                                activeSlide={activeSlide1}
                                setActiveSlide={setActiveSlide1}
                                iconComponent={Book}
                                iconColor="text-green-500"
                            />
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-green-500 text-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Book size={32} />
                                </div>
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-primary">Pick and Speak</h3>
                                    <p className="text-green-700 font-semibold text-lg">Literary Competition</p>
                                </div>
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Pick and Speak activity on account of <strong>"World Environment Day"</strong>.
                                Students actively participate in environmental topics, enhancing public speaking skills
                                and environmental awareness simultaneously.
                            </p>
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-l-4 border-green-500">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <Star size={20} className="text-green-600" fill="currentColor" />
                                        <span className="text-gray-700 font-medium">Improves public speaking confidence</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Star size={20} className="text-green-600" fill="currentColor" />
                                        <span className="text-gray-700 font-medium">Develops environmental awareness</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Star size={20} className="text-green-600" fill="currentColor" />
                                        <span className="text-gray-700 font-medium">Quick thinking and articulation skills</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Competition 2: Memory Test (Content Left, Slider Right) */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-blue-500 text-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Brain size={32} />
                                </div>
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-primary">Memory Test Competition</h3>
                                    <p className="text-blue-700 font-semibold text-lg">Cognitive Skills Development</p>
                                </div>
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Test and enhance memory retention and recall abilities through engaging challenges
                                designed for all grade levels. Students participate in various memory-based activities
                                that strengthen cognitive functions.
                            </p>
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-l-4 border-blue-500">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <Star size={20} className="text-blue-600" fill="currentColor" />
                                        <span className="text-gray-700 font-medium">Develops concentration and focus</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Star size={20} className="text-blue-600" fill="currentColor" />
                                        <span className="text-gray-700 font-medium">Enhances memory retention</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Star size={20} className="text-blue-600" fill="currentColor" />
                                        <span className="text-gray-700 font-medium">Boosts cognitive abilities</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Image Slider */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <ImageSlider
                                images={slider2Images}
                                activeSlide={activeSlide2}
                                setActiveSlide={setActiveSlide2}
                                iconComponent={Brain}
                                iconColor="text-blue-500"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Competition 3: Fancy Dress (Slider Left, Content Right) */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Image Slider */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <ImageSlider
                                images={slider3Images}
                                activeSlide={activeSlide3}
                                setActiveSlide={setActiveSlide3}
                                iconComponent={Palette}
                                iconColor="text-pink-500"
                            />
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-[#FDB913] text-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Palette size={32} />
                                </div>
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-primary">Fancy Dress Competition</h3>
                                    <p className="text-[#FDB913] font-semibold text-lg">Creative Expression</p>
                                </div>
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Grade-wise themed fancy dress competition where students showcase creativity through
                                costumes. Each grade has a unique theme, allowing students to explore different characters
                                and express their imagination.
                            </p>
                            <div className="bg-gradient-to-br from-[#FDB913] to-gold-50 rounded-2xl p-6 border-2 border-[#FDB913]">
                                <h4 className="font-bold text-primary mb-4 text-lg">Grade-wise Themes:</h4>
                                <div className="space-y-3">
                                    {fancyDressThemes.map((theme, idx) => (
                                        <div key={idx} className="flex items-center gap-3 bg-white rounded-xl p-3">
                                            <span className="text-2xl">{theme.icon}</span>
                                            <div className="bg-[#FDB913] text-white px-3 py-1 rounded-lg font-bold text-sm">
                                                {theme.grade}
                                            </div>
                                            <span className="text-gray-700 font-medium flex-1">{theme.theme}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Competition 4: Art Competition (Content Left, Slider Right) */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-green-500 text-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Palette size={32} />
                                </div>
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-primary">Art Competition</h3>
                                    <p className="text-green-700 font-semibold text-lg">Pair Event</p>
                                </div>
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Creative pair activities showcasing artistic talents across different grade levels.
                                Students work in pairs to create beautiful art pieces, fostering teamwork and creativity.
                            </p>
                            <div className="bg-gradient-to-br from-green-50 to-green-50 rounded-2xl p-6 border-2 border-green-100">
                                <h4 className="font-bold text-primary mb-4 text-lg">Grade-wise Themes:</h4>
                                <div className="space-y-3">
                                    {artCompetitionThemes.map((theme, idx) => (
                                        <div key={idx} className="flex items-center gap-3 bg-white rounded-xl p-3">
                                            <span className="text-2xl">{theme.icon}</span>
                                            <div className="bg-green-500 text-white px-3 py-1 rounded-lg font-bold text-sm">
                                                {theme.grade}
                                            </div>
                                            <span className="text-gray-700 font-medium flex-1">{theme.theme}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Image Slider */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <ImageSlider
                                images={slider4Images}
                                activeSlide={activeSlide4}
                                setActiveSlide={setActiveSlide4}
                                iconComponent={Palette}
                                iconColor="text-green-500"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Competition 5: Solo Singing (Slider Left, Content Right) */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Image Slider */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <ImageSlider
                                images={slider5Images}
                                activeSlide={activeSlide5}
                                setActiveSlide={setActiveSlide5}
                                iconComponent={Mic}
                                iconColor="text-purple-500"
                            />
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-blue-500 text-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Music size={32} />
                                </div>
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-primary">Solo Singing Competition</h3>
                                    <p className="text-blue-700 font-semibold text-lg">Cultural Performance</p>
                                </div>
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Showcase musical talents across all grades in individual singing performances.
                                Students perform solo songs, developing confidence, stage presence, and musical expression
                                in front of an audience.
                            </p>
                            <div className="bg-gradient-to-br from-blue-50 to-blue-50 rounded-2xl p-6 border-l-4 border-blue-500">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <Star size={20} className="text-blue-600" fill="currentColor" />
                                        <span className="text-gray-700 font-medium">Builds stage confidence</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Star size={20} className="text-blue-600" fill="currentColor" />
                                        <span className="text-gray-700 font-medium">Develops musical expression</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Star size={20} className="text-blue-600" fill="currentColor" />
                                        <span className="text-gray-700 font-medium">Enhances vocal skills</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

          

            {/* Competition 7: Oratory Competition (Slider Left, Content Right) */}

             <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-[#FDB913] text-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Lightbulb size={32} />
                                </div>
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-primary">Oratory Competition</h3>
                                    <p className="text-[#FDB913] font-semibold text-lg">Public Speaking</p>
                                </div>
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                 A platform for students to express their thoughts confidently. 
          Participants present short speeches on various topics, enhancing their 
          communication skills, stage presence, and vocabulary.
                            </p>
                            <div className="bg-gradient-to-br from-[#FDB913] to-amber-50 rounded-2xl p-6 border-l-4 border-[#FDB913]">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <Star size={20} className="text-[#FDB913]" fill="currentColor" />
                                        <span className="text-gray-700 font-medium">Boosts self-confidence</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Star size={20} className="text-[#FDB913]" fill="currentColor" />
                                        <span className="text-gray-700 font-medium">Improves vocabulary & fluency</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Star size={20} className="text-[#FDB913]" fill="currentColor" />
                                        <span className="text-gray-700 font-medium">Enhances communication skills</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Image Slider */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <ImageSlider
                                images={slider7Images}
                                activeSlide={activeSlide7}
                                setActiveSlide={setActiveSlide7}
                                iconComponent={Lightbulb}
                                iconColor="text-[#FDB913]"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>


              {/* Competition 6: GK Quiz (Content Left, Slider Right) */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Image Slider */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <ImageSlider
                                images={slider6Images}
                                activeSlide={activeSlide6}
                                setActiveSlide={setActiveSlide6}
                                iconComponent={Lightbulb}
                                iconColor="text-indigo-500"
                            />
                        </motion.div>
                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-indigo-500 text-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Lightbulb size={32} />
                                </div>
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-primary">General Knowledge Quiz</h3>
                                    <p className="text-indigo-700 font-semibold text-lg">Academic Competition</p>
                                </div>
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Test knowledge across various subjects and current affairs. Students participate in quiz
                                rounds covering topics from history, geography, science, sports, and general awareness,
                                fostering a love for learning.
                            </p>
                            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 border-l-4 border-indigo-500">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <Star size={20} className="text-indigo-600" fill="currentColor" />
                                        <span className="text-gray-700 font-medium">Broadens general knowledge</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Star size={20} className="text-indigo-600" fill="currentColor" />
                                        <span className="text-gray-700 font-medium">Develops quick thinking</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Star size={20} className="text-indigo-600" fill="currentColor" />
                                        <span className="text-gray-700 font-medium">Encourages continuous learning</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        
                    </div>
                </div>
            </section>




            {/* Other Competitions */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                            More Opportunities
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Other Competitions</h2>
                        <p className="text-xl text-gray-600">Additional platforms to showcase talents</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {otherCompetitions.map((comp, idx) => {
                            const IconComponent = comp.icon;

                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100"
                                >
                                    <div className={`${getColorClasses(comp.color)} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                                        <IconComponent size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold text-primary mb-3">{comp.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{comp.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

          
        </div>
    );
};

export default IcsePrimaryCompetitions;