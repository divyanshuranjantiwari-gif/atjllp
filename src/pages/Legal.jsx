import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { legalData } from '../data/content';
import { ShieldAlert, FileText, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const Legal = () => {
    const location = useLocation();
    const pageType = location.pathname.replace('/', ''); // e.g., 'privacy-policy'
    const data = legalData[pageType];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pageType]);

    if (!data) return null;

    // Map page types to specific icons for extra flavor
    const getIcon = () => {
        if (pageType === 'privacy-policy') return <Lock size={20} className="text-secondary" />;
        if (pageType === 'terms-of-service') return <FileText size={20} className="text-secondary" />;
        return <ShieldAlert size={20} className="text-secondary" />;
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full bg-primary min-h-screen pt-20 pb-20 text-gray-300 relative overflow-hidden"
        >
            {/* Background elements */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMSkiLz48L3N2Zz4=')] bg-repeat opacity-20 mix-blend-screen pointer-events-none" />
            <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

            {/* Header Section */}
            <div className="relative pt-24 pb-16 z-10 border-b border-white/5 bg-primary-dark/80 backdrop-blur-md">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block inline-flex items-center gap-2">
                            {getIcon()} System Protocols
                        </span>
                        <h1 className="text-4xl md:text-6xl font-techno font-bold mb-4 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                            {data.title}
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-secondary to-transparent mx-auto mt-6"></div>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-6 max-w-4xl mt-12 relative z-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="glass-dark rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 relative"
                >
                    {/* Glowing border effect & scanline */}
                    <div className="absolute inset-0 border border-white/5 rounded-3xl pointer-events-none z-30"></div>
                    <div className="absolute top-0 left-0 right-0 h-1 bg-secondary/30 w-full animate-[pulse_4s_ease-in-out_infinite] blur-[2px]"></div>

                    {/* Top Terminal Bar */}
                    <div className="bg-primary-dark border-b border-white/10 px-6 py-4 flex items-center justify-between">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                        </div>
                        <div className="text-xs font-mono text-gray-500 tracking-widest uppercase">
                            DOC_ID: {pageType.toUpperCase()}_v1.0
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 md:p-16 relative bg-primary/50">
                        {/* Subtle grid on content background */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none -z-10"></div>

                        <div
                            className="prose prose-lg prose-invert max-w-none 
                            prose-headings:font-techno prose-headings:text-white prose-headings:tracking-wide
                            prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-2 prose-h2:mt-12
                            prose-p:text-gray-400 prose-p:font-light prose-p:leading-relaxed prose-p:mb-6
                            prose-a:text-secondary prose-a:no-underline hover:prose-a:text-white hover:prose-a:drop-shadow-[0_0_5px_rgba(251,191,36,0.5)] prose-a:transition-all
                            prose-strong:text-gray-200 prose-strong:font-bold
                            prose-ul:text-gray-400 prose-ul:font-light
                            prose-li:marker:text-secondary"
                            dangerouslySetInnerHTML={{ __html: data.content }}
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="text-center mt-12 mb-8 text-xs font-mono text-gray-600 uppercase tracking-[0.3em]"
                >
                    END OF DOCUMENT // ACCESS GRANTED
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Legal;
