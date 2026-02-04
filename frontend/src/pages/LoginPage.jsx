import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// --- Sub-component: Next-Gen Input ---
const SmartInput = ({ type, label, placeholder, icon, rightAction }) => {
    const [focused, setFocused] = useState(false);

    return (
        <div className="flex flex-col gap-1.5">
            <label className={`text-[0.85rem] font-bold transition-all duration-200 ${focused ? 'translate-x-1 text-emerald-500' : 'text-slate-500'
                }`}>
                {label}
            </label>
            <div className={`flex items-center px-5 rounded-[1.25rem] border-2 transition-all duration-300 ${focused
                    ? 'border-emerald-500 bg-white shadow-[0_12px_24px_-8px_rgba(16,185,129,0.15)]'
                    : 'border-slate-200 bg-slate-50'
                }`}>
                <div className="mr-4 text-slate-400">
                    {icon}
                </div>
                <input
                    type={type}
                    placeholder={placeholder}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    className="flex-1 py-4.5 bg-transparent outline-none text-base font-medium text-slate-900 placeholder:text-slate-400"
                />
                {rightAction && <div className="ml-2">{rightAction}</div>}
            </div>
        </div>
    );
};

export default function LoginPage() {
    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a0f1a] px-6 font-['Plus_Jakarta_Sans']">

            {/* Mesh Gradient & Floating Orbs */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(at_0%_0%,rgba(16,185,129,0.15)_0px,transparent_50%),radial-gradient(at_100%_100%,rgba(59,130,246,0.15)_0px,transparent_50%)]" />
            <div className="absolute -left-[10%] -top-[10%] z-0 h-[40vw] w-[40vw] rounded-full bg-emerald-500/10 blur-[120px]" />
            <div className="absolute -right-[5%] -bottom-[5%] z-0 h-[30vw] w-[30vw] rounded-full bg-blue-500/10 blur-[100px]" />

            <main className="relative z-10 flex w-full max-w-[1100px] items-center gap-16">

                {/* Left Side: Brand Context (Hidden on small screens) */}
                <div className="hidden flex-1 flex-col gap-4 text-white lg:flex">
                    <div className="flex h-14 w-14 items-center justify-center rounded-[1.25rem] bg-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                        <svg className="w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <h1 className="text-6xl font-black tracking-tighter">
                        Fit<span className="text-emerald-500">Guide</span>
                    </h1>
                    <p className="max-w-[320px] text-xl leading-relaxed text-slate-400">
                        Your personal performance operating system.
                    </p>

                    <div className="mt-8 flex w-fit gap-8 rounded-[1.5rem] border border-white/5 bg-white/[0.03] p-6 backdrop-blur-md">
                        <div className="flex flex-col">
                            <span className="text-2xl font-black text-emerald-500">12k+</span>
                            <span className="text-[0.75rem] tracking-widest text-slate-500 uppercase">Active Athletes</span>
                        </div>
                        <div className="w-px bg-white/10" />
                        <div className="flex flex-col">
                            <span className="text-2xl font-black text-emerald-500">4.9/5</span>
                            <span className="text-[0.75rem] tracking-widest text-slate-500 uppercase">User Rating</span>
                        </div>
                    </div>
                </div>

                {/* Right Side: Login Card */}
                <div className="w-full max-w-[460px] rounded-[2.5rem] bg-white p-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] md:p-14">
                    <header className="mb-10">
                        <h2 className="text-4xl font-black tracking-tight text-slate-900">Welcome Back</h2>
                        <p className="mt-3 text-slate-500">
                            New here? <Link to="/auth/register" className="font-bold text-emerald-500 hover:underline">Start your journey</Link>
                        </p>
                    </header>

                    <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                        <SmartInput
                            label="Email Address"
                            type="email"
                            placeholder="name@energy.com"
                            icon={<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" /></svg>}
                        />

                        <SmartInput
                            label="Password"
                            type="password"
                            placeholder="••••••••"
                            icon={<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>}
                            rightAction={<a href="#" className="text-xs font-bold text-emerald-500 hover:text-emerald-600">Forgot?</a>}
                        />

                        <div className="flex items-center px-2">
                            <label className="flex cursor-pointer items-center gap-3 text-sm font-medium text-slate-500">
                                <input type="checkbox" className="h-4.5 w-4.5 rounded accent-emerald-500" />
                                <span>Remember me</span>
                            </label>
                        </div>

                        <button type="submit" className="group mt-4 flex w-full items-center justify-center gap-3 rounded-[1.25rem] bg-slate-900 py-5 text-lg font-bold text-white shadow-[0_20px_40px_-10px_rgba(15,23,42,0.3)] transition-all hover:bg-slate-800 hover:shadow-none active:scale-95">
                            <span>Enter Dashboard</span>
                            <svg className="w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </form>

                    <div className="mt-10 flex items-center justify-center gap-2 text-[0.65rem] font-extrabold tracking-[0.15em] text-slate-300">
                        <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                        SECURE END-TO-END ENCRYPTION
                    </div>
                </div>
            </main>
        </div>
    );
}