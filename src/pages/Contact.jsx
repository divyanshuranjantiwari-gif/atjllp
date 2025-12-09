import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        }, 1500);
    };

    return (
        <div className="w-full">
            <div className="bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-primary mb-4">Contact Us</h1>
                    <div className="w-20 h-1 bg-secondary"></div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-2xl font-bold mb-8 text-gray-800">Get In Touch</h2>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="bg-primary/10 p-3 rounded-full mr-4">
                                    <MapPin className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Our Office</h3>
                                    <p className="text-gray-600">123, Business Park, Connaught Place,<br />New Delhi, India - 110001</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-primary/10 p-3 rounded-full mr-4">
                                    <Phone className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Phone Number</h3>
                                    <p className="text-gray-600">+91 98110 65952</p>
                                    <p className="text-gray-600">+91 11 4567 8900</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-primary/10 p-3 rounded-full mr-4">
                                    <Mail className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Email Address</h3>
                                    <p className="text-gray-600">info@atjllp.com</p>
                                    <p className="text-gray-600">support@atjllp.com</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-primary/10 p-3 rounded-full mr-4">
                                    <Clock className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Working Hours</h3>
                                    <p className="text-gray-600">Mon - Sat: 10:00 AM - 7:00 PM</p>
                                    <p className="text-gray-600">Sunday: Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800">Send us a Message</h2>
                        {status === 'success' && (
                            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                                Thank you! Your message has been sent successfully.
                            </div>
                        )}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full bg-secondary text-white font-bold py-3 rounded hover:bg-green-600 transition-colors disabled:opacity-70"
                            >
                                {status === 'sending' ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
