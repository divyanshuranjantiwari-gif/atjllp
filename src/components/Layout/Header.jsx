import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Linkedin, ChevronDown } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    return (
        <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl py-2' : 'bg-slate-900/80 backdrop-blur-sm py-4'}`}>
            {/* Top Bar */}
            <div className={`container mx-auto px-6 transition-all duration-300 ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100 mb-2'}`}>
                <div className="flex justify-between items-center text-xs md:text-sm text-gray-400 border-b border-gray-700/50 pb-2">
                    <div className="flex items-center space-x-6">
                        <span className="flex items-center hover:text-secondary transition-colors cursor-pointer">
                            <Phone size={12} className="mr-2 text-secondary" /> +91 98110 65952
                        </span>
                        <span className="flex items-center hover:text-secondary transition-colors cursor-pointer">
                            <Mail size={12} className="mr-2 text-secondary" /> info@atjllp.com
                        </span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary transition-colors">
                            <Linkedin size={14} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo Section */}
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="bg-white p-2 rounded-lg shadow-lg group-hover:shadow-secondary/20 transition-all duration-300">
                        <img src="/assets/logo.png" alt="ATJ & Co. LLP" className="h-10 md:h-12 w-auto object-contain" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <span className="font-serif font-bold text-xl md:text-2xl tracking-wide text-white leading-tight">
                            ATJ & Co.
                        </span>
                        <span className="text-[10px] md:text-xs text-secondary tracking-[0.2em] uppercase font-medium">
                            Chartered Accountants
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {['Home', 'About Us'].map((item) => (
                        <Link
                            key={item}
                            to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group py-2"
                        >
                            {item}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}

                    {/* Services Dropdown */}
                    <div className="relative group cursor-pointer py-2">
                        <span className="flex items-center text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                            Services <ChevronDown size={14} className="ml-1 group-hover:rotate-180 transition-transform duration-300" />
                        </span>
                        <div className="absolute top-full left-0 mt-2 w-64 bg-slate-900 border border-gray-800 shadow-2xl rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                            <div className="py-2">
                                <Link to="/services" className="block px-4 py-3 text-sm text-gray-300 hover:bg-white/5 hover:text-secondary transition-colors border-b border-gray-800">All Services</Link>
                                {[
                                    { name: 'Corporate Advisory', path: 'corporate-services' },
                                    { name: 'Taxation & Litigation', path: 'taxation' },
                                    { name: 'Virtual CFO', path: 'virtual-cfo' },
                                    { name: 'Audit & Assurance', path: 'audit-assurance' },
                                    { name: 'Global Expansion', path: 'global-expansion' },
                                    { name: 'Startup Ecosystem', path: 'startup-advisory' }
                                ].map((service) => (
                                    <Link
                                        key={service.path}
                                        to={`/service/${service.path}`}
                                        className="block px-4 py-3 text-sm text-gray-400 hover:bg-white/5 hover:text-secondary transition-colors"
                                    >
                                        {service.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Link to="/insights" className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group py-2">
                        Insights
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                    </Link>

                    <Link to="/contact-us" className="bg-gradient-to-r from-secondary to-secondary-dark text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-secondary/20 hover:shadow-secondary/40 hover:-translate-y-0.5 transition-all duration-300">
                        Contact Us
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-slate-950/98 backdrop-blur-xl z-40 transition-all duration-500 md:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                    {['Home', 'About Us', 'Services', 'Insights'].map((item) => (
                        <Link
                            key={item}
                            to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-2xl font-serif font-medium text-white hover:text-secondary transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                    <Link
                        to="/contact-us"
                        onClick={() => setIsMenuOpen(false)}
                        className="bg-secondary text-white px-10 py-4 rounded-full text-lg font-semibold shadow-xl shadow-secondary/20"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
