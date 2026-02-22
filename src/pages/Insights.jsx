import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Search, Zap, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { insightsData } from '../data/content';
import { motion } from 'framer-motion';

const Insights = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilter, setActiveFilter] = useState('All');

    // Use data from content.js
    const articles = insightsData;

    const filteredArticles = articles.filter(article => {
        const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.content.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = activeFilter === 'All' || article.category === activeFilter;
        return matchesSearch && matchesFilter;
    });

    const categories = ['All', ...new Set(articles.map(a => a.category))];

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
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full bg-primary min-h-screen pt-20 pb-20 text-gray-300"
        >
            {/* Hero Section */}
            <div className="relative pt-24 pb-32 overflow-hidden bg-primary-dark border-b border-white/5">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMSkiLz48L3N2Zz4=')] bg-repeat opacity-20 mix-blend-screen" />
                <div className="absolute top-0 right-1/4 w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-secondary/15 rounded-full blur-[120px] mix-blend-screen z-0 animate-blob" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl text-center mx-auto"
                    >
                        <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block inline-flex items-center gap-2">
                            <span className="w-4 h-[1px] bg-secondary"></span> Data Feed
                        </span>
                        <h1 className="text-5xl md:text-7xl font-techno font-bold text-white mb-6">
                            Knowledge <span className="text-gradient">Hub</span>
                        </h1>
                        <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
                            Access our centralized repository of regulatory updates, financial algorithms, and strategic market intelligence.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-6 -mt-10 relative z-20">
                {/* Control Terminal (Search & Filter) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="glass-dark rounded-2xl p-6 border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)] mb-12 flex flex-col lg:flex-row justify-between items-center gap-6"
                >
                    <div className="relative w-full lg:w-96 group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary to-accent rounded opacity-0 group-focus-within:opacity-30 transition duration-500 blur"></div>
                        <div className="relative flex items-center bg-primary-dark/80 border border-white/10 rounded overflow-hidden">
                            <div className="pl-4 text-gray-500">
                                <Search size={20} />
                            </div>
                            <input
                                type="text"
                                placeholder="Query database..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-transparent text-white px-4 py-3 outline-none font-mono text-sm placeholder-gray-600 focus:text-secondary transition-colors"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-3 overflow-x-auto pb-2 w-full lg:w-auto scrollbar-hide">
                        <div className="text-gray-500 mr-2 flex items-center opacity-50"><Filter size={16} className="mr-2" /> <span className="text-xs font-techno tracking-widest uppercase">Filter:</span></div>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`px-5 py-2 rounded font-mono text-sm tracking-wider whitespace-nowrap transition-all duration-300 border ${activeFilter === category
                                        ? 'bg-secondary text-primary-dark border-secondary shadow-[0_0_15px_rgba(251,191,36,0.4)]'
                                        : 'bg-primary border-white/10 text-gray-400 hover:border-secondary/50 hover:text-secondary'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredArticles.length > 0 ? (
                        filteredArticles.map((article) => (
                            <motion.div key={article.id} variants={itemVariants} layout>
                                <div className="glass-card rounded-2xl overflow-hidden group border border-white/5 hover:border-secondary/30 transition-all duration-500 flex flex-col h-full relative cursor-pointer pt-1" onClick={() => window.location.href = `/insight/${article.id}`}>
                                    {/* Top glowing edge */}
                                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-secondary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>

                                    <div className="h-56 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-primary-dark/40 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="w-full h-full object-cover filter contrast-125 saturate-50 group-hover:saturate-100 transition-all duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 left-4 z-20 bg-primary-dark/80 backdrop-blur-md px-3 py-1 rounded text-xs font-mono font-bold text-accent uppercase tracking-wide border border-accent/20">
                                            {article.category}
                                        </div>
                                    </div>
                                    <div className="p-8 flex-grow flex flex-col relative z-20">
                                        <div className="flex items-center text-xs text-gray-500 font-mono mb-4 space-x-4">
                                            <span className="flex items-center"><Calendar size={14} className="mr-1 text-gray-600" /> {article.date}</span>
                                            <span className="flex items-center"><User size={14} className="mr-1 text-gray-600" /> {article.author}</span>
                                        </div>
                                        <h3 className="text-xl font-techno font-bold text-white mb-3 leading-snug group-hover:text-secondary transition-colors">
                                            {article.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                                            {/* Extract plain text from HTML content for excerpt */}
                                            {article.content.replace(/<[^>]+>/g, '').substring(0, 120)}...
                                        </p>

                                        <div className="pt-4 border-t border-white/5 mt-auto">
                                            <span className="text-sm font-bold text-secondary flex items-center group-hover:translate-x-2 transition-transform uppercase tracking-widest font-techno">
                                                Initialize Read <ArrowRight size={16} className="ml-2" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <div className="col-span-full py-20 text-center">
                            <Zap className="mx-auto text-gray-600 mb-4 opacity-50 animate-pulse" size={48} />
                            <h3 className="text-2xl font-techno text-gray-500">No matching records found.</h3>
                            <p className="text-gray-600 mt-2 font-mono text-sm">Adjust your query parameters.</p>
                        </div>
                    )}
                </motion.div>

                {/* Pagination (Visual only for now) */}
                {filteredArticles.length > 0 && (
                    <div className="mt-16 flex justify-center gap-4">
                        <button className="px-6 py-3 bg-primary-dark border border-white/10 rounded text-gray-500 font-mono text-sm hover:text-white hover:border-white/30 transition-colors uppercase tracking-widest">Load Previous</button>
                        <button className="px-6 py-3 bg-secondary text-primary-dark font-bold font-mono text-sm rounded hover:shadow-[0_0_20px_rgba(251,191,36,0.4)] transition-all uppercase tracking-widest">Load Next</button>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default Insights;
