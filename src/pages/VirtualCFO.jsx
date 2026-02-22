import React from 'react';
import { CheckCircle, Activity, Target, Shield, Coins, BarChart3, TrendingUp, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const VirtualCFO = () => {
    const offerings = [
        { icon: <Activity />, text: "Financial Planning & Algorithm Design" },
        { icon: <Coins />, text: "Cash Flow Ecosystem Management" },
        { icon: <BarChart3 />, text: "Advanced MIS Reporting & Predictive Analysis" },
        { icon: <TrendingUp />, text: "Resource Optimization Protocols" },
        { icon: <Shield />, text: "Regulatory Compliance Shielding" },
        { icon: <Target />, text: "Strategic Decision Matrix Support" }
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
                <div className="absolute top-0 left-1/4 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-accent/10 rounded-full blur-[100px] mix-blend-screen z-0 animate-blob" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block inline-flex items-center gap-2">
                            <span className="w-4 h-[1px] bg-secondary"></span> Service Protocol _01
                        </span>
                        <h1 className="text-5xl md:text-7xl font-techno font-bold mb-6 text-white max-w-3xl leading-tight">
                            Virtual <span className="text-gradient">CFO</span> Architecture
                        </h1>
                        <p className="text-xl text-gray-400 font-light max-w-2xl leading-relaxed">
                            Deploy enterprise-grade financial intelligence infrastructure for your organization without the overhead of physical resource allocation.
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
                                <Zap className="text-secondary mr-3" size={28} /> Strategic Financial Leadership
                            </h2>
                            <p className="text-gray-400 mb-8 leading-relaxed text-lg font-light">
                                Our Virtual CFO protocol provides rapidly scaling enterprises with the fiscal logic and strategic routing of a Chief Financial Officer. Think of us as a plug-and-play neural network for your physical supply chain and cash systems, engineered to optimize flow and mitigate systemic risks.
                            </p>

                            <h3 className="text-xl font-techno font-bold mb-6 text-white uppercase tracking-wider flex items-center gap-3">
                                <span className="w-8 h-[2px] bg-white/20"></span> Core System Capabilities
                            </h3>

                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                            >
                                {offerings.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start group hover:border-secondary/30 transition-colors"
                                    >
                                        <div className="text-secondary mr-4 mt-1 bg-secondary/10 p-2 rounded-lg group-hover:scale-110 transition-transform">
                                            {React.cloneElement(item.icon, { size: 20 })}
                                        </div>
                                        <span className="text-gray-300 font-mono text-sm uppercase tracking-wide leading-tight group-hover:text-white transition-colors">{item.text}</span>
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
                        <div className="glass-card rounded-2xl p-8 border border-white/10 h-fit sticky top-32 group relative overflow-hidden">
                            {/* Scanning laser line */}
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent/50 group-hover:bg-secondary/80 transform -translate-y-[100px] group-hover:translate-y-[400px] transition-transform duration-[3s] ease-linear shadow-[0_0_10px_rgba(6,182,212,0.8)] z-50 pointer-events-none"></div>

                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none -z-10"></div>

                            <h3 className="text-lg font-techno font-bold mb-6 text-white uppercase tracking-widest border-b border-white/10 pb-4">
                                System Advantages
                            </h3>
                            <ul className="space-y-6">
                                {[
                                    "High-Efficiency Resource Allocation",
                                    "Elastic Architecture (Scalable)",
                                    "Real-time Telemetry & Control",
                                    "Decentralized Operations Focus"
                                ].map((advantage, idx) => (
                                    <li key={idx} className="flex items-center text-sm font-mono text-gray-400">
                                        <div className="w-2 h-2 rounded-full bg-accent mr-4 shadow-[0_0_8px_rgba(6,182,212,0.8)] group-hover:bg-secondary group-hover:shadow-[0_0_8px_rgba(251,191,36,0.8)] transition-colors"></div>
                                        {advantage}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 pt-6 border-t border-white/10">
                                <p className="text-xs font-mono text-gray-500 uppercase tracking-widest leading-loose">
                                    Status: <span className="text-green-500 font-bold ml-2">ONLINE</span><br />
                                    Capacity: <span className="text-white font-bold ml-2">AVAILABLE</span>
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default VirtualCFO;
