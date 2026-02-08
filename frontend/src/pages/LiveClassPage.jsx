import React from 'react';

export default function LiveClassPage() {
    return (
        <div className="relative min-h-screen overflow-x-hidden bg-slate-950 font-sans text-slate-100">
            {/* Ambient Glow Background */}
            <div className="absolute -right-[5%] -top-[10%] z-0 h-[50%] w-[50%] rounded-full bg-blue-600/10 blur-[120px]" />

            <main className="relative z-10 mx-auto max-w-7xl px-6 py-8 md:py-12">

                {/* Header: Dynamic & Informative */}
                <header className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
                    <div className="space-y-3">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 rounded-full bg-red-500 px-3 py-1 text-[10px] font-black tracking-widest text-white shadow-lg shadow-red-500/20">
                                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white shadow-[0_0_8px_white]" />
                                LIVE NOW
                            </div>
                            <div className="flex items-center gap-1.5 text-sm font-medium text-slate-400">
                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" /></svg>
                                128 Watching
                            </div>
                        </div>
                        <h1 className="text-4xl font-black tracking-tight md:text-5xl">
                            HIIT Cardio <span className="font-light opacity-30">Mastery</span>
                        </h1>
                    </div>

                    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                        <div className="text-right">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Ending In</span>
                            <div className="font-mono text-xl font-black text-white">42:15</div>
                        </div>
                        <div className="text-emerald-400">
                            <ClockIcon />
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">

                    {/* Main Stage: Cinema Mode */}
                    <div className="lg:col-span-8 space-y-6">
                        <div className="group relative aspect-video w-full overflow-hidden rounded-[2.5rem] bg-black shadow-2xl shadow-black/50">
                            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-950/60 backdrop-blur-[2px] transition-all group-hover:backdrop-blur-none">
                                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/30 transition-transform group-hover:scale-110">
                                    <div className="ml-1.5 h-0 w-0 border-y-[12px] border-l-[20px] border-y-transparent border-l-white" />
                                </div>
                                <h3 className="mb-2 text-2xl font-black">Enter Workout Room</h3>
                                <p className="mb-6 text-slate-400">Sarah Johnson is live and waiting for you.</p>
                                <button className="rounded-xl bg-blue-600 px-8 py-3 font-bold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-500 active:scale-95">
                                    Join Stream
                                </button>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1200"
                                className="h-full w-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
                                alt="Live Workout"
                            />
                        </div>

                        {/* Details Section */}
                        <div className="rounded-[2.5rem] border border-white/5 bg-white/[0.03] p-8 backdrop-blur-sm">
                            <div className="mb-6 flex gap-8 border-b border-white/10 pb-4">
                                <span className="relative font-bold text-blue-500 after:absolute after:-bottom-4 after:left-0 after:h-0.5 after:w-full after:bg-blue-500">Overview</span>
                                <span className="cursor-pointer font-medium text-slate-500 hover:text-slate-300">Equipment</span>
                                <span className="cursor-pointer font-medium text-slate-500 hover:text-slate-300">Resources</span>
                            </div>
                            <p className="leading-relaxed text-slate-300">
                                This high-intensity session targets major muscle groups through 45-second intervals.
                                Focus on <strong className="text-white">explosive movement</strong> and consistent breathing.
                                No equipment needed, just space and hydration!
                            </p>
                        </div>
                    </div>

                    {/* Sidebar: Personal & Contextual */}
                    <aside className="lg:col-span-4 space-y-6">

                        {/* Instructor Card */}
                        <div className="flex items-center gap-4 rounded-3xl bg-white p-5 text-slate-900 shadow-xl">
                            <img src="https://i.pravatar.cc/100?img=3" className="h-14 w-14 rounded-2xl object-cover" alt="Sarah" />
                            <div className="flex-1">
                                <h4 className="font-black">Sarah Johnson</h4>
                                <div className="text-xs font-bold text-emerald-600">Elite Performance Coach</div>
                            </div>
                            <button className="rounded-xl bg-slate-100 px-4 py-2 text-xs font-black hover:bg-slate-200">
                                Follow
                            </button>
                        </div>

                        {/* Preparation Checklist */}
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                            <h4 className="mb-4 text-xs font-black uppercase tracking-widest text-slate-500">Quick Checklist</h4>
                            <ul className="space-y-4">
                                <CheckListItem text="Hydration (500ml Water)" />
                                <CheckListItem text="Sufficient Floor Space" />
                                <CheckListItem text="Heart Rate Monitor Sync" />
                            </ul>
                        </div>

                        {/* Sticky Next Class Info */}
                        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-purple-700 p-6 text-white shadow-2xl shadow-blue-900/20">
                            <div className="relative z-10">
                                <span className="text-[10px] font-black tracking-widest opacity-70">PART OF PROGRAM</span>
                                <h4 className="mt-2 mb-4 text-lg font-black leading-tight">The 30-Day Shred Masterclass</h4>
                                <button className="w-full rounded-xl bg-white/20 py-3 text-xs font-extrabold backdrop-blur-md transition-colors hover:bg-white/30">
                                    View Full Curriculum
                                </button>
                            </div>
                            {/* Decorative design element */}
                            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-white/10 blur-2xl group-hover:bg-white/20" />
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
}

const CheckListItem = ({ text }) => (
    <li className="flex items-center gap-3 text-sm font-medium text-slate-200">
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
            <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
        </div>
        {text}
    </li>
);

const ClockIcon = () => (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);