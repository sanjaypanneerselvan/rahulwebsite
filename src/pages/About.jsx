import { motion } from 'framer-motion';
import { Award, Shield, Users, Sparkles, CheckCircle, Target, Heart, Zap, GraduationCap, Building2, Baby, Trophy } from 'lucide-react';

const About = () => {
    const features = [
        { icon: <Award size={28} />, title: 'Since 2006', description: 'Over 20 years of excellence' },
        { icon: <Shield size={28} />, title: 'Quality Assured', description: 'High-quality products' },
        { icon: <Users size={28} />, title: 'Customer First', description: 'Dedicated support' },
        { icon: <Sparkles size={28} />, title: 'Custom Solutions', description: 'Tailored to your needs' },
    ];

    const services = [
        { icon: <GraduationCap size={32} />, title: 'Educational Institutions', items: ['Writing Boards', 'Notice Boards', 'Classroom Desks & Benches', 'Laboratory Furniture', 'Library Furniture'] },
        { icon: <Building2 size={32} />, title: 'Office Solutions', items: ['Workstations', 'Office Chairs', 'Conference Tables', 'Storage Units', 'Reception Furniture'] },
        { icon: <Baby size={32} />, title: 'Play School Equipment', items: ['Slides & Swings', 'Outdoor Play Equipment', 'Indoor Play Items', 'Child-Friendly Furniture', 'Safety Mats'] },
    ];

    const values = [
        { icon: <Target size={24} />, title: 'Quality', desc: 'We never compromise on quality' },
        { icon: <Heart size={24} />, title: 'Customer Satisfaction', desc: 'Your happiness is our priority' },
        { icon: <Zap size={24} />, title: 'Innovation', desc: 'Modern solutions for modern needs' },
        { icon: <CheckCircle size={24} />, title: 'Reliability', desc: 'Trusted by thousands since 2006' },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section - Glossy Blue */}
            <section className="glossy-blue text-white py-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold mb-3 drop-shadow-lg"
                    >
                        Your Trusted Partner in Infrastructure
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-blue-100"
                    >
                        Building excellence since 2006 • Coimbatore's Premier Infrastructure Provider
                    </motion.p>
                </div>
            </section>

            {/* Main Content - Two Column Layout */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* About Text */}
                        <div className="md:col-span-2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100 mb-6"
                            >
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                    About City Office Needs
                                </h2>

                                <div className="space-y-3 text-slate-700">
                                    <p>
                                        Welcome to <span className="font-bold text-primary-600">City Office Needs</span>, a trusted provider of complete infrastructure solutions for play schools, schools, colleges, and city offices. We specialize in delivering high-quality educational boards, furniture, office setups, and play school equipment.
                                    </p>

                                    <p>
                                        We understand that early learning spaces require special care and creativity. Our play school slides, swings, outdoor play equipment, and child-friendly furniture are designed with safety, durability, and fun in mind.
                                    </p>

                                    <p>
                                        For schools and colleges, we offer writing boards, notice boards, classroom desks, laboratory furniture, library furniture, and customized solutions as per institutional needs.
                                    </p>

                                    <p className="font-semibold text-primary-600">
                                        At City Office Needs, quality and customer satisfaction are our core values.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Services Grid */}
                            <div className="grid md:grid-cols-1 gap-4">
                                {services.map((service, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-white border border-primary-100 p-5 rounded-xl hover:shadow-md transition-shadow"
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-primary-600">{service.icon}</span>
                                            <h3 className="font-bold text-lg text-slate-900">{service.title}</h3>
                                        </div>
                                        <ul className="grid grid-cols-2 gap-2">
                                            {service.items.map((item, idx) => (
                                                <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                                                    <CheckCircle size={14} className="text-primary-600 flex-shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Feature Cards */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-4"
                            >
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="bg-white border border-primary-100 p-4 rounded-xl hover:shadow-md transition-shadow"
                                    >
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="text-primary-600">{feature.icon}</div>
                                            <h3 className="font-bold text-slate-900">{feature.title}</h3>
                                        </div>
                                        <p className="text-sm text-slate-600">{feature.description}</p>
                                    </div>
                                ))}
                            </motion.div>

                            {/* Legacy Card */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-slate-900 text-white rounded-xl p-6 text-center"
                            >
                                <div className="flex justify-center mb-3">
                                    <Trophy size={48} className="text-amber-400" />
                                </div>
                                <h2 className="text-3xl font-bold mb-2">Since 2006</h2>
                                <p className="text-gray-300 mb-4">Over 20 years of excellence</p>
                                <div className="grid grid-cols-1 gap-3 text-sm">
                                    <div className="bg-white/10 rounded-lg p-2">
                                        <div className="text-2xl font-bold">100+</div>
                                        <div className="text-gray-300">Happy Clients</div>
                                    </div>
                                    <div className="bg-white/10 rounded-lg p-2">
                                        <div className="text-2xl font-bold">100%</div>
                                        <div className="text-gray-300">Quality Products</div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Values */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-primary-50 p-5 rounded-xl border border-primary-100"
                            >
                                <h3 className="font-bold text-lg text-slate-900 mb-3">Our Values</h3>
                                <div className="space-y-3">
                                    {values.map((value, index) => (
                                        <div key={index} className="flex gap-3">
                                            <div className="text-primary-600 flex-shrink-0">{value.icon}</div>
                                            <div>
                                                <h4 className="font-semibold text-sm text-slate-900">{value.title}</h4>
                                                <p className="text-xs text-slate-600">{value.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
