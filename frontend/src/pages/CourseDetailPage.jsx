import React from 'react';

// --- Sub-components with Tailwind Refactor ---

const Badge = ({ children, colorClass = "text-emerald-500 bg-emerald-500/10 border-emerald-500/20" }) => (
    <span className={`px-3 py-1.5 rounded-full text-[0.75rem] font-extrabold uppercase tracking-wider border ${colorClass}`}>
        {children}
    </span>
);

const ModuleCard = ({ number, title, duration, isPreview }) => (
    <div className="flex justify-between items-center p-5 rounded-[1.2rem] border border-slate-100 hover:border-emerald-500/30 hover:bg-slate-50/50 transition-all duration-200 group">
        <div className="flex items-center gap-5">
            <div className="text-[0.8rem] font-black text-slate-400 group-hover:text-emerald-500">{number}</div>
            <div>
                <h3 className="text-base font-bold text-slate-900 leading-tight">{title}</h3>
                <span className="text-[0.8rem] text-slate-500 flex items-center gap-1 mt-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {duration} minutes
                </span>
            </div>
        </div>
        {isPreview ? (
            <button className="bg-slate-100 text-slate-900 px-4 py-2 rounded-[0.6rem] font-bold text-[0.75rem] hover:bg-emerald-500 hover:text-white transition-colors">
                Free Preview
            </button>
        ) : (
            <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
        )}
    </div>
);

export default function CourseDetailPage() {
    return (
        <div className="bg-slate-50 min-h-screen font-['Plus_Jakarta_Sans',sans-serif] text-slate-800">

            {/* 1. Cinematic Header Section */}
            <header className="relative h-[450px] bg-[#0f172a] flex items-center px-[5%] overflow-hidden">
                {/* Radial Glow Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(16,185,129,0.15)_0%,_transparent_50%)] z-10" />

                <div className="relative z-20 max-w-[800px] text-white">
                    <div className="text-emerald-400 text-[0.85rem] font-bold uppercase tracking-[0.15em] mb-4">
                        Courses / Fitness / Masterclass
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black leading-[1.1] mb-6 tracking-tighter italic">
                        Complete Fitness <br />
                        <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent italic">
                            Masterclass 2026
                        </span>
                    </h1>

                    <div className="flex flex-wrap items-center gap-5 text-[0.95rem]">
                        <div className="flex items-center gap-2 text-amber-400 font-bold">
                            <div className="flex tracking-tighter">★★★★★</div>
                            <span className="text-white">4.9</span>
                            <span className="text-white/60 font-medium text-sm">(1.2k+ ratings)</span>
                        </div>
                        <div className="w-1 h-1 rounded-full bg-white/30" />
                        <span className="font-medium">12,402 students enrolled</span>
                        <div className="w-1 h-1 rounded-full bg-white/30" />
                        <Badge colorClass="text-emerald-400 bg-emerald-400/10 border-emerald-400/30">Bestseller</Badge>
                    </div>

                    <div className="flex items-center gap-4 mt-10">
                        <img
                            src="https://i.pravatar.cc/100?img=5"
                            className="w-12 h-12 rounded-2xl border-2 border-emerald-500 object-cover"
                            alt="Coach"
                        />
                        <div>
                            <div className="text-[0.8rem] opacity-60 font-bold uppercase tracking-wider">Created by</div>
                            <div className="font-extrabold text-lg italic">Coach John Fitness</div>
                        </div>
                    </div>
                </div>
            </header>

            {/* 2. Main Body Layout */}
            <main className="max-w-7xl mx-auto -mt-[60px] px-5 pb-24 grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-30">

                {/* Left Column: Content */}
                <div className="lg:col-span-2 space-y-8">

                    {/* Video Preview Card */}
                    <section className="bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50">
                        <div className="relative w-full h-[400px] bg-black rounded-[1.5rem] overflow-hidden mb-8 group cursor-pointer">
                            <img
                                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80"
                                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                                alt="Preview"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-[0_0_0_15px_rgba(16,185,129,0.2)] group-hover:scale-110 transition-transform">
                                    <svg className="w-10 h-10 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M4.516 7.548c0-.469.468-.813.906-.813.187 0 .344.063.531.156l6.094 3.375c.375.188.563.531.563.906 0 .344-.188.688-.563.906l-6.094 3.375c-.187.094-.344.156-.531.156-.438 0-.906-.344-.906-.813V7.548z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-black mb-6 uppercase italic tracking-tight">What you'll learn</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {['Advanced strength protocols', 'Bio-mechanics & Form', 'Metabolic conditioning', 'Elite nutrition planning'].map(item => (
                                <div key={item} className="flex items-center gap-3 text-slate-600 font-medium">
                                    <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Curriculum Section */}
                    <section className="bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50">
                        <div className="flex flex-wrap items-end justify-between mb-8 gap-4">
                            <h2 className="text-2xl font-black uppercase italic tracking-tight">Course Content</h2>
                            <span className="text-slate-400 text-sm font-bold uppercase tracking-widest">
                                12 Sections • 48 Lectures • 12h total
                            </span>
                        </div>
                        <div className="flex flex-col gap-3">
                            <ModuleCard number="01" title="Introduction to Bio-Hacking Fitness" duration="15" isPreview={true} />
                            <ModuleCard number="02" title="The Science of Hypertrophy" duration="45" isPreview={false} />
                            <ModuleCard number="03" title="Foundation: Squat & Deadlift Mechanics" duration="60" isPreview={false} />
                            <ModuleCard number="04" title="Advanced Nutrition & Supplementation" duration="30" isPreview={false} />
                        </div>
                    </section>
                </div>

                {/* Right Column: Sticky Pricing Sidebar */}
                <aside className="lg:col-span-1">
                    <div className="sticky top-8 bg-white rounded-[2.5rem] p-8 shadow-[0_40px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-50">
                        <div className="flex items-center gap-4 mb-2">
                            <span className="text-4xl font-black">$49.99</span>
                            <span className="text-slate-400 line-through text-lg font-bold">$199.99</span>
                            <Badge colorClass="text-red-500 bg-red-500/10 border-red-500/20">75% OFF</Badge>
                        </div>
                        <p className="text-red-500 text-sm font-extrabold uppercase tracking-widest mb-8">
                            🔥 Offer ends in 12 hours
                        </p>

                        <div className="space-y-4">
                            <button className="w-full py-5 bg-emerald-500 hover:bg-emerald-400 text-white rounded-2xl font-black text-xl shadow-[0_15px_30px_rgba(16,185,129,0.3)] transition-all active:scale-[0.98]">
                                Enroll Now
                            </button>
                            <button className="w-full py-5 bg-transparent text-slate-900 border-2 border-slate-100 hover:border-slate-200 rounded-2xl font-black transition-all">
                                Add to Wishlist
                            </button>
                        </div>

                        <div className="mt-8 pt-8 border-t border-slate-50 space-y-4">
                            {['Full lifetime access', 'Certificate of completion', '12 downloadable resources'].map(inc => (
                                <div key={inc} className="flex items-center gap-3 text-[0.85rem] text-slate-600 font-bold">
                                    <span className="text-emerald-500">✓</span> {inc}
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 flex items-center justify-between">
                            <span className="text-[0.8rem] font-black uppercase tracking-widest text-slate-400">Share this course</span>
                            <div className="flex gap-3">
                                {/* Social placeholders */}
                                <div className="w-8 h-8 rounded-full bg-slate-100" />
                                <div className="w-8 h-8 rounded-full bg-slate-100" />
                            </div>
                        </div>
                    </div>
                </aside>
            </main>
        </div>
    );
}