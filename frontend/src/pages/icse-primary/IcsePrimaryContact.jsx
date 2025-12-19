import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook, Send, User, MessageSquare, Building2 } from 'lucide-react';
import { sendContact } from '../../utils/sendContact';
import IcsePrimaryHeader from './IcsePrimaryHeader';
import IcsePrimaryFooter from './IcsePrimaryFooter';


const IcsePrimaryContact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await sendContact({
                section: 'icse-primary',
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                message: formData.message
            });
            // optional success feedback
            alert('Message sent — thank you!');
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (err) {
            console.error(err);
            alert('Failed to send message. Please try again later.');
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactInfo = [
        {
            icon: MapPin,
            title: "Address",
            content: (
                <>
                    # 1025, 10th Main Road,<br />
                    2nd Cross Road, 3rd Stage,<br />
                    Basaveshwaranagar,<br />
                    Bangalore - 560079
                </>
            ),
            color: "blue"
        },
        {
            icon: Mail,
            title: "Email",
            content: (
                <a href="mailto:scvk123@rediffmail.com" className="text-gray-700 hover:text-secondary transition-colors">
                    scvk123@rediffmail.com
                </a>
            ),
            color: "purple"
        },
        {
            icon: Clock,
            title: "Office Hours",
            content: (
                <>
                    Mon - Fri: 8:45 AM - 2:30 PM<br />
                    Sat: 8:45 AM - 11:40 AM<br />
                    Every 2nd Saturday: Holiday<br />
                    Sunday: Closed
                </>
            ),
            color: "green"
        },
        {
            icon: Facebook,
            title: "Social Media",
            content: (
                <a 
                    href="https://www.facebook.com/profile.php?id=100095136330780" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-secondary transition-colors inline-flex items-center gap-2"
                >
                    <span>Follow us on Facebook</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
            ),
            color: "orange"
        }
    ];

    const getIconColor = (color) => {
        const colors = {
            blue: "bg-blue-100 text-blue-600",
            purple: "bg-green-100 text-green-600",
            green: "bg-green-100 text-green-600",
            orange: "bg-blue-100 text-blue-600"
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
                            <Mail className="w-20 h-20 text-white/90" />
                        </motion.div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            Get in touch with ICSE Primary Wing - We're here to help
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                            Contact Information
                        </span>
                        <h2 className="text-4xl font-bold text-primary mb-4">Get In Touch</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We'd love to hear from you. Reach out to us through any of these channels
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6 mb-16">
                        {contactInfo.map((info, idx) => {
                            const IconComponent = info.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`${getIconColor(info.color)} w-14 h-14 rounded-xl flex items-center justify-center shrink-0`}>
                                            <IconComponent size={28} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-primary text-xl mb-3">{info.title}</h3>
                                            <div className="text-gray-700 leading-relaxed">
                                                {info.content}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Contact Form and Map Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }} 
                            whileInView={{ opacity: 1, x: 0 }} 
                            viewport={{ once: true }}
                        >
                            <div className="bg-gradient-to-br from-primary to-blue-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="bg-secondary/20 backdrop-blur p-3 rounded-xl">
                                        <Send size={32} className="text-secondary" />
                                    </div>
                                    <h2 className="text-3xl font-bold">Send Us a Message</h2>
                                </div>
                                
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-white/90 mb-2 font-semibold flex items-center gap-2">
                                            <User size={18} />
                                            Name *
                                        </label>
                                        <input 
                                            type="text" 
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter your full name"
                                            className="w-full px-4 py-3 rounded-xl text-gray-900 focus:ring-2 focus:ring-secondary outline-none transition-all" 
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-white/90 mb-2 font-semibold flex items-center gap-2">
                                            <Mail size={18} />
                                            Email *
                                        </label>
                                        <input 
                                            type="email" 
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="your.email@example.com"
                                            className="w-full px-4 py-3 rounded-xl text-gray-900 focus:ring-2 focus:ring-secondary outline-none transition-all" 
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-white/90 mb-2 font-semibold flex items-center gap-2">
                                            <Phone size={18} />
                                            Phone
                                        </label>
                                        <input 
                                            type="tel" 
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+91 1234567890"
                                            className="w-full px-4 py-3 rounded-xl text-gray-900 focus:ring-2 focus:ring-secondary outline-none transition-all" 
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-white/90 mb-2 font-semibold flex items-center gap-2">
                                            <MessageSquare size={18} />
                                            Message *
                                        </label>
                                        <textarea 
                                            rows="5" 
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            placeholder="Tell us how we can help you..."
                                            className="w-full px-4 py-3 rounded-xl text-gray-900 focus:ring-2 focus:ring-secondary outline-none transition-all resize-none"
                                        ></textarea>
                                    </div>
                                    
                                    <motion.button 
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        className="bg-secondary hover:bg-secondary/90 text-primary font-bold px-8 py-4 rounded-xl transition-all w-full flex items-center justify-center gap-2 shadow-lg"
                                    >
                                        <Send size={20} />
                                        Send Message
                                    </motion.button>
                                </form>
                            </div>
                        </motion.div>

                        {/* Map */}
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }} 
                            whileInView={{ opacity: 1, x: 0 }} 
                            viewport={{ once: true }}
                        >
                            <div className="bg-white rounded-3xl p-6 shadow-2xl border-2 border-gray-100 h-full">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="bg-primary/10 p-3 rounded-xl">
                                        <MapPin size={28} className="text-primary" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-primary">Find Us Here</h2>
                                </div>
                                
                                <div className="rounded-2xl overflow-hidden shadow-lg h-[calc(100%-80px)] min-h-[400px]">
                                    <iframe 
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6509!2d77.5584!3d12.9916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d8f0f0f0f0f%3A0x0!2zMTLCsDU5JzI5LjgiTiA3N8KwMzMnMzAuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="S Cadambi Vidya Kendra Location"
                                    ></iframe>
                                </div>
                                
                                <div className="mt-6 bg-gradient-to-r from-primary/5 to-blue-50 rounded-xl p-4">
                                    <div className="flex items-start gap-3">
                                        <Building2 className="text-primary mt-1" size={20} />
                                        <div>
                                            <p className="font-semibold text-primary mb-1">S Cadambi Vidya Kendra</p>
                                            <p className="text-sm text-gray-600">
                                                # 1025, 10th Main Road, 2nd Cross Road, 3rd Stage,<br />
                                                Basaveshwaranagar, Bangalore - 560079
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Quick Stats or CTA Section */}
            <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-primary to-blue-900 text-white rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-10 right-10 w-32 h-32 border-4 border-white rounded-full"></div>
                            <div className="absolute bottom-10 left-10 w-24 h-24 border-4 border-white rounded-full"></div>
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-4xl font-bold mb-4">Visit Our Campus</h3>
                            <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
                                Schedule a visit to experience our world-class facilities and meet our dedicated team
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a 
                                    href="mailto:scvk123@rediffmail.com"
                                    className="bg-secondary hover:bg-secondary/90 text-primary font-bold px-8 py-4 rounded-xl transition-all inline-flex items-center gap-2"
                                >
                                    <Mail size={20} />
                                    Email Us
                                </a>
                                <a 
                                    href="https://www.google.com/maps/dir//S+Cadambi+Vidya+Kendra"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white/10 backdrop-blur hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all inline-flex items-center gap-2 border-2 border-white/30"
                                >
                                    <MapPin size={20} />
                                    Get Directions
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

          
        </div>
    );
};

export default IcsePrimaryContact;