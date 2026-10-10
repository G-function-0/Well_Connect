import { Link } from "react-router";

export default function CoursePlayerPage() {
    const meetUrl = "https://meet.google.com/aiu-tihx-iow";

    const handleJoinLive = () => {
        window.open(meetUrl, "_blank", "noopener,noreferrer");
    };

    const modules = [
        { title: 'Introduction to Fitness Training', duration: '15', completed: true, active: true },
        { title: 'Strength Training Fundamentals', duration: '30', completed: true, active: false },
        { title: 'Cardiovascular Training', duration: '25', completed: false, active: false },
        { title: 'Nutrition Basics', duration: '20', completed: false, active: false },
        { title: 'Recovery and Rest', duration: '30', completed: false, active: false }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
            <div className="flex flex-1 flex-col lg:flex-row h-screen overflow-hidden">

                {/* Sidebar */}
                <aside className="w-full lg:w-80 bg-white border-r border-slate-200 flex flex-col h-full shadow-sm">
                    {/* Sidebar Header */}
                    <div className="p-4 border-b border-slate-100">
                        <Link
                            to="/my-courses"
                            className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-emerald-600 transition-colors mb-4 group"
                        >
                            <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Courses
                        </Link>

                        <h2 className="font-extrabold text-lg text-slate-900 leading-tight">
                            Complete Fitness Masterclass
                        </h2>

                        {/* Progress Bar */}
                        <div className="mt-4">
                            <div className="w-full bg-slate-100 rounded-full h-2">
                                <div className="bg-emerald-500 h-2 rounded-full w-[40%] transition-all duration-500" />
                            </div>
                            <p className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-wider">
                                40% Complete
                            </p>
                        </div>
                    </div>

                    {/* Module List */}
                    <div className="flex-1 overflow-y-auto p-3 space-y-1">
                        <h3 className="px-3 py-2 text-xs font-black text-slate-400 uppercase tracking-[0.1em]">
                            Course Content
                        </h3>
                        {modules.map((module, index) => (
                            <button
                                key={index}
                                className={`w-full flex flex-col gap-1 p-3 rounded-xl transition-all text-left group ${module.active
                                        ? 'bg-emerald-50 text-emerald-900 shadow-sm border border-emerald-100'
                                        : 'hover:bg-slate-50 text-slate-700'
                                    }`}
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1">
                                            {module.completed ? (
                                                <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            ) : (
                                                <div className={`w-5 h-5 rounded-full border-2 ${module.active ? 'border-emerald-300' : 'border-slate-300'}`} />
                                            )}
                                        </div>
                                        <span className={`text-sm font-bold leading-snug ${module.active ? 'text-emerald-900' : 'text-slate-700'}`}>
                                            {module.title}
                                        </span>
                                    </div>
                                    <span className="text-[10px] font-bold opacity-50 whitespace-nowrap pt-1">
                                        {module.duration} MIN
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>
                </aside>

                {/* Main Player Area */}
                <main className="flex-1 flex flex-col bg-slate-50 overflow-y-auto">
                    {/* Video Container */}
                    <div className="bg-[#0f172a] w-full flex items-center justify-center shadow-2xl">
                        <div className="relative w-full max-w-6xl aspect-video bg-black group overflow-hidden">
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
                                <button
                                    onClick={handleJoinLive}
                                    className="group flex flex-col items-center gap-4 transition-transform hover:scale-110 active:scale-95"
                                >
                                    <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center shadow-[0_0_0_15px_rgba(16,185,129,0.1)] group-hover:shadow-[0_0_0_20px_rgba(16,185,129,0.2)] transition-all">
                                        <svg className="w-10 h-10 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                    <p className="text-xl font-black uppercase tracking-widest italic">Join Live Session</p>
                                </button>
                                <p className="absolute bottom-8 text-white/40 text-sm font-medium">Google Meet Session: aiu-tihx-iow</p>
                            </div>
                            {/* Optional Backdrop Image */}
                            <img
                                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80"
                                className="absolute inset-0 w-full h-full object-cover opacity-20"
                                alt="Background"
                            />
                        </div>
                    </div>

                    {/* Lesson Details */}
                    <div className="p-8 max-w-5xl">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="flex-1">
                                <h2 className="text-3xl font-black text-slate-900 mb-3 italic tracking-tight">
                                    Introduction to Fitness Training
                                </h2>
                                <p className="text-slate-600 leading-relaxed font-medium max-w-3xl">
                                    Learn the fundamental concepts of fitness training including proper form,
                                    safety guidelines, and how to structure an effective workout routine for maximum results.
                                </p>
                            </div>

                            <button className="flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white rounded-2xl font-black text-sm uppercase tracking-wider shadow-lg shadow-emerald-500/30 transition-all active:scale-95">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                </svg>
                                Mark Complete
                            </button>
                        </div>

                        <hr className="my-8 border-slate-200" />

                        {/* Resources Section */}
                        <div className="space-y-4">
                            <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Lesson Resources</h4>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    { label: 'Workout Guide PDF', icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4' },
                                    { label: 'Exercise Chart', icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' }
                                ].map((res) => (
                                    <a
                                        key={res.label}
                                        href="#"
                                        className="flex items-center gap-3 px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-700 font-bold text-sm hover:border-emerald-500 hover:text-emerald-600 transition-all shadow-sm"
                                    >
                                        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={res.icon} />
                                        </svg>
                                        {res.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}