import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building, Shield, Heart, Sparkles, ChevronLeft, ChevronRight, Camera, Activity, CheckCircle, Users, MapPin } from 'lucide-react';

import img1 from "../../assets/play-school/Picture1.png"
import img2 from "../../assets/play-school/Picture14.jpg"

import img3 from "../../assets/play-school/Picture02.jpg"
import img4 from "../../assets/play-school/Picture03.jpg"
import img5 from "../../assets/play-school/Picture4.png"

import img6 from "../../assets/play-school/Picture5.png"
import img7 from "../../assets/play-school/Picture6.png"

import img8 from "../../assets/play-school/Picture7.png"
import img9 from "../../assets/play-school/Picture8.jpg"
import img10 from "../../assets/play-school/Picture9.jpg"

import img11 from "../../assets/play-school/Picture10.png"
import img12 from "../../assets/play-school/Picture11.png"
import img13 from "../../assets/play-school/Picture12.png"

import img14 from "../../assets/play-school/Picture13.jpg"
import img15 from "../../assets/play-school/Picture13.jpg"

const PlaySchoolFacilities = () => {
    const [activeImageSet, setActiveImageSet] = useState({});

    // Image data for different sections
    const campusImages = [
        { url: img1, caption: "School Building Exterior" },
        { url: img2, caption: "Campus View" }
    ];

    const classroomImages = {
        playHome: [
              { url: img5, caption: "Play Home - Interactive Learning" },
            { url: img3, caption: "Play Home - Interactive Learning" },
            { url: img4, caption: "Colorful Learning Environment" }
        ],
        preKg: [
            { url: img6, caption: "Pre-KG Classroom" },
            { url: img3, caption: "Engaging Learning Space" }
        ],
        lkg: [
            { url:img7, caption: "LKG Classroom" },
            { url: img4, caption: "Interactive Learning Area" }
        ]
    };

    const sportsImages = [
        { url: img8, caption: "Ball Pool Play Area" },
        { url: img9, caption: "Indoor Play Zone" },
        { url: img10, caption: "Indoor Play Zone" },
    ];

    const safetyImages = [
        { url: img11, caption: "CCTV Surveillance" },
        { url: img12, caption: "Safety Monitoring" },
         { url: img13, caption: "CCTV Surveillance" },
    ];

    const firstAidImages = [
        { url:img14, caption: "First Aid Facility" },
        { url: img15, caption: "Emergency Equipment" }
    ];

    const facilities = [
        {
            icon: <Building className="w-10 h-10" />,
            title: "Well lit and Spacious Classrooms",
            description: "Bright, ventilated, and spacious classrooms designed for comfortable learning with age-appropriate furniture and learning materials."
        },
        {
            icon: <Sparkles className="w-10 h-10" />,
            title: "Well Sanitized Environment",
            description: "Maintaining high standards of hygiene and cleanliness throughout the campus with regular sanitization protocols."
        },
        {
            icon: <Activity className="w-10 h-10" />,
            title: "Play Area",
            description: "Play area with swings, slides, sand pit and ball pool for physical development and fun activities."
        },
        {
            icon: <Camera className="w-10 h-10" />,
            title: "Audio-Visual Aids",
            description: "Audio-Visual aids used for making the child's learning more interesting and effective through modern technology."
        }
    ];

    const classrooms = [
        {
            title: "Play Home",
            images: classroomImages.playHome,
            features: ["Colorful learning environment", "Age-appropriate toys and materials", "Safe play zones", "Interactive learning areas"]
        },
        {
            title: "Pre kg",
            images: classroomImages.preKg,
            features: ["Interactive learning boards", "Hands-on learning materials", "Group activity spaces", "Creative exploration areas"]
        },
        {
            title: "LKG",
            images: classroomImages.lkg,
            features: ["Reading corners", "Math manipulatives", "Creative arts area", "Science discovery zone"]
        }
    ];

    const ImageSlider = ({ images, sectionKey }) => {
        const currentIndex = activeImageSet[sectionKey] || 0;

        const nextImage = () => {
            setActiveImageSet(prev => ({
                ...prev,
                [sectionKey]: (currentIndex + 1) % images.length
            }));
        };

        const prevImage = () => {
            setActiveImageSet(prev => ({
                ...prev,
                [sectionKey]: currentIndex === 0 ? images.length - 1 : currentIndex - 1
            }));
        };

        return (
            <div className="relative group">
                <div className="relative h-64 bg-gray-200 rounded-2xl overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentIndex}
                            src={images[currentIndex].url}
                            alt={images[currentIndex].caption}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="w-full h-full object-cover"
                        />
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#0F2A4A] text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#FDB913] hover:text-[#0F2A4A]"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#0F2A4A] text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#FDB913] hover:text-[#0F2A4A]"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </>
                    )}

                    {/* Dots Indicator */}
                    {images.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                            {images.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveImageSet(prev => ({ ...prev, [sectionKey]: idx }))}
                                    className={`w-2 h-2 rounded-full transition-all ${
                                        idx === currentIndex ? 'bg-[#FDB913] w-6' : 'bg-white/50'
                                    }`}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Caption */}
                <motion.p
                    key={currentIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mt-3 text-sm text-gray-600 font-semibold"
                >
                    {images[currentIndex].caption}
                </motion.p>
            </div>
        );
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div className="min-h-screen pt-32 bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[#0F2A4A] via-[#1a4070] to-[#0F2A4A] text-white py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 180, 360]
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute top-10 left-10 w-64 h-64 bg-[#FDB913] rounded-full blur-3xl"
                    ></motion.div>
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            rotate: [360, 180, 0]
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute bottom-10 right-10 w-96 h-96 bg-[#FDB913] rounded-full blur-3xl"
                    ></motion.div>
                </div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="inline-block mb-8"
                        >
                            <div className="bg-[#FDB913] rounded-full p-6 shadow-2xl">
                                <Building className="w-16 h-16 text-[#0F2A4A]" />
                            </div>
                        </motion.div>
                        
                        <h1 className="text-6xl font-bold mb-6">Facilities and Infrastructure</h1>
                        
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "200px" }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="h-1 bg-[#FDB913] mx-auto mb-8"
                        ></motion.div>
                        
                        <p className="text-2xl text-[#FDB913] font-semibold mb-4">World-Class Learning Environment</p>
                        <p className="text-xl max-w-4xl mx-auto text-white/90 leading-relaxed">
                            Our campus is designed to provide a safe, stimulating, and nurturing environment 
                            for young learners to grow and thrive
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Campus Overview */}
            <section className="py-20 -mt-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FDB913] to-yellow-600 rounded-3xl opacity-90 blur-sm"></div>
                        <div className="relative bg-gradient-to-br from-[#FDB913] to-yellow-500 rounded-3xl p-12 shadow-2xl border-4 border-white">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                <div>
                                    <div className="flex items-center mb-6">
                                        <MapPin className="w-12 h-12 text-[#0F2A4A] mr-4" />
                                        <h2 className="text-4xl font-bold text-[#0F2A4A]">Campus Overview</h2>
                                    </div>
                                    <div className="space-y-4 text-[#0F2A4A]">
                                        <p className="text-lg leading-relaxed">
                                            <strong>Shishu Chaitanya</strong> is a branch of <strong>S. Cadambi Vidya Kendra</strong>. 
                                            It was established in the year <strong>2013</strong> and was inaugurated by our honorable 
                                            president <strong>Dr. K. Sheshamurthy</strong>.
                                        </p>
                                        <p className="text-lg leading-relaxed">
                                            Located in <strong>Maruthi Extension, Bengaluru - 560021</strong>, Shishu Chaitanya caters 
                                            to the developmental and emotional growth of children aged between <strong>2.5 to 6 years</strong>.
                                        </p>
                                        <p className="text-lg leading-relaxed">
                                            This institution provides all the necessary facilities for the betterment of students.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <ImageSlider images={campusImages} sectionKey="campus" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Facilities */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl font-bold text-[#0F2A4A] mb-4">Our Facilities</h2>
                        <div className="w-32 h-1 bg-[#FDB913] mx-auto mb-4"></div>
                        <p className="text-xl text-gray-600">Everything your child needs for a great learning experience</p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {facilities.map((facility, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-[#FDB913] group"
                            >
                                <div className="bg-gradient-to-br from-[#0F2A4A] to-[#1a4070] h-32 flex items-center justify-center text-white group-hover:from-[#FDB913] group-hover:to-yellow-500 group-hover:text-[#0F2A4A] transition-all">
                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        {facility.icon}
                                    </motion.div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#0F2A4A] mb-3 group-hover:text-[#FDB913] transition-colors">
                                        {facility.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        {facility.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Classrooms with Image Sliders */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl font-bold text-[#0F2A4A] mb-4">Classrooms</h2>
                        <div className="w-32 h-1 bg-[#FDB913] mx-auto mb-4"></div>
                        <p className="text-xl text-gray-600">Age-appropriate learning spaces designed for growth</p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        {classrooms.map((classroom, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                className="bg-white rounded-3xl overflow-hidden shadow-xl border-4 border-white hover:border-[#FDB913] transition-all"
                            >
                                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                    <div className={`${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                                        <ImageSlider 
                                            images={classroom.images} 
                                            sectionKey={`classroom-${idx}`} 
                                        />
                                    </div>
                                    <div className={`flex flex-col justify-center ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                                        <div className="inline-block bg-gradient-to-r from-[#0F2A4A] to-[#1a4070] text-[#FDB913] px-6 py-2 rounded-full text-sm font-bold mb-4 w-fit">
                                            Age Group
                                        </div>
                                        <h3 className="text-4xl font-bold text-[#0F2A4A] mb-6">{classroom.title}</h3>
                                        <div className="space-y-3">
                                            {classroom.features.map((feature, fidx) => (
                                                <motion.div
                                                    key={fidx}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: fidx * 0.1 }}
                                                    className="flex items-start"
                                                >
                                                    <CheckCircle className="w-6 h-6 text-[#FDB913] mr-3 flex-shrink-0 mt-0.5" />
                                                    <span className="text-lg text-gray-700">{feature}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Sports Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl font-bold text-[#0F2A4A] mb-4">Sports</h2>
                        <div className="w-32 h-1 bg-[#FDB913] mx-auto"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <ImageSlider images={sportsImages} sectionKey="sports" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="bg-gradient-to-br from-[#0F2A4A] to-[#1a4070] rounded-2xl p-8 text-white">
                                <h3 className="text-3xl font-bold mb-4 text-[#FDB913]">Indoor Games</h3>
                                <p className="text-lg leading-relaxed">
                                    Indoor games are perfect for a classroom, focusing on developing fine <strong>motor</strong> skills 
                                    and creative thinking through various activities.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-[#FDB913] to-yellow-500 rounded-2xl p-8 text-[#0F2A4A]">
                                <h3 className="text-3xl font-bold mb-4">Outdoor Games</h3>
                                <p className="text-lg leading-relaxed">
                                    Outdoor games encourage physical activity, exploration, and social interaction, allowing children 
                                    to build gross motor skills and get closer to nature.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Safety & Security and First Aid */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Safety & Security */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl overflow-hidden shadow-xl border-4 border-white hover:border-[#FDB913] transition-all"
                        >
                            <div className="bg-gradient-to-br from-[#0F2A4A] to-[#1a4070] p-8 text-white">
                                <Shield className="w-16 h-16 text-[#FDB913] mb-4" />
                                <h3 className="text-4xl font-bold mb-2">Safety & Security</h3>
                                <p className="text-white/80">Your child's safety is our top priority</p>
                            </div>
                            
                            <div className="p-8">
                                <ImageSlider images={safetyImages} sectionKey="safety" />
                                
                                <div className="mt-6 space-y-3">
                                    <p className="text-gray-700 leading-relaxed">
                                        Installed security cameras in strategic locations like entrances, hallways and playgrounds.
                                    </p>
                                    <div className="space-y-2">
                                        {[
                                            "CCTV surveillance system",
                                            "Secure entry and exit points",
                                            "Trained security personnel",
                                            "Child-safe equipment"
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-start">
                                                <CheckCircle className="w-5 h-5 text-[#FDB913] mr-2 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-700">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* First Aid */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-xl border-4 border-white hover:border-[#FDB913] transition-all"
                        >
                            <div className="bg-gradient-to-br from-[#FDB913] to-yellow-500 p-8 text-[#0F2A4A]">
                                <Heart className="w-16 h-16 mb-4" />
                                <h3 className="text-4xl font-bold mb-2">First Aid</h3>
                                <p className="text-[#0F2A4A]/80">Immediate medical assistance available</p>
                            </div>
                            
                            <div className="p-8">
                                <ImageSlider images={firstAidImages} sectionKey="firstaid" />
                                
                                <div className="mt-6 space-y-3">
                                    <p className="text-gray-700 leading-relaxed">
                                        Equipped the school with first aid supplies and have trained personnel ready to provide 
                                        immediate medical assistance.
                                    </p>
                                    <div className="space-y-2">
                                        {[
                                            "Fully equipped first aid facility",
                                            "Trained staff for medical assistance",
                                            "Regular health checks",
                                            "Emergency contact protocols"
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-start">
                                                <CheckCircle className="w-5 h-5 text-[#FDB913] mr-2 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-700">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0F2A4A] via-[#1a4070] to-[#0F2A4A]"></div>
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-20 w-96 h-96 bg-[#FDB913] rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FDB913] rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                                rotate: [0, 5, -5, 0]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <Users className="w-20 h-20 mx-auto mb-8 text-[#FDB913]" />
                        </motion.div>
                        
                        <h2 className="text-5xl font-bold mb-6 text-white">Visit Our Campus</h2>
                        <div className="w-32 h-1 bg-[#FDB913] mx-auto mb-8"></div>
                        <p className="text-2xl mb-12 text-white/90 leading-relaxed max-w-3xl mx-auto">
                            Experience our world-class facilities firsthand. Schedule a campus tour today!
                        </p>
                        
                        <motion.a
                            href="/play-school/contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center bg-[#FDB913] hover:bg-yellow-500 text-[#0F2A4A] font-bold px-10 py-5 rounded-2xl transition-all shadow-2xl text-xl"
                        >
                            Schedule a Visit
                            <ChevronRight className="ml-2 w-6 h-6" />
                        </motion.a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default PlaySchoolFacilities;