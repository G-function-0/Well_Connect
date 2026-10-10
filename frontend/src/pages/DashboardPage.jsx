import React from 'react';
import { Link } from 'react-router';

// --- Reusable Modern Components ---

const StatCard = ({ label, value, icon, colorClass, gradientFrom }) => (
    <div className="relative overflow-hidden rounded-[24px] border border-white/70 bg-white p-6 shadow-xl shadow-slate-200/50 transition-all hover:scale-[1.02]">
        {/* Subtle Decorative Gradient Orb */}
        <div className={`absolute -right-5 -top-5 h-24 w-24 rounded-full opacity-10 blur-2xl ${gradientFrom}`} />

        <div className="flex items-start justify-between">
            <div>
                <p className="mb-1 text-sm font-semibold text-slate-500">{label}</p>
                <p className="text-3xl font-black text-slate-900">{value}</p>
            </div>
            <div className={`rounded-xl p-3 ${colorClass}`}>
                {icon}
            </div>
        </div>
        <div className="mt-4 flex items-center gap-1">
            <span className="text-xs font-bold text-emerald-500">↑ 12%</span>
            <span className="text-xs font-medium text-slate-400">from last month</span>
        </div>
    </div>
);

export default function DashboardPage() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-slate-50 font-sans text-slate-900">
            {/* Background Decor Glow */}
            <div className="absolute -left-[10%] -top-[10%] z-0 h-[40%] w-[40%] rounded-full bg-blue-500/5 blur-[120px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 py-12">
                {/* Header */}
                <header className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                    <div>
                        <h1 className="text-4xl font-black tracking-tight text-slate-900">
                            Welcome back, <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Sarfaraz Shaikh!</span>
                        </h1>
                        <p className="mt-2 font-medium text-slate-500">You've completed 80% of your weekly goal. Keep it up!</p>
                    </div>
                    <Link to="/courses" className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-slate-900/20 transition-all hover:bg-slate-800 active:scale-95">
                        + Explore Courses
                    </Link>
                </header>

                {/* Stats Grid */}
                <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <StatCard
                        label="Enrolled" value="05"
                        colorClass="bg-blue-50 text-blue-600"
                        gradientFrom="bg-blue-600"
                        icon={<BookIcon />}
                    />
                    <StatCard
                        label="Progress" value="65%"
                        colorClass="bg-emerald-50 text-emerald-600"
                        gradientFrom="bg-emerald-600"
                        icon={<ChartIcon />}
                    />
                    <StatCard
                        label="Completed" value="02"
                        colorClass="bg-pink-50 text-pink-600"
                        gradientFrom="bg-pink-600"
                        icon={<CheckIcon />}
                    />
                    <StatCard
                        label="Sessions" value="03"
                        colorClass="bg-amber-50 text-amber-600"
                        gradientFrom="bg-amber-600"
                        icon={<CalendarIcon />}
                    />
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

                    {/* Active Courses Section */}
                    <section className="rounded-[32px] bg-white p-8 shadow-xl shadow-slate-200/40 lg:col-span-2">
                        <div className="mb-8 flex items-center justify-between">
                            <h2 className="text-xl font-black tracking-tight">Continue Learning</h2>
                            <button className="text-sm font-bold text-blue-600 hover:underline">View Schedule</button>
                        </div>

                        <div className="space-y-4">
                            {[
                                { title: 'Fitness Masterclass', p: 75, img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=200' },
                                { title: 'Nutrition Fundamentals', p: 40, img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=200' }
                            ].map((course, i) => (
                                <div key={i} className="group flex items-center gap-4 rounded-2xl border border-slate-100 p-4 transition-all hover:border-blue-100 hover:bg-blue-50/30">
                                    <img src={course.img} className="h-16 w-16 rounded-xl object-cover shadow-md" alt="" />
                                    <div className="flex-1">
                                        <h4 className="mb-2 text-[0.95rem] font-bold text-slate-800">{course.title}</h4>
                                        <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                                            <div
                                                className="h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-1000"
                                                style={{ width: `${course.p}%` }}
                                            />
                                        </div>
                                    </div>
                                    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                                        <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Upcoming Events Section */}
                    <section className="rounded-[32px] bg-slate-900 p-8 text-white shadow-2xl shadow-slate-900/20">
                        <h2 className="mb-6 text-xl font-black tracking-tight text-white">Upcoming Events</h2>
                        <div className="space-y-4">
                            {[
                                { title: 'HIIT Cardio', time: 'Today, 10:00 AM', active: true },
                                { title: 'Yoga Flow', time: 'Tomorrow, 06:00 PM', active: false }
                            ].map((ev, i) => (
                                <div key={i} className={`flex items-center gap-4 rounded-2xl p-4 transition-colors ${ev.active ? 'bg-white/10 ring-1 ring-white/20' : 'hover:bg-white/5'}`}>
                                    <div className="flex flex-col items-center justify-center rounded-xl bg-white/10 p-2 min-w-[60px]">
                                        <span className="text-xs font-black uppercase tracking-tighter">{ev.time.split(',')[0]}</span>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-sm font-bold leading-tight">{ev.title}</h4>
                                        <span className="text-xs font-medium text-slate-400">{ev.time.split(',')[1]}</span>
                                    </div>
                                    {ev.active && (
                                        <span className="animate-pulse rounded-md bg-red-500 px-2 py-1 text-[10px] font-black uppercase tracking-wider text-white">LIVE</span>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 p-6">
                            <p className="text-xs font-bold uppercase tracking-widest text-indigo-200">Coach Tip</p>
                            <p className="mt-2 text-sm font-medium leading-relaxed text-indigo-50">
                                "Consistency is the key to progress. Even a 15-minute workout counts!"
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

// --- Icons ---
const BookIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>;
const ChartIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;
const CheckIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const CalendarIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;