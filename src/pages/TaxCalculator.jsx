import React, { useState } from 'react';
import { Calculator, RefreshCw } from 'lucide-react';

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
        <div className="w-full bg-slate-50 min-h-screen pt-24 pb-20">
            <div className="bg-primary-dark text-white py-16 mb-12">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-serif font-bold mb-4">Income Tax Estimator</h1>
                    <p className="text-gray-400 text-lg">Estimate your tax liability for FY 2025-26 under Old vs New Regime.</p>
                </div>
            </div>

            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col md:flex-row">

                    {/* Input Section */}
                    <div className="p-8 md:w-1/2 border-r border-gray-100">
                        <h2 className="text-xl font-bold text-primary mb-6 flex items-center">
                            <Calculator className="mr-2 text-secondary" /> Enter Details
                        </h2>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Assessment Year</label>
                                <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-secondary">
                                    <option>2026-2027 (FY 2025-26)</option>
                                    <option>2025-2026 (FY 2024-25)</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Age Category</label>
                                <div className="flex space-x-4">
                                    <label className="flex items-center cursor-pointer">
                                        <input type="radio" name="age" checked={age === 'below60'} onChange={() => setAge('below60')} className="text-secondary focus:ring-secondary" />
                                        <span className="ml-2 text-sm">Below 60</span>
                                    </label>
                                    <label className="flex items-center cursor-pointer">
                                        <input type="radio" name="age" checked={age === '60to80'} onChange={() => setAge('60to80')} className="text-secondary focus:ring-secondary" />
                                        <span className="ml-2 text-sm">60-80</span>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Gross Annual Income (₹)</label>
                                <input
                                    type="number"
                                    value={income}
                                    onChange={(e) => setIncome(e.target.value)}
                                    placeholder="e.g. 1200000"
                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Total Deductions (80C, 80D etc.)</label>
                                <input
                                    type="number"
                                    value={deductions}
                                    onChange={(e) => setDeductions(e.target.value)}
                                    placeholder="e.g. 150000"
                                    disabled={regime === 'new'}
                                    className={`w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary ${regime === 'new' ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                                />
                                {regime === 'new' && <p className="text-xs text-gray-500 mt-1">Most deductions not available in New Regime</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Tax Regime</label>
                                <div className="flex bg-gray-100 p-1 rounded-lg">
                                    <button
                                        onClick={() => setRegime('new')}
                                        className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${regime === 'new' ? 'bg-white shadow text-primary' : 'text-gray-500'}`}
                                    >
                                        New Regime
                                    </button>
                                    <button
                                        onClick={() => setRegime('old')}
                                        className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${regime === 'old' ? 'bg-white shadow text-primary' : 'text-gray-500'}`}
                                    >
                                        Old Regime
                                    </button>
                                </div>
                            </div>

                            <div className="flex space-x-4 pt-4">
                                <button onClick={calculateTax} className="flex-1 bg-secondary text-white py-3 rounded-lg font-bold hover:bg-secondary-light transition-colors shadow-lg shadow-secondary/20">
                                    Calculate Tax
                                </button>
                                <button onClick={reset} className="px-4 py-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                                    <RefreshCw size={20} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Result Section */}
                    <div className="p-8 md:w-1/2 bg-primary-dark text-white flex flex-col justify-center">
                        {result ? (
                            <div className="animate-fade-in">
                                <h3 className="text-2xl font-serif font-bold mb-8 text-center">Tax Summary</h3>

                                <div className="space-y-6">
                                    <div className="flex justify-between items-center border-b border-gray-700 pb-4">
                                        <span className="text-gray-400">Taxable Income</span>
                                        <span className="text-xl font-bold">₹ {result.taxableIncome.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-gray-700 pb-4">
                                        <span className="text-gray-400">Income Tax</span>
                                        <span className="text-xl font-bold">₹ {result.tax.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-gray-700 pb-4">
                                        <span className="text-gray-400">Health & Education Cess (4%)</span>
                                        <span className="text-xl font-bold">₹ {result.cess.toLocaleString()}</span>
                                    </div>

                                    <div className="bg-white/10 p-6 rounded-xl mt-6">
                                        <div className="text-center">
                                            <span className="text-gray-300 text-sm uppercase tracking-wider block mb-2">Total Tax Payable</span>
                                            <span className="text-4xl font-bold text-secondary">₹ {result.total.toLocaleString()}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center text-gray-500">
                                <Calculator size={64} className="mx-auto mb-4 opacity-20" />
                                <p>Enter your income details and click calculate to see the tax breakdown.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaxCalculator;
