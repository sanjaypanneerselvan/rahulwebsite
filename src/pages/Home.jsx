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
        { icon: <Award size={32} />, value: '5+', label: 'Years Experience' },
        { icon: <Star size={32} />, value: '100+', label: 'Happy Clients' },
        { icon: <CheckCircle size={32} />, value: '100%', label: 'Quality Assured' },
        { icon: <TrendingUp size={32} />, value: '24/7', label: 'Support Available' },
    ];

    return (
        <div className="bg-white">
            {/* Hero Section - Reduced padding */}
            <section className="bg-slate-900 text-white py-16 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                                Complete Infrastructure Solutions
                                <br />
                                <span className="text-gray-300">for Schools & Offices</span>
                            </h1>
                            <p className="text-lg md:text-xl mb-6 text-gray-300">
                                Providing high-quality educational boards, furniture, and play equipment since 2025
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="/products"
                                    className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-200 shadow-lg border-2 border-slate-900"
                                >
                                    Explore Products
                                    <ArrowRight size={20} />
                                </a>
                                <a
                                    href="/contact"
                                    className="inline-flex items-center gap-2 bg-primary-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-900 transition-all duration-200"
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
                                <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center">
                                    <div className="flex justify-center mb-2 text-gray-300">
                                        {stat.icon}
                                    </div>
                                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                                    <div className="text-sm text-gray-300">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Sectors Section - Reduced padding */}
            <section className="py-12 bg-primary-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-8"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                            Our Sectors
                        </h2>
                        <p className="text-slate-600 text-lg">
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
                                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-primary-100"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-4xl">{sector.emoji}</span>
                                    <div className="text-primary-600">
                                        {sector.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-slate-900">
                                    {sector.title}
                                </h3>
                                <p className="text-slate-600 mb-4 text-sm">{sector.description}</p>
                                <ul className="space-y-2">
                                    {sector.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                                            <CheckCircle size={16} className="text-primary-600" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Highlights - New Section */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-8"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                            Featured Products
                        </h2>
                        <p className="text-slate-600 text-lg">
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
                                className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100 hover:shadow-lg transition-shadow"
                            >
                                <div className="text-5xl mb-3 text-center">{product.emoji}</div>
                                <h3 className="font-bold text-lg text-slate-900 mb-1">{product.name}</h3>
                                <p className="text-sm text-slate-600 mb-2">{product.code}</p>
                                <p className="text-primary-600 font-bold">{product.price}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <a
                            href="/products"
                            className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-slate-800 transition-colors"
                        >
                            View All Products
                            <ArrowRight size={20} />
                        </a>
                    </div>
                </div>
            </section>

            {/* Why Choose Us - Compact */}
            <section className="py-12 bg-primary-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-xl shadow-sm border border-primary-100"
                        >
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900 text-center">
                                Why Choose City Office Needs?
                            </h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                {[
                                    { title: 'Trusted Since 2025', desc: 'Over 50 years of excellence and reliability' },
                                    { title: 'Quality Products', desc: 'High-quality, durable infrastructure solutions' },
                                    { title: 'Custom Solutions', desc: 'Tailored to your specific requirements' },
                                    { title: 'Expert Support', desc: 'Dedicated customer service team' },
                                    { title: 'Competitive Pricing', desc: 'Best value for your investment' },
                                    { title: 'Fast Delivery', desc: 'Timely delivery across Coimbatore' },
                                ].map((item, index) => (
                                    <div key={index} className="flex gap-3">
                                        <CheckCircle className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                                        <div>
                                            <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                                            <p className="text-sm text-slate-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section - Compact */}
            <section className="bg-slate-900 text-white py-12">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-3">
                            Ready to Transform Your Space?
                        </h2>
                        <p className="text-lg md:text-xl mb-6 text-gray-300">
                            Contact us today for customized infrastructure solutions
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-200 shadow-lg border-2 border-white"
                            >
                                Get in Touch
                                <ArrowRight size={20} />
                            </a>
                            <a
                                href="tel:+919842250600"
                                className="inline-flex items-center gap-2 bg-slate-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-slate-600 transition-all duration-200"
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
