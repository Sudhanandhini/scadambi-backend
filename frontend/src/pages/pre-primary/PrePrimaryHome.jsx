import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Users, BookOpen, Heart, Sparkles, Baby, Award, Target, Shield, ChevronLeft, ChevronRight, Quote, CheckCircle, Calendar, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import home from "../../assets/pre-primary/home.png"

const PrePrimaryHome = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const stats = [
        { icon: Users, number: "200+", label: "Happy Children" },
        { icon: Award, number: "15+", label: "Experienced Teachers" },
        { icon: BookOpen, number: "3", label: "Age Groups" },
        { icon: Sparkles, number: "100%", label: "Safe Environment" }
    ];

    const testimonials = [
        {
            name: "Sowmya Karthik",
            relation: "Mahisri's Parent",
            student: "Mahisri",
            content: "We are really happy with Mahisri's journey at school. She enjoys going every day and always talks about her teachers and friends with great excitement. We have seen her become more confident, and independent since joining the school. Thank you to all the teachers for your care, patience, and encouragement. We truly appreciate your efforts in helping her learn and grow with so much joy and confidence."
        },
        {
            name: "Shilpa and Raghavendra Shetti",
            relation: "Parents",
            student: "Shriambi and Shlok (LKG)",
            content: "This 2 years of journey is very fantastic to us. As parents our expectation from kids has been thoroughly understood by school and they are on the path to achieve it. The curriculum and the system set by school management is very good and transparent. Our kids are treated well in the school. They are learning not only their curriculum but also extra activities like shlokas chanting, painting and also dancing. This gives us a relief that we are in right zone and our kids are in the safest place."
        },
        {
            name: "Spoorthi",
            relation: "Smayan's Mom",
            student: "Smayan (UKG)",
            content: "I'm very happy with the school's overall environment. The teachers are dedicated and caring, and my child enjoys coming to school every day. I appreciate the balance between academics and co-curricular activities. Thank you for your continued efforts in creating a nurturing learning space."
        },
        {
            name: "Akshata Desai",
            relation: "Bhavani's Mother",
            student: "Bhavani (LKG)",
            content: "I like to take privilege to congratulate the management of the school for its endless efforts. We are really feeling proud of the teaching method. The school is doing excellent in all the fields especially giving a lot of exposure to children. Good effort by all the teachers, coordinators & principal as my child is groomed very well. I highly appreciate the teachers and their engagement with my daughter and boosting her confidence in other activities too. Special thanks to Geeta & Ashwini maam who made my daughter very confident & comfortable at school."
        },
        {
            name: "Parent",
            relation: "Parikshith's Parent",
            student: "Parikshith (UKG Lily)",
            content: "My son Parikshith is studying in S Cadambi Education centre, UKG Lily. As a parent we are happy with the School's performance. My older son is also studying in the same school, now in 10th standard. All the supporting staff, teachers and principal are really kind and supportive for kids. We are happy to see the progress in my son's academic and behaviour in a positive manner. Activity based learning is truly attracting and helping kids in their academic. Teachers motivate kids to take part in co-curricular activities which enhance the learning experience of students. Moral values and cultural awareness are being taught in the school."
        },
        {
            name: "Bushra Vasdev",
            relation: "Mother",
            student: "Rajpath (KG)",
            content: "3 years back my son was very hesitant about the school and wanted to share with us. Now my son is confident in this school. He enjoys learning at his school and doing all his activities. Good teaching environment! I am happy to see my son growing and learning everything. I would like to thank you all the teachers. They are so knowledgeable, they use good methods and are very supportive. The way of teaching is awesome. Thank you teachers, thank you principal mam and supporting staff."
        }
    ];

    const missionFeatures = [
        { text: "Holistic Development Approach" },
        { text: "State-of-the-art Infrastructure" },
        { text: "Experienced & Caring Faculty" },
        { text: "Focus on Values & Ethics" }
    ];

    // Auto-play functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [testimonials.length]);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="pt-20 min-h-screen bg-gradient-to-b from-blue-50 via-white to-amber-50">
            {/* Hero Section */}
            <div className="relative h-[600px] bg-cover bg-center mt-12" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1920&h=1080&fit=crop')"
            }}>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0F2A4A]/90 via-[#0F2A4A]/70 to-[#0F2A4A]/60"></div>
                <div className="absolute inset-0">
                    {/* Floating particles effect */}
                    <div className="absolute inset-0 overflow-hidden">
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-2 h-2 bg-[#FDB913]/30 rounded-full"
                                initial={{
                                    x: Math.random() * window.innerWidth,
                                    y: Math.random() * 600,
                                }}
                                animate={{
                                    y: [null, -100],
                                    opacity: [0.3, 0, 0.3],
                                }}
                                transition={{
                                    duration: 3 + Math.random() * 2,
                                    repeat: Infinity,
                                    delay: Math.random() * 2,
                                }}
                            />
                        ))}
                    </div>
                </div>
                <div className="absolute inset-0 flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-white max-w-4xl"
                        >
                            <motion.div 
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="inline-block bg-gradient-to-r from-[#FDB913] to-amber-400 px-6 py-3 rounded-full mb-6 shadow-lg"
                            >
                                <span className="text-[#0F2A4A] font-bold text-lg">✨ Pre-Primary Wing</span>
                            </motion.div>
                            <motion.h1 
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="text-5xl md:text-7xl font-bold font-serif mb-6 leading-tight"
                            >
                                S. Cadambi Education Center
                            </motion.h1>
                            <motion.p 
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-2xl md:text-3xl text-[#FDB913] font-bold mb-4"
                            >
                                Pre-Primary School (Pre-KG, LKG, UKG)
                            </motion.p>
                            <motion.p 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="text-xl text-white/90 mb-8 leading-relaxed"
                            >
                                Nurturing young minds through play-based learning for ages 3-6 years
                            </motion.p>
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="flex flex-wrap gap-4 mb-12"
                            >
                                <Link to="/pre-primary/admissions">
                                    <motion.button 
                                        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(253, 185, 19, 0.3)" }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-gradient-to-r from-[#FDB913] to-amber-400 hover:from-amber-400 hover:to-[#FDB913] text-[#0F2A4A] font-bold px-8 py-4 rounded-full transition-all shadow-xl flex items-center group"
                                    >
                                        Enroll Your Child
                                        <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
                                    </motion.button>
                                </Link>
                                <Link to="/pre-primary/contact">
                                    <motion.button 
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full transition-all border-2 border-white/30 shadow-lg"
                                    >
                                        Schedule a Visit
                                    </motion.button>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="relative -mt-20 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                className="bg-white rounded-2xl shadow-2xl p-8 text-center hover:shadow-[#FDB913]/20 hover:shadow-3xl transition-all border-t-4 border-[#FDB913]"
                            >
                                <motion.div 
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                    className="bg-gradient-to-br from-[#FDB913] to-amber-400 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                                >
                                    <stat.icon className="text-[#0F2A4A]" size={32} />
                                </motion.div>
                                <motion.h3 
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 + 0.3, type: "spring" }}
                                    className="text-4xl font-bold text-[#0F2A4A] mb-2"
                                >
                                    {stat.number}
                                </motion.h3>
                                <p className="text-gray-600 font-medium">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mission Section */}
            <div className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <motion.div 
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className="relative rounded-3xl overflow-hidden shadow-2xl"
                            >
                                <img
                                    src={home}
                                    alt="Students learning"
                                    className="w-full h-[500px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A4A]/40 to-transparent"></div>
                            </motion.div>

                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                                whileHover={{ rotate: 5, scale: 1.1 }}
                                className="absolute -bottom-8 -right-8 bg-gradient-to-br from-[#FDB913] to-amber-400 rounded-3xl shadow-2xl p-8 text-center"
                            >
                                <h3 className="text-5xl font-bold text-[#0F2A4A] mb-2">25+</h3>
                                <p className="text-[#0F2A4A] font-semibold text-lg">Years of Excellence</p>
                            </motion.div>
                        </motion.div>

                        {/* Right Side - Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <motion.span 
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-[#FDB913] font-bold tracking-widest uppercase text-sm"
                            >
                                OUR MISSION
                            </motion.span>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A4A] font-serif mt-3 mb-6 leading-tight">
                                Nurturing Leaders of Tomorrow
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed mb-8">
                                At S. Cadambi Vidya Kendra, we believe that education goes beyond textbooks. Our mission is to foster a learning environment where curiosity is celebrated, and every student is empowered to discover their true potential.
                            </p>

                            {/* Features Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                {missionFeatures.map((feature, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        whileHover={{ x: 10 }}
                                        className="flex items-start"
                                    >
                                        <motion.div
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <CheckCircle className="text-[#FDB913] mr-3 flex-shrink-0 mt-1" size={24} />
                                        </motion.div>
                                        <span className="text-gray-700 font-medium">{feature.text}</span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Button */}
                            <Link to="/pre-primary/about">
                                <motion.button 
                                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(15, 42, 74, 0.2)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-white border-2 border-[#0F2A4A] text-[#0F2A4A] hover:bg-[#0F2A4A] hover:text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg"
                                >
                                    Read Our Story
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Programs Section */}
            <div className="py-20 bg-gradient-to-b from-blue-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-[#FDB913] font-bold tracking-widest uppercase text-sm">Our Programs</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A4A] font-serif mt-3 mb-6">
                            Choose the Right Program
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Pre-KG", age: "3-4 years", icon: "🎈", desc: "Foundation stage focusing on play and exploration", color: "from-blue-400 to-blue-900" },
                            { name: "LKG", age: "4-5 years", icon: "🎨", desc: "Lower Kindergarten with basic literacy and numeracy", color: "from-blue-400 to-indigo-500" },
                            { name: "UKG", age: "5-6 years", icon: "📚", desc: "Upper Kindergarten preparing for formal schooling", color: "from-blue-400 to-cyan-900" }
                        ].map((program, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all border-t-4 border-[#FDB913] relative overflow-hidden group"
                            >
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${program.color} opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`}></div>
                                <motion.div 
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-6xl mb-4 text-center"
                                >
                                    {program.icon}
                                </motion.div>
                                <h3 className="text-2xl font-bold text-[#0F2A4A] mb-2 text-center">{program.name}</h3>
                                <p className="text-[#FDB913] font-semibold text-center mb-4">{program.age}</p>
                                <p className="text-gray-600 text-center leading-relaxed">{program.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Upcoming Events Section */}
            <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-amber-50">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <motion.div 
                            initial={{ scale: 0.9 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-block px-6 py-2 bg-gradient-to-r from-[#FDB913]/20 to-amber-200/20 rounded-full mb-4"
                        >
                            <span className="text-[#FDB913] font-bold uppercase tracking-wider text-sm">Academic Year 2025-26</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A4A] mb-4">
                            Upcoming Events
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-[#FDB913] to-amber-500 mx-auto mb-6 rounded-full"></div>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Stay connected with our vibrant school community through exciting events and celebrations
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-12">
                        {/* Left Side - Calendar Events */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 100 }}
                            className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#FDB913]/20"
                        >
                            <div className="bg-gradient-to-r from-[#0F2A4A] to-blue-900 p-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[#FDB913]/10 rounded-full -mr-20 -mt-20"></div>
                                <div className="flex items-center gap-4 text-white relative z-10">
                                    <motion.div 
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                        className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl"
                                    >
                                        <Calendar className="w-8 h-8" />
                                    </motion.div>
                                    <div>
                                        <h3 className="text-2xl font-bold">Calendar Events</h3>
                                        <p className="text-gray-200 text-sm">November - December 2025</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="p-8 space-y-4">
                                {[
                                    { date: '01', month: 'Nov', year: '2025', event: 'Karnataka Rajyotsava', color: 'from-orange-400 to-red-500' },
                                    { date: '05', month: 'Nov', year: '2025', event: 'Guru Nanak Jayanthi', color: 'from-blue-400 to-indigo-500' },
                                    { date: '14', month: 'Nov', year: '2025', event: "Children's Day Celebration", color: 'from-pink-400 to-purple-500' },
                                    { date: '15', month: 'Nov', year: '2025', event: 'Sammilana 2025 (Inter-school)', color: 'from-green-400 to-emerald-500' },
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ x: 10, transition: { duration: 0.2 } }}
                                        className="group relative"
                                    >
                                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-gray-50 to-amber-50 hover:from-amber-50 hover:to-[#FDB913]/10 transition-all cursor-pointer border-2 border-transparent hover:border-[#FDB913]/30 hover:shadow-lg">
                                            <motion.div 
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                className={`relative bg-gradient-to-br ${item.color} text-white rounded-2xl p-5 text-center min-w-[90px] shadow-lg`}
                                            >
                                                <div className="text-4xl font-bold leading-none">{item.date}</div>
                                                <div className="text-xs font-semibold mt-1 uppercase tracking-wider">{item.month}</div>
                                                <motion.div 
                                                    whileHover={{ rotate: 360 }}
                                                    transition={{ duration: 0.6 }}
                                                    className="absolute -top-1 -right-1 w-6 h-6 bg-[#FDB913] rounded-full flex items-center justify-center"
                                                >
                                                    <Award className="w-3 h-3 text-white" />
                                                </motion.div>
                                            </motion.div>
                                            <div className="flex-1">
                                                <p className="font-bold text-[#0F2A4A] text-lg group-hover:text-[#FDB913] transition-colors">{item.event}</p>
                                                <p className="text-sm text-gray-500 mt-1">{item.month} {item.date}, {item.year}</p>
                                            </div>
                                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#FDB913] group-hover:translate-x-2 transition-all" />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Side - Upcoming Events */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 100 }}
                            className="bg-gradient-to-br from-[#0F2A4A] via-blue-900 to-[#0F2A4A] rounded-3xl shadow-2xl overflow-hidden text-white relative"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FDB913]/10 rounded-full -mr-32 -mt-32"></div>
                            <div className="bg-white/10 backdrop-blur-sm p-8 border-b border-white/20 relative z-10">
                                <div className="flex items-center gap-4">
                                    <motion.div 
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                        className="bg-gradient-to-br from-[#FDB913] to-amber-400 p-3 rounded-2xl shadow-lg"
                                    >
                                        <Trophy className="w-8 h-8 text-white" />
                                    </motion.div>
                                    <div>
                                        <h3 className="text-2xl font-bold">Coming Soon</h3>
                                        <p className="text-gray-200 text-sm">December 2025 Highlights</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="p-8 space-y-4">
                                {[
                                    { date: '1', month: 'Dec', event: 'Pre-Final Exam for STD X', icon: '📝' },
                                    { date: '1', month: 'Dec', event: 'II Round Tests (Pre-primary to STD IX)', icon: '📚' },
                                    { date: '7', month: 'Dec', event: 'Educational Excursion - STD X', icon: '🚌' },
                                    { date: '25', month: 'Dec', event: 'Christmas Celebration', icon: '🎄' },
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ x: -10, transition: { duration: 0.2 } }}
                                        className="group"
                                    >
                                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/15 transition-all cursor-pointer border-2 border-white/10 hover:border-[#FDB913]/50 hover:shadow-xl">
                                            <motion.div 
                                                whileHover={{ scale: 1.1, rotate: -5 }}
                                                className="bg-gradient-to-br from-[#FDB913] to-amber-500 text-white rounded-2xl p-5 text-center min-w-[90px] shadow-lg relative"
                                            >
                                                <div className="text-4xl font-bold leading-none">{item.date}</div>
                                                <div className="text-xs font-semibold mt-1 uppercase tracking-wider">{item.month}</div>
                                                <motion.div 
                                                    whileHover={{ scale: 1.3, rotate: 10 }}
                                                    className="absolute -top-2 -right-2 text-3xl"
                                                >
                                                    {item.icon}
                                                </motion.div>
                                            </motion.div>
                                            <div className="flex-1">
                                                <p className="font-bold text-white text-lg group-hover:text-[#FDB913] transition-colors">{item.event}</p>
                                                <p className="text-sm text-amber-200 mt-1">{item.month} {item.date}, 2025</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Monthly Events Timeline */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100 }}
                        className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#FDB913]/20"
                    >
                        <div className="bg-gradient-to-r from-[#FDB913] via-amber-400 to-[#FDB913] p-8 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -ml-20 -mt-20"></div>
                            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mb-20"></div>
                            <h3 className="text-3xl font-bold text-center text-white mb-2 relative z-10">
                                Month-wise Events Timeline
                            </h3>
                            <p className="text-center text-white/90 relative z-10">Major events and celebrations throughout the year</p>
                        </div>
                        
                        <div className="p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                                {[
                                    { 
                                        month: 'November', 
                                        color: 'from-orange-400 to-red-500',
                                        events: ['Sammilana (Inter-school)', "Children's Day", 'Karnataka Rajyotsava']
                                    },
                                    { 
                                        month: 'December', 
                                        color: 'from-blue-400 to-indigo-500',
                                        events: ['Samanvaya (Cultural Meet)', 'Christmas', 'Winter Break']
                                    },
                                    { 
                                        month: 'January', 
                                        color: 'from-purple-400 to-pink-500',
                                        events: ['National Youth Day', 'Preparatory Exams', 'Republic Day']
                                    },
                                    { 
                                        month: 'February', 
                                        color: 'from-green-400 to-emerald-500',
                                        events: ['National Science Day', 'Preparatory Exams II', 'Sports Events']
                                    },
                                    { 
                                        month: 'March', 
                                        color: 'from-amber-400 to-orange-500',
                                        events: ['Annual Exams', 'SSLC Finals', 'Results Day']
                                    },
                                ].map((month, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                                        whileHover={{ y: -10 }}
                                        className="group"
                                    >
                                        <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-6 hover:shadow-xl transition-all border-2 border-transparent hover:border-[#FDB913]/30 h-full">
                                            <motion.div 
                                                whileHover={{ scale: 1.05 }}
                                                className={`bg-gradient-to-br ${month.color} text-white rounded-xl p-4 mb-4 text-center shadow-lg`}
                                            >
                                                <h4 className="font-bold text-lg">{month.month}</h4>
                                            </motion.div>
                                            <ul className="space-y-3">
                                                {month.events.map((event, idx) => (
                                                    <motion.li 
                                                        key={idx} 
                                                        initial={{ opacity: 0, x: -10 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: index * 0.1 + idx * 0.05 }}
                                                        className="flex items-start gap-2"
                                                    >
                                                        <motion.div 
                                                            whileHover={{ scale: 1.5 }}
                                                            className="w-2 h-2 bg-[#FDB913] rounded-full mt-2 flex-shrink-0"
                                                        ></motion.div>
                                                        <span className="text-sm text-gray-700 leading-relaxed">{event}</span>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            
                            <div className="mt-8 text-center">
                                <Link to="/pre-primary/calender">
                                    <motion.button
                                        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(253, 185, 19, 0.3)" }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FDB913] to-amber-400 text-white rounded-full font-bold shadow-xl transition-all group"
                                    >
                                        View Complete Academic Calendar
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                    </motion.button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Testimonials Section */}
            <div className="py-20 bg-gradient-to-b from-blue-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-[#FDB913] font-bold tracking-widest uppercase text-sm">Parents' Feedback</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A4A] font-serif mt-3 mb-6">
                            What Parents Say About Us
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Hear from our wonderful parent community about their experience with S. Cadambi Education Center
                        </p>
                    </motion.div>

                    <div className="relative">
                        <div className="overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentTestimonial}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-full"
                                >
                                    <div className="bg-gradient-to-br from-[#0F2A4A] to-blue-900 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FDB913]/10 rounded-full -mr-32 -mt-32"></div>
                                        <motion.div
                                            initial={{ scale: 0, rotate: -180 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <Quote className="absolute top-8 left-8 text-[#FDB913]/30" size={64} />
                                        </motion.div>
                                        <div className="relative z-10">
                                            <p className="text-l md:text-xl leading-relaxed mb-8 font-light" style={{lineHeight:'1.8'}}>
                                                "{testimonials[currentTestimonial].content}"
                                            </p>
                                            <div className="flex items-center">
                                                <motion.div 
                                                    whileHover={{ scale: 1.1, rotate: 360 }}
                                                    transition={{ duration: 0.6 }}
                                                    className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FDB913] to-amber-400 flex items-center justify-center mr-4 shadow-lg"
                                                >
                                                    <Users className="text-white" size={32} />
                                                </motion.div>
                                                <div>
                                                    <h4 className="text-xl font-bold text-[#FDB913]">{testimonials[currentTestimonial].name}</h4>
                                                    <p className="text-white/90">{testimonials[currentTestimonial].relation}</p>
                                                    <p className="text-white/80 text-sm mt-1">Student: {testimonials[currentTestimonial].student}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex justify-center items-center mt-8 gap-4">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={prevTestimonial}
                                className="bg-gradient-to-r from-[#FDB913] to-amber-400 hover:from-amber-400 hover:to-[#FDB913] text-white p-4 rounded-full shadow-lg transition-all"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft size={24} />
                            </motion.button>

                            {/* Dots Indicator */}
                            <div className="flex gap-2">
                                {testimonials.map((_, idx) => (
                                    <motion.button
                                        key={idx}
                                        whileHover={{ scale: 1.2 }}
                                        onClick={() => setCurrentTestimonial(idx)}
                                        className={`h-3 rounded-full transition-all ${idx === currentTestimonial
                                            ? 'bg-[#0F2A4A] w-8'
                                            : 'bg-gray-300 hover:bg-[#FDB913] w-3'
                                        }`}
                                        aria-label={`Go to testimonial ${idx + 1}`}
                                    />
                                ))}
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={nextTestimonial}
                                className="bg-gradient-to-r from-[#FDB913] to-amber-400 hover:from-amber-400 hover:to-[#FDB913] text-white p-4 rounded-full shadow-lg transition-all"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight size={24} />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-20 bg-gradient-to-r from-[#0F2A4A] to-blue-900 relative overflow-hidden">
                <div className="absolute inset-0">
                    {[...Array(30)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-[#FDB913]/20 rounded-full"
                            initial={{
                                x: Math.random() * window.innerWidth,
                                y: Math.random() * 400,
                            }}
                            animate={{
                                y: [null, -100],
                                x: [null, Math.random() * 100 - 50],
                                opacity: [0.2, 0, 0.2],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <motion.h2 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold text-white font-serif mb-6"
                        >
                            Ready to Begin Your Child's Journey?
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-white/90 text-xl mb-8 max-w-2xl mx-auto"
                        >
                            Join our nurturing community where every child blooms
                        </motion.p>
                        <Link to="/pre-primary/admissions">
                            <motion.button 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                whileHover={{ scale: 1.1, boxShadow: "0 20px 40px rgba(253, 185, 19, 0.4)" }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-[#FDB913] to-amber-400 hover:from-amber-400 hover:to-[#FDB913] text-[#0F2A4A] font-bold px-8 py-4 rounded-full transition-all shadow-2xl"
                            >
                                Apply Now
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default PrePrimaryHome;