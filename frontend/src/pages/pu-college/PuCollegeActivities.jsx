import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    Users,
    Trophy,
    Award,
    Sparkles,
    Heart,
    Target,
    BookOpen,
    Leaf,
    Globe,
    Shield,
    Star,
    Calendar
} from "lucide-react";

// Import your activity images here
import img1 from "../../assets/pu-college/Picture3.jpg"
import img2 from "../../assets/pu-college/Picture4.jpg"
// ... add all your images


import img11 from "../../assets/pu-college/Picture11.png"
import img12 from "../../assets/pu-college/Picture12.png"
import img13 from "../../assets/pu-college/Picture13.png"
import img14 from "../../assets/pu-college/Picture14.png"
import img15 from "../../assets/pu-college/Picture15.png"
import img16 from "../../assets/pu-college/Picture16.png"
import img17 from "../../assets/pu-college/Picture17.jpg"
import img18 from "../../assets/pu-college/Picture18.jpg"

import img19 from "../../assets/pu-college/Picture19.png"
import img20 from "../../assets/pu-college/Picture20.png"
import img21 from "../../assets/pu-college/Picture21.png"
import img22 from "../../assets/pu-college/Picture22.png"

import img23 from "../../assets/pu-college/Picture23.jpg"
import img24 from "../../assets/pu-college/Picture24.jpg"

import img25 from "../../assets/pu-college/Picture25.png"
import img26 from "../../assets/pu-college/Picture26.png"
import img27 from "../../assets/pu-college/Picture27.png"
import img28 from "../../assets/pu-college/Picture28.jpg"
import img29 from "../../assets/pu-college/Picture29.png"
import img30 from "../../assets/pu-college/Picture30.jpg"
import img31 from "../../assets/pu-college/Picture31.png"
import img32 from "../../assets/pu-college/Picture32.png"

import img33 from "../../assets/pu-college/Picture33.jpg"
import img34 from "../../assets/pu-college/Picture34.jpg"

import img35 from "../../assets/pu-college/Picture35.jpg"
import img36 from "../../assets/pu-college/Picture36.jpg"
import img37 from "../../assets/pu-college/Picture37.png"
import img38 from "../../assets/pu-college/Picture38.jpg"

import img39 from "../../assets/pu-college/Picture39.jpg"
import img40 from "../../assets/pu-college/Picture40.png"
import img41 from "../../assets/pu-college/Picture41.jpg"















// Image slider with autoplay
const ImageSlider = ({ images, title }) => {
    const [index, setIndex] = useState(0);

    if (!images || images.length === 0) return null;

    const next = () => {
        setIndex((prev) => (prev + 1) % images.length);
    };

    const prev = () => {
        setIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        if (images.length <= 1) return;

        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
            <motion.img
                key={index}
                src={images[index]}
                alt={title}
                className="w-full h-80 object-contain"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35 }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            {images.length > 1 && (
                <div className="absolute bottom-4 left-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
                    {index + 1} / {images.length}
                </div>
            )}

            {images.length > 1 && (
                <>
                    <button
                        onClick={prev}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold shadow-md transition-all hover:scale-110"
                    >
                        ‹
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold shadow-md transition-all hover:scale-110"
                    >
                        ›
                    </button>
                </>
            )}
        </div>
    );
};

