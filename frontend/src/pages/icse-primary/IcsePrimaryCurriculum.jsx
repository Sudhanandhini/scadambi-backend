import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle, Target, Award, Lightbulb, Users, TrendingUp } from 'lucide-react';
import IcsePrimaryHeader from './IcsePrimaryHeader';
import IcsePrimaryFooter from './IcsePrimaryFooter';

import img1 from "../../assets/icse-primary/Picture2.png"
import learn from "../../assets/icse-primary/Picture3.jpg"

const IcsePrimaryCurriculum = () => {
    const grade12Subjects = [
        "English 1 (Grammar and Composition)",
        "English 2 (Literature - Prose and Poetry)",
        "Kannada and Hindi",
        "Environmental Science",
        "Computer Basics and Applications",
        "Art and Craft Education",
        "Value Education and General Knowledge"
    ];

    const grade35Subjects = [
        "English 1 (Grammar and Composition)",
        "English 2 (Literature - Prose and Poetry)",
        "Second Language (Kannada or Hindi)",
        "Science",
        "Social Studies",
        "Computer Basics and Applications",
        "Art and Craft Education",
        "Personality Development and General Knowledge"
    ];

    const learningCycle = [
        { title: "Engage", color: "from-orange-500 to-orange-600", icon: Lightbulb },
        { title: "Explore", color: "from-yellow-500 to-yellow-600", icon: Users },
        { title: "Explain", color: "from-blue-500 to-blue-600", icon: BookOpen },
        { title: "Apply", color: "from-purple-500 to-purple-600", icon: TrendingUp }
    ];

    const methodology = [
        {
            step: "1",
            title: "Previous Knowledge",
            description: "Connect new concepts with existing understanding through previous knowledge"
        },
        {
            step: "2",
            title: "Hands-on Activities",
            description: "Carefully designed practical activities for experiential learning"
        },
        {
            step: "3",
            title: "Logical Reasoning",
            description: "Develop critical thinking and analytical reasoning skills"
        },
        {
            step: "4",
            title: "Real-life Application",
            description: "Apply learning to practical real-world situations"
        },
        {
            step: "5",
            title: "Concept Reinforcement",
            description: "Deepen understanding through systematic review and practice"
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <IcsePrimaryHeader />

            {/* Hero */}
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
                            <BookOpen className="w-20 h-20 text-white/90" />
                        </motion.div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">ICSE Curriculum</h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            Comprehensive education framework designed for holistic development and lifelong learning
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto mb-16"
                    >
                        <div className="text-center mb-8">
                            <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold">
                                Academic Information
                            </span>
                        </div>
                        <h2 className="text-4xl font-bold text-primary mb-6 text-center">
                            Curriculum Details
                        </h2>
                        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border-2 border-gray-100">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                We follow the <strong className="text-primary">ICSE Curriculum framework</strong> that aims to enrich the educational journey
                                with its unique and special components integrated into the curriculum. This approach lets students go
                                beyond textbooks and immerse themselves in <strong>real-world experiences</strong>, igniting their inquisitive spirits.
                            </p>
                        </div>
                    </motion.div>


                    {/* 5-Step Methodology */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
                            5-Step Teaching Methodology
                        </h3>
                        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
                            A dynamic framework extending beyond traditional methods, equipping students with carefully designed
                            hands-on activities to connect new concepts through previous knowledge, develop logical reasoning
                            skills, and apply learning to real-life situations.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
                        {/* Connection lines */}
                        <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary via-primary to-secondary opacity-20"></div>

                        {methodology.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-secondary/30"
                            >
                                <div className="bg-gradient-to-br from-secondary to-secondary/80 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto relative z-10 shadow-lg">
                                    <span className="text-3xl font-bold text-primary">{item.step}</span>
                                </div>
                                <h3 className="text-lg font-bold text-primary mb-3 text-center min-h-[56px] flex items-center justify-center">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm text-center leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-16 bg-gradient-to-br from-primary/5 to-blue-50 rounded-3xl p-8 md:p-10 shadow-lg border-2 border-primary/10"
                    >
                        <div className="flex items-start gap-4 mb-4">
                            <div className="bg-primary text-white p-3 rounded-xl">
                                <Target size={28} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-primary mb-2">Our Teaching Goal</h3>
                                <p className="text-gray-600">Preparing students for future success</p>
                            </div>
                        </div>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Students showcase their content knowledge and acquired skills through diverse platforms such as Literary competitions, Sports activities, Cultural Competitions and creative art, Science exhibitions, taking part in interschool competitions and Annual Day promoting a vibrant and inclusive learning environment.
                            Through emphasising practical applications and skills development, we equip students for a smooth transition to Middle School, nurturing their confidence and competence for future academic pursuits

                        </p>
                    </motion.div>
                </div> </section>


            {/* Curriculum Overview */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    

                    {/* Class Division */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-primary/5 to-blue-50 rounded-3xl p-8 mb-16"
                    >
                        <h3 className="text-2xl font-bold text-primary mb-4 text-center">Class Division</h3>
                        <p className="text-lg text-gray-700 text-center">Grade 1 to Grade 5</p>
                    </motion.div>

                    {/* Subjects by Grade */}
                    <div className="mb-12">
                        <h3 className="text-3xl font-bold text-primary mb-8 text-center">Subjects Offered</h3>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border-t-4 border-secondary hover:shadow-2xl"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center">
                                    <div className="bg-gradient-to-br from-secondary to-secondary/80 w-14 h-14 rounded-xl flex items-center justify-center mr-4">
                                        <BookOpen className="text-primary" size={28} />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-primary">Grade 1 & 2</h3>
                                </div>
                                <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold">
                                    7 Subjects
                                </span>
                            </div>
                            <ul className="space-y-4">
                                {grade12Subjects.map((subject, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="flex items-start group"
                                    >
                                        <CheckCircle className="text-secondary mr-3 mt-1 shrink-0 group-hover:scale-110 transition-transform" size={20} />
                                        <span className="text-gray-700 group-hover:text-primary transition-colors">{subject}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border-t-4 border-primary hover:shadow-2xl"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center">
                                    <div className="bg-gradient-to-br from-primary to-blue-800 w-14 h-14 rounded-xl flex items-center justify-center mr-4">
                                        <BookOpen className="text-white" size={28} />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-primary">Grade 3 to 5</h3>
                                </div>
                                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                                    8 Subjects
                                </span>
                            </div>
                            <ul className="space-y-4">
                                {grade35Subjects.map((subject, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="flex items-start group"
                                    >
                                        <CheckCircle className="text-primary mr-3 mt-1 shrink-0 group-hover:scale-110 transition-transform" size={20} />
                                        <span className="text-gray-700 group-hover:text-primary transition-colors">{subject}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* Teaching Methodology */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">




                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                            Teaching Methodology
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                            Our Learning Framework
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We firmly believe in empowering each child by giving them the opportunity to explore and think
                            independently. We develop basic literacy and numeracy skills, foster socialization, and nurture
                            a love for learning.
                        </p>
                    </motion.div>


                    {/* Learning Cycle with Image - Side by Side Layout */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-xl mb-16 border-2 border-gray-100"
                    >
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Left Side - Image */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="order-2 lg:order-1"
                            >
                                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
                                    <img
                                        src={learn}
                                        alt="Learning Cycle - Engage, Explore, Explain, Apply"
                                        className="w-full h-auto"
                                    />
                                </div>
                            </motion.div>

                            {/* Right Side - Text Content */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="order-1 lg:order-2"
                            >
                                <h3 className="text-3xl font-bold text-primary mb-6">Teaching Methodology</h3>
                                <div className="space-y-6">
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        We firmly believe in empowering each child by giving them the opportunity to explore and think
                                        independently. We develop basic literacy and numeracy skills, foster <strong>socialization</strong>,
                                        and nurture a love for learning. We aim to prepare students, lay a strong foundation for further
                                        education and lifelong learning.
                                    </p>
                                    <div className="bg-primary/5 rounded-xl p-6 border-l-4 border-primary">
                                        <p className="text-lg text-gray-700 leading-relaxed">
                                            Aligning with the above belief, central to our pedagogy is the <strong>5-step Methodology</strong>,
                                            a dynamic framework extending beyond the traditional methods which equips students with carefully
                                            designed hands-on activities, connect to new concepts through previous knowledge, develop logical
                                            reasoning skills and apply the learning to real life situations all aimed at deepening their
                                            understanding and reinforce the key concepts.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>


                </div>
            </section>




            {/* Assessment with Scientific Method Image */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                                Evaluation System
                            </span>
                            <h2 className="text-4xl font-bold text-primary mb-6">
                                Continuous & Comprehensive Evaluation
                            </h2>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                We adopt a <strong>Continuous and Comprehensive Evaluation</strong> approach that combines regular assessments
                                through class tests, unit tests, and semester examinations.
                            </p>
                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Students showcase their content knowledge and acquired skills through diverse platforms such as:
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    "Literary competitions and creative writing",
                                    "Sports activities and physical education",
                                    "Cultural competitions and creative arts",
                                    "Science exhibitions and projects",
                                    "Interschool competitions",
                                    "Annual Day performances"
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="flex items-start bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all"
                                    >
                                        <Award className="text-secondary mr-3 mt-1 shrink-0" size={20} />
                                        <span className="text-gray-700">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100">
                                <img
                                    src={img1}
                                    alt="The Scientific Method"
                                    className="w-full h-auto rounded-2xl"
                                />
                                <div className="mt-6 text-center">
                                    {/* <h4 className="text-xl font-bold text-primary mb-2">The Scientific Method</h4> */}
                                    <p className="text-gray-600">Our approach to comprehensive learning and evaluation</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-primary to-blue-900 text-white rounded-3xl p-10 md:p-12 relative overflow-hidden shadow-2xl"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full -mr-32 -mt-32"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/20 rounded-full -ml-24 -mb-24"></div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-secondary/20 backdrop-blur p-4 rounded-2xl">
                                    <Target className="text-secondary" size={40} />
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold">Our Ultimate Goal</h3>
                            </div>
                            <p className="text-xl leading-relaxed text-white/95 mb-6">
                                Through emphasizing practical applications and skills development, we equip students for
                                a smooth transition to Middle School, nurturing their confidence and competence for future
                                academic pursuits.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <span className="bg-secondary/20 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold">
                                    Skill Development
                                </span>
                                <span className="bg-secondary/20 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold">
                                    Confidence Building
                                </span>
                                <span className="bg-secondary/20 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold">
                                    Future Ready
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>


        </div>
    );
};

export default IcsePrimaryCurriculum;