import React from 'react';
import { TrendingUp, CheckCircle, Zap, Shield, Database, Cpu, Globe, Key } from 'lucide-react';
import { motion } from 'framer-motion';

const StartupAdvisory = () => {
    const services = [
        { icon: <Database />, text: "Business Entity Selection & Infrastructure" },
        { icon: <Globe />, text: "Strategic Architecture (Business Plan)" },
        { icon: <Zap />, text: "Asset Valuation & Metrics" },
        { icon: <TrendingUp />, text: "Capital Procurement Routing (Funding)" },
        { icon: <Shield />, text: "Regulatory Protocols (Startup India)" },
        { icon: <Cpu />, text: "Mentorship & System Optimization" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full bg-primary min-h-screen pt-20 pb-20 text-gray-300"
        >
            {/* Hero Section */}
            <div className="relative pt-24 pb-20 overflow-hidden bg-primary-dark border-b border-white/5">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMSkiLz48L3N2Zz4=')] bg-repeat opacity-20 mix-blend-screen" />
                <div className="absolute top-0 right-1/4 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-accent/10 rounded-full blur-[100px] mix-blend-screen z-0 animate-blob" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block inline-flex items-center gap-2">
                            <span className="w-4 h-[1px] bg-secondary"></span> Service Protocol _02
                        </span>
                        <h1 className="text-5xl md:text-7xl font-techno font-bold mb-6 text-white max-w-4xl leading-tight">
                            Venture <span className="text-gradient">Incubation</span>
                        </h1>
                        <p className="text-xl text-gray-400 font-light max-w-2xl leading-relaxed">
                            A complete operational framework for emerging tech and enterprise entities. We engineer your structural foundation for hyper-growth.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-6 mt-16 z-20 relative">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-2"
                    >
                        <div className="glass-dark rounded-3xl p-8 md:p-12 border border-white/5 relative overflow-hidden mb-8 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-[80px] pointer-events-none -z-10"></div>

                            <h2 className="text-2xl md:text-3xl font-techno font-bold mb-6 text-white flex items-center">
                                <Key className="text-secondary mr-3" size={28} /> Empowering New Nodes
                            </h2>
                            <p className="text-gray-400 mb-8 leading-relaxed text-lg font-light">
                                Initiating a network node (startup) requires robust architectural planning. Our Advisory protocols are engineered to support founders through every lifecycle phase—from conceptualization to market execution and aggressive scaling. We provide the operational scaffolding required to build a resilient, high-valuation entity.
                            </p>

                            <h3 className="text-xl font-techno font-bold mb-6 text-white uppercase tracking-wider flex items-center gap-3">
                                <span className="w-8 h-[2px] bg-white/20"></span> Optimization Matrix
                            </h3>

                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="space-y-4"
                            >
                                {services.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center group hover:border-accent/30 transition-colors relative overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <div className="text-accent mr-5 bg-accent/10 p-3 rounded-lg group-hover:scale-110 transition-transform relative z-10 shadow-[0_0_15px_rgba(6,182,212,0.2)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                                            {React.cloneElement(item.icon, { size: 24 })}
                                        </div>
                                        <span className="text-gray-300 font-techno tracking-wide text-lg relative z-10 group-hover:text-white transition-colors">{item.text}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="glass-card rounded-2xl p-8 border border-white/10 h-fit sticky top-32 group relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-accent/10">
                            {/* Circuit board pattern */}
                            <div className="absolute inset-0 opacity-20 pointer-events-none -z-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>

                            <h3 className="text-xl font-techno font-bold mb-4 text-white uppercase tracking-widest flex items-center gap-2">
                                <Shield className="text-secondary" size={20} /> Startup India Matrix
                            </h3>
                            <p className="text-sm font-mono text-gray-400 mb-6 leading-relaxed">
                                We facilitate rapid deployment into the Startup India network, unlocking elite security and operational privileges:
                            </p>

                            <ul className="space-y-5">
                                {[
                                    { text: "Tax Exemption Protocols", status: "VERIFIED" },
                                    { text: "Self-Certification Compliance", status: "ACTIVE" },
                                    { text: "IPR Defense Systems", status: "ENABLED" }
                                ].map((benefit, idx) => (
                                    <li key={idx} className="flex flex-col">
                                        <div className="flex items-center text-sm font-techno text-gray-300 mb-1">
                                            <CheckCircle size={16} className="text-accent mr-3 drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]" />
                                            {benefit.text}
                                        </div>
                                        <span className="text-[10px] font-mono text-green-500 ml-7 tracking-widest">[{benefit.status}]</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default StartupAdvisory;
