import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin, Facebook, Twitter, ArrowRight, Calendar } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary-dark text-white pt-20 pb-10 border-t border-gray-800">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center mb-6">
                            <div className="bg-white p-1.5 rounded mr-3">
                                <img src="/assets/logo.png" alt="ATJ Logo" className="h-8 w-auto" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold">ATJ & Co. <span className="text-secondary">LLP</span></h3>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            A premier Chartered Accountancy firm delivering excellence in Audit, Taxation, and Advisory services since 2008. Committed to your growth and compliance.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-secondary transition-colors"><Linkedin size={18} /></a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-secondary transition-colors"><Facebook size={18} /></a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-secondary transition-colors"><Twitter size={18} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white border-l-4 border-secondary pl-3">Quick Access</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><Link to="/about-us" className="hover:text-secondary transition-colors flex items-center"><ArrowRight size={14} className="mr-2" /> About Us</Link></li>
                            <li><Link to="/careers" className="hover:text-secondary transition-colors flex items-center"><ArrowRight size={14} className="mr-2" /> Careers</Link></li>
                            <li><Link to="/compliance-calendar" className="hover:text-secondary transition-colors flex items-center"><Calendar size={14} className="mr-2" /> Compliance Calendar</Link></li>
                            <li><Link to="/tax-calculator" className="hover:text-secondary transition-colors flex items-center"><ArrowRight size={14} className="mr-2" /> Tax Calculator</Link></li>
                            <li><Link to="/contact-us" className="hover:text-secondary transition-colors flex items-center"><ArrowRight size={14} className="mr-2" /> Contact Support</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white border-l-4 border-secondary pl-3">Our Expertise</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><Link to="/service/corporate-services" className="hover:text-secondary transition-colors">Corporate Advisory</Link></li>
                            <li><Link to="/service/taxation" className="hover:text-secondary transition-colors">Taxation & Litigation</Link></li>
                            <li><Link to="/virtual-cfo-services" className="hover:text-secondary transition-colors">Virtual CFO</Link></li>
                            <li><Link to="/startup-advisory" className="hover:text-secondary transition-colors">Startup Consulting</Link></li>
                            <li><Link to="/service/audit-assurance" className="hover:text-secondary transition-colors">Audit & Assurance</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white border-l-4 border-secondary pl-3">Stay Updated</h4>
                        <p className="text-gray-400 mb-4 text-sm">Get the latest tax updates and financial insights delivered to your inbox.</p>
                        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-gray-800/50 border border-gray-700 text-white px-4 py-3 rounded focus:outline-none focus:border-secondary transition-colors"
                            />
                            <button type="submit" className="w-full bg-secondary text-white px-4 py-3 rounded hover:bg-secondary-light transition-colors font-semibold uppercase tracking-wide text-sm">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} ATJ & Co. LLP. All Rights Reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
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
