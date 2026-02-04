import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpg';

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
        <header className="glass relative md:sticky md:top-0 z-50 shadow-xl border-b-2 border-white/30">
            <nav className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3">
                        <img src={logo} alt="City Office Needs Logo" className="h-12 md:h-14 drop-shadow-lg" />
                        <div>
                            <p className="text-xs text-blue-700 hidden md:block font-semibold">Since 2006 • Complete Infrastructure Solutions</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`hover:text-blue-700 transition-all duration-200 font-semibold text-sm ${isActive(link.path)
                                    ? 'text-glossy-gold border-b-2 border-amber-500 pb-1'
                                    : 'text-blue-900'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="tel:+919842250600"
                            className="btn-glossy-gold text-white px-4 py-2 rounded-xl text-sm font-bold"
                        >
                            📞 Call Now
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-blue-900"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 space-y-2 glass rounded-xl p-4 mt-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`block py-2 hover:text-blue-700 transition-colors duration-200 font-semibold ${isActive(link.path) ? 'text-glossy-gold' : 'text-blue-900'
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="tel:+919842250600"
                            className="block btn-glossy-gold text-white px-4 py-2 rounded-xl text-sm font-bold text-center mt-2"
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
