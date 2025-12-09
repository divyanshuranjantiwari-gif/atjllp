import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { legalData } from '../data/content';

const Legal = () => {
    const location = useLocation();
    const pageType = location.pathname.replace('/', ''); // e.g., 'privacy-policy'
    const data = legalData[pageType];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pageType]);

    if (!data) return null;

    return (
        <div className="w-full bg-slate-50 min-h-screen pt-24 pb-20">
            <div className="bg-primary-dark text-white py-16 mb-12">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl font-serif font-bold">{data.title}</h1>
                </div>
            </div>

            <div className="container mx-auto px-6 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-lg p-10 md:p-16 border border-gray-100">
                    <div
                        className="prose prose-lg prose-slate max-w-none"
                        dangerouslySetInnerHTML={{ __html: data.content }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Legal;
