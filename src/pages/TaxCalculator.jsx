import React, { useState } from 'react';
import { Calculator, RefreshCw, Zap, IndianRupee, PieChart, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TaxCalculator = () => {
    const [income, setIncome] = useState('');
    const [deductions, setDeductions] = useState('');
    const [age, setAge] = useState('below60');
    const [regime, setRegime] = useState('new');
    const [result, setResult] = useState(null);

    const calculateTax = () => {
        const grossIncome = parseFloat(income) || 0;
        const totalDeductions = parseFloat(deductions) || 0;
        let taxableIncome = Math.max(0, grossIncome - (regime === 'old' ? totalDeductions : 0)); // Simplified: New regime has limited deductions

        // Very simplified tax logic for demo purposes (FY 2025-26 assumptions)
        let tax = 0;

        if (regime === 'new') {
            // New Regime Slabs (Hypothetical/Simplified)
            if (taxableIncome > 300000) {
                if (taxableIncome <= 700000) tax += (taxableIncome - 300000) * 0.05;
                else {
                    tax += 400000 * 0.05; // 3L to 7L
                    if (taxableIncome <= 1000000) tax += (taxableIncome - 700000) * 0.10;
                    else {
                        tax += 300000 * 0.10; // 7L to 10L
                        if (taxableIncome <= 1200000) tax += (taxableIncome - 1000000) * 0.15;
                        else {
                            tax += 200000 * 0.15; // 10L to 12L
                            if (taxableIncome <= 1500000) tax += (taxableIncome - 1200000) * 0.20;
                            else {
                                tax += 300000 * 0.20; // 12L to 15L
                                tax += (taxableIncome - 1500000) * 0.30;
                            }
                        }
                    }
                }
            }
            // Rebate u/s 87A for income up to 7L
            if (taxableIncome <= 700000) tax = 0;
        } else {
            // Old Regime (Simplified)
            if (taxableIncome > 250000) {
                if (taxableIncome <= 500000) tax += (taxableIncome - 250000) * 0.05;
                else {
                    tax += 250000 * 0.05;
                    if (taxableIncome <= 1000000) tax += (taxableIncome - 500000) * 0.20;
                    else {
                        tax += 500000 * 0.20;
                        tax += (taxableIncome - 1000000) * 0.30;
                    }
                }
            }
            if (taxableIncome <= 500000) tax = 0;
        }

        const cess = tax * 0.04;
        setResult({
            taxableIncome,
            tax: Math.round(tax),
            cess: Math.round(cess),
            total: Math.round(tax + cess)
        });
    };

    const reset = () => {
        setIncome('');
        setDeductions('');
        setResult(null);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full bg-primary min-h-screen pt-20 pb-20 text-gray-300 relative overflow-hidden"
        >
            {/* Background elements */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMSkiLz48L3N2Zz4=')] bg-repeat opacity-20 mix-blend-screen pointer-events-none" />
            <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none animate-blob" />

            {/* Header Section */}
            <div className="relative pt-24 pb-16 z-10 border-b border-white/5 bg-primary-dark/80 backdrop-blur-md">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block inline-flex items-center gap-2">
                            <Zap size={14} className="text-secondary" /> Calculation Engine
                        </span>
                        <h1 className="text-4xl md:text-6xl font-techno font-bold mb-4 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                            Tax <span className="text-gradient">Estimator</span> Module
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl font-light mx-auto font-mono text-sm leading-relaxed">
                            Simulate tax liabilities for FY 2025-26. Compare structural inputs against diverse regulatory algorithms.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-6 mt-12 relative z-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-5xl mx-auto glass-dark rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 flex flex-col md:flex-row relative"
                >
                    {/* Glowing border effect */}
                    <div className="absolute inset-0 border border-secondary/20 rounded-3xl pointer-events-none z-30"></div>

                    {/* Input Section */}
                    <div className="p-8 md:p-12 md:w-1/2 relative">
                        {/* Background pattern */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none z-0"></div>

                        <div className="relative z-10">
                            <h2 className="text-2xl font-techno font-bold text-white mb-8 flex items-center tracking-wide border-b border-white/10 pb-4">
                                <Calculator className="mr-3 text-secondary" size={24} /> Input Parameters
                            </h2>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-mono tracking-widest uppercase text-gray-500 mb-2">Assessment Year</label>
                                    <div className="relative">
                                        <select className="w-full pl-4 pr-10 py-3 bg-primary-dark/80 border border-white/10 rounded font-mono text-white focus:outline-none focus:border-secondary transition-colors appearance-none cursor-pointer">
                                            <option>2026-2027 (FY 2025-26)</option>
                                            <option>2025-2026 (FY 2024-25)</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                                            v
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-mono tracking-widest uppercase text-gray-500 mb-3">Age Category</label>
                                    <div className="flex space-x-4 bg-primary-dark/50 p-1 rounded border border-white/5">
                                        <label className={`flex-1 flex justify-center items-center py-2 px-4 rounded cursor-pointer transition-all ${age === 'below60' ? 'bg-secondary text-primary-dark font-bold shadow-[0_0_10px_rgba(251,191,36,0.3)]' : 'text-gray-400 hover:text-white'}`}>
                                            <input type="radio" className="hidden" name="age" checked={age === 'below60'} onChange={() => setAge('below60')} />
                                            <span className="text-sm font-techno tracking-wider">Below 60</span>
                                        </label>
                                        <label className={`flex-1 flex justify-center items-center py-2 px-4 rounded cursor-pointer transition-all ${age === '60to80' ? 'bg-secondary text-primary-dark font-bold shadow-[0_0_10px_rgba(251,191,36,0.3)]' : 'text-gray-400 hover:text-white'}`}>
                                            <input type="radio" className="hidden" name="age" checked={age === '60to80'} onChange={() => setAge('60to80')} />
                                            <span className="text-sm font-techno tracking-wider">60-80</span>
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-mono tracking-widest uppercase text-gray-500 mb-2">Gross Annual Income</label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <IndianRupee size={16} className="text-gray-500 group-focus-within:text-secondary transition-colors" />
                                        </div>
                                        <input
                                            type="number"
                                            value={income}
                                            onChange={(e) => setIncome(e.target.value)}
                                            placeholder="Ex: 1200000"
                                            className="w-full pl-10 pr-4 py-3 bg-primary-dark/80 border border-white/10 rounded font-mono text-white text-lg focus:outline-none focus:border-secondary transition-colors placeholder-gray-600 focus:shadow-[0_0_15px_rgba(251,191,36,0.2)]"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-mono tracking-widest uppercase text-gray-500 mb-2 flex items-center justify-between">
                                        <span>Total Deductions</span>
                                        {regime === 'new' && <span className="text-xs text-red-500 flex items-center"><Info size={12} className="mr-1" /> Restricted by Regime</span>}
                                    </label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <IndianRupee size={16} className={`transition-colors ${regime === 'new' ? 'text-gray-700' : 'text-gray-500 group-focus-within:text-secondary'}`} />
                                        </div>
                                        <input
                                            type="number"
                                            value={deductions}
                                            onChange={(e) => setDeductions(e.target.value)}
                                            placeholder={regime === 'new' ? 'N/A in New Regime' : 'Ex: 150000'}
                                            disabled={regime === 'new'}
                                            className={`w-full pl-10 pr-4 py-3 border font-mono text-lg rounded transition-colors placeholder-gray-600 focus:outline-none ${regime === 'new' ? 'bg-primary-dark border-white/5 text-gray-700 cursor-not-allowed opacity-50' : 'bg-primary-dark/80 border-white/10 text-white focus:border-secondary focus:shadow-[0_0_15px_rgba(251,191,36,0.2)]'}`}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-mono tracking-widest uppercase text-gray-500 mb-2">Tax Regime Logic</label>
                                    <div className="flex bg-primary-dark/50 p-1 rounded border border-white/5 relative overflow-hidden">
                                        {/* Animated indicator */}
                                        <motion.div
                                            className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-accent rounded"
                                            initial={false}
                                            animate={{ left: regime === 'new' ? '4px' : 'calc(50%)' }}
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />

                                        <button
                                            onClick={() => setRegime('new')}
                                            className={`flex-1 py-3 text-sm font-techno tracking-wider rounded transition-colors relative z-10 ${regime === 'new' ? 'text-primary-dark font-bold' : 'text-gray-400 hover:text-white'}`}
                                        >
                                            NEW REGIME
                                        </button>
                                        <button
                                            onClick={() => setRegime('old')}
                                            className={`flex-1 py-3 text-sm font-techno tracking-wider rounded transition-colors relative z-10 ${regime === 'old' ? 'text-primary-dark font-bold' : 'text-gray-400 hover:text-white'}`}
                                        >
                                            OLD REGIME
                                        </button>
                                    </div>
                                </div>

                                <div className="flex space-x-4 pt-6 border-t border-white/5">
                                    <button
                                        onClick={calculateTax}
                                        className="flex-1 bg-gradient-to-r from-secondary to-[#d97706] text-primary-dark py-4 rounded font-techno tracking-widest font-bold uppercase hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] transition-shadow duration-300 relative overflow-hidden group"
                                    >
                                        <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                                        Initialize Calc()
                                    </button>
                                    <button
                                        onClick={reset}
                                        className="px-6 py-4 bg-primary-dark border border-white/10 text-gray-400 rounded hover:text-white hover:border-white/30 transition-colors flex items-center justify-center group"
                                        title="Reset Parameters"
                                    >
                                        <RefreshCw size={20} className="group-hover:rotate-180 transition-transform duration-500" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Result Section */}
                    <div className="md:w-1/2 relative bg-primary-dark border-l border-white/5 p-8 md:p-12 flex flex-col justify-center overflow-hidden">
                        {/* Grid background for result side */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>

                        <AnimatePresence mode="wait">
                            {result ? (
                                <motion.div
                                    key="result"
                                    initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                                    transition={{ duration: 0.5 }}
                                    className="relative z-10 flex flex-col h-full justify-center"
                                >
                                    <h3 className="text-xl font-techno font-bold mb-8 text-accent uppercase tracking-[0.2em] flex items-center border-b border-accent/20 pb-4">
                                        <PieChart className="mr-3" size={24} /> Output Parameters
                                    </h3>

                                    <div className="space-y-6">
                                        <div className="flex flex-col border-b border-white/5 pb-4 group">
                                            <span className="text-gray-500 font-mono text-xs uppercase tracking-widest mb-1 group-hover:text-gray-400 transition-colors">Taxable Income Volume</span>
                                            <span className="text-3xl font-techno text-white flex items-center">
                                                <span className="text-gray-600 mr-2 font-mono">₹</span>
                                                {result.taxableIncome.toLocaleString()}
                                            </span>
                                        </div>

                                        <div className="flex flex-col border-b border-white/5 pb-4 group">
                                            <span className="text-gray-500 font-mono text-xs uppercase tracking-widest mb-1 group-hover:text-gray-400 transition-colors">Computed Income Tax</span>
                                            <span className="text-2xl font-techno text-gray-300 flex items-center">
                                                <span className="text-gray-600 mr-2 font-mono text-lg">₹</span>
                                                {result.tax.toLocaleString()}
                                            </span>
                                        </div>

                                        <div className="flex flex-col border-b border-white/5 pb-4 group">
                                            <span className="text-gray-500 font-mono text-xs uppercase tracking-widest mb-1 group-hover:text-gray-400 transition-colors">Health & Ed. Protocol (4%)</span>
                                            <span className="text-xl font-techno text-gray-400 flex items-center">
                                                <span className="text-gray-600 mr-2 font-mono text-base">₹</span>
                                                {result.cess.toLocaleString()}
                                            </span>
                                        </div>

                                        <motion.div
                                            initial={{ boxShadow: "0 0 0 rgba(6,182,212,0)" }}
                                            animate={{ boxShadow: "0 0 30px rgba(6,182,212,0.3)" }}
                                            transition={{ delay: 0.5, duration: 1 }}
                                            className="bg-accent/10 border border-accent/30 p-8 rounded-2xl mt-8 relative overflow-hidden"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent pointer-events-none mix-blend-overlay"></div>

                                            <div className="text-center relative z-10">
                                                <span className="text-accent text-sm font-mono uppercase tracking-[0.3em] font-bold block mb-4 border-b border-accent/20 pb-2 inline-block">Total System Deduction</span>
                                                <span className="text-5xl lg:text-6xl font-techno font-bold text-white flex items-center justify-center drop-shadow-[0_0_20px_rgba(6,182,212,0.8)]">
                                                    <span className="text-accent/50 mr-2 font-mono text-3xl">₹</span>
                                                    {result.total.toLocaleString()}
                                                </span>
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="placeholder"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-center text-gray-600 relative z-10 flex flex-col items-center justify-center h-[400px]"
                                >
                                    <div className="relative mb-6">
                                        <Calculator size={80} className="mx-auto opacity-10" />
                                        <div className="absolute inset-0 flex items-center justify-center animate-pulse">
                                            <div className="w-full h-[2px] bg-secondary/30 drop-shadow-[0_0_5px_rgba(251,191,36,0.8)]"></div>
                                        </div>
                                    </div>
                                    <p className="font-mono text-sm uppercase tracking-widest leading-loose">
                                        Awaiting input parameters.<br />
                                        Initialize calc() to view<br />
                                        result matrix.
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default TaxCalculator;
