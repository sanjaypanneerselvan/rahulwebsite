import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Building2 } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Products', path: '/products' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <header className="bg-white backdrop-blur-md text-slate-900 sticky top-0 z-50 shadow-md border-b-2 border-slate-200">
            <nav className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    {/* Logo with Icon and Company Name */}
                    <Link to="/" className="flex items-center gap-3">
                        <div className="bg-slate-900 p-2 rounded-lg">
                            <Building2 size={28} className="text-white" />
                        </div>
                        <div>
                            <h1 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight">
                                City Office Needs
                            </h1>
                            <p className="text-xs text-slate-700 hidden md:block font-medium">Since 2025 • Complete Infrastructure Solutions</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`hover:text-slate-900 transition-colors duration-200 font-medium text-sm ${isActive(link.path) ? 'text-slate-900 border-b-2 border-slate-900 pb-1 font-bold' : 'text-slate-700'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="tel:+919842250600"
                            className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-800 transition-colors duration-200"
                        >
                            📞 Call Now
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-slate-900"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 space-y-2 border-t border-slate-200 pt-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`block py-2 hover:text-slate-900 transition-colors duration-200 ${isActive(link.path) ? 'font-bold text-slate-900' : 'text-slate-700'
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="tel:+919842250600"
                            className="block bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-800 transition-colors duration-200 text-center mt-2"
                        >
                            📞 Call Now
                        </a>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
