import React from 'react';
import { Calendar, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const ComplianceCalendar = () => {
    const complianceEvents = [
        { date: "07 Dec 2025", compliance: "TDS/TCS Payment", description: "Due date for deposit of Tax deducted/collected for the month of November 2025.", type: "Income Tax", status: "Upcoming", severity: "medium" },
        { date: "11 Dec 2025", compliance: "GSTR-1", description: "Filing of returns by registered person with aggregate turnover exceeding ₹5 Cr during preceding FY.", type: "GST", status: "Upcoming", severity: "medium" },
        { date: "15 Dec 2025", compliance: "Advance Tax", description: "Third instalment of advance tax for the FY 2025-26.", type: "Income Tax", status: "Upcoming", severity: "high" },
        { date: "20 Dec 2025", compliance: "GSTR-3B", description: "Due date for filing GSTR-3B return for the month of November 2025.", type: "GST", status: "Upcoming", severity: "high" },
        { date: "30 Dec 2025", compliance: "Belated/Revised ITR", description: "Last date for filing belated/revised Income Tax Return for AY 2025-26.", type: "Income Tax", status: "Critical", severity: "critical" },
        { date: "31 Dec 2025", compliance: "Annual General Meeting", description: "Last date for holding AGM for companies (extension cases).", type: "ROC", status: "Upcoming", severity: "medium" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const rowVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

    const getSeverityColor = (severity) => {
        switch (severity) {
            case 'critical': return 'text-red-500 border-red-500/30 bg-red-500/10 shadow-[0_0_10px_rgba(239,68,68,0.3)]';
            case 'high': return 'text-secondary border-secondary/30 bg-secondary/10 shadow-[0_0_10px_rgba(251,191,36,0.3)]';
            default: return 'text-accent border-accent/30 bg-accent/10 shadow-[0_0_10px_rgba(6,182,212,0.3)]';
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full bg-primary min-h-screen pt-20 pb-20 text-gray-300"
        >
            {/* Header section matches other techno pages */}
            <div className="relative pt-24 pb-20 overflow-hidden bg-primary-dark border-b border-white/5">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMSkiLz48L3N2Zz4=')] bg-repeat opacity-20 mix-blend-screen" />
                <div className="absolute top-0 right-1/4 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-secondary/10 rounded-full blur-[100px] mix-blend-screen z-0 animate-blob" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block inline-flex items-center gap-2">
                            <span className="w-4 h-[1px] bg-secondary"></span> Event Framework
                        </span>
                        <h1 className="text-4xl md:text-6xl font-techno font-bold mb-4 text-white">Compliance <span className="text-gradient">Timeline</span></h1>
                        <p className="text-gray-400 text-lg max-w-2xl font-light">Track critical regulatory deadlines. Ensure operational continuity by monitoring vital timestamps for Income Tax, GST, and ROC protocols.</p>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-6 mt-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="glass-dark rounded-2xl border border-white/10 overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                >
                    <div className="p-6 border-b border-white/10 flex justify-between items-center bg-primary-dark/80 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
                        <h2 className="text-xl font-techno font-bold text-white flex items-center tracking-wide">
                            <Clock className="mr-3 text-secondary" size={24} />
                            <span className="font-mono text-secondary mr-2">SYS_TIME:</span> DECEMBER 2025
                        </h2>
                        <div className="hidden md:flex space-x-3">
                            <span className="px-3 py-1 rounded text-xs font-mono font-bold tracking-widest border border-blue-500/30 bg-blue-500/10 text-blue-400">INCOME TAX</span>
                            <span className="px-3 py-1 rounded text-xs font-mono font-bold tracking-widest border border-green-500/30 bg-green-500/10 text-green-400">GST</span>
                            <span className="px-3 py-1 rounded text-xs font-mono font-bold tracking-widest border border-purple-500/30 bg-purple-500/10 text-purple-400">ROC</span>
                        </div>
                    </div>

                    <div className="overflow-x-auto relative">
                        {/* Grid lines background */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_40px] pointer-events-none"></div>

                        <table className="w-full text-left relative z-10 border-collapse">
                            <thead>
                                <tr className="bg-primary-dark/40 text-gray-500 text-xs font-mono uppercase tracking-[0.2em] border-b border-white/10">
                                    <th className="px-8 py-4 font-normal">Timestamp</th>
                                    <th className="px-8 py-4 font-normal">Protocol</th>
                                    <th className="px-8 py-4 font-normal">Details</th>
                                    <th className="px-8 py-4 font-normal">Vector</th>
                                    <th className="px-8 py-4 font-normal">Status</th>
                                </tr>
                            </thead>
                            <motion.tbody
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="divide-y divide-white/5"
                            >
                                {complianceEvents.map((event, index) => (
                                    <motion.tr
                                        key={index}
                                        variants={rowVariants}
                                        className="hover:bg-white/[0.02] transition-colors group"
                                    >
                                        <td className="px-8 py-6 whitespace-nowrap">
                                            <div className="flex flex-col">
                                                <span className="text-lg font-mono font-bold text-white group-hover:text-secondary transition-colors drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">
                                                    {event.date.split(' ')[0]}
                                                </span>
                                                <span className="text-xs text-gray-500 uppercase font-mono tracking-widest">
                                                    {event.date.split(' ')[1]} {event.date.split(' ')[2]}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6 font-techno font-bold text-gray-200 text-lg tracking-wide">{event.compliance}</td>
                                        <td className="px-8 py-6 text-sm text-gray-400 max-w-md font-light leading-relaxed">{event.description}</td>
                                        <td className="px-8 py-6">
                                            <span className={`px-2 py-1 border rounded text-[10px] font-mono font-bold tracking-widest uppercase ${event.type === 'Income Tax' ? 'border-blue-500/50 text-blue-400 bg-blue-500/5' :
                                                event.type === 'GST' ? 'border-green-500/50 text-green-400 bg-green-500/5' :
                                                    'border-purple-500/50 text-purple-400 bg-purple-500/5'
                                                }`}>
                                                {event.type}
                                            </span>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className={`inline-flex items-center px-3 py-1 rounded text-xs font-mono font-bold uppercase tracking-widest border ${getSeverityColor(event.severity)}`}>
                                                {event.severity === 'critical' ? (
                                                    <AlertCircle size={14} className="mr-2 animate-pulse" />
                                                ) : (
                                                    <CheckCircle size={14} className="mr-2 opacity-70" />
                                                )}
                                                {event.status}
                                            </div>
                                        </td>
                                    </motion.tr>
                                ))}
                            </motion.tbody>
                        </table>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-8 bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 flex flex-col md:flex-row items-start relative overflow-hidden"
                >
                    {/* Scanline effect over disclaimer */}
                    <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[size:100%_4px] pointer-events-none z-0 mix-blend-overlay"></div>

                    <AlertCircle className="text-blue-400 mr-4 flex-shrink-0 mt-1 relative z-10" />
                    <div className="relative z-10">
                        <h4 className="font-techno tracking-widest uppercase font-bold text-blue-400 mb-2">System Notice</h4>
                        <p className="text-sm text-blue-300/80 leading-relaxed font-mono">
                            The timestamps listed are subject to dynamic updates based on central authority directives. Consult with our command center for precise applicability to your specific operations node.
                        </p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ComplianceCalendar;
