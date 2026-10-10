import React from 'react';

export default function NutritionPage() {
    const weeklyData = [
        { day: 'Mon', val: 80, color: 'bg-emerald-500' },
        { day: 'Tue', val: 65, color: 'bg-emerald-500' },
        { day: 'Wed', val: 95, color: 'bg-emerald-500' },
        { day: 'Thu', val: 40, color: 'bg-blue-500' },
        { day: 'Fri', val: 75, color: 'bg-emerald-500' },
        { day: 'Sat', val: 85, color: 'bg-emerald-500' },
        { day: 'Sun', val: 55, color: 'bg-emerald-500' },
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            <main className="mx-auto max-w-[85rem] px-6 py-12">

                {/* HEADER SECTION */}
                <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
                    <div>
                        <h1 className="text-5xl font-black tracking-tighter text-slate-900">
                            Fit <span className="text-emerald-500">Guide</span>
                        </h1>
                        <p className="mt-2 text-lg font-medium text-slate-500">
                            Precision nutrition for peak performance.
                        </p>
                    </div>
                    <button className="flex items-center gap-3 rounded-2xl bg-slate-900 px-8 py-4 font-bold text-white shadow-xl shadow-slate-900/20 transition-transform hover:scale-105 active:scale-95">
                        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Custom Target
                    </button>
                </div>

                <div className="grid grid-cols-12 gap-8">
                    {/* LEFT COLUMN: STATS */}
                    <div className="col-span-12 flex flex-col gap-8 lg:col-span-8">

                        {/* MACRO STATS ROW */}
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {[
                                { label: 'Calories', val: '1,450', unit: 'kcal', color: 'bg-slate-900', pct: 72 },
                                { label: 'Protein', val: '85', unit: 'g', color: 'bg-emerald-500', pct: 57 },
                                { label: 'Carbs', val: '120', unit: 'g', color: 'bg-blue-500', pct: 60 },
                                { label: 'Fats', val: '38', unit: 'g', color: 'bg-amber-500', pct: 76 },
                            ].map((stat, i) => (
                                <div key={i} className="rounded-[1.5rem] border border-white bg-white p-6 shadow-sm">
                                    <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">{stat.label}</span>
                                    <div className="my-2 text-2xl font-black text-slate-800">
                                        {stat.val}<span className="ml-1 text-sm font-bold text-slate-300 uppercase">{stat.unit}</span>
                                    </div>
                                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                                        <div className={`h-full rounded-full ${stat.color}`} style={{ width: `${stat.pct}%` }} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CHARTS ROW */}
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            {/* WEEKLY BAR CHART */}
                            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
                                <h3 className="mb-8 text-sm font-black text-slate-800 uppercase tracking-tight">Weekly Consistency</h3>
                                <div className="flex h-40 items-end justify-between gap-2">
                                    {weeklyData.map((d, i) => (
                                        <div key={i} className="group flex flex-1 flex-col items-center gap-3">
                                            <div
                                                className={`w-full rounded-t-lg transition-all duration-500 group-hover:opacity-80 ${d.color}`}
                                                style={{ height: `${d.val}%` }}
                                            />
                                            <span className="text-[10px] font-bold text-slate-400">{d.day}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* PROGRESS CIRCLE CARD */}
                            <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-2xl shadow-slate-900/20">
                                <h3 className="mb-6 text-sm font-black uppercase tracking-tight opacity-60">Daily Progress</h3>
                                <div className="flex items-center gap-8">
                                    <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-[10px] border-slate-800">
                                        {/* Simplified SVG Ring */}
                                        <svg className="absolute h-full w-full -rotate-90">
                                            <circle cx="64" cy="64" r="54" fill="transparent" stroke="#10b981" strokeWidth="10" strokeDasharray="339" strokeDashoffset="95" strokeLinecap="round" />
                                        </svg>
                                        <span className="text-2xl font-black">72%</span>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-500">Remaining</p>
                                        <p className="text-3xl font-black">550 <span className="text-sm">kcal</span></p>
                                        <span className="text-xs font-bold text-emerald-400">↑ 12% from yesterday</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* MEAL LIST */}
                        <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm">
                            <div className="flex items-center justify-between border-b border-slate-50 px-8 py-6">
                                <h3 className="font-black text-slate-800">Recent Consumptions</h3>
                                <button className="text-sm font-bold text-blue-600 hover:underline">View All</button>
                            </div>
                            <div className="divide-y divide-slate-50">
                                {[
                                    { name: 'Chicken Breast with Rice', type: 'LUNCH', cal: 450, time: '1:15 PM', icon: '🍱' },
                                    { name: 'Greek Yogurt with Honey', type: 'SNACK', cal: 180, time: '4:30 PM', icon: '🥣' },
                                ].map((meal, i) => (
                                    <div key={i} className="group flex items-center px-8 py-5 transition-colors hover:bg-slate-50/50">
                                        <div className="mr-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-xl transition-transform group-hover:scale-110">
                                            {meal.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-slate-800">{meal.name}</h4>
                                            <span className="text-[10px] font-black text-slate-400 uppercase">{meal.type} • {meal.time}</span>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-black text-slate-800">{meal.cal} kcal</div>
                                            <div className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Tracked</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: QUICK ADD FORM */}
                    <div className="col-span-12 lg:col-span-4">
                        <div className="sticky top-8 rounded-[2.5rem] border border-slate-200 bg-white p-10 shadow-2xl shadow-slate-200/50">
                            <h2 className="mb-8 text-2xl font-black tracking-tight">Quick Add</h2>

                            <div className="space-y-6">
                                <div>
                                    <label className="mb-2 block text-[10px] font-black uppercase tracking-widest text-slate-400">Meal Name</label>
                                    <input type="text" placeholder="Search foods..." className="w-full rounded-2xl border-2 border-slate-50 bg-slate-50 p-4 font-semibold outline-none transition-all focus:border-emerald-500 focus:bg-white" />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="mb-2 block text-[10px] font-black uppercase tracking-widest text-slate-400">Cals</label>
                                        <input type="number" className="w-full rounded-2xl border-2 border-slate-50 bg-slate-50 p-4 font-semibold outline-none focus:border-emerald-500 focus:bg-white" />
                                    </div>
                                    <div>
                                        <label className="mb-2 block text-[10px] font-black uppercase tracking-widest text-slate-400">Type</label>
                                        <select className="w-full rounded-2xl border-2 border-slate-50 bg-slate-50 p-4 font-semibold outline-none focus:border-emerald-500 focus:bg-white">
                                            <option>LUNCH</option>
                                            <option>DINNER</option>
                                            <option>SNACK</option>
                                        </select>
                                    </div>
                                </div>

                                <button className="w-full rounded-[1.25rem] bg-emerald-500 py-4 text-lg font-black text-white shadow-lg shadow-emerald-500/30 transition-all hover:translate-y-[-2px] hover:bg-emerald-600 active:translate-y-0">
                                    Log Meal Now
                                </button>

                                <div className="rounded-2xl bg-blue-50 p-4 text-center">
                                    <p className="text-xs font-bold text-blue-600">Pro Tip: Track protein first to hit goals faster!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}