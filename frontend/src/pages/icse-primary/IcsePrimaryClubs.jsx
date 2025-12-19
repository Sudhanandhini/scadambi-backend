import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Heart, Target, Award, Star, Calendar, Tent, BookOpen, Map, Camera, ChevronDown, ChevronUp, Music, TreePine, Globe, PartyPopper, Leaf, School, Eye, Car, Trophy, ClipboardCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import IcsePrimaryHeader from './IcsePrimaryHeader';
import IcsePrimaryFooter from './IcsePrimaryFooter';

import img1 from "../../assets/icse-primary/Picture6.jpg"
import img2 from "../../assets/icse-primary/scout/Picture30.jpg"
import img3 from "../../assets/icse-primary/scout/Picture31.jpg"
import img4 from "../../assets/icse-primary/scout/Picture32.jpg"
import img13 from "../../assets/icse-primary/scout/Picture42.jpg"

import img5 from "../../assets/icse-primary/scout/Picture33.jpg"
import img6 from "../../assets/icse-primary/scout/Picture34.jpg"
import img7 from "../../assets/icse-primary/scout/Picture35.jpg"
import img8 from "../../assets/icse-primary/scout/Picture36.jpg"
import img9 from "../../assets/icse-primary/scout/Picture37.jpg"
import img10 from "../../assets/icse-primary/scout/Picture38.jpg"
import img12 from "../../assets/icse-primary/scout/Picture39.jpg"
import img11 from "../../assets/icse-primary/scout/Picture40.jpg"

import img14 from "../../assets/icse-primary/scout/Picture41.jpg"

import img15 from "../../assets/icse-primary/scout/Picture43.jpg"


import img16 from "../../assets/icse-primary/scout/Picture44.jpg"
import img17 from "../../assets/icse-primary/scout/Picture45.jpg"
import img18 from "../../assets/icse-primary/scout/Picture46.jpg"
import img19 from "../../assets/icse-primary/scout/Picture47.jpg"
import img20 from "../../assets/icse-primary/scout/Picture48.jpg"
import img21 from "../../assets/icse-primary/scout/Picture49.jpg"
import img22 from "../../assets/icse-primary/scout/Picture50.jpg"


import img23 from "../../assets/icse-primary/scout/Picture51.jpg"

import img24 from "../../assets/icse-primary/scout/Picture52.jpg"
import img25 from "../../assets/icse-primary/scout/Picture53.jpg"
import img26 from "../../assets/icse-primary/scout/Picture54.jpg"

import img27 from "../../assets/icse-primary/scout/Picture55.jpg"
import img28 from "../../assets/icse-primary/scout/Picture56.jpg"
import img29 from "../../assets/icse-primary/scout/Picture57.jpg"

import img30 from "../../assets/icse-primary/scout/Picture58.jpg"
import img31 from "../../assets/icse-primary/scout/Picture59.jpg"

import img32 from "../../assets/icse-primary/scout/Picture60.jpg"

import img33 from "../../assets/icse-primary/scout/Picture61.jpg"
import img34 from "../../assets/icse-primary/scout/Picture62.jpg"
import img35 from "../../assets/icse-primary/scout/Picture63.jpg"
import img36 from "../../assets/icse-primary/scout/Picture64.jpg"

import img37 from "../../assets/icse-primary/scout/Picture65.jpg"
import img38 from "../../assets/icse-primary/scout/Picture66.jpg"


import img39 from "../../assets/icse-primary/scout/Picture67.jpg"
import img40 from "../../assets/icse-primary/scout/Picture68.jpg"

import img41 from "../../assets/icse-primary/scout/Picture69.jpg"
import img42 from "../../assets/icse-primary/scout/Picture70.jpg"
import img43 from "../../assets/icse-primary/scout/Picture71.jpg"





