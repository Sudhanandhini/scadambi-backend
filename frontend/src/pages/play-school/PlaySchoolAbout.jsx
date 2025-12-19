import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, Heart, Users, Target, BookOpen, Shield, Sparkles, CheckCircle, TrendingUp, Star, ArrowRight } from 'lucide-react';

import img1 from "../../assets/play-school/Picture1.jpg"
import img2 from "../../assets/play-school/Picture2.jpg"
import img3 from "../../assets/play-school/Picture3.png"


const PlaySchoolAbout = () => {
    const values = [
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Nurturing Care",
            description: "We provide a warm, caring environment where every child feels valued and secure"
        },
        {
            icon: <Target className="w-8 h-8" />,
            title: "Individual Growth",
            description: "Each child's unique learning pace and style is respected and encouraged"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Community",
            description: "Building strong connections between children, families, and educators"
        },
        {
            icon: <BookOpen className="w-8 h-8" />,
            title: "Holistic Learning",
            description: "Developing cognitive, social, emotional, and physical skills together"
        }
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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="min-h-screen pt-32">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#0F2A4A] via-blue-900 to-[#0F2A4A] text-white py-20 relative overflow-hidden">
                {/* Animated background elements */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-10 right-10 w-64 h-64 bg-[#FDB913]/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [360, 180, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-10 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
                />

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
                            transition={{ 
                                type: "spring",
                                stiffness: 200,
                                delay: 0.2
                            }}
                            className="inline-block mb-6"
                        >
                            <div className="bg-[#FDB913] w-20 h-20 rounded-2xl flex items-center justify-center">
                                <Star className="w-10 h-10 text-[#0F2A4A]" />
                            </div>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-5xl md:text-6xl font-bold mb-6"
                        >
                            About Shishu Chaitanya
                        </motion.h1>
                         <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: "200px" }}
                                                    transition={{ delay: 0.5, duration: 0.8 }}
                                                    className="h-1 bg-[#FDB913] mx-auto mb-8"
                                                ></motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-2xl text-[#FDB913] mb-4"
                        >
                            Inspiring Little Learners Everyday
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-xl max-w-3xl mx-auto text-white/90"
                        >
                            A branch of S. Cadambi Vidya Kendra, established in 2013 to nurture young minds 
                            through play-based learning and Montessori education.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Vision & Mission Section - Enhanced with animations */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-[#0F2A4A] font-semibold text-lg mb-3 uppercase tracking-wider"
                        >
                            About The School
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                        >
                            Vision & Mission Statements
                        </motion.h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {/* Vision Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            whileHover={{ y: -10 }}
                            className="group"
                        >
                            <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-[#0F2A4A] relative overflow-hidden">
                                {/* Decorative corner */}
                                <motion.div
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute -top-10 -right-10 w-32 h-32 bg-[#0F2A4A]/5 rounded-full"
                                />
                                
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="bg-gradient-to-br from-[#0F2A4A] to-blue-900 text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 relative z-10"
                                >
                                    <Target className="w-8 h-8" />
                                </motion.div>
                                <h3 className="text-3xl font-bold text-[#0F2A4A] mb-4">Vision</h3>
                                <p className="text-xl text-gray-700 leading-relaxed">
                                    Enlightenment through education.
                                </p>
                            </div>
                        </motion.div>

                        {/* Mission Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            whileHover={{ y: -10 }}
                            className="group"
                        >
                            <div className="bg-gradient-to-br from-white to-yellow-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-[#FDB913] relative overflow-hidden">
                                {/* Decorative corner */}
                                <motion.div
                                    animate={{ rotate: [360, 0] }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute -top-10 -right-10 w-32 h-32 bg-[#FDB913]/5 rounded-full"
                                />
                                
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: -5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="bg-gradient-to-br from-[#FDB913] to-yellow-500 text-[#0F2A4A] w-16 h-16 rounded-xl flex items-center justify-center mb-6 relative z-10"
                                >
                                    <Award className="w-8 h-8" />
                                </motion.div>
                                <h3 className="text-3xl font-bold text-[#0F2A4A] mb-4">Mission</h3>
                                <div className="space-y-3 text-lg text-gray-700">
                                    <p className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-[#FDB913] mr-2 flex-shrink-0 mt-1" />
                                        Academic growth to develop human potential through cutting edge technology.
                                    </p>
                                    <p className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-[#FDB913] mr-2 flex-shrink-0 mt-1" />
                                        To instill respect and belief in our cultural heritage and ethos.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Principal's Message - Enhanced with image */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A4A] mb-4">
                            Principal's Message
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Principal Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="relative"
                            >
                                {/* Decorative elements */}
                                <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#FDB913] rounded-3xl -z-10"></div>
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#0F2A4A] rounded-3xl -z-10"></div>
                                
                                <img
                                    src={img1}
                                    alt="Principal Shrimathi K V"
                                    className="rounded-3xl shadow-2xl w-full border-8 border-white relative z-10"
                                />
                                
                                {/* Principal Name Badge */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-8 py-4 rounded-2xl shadow-xl z-20"
                                >
                                    <p className="text-xl font-bold text-[#0F2A4A] text-center">Shrimathi K V</p>
                                    <p className="text-sm text-gray-600 text-center">Principal</p>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Principal's Message Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="bg-white rounded-3xl p-8 shadow-lg space-y-6">
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="text-lg text-gray-700 leading-relaxed"
                                >
                                    <span className="text-2xl font-bold text-[#0F2A4A]">Dear Families, Students, and Friends,</span>
                                </motion.p>
                                
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className="text-lg text-gray-700 leading-relaxed"
                                >
                                    Welcome to <span className="font-semibold text-[#0F2A4A]">Shishu Chaitanya</span>, where we are dedicated to nurturing a love of learning and 
                                    fostering the unique potential of each child. As the Principal, I am honoured to be part 
                                    of a community that values curiosity, independence, and respect for each individual's 
                                    learning journey.
                                </motion.p>

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                    className="text-lg text-gray-700 leading-relaxed"
                                >
                                    At <span className="font-semibold text-[#0F2A4A]">Shishu Chaitanya</span>, we believe in creating an environment where children are encouraged 
                                    to explore, discover, and learn at their own pace. Our classrooms are designed to support 
                                    each child's natural curiosity and to provide them with the tools and opportunities to 
                                    develop both academic and life skills.
                                </motion.p>

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 }}
                                    className="text-lg text-gray-700 leading-relaxed"
                                >
                                    As the Principal of <span className="font-semibold text-[#0F2A4A]">Shishu Chaitanya</span>, I am thrilled to extend a warm welcome to all families and students 
                                    joining our community. At <span className="font-semibold text-[#0F2A4A]">Shishu Chaitanya</span>, we believe that the early years of education are not just the 
                                    beginning of a child's academic journey but a crucial foundation for their lifelong love of learning and 
                                    growth.
                                </motion.p>

                                {/* Decorative quote mark */}
                                <div className="flex items-center justify-center pt-4">
                                    <div className="bg-[#FDB913]/10 px-6 py-3 rounded-full">
                                        <Sparkles className="w-6 h-6 text-[#FDB913]" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>


       
            {/* About Content - Our Story */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-[#FDB913] font-semibold text-lg mb-3 uppercase tracking-wider"
                            >
                                Our Journey
                            </motion.p>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A4A] mb-6">Our Story</h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                >
                                    Shishu Chaitanya was established in 2013 and inaugurated by our honorable president 
                                    Dr. K. Sheshamurthy. Located in Maruthi Extension, Bengaluru - 560021, we are a proud 
                                    branch of the esteemed S. Cadambi Vidya Kendra.
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                >
                                    We cater to the developmental and emotional growth of children aged between 2.5 to 6 years, 
                                    providing a nurturing environment where young minds can explore, discover, and learn at their 
                                    own pace.
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                >
                                    Our institution provides all the necessary facilities for the betterment of students, including 
                                    well-lit and spacious classrooms, a well-sanitized environment, play areas with swings, slides, 
                                    sand pit and ball pool, and audio-visual aids to make learning more interesting and effective.
                                </motion.p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="bg-gradient-to-br from-[#FDB913] to-yellow-500 rounded-3xl p-12 text-[#0F2A4A] shadow-2xl relative overflow-hidden"
                            >
                                {/* Decorative circles */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                    className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full"
                                />
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                    className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full"
                                />

                                <div className="relative z-10">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ type: "spring", stiffness: 200 }}
                                        className="text-7xl mb-6 text-center"
                                    >
                                        🏫
                                    </motion.div>
                                    <h3 className="text-3xl font-bold mb-4 text-center">Established</h3>
                                    <motion.p
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                        className="text-7xl font-bold text-center mb-8"
                                    >
                                        2013
                                    </motion.p>
                                    <div className="space-y-4">
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 }}
                                            className="bg-white/20 rounded-xl p-4 backdrop-blur-sm"
                                        >
                                            <p className="text-sm font-semibold mb-1">Location</p>
                                            <p className="text-lg">Maruthi Extension, Bengaluru</p>
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.4 }}
                                            className="bg-white/20 rounded-xl p-4 backdrop-blur-sm"
                                        >
                                            <p className="text-sm font-semibold mb-1">Age Group</p>
                                            <p className="text-lg">2.5 - 6 years</p>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-[#0F2A4A] font-semibold text-lg mb-3 uppercase tracking-wider"
                        >
                            Our Values
                        </motion.p>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A4A] mb-4">Our Core Values</h2>
                        <p className="text-xl text-gray-600">The principles that guide our educational approach</p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {values.map((value, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="group"
                            >
                                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-[#FDB913] relative overflow-hidden">
                                    {/* Background gradient on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#FDB913]/0 to-[#FDB913]/0 group-hover:from-[#FDB913]/5 group-hover:to-yellow-500/5 transition-all"></div>
                                    
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="bg-gradient-to-br from-[#FDB913] to-yellow-500 text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 relative z-10"
                                    >
                                        {value.icon}
                                    </motion.div>
                                    <h3 className="text-xl font-bold text-[#0F2A4A] mb-3 relative z-10">{value.title}</h3>
                                    <p className="text-gray-600 relative z-10 leading-relaxed">{value.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Faculty Section - with actual image */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-[#FDB913] font-semibold text-lg mb-3 uppercase tracking-wider"
                        >
                            Our Team
                        </motion.p>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A4A] mb-4">Faculty List - Teachers</h2>
                        <p className="text-xl text-gray-600">
                            Dedicated educators committed to creating a supportive and enriching environment
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-12"
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="relative rounded-3xl overflow-hidden shadow-2xl"
                        >
                            {/* Decorative corners */}
                            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#FDB913] rounded-3xl -z-10"></div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#0F2A4A] rounded-3xl -z-10"></div>
                            
                            <img
                                src={img2}
                                alt="Faculty Team"
                                className="w-full rounded-3xl border-8 border-[#0F2A4A]"
                            />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-3xl p-8 shadow-lg"
                    >
                        <p className="text-gray-700 leading-relaxed text-lg text-center">
                            <span className="font-semibold text-[#0F2A4A]">(Left to Right)</span> Padmashree.A, Shrimathi.k.v, Lakshmi Srikanth, K.N Sujitha
                        </p>
                        <p className="text-gray-700 leading-relaxed text-lg mt-6">
                            Our dedicated team of educators is committed to creating a supportive and enriching environment. 
                            Each teacher is specially trained to foster a love of learning and to encourage students to take 
                            ownership of their education. We work closely with families to ensure that each child's needs are 
                            met and that their educational experience is both meaningful and fulfilling.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Sub-Staff Section - with actual image */}
            <section className="py-20 bg-gradient-to-br from-[#0F2A4A]  to-[#0F2A4A] text-white relative overflow-hidden">
                {/* Animated background */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute top-20 right-20 w-96 h-96 bg-[#FDB913]/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-[#FDB913] font-semibold text-lg mb-3 uppercase tracking-wider"
                        >
                            Support Team
                        </motion.p>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Sub-Staff</h2>
                        <p className="text-xl text-white/80">
                            Essential members ensuring smooth daily operations
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="relative rounded-3xl overflow-hidden shadow-2xl"
                            >
                                <img
                                    src={img3}
                                    alt="Sub-Staff Team"
                                    className="w-full rounded-3xl border-8 border-[#FDB913]"
                                />
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                    className="bg-[#FDB913] text-[#0F2A4A] w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                                >
                                    <Shield className="w-8 h-8" />
                                </motion.div>
                                <h3 className="text-3xl font-bold mb-6">Our Support Staff</h3>
                                <p className="text-white/90 leading-relaxed text-lg mb-6">
                                    At <span className="font-semibold text-[#FDB913]">Shishu Chaitanya</span>, we believe that every member of our team plays a crucial role in nurturing 
                                    a supportive and enriching learning environment.
                                </p>
                                <p className="text-white/90 leading-relaxed text-lg">
                                    Our sub-staff are integral to the daily operations of our classrooms. They work closely with our lead 
                                    teachers to ensure that each child's educational experience is engaging and personalized.
                                </p>

                                {/* Stats */}
                                <div className="grid grid-cols-2 gap-4 mt-8">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm"
                                    >
                                        <div className="text-3xl font-bold text-[#FDB913] mb-1">10+</div>
                                        <div className="text-sm text-white/80">Years Experience</div>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm"
                                    >
                                        <div className="text-3xl font-bold text-[#FDB913] mb-1">4+</div>
                                        <div className="text-sm text-white/80">Support Staff</div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

              {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-[#0F2A4A] mb-6">
                           Empowering young learners with knowledge, values, and confidence.
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Join the Shishu Chaitanya family and give your child the gift of quality early education.
                        </p>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                to="/play-school/academic"
                                className="inline-flex items-center bg-[#FDB913] hover:bg-yellow-500 text-[#0F2A4A] font-bold px-8 py-4 rounded-xl transition-all shadow-lg"
                            >
                                Learn More
                                <ArrowRight className="ml-2" size={20} />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>



        </div>
    );
};

export default PlaySchoolAbout;