import React from 'react';

const About = () => {
    return (
        <div className="w-full">
            <div className="bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-primary mb-4">About Us</h1>
                    <div className="w-20 h-1 bg-secondary"></div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-2xl font-bold mb-6 text-gray-800">Who We Are</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            ATJ & Co. LLP is a premier Chartered Accountancy firm offering professional services in areas of Audit, Taxation, Corporate Laws, and Financial Consultancy. We are a team of dedicated professionals with extensive experience in various fields of finance and law.
                        </p>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Our firm was established with the vision of providing comprehensive and high-quality professional services to our clients. We believe in maintaining the highest standards of integrity and confidentiality.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            We cater to a diverse client base ranging from startups to large corporate houses, across various industries. Our approach is client-centric, and we strive to provide tailored solutions to meet specific business needs.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                        <h3 className="text-xl font-bold mb-4 text-primary">Our Mission</h3>
                        <p className="text-gray-600 mb-6">
                            To provide exceptional financial and legal services that add value to our clients' businesses and contribute to their growth and success.
                        </p>
                        <h3 className="text-xl font-bold mb-4 text-primary">Our Vision</h3>
                        <p className="text-gray-600">
                            To be recognized as a leading professional services firm known for its integrity, expertise, and commitment to client satisfaction.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