const IcsePrimaryClubs = () => {
    const [expandedSection, setExpandedSection] = useState(null);

    const scoutsActivities2025 = {
        cubs: [
            { date: "23/01/2025", activity: "Traffic awareness" },
            { date: "12/02/2025", activity: "Chaturtha Charan/Heerak Pankh testing camp" },
            { date: "22/02/2025", activity: "Baden Powell's birthday (Founder's day)" },
            { date: "17/03/2025", activity: "Rajya Puraskar" },
            { date: "26/06/2025", activity: "Nature Camp at Doddamaranahalli, Kanakapura" },
            { date: "31/08/2025", activity: "Geeta Gayana Competition" },
            { date: "26/10/2025", activity: "Dwitiya Charan / Rajat Pankh testing camp" }
        ],
        scvkshs: [
            { date: "18/05/2025", activity: "Seed ball Preparation" },
            { date: "05/05/2025", activity: "World Environment Day Celebration" },
            { date: "22/02/2025", activity: "Baden Powells birthday (Founder's day)" },
            { date: "30/08/2025", activity: "Senses Test" },
            { date: "05/08/2025", activity: "Nature Lunch Activity" },
            { date: "28/07/2025", activity: "Pratham Sopan Test (old batch)" },
            { date: "29/10/2025", activity: "Pravesh Exam (new batch)" }
        ],
        scvk: [
            { date: "11/01/2025", activity: "Pre Jamboree" },
            { date: "23/01/2025", activity: "Traffic Awareness" },
            { date: "26/01/2025 to 4/01/2025", activity: "Jamboree, Trichy" },
            { date: "3/01/2025", activity: "Visited Srirangam temple" },
            { date: "12/02/2025", activity: "Scout new batch Pravesh Exam" },
            { date: "22/02/2025", activity: "Baben Powell Birthday Celebration" },
            { date: "22/02/2025", activity: "Sense test" },
            { date: "05/04/2025 to 09/04/2025", activity: "Tritiya Sopan Exam Dodaballapur" },
            { date: "17/05/2025", activity: "World Environmental Day Celebration VidhanaSoudha" },
            { date: "21/06/2025", activity: "Yoga Day Celebration" },
            { date: "01/08/2025", activity: "World Scarf Day celebration" },
            { date: "3/08/2025", activity: "Hiking and cooking in Nature, Tumkur (Ramdevara betta)" },
            { date: "15/08/2025", activity: "Independence Day Celebration" },
            { date: "27/08/2025 to 31/08/2025", activity: "District Level Agricultural Camp, Shivamogga" },
            { date: "18/10/2025", activity: "New Batch Pravesh Exam" },
            { date: "07/11/2025", activity: "75 years Foundation Day Celebration Cycle Jatta" },
            { date: "12/11/2025", activity: "Pravesh Investure Ceremony" }
        ]
    };

    const balVikasProgram = {
        title: "Bal Vikas Program",
        description: "A character building and human values program emphasizing principles like truth, righteousness, peace, love, and non-violence.",
        activities: [
            "Storytelling sessions with moral lessons",
            "Daily prayer and meditation practices",
            "Community service and social responsibility",
            "Value-based activities and group discussions"
        ],
        goals: [
            "Foster self-confidence and self-esteem",
            "Develop respect for all living beings",
            "Build strong moral character",
            "Nurture universal human values"
        ]
    };

    // Image Slider Component
    const ImageSlider = ({ images, title, dotColor = "#0F2A4A" }) => {
        const [currentIndex, setCurrentIndex] = useState(0);

        const nextSlide = () => {
            setCurrentIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        };

        const prevSlide = () => {
            setCurrentIndex((prevIndex) => 
                prevIndex === 0 ? images.length - 1 : prevIndex - 1
            );
        };

        const goToSlide = (index) => {
            setCurrentIndex(index);
        };

        return (
            <div className="relative bg-white w-full h-auto rounded-3xl overflow-hidden shadow-xl p-6">
                {/* Main Image Container */}
                <div className="relative h-[400px] overflow-hidden bg-gray-100 rounded-2xl">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentIndex}
                            src={images[currentIndex]}
                            alt={`${title} - ${currentIndex + 1}`}
                            className="w-full h-full object-contain"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
                    >
                        <ChevronLeft className="text-gray-700" size={20} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
                    >
                        <ChevronRight className="text-gray-700" size={20} />
                    </button>

                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 py-1.5 rounded-lg text-sm font-semibold">
                        {currentIndex + 1} / {images.length}
                    </div>
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center gap-2 py-4 bg-white">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-2 rounded-full transition-all ${
                                index === currentIndex 
                                    ? 'w-8' 
                                    : 'w-2 bg-gray-300'
                            }`}
                            style={index === currentIndex ? { backgroundColor: dotColor } : {}}
                        />
                    ))}
                </div>
            </div>
        );
    };

    // Gallery activities data with THREE COLORS: Green, Blue, Yellow
    const galleryActivities = [
        {
            id: 1,
            title: "Geeta Gayana Competition",
            subtitle: "Literary Competition",
            icon: Music,
            iconBg: "bg-green-500",
            iconColor: "text-white",
            pointsBg: "bg-green-50",
            pointsBorder: "border-green-500",
            starColor: "text-green-500",
            dotColor: "#10b981",
            description: "Geeta Gayana activity on account of spiritual and cultural development. Students actively participate in reciting Bhagavad Gita verses, enhancing their Sanskrit knowledge and spiritual awareness simultaneously.",
            points: [
                "Promotes spiritual awareness and moral values",
                "Enhances Sanskrit pronunciation and language skills",
                "Builds confidence in public speaking and presentation"
            ],
            images: [
              img2, img3, img4, img13
            ]
        },
        {
            id: 2,
            title: "Nature Camp at Doddamaranahalli",
            subtitle: "Environmental Experience",
            icon: TreePine,
            iconBg: "bg-blue-500",
            iconColor: "text-white",
            pointsBg: "bg-blue-50",
            pointsBorder: "border-blue-500",
            starColor: "text-blue-500",
            dotColor: "#3b82f6",
            description: "An immersive outdoor experience in the natural surroundings of Doddamaranahalli, Kanakapura. Students engage in nature walks, bird watching, plant identification, and learn about environmental conservation through hands-on activities.",
            points: [
                "Develops environmental awareness and conservation ethics",
                "Practical learning of outdoor survival techniques",
                "Team bonding through shared camping experiences"
            ],
            images: [
              img5, img6, img7, img8, img9, img10, img11, img12
            ]
        },
        {
            id: 3,
            title: "International Jamboree",
            subtitle: "Global Scouting Event",
            icon: Globe,
            iconBg: "bg-[#FDB913]",
            iconColor: "text-white",
            pointsBg: "bg-[#FFF8E1]",
            pointsBorder: "border-[#FDB913]",
            starColor: "text-[#FDB913]",
            dotColor: "#FDB913",
            description: "A prestigious international gathering of Scouts and Guides from different countries held in Trichy. Our students participated in this grand event, experiencing diverse cultures, making international friendships, and learning global scouting practices.",
            points: [
                "Exposure to international scouting community",
                "Cultural exchange and global perspective",
                "Development of cross-cultural communication skills"
            ],
            images: [
               img14, img32
            ]
        },
        {
            id: 4,
            title: "Founder's Day Celebration",
            subtitle: "Baden Powell's Birthday",
            icon: PartyPopper,
            iconBg: "bg-green-500",
            iconColor: "text-white",
            pointsBg: "bg-green-50",
            pointsBorder: "border-green-500",
            starColor: "text-green-500",
            dotColor: "#10b981",
            description: "Celebrating the birthday of Lord Baden Powell, the founder of the Scouting movement on February 22nd. Students participate in special ceremonies, learn about Baden Powell's life and principles, and renew their commitment to the Scout Promise and Law.",
            points: [
                "Honors the founder of worldwide Scouting movement",
                "Reinforces understanding of Scout values and principles",
                "Celebrates the rich heritage of Scouting"
            ],
            images: [
               img15,img28, img30, img31
            ]
        },
        {
            id: 5,
            title: "Nature Camp at Shimoga",
            subtitle: "Agricultural Camp",
            icon: Tent,
            iconBg: "bg-blue-500",
            iconColor: "text-white",
            pointsBg: "bg-blue-50",
            pointsBorder: "border-blue-500",
            starColor: "text-blue-500",
            dotColor: "#3b82f6",
            description: "An adventurous agricultural and nature camp in the scenic region of Shimoga. Students experience rural life, learn sustainable farming practices, and understand the importance of agriculture in our society through hands-on activities.",
            points: [
                "Hands-on agricultural and farming experience",
                "Understanding sustainable and organic farming",
                "Appreciation of rural life and farming community"
            ],
            images: [
              img16, img17, img18, img19, img20, img21, img22
            ]
        },
        {
            id: 6,
            title: "Environment Day at Vidhana Soudha",
            subtitle: "State-Level Event",
            icon: Leaf,
            iconBg: "bg-[#FDB913]",
            iconColor: "text-white",
            pointsBg: "bg-[#FFF8E1]",
            pointsBorder: "border-[#FDB913]",
            starColor: "text-[#FDB913]",
            dotColor: "#FDB913",
            description: "A significant state-level World Environment Day celebration at Vidhana Soudha. Students participate in environmental pledges, tree plantation drives, awareness campaigns, and interact with government officials about environmental policies.",
            points: [
                "Participation in state-level environmental initiatives",
                "Interaction with government and environmental leaders",
                "Contributing to large-scale conservation efforts"
            ],
            images: [
              img23
            ]
        },
        {
            id: 7,
            title: "Tritiya Sopan Examination",
            subtitle: "Advanced Proficiency Test",
            icon: Award,
            iconBg: "bg-green-500",
            iconColor: "text-white",
            pointsBg: "bg-green-50",
            pointsBorder: "border-green-500",
            starColor: "text-green-500",
            dotColor: "#10b981",
            description: "The Tritiya Sopan (Third Step) is an advanced proficiency test in the Scouts progression ladder. This rigorous examination assesses students on advanced camping skills, navigation, first aid, leadership qualities, and outdoor survival techniques.",
            points: [
                "Advanced level scouting skills assessment",
                "Demonstrates mastery of camping techniques",
                "Tests leadership and decision-making abilities"
            ],
            images: [
               img24, img25, img26
            ]
        },
        {
            id: 8,
            title: "Senses Testing",
            subtitle: "Awareness Development",
            icon: Eye,
            iconBg: "bg-blue-500",
            iconColor: "text-white",
            pointsBg: "bg-blue-50",
            pointsBorder: "border-blue-500",
            starColor: "text-blue-500",
            dotColor: "#3b82f6",
            description: "A unique component of Scout training that develops and tests the five senses. Through carefully designed activities, students learn to sharpen their observation skills, enhance awareness, and develop sensory perception crucial for outdoor activities.",
            points: [
                "Sharpens all five senses through targeted exercises",
                "Improves observation and awareness skills",
                "Builds mindfulness and present-moment awareness"
            ],
            images: [
              img27,img29
            ]
        },
        {
            id: 9,
            title: "Traffic Awareness Program",
            subtitle: "Road Safety Initiative",
            icon: Car,
            iconBg: "bg-[#FDB913]",
            iconColor: "text-white",
            pointsBg: "bg-[#FFF8E1]",
            pointsBorder: "border-[#FDB913]",
            starColor: "text-[#FDB913]",
            dotColor: "#FDB913",
            description: "A comprehensive road safety and traffic awareness initiative where scouts learn and teach others about traffic rules. Students conduct awareness campaigns, help manage traffic, and understand responsible citizenship.",
            points: [
                "Understanding traffic rules and road safety",
                "Developing responsible citizenship and civic sense",
                "Community service through awareness campaigns"
            ],
            images: [
                img38, img37
            ]
        },
        {
            id: 10,
            title: "Diamond Jubilee Jamboree",
            subtitle: "75 Years Celebration",
            icon: Trophy,
            iconBg: "bg-green-500",
            iconColor: "text-white",
            pointsBg: "bg-green-50",
            pointsBorder: "border-green-500",
            starColor: "text-green-500",
            dotColor: "#10b981",
            description: "A historic celebration marking 75 years of scouting excellence. This grand jamboree featured cultural programs, skill competitions, adventure activities, and a memorable cycle rally promoting fitness and unity.",
            points: [
                "Celebrating 75 years of scouting heritage",
                "Large-scale gathering promoting unity",
                "Showcase of scouting skills and achievements"
            ],
            images: [
               img33, img34, img35, img36
            ]
        },
        {
            id: 11,
            title: "Rajat Pankh & Dwitiya Pankh",
            subtitle: "Cubs Proficiency Badges",
            icon: Star,
            iconBg: "bg-blue-500",
            iconColor: "text-white",
            pointsBg: "bg-blue-50",
            pointsBorder: "border-blue-500",
            starColor: "text-blue-500",
            dotColor: "#3b82f6",
            description: "Progressive proficiency badges in the Cubs and Bulbuls program. These examinations test fundamental scouting skills, knowledge of scout law, basic first aid, knot tying, and understanding of nature and community service.",
            points: [
                "Important progression milestones for young scouts",
                "Testing of fundamental scouting knowledge",
                "Building confidence and sense of achievement"
            ],
            images: [
              img39, img40
            ]
        },
        {
            id: 12,
            title: "Testing Camp BSG",
            subtitle: "Comprehensive Evaluation",
            icon: ClipboardCheck,
            iconBg: "bg-[#FDB913]",
            iconColor: "text-white",
            pointsBg: "bg-[#FFF8E1]",
            pointsBorder: "border-[#FDB913]",
            starColor: "text-[#FDB913]",
            dotColor: "#FDB913",
            description: "A comprehensive evaluation camp for Bharat Scouts and Guides where students undergo rigorous testing of their scouting abilities including camping skills, first aid, cooking, tent pitching, and leadership exercises.",
            points: [
                "Comprehensive evaluation of scouting competencies",
                "Practical demonstrations in real scenarios",
                "Tests teamwork and problem-solving skills"
            ],
            images: [
               img41, img42, img43
            ]
        }
    ];

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
                            <Users className="w-20 h-20 text-white/90" />
                        </motion.div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">Clubs & Societies</h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            Building character, values, and leadership through engaging activities and programs
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Bharat Scouts and Guides Main Section */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                            Since 2009
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                            Bharat Scouts and Guides
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            @ S CADAMBI GROUP OF INSTITUTIONS
                        </p>
                    </motion.div>

                    {/* About Section with Image */}
                    <div className="grid lg:grid-cols-2 gap-12 mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl h-full border-2 border-gray-100">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="bg-gradient-to-br from-secondary to-secondary/80 w-16 h-16 rounded-xl flex items-center justify-center">
                                        <Users className="text-primary" size={32} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-primary">About the Program</h3>
                                </div>
                                
                                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                    The Bharat Scouts and Guides is an educational movement for young people in schools that develops 
                                    their physical, intellectual, social, and spiritual potential through activities like camps, community 
                                    service, and skill-building.
                                </p>

                                <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-6 border-l-4 border-secondary mb-6">
                                    <p className="text-primary font-bold text-2xl mb-2">Motto: "Be Prepared"</p>
                                    <p className="text-gray-600 text-lg">Active since 2009</p>
                                </div>

                                <p className="text-gray-700 leading-relaxed mb-6">
                                    Students participate in age-specific sections like Cubs and Bulbuls, Scouts and Guides, or Rangers and 
                                    Rovers, learning valuable life skills under the motto "Be Prepared". These programs help students build 
                                    discipline, teamwork, and a sense of responsibility while contributing to society through various school 
                                    and community activities.
                                </p>

                                <div className="space-y-3">
                                    {[
                                        "Physical, intellectual, emotional, social and spiritual development",
                                        "Life-saving skills and 'Learning by Doing' approach",
                                        "Character development, competence, and self-reliance",
                                        "Leadership skills and capacity to co-operate and lead"
                                    ].map((point, idx) => (
                                        <div key={idx} className="flex items-start bg-gray-50 rounded-xl p-4">
                                            <Award className="text-secondary mr-3 mt-1 shrink-0" size={20} />
                                            <p className="text-gray-700 font-medium">{point}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            {/* Image */}
                            <div className="bg-white rounded-3xl p-6 shadow-2xl border-2 border-gray-100">
                                <img 
                                    src={img1}
                                    alt="Bharat Scouts and Guides Activities"
                                    className="w-full h-auto rounded-2xl"
                                />
                            </div>

                            {/* Key Benefits */}
                            <div className="bg-gradient-to-br from-primary to-blue-900 text-white rounded-3xl p-8 shadow-2xl">
                                <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
                                <p className="text-white/90 leading-relaxed mb-6">
                                    Our school is actively collaborated with Bharat Scouts and Guides since 2009, contributing to the 
                                    development of young citizens in achieving their full physical, intellectual, emotional, social and 
                                    spiritual potentials as individuals, as responsible members of the community.
                                </p>
                                <div className="space-y-3">
                                    {[
                                        "Self-governance directed towards development of character",
                                        "Acquisition of competence, self-reliance, and dependability",
                                        "Progressive and stimulating programs in outdoor settings",
                                        "Games, useful skills and services to the community"
                                    ].map((benefit, idx) => (
                                        <div key={idx} className="flex items-start">
                                            <Target className="text-secondary mr-3 mt-1 shrink-0" size={20} />
                                            <p className="text-white/90">{benefit}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Age Sections */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-gray-100 mb-16"
                    >
                        <h3 className="text-3xl font-bold text-primary mb-8 text-center">Age-Specific Sections</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { emoji: "🦁", title: "Cubs & Bulbuls", desc: "Primary School Students", color: "blue" },
                                { emoji: "⚜️", title: "Scouts & Guides", desc: "Middle School Students", color: "green" },
                                { emoji: "🎖️", title: "Rangers & Rovers", desc: "Senior Students", color: "purple" }
                            ].map((section, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 text-center border-2 border-gray-100 hover:border-secondary/30 transition-all"
                                >
                                    <div className="text-6xl mb-4">{section.emoji}</div>
                                    <h4 className="text-xl font-bold text-primary mb-2">{section.title}</h4>
                                    <p className="text-gray-600">{section.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Recent Activities Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                            2025 Activities
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                            Recent Activities at School
                        </h2>
                        <p className="text-xl text-gray-600">
                            Under Bharat Scouts and Guides
                        </p>
                    </motion.div>

                    <div className="space-y-8">
                        {/* Camps attended (cubs and bulbuls) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <button
                                onClick={() => setExpandedSection(expandedSection === 'cubs' ? null : 'cubs')}
                                className="w-full bg-gradient-to-r from-blue-900 to-blue-950 text-white rounded-2xl p-6 flex items-center justify-between hover:from-blue-600 hover:to-blue-800 transition-all"
                            >
                                <div className="flex items-center gap-4">
                                    <Tent size={32} />
                                    <div className="text-left">
                                        <h3 className="text-2xl font-bold">Camps Attended (Cubs and Bulbuls)</h3>
                                        <p className="text-blue-100">{scoutsActivities2025.cubs.length} activities in 2025</p>
                                    </div>
                                </div>
                                {expandedSection === 'cubs' ? <ChevronUp size={28} /> : <ChevronDown size={28} />}
                            </button>
                            
                            {expandedSection === 'cubs' && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="bg-white rounded-2xl p-6 mt-4 shadow-xl border-2 border-blue-100"
                                >
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {scoutsActivities2025.cubs.map((item, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.05 }}
                                                className="flex items-start bg-blue-50 rounded-xl p-4 hover:bg-blue-100 transition-colors"
                                            >
                                                <Calendar className="text-blue-600 mr-3 mt-1 shrink-0" size={20} />
                                                <div>
                                                    <p className="font-bold text-blue-900">{item.date}</p>
                                                    <p className="text-gray-700">{item.activity}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>

                        {/* Activities (SCVKSHS Scouts and Guides) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <button
                                onClick={() => setExpandedSection(expandedSection === 'scvkshs' ? null : 'scvkshs')}
                                className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white rounded-2xl p-6 flex items-center justify-between hover:from-green-600 hover:to-green-800 transition-all"
                            >
                                <div className="flex items-center gap-4">
                                    <Target size={32} />
                                    <div className="text-left">
                                        <h3 className="text-2xl font-bold">Activities (SCVKSHS Scouts and Guides)</h3>
                                        <p className="text-green-100">{scoutsActivities2025.scvkshs.length} activities in 2025</p>
                                    </div>
                                </div>
                                {expandedSection === 'scvkshs' ? <ChevronUp size={28} /> : <ChevronDown size={28} />}
                            </button>
                            
                            {expandedSection === 'scvkshs' && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="bg-white rounded-2xl p-6 mt-4 shadow-xl border-2 border-green-100"
                                >
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {scoutsActivities2025.scvkshs.map((item, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.05 }}
                                                className="flex items-start bg-green-50 rounded-xl p-4 hover:bg-green-100 transition-colors"
                                            >
                                                <Calendar className="text-green-600 mr-3 mt-1 shrink-0" size={20} />
                                                <div>
                                                    <p className="font-bold text-green-900">{item.date}</p>
                                                    <p className="text-gray-700">{item.activity}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>

                        {/* Activities (SCVK Scouts and Guides) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <button
                                onClick={() => setExpandedSection(expandedSection === 'scvk' ? null : 'scvk')}
                                className="w-full bg-[#FDB913] text-white rounded-2xl p-6 flex items-center justify-between hover:from-purple-600 hover:to-purple-800 transition-all"
                            >
                                <div className="flex items-center gap-4">
                                    <Award size={32} />
                                    <div className="text-left">
                                        <h3 className="text-2xl font-bold">Activities (SCVK Scouts and Guides)</h3>
                                        <p className="text-[#FDB913]">{scoutsActivities2025.scvk.length} activities in 2025</p>
                                    </div>
                                </div>
                                {expandedSection === 'scvk' ? <ChevronUp size={28} /> : <ChevronDown size={28} />}
                            </button>
                            
                            {expandedSection === 'scvk' && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="bg-white rounded-2xl p-6 mt-4 shadow-xl border-2 border-[#FDB913]"
                                >
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {scoutsActivities2025.scvk.map((item, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.05 }}
                                                className="flex items-start bg-[#FFEEDC] rounded-xl p-4 hover:bg-[#FFEEDC] transition-colors"
                                            >
                                                <Calendar className="text-[#ff8505] mr-3 mt-1 shrink-0" size={20} />
                                                <div>
                                                    <p className="font-bold text-[#FDB913]">{item.date}</p>
                                                    <p className="text-gray-700">{item.activity}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>


             {/* Activities Gallery Section with Image Sliders - ALL 12 ACTIVITIES */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A4A] mb-4">
                            Scouts & Guides Activities Gallery
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Capturing memorable moments from our various camps, tests, and celebrations
                        </p>
                    </motion.div>

                    <div className="space-y-16">
                        {galleryActivities.map((activity, index) => {
                            const IconComponent = activity.icon;
                            const isOddRow = index % 2 === 0; // Row 1, 3, 5, 7, 9, 11 (index 0, 2, 4...)

                            return (
                                <motion.div
                                    key={activity.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="grid lg:grid-cols-2 gap-8 items-center"
                                >
                                    {/* Content Section - LEFT for odd rows, RIGHT for even rows */}
                                    <div className={`${isOddRow ? '' : 'lg:order-2'}`}>
                                        <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg">
                                            {/* Title with Icon */}
                                            <div className="flex items-start gap-4 mb-6">
                                                <div className={`${activity.iconBg} w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${activity.iconColor}`}>
                                                    <IconComponent size={28} />
                                                </div>
                                                <div>
                                                    <h3 className="text-3xl font-bold text-[#0F2A4A] mb-1">
                                                        {activity.title}
                                                    </h3>
                                                    <p className={`font-semibold text-lg ${activity.starColor}`}>
                                                        {activity.subtitle}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                                {activity.description}
                                            </p>

                                            {/* Points Box */}
                                            <div className={`${activity.pointsBg} rounded-2xl p-6 border-l-4 ${activity.pointsBorder}`}>
                                                <div className="space-y-3">
                                                    {activity.points.map((point, idx) => (
                                                        <div key={idx} className="flex items-start">
                                                            <Star className={`${activity.starColor} mr-3 mt-0.5 shrink-0`} size={20} fill="currentColor" />
                                                            <p className="text-gray-800 font-medium">{point}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Image Slider Section - RIGHT for odd rows, LEFT for even rows */}
                                    <div className={`${isOddRow ? '' : 'lg:order-1'}`}>
                                        <ImageSlider images={activity.images} title={activity.title} dotColor={activity.dotColor} />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>


            {/* Bal Vikas Program */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="bg-[#0F2A4A]/10 text-[#0F2A4A] px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                            Character Building
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                            Bal Vikas Program
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Character building through universal human values and spiritual development
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 mb-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-gradient-to-br from-blue-50 to-blue-50 rounded-3xl p-8 md:p-10 h-full border-2 border-blue-100 shadow-xl">
                                <div className="flex items-center gap-4 mb-6">
                                    <Heart className="text-blue-600" size={48} />
                                    <h3 className="text-3xl font-bold text-primary">{balVikasProgram.title}</h3>
                                </div>
                                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                    {balVikasProgram.description}
                                </p>
                                
                                <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
                                    <h4 className="font-bold text-primary mb-4 text-xl">Core Values:</h4>
                                    <div className="space-y-3">
                                        {['Truth', 'Righteousness', 'Peace', 'Love', 'Non-violence'].map((value, idx) => (
                                            <div key={idx} className="flex items-center bg-blue-50 rounded-xl p-3">
                                                <Star className="text-[#0F2A4A] mr-3 shrink-0" size={20} fill="currentColor" />
                                                <span className="text-gray-700 font-semibold">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-gray-100">
                                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                                    <BookOpen className="text-secondary" size={28} />
                                    Program Activities
                                </h3>
                                <div className="space-y-4">
                                    {balVikasProgram.activities.map((activity, idx) => (
                                        <div key={idx} className="flex items-start bg-gradient-to-r from-gray-50 to-white rounded-xl p-4 border-l-4 border-secondary">
                                            <div className="bg-secondary/20 w-10 h-10 rounded-lg flex items-center justify-center mr-4 shrink-0">
                                                <span className="font-bold text-primary">{idx + 1}</span>
                                            </div>
                                            <p className="text-gray-700 text-lg pt-2">{activity}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-primary to-blue-900 text-white rounded-3xl p-8 shadow-2xl">
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <Target className="text-secondary" size={28} />
                                    Program Goals
                                </h3>
                                <div className="space-y-4">
                                    {balVikasProgram.goals.map((goal, idx) => (
                                        <div key={idx} className="flex items-start bg-white/10 backdrop-blur rounded-xl p-4">
                                            <Target className="text-secondary mr-3 mt-1 shrink-0" size={20} />
                                            <p className="text-white/90">{goal}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Bhagavat Gita Section */}
            {/* <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="bg-gradient-to-br from-blue-50 via-blue-50 to-blue-50 rounded-3xl p-8 md:p-12 shadow-2xl text-center border-2 border-blue-200">
                            <div className="text-7xl mb-6">📖</div>
                            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                                Daily Practice
                            </span>
                            <h2 className="text-4xl font-bold text-primary mb-6">Bhagavat Gita Recitation</h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Every day in the school assembly, students are taught the Bhagavat Gita. The goal is to provide 
                                moral and spiritual guidance. We strongly believe the Bhagavat Gita can help students develop 
                                better decision-making skills by learning about life lessons and universal wisdom.
                            </p>
                            <div className="bg-[#0F2A4A] text-white rounded-2xl p-6 shadow-lg">
                                <p className="font-semibold text-xl">
                                    Daily assembly program focused on character development and life values
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section> */}

           
            
        </div>
    );
};

export default IcsePrimaryClubs;