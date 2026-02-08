import React from "react";
import { useNavigate } from "react-router-dom";

export default function MyCoursesPage() {
    const navigate = useNavigate();

    const courses = [
        { title: 'Complete Fitness Masterclass', duration: '120', progress: 75, thumbnail: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80', active: true },
        { title: 'Nutrition Fundamentals', duration: '90', progress: 40, thumbnail: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80', active: true },
        { title: 'Yoga for Beginners', duration: '60', progress: 100, thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80', active: false }
    ];

    return (
        <div className="relative min-h-screen overflow-x-hidden bg-slate-950 font-sans text-slate-100">
            {/* Background Decorative Elements */}
            <div className="absolute -left-[10%] -top-[10%] z-0 h-[40%] w-[40%] rounded-full bg-emerald-500/10 blur-[120px]" />
            <div className="absolute bottom-[10%] -right-[10%] z-0 h-[30%] w-[30%] rounded-full bg-blue-500/10 blur-[100px]" />

            <main className="relative z-10 mx-auto max-w-7xl px-6 py-16">

                {/* Bento Header */}
                <section className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">

                    {/* Main Hero Card */}
                    <div className="relative col-span-1 flex items-center overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-emerald-500 to-emerald-700 p-10 shadow-2xl shadow-emerald-500/20 md:col-span-2">
                        <div className="relative z-10 max-w-[60%]">
                            <span className="mb-4 block text-[10px] font-black uppercase tracking-[0.2em] text-emerald-100">
                                Welcome Back, Champ
                            </span>
                            <h1 className="mb-6 text-6xl font-black leading-[0.9] tracking-tighter md:text-7xl">
                                KEEP<br />
                                <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.6)' }}>PUSHING.</span>
                            </h1>
                            <p className="mb-8 font-medium text-emerald-100">
                                You've crushed 85% of your weekly goal. Keep the momentum high.
                            </p>
                            <button className="rounded-2xl bg-white px-8 py-3 text-sm font-black text-emerald-700 transition-transform hover:scale-105 active:scale-95">
                                Resume Last Session
                            </button>
                        </div>

                        {/* Huge Decorative Icon */}
                        <div className="absolute -right-10 -bottom-10 opacity-10">
                            <svg className="h-80 w-80 -rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                    </div>

                    {/* Stats Card */}
                    <div className="flex flex-col justify-between rounded-[2.5rem] border border-white/5 bg-slate-900 p-10">
                        <div className="flex items-center justify-between">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                                <ChartIcon />
                            </div>
                            <span className="text-[10px] font-black tracking-widest text-slate-500">ACTIVITY</span>
                        </div>

                        <div className="my-8 flex items-baseline">
                            <span className="text-7xl font-black tracking-tighter">05</span>
                            <span className="ml-2 text-lg font-bold text-slate-500">Programs</span>
                        </div>

                        <div>
                            <div className="mb-6 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                                <div className="h-full w-[60%] bg-emerald-400" />
                            </div>
                            <div className="flex gap-6 border-t border-slate-800 pt-6">
                                <span className="text-xs text-slate-400"><b className="text-white">2</b> Done</span>
                                <span className="text-xs text-slate-400"><b className="text-white">3</b> Active</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Course Section */}
                <section>
                    <div className="mb-10 flex items-center justify-between">
                        <h2 className="text-xl font-black tracking-tight text-white">Your Active Squad</h2>
                        <div className="flex gap-2">
                            <div className="h-2 w-6 rounded-full bg-blue-500" />
                            <div className="h-2 w-2 rounded-full bg-slate-800" />
                            <div className="h-2 w-2 rounded-full bg-slate-800" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {courses.map((course, index) => (
                            <div
                                key={index}
                                onClick={() => navigate("/course-player")}
                                className="group cursor-pointer rounded-[2.25rem] border border-white/5 bg-slate-900/40 p-5 transition-all duration-300 hover:bg-slate-900/60 hover:shadow-2xl hover:shadow-black/40"
                            >
                                <div className="relative mb-6 h-56 overflow-hidden rounded-[1.75rem]">
                                    <img
                                        src={course.thumbnail}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        alt={course.title}
                                    />

                                    {course.progress === 100 && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-emerald-500/85 backdrop-blur-sm">
                                            <CheckIcon />
                                        </div>
                                    )}

                                    <div className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/20 backdrop-blur-md transition-transform group-hover:scale-110">
                                        <PlayIcon />
                                    </div>
                                </div>

                                <div className="px-2">
                                    <h3 className="mb-5 h-12 text-lg font-black leading-tight line-clamp-2">
                                        {course.title}
                                    </h3>

                                    <div className="mb-4 flex items-center justify-between">
                                        <div className="flex items-center gap-1 text-[10px] font-black text-slate-500">
                                            <ClockIcon /> {course.duration}M
                                        </div>
                                        <div className={`text-[10px] font-black tracking-widest ${course.progress === 100 ? 'text-emerald-500' : 'text-orange-500'
                                            }`}>
                                            {course.progress === 100 ? 'COMPLETED' : `${course.progress}% READY`}
                                        </div>
                                    </div>

                                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                                        <div
                                            className={`h-full transition-all duration-1000 ${course.progress === 100 ? 'bg-emerald-500' : 'bg-orange-500'
                                                }`}
                                            style={{ width: `${course.progress}%` }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

// --- Icons ---
const ChartIcon = () => <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
const CheckIcon = () => <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>;
const PlayIcon = () => <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M4.5 3.5v13L16 10 4.5 3.5z" /></svg>;
const ClockIcon = () => <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;