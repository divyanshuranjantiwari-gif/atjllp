import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle, Users, Building, Briefcase, TrendingUp, Shield, Globe, Sparkles, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Reusable Scroll Reveal Component
const FadeInWhenVisible = ({ children, delay = 0, direction = 'up' }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const variants = {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
            x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: { duration: 0.8, delay, ease: "easeOut" }
        }
    };

    return (
        <motion.div ref={ref} animate={controls} initial="hidden" variants={variants}>
            {children}
        </motion.div>
    );
};

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full relative bg-primary overflow-hidden"
        >
            {/* --- HERO SECTION (Techno Glows) --- */}
            <section className="relative min-h-[90vh] flex items-center pt-20 pb-32">
                {/* Background Grid & Globs */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMSkiLz48L3N2Zz4=')] bg-repeat opacity-40 animate-grid-scroll mix-blend-screen" />
                <div className="absolute top-1/4 right-1/4 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-secondary/15 rounded-full blur-[120px] mix-blend-screen animate-blob" />
                <div className="absolute bottom-1/4 left-1/4 w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-accent/10 rounded-full blur-[150px] mix-blend-screen animate-blob delay-200" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-5xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
                        >
                            <Sparkles size={16} className="text-secondary" />
                            <span className="text-sm font-techno text-gray-300 uppercase tracking-widest">Next-Gen Financial Architecture</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-techno font-bold mb-6 text-white leading-[1.1]"
                        >
                            Engineering <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-white to-accent filter drop-shadow-[0_0_20px_rgba(251,191,36,0.2)]">Financial Supremacy</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
                        >
                            ATJ & Co. LLP deploys military-grade compliance, algorithmic advisory, and strategic foresight to scale modern enterprises beyond traditional boundaries.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-6"
                        >
                            <Link to="/contact-us" className="btn-primary w-full sm:w-auto text-center text-lg flex justify-center items-center gap-2 group">
                                Initiate Protocol <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/services" className="btn-outline w-full sm:w-auto text-center text-lg flex justify-center items-center gap-2 glass group border-white/10 text-white hover:border-white/30 hover:bg-white/5">
                                View Systems <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- STATS SECTION (Floating Holograms) --- */}
            <section className="relative z-20 pb-20">
                <div className="container mx-auto px-6">
                    <div className="glass-dark rounded-3xl p-8 md:p-12 mx-auto max-w-6xl -mt-24 shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-accent/5 opacity-50"></div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                            {[
                                { number: "15+", label: "Years Data", prefix: "", suffix: "" },
                                { number: "500", label: "Active Nodes", prefix: ">", suffix: "" },
                                { number: "10", label: "Capital Deployed", prefix: "₹", suffix: "B+" },
                                { number: "100", label: "Compliance Rate", prefix: "", suffix: "%" }
                            ].map((stat, index) => (
                                <FadeInWhenVisible key={index} delay={index * 0.1}>
                                    <div className="text-center group">
                                        <div className="text-3xl md:text-5xl font-techno font-bold text-white mb-2 tracking-tighter group-hover:scale-110 transition-transform duration-300">
                                            <span className="text-gray-500 font-light text-2xl md:text-4xl">{stat.prefix}</span>
                                            {stat.number}
                                            <span className="text-secondary">{stat.suffix}</span>
                                        </div>
                                        <div className="text-xs md:text-sm text-gray-500 uppercase tracking-widest font-semibold font-techno">{stat.label}</div>
                                    </div>
                                </FadeInWhenVisible>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SERVICES MATRIX --- */}
            <section className="py-32 relative">
                <div className="container mx-auto px-6 relative z-10">
                    <FadeInWhenVisible>
                        <div className="mb-20 text-center">
                            <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm flex items-center justify-center gap-2">
                                <span className="w-8 h-[1px] bg-accent"></span> Core Modules <span className="w-8 h-[1px] bg-accent"></span>
                            </span>
                            <h2 className="text-4xl md:text-6xl font-techno font-bold mt-4 text-white">
                                Operational <span className="text-gradient">Matrix</span>
                            </h2>
                        </div>
                    </FadeInWhenVisible>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { id: "corporate-services", title: "Corporate Auth", icon: <Building size={28} />, desc: "M&A, restructuring, and strategic corporate governance." },
                            { id: "taxation", title: "Taxation Engine", icon: <Briefcase size={28} />, desc: "Algorithmic tax planning and rigorous litigation defense." },
                            { id: "virtual-cfo", title: "Virtual CFO", icon: <TrendingUp size={28} />, desc: "Cloud-based financial leadership and predictive analytics." },
                            { id: "audit-assurance", title: "Audit Protocols", icon: <Shield size={28} />, desc: "Impenetrable statutory audits and internal control testing." },
                            { id: "global-expansion", title: "Global Expansion", icon: <Globe size={28} />, desc: "FEMA compliance and cross-border structuring." },
                            { id: "startup-advisory", title: "Startup Incubation", icon: <Users size={28} />, desc: "Lifecycle financial modeling from seed to IPO." },
                        ].map((service, index) => (
                            <FadeInWhenVisible key={service.id} delay={index * 0.1}>
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    className="glass-card group p-8 rounded-2xl h-full flex flex-col relative overflow-hidden"
                                >
                                    {/* Hover glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-secondary/0 group-hover:from-secondary/10 group-hover:to-transparent transition-colors duration-500"></div>

                                    <div className="text-secondary bg-primary-dark/80 w-14 h-14 rounded-xl flex items-center justify-center mb-6 border border-white/5 relative z-10 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(251,191,36,0.3)] transition-all">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-techno font-bold mb-4 text-white relative z-10">{service.title}</h3>
                                    <p className="text-gray-400 mb-8 flex-grow leading-relaxed relative z-10">{service.desc}</p>

                                    <div className="mt-auto relative z-10">
                                        <Link to={`/service/${service.id}`} className="inline-flex items-center text-sm font-bold text-accent group-hover:text-secondary uppercase tracking-widest transition-colors">
                                            Initialize <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                                        </Link>
                                    </div>
                                </motion.div>
                            </FadeInWhenVisible>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- ADVANTAGE SECTION (Cybernetic Split) --- */}
            <section className="py-32 relative border-y border-white/5 bg-primary-dark/50">
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <FadeInWhenVisible direction='right'>
                            <div className="relative">
                                <div className="absolute -inset-4 bg-secondary/20 blur-2xl rounded-full"></div>
                                <div className="glass-dark p-8 rounded-3xl border border-white/10 relative z-10 overflow-hidden group">
                                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80')] bg-cover bg-center opacity-40 mix-blend-luminosity group-hover:opacity-60 transition-opacity duration-700 group-hover:scale-105 transform"></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent"></div>
                                    <div className="relative z-20 h-64 flex items-end">
                                        <div className="text-white font-techno">
                                            <div className="text-sm text-secondary mb-2 tracking-[0.2em] uppercase">System Status</div>
                                            <div className="text-3xl font-bold">Encrypted & Secure</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeInWhenVisible>

                        <FadeInWhenVisible direction='left'>
                            <div>
                                <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">The ATJ Advantage</span>
                                <h2 className="text-4xl md:text-5xl font-techno font-bold text-white mb-8 leading-tight">
                                    Precision. <br />
                                    <span className="text-gray-500">Performance.</span> <br />
                                    <span className="text-gradient">Protection.</span>
                                </h2>
                                <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-lg">
                                    Bypassing traditional limitations, we integrate deep domain expertise with modern technical frameworks to insulate your assets and accelerate growth.
                                </p>
                                <ul className="space-y-6">
                                    {[
                                        "Automated Compliance Tracking",
                                        "Real-time Financial Dashboards",
                                        "Zero-Tolerance Audit Protocols",
                                        "Encrypted Data Exchanges"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center text-base text-gray-300 group">
                                            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mr-4 group-hover:border-secondary/50 group-hover:bg-secondary/10 transition-colors">
                                                <CheckCircle className="text-secondary" size={16} />
                                            </div>
                                            <span className="font-medium tracking-wide">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeInWhenVisible>
                    </div>
                </div>
            </section>

            {/* --- INSIGHTS TERMINAL --- */}
            <section className="py-32 relative">
                <div className="container mx-auto px-6">
                    <FadeInWhenVisible>
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                            <div>
                                <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span> Data Stream
                                </span>
                                <h2 className="text-4xl md:text-5xl font-techno font-bold text-white mt-4">Terminal <span className="text-gray-600">Logs</span></h2>
                            </div>
                            <Link to="/insights" className="btn-outline text-sm rounded-full glass shrink-0">
                                Open Full Terminal
                            </Link>
                        </div>
                    </FadeInWhenVisible>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { id: "gst-amnesty-2025", date: "T-MINUS 2 Days", title: "New GST Amnesty Protocols Decrypted", category: "GST Core" },
                            { id: "digital-rupee-impact", date: "T-MINUS 10 Days", title: "Digital Rupee: Treasury Impact Analysis", category: "Macro" },
                            { id: "startup-tax-planning", date: "T-MINUS 15 Days", title: "Algorithm for Startup Tax Optimization", category: "Venture" },
                        ].map((post, index) => (
                            <FadeInWhenVisible key={index} delay={index * 0.1}>
                                <div className="group cursor-pointer glass-dark rounded-2xl p-6 border border-white/5 hover:border-accent/50 transition-all duration-300 h-full flex flex-col relative overflow-hidden">
                                    <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="flex items-center justify-between text-xs font-techno tracking-widest text-gray-500 mb-6 relative z-10">
                                        <span className="text-accent bg-accent/10 px-3 py-1 rounded-full">{post.category}</span>
                                        <span className="font-mono">{post.date}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-8 group-hover:text-accent transition-colors leading-snug relative z-10">
                                        {post.title}
                                    </h3>
                                    <div className="mt-auto relative z-10 border-t border-white/10 pt-4 text-sm font-mono text-gray-500 flex items-center justify-between">
                                        <span>STATUS: PUBLIC</span>
                                        <Link to={`/insight/${post.id}`} className="text-secondary flex items-center hover:text-white transition-colors">
                                            READ_FILE() <ChevronRight size={14} className="ml-1" />
                                        </Link>
                                    </div>
                                </div>
                            </FadeInWhenVisible>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Home;
