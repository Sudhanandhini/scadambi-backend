import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Brain, Palette, Flag, Leaf, Activity, Heart, Gift, Calendar, ChevronLeft, ChevronRight, Sparkles, Sun, Apple, Camera } from 'lucide-react';


import img16 from "../../assets/play-school/Picture16.jpg"
import img17 from "../../assets/play-school/Picture17.jpg"
import img18 from "../../assets/play-school/Picture18.jpg"
import img19 from "../../assets/play-school/Picture19.jpg"
import img20 from "../../assets/play-school/Picture20.jpg"
import img21 from "../../assets/play-school/Picture21.jpg"
import img22 from "../../assets/play-school/Picture22.jpg"
import img23 from "../../assets/play-school/Picture23.jpg"
import img24 from "../../assets/play-school/Picture24.jpg"
import img25 from "../../assets/play-school/Picture25.jpg"
import img26 from "../../assets/play-school/Picture26.jpg"
import img27 from "../../assets/play-school/Picture27.png"


import img28 from "../../assets/play-school/Picture28.jpg"
import img29 from "../../assets/play-school/Picture29.jpg"
import img30 from "../../assets/play-school/Picture30.jpg"
import img31 from "../../assets/play-school/Picture31.jpg"
import img32 from "../../assets/play-school/Picture32.jpg"
import img33 from "../../assets/play-school/Picture33.jpg"
import img34 from "../../assets/play-school/Picture34.jpg"
import img35 from "../../assets/play-school/Picture35.jpg"
import img36 from "../../assets/play-school/Picture36.jpg"
import img37 from "../../assets/play-school/Picture37.jpg"
import img38 from "../../assets/play-school/Picture38.jpg"



import img39 from "../../assets/play-school/Picture39.jpg"
import img40 from "../../assets/play-school/Picture40.jpg"
import img41 from "../../assets/play-school/Picture41.jpg"
import img42 from "../../assets/play-school/Picture42.jpg"
import img43 from "../../assets/play-school/Picture43.jpg"
import img44 from "../../assets/play-school/Picture44.jpg"
import img45 from "../../assets/play-school/Picture45.jpg"
import img46 from "../../assets/play-school/Picture46.jpg"
import img47 from "../../assets/play-school/Picture47.jpg"
import img48 from "../../assets/play-school/Picture48.jpg"

import img52 from "../../assets/play-school/Picture52.png"
import img51 from "../../assets/play-school/Picture51.jpg"
import img50 from "../../assets/play-school/Picture50.jpg"
import img49 from "../../assets/play-school/Picture49.jpg"






