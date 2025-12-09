import React from 'react';
import { ArrowRight, CheckCircle, Users, Building, Briefcase, TrendingUp, Shield, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="w-full overflow-hidden">
            {/* Premium Hero Section */}
            <section className="relative min-h-screen flex items-center bg-primary-dark text-white overflow-hidden">
                {/* Abstract Background Elements */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

                <div className="container mx-auto px-6 relative z-10 pt-20">
                    <div className="max-w-4xl animate-fade-in">
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Excellence in Finance & Law</span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
                            Strategic Financial <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Leadership for Growth</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed font-light">
                            We empower businesses with world-class audit, taxation, and advisory services. Partner with ATJ & Co. LLP to navigate complex regulatory landscapes with confidence.
                        </p>
                        <div className="flex flex-wrap gap-6">
                            <Link to="/contact-us" className="bg-secondary text-white px-10 py-4 rounded-full font-semibold hover:bg-secondary-light transition-all transform hover:scale-105 shadow-lg shadow-secondary/25">
                                Schedule Consultation
                            </Link>
                            <Link to="/services" className="group flex items-center px-8 py-4 rounded-full border border-gray-600 hover:border-white transition-all text-gray-300 hover:text-white">
                                Explore Services <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section - Floating Glass */}
            <div className="container mx-auto px-6 -mt-20 relative z-20">
                <div className="glass-dark rounded-2xl p-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-gray-700">
                    {[
                        { number: "500+", label: "Corporate Clients" },
                        { number: "₹10B+", label: "Assets Advised" },
                        { number: "15+", label: "Years of Excellence" },
                        { number: "100%", label: "Compliance Rate" }
                    ].map((stat, index) => (
                        <div key={index} className="border-r last:border-r-0 border-gray-700/50">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                            <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Services Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm">Our Expertise</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mt-3 mb-6">Holistic Business Solutions</h2>
                        <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { id: "corporate-services", title: "Corporate Advisory", icon: <Building size={32} />, desc: "Strategic guidance for mergers, acquisitions, and corporate restructuring." },
                            { id: "taxation", title: "Taxation & Litigation", icon: <Briefcase size={32} />, desc: "Expert handling of direct/indirect tax matters and representation." },
                            { id: "virtual-cfo", title: "Virtual CFO", icon: <TrendingUp size={32} />, desc: "Outsourced financial leadership to drive profitability and growth." },
                            { id: "audit-assurance", title: "Audit & Assurance", icon: <Shield size={32} />, desc: "Rigorous statutory and internal audits ensuring absolute compliance." },
                            { id: "global-expansion", title: "Global Expansion", icon: <Globe size={32} />, desc: "FEMA compliance and advisory for cross-border transactions." },
                            { id: "startup-advisory", title: "Startup Ecosystem", icon: <Users size={32} />, desc: "End-to-end support from incorporation to fundraising." },
                        ].map((service, index) => (
                            <div key={index} className="group bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150"></div>
                                <div className="text-secondary mb-6 bg-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-primary font-serif">{service.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                                <Link to={`/service/${service.id}`} className="text-primary font-semibold flex items-center group-hover:text-secondary transition-colors">
                                    Learn More <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us - Dark Section */}
            <section className="py-24 bg-primary-dark text-white relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-secondary font-bold tracking-widest uppercase text-sm">Why Partner With Us</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-3 mb-8 leading-tight">
                                Uncompromising Quality. <br /> Unmatched Integrity.
                            </h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                In a complex financial world, you need a partner who understands the nuances of your business. We combine traditional values with modern technology to deliver exceptional results.
                            </p>
                            <ul className="space-y-6">
                                {[
                                    "Proactive Compliance Management",
                                    "Technology-Driven Financial Insights",
                                    "Personalized Partner-Level Attention",
                                    "Deep Industry Knowledge"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center text-lg text-gray-300">
                                        <CheckCircle className="text-secondary mr-4" size={24} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full"></div>
                            <img
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80"
                                alt="Meeting"
                                className="relative rounded-2xl shadow-2xl border border-gray-700/50 grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest Insights */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <span className="text-secondary font-bold tracking-widest uppercase text-sm">Knowledge Hub</span>
                            <h2 className="text-4xl font-serif font-bold text-primary mt-2">Latest Insights</h2>
                        </div>
                        <Link to="/insights" className="hidden md:flex items-center text-primary font-semibold hover:text-secondary transition-colors">
                            View All Articles <ArrowRight size={20} className="ml-2" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { id: "gst-amnesty-2025", date: "Nov 28, 2025", title: "Understanding the New GST Amnesty Scheme 2025", category: "GST" },
                            { id: "digital-rupee-impact", date: "Nov 20, 2025", title: "Impact of Digital Rupee on Corporate Treasury", category: "Finance" },
                            { id: "startup-tax-planning", date: "Nov 25, 2025", title: "Strategic Tax Planning for Startups in India", category: "Startups" },
                        ].map((post, index) => (
                            <div key={index} className="group cursor-pointer">
                                <div className="h-48 bg-gray-200 rounded-xl mb-6 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors"></div>
                                    <img src={`https://images.unsplash.com/photo-${index === 0 ? '1554224155-6726b3ff858f' : index === 1 ? '1621416894569-0f39ed31d247' : '1559526324-4b87b5e36e44'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80`} alt={post.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex items-center text-sm text-gray-500 mb-3">
                                    <span className="text-secondary font-semibold">{post.category}</span>
                                    <span className="mx-2">•</span>
                                    <span>{post.date}</span>
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors leading-snug">
                                    {post.title}
                                </h3>
                                <Link to={`/insight/${post.id}`} className="text-sm font-medium text-gray-600 flex items-center group-hover:translate-x-1 transition-transform">
                                    Read Article <ArrowRight size={14} className="ml-1" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
