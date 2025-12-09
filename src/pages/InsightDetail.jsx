import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Share2, Tag } from 'lucide-react';
import { insightsData } from '../data/content';

const InsightDetail = () => {
    const { insightId } = useParams();
    const article = insightsData.find(a => a.id === insightId);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [insightId]);

    if (!article) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
                <h2 className="text-3xl font-bold text-primary mb-4">Article Not Found</h2>
                <Link to="/insights" className="text-secondary hover:underline flex items-center">
                    <ArrowLeft size={20} className="mr-2" /> Back to Insights
                </Link>
            </div>
        );
    }

    return (
        <div className="w-full bg-slate-50 min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-6 max-w-4xl">
                <Link to="/insights" className="inline-flex items-center text-gray-500 hover:text-secondary mb-8 transition-colors">
                    <ArrowLeft size={16} className="mr-2" /> Back to Insights
                </Link>

                <article className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    {/* Header Image */}
                    <div className="h-64 md:h-96 w-full relative">
                        <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-8 text-white">
                            <span className="bg-secondary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-3 inline-block">
                                {article.category}
                            </span>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-4">
                                {article.title}
                            </h1>
                            <div className="flex items-center text-sm text-gray-200 space-x-6">
                                <span className="flex items-center"><Calendar size={16} className="mr-2" /> {article.date}</span>
                                <span className="flex items-center"><User size={16} className="mr-2" /> {article.author}</span>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-12">
                        <div
                            className="prose prose-lg prose-slate max-w-none prose-headings:font-serif prose-headings:text-primary prose-a:text-secondary"
                            dangerouslySetInnerHTML={{ __html: article.content }}
                        />

                        {/* Share / Tags */}
                        <div className="mt-12 pt-8 border-t border-gray-100 flex justify-between items-center">
                            <div className="flex items-center text-gray-500">
                                <Tag size={18} className="mr-2" />
                                <span className="text-sm font-medium">{article.category}, Finance, India</span>
                            </div>
                            <button className="flex items-center text-gray-500 hover:text-secondary transition-colors">
                                <Share2 size={18} className="mr-2" /> Share Article
                            </button>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default InsightDetail;
