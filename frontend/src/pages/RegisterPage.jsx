import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Lock, ArrowRight, CheckCircle2, Dumbbell } from 'lucide-react';

export default function RegisterPage() {
    // 1. Unified Form State
    const [formData, setFormData] = useState({
        role: 'learner',
        name: '',
        email: '',
        password: ''
    });

    // 2. Handle Input Changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // 3. Handle Submit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Secure Registration Data:", formData);
        alert("Account created successfully!");
    };

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 font-sans">
            <main className="w-full max-w-6xl h-full lg:h-[800px] flex flex-col lg:flex-row bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/50">

                {/* Visual Branding Section */}
                <section className="relative w-full lg:w-[45%] p-10 lg:p-16 flex flex-col justify-center overflow-hidden bg-slate-900">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/90 to-emerald-900/20 z-10" />
                        <img
                            src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&q=80"
                            alt="Fitness"
                            className="w-full h-full object-cover opacity-60"
                        />
                    </div>

                    <div className="relative z-20">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            Version 2.0 Live
                        </div>

                        <h1 className="text-5xl lg:text-6xl font-black text-white leading-none mb-6">
                            Elevate your <br />
                            <span className="text-emerald-500">Fitness Journey.</span>
                        </h1>

                        <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-md">
                            Join 10,000+ athletes achieving peak performance with data-driven coaching and smart intelligence.
                        </p>

                        <ul className="space-y-5">
                            <FeatureItem text="Biometric Progress Tracking" />
                            <FeatureItem text="Elite Trainer Marketplace" />
                            <FeatureItem text="Smart Meal Intelligence" />
                        </ul>
                    </div>
                </section>

                {/* Form Section */}
                <section className="flex-1 bg-slate-50 p-8 lg:p-16 flex items-center justify-center">
                    <div className="w-full max-w-md">
                        <header className="mb-10 text-center lg:text-left">
                            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Create Account</h2>
                            <p className="text-slate-500 font-medium mt-2">Start your 14-day free trial today.</p>
                        </header>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Role Picker */}
                            <div className="flex bg-slate-200/50 p-1 rounded-2xl gap-1">
                                <RoleButton
                                    active={formData.role === 'learner'}
                                    onClick={() => setFormData(p => ({ ...p, role: 'learner' }))}
                                    label="Learner"
                                />
                                <RoleButton
                                    active={formData.role === 'trainer'}
                                    onClick={() => setFormData(p => ({ ...p, role: 'trainer' }))}
                                    label="Trainer"
                                />
                            </div>

                            <div className="space-y-4">
                                <InputField
                                    icon={<User size={20} />}
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <InputField
                                    icon={<Mail size={20} />}
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <InputField
                                    icon={<Lock size={20} />}
                                    type="password"
                                    name="password"
                                    placeholder="Create Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-slate-900 hover:bg-emerald-600 text-white font-bold py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 group shadow-xl shadow-slate-900/20 active:scale-[0.98]"
                            >
                                Get Started
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>

                        <p className="text-center mt-8 text-slate-500 font-medium text-sm">
                            Already a member?{' '}
                            <Link to="/auth/login" className="text-emerald-600 font-bold hover:underline">
                                Sign In
                            </Link>
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}

// --- Sub-components for Cleanliness ---

const FeatureItem = ({ text }) => (
    <li className="flex items-center gap-4 group">
        <div className="bg-emerald-500/20 p-2 rounded-xl text-emerald-500 group-hover:scale-110 transition-transform">
            <CheckCircle2 size={20} />
        </div>
        <span className="text-slate-300 font-semibold tracking-wide">{text}</span>
    </li>
);

const RoleButton = ({ active, onClick, label }) => (
    <button
        type="button"
        onClick={onClick}
        className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${active
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            }`}
    >
        {label}
    </button>
);

const InputField = ({ icon, ...props }) => {
    const [focused, setFocused] = useState(false);
    return (
        <div className={`relative group transition-all duration-300`}>
            <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${focused ? 'text-emerald-500' : 'text-slate-400'}`}>
                {icon}
            </div>
            <input
                {...props}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                className={`w-full bg-white border-2 py-4 pl-12 pr-4 rounded-2xl outline-none transition-all ${focused
                        ? 'border-emerald-500 ring-4 ring-emerald-500/10'
                        : 'border-slate-200 group-hover:border-slate-300'
                    } font-medium text-slate-900 placeholder:text-slate-400`}
            />
        </div>
    );
};