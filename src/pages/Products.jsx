import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Search, Star } from 'lucide-react';

const Products = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    const playSchoolSlides = [
        { name: 'Double Slider', price: '₹52,800', emoji: '🎢', featured: true },
        { name: 'Elephant Slide', price: '₹12,600', emoji: '🐘', featured: true },
        { name: 'Hut Slide', price: '₹37,800', emoji: '🏠', featured: true },
        { name: 'Castle Slide', price: '₹37,800', emoji: '🏰', featured: true },
        { name: 'Dolphin Slide', price: '₹3,480', emoji: '🐬' },
        { name: 'Tower Slide', price: '₹2,367', emoji: '🗼' },
        { name: 'Goal Post Slide', price: '₹4,260', emoji: '⚽' },
        { name: 'Folding Slide', price: '₹4,800', emoji: '🎪' },
        { name: 'Fish Slide', price: '₹5,156', emoji: '🐟' },
        { name: 'Cute Slide', price: '₹2,040', emoji: '🎀' },
        { name: 'Big Slide', price: '₹6,840', emoji: '🎢' },
        { name: 'Junior Slide', price: '₹2,880', emoji: '🛝' },
        { name: 'Small Slide', price: '₹4,873', emoji: '🎠' },
        { name: 'Tree Slide', price: '₹5,156', emoji: '🌳' },
        { name: 'Carrot Slide', price: '₹5,633', emoji: '🥕' },
        { name: 'Round Metal Slide', price: '₹43,440', emoji: '⭕' },
        { name: 'Zig-Zag Jumbo Metal Slide', price: '₹33,840', emoji: '⚡' },
        { name: 'Zig-Zag Metal Slide', price: '₹20,544', emoji: '⚡' },
        { name: 'Bear Slide', price: '₹7,689', emoji: '🐻' },
        { name: 'Appu Slide', price: '₹7,680', emoji: '🐘' },
        { name: 'Jumbo Slide', price: '₹8,040', emoji: '🎢' },
        { name: 'Giraffe Slide (Jr.)', price: '₹4,800', emoji: '🦒' },
        { name: 'Giraffe Slide', price: '₹7,560', emoji: '🦒' },
    ];

    const institutionalFurniture = [
        { category: 'Executive Chairs', items: ['EC-501', 'EC-502', 'EC-503', 'EC-504', 'EC-505'], emoji: '💼', icon: '🏢', price: 'From ₹8,000' },
        { category: 'Staff/Computer Chairs', items: ['CC-601', 'CC-602', 'CC-603', 'CC-604', 'CC-605'], emoji: '💻', icon: '🪑', price: 'From ₹5,000' },
        { category: 'Visitors Chairs', items: ['VC-701', 'VC-702', 'VC-703', 'VC-704', 'VC-705'], emoji: '🪑', icon: '👥', price: 'From ₹3,000' },
        { category: 'Student Desks', items: ['SD-1201', 'SD-1202', 'SD-1203'], emoji: '📚', icon: '🏫', price: 'From ₹3,500' },
        { category: 'Lab Tables', items: ['LT-1401', 'LT-1402'], emoji: '🔬', icon: '🧪', price: 'From ₹12,000' },
        { category: 'Office Tables', items: ['OT-901', 'OT-902', 'OT-1001', 'OT-1002'], emoji: '🗄️', icon: '📋', price: 'From ₹6,000' },
        { category: 'Modular Workstations', items: ['MW-1101', 'MW-1102'], emoji: '🖥️', icon: '🏢', price: 'From ₹15,000' },
    ];

    const categories = [
        { id: 'all', name: 'All Products', emoji: '📦' },
        { id: 'slides', name: 'Play School Slides', emoji: '🛝' },
        { id: 'furniture', name: 'Office Furniture', emoji: '🏢' },
    ];

    return (
        <div className="bg-white">
            {/* Hero Section - Compact */}
            <section className="bg-slate-900 text-white py-10">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">Our Products</h1>
                    <p className="text-lg text-gray-300">Quality infrastructure solutions • Competitive Pricing • Fast Delivery</p>
                </div>
            </section>

            {/* Filter Bar - Compact and Sticky */}
            <section className="py-4 bg-white sticky top-[65px] z-40 border-b-2 border-primary-100 shadow-sm">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Category Filters */}
                        <div className="flex flex-wrap justify-center gap-3">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 text-sm ${activeCategory === category.id
                                        ? 'bg-primary-600 text-white shadow-md'
                                        : 'bg-primary-50 text-slate-700 hover:bg-primary-100'
                                        }`}
                                >
                                    <span className="mr-1">{category.emoji}</span>
                                    {category.name}
                                </button>
                            ))}
                        </div>

                        {/* Search Bar */}
                        <div className="relative w-full md:w-64">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Section - Compact */}
            <section className="py-8 bg-primary-50">
                <div className="container mx-auto px-4">
                    {/* Play School Slides */}
                    {(activeCategory === 'all' || activeCategory === 'slides') && (
                        <div className="mb-12">
                            <div className="mb-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">
                                    🛝 Play School Equipment
                                </h2>
                                <p className="text-slate-600">Safe, fun, and durable play equipment • {playSchoolSlides.length} Products Available</p>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {playSchoolSlides
                                    .filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
                                    .map((product, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3, delay: index * 0.02 }}
                                            className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 border border-primary-100 relative"
                                        >
                                            {product.featured && (
                                                <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                                                    <Star size={12} fill="currentColor" />
                                                    Popular
                                                </div>
                                            )}
                                            <div className="bg-gradient-to-br from-primary-50 to-primary-100 h-32 flex items-center justify-center">
                                                <div className="text-5xl">{product.emoji}</div>
                                            </div>
                                            <div className="p-3">
                                                <h3 className="font-semibold text-sm mb-1 text-slate-900 line-clamp-2 h-10">
                                                    {product.name}
                                                </h3>
                                                <p className="text-primary-600 font-bold text-lg">{product.price}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                            </div>
                        </div>
                    )}

                    {/* Institutional & Office Furniture */}
                    {(activeCategory === 'all' || activeCategory === 'furniture') && (
                        <div>
                            <div className="mb-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">
                                    🏢 Institutional & Office Furniture
                                </h2>
                                <p className="text-slate-600">Professional furniture solutions • {institutionalFurniture.length} Categories Available</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                {institutionalFurniture.map((category, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                        className="bg-white rounded-xl shadow-sm p-5 hover:shadow-lg transition-all duration-300 border border-primary-100"
                                    >
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="text-3xl">{category.icon}</span>
                                            <div>
                                                <h3 className="text-lg font-bold text-slate-900">{category.category}</h3>
                                                <p className="text-xs text-primary-600 font-semibold">{category.price}</p>
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            {category.items.map((item, itemIndex) => (
                                                <div
                                                    key={itemIndex}
                                                    className="flex items-center p-2 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors duration-200"
                                                >
                                                    <span className="text-base mr-2">{category.emoji}</span>
                                                    <span className="font-mono text-sm text-slate-700 font-medium">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section - Compact */}
            <section className="bg-white py-8 border-t border-primary-100">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Need a Custom Solution?</h2>
                    <p className="text-slate-600 mb-4">Contact us for personalized quotes and bulk orders</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        <a
                            href="/contact"
                            className="inline-block bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-slate-800 transition-colors duration-200"
                        >
                            Get in Touch
                        </a>
                        <a
                            href="tel:+919842250600"
                            className="inline-block bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-colors duration-200 border-2 border-slate-900"
                        >
                            📞 Call Now
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;
