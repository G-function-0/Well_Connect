import { User, Target, Zap, Mail, ShieldCheck, ChevronRight, Save } from 'lucide-react';

export default function NextLevelProfile() {
    return (
        <div className="min-h-screen bg-[#0f172a] text-slate-200 selection:bg-emerald-500/30 font-sans">
            {/* Dynamic Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full" />
                <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-blue-500/10 blur-[100px] rounded-full" />
            </div>

            <main className="relative z-10 max-w-6xl mx-auto px-6 py-12 lg:py-20">

                {/* Header Section */}
                <header className="flex flex-col md:flex-row items-center gap-8 mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                        <div className="relative w-32 h-32 bg-slate-800 rounded-[2rem] flex items-center justify-center border border-slate-700 shadow-2xl">
                            <span className="text-4xl font-black bg-gradient-to-br from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                                SS
                            </span>
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-emerald-500 p-2 rounded-xl shadow-lg border-4 border-[#0f172a]">
                            <ShieldCheck className="w-5 h-5 text-white" />
                        </div>
                    </div>

                    <div className="text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-2">
                            Sarfaraz Shaikh
                        </h1>
                        <div className="flex items-center justify-center md:justify-start gap-2 text-slate-400 font-medium">
                            <span className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-full text-xs uppercase tracking-widest text-emerald-400">
                                Verified Athlete
                            </span>
                            <span className="text-slate-600">•</span>
                            <span className="text-sm">Member since 2024</span>
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Sidebar Info */}
                    <aside className="lg:col-span-4 space-y-6">
                        <div className="bg-slate-800/40 backdrop-blur-xl border border-white/5 p-8 rounded-[2.5rem] shadow-2xl">
                            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-6">Performance Matrix</h3>

                            <div className="space-y-6">
                                <StatRow icon={<Target className="text-emerald-400" />} label="Primary Goal" value="Muscle Gain" />
                                <StatRow icon={<Zap className="text-amber-400" />} label="Experience" value="Intermediate" />
                                <div className="pt-4 border-t border-slate-700/50">
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Account Security</p>
                                    <p className="text-sm font-medium text-slate-300 flex items-center gap-2">
                                        <Mail className="w-4 h-4 text-slate-500" /> Sarfarazshaikh9518@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-emerald-600 to-teal-700 p-8 rounded-[2.5rem] text-white shadow-xl group cursor-pointer overflow-hidden relative">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                                <Zap className="w-24 h-24" />
                            </div>
                            <h4 className="font-bold text-lg mb-1 relative z-10">Pro Plan Active</h4>
                            <p className="text-emerald-100 text-sm mb-4 relative z-10">Unlock 120+ custom workout templates.</p>
                            <button className="bg-white/20 hover:bg-white/30 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold transition-colors">
                                View Benefits
                            </button>
                        </div>
                    </aside>

                    {/* Settings Form */}
                    <section className="lg:col-span-8">
                        <div className="bg-slate-800/40 backdrop-blur-xl border border-white/5 p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-400">
                                    <User className="w-6 h-6" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white">Profile Configuration</h2>
                                    <p className="text-slate-400 text-sm">Personalize your training experience</p>
                                </div>
                            </div>

                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <InputField label="Full Name" defaultValue="John Doe" />
                                    <InputField label="Age" type="number" defaultValue="28" />

                                    <SelectField label="Gender">
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Non-binary</option>
                                    </SelectField>

                                    <SelectField label="Fitness Goal">
                                        <option>Muscle Gain</option>
                                        <option>Fat Loss</option>
                                        <option>Maintenance</option>
                                    </SelectField>
                                </div>

                                <div className="pt-6 flex flex-col sm:flex-row gap-4">
                                    <button className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-[#0f172a] font-bold py-4 px-8 rounded-2xl transition-all active:scale-[0.98] shadow-[0_0_20px_rgba(16,185,129,0.2)] flex items-center justify-center gap-2">
                                        <Save className="w-5 h-5" /> Save Profile
                                    </button>
                                    <button className="px-8 py-4 rounded-2xl border border-slate-700 hover:bg-slate-700/50 font-bold transition-all text-slate-300">
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

// Reusable Components for clean code
function StatRow({ icon, label, value }) {
    return (
        <div className="flex items-center justify-between group">
            <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-700/50 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    {icon}
                </div>
                <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{label}</p>
                    <p className="text-slate-200 font-bold">{value}</p>
                </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-600" />
        </div>
    );
}

function InputField({ label, ...props }) {
    return (
        <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">{label}</label>
            <input
                {...props}
                className="w-100 w-full bg-slate-900/50 border border-slate-700 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all placeholder:text-slate-600"
            />
        </div>
    );
}

function SelectField({ label, children }) {
    return (
        <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">{label}</label>
            <select className="w-full bg-slate-900/50 border border-slate-700 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all appearance-none cursor-pointer">
                {children}
            </select>
        </div>
    );
}