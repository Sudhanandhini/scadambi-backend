import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Users, Sparkles, Heart, Brain, Target, CheckCircle, Lightbulb, Award } from 'lucide-react';

const PrePrimaryAcademic = () => {
    const subjects = [
        { name: "Literacy", icon: "📚", desc: "Alphabets, words, and reading skills", color: "from-primary/10 to-primary/5" },
        { name: "Numeracy", icon: "🔢", desc: "Numbers, counting, and math basics", color: "from-secondary/10 to-secondary/5" },
        { name: "General Awareness", icon: "🌍", desc: "World around us and environment", color: "from-primary/10 to-primary/5" },
        { name: "Environmental Science", icon: "🌱", desc: "Nature and sustainable living", color: "from-secondary/10 to-secondary/5" },
        { name: "Social Development", icon: "👫", desc: "Making friends and social skills", color: "from-primary/10 to-primary/5" },
        { name: "Emotional Development", icon: "❤️", desc: "Understanding and expressing feelings", color: "from-secondary/10 to-secondary/5" },
        { name: "Physical Development", icon: "🤸", desc: "Motor skills and physical activities", color: "from-primary/10 to-primary/5" },
        { name: "Art & Craft", icon: "🎨", desc: "Creative expression and fine motor", color: "from-secondary/10 to-secondary/5" },
        { name: "Storytelling", icon: "📖", desc: "Language and imagination building", color: "from-primary/10 to-primary/5" },
        { name: "Rhymes", icon: "🎵", desc: "Musical rhythm and language development", color: "from-secondary/10 to-secondary/5" }
    ];

    const programs = [
        {
            name: "Pre-KG",
            age: "3-4 years",
            focus: "Foundation stage with focus on play, exploration, and social skills",
            features: ["Play-based learning", "Social skills development", "Basic motor skills"]
        },
        {
            name: "LKG",
            age: "4-5 years",
            focus: "Lower Kindergarten with basic literacy and numeracy introduction",
            features: ["Introduction to alphabets", "Number recognition", "Creative activities"]
        },
        {
            name: "UKG",
            age: "5-6 years",
            focus: "Upper Kindergarten preparing children for formal schooling",
            features: ["Reading & writing readiness", "Advanced numeracy", "School preparation"]
        }
    ];

    const teachingMethodsFeatures = [
        { icon: Target, text: "Daily teaching lesson plans for holistic development" },
        { icon: Heart, text: "Hands-on experience for comprehensive growth" },
        { icon: Brain, text: "Play-based and child-centered curriculum" },
        { icon: Sparkles, text: "Joyful learning experience for all children" },
        { icon: Users, text: "Role play and fancy dress activities" },
        { icon: Award, text: "Building confidence and reducing stage fear" }
    ];

    return (
        <div className="pt-20 min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-primary to-primary/90 text-white py-20 mt-16">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm">
                            Academic Excellence
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold font-serif mt-3 mb-6">
                            Academic Information
                        </h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                            Play-based curriculum for Pre-KG, LKG & UKG fostering holistic development
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Curriculum Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl p-12 border-2 border-gray-100">
                        <div className="flex items-center mb-8">
                            <BookOpen className="text-secondary mr-4" size={40} />
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif">
                                    Curriculum
                                </h2>
                                <p className="text-gray-600 mt-2">Pre-School Curriculum - (PRE-KG, LKG and UKG)</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-secondary">
                            <p className="text-gray-700 text-lg leading-relaxed">
                                The curriculum follows a <span className="font-bold text-primary">holistic approach</span> where practitioners support and scaffold the child's learning through enriched play experiences. The pedagogical and transactional processes/strategies suggested in the curriculum include engaging and enjoyable play activities and learning experiences that awaken/ignite the child's thinking process and help build their confidence.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed mt-4">
                                The activities and play-based experiences connect young children's fascination with learning in every domain so that they can enjoy, learn and make the most of their time in preschool.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* Programs */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="text-center mb-12">
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm">Age Groups</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mt-3 mb-4">
                            Our Programs
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Carefully designed programs for each developmental stage
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {programs.map((program, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all group border-2 border-gray-100 hover:border-secondary"
                            >
                                <div className="bg-gradient-to-br from-primary to-primary/90 p-8 text-white relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full -mr-16 -mt-16"></div>
                                    <div className="relative z-10">
                                        <h3 className="text-4xl font-bold mb-2">{program.name}</h3>
                                        <p className="text-secondary text-lg font-semibold">{program.age}</p>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">{program.focus}</p>
                                    <div className="space-y-3">
                                        {program.features.map((feature, fIdx) => (
                                            <div key={fIdx} className="flex items-start">
                                                <CheckCircle className="text-secondary mr-3 flex-shrink-0 mt-1" size={20} />
                                                <span className="text-gray-600">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Subjects Offered */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="text-center mb-12">
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm">Foundational Academics</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mt-3 mb-4">
                            Subjects Offered
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Comprehensive learning areas covering all aspects of child development
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {subjects.map((subject, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className={`bg-gradient-to-br ${subject.color} rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-all hover:scale-105 border-2 border-transparent hover:border-secondary`}
                            >
                                <div className="text-5xl mb-4">{subject.icon}</div>
                                <h3 className="text-xl font-bold text-primary mb-2">{subject.name}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{subject.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Teaching Methods */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="bg-gradient-to-br from-primary to-primary/90 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full -mr-32 -mt-32"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -ml-48 -mb-48"></div>
                        
                        <div className="relative z-10">
                            <div className="flex items-center mb-8">
                                <Lightbulb className="text-secondary mr-4" size={40} />
                                <div>
                                    <h2 className="text-4xl md:text-5xl font-bold font-serif">
                                        Teaching Methods
                                    </h2>
                                    <p className="text-white/90 mt-2 text-lg">Our approach to early childhood education</p>
                                </div>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
                                <p className="text-white/95 text-lg leading-relaxed">
                                    We have daily teaching lesson plans which enable us to nurture the child in the right direction by giving hands-on experience to foster holistic development with integral approach, helping the children to grow personally, emotionally, socially, physically and intellectually through play-based and child-centered curriculum.
                                </p>
                                <p className="text-white/95 text-lg leading-relaxed mt-4">
                                    The curriculum aims to ensure that learning is a joyful experience for all children and that the children are able to understand not only what they learn, but also how this learning is relevant in their lives, both present and future.
                                </p>
                                <p className="text-white/95 text-lg leading-relaxed mt-4">
                                    Many activities like role play, fancy dress etc., are designed to build the child's confidence level and help them to come out of the stage fear. Classroom environment is created in such a way that children can approach the teacher without any fear to clarify their doubts.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {teachingMethodsFeatures.map((feature, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all"
                                    >
                                        <feature.icon className="text-secondary mb-4" size={32} />
                                        <p className="text-white font-medium">{feature.text}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* School Timings */}
                {/* <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="text-center mb-12">
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm">Schedule</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mt-3 mb-4">
                            School Timings
                        </h2>
                    </div>
                    <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-3xl p-12 border-2 border-secondary/20 shadow-xl">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
                            >
                                <div className="bg-gradient-to-br from-secondary to-secondary/80 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <Clock className="text-primary" size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-3">Working Hours</h3>
                                <p className="text-gray-700 text-xl font-semibold">8:45 AM - 2:30 PM</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
                            >
                                <div className="bg-gradient-to-br from-secondary to-secondary/80 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <Users className="text-primary" size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-3">Working Days</h3>
                                <p className="text-gray-700 text-xl font-semibold">Monday - Saturday</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
                            >
                                <div className="bg-gradient-to-br from-secondary to-secondary/80 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <Heart className="text-primary" size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-3">Class Size</h3>
                                <p className="text-gray-700 text-xl font-semibold">Small Groups</p>
                            </motion.div>
                        </div>
                    </div>
                </motion.section> */}
            </div>
        </div>
    );
};

export default PrePrimaryAcademic;