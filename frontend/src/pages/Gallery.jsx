import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
    X,
    Camera,
    Play,
    ExternalLink,
    Image as ImageIcon,
    Film,
    Maximize2,
    Sparkles,
    School,
    GraduationCap
} from 'lucide-react';


// --- IMPORT YOUR IMAGES HERE ---
// Replace these with the actual files you have in ../../assets/icse-primary/...
import img1 from "../assets/icse-primary/scout/Picture30.jpg";
import img2 from "../assets/icse-primary/scout/Picture33.jpg";
import img3 from "../assets/icse-primary/scout/Picture41.jpg";
import img4 from "../assets/icse-primary/scout/Picture43.jpg";
import img5 from "../assets/icse-primary/scout/Picture44.jpg";
import img6 from "../assets/icse-primary/scout/Picture51.jpg";
import img7 from "../assets/icse-primary/scout/Picture52.jpg";
import img8 from "../assets/icse-primary/scout/Picture55.jpg";
import img9 from "../assets/icse-primary/scout/Picture65.jpg";
import img10 from "../assets/icse-primary/scout/Picture62.jpg";
import img11 from "../assets/icse-primary/scout/Picture67.jpg";
import img12 from "../assets/icse-primary/scout/Picture69.jpg";

import img13 from "../assets/icse-primary/Picture15.jpg";
import img14 from "../assets/icse-primary/art/Picture28.jpg";
import img15 from "../assets/icse-primary/Picture35.png";
import img16 from "../assets/icse-primary/Picture12.jpg";
import img17 from "../assets/icse-primary/Picture5.jpg";
import img18 from "../assets/icse-primary/Picture32.jpg";
import img19 from "../assets/icse-primary/Picture48.jpg";

import img24 from "../assets/icse-primary/yoga.jpeg";
import img25 from "../assets/icse-primary/Picture2.jpg";
import img23 from "../assets/icse-primary/32.png";
import img22 from "../assets/icse-primary/31.png";
import img21 from "../assets/icse-primary/sport.jpeg";
import img20 from "../assets/icse-primary/Picture48.jpg";

import img26 from "../assets/icse-primary/Picture2.png";
import img27 from "../assets/icse-primary/art/Picture14.jpg";
import img28 from "../assets/icse-primary/Picture6.png";
import img29 from "../assets/icse-primary/art/Picture3.jpg";


import img31 from "../assets/icse-primary/scout/Picture1.jpg";
import img32 from "../assets/icse-primary/scout/Picture2.png";

import img35 from "../assets/icse-primary/scout/Picture5.png";
import img36 from "../assets/icse-primary/scout/Picture6.jpg";
import img37 from "../assets/icse-primary/scout/Picture7.jpg";
import img38 from "../assets/icse-primary/scout/Picture8.png";
import img39 from "../assets/icse-primary/scout/Picture9.png";
import img40 from "../assets/icse-primary/scout/Picture10.png";
import img41 from "../assets/icse-primary/scout/Picture11.png";



import img52 from "../assets/play-school/Picture162.jpg"
import img53 from "../assets/play-school/Picture163.jpg"
import img54 from "../assets/play-school/Picture164.jpg"
import img55 from "../assets/play-school/Picture165.jpg"
import img56 from "../assets/play-school/Picture166.jpg"
import img57 from "../assets/play-school/Picture167.jpg"
import img58 from "../assets/play-school/Picture168.jpg"
import img49 from "../assets/play-school/Picture169.jpg"
import img50 from "../assets/play-school/Picture170.jpg"

import img51 from "../assets/play-school/Picture172.jpg"
import img48 from "../assets/play-school/Picture173.jpg"
import img44 from "../assets/play-school/Picture174.jpg"
import img45 from "../assets/play-school/Picture175.jpg"
import img46 from "../assets/play-school/Picture176.jpg"
import img47 from "../assets/play-school/Picture177.jpg"
import academic1 from '../assets/pre-primary/gallery/Picture1.jpg';
import academic2 from '../assets/pre-primary/gallery/Picture2.jpg';
import academic3 from '../assets/pre-primary/gallery/Picture3.jpg';
import academic4 from '../assets/pre-primary/gallery/Picture4.jpg';
import academic5 from '../assets/pre-primary/gallery/Picture5.jpg';
import academic6 from '../assets/pre-primary/gallery/Picture6.jpg';
import academic7 from '../assets/pre-primary/gallery/Picture7.jpg';
import academic8 from '../assets/pre-primary/gallery/Picture8.jpg';

