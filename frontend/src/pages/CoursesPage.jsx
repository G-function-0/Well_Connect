import { Route, redirect } from "react-router";
import { useNavigate } from "react-router-dom";




const CoursesPage = () => {
    const categories = ['All', 'Yoga', 'Calisthenics', 'Weight Training', 'HIIT', 'Cardio', 'Pilates', 'CrossFit'];
    const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

    const navigate = useNavigate();

    const handleCourseClick = () => {
        navigate("/client/CourseDetail");
        console.log("Course clicked");
    };

    return (
        <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans">
            
            {/* 1. HERO SECTION */}
            <section className="relative bg-[#0f172a] pt-32 pb-24 px-6 overflow-hidden">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full" />
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.3em] uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full">
                        Expert-Led Training
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-none">
                        Elevate Your <span className="text-emerald-500">Performance</span>
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                        Access world-class fitness programs designed to push your limits and transform your physique.
                    </p>
                </div>
            </section>

            {/* 2. FILTER & SEARCH BAR */}
            <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
                <div className="bg-white/90 backdrop-blur-xl p-4 rounded-[2rem] shadow-xl border border-white flex flex-col md:flex-row items-center gap-4">
                    <div className="relative w-full md:w-[40%]">
                        <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Find your next challenge..."
                            className="w-full pl-12 pr-4 py-4 bg-slate-100/50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500 transition-all font-semibold text-sm"
                        />
                    </div>

                    <div className="flex-1 flex gap-2 overflow-x-auto no-scrollbar py-2 w-full">
                        {categories.map((cat, idx) => (
                            <button
                                key={cat}
                                className={`px-6 py-3 rounded-2xl whitespace-nowrap text-[11px] font-black uppercase tracking-wider transition-all
                                    ${idx === 0 ? 'bg-slate-900 text-white shadow-lg' : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-100'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-6 py-16">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* 3. SIDEBAR */}
                    <aside className="w-full lg:w-72 space-y-10">
                        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
                                <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                </svg>
                                Filters
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-sm font-black text-slate-800 uppercase italic">Difficulty</h3>
                            <div className="grid grid-cols-1 gap-2">
                                {levels.map((level, idx) => (
                                    <button
                                        key={level}
                                        className={`text-left px-5 py-3.5 rounded-2xl text-xs font-bold transition-all border-2
                                            ${idx === 1 ? 'border-emerald-500 bg-emerald-50/50 text-emerald-700' : 'border-transparent bg-white text-slate-500 hover:bg-slate-50'}`}
                                    >
                                        {level}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Promo Card */}
                        <div className="bg-emerald-600 rounded-[2rem] p-6 text-white relative overflow-hidden group">
                            <div className="relative z-10">
                                <h4 className="text-xl font-black leading-tight mb-4 uppercase">Custom Diet Plans Coming Soon</h4>
                                <div className="text-[10px] font-bold bg-white/20 inline-block px-3 py-1 rounded-lg uppercase tracking-widest">Stay Tuned</div>
                            </div>
                            <svg className="absolute -bottom-4 -right-4 w-24 h-24 text-white/10 rotate-12" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                        </div>
                    </aside>

                    {/* 4. COURSE GRID */}
                    <div className="flex-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" >
                            {[1, 2, 3, 4].map((item) => (
                                <div key={item} className="group cursor-pointer bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500" onClick={handleCourseClick}>
                                    <div className="h-64 bg-slate-200 relative overflow-hidden">
                                        <img
                                            src={`https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80`}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            alt=""
                                        />
                                        <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl">
                                            <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">$49.99</span>
                                        </div>
                                    </div>

                                    <div className="p-8">
                                        <div className="flex gap-2 mb-4">
                                            <span className="text-[9px] font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-lg uppercase">Strength</span>
                                            <span className="text-[9px] font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-lg uppercase">8 Weeks</span>
                                        </div>
                                        <h3 className="text-2xl font-black text-slate-900 uppercase leading-none mb-4 group-hover:text-emerald-600 transition-colors">Elite Hypertrophy {item}</h3>

                                        <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                                            <div className="flex items-center gap-1">
                                                {[1, 2, 3, 4, 5].map(star => (
                                                    <svg key={star} className="w-3 h-3 text-yellow-500 fill-current" viewBox="0 0 24 24">
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                    </svg>
                                                ))}
                                                <span className="ml-2 text-[10px] font-bold text-slate-400">4.9 (120)</span>
                                            </div>
                                            <svg className="w-5 h-5 text-slate-300 group-hover:text-emerald-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CoursesPage;