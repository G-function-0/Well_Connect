const Home = () => {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50 font-sans">

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-slate-900 text-white pt-20 pb-32">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px]" />

                <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-400 text-sm font-medium mb-8">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" />
                            <polygon points="10 8 16 12 10 16 10 8" />
                        </svg>
                        <span>Over 500+ New Classes Added This Month</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-8 tracking-tight">
                        Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Fitness</span> <br />
                        Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Standard.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
                        Stop searching, start training. Connect with world-class trainers for live
                        sessions and structured programs that actually work.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
                        <button className="bg-emerald-500 hover:bg-emerald-600 text-white border-none px-10 py-6 text-lg rounded-2xl transition-all shadow-lg shadow-emerald-500/25">
                            Start Training Now
                        </button>
                        <button className="border-2 border-slate-700 text-white hover:bg-slate-800 px-10 py-6 text-lg rounded-2xl">
                            Join for Free
                        </button>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="relative -mt-16 z-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/60 border border-slate-100">
                        <div className="text-center group">
                            <div className="w-12 h-12 text-blue-600 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <div className="text-2xl md:text-3xl font-black text-slate-900">10K+</div>
                            <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Active Learners</div>
                        </div>

                        <div className="text-center group">
                            <div className="w-12 h-12 text-emerald-600 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                            </div>
                            <div className="text-2xl md:text-3xl font-black text-slate-900">500+</div>
                            <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Pro Trainers</div>
                        </div>

                        <div className="text-center group">
                            <div className="w-12 h-12 text-orange-500 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <div className="text-2xl md:text-3xl font-black text-slate-900">1000+</div>
                            <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Programs</div>
                        </div>

                        <div className="text-center group">
                            <div className="w-12 h-12 text-yellow-500 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                            </div>
                            <div className="text-2xl md:text-3xl font-black text-slate-900">4.8</div>
                            <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Satisfaction</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Courses */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-end justify-between mb-12">
                        <div className="max-w-xl">
                            <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Top Rated Programs</h2>
                            <div className="h-1.5 w-20 bg-emerald-500 mt-4 rounded-full"></div>
                            <p className="text-slate-600 mt-6 text-lg">
                                Achieve your goals with our most popular courses led by industry experts.
                            </p>
                        </div>
                        <button className="hidden md:block text-emerald-600 font-bold flex items-center gap-2 hover:bg-emerald-50 px-4 py-2 rounded-lg">
                            View All Programs
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div key={item} className="bg-white rounded-3xl shadow-sm hover:-translate-y-2 transition-transform duration-300 overflow-hidden border border-slate-200">
                                <div className="h-48 bg-gradient-to-br from-emerald-400 to-cyan-500"></div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Fitness Program {item}</h3>
                                    <p className="text-slate-600 text-sm mb-4">Transform your body with our comprehensive training program</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-emerald-600 font-bold">$49.99</span>
                                        <span className="text-sm text-slate-500">⭐ 4.8 (120)</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="pb-24 px-6 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-slate-900 rounded-[3rem] overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-500/10 to-transparent pointer-events-none" />

                        <div className="relative py-20 px-8 md:px-20 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10">
                            <div className="max-w-2xl">
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                    Begin your transformation <br /> <span className="text-emerald-400 text-3xl">today, not tomorrow.</span>
                                </h2>
                                <p className="text-slate-400 text-lg">
                                    Join a community of 10,000+ people who have already changed their lives.
                                    No equipment? No problem. We have courses for every level.
                                </p>
                            </div>
                            <div className="shrink-0">
                                <button className="bg-white text-slate-900 hover:bg-slate-100 px-12 py-7 text-xl font-bold rounded-2xl shadow-2xl">
                                    Get Started Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* 
            {/* Footer */}
            {/* <footer className="bg-slate-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="text-2xl font-bold mb-4">FitGuide</div>
                    <p className="text-slate-400 mb-6">Your journey to fitness starts here</p>
                    <div className="flex justify-center gap-6 text-sm text-slate-400">
                        <a href="#">About</a>
                        <a href="#">Courses</a>
                        <a href="#">Contact</a>
                        <a href="#">Privacy</a>
                    </div>
                    <div className="mt-8 text-slate-500 text-sm">
                        © 2025 FitGuide. All rights reserved.
                    </div>
                </div>
            </footer> */}

        </div>
    );
};

export default Home;