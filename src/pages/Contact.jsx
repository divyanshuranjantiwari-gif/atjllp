import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, ShieldCheck } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            setTimeout(() => setStatus(''), 5000);
        }, 1500);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full bg-primary min-h-screen text-gray-300"
        >
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-primary-dark">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMSkiLz48L3N2Zz4=')] bg-repeat opacity-30 mix-blend-screen animate-grid-scroll" />
                <div className="absolute top-0 right-1/4 w-[30vw] h-[30vw] min-w-[300px] bg-secondary/15 rounded-full blur-[100px] mix-blend-screen animate-blob" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block inline-flex items-center gap-2">
                            <span className="w-4 h-[1px] bg-secondary"></span> Secure Communication Channel
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-techno font-bold text-white mb-6">
                            Establish <br className="hidden md:block" />
                            <span className="text-gradient">Uplink</span>
                        </h1>
                        <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
                            Initialize a secure transmission with our advisory nodes. Our partners are standing by to decode your complex business requirements.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 relative bg-primary z-20 -mt-10 border-white/5">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                        {/* Contact Info (Telemetry Data) */}
                        <FadeInWhenVisible direction='right'>
                            <div className="space-y-8">
                                <h2 className="text-3xl font-techno font-bold text-white mb-8 flex items-center gap-3">
                                    <span className="w-2 h-6 bg-accent rounded-full"></span> Node Coordinates
                                </h2>

                                <div className="space-y-6">
                                    <div className="glass-card p-6 rounded-2xl flex items-start border border-white/5 hover:border-secondary/30 transition-colors group">
                                        <div className="bg-primary-dark p-3 rounded-xl border border-white/10 mr-6 group-hover:bg-secondary/10 group-hover:border-secondary/50 transition-all">
                                            <MapPin className="text-secondary" size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-techno font-bold text-white mb-1 tracking-wider uppercase text-sm">Physical Sector</h3>
                                            <p className="text-gray-400 font-mono text-sm leading-relaxed">123, Business Park, Connaught Place,<br />New Delhi, India - 110001</p>
                                        </div>
                                    </div>

                                    <div className="glass-card p-6 rounded-2xl flex items-start border border-white/5 hover:border-secondary/30 transition-colors group">
                                        <div className="bg-primary-dark p-3 rounded-xl border border-white/10 mr-6 group-hover:bg-secondary/10 group-hover:border-secondary/50 transition-all">
                                            <Phone className="text-secondary" size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-techno font-bold text-white mb-1 tracking-wider uppercase text-sm">Voice Uplink</h3>
                                            <p className="text-gray-400 font-mono text-sm">+91 98110 65952</p>
                                            <p className="text-gray-400 font-mono text-sm">+91 11 4567 8900</p>
                                        </div>
                                    </div>

                                    <div className="glass-card p-6 rounded-2xl flex items-start border border-white/5 hover:border-secondary/30 transition-colors group">
                                        <div className="bg-primary-dark p-3 rounded-xl border border-white/10 mr-6 group-hover:bg-secondary/10 group-hover:border-secondary/50 transition-all">
                                            <Mail className="text-secondary" size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-techno font-bold text-white mb-1 tracking-wider uppercase text-sm">Data Packets</h3>
                                            <p className="text-gray-400 font-mono text-sm">info@atjllp.com</p>
                                            <p className="text-gray-400 font-mono text-sm">support@atjllp.com</p>
                                        </div>
                                    </div>

                                    <div className="glass-card p-6 rounded-2xl flex items-start border border-white/5 hover:border-secondary/30 transition-colors group">
                                        <div className="bg-primary-dark p-3 rounded-xl border border-white/10 mr-6 group-hover:bg-secondary/10 group-hover:border-secondary/50 transition-all">
                                            <Clock className="text-secondary" size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-techno font-bold text-white mb-1 tracking-wider uppercase text-sm">Operation Cycles</h3>
                                            <p className="text-gray-400 font-mono text-sm">Mon - Sat: 10:00 AM - 7:00 PM IST</p>
                                            <p className="text-gray-500 font-mono text-sm line-through decoration-red-500">Sunday: OFFLINE</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeInWhenVisible>

                        {/* Contact Form (Terminal Input) */}
                        <FadeInWhenVisible direction='left' delay={0.2}>
                            <div className="glass-dark p-8 md:p-10 rounded-3xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-[80px] pointer-events-none z-0"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-8">
                                        <h2 className="text-2xl font-techno font-bold text-white">Transmission Feed</h2>
                                        <ShieldCheck className="text-green-500 opacity-50" size={24} />
                                    </div>

                                    {status === 'success' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="bg-green-500/10 border border-green-500/30 text-green-400 font-mono text-sm px-4 py-3 rounded-lg mb-6 flex items-center"
                                        >
                                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse mr-3"></span>
                                            Uplink successful. Data packet received. Awaiting response.
                                        </motion.div>
                                    )}

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="relative group">
                                                <label className="block text-xs font-techno tracking-widest uppercase text-gray-500 mb-2">Identifier ID *</label>
                                                <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary to-accent rounded opacity-0 group-focus-within:opacity-30 transition duration-500 blur"></div>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="relative w-full bg-primary-dark/50 border border-white/10 text-white px-4 py-3 rounded outline-none focus:border-secondary transition-all font-mono text-sm"
                                                    placeholder="e.g. Corp_Node_01"
                                                />
                                            </div>
                                            <div className="relative group">
                                                <label className="block text-xs font-techno tracking-widest uppercase text-gray-500 mb-2">Comms Route (Email) *</label>
                                                <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary to-accent rounded opacity-0 group-focus-within:opacity-30 transition duration-500 blur"></div>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="relative w-full bg-primary-dark/50 border border-white/10 text-white px-4 py-3 rounded outline-none focus:border-secondary transition-all font-mono text-sm"
                                                    placeholder="Enter valid address..."
                                                />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="relative group">
                                                <label className="block text-xs font-techno tracking-widest uppercase text-gray-500 mb-2">Voice Frequency (Phone)</label>
                                                <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary to-accent rounded opacity-0 group-focus-within:opacity-30 transition duration-500 blur"></div>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="relative w-full bg-primary-dark/50 border border-white/10 text-white px-4 py-3 rounded outline-none focus:border-secondary transition-all font-mono text-sm"
                                                    placeholder="+91 ...."
                                                />
                                            </div>
                                            <div className="relative group">
                                                <label className="block text-xs font-techno tracking-widest uppercase text-gray-500 mb-2">Packet Subject</label>
                                                <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary to-accent rounded opacity-0 group-focus-within:opacity-30 transition duration-500 blur"></div>
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    className="relative w-full bg-primary-dark/50 border border-white/10 text-white px-4 py-3 rounded outline-none focus:border-secondary transition-all font-mono text-sm"
                                                    placeholder="Nature of query..."
                                                />
                                            </div>
                                        </div>
                                        <div className="relative group">
                                            <label className="block text-xs font-techno tracking-widest uppercase text-gray-500 mb-2">Encrypted Payload (Message) *</label>
                                            <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary to-accent rounded opacity-0 group-focus-within:opacity-30 transition duration-500 blur"></div>
                                            <textarea
                                                name="message"
                                                required
                                                rows="5"
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="relative w-full bg-primary-dark/50 border border-white/10 text-white px-4 py-3 rounded outline-none focus:border-secondary transition-all font-mono text-sm resize-none"
                                                placeholder="Begin transmission..."
                                            ></textarea>
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={status === 'sending'}
                                            className="w-full relative overflow-hidden bg-secondary text-primary-dark font-bold px-4 py-4 rounded hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] transition-all duration-300 uppercase tracking-widest flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {status === 'sending' ? (
                                                <><span className="w-4 h-4 border-2 border-primary-dark border-t-transparent rounded-full animate-spin"></span> Transmitting...</>
                                            ) : (
                                                <>Transmit Data <Send size={18} /></>
                                            )}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </FadeInWhenVisible>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Contact;
