import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Search, X, ShoppingCart, MessageCircle, Download } from 'lucide-react';
import pamphletPDF from '../assets/City-Chair-Pamphlet.pdf';

// Import product images
import whiteBoard from '../assets/products/white board.webp';
import chalkBoard from '../assets/products/chalk board.webp';
import greenCeraBoard from '../assets/products/green cera boards(with magnetic capabilities).jpg';
import corkBoard from '../assets/products/cork board.jpg';
import flipChart from '../assets/products/flip chart with easel stand.webp';
import namePlates from '../assets/products/name plates.webp';
import signages from '../assets/products/signages.png';
import planner from '../assets/products/planner.png';
import acrylicMagazineStand from '../assets/products/acrclic magazine stand.jpg';
import newspaperStand from '../assets/products/newspaper stand.jpg';
import rotatingBookStand from '../assets/products/rotating book stand.webp';
import mapStand from '../assets/products/map stand.jpg';
import lobbyStand from '../assets/products/lobby stand(with dataline board).jpg';
import lecturnPodium from '../assets/products/lecturn podium.jpg';
import keyboard from '../assets/products/keyboard.jpg';
import avitrol from '../assets/products/avitrol.jpg';
import deflex from '../assets/products/deflex.jpg';
import ecodisplay from '../assets/products/ecodisplay.jpg';
import infostack from '../assets/products/infostack.jpg';
import minitrol from '../assets/products/minitrol.png';
import kiosk from '../assets/products/kiosk.png';
import displayInMinutes from '../assets/products/display in minutes.jpg';
import multipanel from '../assets/products/multipanel.jpg';
import posterpeg from '../assets/products/posterpeg.jpg';
import reverseUStands from '../assets/products/reverse u stands.jpg';
import scrollup from '../assets/products/scrollup.jpg';
import snapupFrames from '../assets/products/snapup frames.jpg';
import starBasedStand from '../assets/products/star based stand(with acryclic cover).png';
import translideBox from '../assets/products/translide box.png';
import twinPoleStand from '../assets/products/twin pole stand(with combination board).png';
import directer from '../assets/products/directer.png';

