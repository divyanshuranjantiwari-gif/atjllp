import React from 'react';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { insightsData } from '../data/content';

const Insights = () => {
    // Use data from content.js instead of hardcoded array
    const articles = insightsData;

    return (
        <div className="w-full bg-slate-50 min-h-screen pt-24 pb-20">
            {/* Header */}
            <div className="bg-primary-dark text-white py-20 mb-16">
                <div className="container mx-auto px-6 text-center">
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Knowledge Hub</span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Insights & Updates</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                        Expert analysis, regulatory updates, and thought leadership to keep you ahead of the curve.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6">
                {/* Search & Filter */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                    <div className="relative w-full md:w-96">
                        <input
                            type="text"
                            placeholder="Search articles..."
                            className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    </div>
                    <div className="flex gap-3 overflow-x-auto pb-2 w-full md:w-auto">
                        {['All', 'Taxation', 'GST', 'Startups', 'Compliance', 'Finance'].map((tag) => (
                            <button key={tag} className="px-5 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-600 hover:bg-secondary hover:text-white hover:border-secondary transition-all whitespace-nowrap">
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {articles.map((article) => (
                        <div key={article.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col h-full">
                            <div className="h-56 overflow-hidden relative">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wide">
                                    {article.category}
                                </div>
                            </div>
                            <div className="p-8 flex-grow flex flex-col">
                                <div className="flex items-center text-xs text-gray-500 mb-4 space-x-4">
                                    <span className="flex items-center"><Calendar size={14} className="mr-1" /> {article.date}</span>
                                    <span className="flex items-center"><User size={14} className="mr-1" /> {article.author}</span>
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3 leading-snug group-hover:text-secondary transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                                    {/* Extract plain text from HTML content for excerpt */}
                                    {article.content.replace(/<[^>]+>/g, '').substring(0, 100)}...
                                </p>
                                <Link to={`/insight/${article.id}`} className="text-primary font-semibold text-sm flex items-center group-hover:translate-x-2 transition-transform mt-auto">
                                    Read Full Article <ArrowRight size={16} className="ml-2 text-secondary" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="mt-16 flex justify-center">
                    <button className="px-6 py-3 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 mr-2">Previous</button>
                    <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-light">Next</button>
                </div>
            </div>
        </div>
    );
};

export default Insights;