const PlaySchoolActivities = () => {
    const [activeImages, setActiveImages] = useState({});

    const ImageSlider = ({ images, sectionId }) => {
        const currentIndex = activeImages[sectionId] || 0;

        const nextImage = () => {
            setActiveImages(prev => ({
                ...prev,
                [sectionId]: (currentIndex + 1) % images.length
            }));
        };

        const prevImage = () => {
            setActiveImages(prev => ({
                ...prev,
                [sectionId]: currentIndex === 0 ? images.length - 1 : currentIndex - 1
            }));
        };

        return (
            <div className="relative group">
                <div className="relative h-80 bg-gray-200 rounded-3xl overflow-hidden shadow-xl">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentIndex}
                            src={images[currentIndex].url}
                            alt={images[currentIndex].caption}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5 }}
                            className="w-full h-full object-contain"
                        />
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#0F2A4A] p-3 rounded-full shadow-lg transition-all hover:scale-110"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#0F2A4A] p-3 rounded-full shadow-lg transition-all hover:scale-110"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </>
                    )}

                    {/* Image Counter */}
                    {images.length > 1 && (
                        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-semibold">
                            {currentIndex + 1} / {images.length}
                        </div>
                    )}
                </div>
            </div>
        );
    };

    const activities = [
      
        {
            id: 'national-festivals',
            icon: <Flag className="w-12 h-12" />,
            iconBg: 'bg-orange-500',
            title: 'National Festivals',
            description: 'We celebrate all major national festivals including Independence Day, Republic Day, and Gandhi Jayanti with great enthusiasm. These celebrations instill patriotic values, teach children about our national heroes, and help them understand the significance of our freedom struggle. Children participate in flag hoisting, cultural programs, and patriotic activities.',
            images: [
                { url: img17, caption: 'Independence Day Celebration' },
                { url: img16, caption: 'Republic Day Program' }
            ]
        },
        {
            id: 'festivals',
            icon: <Sparkles className="w-12 h-12" />,
            iconBg: 'bg-purple-500',
            title: 'Festivals',
            description: 'Children experience the joy of various cultural and religious festivals throughout the year. From Diwali to Christmas, Ganesh Chaturthi to Eid, we celebrate the diversity of our nation. These celebrations teach children about different cultures, traditions, and values while promoting harmony and respect for all religions.',
            images: [
                { url: img20, caption: 'Diwali Celebration' },
                { url: img21, caption: 'Festival Activities' },
                 { url: img19, caption: 'Diwali Celebration' },
                { url: img18, caption: 'Festival Activities' },
            ]
        },
        {
            id: 'fruit-salad-day',
            icon: <Apple className="w-12 h-12" />,
            iconBg: 'bg-red-500',
            title: 'Fruit Salad Day',
            description: 'A fun and educational activity where children learn about different fruits, their colors, textures, and nutritional benefits. Children actively participate in washing, cutting (with supervision), and mixing fruits to prepare delicious fruit salads. This hands-on activity promotes healthy eating habits, fine motor skills, and understanding of nutrition.',
            images: [
                { url: img22, caption: 'Fruit Salad Activity' },
                { url: img21, caption: 'Learning About Fruits' }
            ]
        },
        {
            id: 'environment-day',
            icon: <Leaf className="w-12 h-12" />,
            iconBg: 'bg-green-600',
            title: 'Environment Day',
            description: 'World Environment Day is celebrated with various eco-friendly activities. Children learn about the importance of protecting our planet through tree planting, recycling activities, and creating artwork from waste materials. We teach children about conservation, reduce-reuse-recycle concepts, and how small actions can make a big difference in protecting our environment.',
            images: [
                { url: img23, caption: 'Environment Day Celebration' },
               
            ]
        },
        {
            id: 'yoga-day',
            icon: <Activity className="w-12 h-12" />,
            iconBg: 'bg-indigo-500',
            title: 'Yoga Day',
            description: 'International Yoga Day is celebrated with age-appropriate yoga poses and breathing exercises. Children learn simple asanas that improve flexibility, concentration, and overall well-being. Yoga sessions include storytelling, animal poses, and fun breathing techniques that make yoga enjoyable and accessible for young children. Regular yoga practice enhances physical development and mental calmness.',
            images: [
                { url: img24, caption: 'Yoga Session' },
                { url: img25, caption: 'Yoga Poses' }
            ]
        },
        {
            id: 'friendship-day',
            icon: <Heart className="w-12 h-12" />,
            iconBg: 'bg-pink-500',
            title: 'Friendship Day',
            description: 'Friendship Day is a special celebration where children learn about the value of friendship, kindness, and sharing. Children make friendship bands, exchange cards, and participate in group activities that strengthen bonds. This celebration teaches important social skills like empathy, cooperation, and the joy of having friends.',
            images: [
                { url: img27, caption: 'Friendship Day Celebration' },
                { url: img26, caption: 'Making Friends' }
            ]
        },
        {
            id: 'inaugural-day',
            icon: <Gift className="w-12 h-12" />,
            iconBg: 'bg-yellow-500',
            title: 'Inaugural & Parent Orientation Day',
            description: 'The academic year begins with a grand inaugural ceremony and comprehensive parent orientation program. Parents are introduced to our teaching methodology, curriculum, and school policies. This day establishes a strong partnership between parents and teachers, ensuring everyone is aligned on the child\'s educational journey. Special programs and interactive sessions help parents understand our holistic approach.',
            images: [
                { url: img29, caption: 'Inaugural Ceremony' },
                { url: img28, caption: 'Parent Orientation' }
            ]
        },
        {
            id: 'primary-colours',
            icon: <Palette className="w-12 h-12" />,
            iconBg: 'bg-red-400',
            title: 'Primary Colours',
            description: 'Children explore the fascinating world of primary colors - Red, Blue, and Yellow. Through various activities, art, and craft sessions, children learn to identify these fundamental colors. Activities include color sorting, painting, and creating art with primary colors. Red Day, Blue Day, and Yellow Day are celebrated with children and teachers dressed in respective colors, making learning fun and memorable.',
            images: [
                { url: img30, caption: 'Red Colour Day' },
                { url: img31, caption: 'Blue Colour Day' },
                { url: img32, caption: 'Yellow Colour Day' }
            ]
        },
        {
            id: 'secondary-colours',
            icon: <Palette className="w-12 h-12" />,
            iconBg: 'bg-purple-400',
            title: 'Secondary Colours',
            description: 'Building on their knowledge of primary colors, children discover how secondary colors are created. They learn that mixing Red and Yellow makes Orange, Blue and Yellow makes Green, and Red and Blue makes Purple. Hands-on mixing activities, art projects, and color-themed days (Green Day, Orange Day, Pink Day) make this learning experiential and enjoyable.',
            images: [
                { url: img33, caption: 'Green Colour Day' },
                { url: img34, caption: 'Pink Colour Day' },
                { url: img35 , caption: 'Orange Colour Day' }
            ]
        },
        {
            id: 'fathers-day',
            icon: <Heart className="w-12 h-12" />,
            iconBg: 'bg-blue-600',
            title: "Father's Day",
            description: "Father's Day is celebrated with great enthusiasm to honor the important role fathers play in children's lives. Children prepare handmade cards, gifts, and special performances for their fathers. Fathers are invited to school for special events, games, and activities with their children. This celebration strengthens the father-child bond and teaches children about gratitude and love.",
            images: [
                { url: img36, caption: "Father's Day Celebration" },
                { url: img37, caption: 'Dad and Child Activities' },
                { url: img38, caption: 'Special Performances' }
            ]
        },
        {
            id: 'montessori-activities',
            icon: <Sparkles className="w-12 h-12" />,
            iconBg: 'bg-teal-500',
            title: 'Montessori Activities',
            description: 'Our Montessori program includes scientifically designed activities that promote self-directed learning. Rolling & Unrolling the Mat teaches order and concentration. Cylinder Blocks develop visual discrimination and fine motor skills. Pink Tower enhances size gradation understanding and spatial awareness. Folding & Unfolding Napkin builds practical life skills and hand-eye coordination. These activities foster independence, confidence, and a love for learning.',
            images: [
                { url: img39, caption: 'Rolling & Unrolling Mat' },
                { url: img40, caption: 'Cylinder Blocks' },
                { url: img41, caption: 'Pink Tower' },
                { url: img42, caption: 'Folding Napkin' }
            ]
        },
        {
            id: 'art-and-craft',
            icon: <Camera className="w-12 h-12" />,
            iconBg: 'bg-pink-400',
            title: 'Art and Craft',
            description: 'Art and craft activities are integral to our curriculum, encouraging creativity, imagination, and fine motor development. Children work with various materials including paper, colors, clay, fabric, and natural materials. Activities include drawing, painting, cutting, pasting, collage making, and 3D craft work. These activities enhance hand-eye coordination, color recognition, pattern understanding, and artistic expression while boosting confidence and self-esteem.',
            images: [
                { url: img48, caption: 'Creative Art' },
                { url: img47, caption: 'Craft Activities' },
                { url: img46, caption: 'Art Projects' },
                 { url: img45, caption: 'Creative Art' },
                { url: img44, caption: 'Craft Activities' },
                { url: img43, caption: 'Art Projects' }
            ]
        },
         {
            id: 'montessori-activities',
            icon: <Sparkles className="w-12 h-12" />,
            iconBg: 'bg-teal-500',
            title: 'Creative Art',
            description: 'Creativity is a cornerstone of our curriculum. Children participate in art, music, and drama activities that allow them to express themselves and develop fine motor skills. These activities also enhance their imagination and self-confidence.',
            images: [
                { url: img49, caption: 'Rolling & Unrolling Mat' },
                { url: img50, caption: 'Cylinder Blocks' },
                { url: img51, caption: 'Pink Tower' },
                { url: img52, caption: 'Folding Napkin' }
            ]
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
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
                                <Calendar className="w-16 h-16 text-[#0F2A4A]" />
                            </div>
                        </motion.div>
                        
                        <h1 className="text-6xl font-bold mb-6">Activities and Events</h1>
                        
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "200px" }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="h-1 bg-[#FDB913] mx-auto mb-8"
                        ></motion.div>
                        
                        <p className="text-2xl text-[#FDB913] font-semibold mb-4">Engaging Learning Experiences</p>
                        <p className="text-xl max-w-4xl mx-auto text-white/90 leading-relaxed">
                            A vibrant calendar of events, festivals, and activities that make learning fun and memorable
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Activities Sections */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-24"
                    >
                        {activities.map((activity, idx) => (
                            <motion.div
                                key={activity.id}
                                variants={itemVariants}
                                className="relative"
                            >
                                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                                    idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                }`}>
                                    {/* Content Side */}
                                    <div className={`${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                                            className={`inline-flex items-center justify-center ${activity.iconBg} rounded-3xl p-4 mb-6 shadow-lg`}
                                        >
                                            <div className="text-white">
                                                {activity.icon}
                                            </div>
                                        </motion.div>

                                        <h2 className="text-4xl font-bold text-[#0F2A4A] mb-6">
                                            {activity.title}
                                        </h2>

                                        <div className="prose prose-lg max-w-none">
                                            <p className="text-gray-700 leading-relaxed text-lg">
                                                {activity.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Image Slider Side */}
                                    <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                                        <motion.div
                                            initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8 }}
                                        >
                                            <ImageSlider 
                                                images={activity.images} 
                                                sectionId={activity.id}
                                            />
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Divider */}
                                {idx < activities.length - 1 && (
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.3 }}
                                        className="mt-24 h-px bg-gradient-to-r from-transparent via-[#FDB913] to-transparent"
                                    ></motion.div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
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
                            <Sparkles className="w-20 h-20 mx-auto mb-8 text-[#FDB913]" />
                        </motion.div>
                        
                        <h2 className="text-5xl font-bold mb-6 text-white">Join Our Vibrant Community</h2>
                        <div className="w-32 h-1 bg-[#FDB913] mx-auto mb-8"></div>
                        <p className="text-2xl mb-12 text-white/90 leading-relaxed max-w-3xl mx-auto">
                            Enroll your child in a learning environment filled with joy, creativity, and endless opportunities
                        </p>
                        
                        <motion.a
                            href="/play-school/admissions"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center bg-[#FDB913] hover:bg-yellow-500 text-[#0F2A4A] font-bold px-10 py-5 rounded-2xl transition-all shadow-2xl text-xl"
                        >
                            Enroll Now
                            <ChevronRight className="ml-2 w-6 h-6" />
                        </motion.a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default PlaySchoolActivities;