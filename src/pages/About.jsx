import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Target, Zap, Users, ChevronRight, Activity } from 'lucide-react';

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

const About = () => {
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
                <div className="absolute top-0 right-1/4 w-[30vw] h-[30vw] min-w-[300px] bg-secondary/15 rounded-full blur-[100px] mix-blend-screen animate-blob" />
                <div className="absolute bottom-0 left-1/4 w-[40vw] h-[40vw] min-w-[400px] bg-accent/10 rounded-full blur-[120px] mix-blend-screen animate-blob delay-200" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
                            <Activity size={16} className="text-secondary" />
                            <span className="text-sm font-techno text-gray-300 uppercase tracking-widest">Firm Protocol .01</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-techno font-bold text-white mb-6">
                            Constructing <br className="hidden md:block" />
                            <span className="text-gradient">Financial Reality</span>
                        </h1>
                        <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
                            Since 2008, ATJ & Co. LLP has operated at the intersection of regulatory discipline and strategic acceleration, engineering growth for modern enterprises.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Matrix Data */}
            <section className="py-20 relative bg-primary z-20 -mt-10 border-white/5">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="glass-dark rounded-3xl p-8 md:p-14 border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <FadeInWhenVisible direction='right'>
                                <div>
                                    <h2 className="text-3xl font-techno font-bold text-white mb-6 flex items-center gap-3">
                                        <span className="w-2 h-6 bg-secondary rounded-full"></span> Master Node
                                    </h2>
                                    <p className="text-gray-400 leading-loose text-lg mb-6">
                                        ATJ & Co. LLP is a premier Chartered Accountancy nexus executing advanced directives in Audit, Taxation, Corporate Law, and Strategic Consultancy. We are an elite collective of analysts, legal engineers, and fiscal strategists.
                                    </p>
                                    <p className="text-gray-400 leading-loose text-lg mb-8">
                                        Operating flawlessly across startup ecosystems and heavy conglomerates, our core processing is entirely client-centric—synthesizing raw market chaos into structured, compliant growth vectors.
                                    </p>

                                    <div className="flex items-center gap-8">
                                        <div className="flex flex-col">
                                            <span className="text-4xl font-techno font-bold text-secondary tracking-tighter">15<span className="text-gray-500">+</span></span>
                                            <span className="text-xs font-mono text-gray-500 uppercase">Years Live</span>
                                        </div>
                                        <div className="w-[1px] h-12 bg-white/10"></div>
                                        <div className="flex flex-col">
                                            <span className="text-4xl font-techno font-bold text-accent tracking-tighter">500<span className="text-gray-500">+</span></span>
                                            <span className="text-xs font-mono text-gray-500 uppercase">Active Clusters</span>
                                        </div>
                                    </div>
                                </div>
                            </FadeInWhenVisible>

                            <FadeInWhenVisible direction='left' delay={0.2}>
                                <div className="space-y-6">
                                    <div className="glass card p-8 rounded-2xl border border-white/5 hover:border-secondary/30 transition-colors group relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-secondary/0 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <Target size={32} className="text-secondary mb-4 relative z-10" />
                                        <h3 className="text-xl font-techno font-bold mb-3 text-white relative z-10">Primary Mission</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                                            To deploy exceptional financial and legal code that accelerates our clients' operational velocity, ensuring absolute systemic integrity and sustained asymmetric growth.
                                        </p>
                                    </div>

                                    <div className="glass card p-8 rounded-2xl border border-white/5 hover:border-accent/30 transition-colors group relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <Zap size={32} className="text-accent mb-4 relative z-10" />
                                        <h3 className="text-xl font-techno font-bold mb-3 text-white relative z-10">Future Vision</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                                            To be recognized globally as the apex professional services hyper-firm—renowned for unyielding precision, technical superiority, and an absolute commitment to client victory.
                                        </p>
                                    </div>
                                </div>
                            </FadeInWhenVisible>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <FadeInWhenVisible>
                        <div className="mb-16 text-center">
                            <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm flex items-center justify-center gap-2">
                                <span className="w-8 h-[1px] bg-accent"></span> Guiding Logic <span className="w-8 h-[1px] bg-accent"></span>
                            </span>
                            <h2 className="text-4xl md:text-5xl font-techno font-bold mt-4 text-white">
                                Operational <span className="text-gradient">Principles</span>
                            </h2>
                        </div>
                    </FadeInWhenVisible>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Absolute Integrity", icon: <Shield size={24} />, desc: "Zero-compromise adherence to ethical protocols and strict data encryption standards." },
                            { title: "Surgical Precision", icon: <Target size={24} />, desc: "Methodical execution of complex financial directives with microscopic attention to detail." },
                            { title: "Collaborative Nexus", icon: <Users size={24} />, desc: "Fusing diverse intellectual nodes to solve multi-dimensional corporate challenges." }
                        ].map((value, idx) => (
                            <FadeInWhenVisible key={idx} delay={idx * 0.1}>
                                <div className="p-8 border border-white/5 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-sm h-full flex flex-col items-center text-center group">
                                    <div className="w-16 h-16 rounded-full bg-primary-dark border border-white/10 flex items-center justify-center text-secondary mb-6 group-hover:scale-110 group-hover:border-secondary/50 transition-all duration-300">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-xl font-techno font-bold text-white mb-3">{value.title}</h3>
                                    <p className="text-gray-400 font-light text-sm leading-relaxed">
                                        {value.desc}
                                    </p>
                                </div>
                            </FadeInWhenVisible>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default About;
