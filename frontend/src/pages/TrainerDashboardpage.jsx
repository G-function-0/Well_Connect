import React, { useState } from 'react';
import { User, Target, Zap, Mail, ShieldCheck, ChevronRight, Save, Dumbbell } from 'lucide-react';

export default function NextLevelProfile() {
    // 1. Unified Form State
    const [formData, setFormData] = useState({
        fullName: "Sarfaraz Shaikh",
        age: 24,
        gender: "Male",
        fitnessGoal: "Muscle Gain"
    });

    const [isSaving, setIsSaving] = useState(false);

    // 2. Safe Input Handler
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // 3. Submit Handler
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSaving(true);

        // Simulating a secure API call
        setTimeout(() => {
            console.log("Profile Saved Successfully:", formData);
            setIsSaving(false);
            alert("Profile Synced Securely!");
        }, 800);
    };

    // Helper for Avatar Initials
    const getInitials = (name) => {
        return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    };

    return (
        <div className="min-h-screen bg-[#0f172a] text-slate-200 selection:bg-emerald-500/30 font-sans antialiased">
            {/* Background Blur */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full" />
                <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-blue-500/10 blur-[100px] rounded-full" />
            </div>

            <main className="relative z-10 max-w-6xl mx-auto px-6 py-12 lg:py-20">

                {/* Header Section - Updates Dynamically */}
                <header className="flex flex-col md:flex-row items-center gap-8 mb-16 transition-all duration-500">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000" />
                        <div className="relative w-32 h-32 bg-slate-800 rounded-[2rem] flex items-center justify-center border border-slate-700 shadow-2xl">
                            <span className="text-4xl font-black bg-gradient-to-br from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                                {getInitials(formData.fullName) || "SS"}
                            </span>
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-emerald-500 p-2 rounded-xl shadow-lg border-4 border-[#0f172a]">
                            <ShieldCheck className="w-5 h-5 text-white" />
                        </div>
                    </div>

                    <div className="text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-2">
                            {formData.fullName || "New Athlete"}
                        </h1>
                        <div className="flex items-center justify-center md:justify-start gap-2 text-slate-400 font-medium">
                            <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[10px] font-black uppercase tracking-widest text-emerald-400">
                                Verified Athlete
                            </span>
                            <span className="text-slate-600">•</span>
                            <span className="text-sm">Member since 2024</span>
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Sidebar */}
                    <aside className="lg:col-span-4 space-y-6">
                        <div className="bg-slate-800/40 backdrop-blur-xl border border-white/5 p-8 rounded-[2.5rem] shadow-2xl">
                            <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-8">Performance Matrix</h3>
                            <div className="space-y-6">
                                <StatRow icon={<Target className="text-emerald-400" />} label="Current Goal" value={formData.fitnessGoal} />
                                <StatRow icon={<Zap className="text-amber-400" />} label="Experience" value="Intermediate" />
                                <div className="pt-6 mt-6 border-t border-slate-700/50">
                                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">Sync Status</p>
                                    <div className="flex items-center gap-3 p-3 bg-slate-900/40 rounded-2xl border border-slate-700/30">
                                        <Mail className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                                        <span className="text-xs font-medium text-slate-300 truncate">sarfaraz.shaikh@fitness.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-emerald-600 to-teal-700 p-8 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden group">
                            <Dumbbell className="absolute -bottom-4 -right-4 w-32 h-32 opacity-10 group-hover:-rotate-12 transition-transform duration-500" />
                            <h4 className="font-black text-xl mb-1">Pro Plan Active</h4>
                            <p className="text-emerald-100/80 text-sm mb-6">Unlock 120+ workout templates.</p>
                            <button className="bg-white/20 hover:bg-white/30 backdrop-blur-md px-6 py-2 rounded-xl text-xs font-black transition-all">
                                View Benefits
                            </button>
                        </div>
                    </aside>

                    {/* Main Settings Form */}
                    <section className="lg:col-span-8">
                        <div className="bg-slate-800/40 backdrop-blur-xl border border-white/5 p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="p-3.5 bg-emerald-500/10 rounded-2xl text-emerald-400 ring-1 ring-emerald-500/20">
                                    <User className="w-6 h-6" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-black text-white tracking-tight">Profile Configuration</h2>
                                    <p className="text-slate-400 text-sm font-medium">Personalize your training parameters</p>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                    <InputField
                                        label="Full Name"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                    />
                                    <InputField
                                        label="Age"
                                        name="age"
                                        type="number"
                                        value={formData.age}
                                        onChange={handleChange}
                                    />

                                    <SelectField
                                        label="Gender"
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                    >
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Non-binary">Non-binary</option>
                                    </SelectField>

                                    <SelectField
                                        label="Fitness Goal"
                                        name="fitnessGoal"
                                        value={formData.fitnessGoal}
                                        onChange={handleChange}
                                    >
                                        <option value="Muscle Gain">Muscle Gain</option>
                                        <option value="Fat Loss">Fat Loss</option>
                                        <option value="Maintenance">Maintenance</option>
                                    </SelectField>
                                </div>

                                <div className="pt-8 flex flex-col sm:flex-row gap-4">
                                    <button
                                        type="submit"
                                        disabled={isSaving}
                                        className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-[#0f172a] font-black py-4 px-8 rounded-2xl transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 disabled:opacity-50"
                                    >
                                        <Save className="w-5 h-5" />
                                        {isSaving ? "Saving..." : "Save Profile"}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => window.location.reload()}
                                        className="px-8 py-4 rounded-2xl border border-slate-700 hover:bg-slate-700/50 font-bold transition-all text-slate-300"
                                    >
                                        Discard
                                    </button>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

// Reusable Sub-components
function StatRow({ icon, label, value }) {
    return (
        <div className="flex items-center justify-between group">
            <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-700/40 rounded-2xl group-hover:bg-emerald-500/10 transition-colors">
                    {icon}
                </div>
                <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{label}</p>
                    <p className="text-slate-200 font-bold">{value}</p>
                </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-600 group-hover:translate-x-1 transition-transform" />
        </div>
    );
}

function InputField({ label, ...props }) {
    return (
        <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">{label}</label>
            <input
                {...props}
                className="w-full bg-slate-900/50 border border-slate-700 rounded-2xl px-5 py-4 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/40 transition-all placeholder:text-slate-600"
            />
        </div>
    );
}

function SelectField({ label, children, ...props }) {
    return (
        <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">{label}</label>
            <div className="relative">
                <select
                    {...props}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-2xl px-5 py-4 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all appearance-none cursor-pointer"
                >
                    {children}
                </select>
                <ChevronRight className="w-4 h-4 absolute right-5 top-1/2 -translate-y-1/2 rotate-90 text-slate-500 pointer-events-none" />
            </div>
        </div>
    );
}