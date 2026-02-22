import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className={`fixed w-full z-50 transition-all duration-500 ease-out px-4 top-4`}
        >
            <div className={`mx-auto max-w-7xl transition-all duration-500 rounded-full ${isScrolled ? 'glass-dark py-3 px-6 shadow-secondary/5' : 'bg-primary-dark/40 backdrop-blur-sm border border-white/5 py-4 px-8'}`}>
                <div className="flex justify-between items-center">

                    {/* Logo Section */}
                    <Link to="/" className="flex items-center gap-3 group relative">
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: 5 }}
                            className="relative bg-white/5 p-2 rounded-xl border border-white/10 group-hover:border-secondary/50 transition-colors overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-secondary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                            <img src="/assets/logo.png" alt="ATJ & Co. LLP" className="h-8 md:h-10 w-auto object-contain relative z-10 filter drop-shadow-[0_0_8px_rgba(251,191,36,0.3)]" />
                        </motion.div>
                        <div className="flex flex-col justify-center">
                            <span className="font-techno font-bold text-xl md:text-2xl tracking-wide text-white leading-tight flex items-center gap-2">
                                ATJ <span className="text-secondary">&</span> Co.
                            </span>
                            <span className="text-[9px] md:text-[10px] text-accent tracking-[0.3em] uppercase font-medium font-sans">
                                Chartered Accountants
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1">
                        {['Home', 'About Us'].map((item) => {
                            const path = item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`;
                            const isActive = location.pathname === path;
                            return (
                                <Link
                                    key={item}
                                    to={path}
                                    className="relative px-4 py-2 text-sm font-medium transition-colors border border-transparent hover:border-white/5 rounded-full"
                                >
                                    <span className={`relative z-10 ${isActive ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'}`}>{item}</span>
                                    {isActive && (
                                        <motion.div layoutId="nav-indicator" className="absolute inset-0 bg-white/5 rounded-full" />
                                    )}
                                </Link>
                            )
                        })}

                        {/* Services Dropdown */}
                        <div className="relative group cursor-pointer px-4 py-2">
                            <span className={`flex items-center text-sm font-medium transition-colors ${location.pathname.includes('/service') ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                                Services <ChevronDown size={14} className="ml-1 group-hover:rotate-180 transition-transform duration-300 text-secondary" />
                            </span>

                            {/* Mega Menu Dropdown */}
                            <div className="absolute top-[120%] left-1/2 -translate-x-1/2 w-[600px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pt-4">
                                <div className="glass-dark rounded-2xl border border-white/10 p-6 shadow-2xl overflow-hidden relative">
                                    {/* Techno Background elements in dropdown */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10" />
                                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />

                                    <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
                                        <h3 className="text-white font-techno text-lg flex items-center gap-2">
                                            <Sparkles size={18} className="text-secondary" /> Our Expertise
                                        </h3>
                                        <Link to="/services" className="text-xs font-semibold text-accent hover:text-white transition-colors bg-accent/10 hover:bg-accent/20 px-3 py-1 rounded-full">Explore All</Link>
                                    </div>

                                    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                                        {[
                                            { name: 'Corporate Advisory', path: 'corporate-services', desc: 'M&A and Strategy' },
                                            { name: 'Taxation & Litigation', path: 'taxation', desc: 'Direct & Indirect Tax' },
                                            { name: 'Virtual CFO', path: 'virtual-cfo', desc: 'Financial Leadership' },
                                            { name: 'Audit & Assurance', path: 'audit-assurance', desc: 'Statutory Compliance' },
                                            { name: 'Global Expansion', path: 'global-expansion', desc: 'FEMA & Cross-border' },
                                            { name: 'Startup Ecosystem', path: 'startup-advisory', desc: 'Incubation to Exit' }
                                        ].map((service, idx) => (
                                            <motion.div
                                                key={service.path}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.05 }}
                                            >
                                                <Link
                                                    to={`/service/${service.path}`}
                                                    className="group/item flex flex-col p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
                                                >
                                                    <span className="text-sm text-gray-200 group-hover/item:text-secondary font-medium transition-colors">{service.name}</span>
                                                    <span className="text-xs text-gray-500 mt-1">{service.desc}</span>
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link to="/insights" className="relative px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors border border-transparent hover:border-white/5 rounded-full">
                            Insights
                        </Link>
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden lg:block ml-4">
                        <Link to="/contact-us" className="btn-primary flex items-center gap-2 text-sm shadow-secondary/20">
                            Discuss Your Project
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors relative z-50"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 top-[80px] px-4 pb-4 z-40 lg:hidden"
                    >
                        <div className="glass-dark h-full w-full rounded-3xl border border-white/10 p-6 flex flex-col items-center justify-center space-y-8 relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] bg-repeat opacity-50 absolute z-0" />

                            {['Home', 'About Us', 'Services', 'Insights'].map((item, i) => (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    key={item}
                                    className="relative z-10 w-full text-center"
                                >
                                    <Link
                                        to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                                        className="text-2xl font-techno font-medium text-gray-300 hover:text-white transition-colors block py-2"
                                    >
                                        {item}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="relative z-10 mt-8"
                            >
                                <Link
                                    to="/contact-us"
                                    className="btn-primary block px-10 py-4 text-lg"
                                >
                                    Contact Us
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;
