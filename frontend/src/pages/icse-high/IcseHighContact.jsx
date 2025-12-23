import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Facebook, User, ArrowRight, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import { sendContact } from '../../utils/sendContact';


const IcseHighContact = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    mobile: '', 
    subject: '', 
    message: '' 
  });
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await sendContact({
        section: 'icse-high-contact',
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        subject: formData.subject,
        message: formData.message
      });
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: '', email: '', mobile: '', subject: '', message: '' });
      }, 3000);
    } catch (err) {
      console.error(err);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['080-23232831', '080-23226019'],
      links: ['tel:08023232831', 'tel:08023226019']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['scvk123@rediffmail.com'],
      links: ['mailto:scvk123@rediffmail.com']
    },
    {
      icon: MapPin,
      title: 'Address',
      details: [
        '# 1025, 10th Main Road,',
        '2nd Cross Road, 3rd Stage,',
        'Basaveshwaranagar,',
        'Bangalore - 560079'
      ],
      links: []
    },
    {
      icon: Clock,
      title: 'School Hours',
      details: [
        'Mon - Fri: 9.30am to 5.30pm',
        'Saturday: 9.30am to 5.30pm'
      ],
      links: []
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0F2A4A] via-[#1a4d7a] to-[#0F2A4A] text-white py-32 overflow-hidden mt-16">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-96 h-96 bg-[#FDB913] opacity-10 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-[#FDB913] opacity-10 rounded-full blur-3xl"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#FDB913] to-yellow-600 rounded-3xl mb-6 shadow-2xl"
            >
              <Mail className="w-12 h-12 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-[#FDB913] to-white bg-clip-text text-transparent">
              Contact Us
            </h1>
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <div className="h-1 w-16 bg-[#FDB913] rounded-full"></div>
              <motion.div 
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="h-2 w-2 bg-white rounded-full"
              />
              <div className="h-1 w-16 bg-[#FDB913] rounded-full"></div>
            </motion.div>
            <p className="text-xl md:text-2xl text-gray-300">Get in touch with us</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border-t-4 border-[#FDB913] text-center group relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#FDB913]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 bg-gradient-to-br from-[#FDB913] to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10"
                >
                  <info.icon className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-[#0F2A4A] mb-4 relative z-10">{info.title}</h3>
                <div className="space-y-2 relative z-10">
                  {info.details.map((detail, idx) => (
                    info.links[idx] ? (
                      <a 
                        key={idx} 
                        href={info.links[idx]} 
                        className="block text-gray-700 hover:text-[#FDB913] transition-colors font-medium break-words"
                      >
                        {detail}
                      </a>
                    ) : (
                      <p key={idx} className="text-gray-700 break-words">{detail}</p>
                    )
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#FDB913] to-yellow-600 rounded-3xl mb-6 shadow-lg"
            >
              <MessageSquare className="w-10 h-10 text-white" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A4A] mb-4">
              Send Us a Message
            </h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2 mb-6"
            >
              <div className="h-1 w-20 bg-[#FDB913] rounded-full"></div>
              <div className="h-1 w-12 bg-yellow-600 rounded-full"></div>
            </motion.div>
            <p className="text-xl text-gray-600">We'll get back to you within 24 hours</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-[#0F2A4A] to-[#1a4d7a] p-8 relative overflow-hidden">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-[#FDB913]"
              />
              <div className="flex items-center gap-4 relative z-10">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 bg-[#FDB913] rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <Send className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-3xl font-bold text-white">Get in Touch</h3>
                  <p className="text-gray-300 text-lg">Fill out the form below</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-6">
              {/* Name Input */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
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
                    className="absolute inset-0 bg-gradient-to-r from-[#0F2A4A]/10 to-[#FDB913]/10 rounded-2xl"
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
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-[#FDB913] focus:ring-2 focus:ring-[#FDB913]/20 outline-none transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Email and Mobile in Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Email Input */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
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
                      className="absolute inset-0 bg-gradient-to-r from-[#0F2A4A]/10 to-[#FDB913]/10 rounded-2xl"
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
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-[#FDB913] focus:ring-2 focus:ring-[#FDB913]/20 outline-none transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Mobile Input */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <motion.div
                      animate={{
                        scale: focusedField === 'mobile' ? 1 : 0,
                        opacity: focusedField === 'mobile' ? 1 : 0
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-[#0F2A4A]/10 to-[#FDB913]/10 rounded-2xl"
                    />
                    <div className="relative flex items-center">
                      <Phone className="absolute left-4 text-gray-400" size={20} />
                      <input
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('mobile')}
                        onBlur={() => setFocusedField(null)}
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-[#FDB913] focus:ring-2 focus:ring-[#FDB913]/20 outline-none transition-all"
                        placeholder="10-digit mobile number"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Subject Input */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
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
                    className="absolute inset-0 bg-gradient-to-r from-[#0F2A4A]/10 to-[#FDB913]/10 rounded-2xl"
                  />
                  <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    type="text"
                    required
                    className="relative w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-[#FDB913] focus:ring-2 focus:ring-[#FDB913]/20 outline-none transition-all"
                    placeholder="e.g., Admission Inquiry"
                  />
                </div>
              </motion.div>

              {/* Message Input */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message (Optional)
                </label>
                <div className="relative">
                  <motion.div
                    animate={{
                      scale: focusedField === 'message' ? 1 : 0,
                      opacity: focusedField === 'message' ? 1 : 0
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-[#0F2A4A]/10 to-[#FDB913]/10 rounded-2xl"
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className="relative w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-[#FDB913] focus:ring-2 focus:ring-[#FDB913]/20 outline-none transition-all h-36 resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting || isSuccess}
                whileHover={{ scale: isSubmitting || isSuccess ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting || isSuccess ? 1 : 0.98 }}
                className={`w-full py-5 rounded-2xl font-bold text-lg shadow-xl transition-all flex items-center justify-center gap-3 relative overflow-hidden ${
                  isSuccess 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gradient-to-r from-[#FDB913] to-yellow-600 text-white hover:shadow-2xl'
                }`}
              >
                {!isSubmitting && !isSuccess && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-3">
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
                      Message Sent Successfully!
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map and Additional Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Map */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl p-8 shadow-2xl border-t-4 border-[#FDB913]"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-br from-[#FDB913] to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <MapPin className="w-8 h-8 text-white" />
                </motion.div>
                <h2 className="text-3xl font-bold text-[#0F2A4A]">Our Location</h2>
              </div>
              <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden shadow-lg mb-6">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8567!2d77.5625!3d12.9916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU5JzI5LjgiTiA3N8KwMzMnNDUuMCJF!5e0!3m2!1sen!2sin!4v1234567890" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  title="School Location"
                />
              </div>
              <div className="bg-gradient-to-r from-[#0F2A4A]/5 to-[#FDB913]/5 rounded-xl p-4">
                <p className="text-gray-800 font-semibold text-lg">
                  # 1025, 10th Main Road, 2nd Cross Road, 3rd Stage,<br/>
                  Basaveshwaranagar, Bangalore - 560079
                </p>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Social Media */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl border-t-4 border-[#FDB913]">
                <h2 className="text-2xl font-bold text-[#0F2A4A] mb-6">Connect With Us</h2>
                <motion.a 
                  href="https://www.facebook.com/profile.php?id=100095136330780" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-all shadow-lg w-full justify-center font-semibold text-lg"
                >
                  <Facebook size={24} />
                  Follow us on Facebook
                </motion.a>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-[#FDB913] to-yellow-600 rounded-3xl p-8 shadow-2xl text-white relative overflow-hidden">
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute inset-0 bg-[#0F2A4A]"
                />
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-4">Quick Contact</h2>
                  <p className="mb-6 text-lg">For admissions and inquiries:</p>
                  <motion.a 
                    href="tel:08023232831"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#0F2A4A] rounded-2xl font-semibold hover:bg-gray-100 transition-all mb-4 shadow-lg"
                  >
                    <Phone size={20} />
                    Call: 080-23232831
                  </motion.a>
                  <motion.a 
                    href="mailto:scvk123@rediffmail.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#0F2A4A] rounded-2xl font-semibold hover:bg-gray-100 transition-all shadow-lg"
                  >
                    <Mail size={20} />
                    Email Us
                  </motion.a>
                </div>
              </div>

              {/* Administrator */}
              <div className="bg-gradient-to-br from-[#0F2A4A] to-[#1a4d7a] rounded-3xl p-8 shadow-2xl text-white relative overflow-hidden">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-10 -right-10 w-40 h-40 bg-[#FDB913]/10 rounded-full blur-2xl"
                />
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-[#FDB913] rounded-2xl flex items-center justify-center shadow-lg"
                  >
                    <User className="w-8 h-8 text-white" />
                  </motion.div>
                  <h2 className="text-2xl font-bold">Administrator</h2>
                </div>
                <div className="space-y-2 relative z-10">
                  <p className="text-2xl font-bold text-[#FDB913]">Dr. S. S. Rajan</p>
                  <p className="text-gray-300 text-lg">M.A, B.Ed, M.Phil, Ph.D</p>
                  <p className="text-white font-semibold">Administrator, SCVK</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-[#0F2A4A] via-[#1a4d7a] to-[#0F2A4A] rounded-[3rem] shadow-2xl p-16 text-center text-white overflow-hidden"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-0 left-0 w-full h-full bg-[#FDB913] opacity-10 rounded-[3rem]"
            />
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block mb-6"
              >
                <MapPin className="w-20 h-20 text-[#FDB913] mx-auto" />
              </motion.div>
              
              <h2 className="text-5xl font-bold mb-6">Visit Our Campus</h2>
              <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-gray-200">
                We welcome you to visit our campus. Please call ahead to schedule your visit during school hours.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a 
                  href="tel:08023232831"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#FDB913] text-white rounded-full font-bold hover:bg-yellow-600 transition-all shadow-2xl text-lg relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <Phone size={24} className="relative z-10" />
                  <span className="relative z-10">Schedule a Visit</span>
                </motion.a>
                
                <motion.a 
                  href="/icse-high/admissions"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-[#0F2A4A] rounded-full font-bold hover:bg-gray-100 transition-all shadow-2xl text-lg"
                >
                  View Admission Details
                  <ArrowRight size={24} />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#FDB913] rounded-full opacity-10 blur-3xl"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IcseHighContact;