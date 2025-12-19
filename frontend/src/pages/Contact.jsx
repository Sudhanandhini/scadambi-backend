import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  GraduationCap, 
  School, 
  Sparkles,
  Send,
  User,
  MessageSquare,
  CheckCircle2
} from 'lucide-react';
import { sendContact } from '../utils/sendContact';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
    const [focusedField, setFocusedField] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await sendContact({
                section: 'contact',
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                subject: formData.subject,
                message: formData.message
            });
            setIsSuccess(true);
            setTimeout(() => {
                setIsSuccess(false);
                setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            }, 3000);
        } catch (err) {
            console.error(err);
            alert('Failed to send message. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    const contactInfo = [
        {
            icon: MapPin,
            title: 'Campus Address',
            content: 'S.Cadambi School Campus, Near Water Tank, Madikeri Road, Gonikoppal-571213',
            color: 'from-[#0F2A4A] to-[#0F2A4A]'
        },
        {
            icon: Phone,
            title: 'Phone',
            content: '+91 8272 236614 / +91 9448 479229',
            color: 'from-[#FDB913] to-[#FDB913]'
        },
        {
            icon: Mail,
            title: 'Email',
            content: 'info@scadambischool.edu.in',
            color: 'from-[#0F2A4A] to-[#0F2A4A]'
        },
        {
            icon: Clock,
            title: 'Office Hours',
            content: 'Mon - Sat: 9:00 AM - 4:00 PM',
            color: 'from-[#FDB913] to-[#FDB913]'
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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Enhanced Hero Section */}
            <section
                ref={heroRef}
                className="relative bg-gradient-to-br from-[#0F2A4A] via-[#1a3a5f] to-[#0F2A4A] text-white py-32 overflow-hidden"
            >
                {/* Animated Background Elements */}
                <motion.div
                    className="absolute inset-0 opacity-20"
                    animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                    style={{
                        backgroundImage: 'radial-gradient(circle at 20% 50%, white 2px, transparent 2px)',
                        backgroundSize: '50px 50px'
                    }}
                />

                <motion.div
                    className="absolute top-10 right-10 w-64 h-64 bg-[#FDB913]/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />

                <motion.div
                    className="absolute bottom-10 left-0 w-96 h-96 bg-[#FDB913]/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: 1
                    }}
                />

                <motion.div
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
                    style={{ y, opacity }}
                >
                    <div className="text-center">
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 15,
                                delay: 0.2
                            }}
                            className="inline-flex items-center bg-[#FDB913] text-[#0F2A4A] px-6 py-2 rounded-full font-semibold mb-6 shadow-lg"
                        >
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            >
                                <Sparkles className="mr-2" size={20} />
                            </motion.div>
                            Our Educational Wings
                        </motion.div>

                        <motion.h1
                            className="text-5xl md:text-6xl font-bold mb-6"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            Get in{' '}
                            <motion.span
                                className="text-[#FDB913]"
                                animate={{
                                    textShadow: [
                                        "0 0 20px rgba(253, 185, 19, 0.5)",
                                        "0 0 40px rgba(253, 185, 19, 0.8)",
                                        "0 0 20px rgba(253, 185, 19, 0.5)"
                                    ]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                Touch
                            </motion.span>
                        </motion.h1>

                        <motion.div
                            className="flex items-center justify-center gap-3 mb-6"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6, type: "spring" }}
                        >
                            <motion.div
                                className="h-1 w-20 bg-[#FDB913] rounded"
                                animate={{ width: ["80px", "100px", "80px"] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                            <div className="h-1 w-12 bg-white rounded" />
                            <motion.div
                                className="h-1 w-20 bg-[#FDB913] rounded"
                                animate={{ width: ["80px", "100px", "80px"] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                            />
                        </motion.div>

                        <motion.p
                            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                        >
                            We'd love to hear from you. Visit us or drop a message.
                        </motion.p>
                    </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                    className="absolute top-25 left-40 hidden lg:block"
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 10, 0]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                >
                    <School className="w-16 h-16 text-[#FDB913]/30" />
                </motion.div>

                <motion.div
                    className="absolute bottom-20 right-20 hidden lg:block"
                    animate={{
                        y: [0, 20, 0],
                        rotate: [0, -10, 0]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: 1
                    }}
                >
                    <GraduationCap className="w-20 h-20 text-[#FDB913]/30" />
                </motion.div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Contact Info Cards */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
                    >
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ 
                                    y: -10,
                                    transition: { duration: 0.3 }
                                }}
                                className="bg-white rounded-2xl shadow-xl overflow-hidden group cursor-pointer"
                            >
                                <div className={`h-2 bg-gradient-to-r ${info.color}`}></div>
                                <div className="p-6">
                                    <motion.div
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                        className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                                    >
                                        <info.icon className="w-7 h-7 text-white" />
                                    </motion.div>
                                    <h3 className="text-lg font-bold text-[#0F2A4A] mb-2 group-hover:text-[#FDB913] transition-colors">
                                        {info.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {info.content}
                                    </p>
                                </div>
                                <div className="h-1 bg-gradient-to-r from-transparent via-[#FDB913] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Contact Form & Map Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
                        >
                            <div className="bg-gradient-to-r from-[#0F2A4A] to-[#1a4d7a] p-8">
                                <div className="flex items-center gap-3 mb-2">
                                    <motion.div
                                        animate={{ rotate: [0, 360] }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        className="w-12 h-12 bg-[#FDB913] rounded-xl flex items-center justify-center shadow-lg"
                                    >
                                        <MessageSquare className="w-6 h-6 text-white" />
                                    </motion.div>
                                    <h2 className="text-3xl font-bold text-white">Send Message</h2>
                                </div>
                                <p className="text-gray-300">We'll get back to you within 24 hours</p>
                            </div>

                            <div className="p-8">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name Input */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <div className="relative">
                                            <motion.div
                                                animate={{
                                                    scale: focusedField === 'name' ? 1 : 0,
                                                    opacity: focusedField === 'name' ? 1 : 0
                                                }}
                                                className="absolute inset-0 bg-gradient-to-r from-[#0F2A4A]/10 to-[#FDB913]/10 rounded-xl"
                                            />
                                            <div className="relative flex items-center">
                                                <User className="absolute left-4 text-gray-400" size={20} />
                                                <input
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocusedField('name')}
                                                    onBlur={() => setFocusedField(null)}
                                                    type="text"
                                                    required
                                                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FDB913] focus:ring-2 focus:ring-[#FDB913]/20 outline-none transition-all"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Email Input */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <div className="relative">
                                            <motion.div
                                                animate={{
                                                    scale: focusedField === 'email' ? 1 : 0,
                                                    opacity: focusedField === 'email' ? 1 : 0
                                                }}
                                                className="absolute inset-0 bg-gradient-to-r from-[#0F2A4A]/10 to-[#FDB913]/10 rounded-xl"
                                            />
                                            <div className="relative flex items-center">
                                                <Mail className="absolute left-4 text-gray-400" size={20} />
                                                <input
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocusedField('email')}
                                                    onBlur={() => setFocusedField(null)}
                                                    type="email"
                                                    required
                                                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FDB913] focus:ring-2 focus:ring-[#FDB913]/20 outline-none transition-all"
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Phone Input */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.25 }}
                                    >
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Phone Number *
                                        </label>
                                        <div className="relative">
                                            <motion.div
                                                animate={{
                                                    scale: focusedField === 'phone' ? 1 : 0,
                                                    opacity: focusedField === 'phone' ? 1 : 0
                                                }}
                                                className="absolute inset-0 bg-gradient-to-r from-[#0F2A4A]/10 to-[#FDB913]/10 rounded-xl"
                                            />
                                            <div className="relative flex items-center">
                                                <Phone className="absolute left-4 text-gray-400" size={20} />
                                                <input
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocusedField('phone')}
                                                    onBlur={() => setFocusedField(null)}
                                                    type="tel"
                                                    required
                                                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FDB913] focus:ring-2 focus:ring-[#FDB913]/20 outline-none transition-all"
                                                    placeholder="+91 98765 43210"
                                                />
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Subject Input */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Subject *
                                        </label>
                                        <div className="relative">
                                            <motion.div
                                                animate={{
                                                    scale: focusedField === 'subject' ? 1 : 0,
                                                    opacity: focusedField === 'subject' ? 1 : 0
                                                }}
                                                className="absolute inset-0 bg-gradient-to-r from-[#0F2A4A]/10 to-[#FDB913]/10 rounded-xl"
                                            />
                                            <input
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                onFocus={() => setFocusedField('subject')}
                                                onBlur={() => setFocusedField(null)}
                                                type="text"
                                                required
                                                className="relative w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FDB913] focus:ring-2 focus:ring-[#FDB913]/20 outline-none transition-all"
                                                placeholder="Admission Inquiry"
                                            />
                                        </div>
                                    </motion.div>

                                    {/* Message Input */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Message *
                                        </label>
                                        <div className="relative">
                                            <motion.div
                                                animate={{
                                                    scale: focusedField === 'message' ? 1 : 0,
                                                    opacity: focusedField === 'message' ? 1 : 0
                                                }}
                                                className="absolute inset-0 bg-gradient-to-r from-[#0F2A4A]/10 to-[#FDB913]/10 rounded-xl"
                                            />
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                onFocus={() => setFocusedField('message')}
                                                onBlur={() => setFocusedField(null)}
                                                required
                                                className="relative w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FDB913] focus:ring-2 focus:ring-[#FDB913]/20 outline-none transition-all h-32 resize-none"
                                                placeholder="Tell us how we can help you..."
                                            ></textarea>
                                        </div>
                                    </motion.div>

                                    {/* Submit Button */}
                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting || isSuccess}
                                        whileHover={{ scale: isSubmitting || isSuccess ? 1 : 1.02 }}
                                        whileTap={{ scale: isSubmitting || isSuccess ? 1 : 0.98 }}
                                        className={`w-full py-4 rounded-xl font-bold text-lg shadow-xl transition-all flex items-center justify-center gap-3 ${
                                            isSuccess 
                                                ? 'bg-green-500 text-white' 
                                                : 'bg-gradient-to-r from-[#0F2A4A] to-[#1a4d7a] text-white hover:shadow-2xl'
                                        }`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                    className="w-6 h-6 border-3 border-white border-t-transparent rounded-full"
                                                />
                                                Sending...
                                            </>
                                        ) : isSuccess ? (
                                            <>
                                                <CheckCircle2 className="w-6 h-6" />
                                                Message Sent!
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <Send className="w-5 h-5" />
                                            </>
                                        )}
                                    </motion.button>
                                </form>
                            </div>
                        </motion.div>

                        {/* Map Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden h-full">
                                <div className="bg-gradient-to-r from-[#0F2A4A] to-[#1a4d7a] p-6">
                                    <div className="flex items-center gap-3">
                                        <motion.div
                                            animate={{ 
                                                y: [0, -5, 0],
                                            }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="w-12 h-12 bg-[#FDB913] rounded-xl flex items-center justify-center shadow-lg"
                                        >
                                            <MapPin className="w-6 h-6 text-white" />
                                        </motion.div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-white">Find Us Here</h2>
                                            <p className="text-gray-300 text-sm">Visit our campus</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-[500px] lg:h-[calc(100%-88px)]">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.003673091571!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1633072000000!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        title="Google Map"
                                    ></iframe>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Quick Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mt-20 bg-gradient-to-br from-[#0F2A4A] via-[#1a4d7a] to-[#0F2A4A] rounded-3xl shadow-2xl overflow-hidden"
                    >
                        <div className="relative p-12">
                            <div className="absolute inset-0">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#FDB913] opacity-10 rounded-full blur-3xl"></div>
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500 opacity-10 rounded-full blur-3xl"></div>
                            </div>
                            <div className="relative text-center">
                                <motion.div
                                    animate={{ 
                                        scale: [1, 1.1, 1],
                                    }}
                                    transition={{ 
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                    }}
                                    className="inline-flex items-center justify-center w-16 h-16 bg-[#FDB913] rounded-2xl mb-6 shadow-xl"
                                >
                                    <Sparkles className="w-8 h-8 text-white" />
                                </motion.div>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    Join Our Community
                                </h3>
                                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                                    Become part of a legacy of excellence in education
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                                    {[
                                        { number: '25+', label: 'Years Legacy' },
                                        { number: '2000+', label: 'Students' },
                                        { number: '100+', label: 'Teachers' },
                                        { number: '95%', label: 'Success Rate' }
                                    ].map((stat, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
                                        >
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 + 0.2 }}
                                                className="text-3xl md:text-4xl font-bold text-[#FDB913] mb-2"
                                            >
                                                {stat.number}
                                            </motion.div>
                                            <div className="text-gray-300 text-sm">{stat.label}</div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;