import React from 'react';

const TrainerProfilePage = () => {
    const trainer = {
        name: 'Sarah Mitchell',
        specialization: 'High Performance Coach',
        location: 'London, UK',
        bio: 'Pioneering science-based hypertrophy and biomechanical efficiency for elite athletes worldwide.',
        stats: [
            { label: 'Rating', value: '4.9', color: 'text-cyan-400' },
            { label: 'Athletes', value: '1.2k', color: 'text-emerald-400' },
            { label: 'Experience', value: '8yr', color: 'text-indigo-400' }
        ],
        programs: [
            { id: 1, title: 'Powerlifting Pro', duration: '12 Weeks', price: 299, tag: 'Strength' },
            { id: 2, title: 'Metabolic Reset', duration: '8 Weeks', price: 185, tag: 'Fat Loss' },
            { id: 3, title: 'Hypertrophy Max', duration: '10 Weeks', price: 210, tag: 'Muscle' }
        ]
    };

    return (
        /* Background matches the deep navy of your footer */
        <div className="min-h-screen bg-[#0f172a] text-slate-300 font-sans antialiased">

            {/* 1. HERO SECTION */}
            <section className="relative pt-20 pb-16 px-6">
                {/* Subtle radial glow to add depth without looking 'fake' */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    {/* MEDIUM SIZE IMAGE - Refined Border */}
                    <div className="relative w-52 h-52 mx-auto mb-12">
                        <div className="absolute inset-0 bg-cyan-500/20 rounded-[3rem] blur-2xl" />
                        <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=500"
                                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                                alt={trainer.name}
                            />
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter uppercase italic mb-4">
                        {trainer.name}
                    </h1>
                    <p className="text-cyan-400 font-bold uppercase tracking-[0.3em] text-xs mb-8">
                        {trainer.specialization} • {trainer.location}
                    </p>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed font-medium italic">
                        "{trainer.bio}"
                    </p>
                </div>
            </section>

            {/* 2. STATS BAR - Clean Glassmorphism */}
            <section className="max-w-5xl mx-auto px-6 mb-24">
                <div className="grid grid-cols-3 bg-white/[0.02] border border-white/5 backdrop-blur-sm rounded-[2.5rem] py-10">
                    {trainer.stats.map((stat, i) => (
                        <div key={i} className="text-center border-r last:border-r-0 border-white/5">
                            <span className={`block text-3xl md:text-5xl font-black italic tracking-tighter ${stat.color}`}>
                                {stat.value}
                            </span>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mt-3 block">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. PROGRAM FEED */}
            <section className="max-w-6xl mx-auto px-6 mb-24">
                <div className="flex items-center gap-6 mb-16">
                    <h2 className="text-2xl font-black uppercase italic tracking-tight text-white whitespace-nowrap">
                        Active Programs
                    </h2>
                    <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {trainer.programs.map((program) => (
                        <div key={program.id} className="group bg-[#1e293b]/40 border border-white/5 rounded-[2.5rem] p-10 hover:bg-[#1e293b]/80 hover:border-cyan-500/30 transition-all duration-500">
                            <div className="flex justify-between items-start mb-16">
                                <span className="text-[10px] font-black px-4 py-1.5 bg-cyan-500/10 text-cyan-400 rounded-full tracking-widest uppercase">
                                    {program.tag}
                                </span>
                                <span className="text-xs font-bold text-slate-500 tracking-tighter">{program.duration}</span>
                            </div>

                            <h3 className="text-2xl font-black text-white leading-tight uppercase italic mb-8 group-hover:text-cyan-400 transition-colors">
                                {program.title}
                            </h3>

                            <div className="flex items-center justify-between pt-8 border-t border-white/5">
                                <span className="text-3xl font-black text-white">${program.price}</span>
                                <button className="h-12 w-12 bg-white text-slate-900 rounded-2xl flex items-center justify-center hover:bg-cyan-400 transition-all shadow-xl active:scale-90">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. FINAL CTA - Matches Footer Transition */}
            <section className="max-w-5xl mx-auto px-6 pb-24">
                <div className="bg-gradient-to-br from-[#4f46e5] to-[#7c3aed] p-16 rounded-[3rem] shadow-2xl text-center relative overflow-hidden group">
                    {/* Subtle Dot Pattern to match your image */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none"
                        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

                    <h2 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter mb-6 relative z-10 leading-none">
                        Start Your Evolution
                    </h2>
                    <p className="text-white/80 font-medium mb-12 relative z-10 max-w-md mx-auto">
                        Direct access to professional methodology and daily tracking.
                    </p>
                    <button className="bg-white text-[#4f46e5] px-12 py-5 rounded-2xl font-black uppercase tracking-[0.15em] hover:shadow-2xl hover:-translate-y-1 transition-all active:scale-95 relative z-10">
                        Apply for Coaching
                    </button>
                </div>
            </section>

            {/* Footer will follow here in your code */}
        </div>
    );
};

export default TrainerProfilePage;