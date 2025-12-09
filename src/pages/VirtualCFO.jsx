import React from 'react';
import { CheckCircle } from 'lucide-react';

const VirtualCFO = () => {
    return (
        <div className="w-full">
            <div className="bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-primary mb-4">Virtual CFO Services</h1>
                    <div className="w-20 h-1 bg-secondary"></div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800">Strategic Financial Leadership</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Our Virtual CFO service provides growing businesses with the financial expertise and strategic guidance of a Chief Financial Officer without the cost of a full-time hire. We act as your strategic partner, helping you manage your finances, optimize cash flow, and make informed business decisions.
                        </p>

                        <h3 className="text-xl font-bold mb-4 text-primary">Key Offerings</h3>
                        <ul className="space-y-3 mb-8">
                            {[
                                "Financial Planning & Budgeting",
                                "Cash Flow Management",
                                "MIS Reporting & Analysis",
                                "Cost Optimization",
                                "Compliance Management",
                                "Strategic Decision Support"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircle className="text-secondary mr-3 mt-1 flex-shrink-0" size={18} />
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 h-fit">
                        <h3 className="text-lg font-bold mb-4 text-primary">Why Choose Virtual CFO?</h3>
                        <ul className="space-y-4 text-sm text-gray-600">
                            <li>• Cost-effective access to high-level expertise.</li>
                            <li>• Scalable services based on your needs.</li>
                            <li>• Improved financial visibility and control.</li>
                            <li>• Focus on core business activities.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VirtualCFO;
