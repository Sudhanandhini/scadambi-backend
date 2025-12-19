import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Music, Palette, Users, Heart, Lightbulb, Sparkles, ArrowRight, Globe, Brain, Star, Calendar, Clock } from 'lucide-react';

const PlaySchoolAcademic = () => {
    const subjects = [
        {
            icon: <BookOpen className="w-8 h-8" />,
            title: "Language and Literacy",
            description: "Our program emphasizes early literacy skills through storytelling, reading activities, and interactive language games. We introduce children to letters, sounds, and simple words in a fun and engaging manner, laying the groundwork for reading and writing readiness."
        },
        {
            icon: <Brain className="w-8 h-8" />,
            title: "Numeracy",
            description: "Children explore basic mathematical concepts such as counting, shapes, and patterns through hands-on activities and games. Our approach encourages problem-solving and critical thinking in an environment where numbers and shapes become part of their everyday play."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Social and Emotional Development",
            description: "We focus on helping children build strong social skills, such as sharing, cooperation, and empathy. Our activities and guided interactions support emotional growth and help children learn to express themselves and relate to others in a positive way."
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Moral Values",
            description: "Teachers chant shlokas and sing Bhajans which the children enjoy and learn. Religious and spiritual values are imbibed among the little children."
        },
        {
            icon: <Palette className="w-8 h-8" />,
            title: "Creative Arts",
            description: "Creativity is a cornerstone of our curriculum. Children participate in art, music, and drama activities that allow them to express themselves and develop fine motor skills. These activities also enhance their imagination and self-confidence."
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Technology Integration",
            description: "While we believe in the importance of hands-on play, we also incorporate age-appropriate technology to enhance learning. Interactive tools and educational software are used to support and enrich the learning experience."
        }
    ];

    const teachingMethods = [
        { number: "01", title: "Play Based Learning", icon: "🎮" },
        { number: "02", title: "Music and Movement", icon: "🎵" },
        { number: "03", title: "Activities Based Learning", icon: "🎯" },
        { number: "04", title: "Circle Time", icon: "⭕" },
        { number: "05", title: "Theme Based Curriculum", icon: "📚" },
        { number: "06", title: "Positive Reinforcement", icon: "⭐" },
        { number: "07", title: "Inquiry Based Learning", icon: "🔍" },
        { number: "08", title: "Interactive Story Telling", icon: "📖" }
    ];

    const classDivisions = [
        { age: "2.5 years to 3 years", class: "Play Home", color: "from-pink-500 to-rose-500" },
        { age: "3 years", class: "Pre KG", color: "from-purple-500 to-violet-500" },
        { age: "4 years", class: "LKG", color: "from-blue-500 to-indigo-500" },
        { age: "5 years", class: "UKG", color: "from-green-500 to-emerald-500" }
    ];

    const montessoriActivities = [
        { activity: "Rolling & Unrolling the Mat", icon: "🧘" },
        { activity: "Cylinder Blocks", icon: "🔵" },
        { activity: "Pink Tower", icon: "🏗️" },
        { activity: "Folding & Unfolding the Napkin", icon: "📄" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <div className="min-h-screen pt-32 bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[#0F2A4A] via-[#1a4070] to-[#0F2A4A] text-white py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-64 h-64 bg-[#FDB913] rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FDB913] rounded-full blur-3xl"></div>
                </div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            className="inline-block mb-6"
                        >
                            <Sparkles className="w-16 h-16 text-[#FDB913]" />
                        </motion.div>
                        <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
                            Academic Information
                        </h1>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "200px" }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="h-1 bg-[#FDB913] mx-auto mb-8"
                        ></motion.div>
                        <p className="text-2xl text-[#FDB913] font-semibold mb-4">Holistic Learning Approach</p>
                        <p className="text-xl max-w-4xl mx-auto text-white/90 leading-relaxed">
                            Our curriculum follows a holistic approach where practitioners support and scaffold 
                            the child's learning through enriched play experiences.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Curriculum Philosophy */}
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
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, type: "spring", stiffness: 150 }}
                                className="flex items-center justify-center mb-8"
                            >
                                <div className="bg-[#0F2A4A] rounded-full p-6 shadow-lg">
                                    <Lightbulb className="w-16 h-16 text-[#FDB913]" />
                                </div>
                            </motion.div>
                            <h2 className="text-5xl font-bold mb-6 text-center text-[#0F2A4A]">
                                Curriculum
                            </h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="text-xl leading-relaxed text-center max-w-5xl mx-auto text-[#0F2A4A]"
                            >
                                The curriculum follows a holistic approach where practitioners support and scaffold the child's 
                                learning through enriched play experiences. The pedagogical and transactional processes suggested in the 
                                curriculum include engaging and enjoyable play activities and learning experiences that awaken the child's 
                                thinking processes and help build their confidence. The activities and play based experiences connect 
                                young children's fascination with learning in every domain so that they can enjoy, learn and make the 
                                most of their time in pre school.
                            </motion.p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Class Divisions */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl font-bold text-[#0F2A4A] mb-4">Class Divisions</h2>
                        <div className="w-32 h-1 bg-[#FDB913] mx-auto"></div>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {classDivisions.map((item, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="relative group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#0F2A4A] to-[#1a4070] rounded-2xl transform group-hover:scale-105 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
                                <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-gray-100 group-hover:border-[#FDB913] transition-all duration-300">
                                    <div className={`bg-gradient-to-br ${item.color} h-40 flex items-center justify-center relative overflow-hidden`}>
                                        <motion.div
                                            animate={{ 
                                                scale: [1, 1.2, 1],
                                                rotate: [0, 180, 360]
                                            }}
                                            transition={{ 
                                                duration: 3, 
                                                repeat: Infinity,
                                                ease: "linear"
                                            }}
                                            className="absolute top-4 right-4 opacity-20"
                                        >
                                            <Sparkles className="w-12 h-12 text-white" />
                                        </motion.div>
                                        <Sparkles className="w-20 h-20 text-white" />
                                    </div>
                                    <div className="p-8 group-hover:bg-[#0F2A4A] transition-colors duration-300">
                                        <h3 className="text-2xl font-bold text-[#0F2A4A] mb-3 group-hover:text-[#FDB913] transition-colors">
                                            {item.class}
                                        </h3>
                                        <div className="space-y-2">
                                            <div className="flex items-center">
                                                <span className="text-[#FDB913] font-bold mr-2 group-hover:text-white">Age:</span>
                                                <span className="text-gray-600 group-hover:text-white">{item.age}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Subjects Offered */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl font-bold text-[#0F2A4A] mb-4">Subjects Offered</h2>
                        <div className="w-32 h-1 bg-[#FDB913] mx-auto mb-4"></div>
                        <p className="text-xl text-gray-600">Comprehensive learning across multiple domains</p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {subjects.map((subject, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#FDB913] group"
                            >
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                    className="bg-gradient-to-br from-[#0F2A4A] to-[#1a4070] text-white w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl"
                                >
                                    {subject.icon}
                                </motion.div>
                                <h3 className="text-2xl font-bold text-[#0F2A4A] mb-4 group-hover:text-[#FDB913] transition-colors">
                                    {subject.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {subject.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Teaching Methods */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl font-bold text-[#0F2A4A] mb-4">Teaching Methods</h2>
                        <div className="w-32 h-1 bg-[#FDB913] mx-auto mb-4"></div>
                        <p className="text-xl text-gray-600">Engaging and effective pedagogical approaches</p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {teachingMethods.map((method, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="relative group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#FDB913] to-yellow-500 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all text-center border-2 border-gray-100 group-hover:border-[#FDB913] overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0F2A4A] to-[#FDB913] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                                    
                                    <div className="bg-gradient-to-br from-[#0F2A4A] to-[#1a4070] text-white text-sm font-bold w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                                        {method.number}
                                    </div>
                                    
                                    <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                        {method.icon}
                                    </div>
                                    
                                    <h3 className="text-lg font-bold text-[#0F2A4A] group-hover:text-[#FDB913] transition-colors">
                                        {method.title}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Montessori Activities */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0F2A4A] via-[#1a4070] to-[#0F2A4A]"></div>
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 left-20 w-96 h-96 bg-[#FDB913] rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FDB913] rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl font-bold mb-4 text-white">Montessori Activities</h2>
                        <div className="w-32 h-1 bg-[#FDB913] mx-auto mb-4"></div>
                        <p className="text-xl text-[#FDB913] font-semibold">Hands-on learning experiences</p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {montessoriActivities.map((item, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, rotateY: 10 }}
                                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 text-center hover:bg-white/20 hover:border-[#FDB913] transition-all shadow-xl"
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
                                    className="text-7xl mb-6"
                                >
                                    {item.icon}
                                </motion.div>
                                <h3 className="text-xl font-bold text-white">{item.activity}</h3>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Quick Links */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-4xl font-bold text-[#0F2A4A] mb-12">Explore More</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Link
                                    to="/play-school/calendar"
                                    className="block bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all group border-2 border-transparent hover:border-[#FDB913]"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="bg-gradient-to-br from-[#FDB913] to-yellow-500 w-16 h-16 rounded-xl flex items-center justify-center mr-6 shadow-lg group-hover:scale-110 transition-transform">
                                                <Calendar className="w-8 h-8 text-white" />
                                            </div>
                                            <span className="text-2xl font-bold text-[#0F2A4A] group-hover:text-[#FDB913] transition-colors">
                                                Academic Calendar
                                            </span>
                                        </div>
                                        <ArrowRight className="text-[#FDB913] group-hover:translate-x-2 transition-transform w-6 h-6" />
                                    </div>
                                </Link>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Link
                                    to="/play-school/timings"
                                    className="block bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all group border-2 border-transparent hover:border-[#FDB913]"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="bg-gradient-to-br from-[#0F2A4A] to-[#1a4070] w-16 h-16 rounded-xl flex items-center justify-center mr-6 shadow-lg group-hover:scale-110 transition-transform">
                                                <Clock className="w-8 h-8 text-[#FDB913]" />
                                            </div>
                                            <span className="text-2xl font-bold text-[#0F2A4A] group-hover:text-[#FDB913] transition-colors">
                                                School Timings
                                            </span>
                                        </div>
                                        <ArrowRight className="text-[#FDB913] group-hover:translate-x-2 transition-transform w-6 h-6" />
                                    </div>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default PlaySchoolAcademic;