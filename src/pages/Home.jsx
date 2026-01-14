import { motion } from 'framer-motion';
import { Building2, GraduationCap, Baby, ArrowRight, CheckCircle, Star, Award, TrendingUp } from 'lucide-react';

const Home = () => {
    const sectors = [
        {
            icon: <Building2 size={40} />,
            emoji: '🏢',
            title: 'Corporate',
            description: 'Modern office furniture and workstation solutions',
            features: ['Executive Chairs', 'Modular Workstations', 'Conference Tables'],
        },
        {
            icon: <GraduationCap size={40} />,
            emoji: '🏫',
            title: 'Institutional',
            description: 'Complete educational infrastructure for schools and colleges',
            features: ['Student Desks', 'Lab Tables', 'Library Furniture'],
        },
        {
            icon: <Baby size={40} />,
            emoji: '🛝',
            title: 'Play School',
            description: 'Safe and engaging play equipment for early learning',
            features: ['Slides & Swings', 'Indoor Play Items', 'Child-Safe Furniture'],
        },
    ];

    const stats = [
        { icon: <Award size={32} />, value: '20+', label: 'Years Experience' },
        { icon: <Star size={32} />, value: '100+', label: 'Happy Clients' },
        { icon: <CheckCircle size={32} />, value: '100%', label: 'Quality Assured' },
        { icon: <TrendingUp size={32} />, value: '24/7', label: 'Support Available' },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section - Glossy Blue */}
            <section className="glossy-blue text-white py-20 md:py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-lg">
                                Complete Infrastructure Solutions
                                <br />
                                <span className="text-blue-100">for Schools & Offices</span>
                            </h1>
                            <p className="text-lg md:text-xl mb-6 text-blue-100">
                                Providing high-quality educational boards, furniture, and play equipment since 2006
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="/products"
                                    className="btn-glossy-gold text-white px-8 py-4 rounded-2xl font-bold inline-flex items-center gap-2"
                                >
                                    Explore Products
                                    <ArrowRight size={22} />
                                </a>
                                <a
                                    href="/contact"
                                    className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/30 transition-all duration-200 border-2 border-white/30"
                                >
                                    Get Quote
                                </a>
                            </div>
                        </motion.div>

                        {/* Stats Grid */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="grid grid-cols-2 gap-4"
                        >
                            {stats.map((stat, index) => (
                                <div key={index} className="glass p-5 rounded-2xl text-center border-2 border-white/20">
                                    <div className="flex justify-center mb-2 text-amber-300">
                                        {stat.icon}
                                    </div>
                                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                                    <div className="text-sm text-blue-100">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Sectors Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-10">
                        <h2 className="text-4xl md:text-5xl font-bold text-glossy-blue mb-3">
                            Our Sectors
                        </h2>
                        <p className="text-blue-800 text-lg">
                            Comprehensive solutions for every infrastructure need
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {sectors.map((sector, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="premium-card p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-5xl">{sector.emoji}</span>
                                    <div className="text-blue-600">
                                        {sector.icon}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-blue-900">
                                    {sector.title}
                                </h3>
                                <p className="text-blue-800 mb-4">{sector.description}</p>
                                <ul className="space-y-2">
                                    {sector.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-blue-900 font-medium">
                                            <CheckCircle size={18} className="text-amber-500" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Highlights */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-glossy-blue mb-3">
                            Featured Products
                        </h2>
                        <p className="text-blue-800 text-lg">
                            Popular choices from our extensive catalog
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { name: 'Executive Chairs', code: 'EC-501 Series', price: 'From ₹8,000', emoji: '💼' },
                            { name: 'Student Desks', code: 'SD-1201 Series', price: 'From ₹3,500', emoji: '📚' },
                            { name: 'Play Slides', code: 'Multiple Variants', price: 'From ₹2,040', emoji: '🛝' },
                            { name: 'Lab Tables', code: 'LT-1401 Series', price: 'From ₹12,000', emoji: '🔬' },
                        ].map((product, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="premium-card p-6 rounded-2xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                            >
                                <div className="text-5xl mb-3 text-center">{product.emoji}</div>
                                <h3 className="font-bold text-lg text-blue-900 mb-1">{product.name}</h3>
                                <p className="text-sm text-blue-700 mb-2">{product.code}</p>
                                <p className="text-glossy-gold font-bold text-lg">{product.price}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <a
                            href="/products"
                            className="btn-glossy-blue text-white px-8 py-4 rounded-2xl font-bold inline-flex items-center gap-2"
                        >
                            View All Products
                            <ArrowRight size={22} />
                        </a>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="premium-card p-10 rounded-3xl"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-glossy-blue text-center">
                                Why Choose City Office Needs?
                            </h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                {[
                                    { title: 'Trusted Since 2006', desc: 'Over 20 years of excellence and reliability' },
                                    { title: 'Quality Products', desc: 'High-quality, durable infrastructure solutions' },
                                    { title: 'Custom Solutions', desc: 'Tailored to your specific requirements' },
                                    { title: 'Expert Support', desc: 'Dedicated customer service team' },
                                    { title: 'Competitive Pricing', desc: 'Best value for your investment' },
                                    { title: 'Fast Delivery', desc: 'Timely delivery across Coimbatore' },
                                ].map((item, index) => (
                                    <div key={index} className="flex gap-3">
                                        <CheckCircle className="text-amber-500 flex-shrink-0 mt-1" size={22} />
                                        <div>
                                            <h3 className="font-bold text-blue-900 mb-1">{item.title}</h3>
                                            <p className="text-sm text-blue-800">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="glossy-blue text-white py-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                            Ready to Transform Your Space?
                        </h2>
                        <p className="text-lg md:text-xl mb-8 text-blue-100">
                            Contact us today for customized infrastructure solutions
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="/contact"
                                className="btn-glossy-gold text-white px-8 py-4 rounded-2xl font-bold inline-flex items-center gap-2"
                            >
                                Get in Touch
                                <ArrowRight size={22} />
                            </a>
                            <a
                                href="tel:+919842250600"
                                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/30 transition-all duration-200 border-2 border-white/30"
                            >
                                📞 +91 98422 50600
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
