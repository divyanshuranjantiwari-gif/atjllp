import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Building, Briefcase, TrendingUp, Shield, Globe, Users } from 'lucide-react';
import { servicesData } from '../data/content';

const iconMap = {
    Building: Building,
    Briefcase: Briefcase,
    TrendingUp: TrendingUp,
    Shield: Shield,
    Globe: Globe,
    Users: Users
};

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const navigate = useNavigate();
    const service = servicesData.find(s => s.id === serviceId);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [serviceId]);

    if (!service) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
                <h2 className="text-3xl font-bold text-primary mb-4">Service Not Found</h2>
                <Link to="/services" className="text-secondary hover:underline flex items-center">
                    <ArrowLeft size={20} className="mr-2" /> Back to Services
                </Link>
            </div>
        );
    }

    const IconComponent = iconMap[service.icon] || Building;

    return (
        <div className="w-full bg-slate-50 min-h-screen pt-24 pb-20">
            {/* Hero Section */}
            <div className="relative bg-primary-dark text-white py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/90 to-transparent"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <Link to="/services" className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors">
                        <ArrowLeft size={16} className="mr-2" /> Back to Services
                    </Link>
                    <div className="flex items-center mb-6">
                        <div className="bg-secondary/20 p-3 rounded-xl mr-4 backdrop-blur-sm">
                            <IconComponent size={32} className="text-secondary" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold">{service.title}</h1>
                    </div>
                    <p className="text-xl text-gray-300 max-w-2xl leading-relaxed font-light">
                        {service.shortDesc}
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-6 -mt-10 relative z-20">
                <div className="bg-white rounded-2xl shadow-xl p-10 md:p-16 border border-gray-100">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        {/* Main Description */}
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl font-bold text-primary mb-6 font-serif">Overview</h2>
                            <p className="text-gray-600 leading-loose text-lg mb-8">
                                {service.fullDesc}
                            </p>

                            <h3 className="text-xl font-bold text-primary mb-6 font-serif">Key Offerings</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {service.features.map((feature, index) => (
                                    <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-secondary/30 transition-colors">
                                        <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={20} />
                                        <span className="text-gray-700 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Sidebar CTA */}
                        <div className="lg:col-span-1">
                            <div className="bg-primary-dark text-white p-8 rounded-xl sticky top-24">
                                <h3 className="text-xl font-bold mb-4 font-serif">Need Expert Advice?</h3>
                                <p className="text-gray-400 mb-6 text-sm">
                                    Schedule a consultation with our industry experts to discuss your specific requirements.
                                </p>
                                <Link to="/contact-us" className="block w-full bg-secondary text-white text-center py-3 rounded-lg font-semibold hover:bg-secondary-light transition-colors mb-4">
                                    Book Consultation
                                </Link>
                                <div className="text-center">
                                    <p className="text-sm text-gray-500 mb-2">Or call us directly</p>
                                    <a href="tel:+919811065952" className="text-lg font-bold hover:text-secondary transition-colors">
                                        +91 98110 65952
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
