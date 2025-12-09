import React from 'react';
import { TrendingUp, CheckCircle } from 'lucide-react';

const StartupAdvisory = () => {
    return (
        <div className="w-full">
            <div className="bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-primary mb-4">Startup Advisory</h1>
                    <div className="w-20 h-1 bg-secondary"></div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800">Empowering New Ventures</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Starting a new business is exciting but challenging. Our Startup Advisory services are designed to support entrepreneurs at every stage of their journey, from ideation to execution and growth. We provide end-to-end support to help you build a strong foundation for your business.
                        </p>

                        <h3 className="text-xl font-bold mb-4 text-primary">Our Services for Startups</h3>
                        <ul className="space-y-3 mb-8">
                            {[
                                "Business Entity Selection & Incorporation",
                                "Business Plan Preparation",
                                "Valuation Services",
                                "Funding Assistance & Pitch Deck Review",
                                "Regulatory Compliance (Startup India Registration)",
                                "Mentorship & Strategic Guidance"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <TrendingUp className="text-secondary mr-3 mt-1 flex-shrink-0" size={18} />
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 h-fit">
                        <h3 className="text-lg font-bold mb-4 text-primary">Startup India Benefits</h3>
                        <p className="text-sm text-gray-600 mb-4">
                            We help eligible startups register under the Startup India initiative to avail benefits like:
                        </p>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-center"><CheckCircle size={14} className="text-secondary mr-2" /> Tax Exemptions</li>
                            <li className="flex items-center"><CheckCircle size={14} className="text-secondary mr-2" /> Self-Certification Compliance</li>
                            <li className="flex items-center"><CheckCircle size={14} className="text-secondary mr-2" /> IPR Support</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartupAdvisory;
