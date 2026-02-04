import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, Send, Clock, MessageSquare } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Format message for WhatsApp
        const whatsappNumber = '919842250600'; // Your WhatsApp number
        const message = `Hello! I'm ${formData.name}

📧 Email: ${formData.email}
📞 Phone: ${formData.phone}

Message:
${formData.message}`;

        // Encode the message for URL
        const encodedMessage = encodeURIComponent(message);

        // Open WhatsApp with pre-filled message
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');

        // Reset form
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    const contactInfo = [
        {
            icon: <MapPin size={28} className="text-primary-600" />,
            title: 'Visit Us',
            content: '526, First Floor, Aazhi Dental Care, Opp. NSR Bakery, Marudhamalai Main Road, P.N. Pudur, Coimbatore - 641041',
            link: null,
        },
        {
            icon: <Phone size={28} className="text-primary-600" />,
            title: 'Call Us',
            content: '+91 98422 50600',
            link: 'tel:+919842250600',
        },
        {
            icon: <Mail size={28} className="text-primary-600" />,
            title: 'Email Us',
            content: 'cityofficeneeds@gmail.com',
            link: 'mailto:cityofficeneeds@gmail.com',
        },
    ];

    const quickInfo = [
        { icon: <Clock size={20} />, label: 'Mon - Sat', value: '9:00 AM - 6:00 PM' },
        { icon: <Clock size={20} />, label: 'Sunday', value: 'Closed' },
        { icon: <MessageSquare size={20} />, label: 'Response Time', value: 'Within 24 hours' },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section - Glossy Blue */}
            <section className="glossy-blue text-white py-14 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-3 drop-shadow-lg">Contact Us</h1>
                    <p className="text-lg text-blue-100">We're here to help • Get in touch with us today</p>
                </div>
            </section>

            {/* Contact Section - Compact Two Column */}
            <section className="py-10 bg-primary-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
                        {/* Left Column - Contact Info (2/5) */}
                        <div className="lg:col-span-2 space-y-4">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Get in Touch</h2>

                                <div className="space-y-3">
                                    {contactInfo.map((info, index) => (
                                        <div
                                            key={index}
                                            className="flex gap-4 bg-white p-5 rounded-xl shadow-sm border border-primary-100 hover:shadow-md transition-shadow group"
                                        >
                                            <div className="flex-shrink-0">
                                                <div className="bg-primary-50 p-3 rounded-xl group-hover:bg-primary-100 transition-colors">
                                                    {info.icon}
                                                </div>
                                            </div>
                                            <div className="flex-grow">
                                                <h3 className="font-bold text-slate-900 text-lg mb-1">{info.title}</h3>
                                                {info.link ? (
                                                    <a href={info.link} className="text-sm text-slate-600 hover:text-primary-600 transition-colors leading-relaxed block">
                                                        {info.content}
                                                    </a>
                                                ) : (
                                                    <p className="text-sm text-slate-600 leading-relaxed">{info.content}</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Quick Info */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white p-4 rounded-xl border border-primary-100 shadow-sm"
                            >
                                <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                    <span className="text-xl">ℹ️</span>
                                    Quick Information
                                </h3>
                                <div className="space-y-2">
                                    {quickInfo.map((item, index) => (
                                        <div key={index} className="flex items-center justify-between text-sm">
                                            <div className="flex items-center gap-2 text-slate-600">
                                                <div className="text-primary-600">{item.icon}</div>
                                                <span>{item.label}</span>
                                            </div>
                                            <span className="font-semibold text-slate-900">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Map Placeholder */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <a
                                    href="https://maps.app.goo.gl/WUfV7FnTiGfZYUSx8?g_st=aw"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block group"
                                >
                                    <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl h-48 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all border border-primary-200 group-hover:border-primary-300">
                                        <div className="text-center text-primary-700 group-hover:text-primary-800 transition-colors">
                                            <MapPin size={40} className="mx-auto mb-2 transform group-hover:scale-110 transition-transform" />
                                            <p className="font-semibold">View on Google Maps</p>
                                            <p className="text-sm">Coimbatore, Tamil Nadu</p>
                                        </div>
                                    </div>
                                </a>
                            </motion.div>
                        </div>

                        {/* Right Column - Contact Form (3/5) */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-3"
                        >
                            <div className="bg-white rounded-xl shadow-sm p-6 border border-primary-100">
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Send us a Message</h2>
                                <p className="text-slate-600 mb-6 text-sm">Fill out the form below and we'll get back to you within 24 hours</p>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="name" className="block text-slate-700 font-semibold mb-1.5 text-sm">
                                                Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-2.5 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-sm"
                                                placeholder="Your Name"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block text-slate-700 font-semibold mb-1.5 text-sm">
                                                Phone *
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-2.5 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-sm"
                                                placeholder="+91 98422 50600"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-slate-700 font-semibold mb-1.5 text-sm">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2.5 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-sm"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-slate-700 font-semibold mb-1.5 text-sm">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="5"
                                            className="w-full px-4 py-2.5 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none transition-all duration-200 text-sm"
                                            placeholder="Tell us about your requirements..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full btn-glossy-gold text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2"
                                    >
                                        <Send size={18} />
                                        Send Message
                                    </button>
                                </form>

                                {/* Additional CTA */}
                                <div className="mt-6 p-4 bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg border border-primary-200">
                                    <p className="text-sm text-slate-700 mb-2 text-center">
                                        <strong>Need immediate assistance?</strong>
                                    </p>
                                    <div className="flex flex-wrap justify-center gap-3">
                                        <a
                                            href="tel:+919842250600"
                                            className="inline-flex items-center gap-2 btn-glossy-blue text-white px-5 py-3 rounded-xl text-sm font-bold"
                                        >
                                            <Phone size={16} />
                                            Call Now
                                        </a>
                                        <a
                                            href="https://wa.me/919842250600"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors"
                                        >
                                            💬 WhatsApp
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