import clas1 from "../assets/high-school/class1.png"
import clas2 from "../assets/high-school/class2.png"
import clas3 from "../assets/high-school/class3.png"

import img73 from "../assets/pu-college/Picture37.png"
import img72 from "../assets/pu-college/Picture13.png"

import img81 from "../assets/high-school/activity/Picture27.jpg"

import img82 from '../assets/pre-primary/gallery/Picture51.jpg';
import img83 from '../assets/pre-primary/gallery/Picture52.jpg';

import img84 from '../assets/high-school/activity/Picture32.jpg';
import img85 from '../assets/high-school/activity/Picture33.jpg';
import img86 from '../assets/high-school/activity/Picture35.jpg';
import img87 from '../assets/high-school/activity/Picture40.jpg';
import img88 from '../assets/high-school/activity/Picture44.jpg';

import img90 from '../assets/high-school/activity/Picture39.jpg';
import img89 from '../assets/high-school/activity/Picture25.jpg';
import img91 from '../assets/high-school/activity/Picture42.jpg';


import img100 from '../assets/icse-high/Picture9.jpg';
import img101 from '../assets/icse-high/Picture2.jpg';
import img102 from '../assets/icse-high/Picture3.jpg';
import img103 from '../assets/icse-high/Picture4.jpg';
import img104 from '../assets/icse-high/Picture5.jpg';


import img105 from '../assets/pre-primary/gallery/1.png';
import img106 from '../assets/pre-primary/gallery/2.png';
import img107 from '../assets/pre-primary/gallery/3.png';
import img108 from '../assets/pre-primary/gallery/4.png';
import img109 from '../assets/pu-college/Picture35.jpg';
import img110 from '../assets/pu-college/Picture39.jpg';
import img111 from '../assets/pu-college/Picture33.jpg';

import img112 from '../assets/pu-college/Picture25.png';
import img113 from '../assets/pu-college/Picture30.jpg';
import img114 from '../assets/pu-college/Picture13.png';


import img120 from '../assets/icse-high/Picture3.jpg';
import img121 from '../assets/high-school/sport.png';
import img123 from '../assets/high-school/sport1.png';

import img124 from '../assets/high-school/activity/Picture28.jpg';
import img125 from '../assets/play-school/Picture127.jpg';
import img126 from '../assets/pre-primary/activity/Picture25.jpg';
import img127 from '../assets/pre-primary/activity/Picture23.jpg';
import img130 from '../assets/pre-primary/activity/Picture14.jpg';
import img129 from '../assets/pre-primary/gallery/Picture51.jpg';
import img128 from '../assets/icse-high/Picture11.jpg';



import img154 from '../assets/icse-primary/sport.jpeg';
import img155 from '../assets/icse-primary/4.png';
import img156 from '../assets/pre-primary/activity/Picture25.jpg';
import img157 from '../assets/icse-primary/5.png';
import img150 from '../assets/pre-primary/activity/Picture14.jpg';
import img151 from '../assets/icse-primary/6.png';
import img158 from '../assets/icse-primary/3.png';
import img153 from '../assets/icse-primary/1.png';
import img159 from '../assets/pu-college/Picture13.png';








