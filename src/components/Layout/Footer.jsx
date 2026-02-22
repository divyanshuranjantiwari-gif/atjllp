import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative bg-primary-dark pt-20 pb-10 border-t border-white/5 overflow-hidden">
            {/* Animated Techno Grid Background */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMSkiLz48L3N2Zz4=')] bg-repeat opacity-50 absolute z-0 pointer-events-none" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10 animate-blob" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10 animate-blob delay-200" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center gap-3 inline-block group">
                            <div className="bg-white/5 p-2 rounded-xl border border-white/10 group-hover:border-secondary/50 transition-colors">
                                <img src="/assets/logo.png" alt="ATJ & Co. LLP" className="h-10 w-auto object-contain filter drop-shadow-[0_0_8px_rgba(251,191,36,0.3)]" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-techno font-bold text-2xl tracking-wide text-white leading-tight">
                                    ATJ <span className="text-secondary">&</span> Co. <span className="text-secondary">LLP</span>
                                </span>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            A premier Chartered Accountancy firm delivering excellence in Audit, Taxation, and Advisory services since 2008. Empowering businesses with strategic financial foresight in the digital age.
                        </p>
                        <div className="flex space-x-4">
                            {[Linkedin, Twitter, Facebook].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-secondary hover:border-secondary/50 hover:bg-secondary/10 transition-all duration-300">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-techno font-semibold text-lg mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-secondary animate-glow"></span> Quick Access
                        </h4>
                        <ul className="space-y-3">
                            {['About Us', 'Careers', 'Compliance Calendar', 'Tax Calculator', 'Contact Us'].map((item) => (
                                <li key={item}>
                                    <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white transition-colors flex items-center group text-sm">
                                        <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-secondary" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h4 className="text-white font-techno font-semibold text-lg mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-accent animate-glow"></span> Our Expertise
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { name: 'Corporate Advisory', path: 'corporate-services' },
                                { name: 'Taxation & Litigation', path: 'taxation' },
                                { name: 'Virtual CFO', path: 'virtual-cfo' },
                                { name: 'Audit & Assurance', path: 'audit-assurance' },
                                { name: 'Startup Ecosystem', path: 'startup-advisory' }
                            ].map((service) => (
                                <li key={service.name}>
                                    <Link to={`/service/${service.path}`} className="text-gray-400 hover:text-white transition-colors flex items-center group text-sm">
                                        <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-accent" />
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-techno font-semibold text-lg mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-glow"></span> Stay Updated
                        </h4>
                        <p className="text-gray-400 mb-4 text-sm">Get the latest tax updates and financial insights delivered to your inbox.</p>
                        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                            <div className="relative group">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary to-accent rounded opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 blur"></div>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="relative w-full bg-primary-dark/50 border border-white/10 text-white px-4 py-3 rounded outline-none focus:border-secondary transition-all"
                                />
                            </div>
                            <button type="submit" className="w-full relative overflow-hidden bg-secondary text-primary-dark font-semibold px-4 py-3 rounded shadow-[0_0_15px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.6)] transition-all duration-300 uppercase tracking-wide text-sm">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p className="text-center md:text-left mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} ATJ & Co. LLP. All Rights Reserved.
                    </p>
                    <div className="flex space-x-6">
                        <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
                        <Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
