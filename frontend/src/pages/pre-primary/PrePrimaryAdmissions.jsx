import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, Users, Calendar } from 'lucide-react';

const PrePrimaryAdmissions = () => {
    const process = [
        { step: "1", title: "Submit Enquiry", desc: "Fill online form or visit office" },
        { step: "2", title: "Campus Visit", desc: "Tour facilities and meet teachers" },
        { step: "3", title: "Documentation", desc: "Submit required documents" },
        { step: "4", title: "Enrollment", desc: "Complete admission and fee payment" }
    ];

    const eligibility = [
        { program: "Pre-KG", age: "3+ years as of June 1st" },
        { program: "LKG", age: "4+ years as of June 1st" },
        { program: "UKG", age: "5+ years as of June 1st" }
    ];

    const documents = [
        "Birth Certificate (original for verification)",
        "Address Proof (Aadhar/Electricity Bill)",
        "Passport Size Photographs (4 child, 2 parents)",
        "Immunization Records",
        "Blood Group Certificate"
    ];

    return (
        <div className="pt-20 min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <div className="relative bg-gradient-to-r from-primary to-primary/90 text-white py-20 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                          <span className="text-secondary font-bold tracking-widest uppercase text-sm">
                            Admission Infrastructure
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6">
                            Admissions Open
                        </h1>
                        <p className="text-xl text-white/90">
                            Academic Year 2025-2026
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Admission Process */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                  
                    <h2 className="text-4xl font-bold text-primary text-center mb-12 font-serif">
                        Admission Process
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {process.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-all"
                            >
                                <div className="bg-secondary text-primary w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Eligibility */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-4xl font-bold text-primary text-center mb-12 font-serif">
                        Eligibility Criteria
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {eligibility.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl p-8 text-center border-2 border-secondary/20"
                            >
                                <h3 className="text-2xl font-bold text-primary mb-3">{item.program}</h3>
                                <p className="text-gray-700 text-lg">{item.age}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Documents Required */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-4xl font-bold text-primary text-center mb-12 font-serif">
                        Documents Required
                    </h2>
                    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
                        <ul className="space-y-4">
                            {documents.map((doc, idx) => (
                                <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="flex items-center text-gray-700"
                                >
                                    <CheckCircle className="text-green-500 mr-3 shrink-0" size={24} />
                                    <span className="text-lg">{doc}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </motion.section>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="bg-gradient-to-r from-primary to-primary/90 rounded-3xl p-12 text-white">
                        <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">
                            Ready to Enroll?
                        </h2>
                        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                            Limited seats available. Contact us today to secure your child's place.
                        </p>
                        <button className="bg-secondary hover:bg-secondary/90 text-primary font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg">
                            Contact Admissions Office
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PrePrimaryAdmissions;