const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeCategory, setActiveCategory] = useState('all');

    const galleryCategories = [
        {
            id: 'events',
            title: "Annual Events",
            color: "blue",
            icon: "🎉",
            images: [
                { id: 1, src: img20, title: "World Environment Day", description: "World Environment Day Activities", category: "events" },
                { id: 2, src: img21, title: "Sports Day", description: "Annual Sports Meet 2025", category: "events" },
                { id: 3, src: img24, title: "Yoga Day", description: "International Yoga Day Celebration", category: "events" },
                { id: 4, src: img25, title: "Independence Day", description: "79th Independence Day Celebration", category: "events" },
                { id: 28, src: img22, title: "Bhagavad Gita Recitation", description: "Moral and spiritual guidance", category: "events" },
                { id: 112, src: img112, title: "Guru Ratna Teachers' Award 2025", description: "Sri Naveen Kumar – Social Activist Award", category: "events" },
                { id: 113, src: img113, title: "Teacher Recognition", description: "Where Passion Meets Purpose – A Teacher Shines", category: "events" },
                { id: 114, src: img114, title: "Educational Program", description: "Educational Program", category: "events" },
                { id: 29, src: img23, title: "Bal Vikas Program", description: "Nurture a Child's Personality", category: "events" },
                { id: 105, src: img105, title: "Ganesha Chaturthi", description: "Ganesha Chaturthi Celebration", category: "events" },
                { id: 106, src: img106, title: "Krishna Janmashtami", description: "Krishna Janmashtami Celebration", category: "events" },
                { id: 107, src: img107, title: "Ganesha Chaturthi", description: "Ganesha Chaturthi Celebration", category: "events" },
                { id: 108, src: img108, title: "Krishna Janmashtami", description: "Krishna Janmashtami Celebration", category: "events" },
                { id: 109, src: img109, title: "Eco-Friendly Crafts", description: "Moral and Spiritual Guidance", category: "events" },
                { id: 110, src: img110, title: "Investiture Ceremony", description: "Lead with Courage, Serve with Grace", category: "events" },
                { id: 111, src: img111, title: "Skill Development", description: "Installation and Skill Development", category: "events" },
            ]
        },
        {
            id: 'scouts',
            title: "Scouts & Guides",
            color: "green",
            icon: "⚜️",
            images: [
                { id: 5, src: img1, title: "Gita Gayana Competition", description: "Builds confidence in public speaking and presentation", category: "scouts" },
                { id: 6, src: img2, title: "Nature Camp at Doddamaranahalli", description: "Team bonding through shared camping experiences", category: "scouts" },
                { id: 7, src: img3, title: "International Jamboree", description: "Cultural exchange and global perspective", category: "scouts" },
                { id: 8, src: img4, title: "Founder's Day Celebration", description: "Celebrates the rich heritage of Scouting", category: "scouts" },
                { id: 20, src: img5, title: "Nature Camp at Shimoga", description: "Understanding sustainable and organic farming", category: "scouts" },
                { id: 19, src: img6, title: "Environment Day at Vidhana Soudha", description: "Participation in state-level environmental initiatives", category: "scouts" },
                { id: 17, src: img7, title: "Tritiya Sopan Examination", description: "Tests leadership and decision-making abilities", category: "scouts" },
                { id: 18, src: img8, title: "Senses Testing", description: "Improves observation and awareness skills", category: "scouts" },
                { id: 21, src: img9, title: "Traffic Awareness Program", description: "Community service through awareness campaigns", category: "scouts" },
                { id: 22, src: img10, title: "Diamond Jubilee Jamboree", description: "Celebrating 75 years of scouting heritage", category: "scouts" },
                { id: 24, src: img11, title: "Rajat Pankh & Dwitiya Pankh", description: "Testing of fundamental scouting knowledge", category: "scouts" },
                { id: 23, src: img12, title: "Testing Camp BSG", description: "Comprehensive evaluation of scouting competencies", category: "scouts" },
                { id: 81, src: img81, title: "Scout & Guides", description: "Testing of fundamental scouting knowledge", category: "scouts" },
                { id: 100, src: img100, title: "Scout & Guides", description: "Testing of fundamental scouting knowledge", category: "scouts" },
            ]
        },
        {
            id: 'competitions',
            title: "Competitions",
            color: "purple",
            icon: "🏆",
            images: [
                { id: 89, src: img89, title: "Science Expo", description: "Learning and interactive exhibitions", category: "competitions" },
                { id: 90, src: img90, title: "Best Out of Waste", description: "Innovative Today for a Greener Tomorrow", category: "competitions" },
                { id: 91, src: img91, title: "Tattoo Making", description: "Tiny Art, Big Impression", category: "competitions" },
                { id: 9, src: img13, title: "Fancy Dress", description: "Theme-based Fancy Dress Competition", category: "competitions" },
                { id: 10, src: img14, title: "Art Competition", description: "Pair Event Art Competition", category: "competitions" },
                { id: 11, src: img15, title: "Solo Singing", description: "Solo Singing Competition", category: "competitions" },
                { id: 25, src: img16, title: "Pick and Speak", description: "Improves public speaking confidence", category: "competitions" },
                { id: 26, src: img17, title: "Memory Test Competition", description: "Develops concentration and focus", category: "competitions" },
                { id: 27, src: img18, title: "Oratory Competition", description: "Improves vocabulary & fluency", category: "competitions" },
                { id: 12, src: img19, title: "Quiz Competition", description: "General Knowledge Quiz", category: "competitions" },
                { id: 82, src: img83, title: "Team Game", description: "Theme-based Fancy Dress Competition", category: "competitions" },
                { id: 83, src: img84, title: "Interclass Competitions", description: "Rangoli - Colors that Speak, Patterns that Shine", category: "competitions" },
                { id: 84, src: img85, title: "Polling at Cadambi", description: "Mock Elections for Guiding Children in Democracy", category: "competitions" },
                { id: 85, src: img82, title: "Basketball", description: "Improves body strength", category: "competitions" },
                { id: 86, src: img86, title: "Singing Competition", description: "Musical talents and build confidence in performing arts", category: "competitions" },
                { id: 87, src: img87, title: "Drawing Competition", description: "Every stroke speaks a story", category: "competitions" },
                { id: 88, src: img88, title: "Cooking Without Fire", description: "No Fire, Just Flavour and Fun", category: "competitions" },
            ]
        },
        {
            id: 'classroom',
            title: "Classroom Activities",
            color: "orange",
            icon: "📚",
            images: [
                { id: 13, src: img26, title: "Learning Activities", description: "Interactive Classroom Sessions", category: "classroom" },
                { id: 14, src: img27, title: "Group Work", description: "Collaborative Learning", category: "classroom" },
                { id: 15, src: img28, title: "Science Exhibition", description: "Student Projects Display", category: "classroom" },
                { id: 16, src: img29, title: "Art & Craft", description: "Creative Activities", category: "classroom" },
                { id: 44, src: img44, title: "Art & Craft", description: "Creative Activities", category: "classroom" },
                { id: 45, src: img45, title: "Learning Activities", description: "Interactive Classroom Sessions", category: "classroom" },
                { id: 46, src: img46, title: "Group Work", description: "Collaborative Learning", category: "classroom" },
                { id: 47, src: img47, title: "Science Exhibition", description: "Student Projects Display", category: "classroom" },
                { id: 48, src: img48, title: "Art & Craft", description: "Creative Activities", category: "classroom" },
                { id: 49, src: img49, title: "Learning Activities", description: "Interactive Classroom Sessions", category: "classroom" },
                { id: 50, src: img50, title: "Group Work", description: "Collaborative Learning", category: "classroom" },
                { id: 51, src: img51, title: "Art & Craft", description: "Creative Activities", category: "classroom" },
                { id: 52, src: img52, title: "Learning Activities", description: "Interactive Classroom Sessions", category: "classroom" },
                { id: 53, src: img53, title: "Group Work", description: "Collaborative Learning", category: "classroom" },
                { id: 54, src: img54, title: "Science Exhibition", description: "Student Projects Display", category: "classroom" },
                { id: 55, src: img55, title: "Art & Craft", description: "Creative Activities", category: "classroom" },
                { id: 56, src: img56, title: "Learning Activities", description: "Interactive Classroom Sessions", category: "classroom" },
                { id: 57, src: img57, title: "Group Work", description: "Collaborative Learning", category: "classroom" },
                { id: 58, src: img58, title: "Art & Craft", description: "Creative Activities", category: "classroom" },
                { id: 61, src: academic1, alt: 'Students in classroom', description: "Collaborative Learning", category: "classroom" },
                { id: 62, src: academic2, alt: 'Art and craft activity', description: "Creative Activities", category: "classroom" },
                { id: 63, src: academic3, alt: 'Group study session', description: "Student Projects Display", category: "classroom" },
                { id: 64, src: academic4, alt: 'Science experiment', description: "Interactive Classroom Sessions", category: "classroom" },
                { id: 65, src: academic5, alt: 'Interactive learning', description: "Creative Activities", category: "classroom" },
                { id: 66, src: academic6, alt: 'Teacher instruction', description: "Collaborative Learning", category: "classroom" },
                { id: 68, src: academic8, alt: 'Group study session', description: "Interactive Classroom Sessions", category: "classroom" },
                { id: 69, src: clas1, alt: 'Teacher instruction', description: "Collaborative Learning", category: "classroom" },
                { id: 70, src: clas2, alt: 'Art and craft activity', description: "Student Projects Display", category: "classroom" },
                { id: 71, src: clas3, alt: 'Group study session', description: "Interactive Classroom Sessions", category: "classroom" },
                { id: 72, src: img72, alt: 'Group study session', description: "Traditional classroom setup for focused learning", category: "classroom" },
                { id: 73, src: img73, alt: 'Group study session', description: "Clean, organized classrooms promoting discipline", category: "classroom" },
            ]
        },
        {
            id: 'sport',
            title: "Sport Activities",
            color: "blue",
            icon: "⚽",
            images: [
                { id: 120, src: img120, title: "Team Game", description: "Outdoor sport activities", category: "sport" },
                { id: 121, src: img121, title: "Sports Day", description: "Annual Sports Meet 2025", category: "sport" },
                { id: 123, src: img123, title: "Annual Sports Day", description: "Outdoor and indoor sport activity", category: "sport" },
                { id: 124, src: img124, title: "Sports Activities", description: "Participating in sports reduces stress and improves mental health", category: "sport" },
                { id: 125, src: img125, title: "Father's Day", description: "Celebration strengthens the father-child bond", category: "sport" },
                { id: 126, src: img126, title: "Funathon", description: "Annual Sports Day", category: "sport" },
                { id: 127, src: img127, title: "Samanvaya", description: "Annual Sports & Cultural Meet", category: "sport" },
                { id: 129, src: img129, title: "Motor Skills", description: "Fine motor and gross motor development", category: "sport" },
                { id: 130, src: img130, title: "Team Game", description: "Indoor sport activities", category: "sport" },
                { id: 128, src: img128, title: "Sports Activities", description: "Outdoor sport activities", category: "sport" },



                { id: 151, src: img151, title: "Outdoor Games", description: "Kho Kho and Throw Ball", category: "sport" },
                { id: 153, src: img153, title: "Exercise and Drill", description: "Regular physical exercise sessions to promote fitness", category: "sport" },
                { id: 154, src: img154, title: "Sports Day", description: "Sports are super important in schools.", category: "sport" },
                { id: 155, src: img155, title: "Match It and Super Minute", description: "Interactive games that enhance memory, concentration, quick thinking and hand-eye coordination skills", category: "sport" },

                { id: 157, src: img157, title: "Outdoor Games", description: "Relay Race and Running Race", category: "sport" },


                { id: 158, src: img158, title: "Indoor Games", description: "Chess and Snake & Ladder", category: "sport" },
            ]
        },
        {
            id: 'activity',
            title: "Other Activities",
            color: "blue",
            icon: "✨",
            images: [
                { id: 31, src: img31, title: "Community Service", description: "Building imagination & language skills", category: "activity" },
                { id: 32, src: img32, title: "Community Service", description: "Students engage with local community", category: "activity" },
                { id: 104, src: img104, title: "Community Service", description: "Students engage with local community", category: "activity" },
                { id: 101, src: img101, title: "Community Service", description: "Students engage with local community", category: "activity" },
                { id: 102, src: img102, title: "Community Service", description: "Students engage with local community", category: "activity" },
                { id: 103, src: img103, title: "Community Service", description: "Students engage with local community", category: "activity" },
                { id: 35, src: img35, title: "Community Service", description: "Building imagination & language skills", category: "activity" },
                { id: 36, src: img36, title: "Community Service", description: "Students engage with local community", category: "activity" },
                { id: 37, src: img37, title: "Community Service", description: "Building imagination & language skills", category: "activity" },
                { id: 38, src: img38, title: "Community Service", description: "Students engage with local community", category: "activity" },
                { id: 39, src: img39, title: "Community Service", description: "Building imagination & language skills", category: "activity" },
                { id: 40, src: img40, title: "Community Service", description: "Students engage with local community", category: "activity" },
                { id: 41, src: img41, title: "Community Service", description: "Building imagination & language skills", category: "activity" }
            ]
        },
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    const filterVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 15
            }
        }
    };

    const heroVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const allImages = galleryCategories.flatMap(cat => cat.images);
    const filteredImages = activeCategory === 'all' ? allImages : allImages.filter(img => img.category === activeCategory);

    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);


    return (
        <div className="min-h-screen bg-background">

            {/* Enhanced Hero Section */}
            <section
                ref={heroRef}
                className="relative bg-gradient-to-br from-[#0F2A4A] via-[#1a3a5f] to-[#0F2A4A] text-white pt-40 overflow-hidden pb-32"
            >
                {/* Animated Background Elements */}
                <motion.div
                    className="absolute inset-0 opacity-20"
                    animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                    style={{
                        backgroundImage: 'radial-gradient(circle at 20% 50%, white 2px, transparent 2px)',
                        backgroundSize: '50px 50px'
                    }}
                />

                <motion.div
                    className="absolute top-10 right-10 w-64 h-64 bg-[#FDB913]/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />

                <motion.div
                    className="absolute bottom-10 left-0 w-96 h-96 bg-[#FDB913]/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: 1
                    }}
                />

                <motion.div
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
                    style={{ y, opacity }}
                >
                    <div className="text-center">
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 15,
                                delay: 0.2
                            }}
                            className="inline-flex items-center bg-[#FDB913] text-[#0F2A4A] px-6 py-2 rounded-full font-semibold mb-6 shadow-lg"
                        >
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            >
                                <Sparkles className="mr-2" size={20} />
                            </motion.div>
                            Campus in Frames
                        </motion.div>

                        <motion.h1
                            className="text-5xl md:text-6xl font-bold mb-6"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            Celebrating Learning in Every {' '}
                            <motion.span
                                className="text-[#FDB913]"
                                animate={{
                                    textShadow: [
                                        "0 0 20px rgba(253, 185, 19, 0.5)",
                                        "0 0 40px rgba(253, 185, 19, 0.8)",
                                        "0 0 20px rgba(253, 185, 19, 0.5)"
                                    ]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                Frame
                            </motion.span>
                        </motion.h1>

                        <motion.div
                            className="flex items-center justify-center gap-3 mb-6"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6, type: "spring" }}
                        >
                            <motion.div
                                className="h-1 w-20 bg-[#FDB913] rounded"
                                animate={{ width: ["80px", "100px", "80px"] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                            <div className="h-1 w-12 bg-white rounded" />
                            <motion.div
                                className="h-1 w-20 bg-[#FDB913] rounded"
                                animate={{ width: ["80px", "100px", "80px"] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                            />
                        </motion.div>

                        <motion.p
                            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                        >
                            Capturing moments of learning, growth, and celebration at S. Cadambi Education Center
                        </motion.p>
                    </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                    className="absolute top-30 left-40"
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 10, 0]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                >
                    <School className="w-16 h-16 text-[#FDB913]/30" />
                </motion.div>

                <motion.div
                    className="absolute bottom-20 right-20"
                    animate={{
                        y: [0, 20, 0],
                        rotate: [0, -10, 0]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: 1
                    }}
                >
                    <GraduationCap className="w-20 h-20 text-[#FDB913]/30" />
                </motion.div>
            </section>


            {/* Filters with Enhanced Animation */}
            <section className="py-8 bg-white sticky top-20 z-40 shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="flex flex-wrap gap-3 justify-center"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.button
                            variants={filterVariants}
                            onClick={() => setActiveCategory('all')}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activeCategory === 'all'
                                    ? 'bg-primary text-white shadow-lg'
                                    : 'bg-gray-100 hover:bg-gray-200'
                                }`}
                        >
                            <motion.span
                                animate={{ rotate: activeCategory === 'all' ? [0, 20, -20, 0] : 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                🌟
                            </motion.span> All Photos
                        </motion.button>
                        {galleryCategories.map(cat => (
                            <motion.button
                                key={cat.id}
                                variants={filterVariants}
                                onClick={() => setActiveCategory(cat.id)}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activeCategory === cat.id
                                        ? 'bg-primary text-white shadow-lg'
                                        : 'bg-gray-100 hover:bg-gray-200'
                                    }`}
                            >
                                <motion.span
                                    animate={{ rotate: activeCategory === cat.id ? [0, 20, -20, 0] : 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="mr-2"
                                >
                                    {cat.icon}
                                </motion.span>
                                {cat.title}
                            </motion.button>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Gallery Grid with Stagger Animation */}
            <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.span
                            className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block"
                            whileHover={{ scale: 1.05 }}
                        >
                            <ImageIcon className="inline-block mr-2" size={16} />
                            {filteredImages.length} Photos
                        </motion.span>
                        <motion.h2
                            className="text-3xl font-bold text-primary"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            {activeCategory === 'all' ? 'All Memories' : galleryCategories.find(c => c.id === activeCategory)?.title}
                        </motion.h2>
                    </motion.div>

                    <motion.div
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        key={activeCategory} // This triggers re-animation on category change
                    >
                        {filteredImages.map((image, idx) => (
                            <motion.div
                                key={image.id}
                                variants={itemVariants}
                                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                                onClick={() => setSelectedImage(image)}
                                whileHover={{
                                    y: -10,
                                    scale: 1.02,
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20
                                }}
                            >
                                <div className="aspect-square relative overflow-hidden">
                                    {image.src ? (
                                        <motion.img
                                            src={image.src}
                                            alt={image.title}
                                            className="w-full h-full object-contain"
                                            loading="lazy"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.4 }}
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                                            <motion.span
                                                className="text-7xl opacity-40"
                                                animate={{
                                                    rotate: [0, 10, -10, 0],
                                                    scale: [1, 1.1, 1]
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity
                                                }}
                                            >
                                                📸
                                            </motion.span>
                                        </div>
                                    )}

                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                    >
                                        <motion.div
                                            className="text-center"
                                            initial={{ y: 20, opacity: 0 }}
                                            whileHover={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <motion.div
                                                whileHover={{ scale: 1.2, rotate: 90 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                <Maximize2 className="mx-auto text-white mb-2" size={32} />
                                            </motion.div>
                                            <p className="text-white font-semibold">View Image</p>
                                        </motion.div>
                                    </motion.div>

                                    <motion.div
                                        className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: idx * 0.05, type: "spring" }}
                                        whileHover={{ scale: 1.1, rotate: 10 }}
                                    >
                                        {galleryCategories.find(c => c.id === image.category)?.icon}
                                    </motion.div>
                                </div>

                                <motion.div
                                    className="p-5"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: idx * 0.05 + 0.2 }}
                                >
                                    <h3 className="font-bold text-primary mb-2 text-lg">{image.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{image.description}</p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Enhanced Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 50 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="relative max-w-5xl w-full bg-white rounded-3xl overflow-hidden"
                            onClick={e => e.stopPropagation()}
                        >
                            <motion.button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 z-10 bg-white/90 rounded-full p-3 shadow-lg"
                                whileHover={{
                                    scale: 1.1,
                                    rotate: 90,
                                    backgroundColor: "#FDB913"
                                }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <X size={24} className="text-primary" />
                            </motion.button>

                            <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
                                {/* Background Pattern */}
                                <motion.div
                                    className="absolute inset-0 opacity-5"
                                    animate={{
                                        backgroundPosition: ['0% 0%', '100% 100%'],
                                    }}
                                    transition={{
                                        duration: 15,
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                    }}
                                    style={{
                                        backgroundImage: 'radial-gradient(circle, #0F2A4A 2px, transparent 2px)',
                                        backgroundSize: '30px 30px'
                                    }}
                                />

                                {selectedImage.src ? (
                                    <motion.img
                                        src={selectedImage.src}
                                        alt={selectedImage.title}
                                        className="max-h-[70vh] w-full object-contain relative z-10"
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 0.4 }}
                                    />
                                ) : (
                                    <motion.span
                                        className="text-9xl"
                                        animate={{
                                            rotate: [0, 10, -10, 0],
                                            scale: [1, 1.1, 1]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity
                                        }}
                                    >
                                        📸
                                    </motion.span>
                                )}
                            </div>

                            <motion.div
                                className="p-8 bg-white"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex-1">
                                        <motion.h3
                                            className="text-3xl font-bold text-primary mb-2"
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            {selectedImage.title}
                                        </motion.h3>
                                        <motion.p
                                            className="text-lg text-gray-600"
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.4 }}
                                        >
                                            {selectedImage.description}
                                        </motion.p>
                                    </div>
                                    <motion.div
                                        className="ml-4"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.5, type: "spring" }}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                    >
                                        <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold">
                                            {galleryCategories.find(c => c.id === selectedImage.category)?.icon}
                                            {' '}
                                            {galleryCategories.find(c => c.id === selectedImage.category)?.title}
                                        </span>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;