const PuCollegeActivities = () => {
    const activities = [
        {
            icon: Leaf,
            title: "Seed Ball Making",
            subtitle: "Hands United for a Healthy Planet",
            description:
                "Students actively participated in creating seed balls as part of environmental conservation efforts. This hands-on activity promotes awareness about reforestation and sustainable practices. Through this initiative, students learn the importance of protecting our planet and taking action for a greener future.",
            images: [img11, img12], // Add your actual images
            color: "from-[#0F2A4A] to-[#1a3a5f]"
        },
        {
            icon: Shield,
            title: "Dengue Awareness",
            subtitle: "Clean School, Clean Home, Dengue Has No Dome",
            description:
                "A comprehensive awareness program conducted to educate students about dengue prevention and control measures. Students learned about mosquito breeding prevention, symptoms recognition, and the importance of maintaining clean surroundings. Interactive sessions and skits made the learning engaging and memorable.",
            images: [img13, img14],
            color: "from-[#FDB913] to-[#FDB913]/80"
        },
        {
            icon: Heart,
            title: "International Yoga Day",
            subtitle: "From Chaos to Calm - Yoga Makes Life Beautiful",
            description:
                "Celebrating International Yoga Day with students and teachers performing various asanas and breathing exercises. The session emphasized the importance of physical and mental well-being. Students learned simple yoga techniques to manage stress and maintain a healthy lifestyle, promoting holistic development.",
            images: [img15, img16],
            color: "from-[#0F2A4A] to-[#1a3a5f]"
        },
        {
            icon: Trophy,
            title: "Kabaddi Tournament",
            subtitle: "Power, Passion and Pure Domination - That's Kabaddi",
            description:
                "Inter-college Kabaddi tournament showcasing students' athletic prowess, team spirit, and competitive spirit. Students demonstrated excellent sportsmanship, strategic thinking, and physical endurance. The tournament fostered unity, discipline, and healthy competition among participants.",
            images: [img17, img18],
            color: "from-[#FDB913] to-[#FDB913]/80"
        },
        {
            icon: Users,
            title: "Clubs and Societies",
            subtitle: "Extra-Curricular Engagement",
            description:
                "Various clubs provide platforms for students to explore their interests beyond academics. Eco Club focuses on environmental conservation, Climate Action Club addresses climate change issues, Cultural/Literary Club promotes arts and literature, and Interact Club engages in community service. These clubs develop leadership, teamwork, and social responsibility.",
            images: [img19, img20],
            color: "from-[#0F2A4A] to-[#1a3a5f]"
        },
         {
            icon: Award,
            title: "Guru Ratna Teachers' Award 2025",
            subtitle: "Where Passion Meets Purpose - A Teacher Shines",
            description:
                "Recognizing outstanding educators for their exceptional contribution to education. Faculty members received prestigious awards including Social Activist Award, Best Women Teacher Award, and 'Acharya Devo Bhava' honor. The ceremony celebrated dedication, innovation, and excellence in teaching.",
            images: [img25, img26,img27,img28,img29,img30,img31, img32],
            color: "from-[#FDB913] to-[#FDB913]/80"
        },
        {
            icon: Trophy,
            title: "Tennis Volleyball District Level",
            subtitle: "Winners Don't Wait for Chances - They Create Them",
            description:
                "Students represented the college at district-level tennis and volleyball tournaments, bringing laurels and recognition. The competitions provided excellent exposure to high-level sports competition and helped develop athletic skills, teamwork, and sportsmanship.",
            images: [img21, img22],
            color: "from-[#0F2A4A] to-[#1a3a5f]"
        },
        {
            icon: Sparkles,
            title: "Geetha Gayana Taluk Level Competition",
            subtitle: "Dedication Rewarded, Dreams Realized",
            description:
                "Students showcased their musical talents in the prestigious Geetha Gayana competition at taluk level. This platform allowed students to display their singing abilities, cultural knowledge, and stage presence. Winners received recognition and certificates for their outstanding performances.",
            images: [img23, img24],
            color: "from-[#FDB913] to-[#FDB913]/80"
        },
        {
            icon: Target,
            title: "Installation and Skill Development",
            subtitle: "Building Future Leaders",
            description:
                "Student council investiture ceremony and skill development programs organized to enhance leadership qualities and practical skills. The program includes personality development, communication skills, time management, and leadership training. Students take oath to serve the college community with dedication and integrity.",
            images: [img33, img34],
            color: "from-[#0F2A4A] to-[#1a3a5f]"
        },
        {
            icon: Users,
            title: "Investiture Ceremony",
            subtitle: "Lead with Courage, Serve with Grace",
            description:
                "The formal ceremony of conferring responsibilities to the newly elected student council members. Student leaders take pledge to uphold the values and traditions of the institution. The ceremony instills a sense of responsibility, leadership, and commitment to serve the student community.",
            images: [img41, img39, img40],
            color: "from-[#FDB913] to-[#FDB913]/80"
        },
        {
            icon: Leaf,
            title: "Eco Club Activity",
            subtitle: "Best Out of Waste - Where Creativity Meets Sustainability",
            description:
                "Students engaged in creative activities using waste materials to create useful products. The initiative promotes environmental awareness, recycling, and sustainable living practices. Students learned innovative ways to reduce waste and contribute to environmental conservation through hands-on activities.",
            images: [img35,img36,img37, img38],
            color: "from-[#0F2A4A] to-[#1a3a5f]"
        },
       
    ];

    return (
        <div className="pt-20 min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-[#0F2A4A] via-[#1a3a5f] to-[#0F2A4A] text-white py-32 overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-10 right-10 w-64 h-64 bg-[#FDB913]/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#FDB913]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center bg-[#FDB913] text-[#0F2A4A] px-6 py-2 rounded-full font-semibold mb-6">
                            <Star className="mr-2" size={20} />
                            Beyond Academics
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Activities & <span className="text-[#FDB913]">Events</span>
                        </h1>
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="h-1 w-20 bg-[#FDB913] rounded"></div>
                            <div className="h-1 w-12 bg-white rounded"></div>
                            <div className="h-1 w-20 bg-[#FDB913] rounded"></div>
                        </div>
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                            Empowering students through diverse co-curricular activities, competitions, and cultural programs
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Activities Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-16">
                        <span className="text-[#FDB913] font-bold tracking-widest uppercase text-sm">
                            Annual Programs
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A4A] mt-3 mb-6">
                            Activities and Events
                        </h2>
                        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                            Enriching experiences that foster holistic development and create lasting memories
                        </p>
                    </div>

                    <div className="space-y-20">
                        {activities.map((activity, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                            >
                                {/* Image slider – alternating left/right */}
                                <div className={idx % 2 === 0 ? "lg:order-1" : "lg:order-2"}>
                                    <ImageSlider images={activity.images} title={activity.title} />
                                </div>

                                {/* Content – opposite side of image */}
                                <div className={idx % 2 === 0 ? "lg:order-2" : "lg:order-1"}>
                                    <div
                                        className={`bg-gradient-to-br ${activity.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-xl transform hover:scale-110 transition-transform`}
                                    >
                                        <activity.icon className="text-white" size={36} />
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-[#0F2A4A] mb-3">
                                        {activity.title}
                                    </h3>
                                    <p className="text-[#FDB913] font-bold text-xl mb-4 italic">
                                        "{activity.subtitle}"
                                    </p>
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        {activity.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-20"
                >
                    <div className="bg-gradient-to-r from-[#0F2A4A] to-[#1a3a5f] rounded-3xl p-12 text-white shadow-2xl">
                        <Calendar className="mx-auto mb-6 text-[#FDB913]" size={64} />
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Join Our Activities
                        </h2>
                        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                            Be part of our vibrant community and explore opportunities for growth beyond academics
                        </p>

                        
                          <a  href="/scadambi/pu-college/calender"
                            className="inline-block bg-[#FDB913] hover:bg-[#FDB913]/90 text-[#0F2A4A] font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                        >
                            View Event Calendar
                        </a>
                    </div>
                </motion.div>
            </div>

            <style jsx>{`
                @keyframes pulse {
                    0%, 100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.5;
                    }
                }

                .animate-pulse {
                    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }

                .delay-1000 {
                    animation-delay: 1000ms;
                }
            `}</style>
        </div>
    );
};

export default PuCollegeActivities;