import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Building, Briefcase, TrendingUp, Shield, Globe, Users, Cpu } from 'lucide-react';
import { servicesData } from '../data/content';
import { motion } from 'framer-motion';

const iconMap = {
    Building: Building,
    Briefcase: Briefcase,
    TrendingUp: TrendingUp,
    Shield: Shield,
    Globe: Globe,
    Users: Users,
    Cpu: Cpu
};

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const navigate = useNavigate();
    const service = servicesData.find(s => s.id === serviceId);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [serviceId]);

    if (!service) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-primary text-white">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMSkiLz48L3N2Zz4=')] bg-repeat opacity-20" />
                <h2 className="text-4xl font-techno font-bold text-red-500 mb-4 relative z-10">ERROR 404: MODULE_NOT_FOUND</h2>
                <Link to="/services" className="text-secondary hover:underline flex items-center font-mono relative z-10">
                    <ArrowLeft size={20} className="mr-2" /> RETURN_TO_SYSTEM()
                </Link>
            </div>
        );
    }

    const IconComponent = iconMap[service.icon] || Building;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full bg-primary min-h-screen pt-20 pb-20 text-gray-300"
        >
            {/* Hero Section */}
            <div className="relative pt-24 pb-32 overflow-hidden bg-primary-dark border-b border-white/5">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMSkiLz48L3N2Zz4=')] bg-repeat opacity-20 mix-blend-screen" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/80 to-transparent z-10"></div>

                {/* Abstract Image Background */}
                <div className="absolute inset-0 opacity-10 mix-blend-screen">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover filter contrast-125 saturate-0" />
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-secondary/15 rounded-full blur-[120px] mix-blend-screen z-0 animate-blob" />

                <div className="container mx-auto px-6 relative z-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link to="/services" className="inline-flex items-center text-sm font-techno tracking-widest uppercase text-gray-500 hover:text-secondary mb-8 transition-colors">
                            <ArrowLeft size={16} className="mr-2" /> Back to Modules
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8"
                    >
                        <div className="bg-secondary/10 p-4 rounded-2xl border border-secondary/20 shadow-[0_0_30px_rgba(251,191,36,0.15)] flex-shrink-0">
                            <IconComponent size={40} className="text-secondary drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]" />
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-techno font-bold text-white leading-tight">
                            {service.title}
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed font-light"
                    >
                        {service.shortDesc}
                    </motion.p>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-6 -mt-16 relative z-30">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="lg:col-span-2 space-y-12"
                    >
                        <div className="glass-dark rounded-3xl p-8 md:p-12 border border-white/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -z-10"></div>
                            <h2 className="text-2xl font-techno font-bold text-white mb-6 flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span> System Overview
                            </h2>
                            <p className="text-gray-400 leading-loose text-lg font-light">
                                {service.fullDesc}
                            </p>
                        </div>

                        <div className="glass-dark rounded-3xl p-8 md:p-12 border border-white/5 relative overflow-hidden">
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-[80px] -z-10"></div>
                            <h3 className="text-2xl font-techno font-bold text-white mb-8 flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span> Core Capabilities
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {service.features.map((feature, index) => (
                                    <div key={index} className="flex items-start p-4 bg-white/5 rounded-xl border border-white/5 hover:border-secondary/30 transition-colors group">
                                        <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                                        <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Sidebar CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="lg:col-span-1"
                    >
                        <div className="glass-card p-8 rounded-3xl sticky top-28 border border-white/10 relative overflow-hidden group">
                            {/* Hover animated gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            <h3 className="text-xl font-techno font-bold mb-4 text-white relative z-10 flex items-center gap-2">
                                <span className="w-2 h-6 bg-secondary rounded-full"></span> Requires Integration?
                            </h3>
                            <p className="text-gray-400 mb-8 text-sm leading-relaxed relative z-10">
                                Initiate a secure dialogue with our deployment architects to map this module to your enterprise architecture.
                            </p>

                            <Link to="/contact-us" className="btn-primary w-full text-center flex justify-center items-center gap-2 mb-6 relative z-10">
                                Connect to Terminal <ArrowRight size={18} />
                            </Link>

                            <div className="text-center border-t border-white/5 pt-6 relative z-10">
                                <p className="text-xs text-gray-500 font-techno uppercase tracking-widest mb-2">Direct Uplink</p>
                                <a href="tel:+919811065952" className="text-xl font-mono text-white hover:text-secondary transition-colors drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                                    +91 98110 65952
                                </a>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </motion.div>
    );
};

export default ServiceDetail;
