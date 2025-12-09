import React from 'react';
import { Mail } from 'lucide-react';

const Careers = () => {
    return (
        <div className="w-full">
            <div className="bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-primary mb-4">Careers</h1>
                    <div className="w-20 h-1 bg-secondary"></div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Join Our Team</h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        ATJ & Co. LLP is always looking for talented and dedicated professionals to join our growing team. We offer a dynamic work environment, opportunities for professional growth, and exposure to a wide range of challenging assignments.
                    </p>

                    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 inline-block text-left">
                        <h3 className="text-xl font-bold mb-4 text-primary">How to Apply</h3>
                        <p className="text-gray-600 mb-4">
                            If you are a Chartered Accountant, Article Assistant, or a Commerce Graduate looking for a career in finance and taxation, we would love to hear from you.
                        </p>
                        <div className="flex items-center justify-center bg-gray-50 p-4 rounded-lg border border-gray-100">
                            <Mail className="text-secondary mr-3" size={24} />
                            <span className="text-gray-700 font-medium">Send your CV to: <a href="mailto:careers@atjllp.com" className="text-primary hover:underline">careers@atjllp.com</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Careers;
