import React from 'react';
import { Building, Briefcase, Users, CheckCircle, ArrowRight, FileText, Globe, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
    const services = [
        { id: "corporate-services", title: "Corporate Services", icon: <Building size={32} />, desc: "Incorporation, Compliance, Secretarial Services, Mergers & Acquisitions." },
        { id: "taxation", title: "Taxation", icon: <Briefcase size={32} />, desc: "Direct Tax, Indirect Tax (GST), International Taxation, Transfer Pricing." },
        { id: "virtual-cfo", title: "Virtual CFO", icon: <Users size={32} />, desc: "Financial Planning, Budgeting, Cash Flow Management, MIS Reporting." },
        { id: "audit-assurance", title: "Audit & Assurance", icon: <CheckCircle size={32} />, desc: "Statutory Audit, Internal Audit, Tax Audit, Forensic Audit." },
        { id: "startup-advisory", title: "Startup Advisory", icon: <TrendingUp size={32} />, desc: "Business Plan, Valuation, Funding Assistance, Mentorship." },
        { id: "legal-services", title: "Legal Services", icon: <FileText size={32} />, desc: "Contract Drafting, Legal Opinions, Litigation Support, IPR Services." },
        { id: "global-expansion", title: "FEMA & RBI Matters", icon: <Globe size={32} />, desc: "FDI Compliance, ODI, ECB, FCGPR Filing." },
        { id: "project-financing", title: "Project Financing", icon: <ArrowRight size={32} />, desc: "Debt Syndication, Private Equity, Venture Capital, Working Capital." },
    ];

    return (
        <div className="w-full">
            <div className="bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-primary mb-4">Our Services</h1>
                    <div className="w-20 h-1 bg-secondary"></div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="text-primary mb-4">{service.icon}</div>
                            <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                            <p className="text-gray-600 mb-4">{service.desc}</p>
                            <Link to={`/service/${service.id}`} className="text-primary font-medium hover:text-secondary flex items-center">
                                Read More <ArrowRight size={16} className="ml-2" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
