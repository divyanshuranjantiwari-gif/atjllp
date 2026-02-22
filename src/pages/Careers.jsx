import React from 'react';
import { Mail, Zap, Terminal, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Careers = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full bg-primary min-h-screen text-gray-300"
        >
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-primary-dark">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMSkiLz48L3N2Zz4=')] bg-repeat opacity-30 mix-blend-screen" />
                <div className="absolute top-0 right-1/4 w-[25vw] h-[25vw] min-w-[250px] bg-secondary/15 rounded-full blur-[100px] mix-blend-screen animate-blob" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block inline-flex items-center gap-2">
                            <span className="w-4 h-[1px] bg-secondary"></span> System Expansion
                        </span>
                        <h1 className="text-5xl md:text-7xl font-techno font-bold text-white mb-6">
                            Join the <span className="text-gradient">Collective</span>
                        </h1>
                        <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
                            We are actively seeking elite analysts, legal engineers, and fiscal strategists to integrate into our vanguard operations node.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 relative bg-primary z-20 -mt-10 border-white/5">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto">

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="glass-dark rounded-3xl p-8 md:p-14 border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden mb-12"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none -z-10"></div>

                            <h2 className="text-3xl font-techno font-bold mb-6 text-white flex items-center gap-3">
                                <Zap className="text-secondary" size={28} /> Network Topology
                            </h2>
                            <p className="text-gray-400 mb-8 leading-loose text-lg font-light">
                                ATJ & Co. LLP operates a dynamic, high-velocity work environment. We calculate that optimal intellectual output is achieved through continuous professional growth, exposure to high-complexity assignments, and integration with advanced technological stacks. Integrating into our team means becoming part of a highly calibrated machine.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="glass-card rounded-2xl p-8 border border-white/10 relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            <h3 className="text-2xl font-techno font-bold mb-6 text-white relative z-10 flex items-center gap-3">
                                <Terminal className="text-accent" size={24} /> Application Protocol
                            </h3>
                            <p className="text-gray-400 mb-8 text-lg font-light relative z-10">
                                If your primary directives align with advanced finance, taxation algorithms, or legal frameworks (e.g., Chartered Accountant, Article Assistant, Commerce Engineering), initiate contact.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10">
                                <div className="flex-grow w-full bg-primary-dark/80 p-6 rounded-xl border border-white/10 flex items-center justify-between group-hover:border-secondary/30 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-secondary/10 p-3 rounded-lg">
                                            <Mail className="text-secondary" size={24} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-techno tracking-widest uppercase text-gray-500 mb-1">Upload Data Profile (CV)</p>
                                            <a href="mailto:careers@atjllp.com" className="text-xl font-mono text-white hover:text-secondary transition-colors">
                                                careers@atjllp.com
                                            </a>
                                        </div>
                                    </div>
                                    <ArrowRight className="text-gray-600 hidden sm:block" size={24} />
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Careers;
