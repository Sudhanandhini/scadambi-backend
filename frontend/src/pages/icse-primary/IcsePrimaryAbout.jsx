import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, BookOpen, Target, Heart, Star, Globe, Building2, Calendar, TrendingUp, Lightbulb, Shield } from 'lucide-react';
import IcsePrimaryHeader from './IcsePrimaryHeader';
import IcsePrimaryFooter from './IcsePrimaryFooter';

const IcsePrimaryAbout = () => {
    const values = [
        {
            icon: Target,
            title: "Strong Foundation",
            description: "Building solid academic and character foundations for lifelong learning",
            color: "blue"
        },
        {
            icon: Heart,
            title: "Value Education",
            description: "Inculcating good social habits, values, and cultural awareness",
            color: "pink"
        },
        {
            icon: Star,
            title: "Holistic Development",
            description: "360-degree development through academics and co-curricular activities",
            color: "purple"
        },
        {
            icon: Users,
            title: "Expert Faculty",
            description: "44+ experienced teachers dedicated to student success",
            color: "green"
        }
    ];

    const stats = [
        { number: "1984", label: "Established", icon: Calendar },
        { number: "21", label: "Classrooms", icon: Building2 },
        { number: "44+", label: "Expert Teachers", icon: Users },
        { number: "40+", label: "Years of Excellence", icon: Award }
    ];

    const facilities = [
        { icon: BookOpen, title: "21 Classrooms", desc: "Spacious and well-equipped learning spaces" },
        { icon: Globe, title: "Computer Lab", desc: "Modern technology for digital learning" },
        { icon: BookOpen, title: "Language Room", desc: "Dedicated space for language development" },
        { icon: BookOpen, title: "Common Library", desc: "Rich collection of books and resources" }
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
                            <Shield className="w-20 h-20 text-white/90" />
                        </motion.div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">About ICSE Primary Wing</h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            S. Cadambi Vidya Kendra English Secondary School
                        </p>
                        <p className="text-lg text-white/80 mt-4">
                            Building Values through Education Since 1984
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white -mt-10 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-6">
                        {stats.map((stat, idx) => {
                            const IconComponent = stat.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="bg-white rounded-2xl p-6 shadow-xl border-2 border-gray-100 text-center"
                                >
                                    <IconComponent className="mx-auto mb-3 text-primary" size={40} />
                                    <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                                    <div className="text-gray-600 font-semibold">{stat.label}</div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* School Introduction */}
            <section className="py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                                Our School
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                                Empowering Young Minds
                            </h2>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                <strong>S. Cadambi Vidya Kendra English Secondary School</strong> is committed to providing
                                the best quality primary education with a solid foundation to instill confidence and empower
                                students to be lifelong learners.
                            </p>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                Our ICSE Primary Wing focuses on inculcating good social and behavioral habits, values, and culture.
                                From academics to co-curricular activities, we instill perseverance and a never-say-die spirit
                                in every student's heart.
                            </p>
                            
                            <div className="bg-gradient-to-r from-secondary/20 to-secondary/10 rounded-2xl p-6 border-l-4 border-secondary">
                                <div className="flex items-center gap-3 mb-3">
                                    <Award className="text-secondary" size={28} />
                                    <p className="text-xl font-bold text-primary">CISCE Affiliation</p>
                                </div>
                                <p className="text-gray-700 mb-1">Affiliated to CISCE Board, New Delhi</p>
                                <p className="text-gray-900 font-bold text-lg">School Code: KA042</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative">
                                <div className="bg-gradient-to-br from-primary to-blue-900 text-white rounded-3xl p-10 md:p-12 shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/20 rounded-full -mr-20 -mt-20"></div>
                                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 rounded-full -ml-16 -mb-16"></div>
                                    
                                    <div className="relative z-10">
                                        <div className="text-7xl mb-6">🎓</div>
                                        <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
                                        <p className="text-lg leading-relaxed text-white/90 mb-8">
                                            To create an environment for future leaders who possess skills and aptitudes in an array
                                            of functional disciplines, making them not only good students but honest, humble, and
                                            brilliant human beings.
                                        </p>
                                        
                                        <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                                            <div className="flex items-center gap-4">
                                                <div className="bg-secondary/20 w-14 h-14 rounded-xl flex items-center justify-center">
                                                    <TrendingUp className="text-secondary" size={28} />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-xl mb-1">Excellence in Education</p>
                                                    <p className="text-white/80">Since 1984</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                            Our Foundation
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Core Values</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Principles that guide our educational approach and shape young minds
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, idx) => {
                            const IconComponent = value.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group relative bg-gradient-to-br from-primary to-blue-900 text-white rounded-2xl p-8 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                                >
                                    {/* Background decoration */}
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-300"></div>
                                    
                                    <div className="relative z-10">
                                        {/* Icon */}
                                        <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-secondary/30 transition-all duration-300">
                                            <IconComponent size={32} className="text-white" />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold mb-3 group-hover:text-secondary transition-colors">
                                            {value.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-white/80 text-sm leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500">
                                            {value.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Principal's Message */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                            Message from Leadership
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                            Principal's Message
                        </h2>
                    </motion.div>

                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-gray-100"
                        >
                            <div className="flex flex-col md:flex-row gap-8 items-center mb-8 pb-8 border-b-2 border-gray-100">
                                <div className="relative">
                                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center text-6xl shadow-xl">
                                        👩‍💼
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                                        <Award size={20} />
                                    </div>
                                </div>
                                <div className="text-center md:text-left">
                                    <h3 className="text-3xl font-bold text-primary mb-2">ROHINI GOPAL</h3>
                                    <p className="text-xl text-gray-600 font-semibold mb-2">Principal</p>
                                    <p className="text-secondary font-semibold">ICSE Primary Wing</p>
                                </div>
                            </div>

                            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                                <div className="flex gap-4">
                                    <div className="text-6xl text-secondary/20 leading-none">"</div>
                                    <p>
                                        I feel extremely privileged to serve as the Principal of ICSE Primary Wing. I strongly believe
                                        that every student needs to be given the best quality primary education with a solid foundation
                                        to instill confidence and empower them to be lifelong learners.
                                    </p>
                                </div>
                                <p>
                                    The focus is to inculcate good social and behavioural habits, values and culture. From academics
                                    to co-curricular activities, perseverance and a never-say-die spirit are entrenched in the heart
                                    of every student not only making them good students but honest, humble and brilliant human beings.
                                </p>
                                <p>
                                    In today's dynamic world, a 360 degree development and grooming is of supreme importance and
                                    through our methods, at primary school, we are creating an environment for future leaders,
                                    who possess skills and aptitudes in an array of functional disciplines.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Campus Overview */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                            Our Campus
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Campus Overview</h2>
                        <p className="text-xl text-gray-600">World-class facilities for holistic learning</p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-gradient-to-br from-primary/5 to-blue-50 rounded-3xl p-8 border-2 border-primary/10">
                                <Building2 className="text-primary mb-6" size={48} />
                                <h3 className="text-3xl font-bold text-primary mb-4">Primary Wing Location</h3>
                                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                    The Primary Wing is situated in the Basement floor and 1st Floor in the main campus
                                    of S. Cadambi Vidya Kendra, providing a dedicated and nurturing learning environment for young students.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    {facilities.map((facility, idx) => {
                                        const IconComponent = facility.icon;
                                        return (
                                            <div key={idx} className="bg-white rounded-xl p-4 shadow-md">
                                                <IconComponent className="text-secondary mb-2" size={24} />
                                                <p className="font-bold text-primary text-sm mb-1">{facility.title}</p>
                                                <p className="text-xs text-gray-600">{facility.desc}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-gray-100">
                                <h3 className="text-2xl font-bold text-primary mb-8">Quick Facts</h3>
                                <div className="space-y-6">
                                    {[
                                        { emoji: "🏫", title: "Established", value: "Since 1984" },
                                        { emoji: "📚", title: "Board", value: "CISCE (ICSE) - KA042" },
                                        { emoji: "🎯", title: "Grades", value: "1 to 5" },
                                        { emoji: "👥", title: "Faculty", value: "44+ Expert Teachers" },
                                        { emoji: "🏆", title: "Special Programs", value: "Scouts & Guides, Bal Vikas" },
                                        { emoji: "📖", title: "Resources", value: "Computer Lab, Library, Language Room" }
                                    ].map((fact, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.05 }}
                                            className="flex items-start bg-gradient-to-r from-gray-50 to-white rounded-xl p-4 hover:shadow-md transition-all"
                                        >
                                            <div className="bg-secondary/20 w-12 h-12 rounded-lg flex items-center justify-center mr-4 shrink-0">
                                                <span className="text-2xl">{fact.emoji}</span>
                                            </div>
                                            <div>
                                                <p className="font-bold text-primary mb-1">{fact.title}</p>
                                                <p className="text-gray-600">{fact.value}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-primary to-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Lightbulb className="mx-auto mb-6 text-secondary" size={64} />
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">Join Our Learning Community</h3>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Experience excellence in education and watch your child thrive
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a 
                                href="/icse-primary/admissions"
                                className="bg-secondary hover:bg-secondary/90 text-primary font-bold px-8 py-4 rounded-xl transition-all shadow-lg"
                            >
                                Admissions Open
                            </a>
                            <a 
                                href="/icse-primary/contact"
                                className="bg-white/10 backdrop-blur hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all border-2 border-white/30"
                            >
                                Schedule a Visit
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

          
        </div>
    );
};

export default IcsePrimaryAbout;