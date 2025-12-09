import React from 'react';
import { Calendar, AlertCircle, CheckCircle } from 'lucide-react';

const ComplianceCalendar = () => {
    const complianceEvents = [
        { date: "07 Dec 2025", compliance: "TDS/TCS Payment", description: "Due date for deposit of Tax deducted/collected for the month of November 2025.", type: "Income Tax", status: "Upcoming" },
        { date: "11 Dec 2025", compliance: "GSTR-1", description: "Filing of returns by registered person with aggregate turnover exceeding ₹5 Cr during preceding FY.", type: "GST", status: "Upcoming" },
        { date: "15 Dec 2025", compliance: "Advance Tax", description: "Third instalment of advance tax for the FY 2025-26.", type: "Income Tax", status: "Upcoming" },
        { date: "20 Dec 2025", compliance: "GSTR-3B", description: "Due date for filing GSTR-3B return for the month of November 2025.", type: "GST", status: "Upcoming" },
        { date: "30 Dec 2025", compliance: "Belated/Revised ITR", description: "Last date for filing belated/revised Income Tax Return for AY 2025-26.", type: "Income Tax", status: "Critical" },
        { date: "31 Dec 2025", compliance: "Annual General Meeting", description: "Last date for holding AGM for companies (extension cases).", type: "ROC", status: "Upcoming" },
    ];

    return (
        <div className="w-full bg-slate-50 min-h-screen pt-24 pb-20">
            <div className="bg-primary-dark text-white py-16 mb-12">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-serif font-bold mb-4">Compliance Calendar</h1>
                    <p className="text-gray-400 text-lg">Stay ahead of regulatory deadlines. Track key due dates for Income Tax, GST, and ROC.</p>
                </div>
            </div>

            <div className="container mx-auto px-6">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                        <h2 className="text-xl font-bold text-primary flex items-center">
                            <Calendar className="mr-2 text-secondary" /> December 2025
                        </h2>
                        <div className="flex space-x-2">
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Income Tax</span>
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">GST</span>
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">ROC</span>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-gray-50 text-gray-600 text-sm uppercase tracking-wider">
                                    <th className="px-8 py-4 font-semibold">Due Date</th>
                                    <th className="px-8 py-4 font-semibold">Compliance</th>
                                    <th className="px-8 py-4 font-semibold">Description</th>
                                    <th className="px-8 py-4 font-semibold">Type</th>
                                    <th className="px-8 py-4 font-semibold">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {complianceEvents.map((event, index) => (
                                    <tr key={index} className="hover:bg-gray-50/80 transition-colors">
                                        <td className="px-8 py-6 whitespace-nowrap">
                                            <div className="flex flex-col">
                                                <span className="text-lg font-bold text-primary">{event.date.split(' ')[0]}</span>
                                                <span className="text-xs text-gray-500 uppercase">{event.date.split(' ')[1]} {event.date.split(' ')[2]}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6 font-semibold text-gray-800">{event.compliance}</td>
                                        <td className="px-8 py-6 text-sm text-gray-600 max-w-md">{event.description}</td>
                                        <td className="px-8 py-6">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${event.type === 'Income Tax' ? 'bg-blue-50 text-blue-700' :
                                                    event.type === 'GST' ? 'bg-green-50 text-green-700' :
                                                        'bg-purple-50 text-purple-700'
                                                }`}>
                                                {event.type}
                                            </span>
                                        </td>
                                        <td className="px-8 py-6">
                                            {event.status === 'Critical' ? (
                                                <span className="flex items-center text-red-600 text-sm font-medium">
                                                    <AlertCircle size={16} className="mr-1" /> Critical
                                                </span>
                                            ) : (
                                                <span className="flex items-center text-gray-500 text-sm">
                                                    <CheckCircle size={16} className="mr-1" /> Upcoming
                                                </span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-6 flex items-start">
                    <AlertCircle className="text-blue-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                        <h4 className="font-bold text-blue-900 mb-1">Disclaimer</h4>
                        <p className="text-sm text-blue-800 leading-relaxed">
                            The dates mentioned above are subject to change as per government notifications. Please consult with our team for specific applicability to your business entity.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComplianceCalendar;
