import React from 'react';
import { Building, Briefcase, Users, CheckCircle, ArrowRight, FileText, Globe, TrendingUp, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Services = () => {
    const services = [
        { id: "corporate-services", title: "Corporate Logic", icon: <Building size={32} />, desc: "Algorithmic restructuring, M&A protocols, and automated corporate compliance." },
        { id: "taxation", title: "Taxation Matrix", icon: <Briefcase size={32} />, desc: "Direct/Indirect tax computation, cross-border transfer pricing, and digital litigation defense." },
        { id: "virtual-cfo", title: "Virtual CFO", icon: <Cpu size={32} />, desc: "AI-enhanced financial forecasting, cloud-based budgeting, and predictive cash flow modeling." },
        { id: "audit-assurance", title: "Audit Protocols", icon: <CheckCircle size={32} />, desc: "Impenetrable statutory audits, forensic deep-dives, and internal control stress-testing." },
        { id: "startup-advisory", title: "Startup Incubation", icon: <TrendingUp size={32} />, desc: "Seed-to-IPO structural modeling, valuation algorithms, and series-funding architecture." },
        { id: "legal-services", title: "Legal Frameworks", icon: <FileText size={32} />, desc: "Smart contract drafting, intellectual property encryption, and complex litigation mapping." },
        { id: "global-expansion", title: "Global Gateways", icon: <Globe size={32} />, desc: "FDI integration, RBI/FEMA compliance routing, and cross-border capital flow structuring." },
        { id: "project-financing", title: "Capital Syndication", icon: <ArrowRight size={32} />, desc: "Debt/Equity algorithmic matching, venture capital acquisition, and dynamic working capital scaling." },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div className="w-full bg-primary min-h-screen text-gray-300">
            {/* Techno Header */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-primary-dark">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMSkiLz48L3N2Zz4=')] bg-repeat opacity-30 mix-blend-screen" />
                <div className="absolute top-0 right-1/4 w-[30vw] h-[30vw] min-w-[300px] bg-secondary/15 rounded-full blur-[100px] mix-blend-screen animate-blob" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block inline-flex items-center gap-2">
                            <span className="w-4 h-[1px] bg-secondary"></span> Operational Modules
                        </span>
                        <h1 className="text-5xl md:text-7xl font-techno font-bold text-white mb-6">
                            Enterprise <span className="text-gradient">Solutions</span>
                        </h1>
                        <p className="text-xl text-gray-400 font-light max-w-2xl leading-relaxed">
                            Deploy our suite of advanced financial and legal frameworks to architect robust, scalable, and compliant business operations.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-primary border-t border-white/5 relative">
                <div className="absolute left-0 top-1/4 w-1/3 h-1/2 bg-accent/5 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    >
                        {services.map((service, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <div className="glass-card group p-8 rounded-2xl h-full flex flex-col relative overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(251,191,36,0.1)] hover:-translate-y-2 border border-white/5 hover:border-secondary/30">
                                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-secondary/0 group-hover:from-secondary/5 group-hover:to-transparent transition-colors duration-500"></div>

                                    <div className="w-14 h-14 rounded-xl bg-primary-dark border border-white/10 flex items-center justify-center text-secondary mb-6 relative z-10 group-hover:scale-110 group-hover:bg-secondary/10 transition-transform">
                                        {service.icon}
                                    </div>

                                    <h3 className="text-2xl font-techno font-bold mb-4 text-white relative z-10 group-hover:text-secondary transition-colors">{service.title}</h3>
                                    <p className="text-gray-400 mb-8 flex-grow leading-relaxed relative z-10 text-sm">{service.desc}</p>

                                    <div className="mt-auto relative z-10 pt-6 border-t border-white/5">
                                        <Link to={`/service/${service.id}`} className="inline-flex items-center text-sm font-bold text-accent group-hover:text-secondary uppercase tracking-widest transition-colors w-full justify-between">
                                            Access Module
                                            <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Services;
