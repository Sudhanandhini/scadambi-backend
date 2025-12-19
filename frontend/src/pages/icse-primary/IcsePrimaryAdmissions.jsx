import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, Phone, Mail, Clock, MapPin, Download, AlertCircle, Users, Calendar, DollarSign, BookOpen, GraduationCap, ArrowRight } from 'lucide-react';
import IcsePrimaryHeader from './IcsePrimaryHeader';
import IcsePrimaryFooter from './IcsePrimaryFooter';

const IcsePrimaryAdmissions = () => {
    const [activeTab, setActiveTab] = useState('process');

    const admissionSteps = [
        { 
            step: "1", 
            title: "Inquiry", 
            description: "Contact the school office for admission information and schedule a campus visit",
            icon: Phone,
            color: "blue"
        },
        { 
            step: "2", 
            title: "Application", 
            description: "Fill out the admission application form with accurate details",
            icon: FileText,
            color: "green"
        },
        { 
            step: "3", 
            title: "Documents", 
            description: "Submit all required documents and previous school records",
            icon: CheckCircle,
            color: "purple"
        },
        { 
            step: "4", 
            title: "Assessment", 
            description: "Student assessment and parent-teacher interaction session",
            icon: Users,
            color: "orange"
        },
        { 
            step: "5", 
            title: "Enrollment", 
            description: "Complete enrollment formalities and fee payment",
            icon: GraduationCap,
            color: "pink"
        }
    ];

    const requiredDocs = [
        { doc: "Birth Certificate", detail: "Original for verification", icon: FileText },
        { doc: "Transfer Certificate", detail: "From previous school (if applicable)", icon: FileText },
        { doc: "Aadhar Card", detail: "Copy of student and both parents", icon: FileText },
        { doc: "Photographs", detail: "Recent passport size (4 copies)", icon: FileText },
        { doc: "Address Proof", detail: "Utility bill or rent agreement", icon: FileText },
        { doc: "Medical Certificate", detail: "Fitness certificate from registered doctor", icon: FileText }
    ];

    const admissionInfo = [
        { 
            title: "Age Criteria", 
            content: "As per ICSE guidelines for respective grades",
            icon: Calendar,
            color: "blue"
        },
        { 
            title: "Fee Structure", 
            content: "Competitive fee structure with flexible payment options",
            icon: DollarSign,
            color: "green"
        },
        { 
            title: "Class Strength", 
            content: "Limited seats per class for personalized attention",
            icon: Users,
            color: "purple"
        },
        { 
            title: "Academic Year", 
            content: "Admissions open throughout the year (subject to availability)",
            icon: BookOpen,
            color: "orange"
        }
    ];

    const getColorClasses = (color) => {
        const colors = {
            blue: "from-blue-500 to-blue-700 bg-blue-100 text-blue-600",
            green: "from-green-500 to-green-700 bg-green-100 text-green-600",
            purple: "from-purple-500 to-purple-700 bg-purple-100 text-purple-600",
            orange: "from-orange-500 to-orange-700 bg-orange-100 text-orange-600",
            pink: "from-pink-500 to-pink-700 bg-pink-100 text-pink-600"
        };
        return colors[color] || colors.blue;
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
                            <GraduationCap className="w-20 h-20 text-white/90" />
                        </motion.div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">Admissions Open</h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                            Join S. Cadambi ICSE Primary Wing for quality education and holistic development
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a 
                                href="#contact"
                                className="bg-secondary hover:bg-secondary/90 text-primary font-bold px-8 py-4 rounded-xl transition-all inline-flex items-center gap-2 shadow-lg"
                            >
                                Apply Now
                                <ArrowRight size={20} />
                            </a>
                            <a 
                                href="#process"
                                className="bg-white/10 backdrop-blur hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all inline-flex items-center gap-2 border-2 border-white/30"
                            >
                                Learn More
                                <ArrowRight size={20} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Quick Info Cards */}
            <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {admissionInfo.map((info, idx) => {
                            const IconComponent = info.icon;
                            const colorInfo = getColorClasses(info.color);
                            
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100"
                                >
                                    <div className={`${colorInfo.split(' ')[1]} ${colorInfo.split(' ')[2]} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                                        <IconComponent size={28} />
                                    </div>
                                    <h3 className="text-lg font-bold text-primary mb-2">{info.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{info.content}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Admission Process */}
            <section id="process" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true }} 
                        className="text-center mb-16"
                    >
                        <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                            Step by Step
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Admission Process</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Simple and transparent steps to enroll your child
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {admissionSteps.map((step, idx) => {
                            const IconComponent = step.icon;
                            const colorInfo = getColorClasses(step.color);
                            
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ y: -10 }}
                                    className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100"
                                >
                                    {/* Step Number */}
                                    <div className="absolute -top-4 -right-4 bg-gradient-to-br from-primary to-blue-900 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                                        {step.step}
                                    </div>

                                    {/* Icon */}
                                    <div className={`${colorInfo.split(' ')[1]} ${colorInfo.split(' ')[2]} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                                        <IconComponent size={32} />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-primary mb-3 text-center">{step.title}</h3>
                                    <p className="text-gray-600 text-sm text-center leading-relaxed">{step.description}</p>

                                    {/* Arrow for desktop */}
                                    {idx < admissionSteps.length - 1 && (
                                        <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                                            <div className="bg-secondary text-primary w-6 h-6 rounded-full flex items-center justify-center">
                                                <ArrowRight size={16} />
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Documents and Contact Section */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Required Documents */}
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }} 
                            whileInView={{ opacity: 1, x: 0 }} 
                            viewport={{ once: true }}
                        >
                            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-gray-100">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white w-16 h-16 rounded-2xl flex items-center justify-center">
                                        <FileText size={32} />
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-bold text-primary">Required Documents</h3>
                                        <p className="text-gray-600">Please prepare these documents</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {requiredDocs.map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.05 }}
                                            className="flex items-start bg-gradient-to-r from-gray-50 to-white rounded-xl p-4 hover:shadow-md transition-all border border-gray-100"
                                        >
                                            <CheckCircle className="text-green-500 mr-4 mt-1 shrink-0" size={24} />
                                            <div className="flex-1">
                                                <p className="font-bold text-primary mb-1">{item.doc}</p>
                                                <p className="text-sm text-gray-600">{item.detail}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="mt-8 bg-amber-50 border-2 border-amber-200 rounded-xl p-6">
                                    <div className="flex items-start gap-3">
                                        <AlertCircle className="text-amber-600 shrink-0" size={24} />
                                        <div>
                                            <p className="font-bold text-amber-900 mb-1">Important Note</p>
                                            <p className="text-sm text-amber-800">All documents should be self-attested. Original documents will be verified and returned.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Information */}
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }} 
                            whileInView={{ opacity: 1, x: 0 }} 
                            viewport={{ once: true }}
                        >
                            <div id="contact" className="bg-gradient-to-br from-primary to-blue-900 text-white rounded-3xl p-8 md:p-10 shadow-2xl">
                                <h3 className="text-3xl font-bold mb-8">Contact Admissions Office</h3>
                                
                                <div className="space-y-6 mb-8">
                                    <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-secondary/20 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                                                <Phone className="text-secondary" size={24} />
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-bold text-lg mb-2">Phone</p>
                                                <p className="text-white/90">Contact school office for inquiries</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-secondary/20 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                                                <Mail className="text-secondary" size={24} />
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-bold text-lg mb-2">Email</p>
                                                <a 
                                                    href="mailto:scvk123@rediffmail.com" 
                                                    className="text-secondary hover:underline text-lg"
                                                >
                                                    scvk123@rediffmail.com
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-secondary/20 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                                                <MapPin className="text-secondary" size={24} />
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-bold text-lg mb-2">Address</p>
                                                <p className="text-white/90">
                                                    # 1025, 10th Main Road, 2nd Cross Road,<br />
                                                    3rd Stage, Basaveshwaranagar,<br />
                                                    Bangalore - 560079
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-secondary/20 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                                                <Clock className="text-secondary" size={24} />
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-bold text-lg mb-2">Office Hours</p>
                                                <p className="text-white/90">
                                                    Mon - Fri: 8:45 AM - 2:30 PM<br />
                                                    Sat: 8:45 AM - 11:40 AM<br />
                                                    Every 2nd Saturday: Holiday
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <a 
                                    href="/contact"
                                    className="block w-full bg-secondary hover:bg-secondary/90 text-primary font-bold px-6 py-4 rounded-xl transition-all text-center shadow-lg"
                                >
                                    Schedule a Visit
                                </a>
                            </div>
                        </motion.div>
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
                            <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Begin Your Journey?</h3>
                            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                                Join us in providing your child with a strong foundation for lifelong learning
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <a 
                                    href="mailto:scvk123@rediffmail.com"
                                    className="bg-secondary hover:bg-secondary/90 text-primary font-bold px-8 py-4 rounded-xl transition-all inline-flex items-center gap-2 shadow-lg"
                                >
                                    <Mail size={20} />
                                    Email Us
                                </a>
                                <a 
                                    href="/contact"
                                    className="bg-white/10 backdrop-blur hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all inline-flex items-center gap-2 border-2 border-white/30"
                                >
                                    <MapPin size={20} />
                                    Visit Campus
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            
        </div>
    );
};

export default IcsePrimaryAdmissions;