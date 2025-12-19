import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Award, BookOpen, GraduationCap, Star, Trophy, Target, Briefcase } from 'lucide-react';
import IcsePrimaryHeader from './IcsePrimaryHeader';
import IcsePrimaryFooter from './IcsePrimaryFooter';

const IcsePrimaryFaculty = () => {
    const [activeSubject, setActiveSubject] = useState(null);

    const leadership = [
        {
            name: "ROHINI GOPAL",
            position: "Principal",
            subject: "English",
            icon: "👩‍💼",
            color: "blue"
        },
        {
            name: "USHA S",
            position: "Vice Principal",
            subject: "English",
            icon: "👩‍🏫",
            color: "purple"
        },
        {
            name: "PRATHIMA S",
            position: "Vice Principal",
            subject: "Social Studies and Computer Science",
            icon: "👩‍🏫",
            color: "green"
        }
    ];

    const facultyBySubject = {
        "English": {
            teachers: [
                "ROHINI GOPAL", "USHA S", "NAGALAKSHMI N", "PADMA B S", "Komala G V",
                "RAJESWARI R", "SOUMYA B S", "BINDU Y R", "H S Geetha", "ARPITHA",
                "SHASHIKALA N", "PUSHPALATHA P", "SHALINI C N"
            ],
            icon: BookOpen,
            color: "blue"
        },
        "Mathematics": {
            teachers: [
                "SNEHA M S", "KAVYA SRINIVAS MURTHY PASTAY", "K S USHA Gowrish",
                "KAVITHA G", "SAMYUKTHA K P", "HARSHAVATHI M", "MAMATHA BM",
                "LAKSHMI K", "SUDHA S RAO"
            ],
            icon: Target,
            color: "purple"
        },
        "Science": {
            teachers: [
                "PAVITA T", "SHWETHA N", "Ashwini H", "SHRUTHI V", "VIMALA G",
                "Komala G V"
            ],
            icon: GraduationCap,
            color: "green"
        },
        "Social Studies": {
            teachers: [
                "PRATHIMA S", "SHUBHA S HEGDE", "DIVYA S", "PRATHIBHA KUMARI U",
                "RAJANI H R"
            ],
            icon: Users,
            color: "orange"
        },
        "Languages": {
            teachers: [
                "SUMATHI R (Kannada)", "V VARALAKSHMI (Hindi)", "KALPANA RAJU (Kannada)",
                "DHANALAKSHMI M (Kannada)", "SHRUTHI N S (Kannada)", "R RADHA (Hindi)",
                "ROOPASHREE BR (Kannada)", "VASANTHI S K (Hindi)"
            ],
            icon: BookOpen,
            color: "pink"
        },
        "Computer Science": {
            teachers: [
                "PRATHIMA S", "SNEHA M S", "KAVYA SRINIVAS MURTHY PASTAY",
                "SHRUTHI V", "DIVYA S", "KAVITHA G", "BINDU Y R", "SAMYUKTHA K P"
            ],
            icon: Briefcase,
            color: "indigo"
        },
        "Physical Education": {
            teachers: [
                "SIDDAPPA S BEKKANAVAR", "B YASHASWINI", "SACHIN", "PONNURU DEVARAJA"
            ],
            icon: Trophy,
            color: "red"
        }
    };

    const getColorClasses = (color) => {
        const colors = {
            blue: "bg-blue-100 text-blue-600 border-blue-200",
            purple: "bg-purple-100 text-purple-600 border-purple-200",
            green: "bg-green-100 text-green-600 border-green-200",
            orange: "bg-orange-100 text-orange-600 border-orange-200",
            pink: "bg-pink-100 text-pink-600 border-pink-200",
            indigo: "bg-indigo-100 text-indigo-600 border-indigo-200",
            red: "bg-red-100 text-red-600 border-red-200"
        };
        return colors[color] || colors.blue;
    };

    const getGradientClasses = (color) => {
        const gradients = {
            blue: "from-blue-500 to-blue-700",
            purple: "from-purple-500 to-purple-700",
            green: "from-green-500 to-green-700",
            orange: "from-orange-500 to-orange-700",
            pink: "from-pink-500 to-pink-700",
            indigo: "from-indigo-500 to-indigo-700",
            red: "from-red-500 to-red-700"
        };
        return gradients[color] || gradients.blue;
    };

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
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Faculty</h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            44+ dedicated and experienced educators committed to nurturing young minds and fostering academic excellence
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-gradient-to-br from-primary to-blue-900 text-white rounded-3xl p-8 text-center shadow-2xl"
                        >
                            <Users className="mx-auto mb-4 text-secondary" size={56} />
                            <div className="text-6xl font-bold mb-2">44+</div>
                            <p className="text-xl font-semibold">Qualified Teachers</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-gradient-to-br from-secondary to-secondary/80 text-primary rounded-3xl p-8 text-center shadow-2xl"
                        >
                            <BookOpen className="mx-auto mb-4" size={56} />
                            <div className="text-6xl font-bold mb-2">7</div>
                            <p className="text-xl font-semibold">Subject Departments</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-gradient-to-br from-green-500 to-green-700 text-white rounded-3xl p-8 text-center shadow-2xl"
                        >
                            <Award className="mx-auto mb-4" size={56} />
                            <div className="text-6xl font-bold mb-2">40+</div>
                            <p className="text-xl font-semibold">Years of Excellence</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                            Our Leadership
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                            Leadership Team
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Visionary leaders guiding our school towards academic excellence and holistic development
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {leadership.map((member, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all text-center border-2 border-gray-100"
                            >
                                <div className="relative inline-block mb-6">
                                    <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${getGradientClasses(member.color)} flex items-center justify-center text-6xl shadow-xl`}>
                                        {member.icon}
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 bg-secondary text-primary w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                                        <Star size={20} fill="currentColor" />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-2">{member.name}</h3>
                                <div className={`inline-block px-4 py-2 rounded-full ${getColorClasses(member.color)} font-semibold mb-3 border-2`}>
                                    {member.position}
                                </div>
                                <p className="text-gray-600 font-medium">{member.subject}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Faculty by Subject */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                            Our Departments
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                            Department-wise Faculty
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Expert teachers across all subjects, dedicated to providing quality education and personalized attention
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {Object.entries(facultyBySubject).map(([subject, data], idx) => {
                            const IconComponent = data.icon;
                            const isExpanded = activeSubject === subject;
                            
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    whileHover={{ y: -5 }}
                                    className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border-2 border-gray-100"
                                >
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-4">
                                            <div className={`${getColorClasses(data.color)} w-14 h-14 rounded-xl flex items-center justify-center border-2`}>
                                                <IconComponent size={28} />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-primary">{subject}</h3>
                                                <p className="text-sm text-gray-500 font-semibold">{data.teachers.length} Faculty Members</p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => setActiveSubject(isExpanded ? null : subject)}
                                            className={`${getColorClasses(data.color)} w-10 h-10 rounded-full flex items-center justify-center transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                    </div>

                                    <motion.div
                                        initial={false}
                                        animate={{ height: isExpanded ? 'auto' : '200px' }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <ul className="space-y-3">
                                            {data.teachers.map((teacher, tIdx) => (
                                                <motion.li
                                                    key={tIdx}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: tIdx * 0.03 }}
                                                    className="flex items-center bg-gray-50 rounded-xl p-3 hover:bg-gray-100 transition-colors"
                                                >
                                                    <div className={`${getColorClasses(data.color)} w-8 h-8 rounded-full flex items-center justify-center mr-3 shrink-0 border`}>
                                                        <Award size={16} />
                                                    </div>
                                                    <span className="text-gray-700 font-medium">{teacher}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </motion.div>

                                    {!isExpanded && data.teachers.length > 5 && (
                                        <button
                                            onClick={() => setActiveSubject(subject)}
                                            className={`mt-4 ${getColorClasses(data.color)} px-4 py-2 rounded-lg font-semibold transition-all hover:scale-105 border-2`}
                                        >
                                            View All {data.teachers.length} Teachers
                                        </button>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-primary to-blue-900 text-white rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-10 right-10 w-32 h-32 border-4 border-white rounded-full"></div>
                            <div className="absolute bottom-10 left-10 w-24 h-24 border-4 border-white rounded-full"></div>
                        </div>
                        <div className="relative z-10">
                            <GraduationCap className="mx-auto mb-6 text-secondary" size={64} />
                            <h3 className="text-3xl md:text-4xl font-bold mb-4">Join Our Teaching Community</h3>
                            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                                We're always looking for passionate educators to join our team and make a difference in students' lives
                            </p>
                            <a 
                                href="/contact"
                                className="bg-secondary hover:bg-secondary/90 text-primary font-bold px-8 py-4 rounded-xl transition-all inline-flex items-center gap-2 shadow-lg"
                            >
                                <Users size={20} />
                                Contact Us
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

         
        </div>
    );
};

export default IcsePrimaryFaculty;