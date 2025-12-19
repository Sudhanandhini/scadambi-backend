import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, Send, Facebook, CheckCircle, ArrowRight, User, MessageSquare, Baby } from 'lucide-react';
import { sendContact } from '../../utils/sendContact';

const PlaySchoolContact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        childAge: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await sendContact({
                section: 'play-school',
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                message: formData.message,
                extra: { childAge: formData.childAge }
            });
            setSubmitted(true);
            setFormData({ name: '', email: '', phone: '', childAge: '', message: '' });
            setTimeout(() => setSubmitted(false), 3000);
        } catch (err) {
            console.error(err);
            alert('Failed to send message. Please try again later.');
        }
    };

    const contactInfo = [
        {
            icon: <MapPin className="w-8 h-8" />,
            title: "Address",
            content: "#44, 1st Main, Maruthi Extension, Bangalore - 560021",
            link: "https://maps.google.com/maps?q=12.998743%2C77.5633808&z=17&hl=en"
        },
        {
            icon: <Phone className="w-8 h-8" />,
            title: "Phone",
            content: "080 23528888      ",
            link: "tel:08023528888"
        },
        {
            icon: <Mail className="w-8 h-8" />,
            title: "Email",
            content: "Shishuchaitanya2013@gmail.com",
            link: "mailto:Shishuchaitanya2013@gmail.com"
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: "Working Hours",
            content: "Monday - Friday: 9:00 AM - 2:30 PM",
            link: null
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
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
                                <Mail className="w-16 h-16 text-[#0F2A4A]" />
                            </div>
                        </motion.div>
                        
                        <h1 className="text-6xl font-bold mb-6">Contact Us</h1>
                        
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "200px" }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="h-1 bg-[#FDB913] mx-auto mb-8"
                        ></motion.div>
                        
                        <p className="text-2xl text-[#FDB913] font-semibold mb-4">Get in Touch</p>
                        <p className="text-xl max-w-4xl mx-auto text-white/90 leading-relaxed">
                            We'd love to hear from you! Reach out for admissions, inquiries, or to schedule a campus visit
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Information Cards */}
            <section className="py-20 -mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 "
                    >
                        {contactInfo.map((info, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="relative group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#FDB913] to-yellow-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                                <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all text-center border-2 border-transparent group-hover:border-[#FDB913]">
                                    <motion.div
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                        className="bg-gradient-to-br from-[#0F2A4A] to-[#1a4070] text-[#FDB913] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                                    >
                                        {info.icon}
                                    </motion.div>
                                    <h3 className="text-xl font-bold text-[#0F2A4A] mb-3">{info.title}</h3>
                                    {info.link ? (
                                        <a
                                            href={info.link}
                                            target={info.link.startsWith('http') ? '_blank' : undefined}
                                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                            className="text-gray-600 hover:text-[#FDB913] transition-colors break-words"
                                        >
                                            {info.content}
                                        </a>
                                    ) : (
                                        <p className="text-gray-600">{info.content}</p>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Contact Form & Map */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-2xl border-2 border-[#FDB913]/20">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="bg-[#FDB913] rounded-full p-4">
                                        <MessageSquare className="w-8 h-8 text-[#0F2A4A]" />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold text-[#0F2A4A]">Send us a Message</h2>
                                        <p className="text-gray-600">We'll get back to you soon</p>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        <label className="block text-[#0F2A4A] font-bold mb-2 flex items-center gap-2">
                                            <User className="w-5 h-5 text-[#FDB913]" />
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FDB913] focus:border-[#FDB913] transition-all"
                                            placeholder="Enter your name"
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <label className="block text-[#0F2A4A] font-bold mb-2 flex items-center gap-2">
                                            <Mail className="w-5 h-5 text-[#FDB913]" />
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FDB913] focus:border-[#FDB913] transition-all"
                                            placeholder="your.email@example.com"
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <label className="block text-[#0F2A4A] font-bold mb-2 flex items-center gap-2">
                                            <Phone className="w-5 h-5 text-[#FDB913]" />
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            required
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FDB913] focus:border-[#FDB913] transition-all"
                                            placeholder="+91 XXXXX XXXXX"
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <label className="block text-[#0F2A4A] font-bold mb-2 flex items-center gap-2">
                                            <Baby className="w-5 h-5 text-[#FDB913]" />
                                            Child's Age
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.childAge}
                                            onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                                            className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FDB913] focus:border-[#FDB913] transition-all"
                                            placeholder="e.g., 3 years"
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <label className="block text-[#0F2A4A] font-bold mb-2 flex items-center gap-2">
                                            <MessageSquare className="w-5 h-5 text-[#FDB913]" />
                                            Your Message *
                                        </label>
                                        <textarea
                                            required
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            rows="4"
                                            className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FDB913] focus:border-[#FDB913] transition-all resize-none"
                                            placeholder="Tell us about your inquiry..."
                                        ></textarea>
                                    </motion.div>

                                    <motion.button
                                        type="submit"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full bg-gradient-to-r from-[#FDB913] to-yellow-500 hover:from-yellow-500 hover:to-[#FDB913] text-[#0F2A4A] font-bold px-8 py-5 rounded-xl transition-all flex items-center justify-center shadow-lg text-lg"
                                    >
                                        {submitted ? (
                                            <>
                                                <CheckCircle className="mr-2" size={24} />
                                                Message Sent!
                                            </>
                                        ) : (
                                            <>
                                                <Send className="mr-2" size={24} />
                                                Send Message
                                            </>
                                        )}
                                    </motion.button>
                                </form>
                            </div>
                        </motion.div>

                        {/* Map & Social */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            {/* Map */}
                            <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-[#FDB913]/20">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="bg-[#FDB913] rounded-full p-4">
                                        <MapPin className="w-8 h-8 text-[#0F2A4A]" />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold text-[#0F2A4A]">Visit Our Campus</h2>
                                        <p className="text-gray-600">We'd love to show you around</p>
                                    </div>
                                </div>

                                <div className="aspect-video rounded-2xl overflow-hidden mb-6 border-4 border-[#0F2A4A]">
                                    <iframe
                                        src="https://maps.google.com/maps?q=12.998743,77.5633808&z=15&output=embed"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>

                                <motion.a
                                    href="https://maps.google.com/maps?q=12.998743%2C77.5633808&z=17&hl=en"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center bg-[#0F2A4A] hover:bg-[#1a4070] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg"
                                >
                                    <MapPin className="mr-2" size={20} />
                                    Get Directions
                                    <ArrowRight className="ml-2" size={20} />
                                </motion.a>
                            </div>

                            {/* Social Media */}
                            <div className="relative overflow-hidden rounded-3xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#0F2A4A] via-[#1a4070] to-[#0F2A4A]"></div>
                                <div className="absolute inset-0 opacity-10">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#FDB913] rounded-full blur-3xl"></div>
                                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FDB913] rounded-full blur-3xl"></div>
                                </div>
                                
                                <div className="relative p-8 text-white">
                                    <div className="flex items-center gap-4 mb-6">
                                        <motion.div
                                            animate={{
                                                rotate: [0, 10, -10, 0]
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                            className="bg-[#FDB913] rounded-full p-4"
                                        >
                                            <Facebook className="w-8 h-8 text-[#0F2A4A]" />
                                        </motion.div>
                                        <div>
                                            <h3 className="text-2xl font-bold">Connect With Us</h3>
                                            <p className="text-[#FDB913]">Join our community</p>
                                        </div>
                                    </div>

                                    <p className="text-white/90 mb-6 leading-relaxed">
                                        Follow us on Facebook to stay updated with our latest activities, events, and announcements. See what makes our school special!
                                    </p>

                                    <motion.a
                                        href="https://www.facebook.com/share/1Berhv4T7y/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-flex items-center bg-[#FDB913] hover:bg-yellow-500 text-[#0F2A4A] font-bold px-8 py-4 rounded-xl transition-all shadow-lg"
                                    >
                                        <Facebook className="mr-2" size={20} />
                                        Follow on Facebook
                                        <ArrowRight className="ml-2" size={20} />
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
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
                            <Phone className="w-20 h-20 mx-auto mb-8 text-[#FDB913]" />
                        </motion.div>
                        
                        <h2 className="text-5xl font-bold mb-6 text-white">Schedule a Campus Visit</h2>
                        <div className="w-32 h-1 bg-[#FDB913] mx-auto mb-8"></div>
                        <p className="text-2xl mb-12 text-white/90 leading-relaxed max-w-3xl mx-auto">
                            Come see our facilities and meet our dedicated staff. We'd love to show you around and answer any questions!
                        </p>
                        
                        <motion.a
                            href="tel:08023528888"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center bg-[#FDB913] hover:bg-yellow-500 text-[#0F2A4A] font-bold px-10 py-5 rounded-2xl transition-all shadow-2xl text-xl"
                        >
                            <Phone className="mr-3 w-6 h-6" />
                            Call to Schedule: 080 23528888
                        </motion.a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default PlaySchoolContact;