import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Facebook, Send, User, MessageSquare, CheckCircle2 } from 'lucide-react';
import { sendContact } from '../../utils/sendContact';


const HighSchoolContact = () => {
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
        section: 'high-school-contact',
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
      details: ['080-23232831'],
      links: ['tel:080-23232831'],
      gradient: 'from-[#FDB913] to-green-500'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['scadambistatehighschool@gmail.com'],
      links: ['mailto:scadambistatehighschool@gmail.com'],
      gradient: 'from-[#FDB913] to-green-500'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: [
        'S. Cadambi Vidya Kendra High School',
        'Basaveshwara Nagar',
        'Bangalore, Karnataka'
      ],
      links: [],
      gradient: 'from-[#FDB913] to-green-500'
    },
    {
      icon: Clock,
      title: 'School Hours',
      details: [
        'Monday - Friday: 9:45 AM - 4:00 PM',
        'Saturday: 8:45 AM - 12:45 PM'
      ],
      links: [],
      gradient: 'from-[#FDB913] to-green-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0F2A4A] via-[#1a4d7a] to-[#0F2A4A] text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FDB913] opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500 opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/10 rounded-full"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-center"
          >
            <motion.div 
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              transition={{ delay: 0.3, type: "spring" }} 
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#FDB913] to-green-500 rounded-2xl mb-6 shadow-2xl"
            >
              <Mail className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-[#FDB913] to-green-400 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-1 w-16 bg-[#FDB913]"></div>
              <div className="h-1 w-8 bg-green-500"></div>
              <div className="h-1 w-16 bg-[#FDB913]"></div>
            </div>
            <p className="text-xl text-gray-300">Get in touch with us for admissions, queries, or information</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: index * 0.1 }} 
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-t-4 border-[#FDB913] text-center group"
              >
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                >
                  <info.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-[#0F2A4A] mb-4 group-hover:text-[#FDB913] transition-colors">
                  {info.title}
                </h3>
                <div className="space-y-2">
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
          </div>
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
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FDB913] to-green-500 rounded-2xl mb-6 shadow-lg"
            >
              <MessageSquare className="w-8 h-8 text-white" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A4A] mb-4">
              Send Us a Message
            </h2>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-1 w-20 bg-[#FDB913] rounded"></div>
              <div className="h-1 w-12 bg-green-500 rounded"></div>
            </div>
            <p className="text-xl text-gray-600">We'll get back to you within 24 hours</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-[#0F2A4A] to-[#1a4d7a] p-8">
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-12 h-12 bg-[#FDB913] rounded-xl flex items-center justify-center shadow-lg"
                >
                  <Send className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Get in Touch</h3>
                  <p className="text-gray-300">Fill out the form below</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
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
                      className="absolute inset-0 bg-gradient-to-r from-[#0F2A4A]/10 to-[#FDB913]/10 rounded-xl"
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
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FDB913] focus:ring-2 focus:ring-[#FDB913]/20 outline-none transition-all"
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
                    className="absolute inset-0 bg-gradient-to-r from-[#0F2A4A]/10 to-[#FDB913]/10 rounded-xl"
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className="relative w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FDB913] focus:ring-2 focus:ring-[#FDB913]/20 outline-none transition-all h-32 resize-none"
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
                    Message Sent Successfully!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Location and Social Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              className="bg-white rounded-2xl p-8 shadow-2xl border-t-4 border-green-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-[#0F2A4A]">Our Location</h2>
              </div>
              <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-lg mb-4">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8567!2d77.5625!3d12.9916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU5JzI5LjgiTiA3N8KwMzMnNDUuMCJF!5e0!3m2!1sen!2sin!4v1234567890" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  title="School Location"
                ></iframe>
              </div>
              <p className="text-gray-700 font-medium">
                <strong>Address:</strong> S. Cadambi Vidya Kendra High School, Basaveshwara Nagar, Bangalore, Karnataka
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl p-8 shadow-2xl border-t-4 border-[#FDB913]">
                <h2 className="text-2xl font-bold text-[#0F2A4A] mb-6">Connect With Us</h2>
                <a 
                  href="https://www.facebook.com/share/1AngmCMEAV/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all hover:scale-105 shadow-lg w-full justify-center font-semibold"
                >
                  <Facebook size={24} />
                  Follow us on Facebook
                </a>
              </div>

              <div className="bg-gradient-to-br from-[#FDB913] to-green-500 rounded-2xl p-8 shadow-2xl text-white">
                <h2 className="text-2xl font-bold mb-4">Quick Contact</h2>
                <p className="mb-6 text-lg">For admissions and general inquiries:</p>
                <a 
                  href="tel:08023232831" 
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#0F2A4A] rounded-xl font-semibold hover:bg-gray-100 transition-all mb-4 hover:scale-105 shadow-lg"
                >
                  <Phone size={20} />
                  Call: 080-23232831
                </a>
                <a 
                  href="mailto:scadambistatehighschool@gmail.com" 
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#0F2A4A] rounded-xl font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
                >
                  <Mail size={20} />
                  Email Us
                </a>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-2xl border-t-4 border-green-500">
                <h2 className="text-2xl font-bold text-[#0F2A4A] mb-6">Administrator</h2>
                <div className="space-y-2">
                  <p className="text-xl text-[#0F2A4A] font-bold">Dr. S. S. Rajan</p>
                  <p className="text-gray-600">M.A, B.Ed, M.Phil, Ph.D</p>
                  <p className="text-gray-600 font-semibold">Administrator, SCVK</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visit Campus CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="bg-gradient-to-br from-[#0F2A4A] to-[#1a4d7a] rounded-3xl shadow-2xl p-12 md:p-16 text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Visit Our Campus</h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-gray-200">
              We welcome you to visit our campus and experience our facilities firsthand. Please call ahead to schedule your visit during school hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:08023232831" 
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#FDB913] text-white rounded-full font-bold hover:bg-[#f5a503] transition-all shadow-2xl text-lg"
              >
                <Phone size={24} />
                Schedule a Visit
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/high-school/admissions" 
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-green-500 text-white rounded-full font-bold hover:bg-green-600 transition-all shadow-2xl text-lg"
              >
                View Admission Details
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HighSchoolContact;