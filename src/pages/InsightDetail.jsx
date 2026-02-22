import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Share2, Tag, Terminal } from 'lucide-react';
import { insightsData } from '../data/content';
import { motion } from 'framer-motion';

const InsightDetail = () => {
    const { insightId } = useParams();
    const article = insightsData.find(a => a.id === insightId);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [insightId]);

    if (!article) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-primary text-white">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMSkiLz48L3N2Zz4=')] bg-repeat opacity-20" />
                <h2 className="text-4xl font-techno font-bold text-red-500 mb-4 relative z-10">ERROR 404: RECORD_NOT_FOUND</h2>
                <Link to="/insights" className="text-secondary hover:underline flex items-center font-mono relative z-10">
                    <ArrowLeft size={20} className="mr-2" /> RETURN_TO_DATABASE()
                </Link>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full bg-primary min-h-screen pt-24 pb-20 text-gray-300"
        >
            <div className="container mx-auto px-6 max-w-4xl relative z-20">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link to="/insights" className="inline-flex items-center text-sm font-techno tracking-widest uppercase text-gray-500 hover:text-secondary mb-8 transition-colors">
                        <ArrowLeft size={16} className="mr-2" /> Back to Database
                    </Link>
                </motion.div>

                <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="glass-dark rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative"
                >
                    {/* Header Image */}
                    <div className="h-64 md:h-[28rem] w-full relative group">
                        <div className="absolute inset-0 bg-primary-dark/60 z-10 transition-colors duration-500 group-hover:bg-primary-dark/30"></div>
                        <img src={article.image} alt={article.title} className="w-full h-full object-cover filter contrast-125 saturate-50 transition-all duration-700 group-hover:scale-105 group-hover:saturate-100" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/50 to-transparent z-20"></div>

                        <div className="absolute bottom-0 left-0 p-8 md:p-12 z-30 w-full">
                            <span className="bg-secondary/20 border border-secondary/50 text-secondary px-3 py-1 rounded text-xs font-mono font-bold uppercase tracking-widest mb-4 inline-block backdrop-blur-sm">
                                {article.category}
                            </span>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-techno font-bold leading-tight mb-6 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                                {article.title}
                            </h1>
                            <div className="flex items-center text-sm font-mono text-gray-400 space-x-6">
                                <span className="flex items-center"><Calendar size={16} className="mr-2 text-secondary" /> {article.date}</span>
                                <span className="flex items-center"><User size={16} className="mr-2 text-secondary" /> {article.author}</span>
                                <span className="flex items-center hidden sm:flex"><Terminal size={16} className="mr-2 text-secondary" /> SECURE_READ</span>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none -z-10"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-[80px] pointer-events-none -z-10"></div>

                        {/* We are overriding prose styles to fit the dark techno theme */}
                        <div
                            className="prose prose-lg max-w-none text-gray-300
                                       prose-headings:font-techno prose-headings:text-white prose-headings:font-bold prose-headings:tracking-wide
                                       prose-h2:text-3xl prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-4 prose-h2:mb-6
                                       prose-h3:text-2xl prose-h3:text-gray-200
                                       prose-p:leading-relaxed prose-p:font-light prose-p:mb-6
                                       prose-a:text-secondary prose-a:font-mono prose-a:no-underline hover:prose-a:text-accent hover:prose-a:underline
                                       prose-strong:text-white prose-strong:font-bold
                                       prose-ul:list-disc prose-ul:pl-6 prose-li:font-light prose-li:mb-2 prose-li:marker:text-secondary
                                       prose-blockquote:border-l-4 prose-blockquote:border-secondary prose-blockquote:bg-white/5 prose-blockquote:p-4 prose-blockquote:font-mono prose-blockquote:text-sm prose-blockquote:italic prose-blockquote:text-gray-400
                                       "
                            dangerouslySetInnerHTML={{ __html: article.content }}
                        />

                        {/* Share / Tags */}
                        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6">
                            <div className="flex items-center text-gray-500 font-mono text-xs uppercase tracking-widest">
                                <Tag size={16} className="mr-3 text-secondary" />
                                <span>{article.category} / FINANCE / INDIA / PROTOCOL</span>
                            </div>
                            <button className="flex items-center text-gray-400 hover:text-secondary transition-colors font-techno text-sm tracking-widest uppercase border border-white/10 hover:border-secondary/50 px-4 py-2 rounded bg-white/5 hover:bg-white/10">
                                <Share2 size={16} className="mr-2" /> Distribute Data
                            </button>
                        </div>
                    </div>
                </motion.article>
            </div>
        </motion.div>
    );
};

export default InsightDetail;