const Products = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = [
        // Writing & Display Boards
        {
            id: 1,
            name: 'White Board',
            category: 'boards',
            image: whiteBoard,
            price: '₹2,500',
            description: 'High-quality magnetic white board with smooth writing surface',
            features: ['Magnetic surface', 'Easy to clean', 'Durable aluminum frame', 'Multiple sizes available']
        },
        {
            id: 2,
            name: 'Chalk Board',
            category: 'boards',
            image: chalkBoard,
            price: '₹1,800',
            description: 'Traditional chalk board perfect for classrooms and offices',
            features: ['Smooth writing surface', 'Wooden frame', 'Easy maintenance', 'Classic design']
        },
        {
            id: 3,
            name: 'Green Cera Board',
            category: 'boards',
            image: greenCeraBoard,
            price: '₹3,200',
            description: 'Premium ceramic board with magnetic capabilities',
            features: ['Magnetic surface', 'Scratch resistant', 'Long-lasting', 'Professional finish']
        },
        {
            id: 4,
            name: 'Cork Board',
            category: 'boards',
            image: corkBoard,
            price: '₹2,000',
            description: 'Natural cork notice board for pinning documents and notes',
            features: ['Natural cork material', 'Pin-friendly surface', 'Wooden frame', 'Multiple sizes']
        },

        // Presentation Equipment
        {
            id: 5,
            name: 'Flip Chart with Easel Stand',
            category: 'presentation',
            image: flipChart,
            price: '₹4,500',
            description: 'Professional flip chart with adjustable easel stand',
            features: ['Adjustable height', 'Portable design', 'Paper holder', 'Stable base']
        },
        {
            id: 6,
            name: 'Lecturn Podium',
            category: 'presentation',
            image: lecturnPodium,
            price: '₹8,500',
            description: 'Professional podium for presentations and speeches',
            features: ['Sturdy construction', 'Storage shelf', 'Professional design', 'Easy assembly']
        },
        {
            id: 7,
            name: 'Keyboard Tray',
            category: 'presentation',
            image: keyboard,
            price: '₹1,500',
            description: 'Ergonomic keyboard tray for comfortable typing',
            features: ['Adjustable angle', 'Space-saving', 'Easy installation', 'Durable material']
        },

        // Information Displays
        {
            id: 8,
            name: 'Name Plates',
            category: 'displays',
            image: namePlates,
            price: '₹500',
            description: 'Professional name plates for offices and desks',
            features: ['Customizable', 'Premium finish', 'Multiple designs', 'Durable material']
        },
        {
            id: 9,
            name: 'Signages',
            category: 'displays',
            image: signages,
            price: '₹1,200',
            description: 'Clear and professional signage solutions',
            features: ['Custom text', 'Weather resistant', 'Easy to install', 'Professional look']
        },
        {
            id: 10,
            name: 'Planner Board',
            category: 'displays',
            image: planner,
            price: '₹3,500',
            description: 'Wall-mounted planner for scheduling and organization',
            features: ['Monthly/weekly layouts', 'Dry-erase surface', 'Grid design', 'Easy to update']
        },

        // Display Stands
        {
            id: 11,
            name: 'Acrylic Magazine Stand',
            category: 'stands',
            image: acrylicMagazineStand,
            price: '₹2,800',
            description: 'Modern acrylic magazine display stand',
            features: ['Clear acrylic', 'Multiple pockets', 'Sleek design', 'Easy to clean']
        },
        {
            id: 12,
            name: 'Newspaper Stand',
            category: 'stands',
            image: newspaperStand,
            price: '₹3,200',
            description: 'Professional newspaper display stand',
            features: ['Multiple tiers', 'Sturdy construction', 'Space-efficient', 'Easy access']
        },
        {
            id: 13,
            name: 'Rotating Book Stand',
            category: 'stands',
            image: rotatingBookStand,
            price: '₹5,500',
            description: '360-degree rotating book display stand',
            features: ['360° rotation', 'Multiple shelves', 'Compact design', 'Easy browsing']
        },
        {
            id: 14,
            name: 'Map Stand',
            category: 'stands',
            image: mapStand,
            price: '₹4,200',
            description: 'Professional map display stand',
            features: ['Adjustable height', 'Stable base', 'Easy to use', 'Portable']
        },
        {
            id: 15,
            name: 'Lobby Stand',
            category: 'stands',
            image: lobbyStand,
            price: '₹6,500',
            description: 'Premium lobby display stand with dataline board',
            features: ['Professional appearance', 'Information display', 'Durable construction', 'Easy updates']
        },
        {
            id: 16,
            name: 'Reverse U Stands',
            category: 'stands',
            image: reverseUStands,
            price: '₹3,800',
            description: 'Versatile reverse U display stands',
            features: ['Stable design', 'Easy assembly', 'Professional look', 'Multiple uses']
        },
        {
            id: 17,
            name: 'Star Based Stand',
            category: 'stands',
            image: starBasedStand,
            price: '₹5,200',
            description: 'Star-based stand with acrylic cover',
            features: ['Stable star base', 'Protective cover', 'Modern design', 'Easy to clean']
        },
        {
            id: 18,
            name: 'Twin Pole Stand',
            category: 'stands',
            image: twinPoleStand,
            price: '₹7,500',
            description: 'Twin pole stand with combination board',
            features: ['Dual support', 'Combination board', 'Adjustable', 'Professional grade']
        },

        // Specialized Display Systems
        {
            id: 19,
            name: 'Avitrol Display System',
            category: 'systems',
            image: avitrol,
            price: '₹12,500',
            description: 'Advanced Avitrol display system',
            features: ['Professional system', 'Easy installation', 'Modular design', 'High quality']
        },
        {
            id: 20,
            name: 'Deflex System',
            category: 'systems',
            image: deflex,
            price: '₹10,800',
            description: 'Flexible Deflex display system',
            features: ['Flexible mounting', 'Easy updates', 'Professional look', 'Durable']
        },
        {
            id: 21,
            name: 'Ecodisplay',
            category: 'systems',
            image: ecodisplay,
            price: '₹9,500',
            description: 'Eco-friendly display system',
            features: ['Sustainable materials', 'Modern design', 'Easy assembly', 'Recyclable']
        },
        {
            id: 22,
            name: 'Infostack',
            category: 'systems',
            image: infostack,
            price: '₹8,200',
            description: 'Stackable information display system',
            features: ['Modular stacking', 'Space-efficient', 'Easy organization', 'Professional']
        },
        {
            id: 23,
            name: 'Minitrol',
            category: 'systems',
            image: minitrol,
            price: '₹6,800',
            description: 'Compact Minitrol display system',
            features: ['Compact size', 'Easy to use', 'Professional finish', 'Versatile']
        },
        {
            id: 24,
            name: 'Kiosk Display',
            category: 'systems',
            image: kiosk,
            price: '₹25,000',
            description: 'Professional kiosk display system',
            features: ['Full kiosk solution', 'Interactive ready', 'Durable construction', 'Modern design']
        },
        {
            id: 25,
            name: 'Display in Minutes',
            category: 'systems',
            image: displayInMinutes,
            price: '₹7,500',
            description: 'Quick-setup display system',
            features: ['Fast assembly', 'No tools required', 'Portable', 'Professional look']
        },
        {
            id: 26,
            name: 'Multipanel System',
            category: 'systems',
            image: multipanel,
            price: '₹11,200',
            description: 'Multi-panel display system',
            features: ['Multiple panels', 'Flexible configuration', 'Professional grade', 'Easy updates']
        },
        {
            id: 27,
            name: 'Posterpeg',
            category: 'systems',
            image: posterpeg,
            price: '₹4,500',
            description: 'Poster display peg system',
            features: ['Easy poster changes', 'Secure mounting', 'Professional look', 'Durable']
        },
        {
            id: 28,
            name: 'Scrollup Banner',
            category: 'systems',
            image: scrollup,
            price: '₹3,800',
            description: 'Retractable scroll-up banner stand',
            features: ['Retractable design', 'Portable', 'Easy setup', 'Professional finish']
        },
        {
            id: 29,
            name: 'Snapup Frames',
            category: 'systems',
            image: snapupFrames,
            price: '₹2,200',
            description: 'Quick-change snap-up frames',
            features: ['Quick poster changes', 'Snap-open design', 'Wall-mounted', 'Professional']
        },
        {
            id: 30,
            name: 'Translide Box',
            category: 'systems',
            image: translideBox,
            price: '₹8,900',
            description: 'Translucent slide display box',
            features: ['Backlit ready', 'Professional finish', 'Easy installation', 'Modern design']
        },
        {
            id: 31,
            name: 'Directer System',
            category: 'systems',
            image: directer,
            price: '₹9,800',
            description: 'Professional direction and wayfinding system',
            features: ['Clear signage', 'Modular design', 'Easy updates', 'Professional look']
        },
    ];

    const categories = [
        { id: 'all', name: 'All Products', emoji: '📦' },
        { id: 'boards', name: 'Boards', emoji: '📋' },
        { id: 'presentation', name: 'Presentation', emoji: '🎤' },
        { id: 'displays', name: 'Displays', emoji: '📊' },
        { id: 'stands', name: 'Stands', emoji: '🗂️' },
        { id: 'systems', name: 'Display Systems', emoji: '🖼️' },
    ];

    const filteredProducts = products.filter(product => {
        const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const handleBuyWhatsApp = (productName) => {
        const message = `Hi, I'm interested in buying ${productName}. Please provide more details.`;
        const whatsappUrl = `https://wa.me/919842250600?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-slate-900 text-white py-10">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">Our Products</h1>
                    <p className="text-lg text-gray-300 mb-4">Quality office solutions • {products.length} Products Available</p>
                    <a
                        href={pamphletPDF}
                        download="City-Office-Needs-Chair-Pamphlet.pdf"
                        className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-colors duration-200 shadow-lg"
                    >
                        <Download size={20} />
                        Download Pamphlet
                    </a>
                </div>
            </section>

            {/* Filter Bar */}
            <section className="py-4 bg-white sticky top-[65px] z-40 border-b-2 border-primary-100 shadow-sm">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex flex-wrap justify-center gap-3">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 text-sm ${activeCategory === category.id
                                        ? 'bg-slate-900 text-white shadow-md'
                                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                        }`}
                                >
                                    <span className="mr-1">{category.emoji}</span>
                                    {category.name}
                                </button>
                            ))}
                        </div>

                        <div className="relative w-full md:w-64">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 text-sm"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-8 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="mb-6">
                        <p className="text-slate-600">Showing {filteredProducts.length} products</p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {filteredProducts.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.02 }}
                                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-200 cursor-pointer group"
                                onClick={() => setSelectedProduct(product)}
                            >
                                <div className="relative overflow-hidden bg-slate-100 h-48">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
                                            View Details
                                        </span>
                                    </div>
                                </div>
                                <div className="p-3">
                                    <h3 className="font-semibold text-sm mb-1 text-slate-900 line-clamp-2 h-10">
                                        {product.name}
                                    </h3>
                                    <p className="text-slate-900 font-bold text-lg">{product.price}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Detail Modal */}
            <AnimatePresence>
                {selectedProduct && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedProduct(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="sticky top-0 bg-white border-b border-slate-200 p-4 flex justify-between items-center z-10">
                                <h2 className="text-2xl font-bold text-slate-900">{selectedProduct.name}</h2>
                                <button
                                    onClick={() => setSelectedProduct(null)}
                                    className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="p-6">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="bg-slate-50 rounded-xl p-8 flex items-center justify-center">
                                        <img
                                            src={selectedProduct.image}
                                            alt={selectedProduct.name}
                                            className="max-w-full max-h-96 object-contain"
                                        />
                                    </div>

                                    <div>
                                        <div className="mb-6">
                                            <p className="text-3xl font-bold text-slate-900 mb-2">{selectedProduct.price}</p>
                                            <p className="text-slate-600">{selectedProduct.description}</p>
                                        </div>

                                        <div className="mb-6">
                                            <h3 className="text-lg font-bold text-slate-900 mb-3">Key Features</h3>
                                            <ul className="space-y-2">
                                                {selectedProduct.features.map((feature, index) => (
                                                    <li key={index} className="flex items-start gap-2">
                                                        <span className="text-green-600 mt-1">✓</span>
                                                        <span className="text-slate-700">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="flex gap-3">
                                            <button
                                                onClick={() => handleBuyWhatsApp(selectedProduct.name)}
                                                className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
                                            >
                                                <MessageCircle size={20} />
                                                Buy via WhatsApp
                                            </button>
                                            <a
                                                href="/contact"
                                                className="flex-1 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 text-center"
                                            >
                                                Contact Us
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* CTA Section */}
            <section className="bg-white py-8 border-t border-slate-200">
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
