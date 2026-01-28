import React, { useState } from 'react';
import { FaCloudUploadAlt, FaDumbbell, FaClock, FaCalendarAlt, FaTag } from 'react-icons/fa';

const AddProgramPage = () => {
    return (
        <div className="min-h-screen bg-[#0f172a] text-slate-300 py-12 px-6">
            <div className="max-w-4xl mx-auto">

                {/* Header Section */}
                <div className="mb-10 border-l-4 border-cyan-500 pl-6">
                    <h1 className="text-4xl font-black text-white italic uppercase tracking-tighter">
                        Create <span className="text-cyan-400">New Program</span>
                    </h1>
                    <p className="text-slate-500 text-sm mt-1 font-medium uppercase tracking-widest">
                        Define elite curriculums for your athletes
                    </p>
                </div>

                <form className="space-y-8">
                    {/* 1. MEDIA UPLOAD SECTION */}
                    <div className="bg-[#1e293b]/40 border-2 border-dashed border-white/10 rounded-[2rem] p-12 text-center group hover:border-cyan-500/50 transition-all cursor-pointer">
                        <FaCloudUploadAlt className="mx-auto text-5xl text-slate-600 group-hover:text-cyan-400 transition-colors mb-4" />
                        <h3 className="text-white font-bold uppercase italic tracking-tight">Upload Program Cover</h3>
                        <p className="text-xs text-slate-500 mt-2">Drag and drop or click to browse (16:9 recommended)</p>
                    </div>

                    {/* 2. BASIC INFO SECTION */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-2">Program Title</label>
                            <input
                                type="text"
                                placeholder="e.g. Hypertrophy Mastery 4.0"
                                className="bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/5 transition-all"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-2">Category</label>
                            <select className="bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-cyan-500/50 appearance-none cursor-pointer">
                                <option value="gym">Gym / Strength</option>
                                <option value="yoga">Yoga / Mobility</option>
                                <option value="zumba">Zumba / Dance</option>
                                <option value="stretching">Stretching / Recovery</option>
                            </select>
                        </div>
                    </div>

                    {/* 3. DESCRIPTION */}
                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-2">Description</label>
                        <textarea
                            rows="4"
                            placeholder="Describe the physiological goals and training methodology..."
                            className="bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-cyan-500/50 transition-all resize-none"
                        ></textarea>
                    </div>

                    {/* 4. TECHNICAL METRICS GRID */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <MetricInput label="Price ($)" placeholder="299" icon={<FaTag />} />
                        <MetricInput label="Level" placeholder="Elite" icon={<FaDumbbell />} />
                        <MetricInput label="Total Weeks" placeholder="12" icon={<FaCalendarAlt />} />
                        <MetricInput label="Duration (Min)" placeholder="60" icon={<FaClock />} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-2">Sessions Per Week</label>
                            <input
                                type="number"
                                placeholder="5"
                                className="bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-cyan-500/50 transition-all"
                            />
                        </div>

                        {/* SUBMIT BUTTON */}
                        <div className="flex items-end">
                            <button
                                type="submit"
                                className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-black uppercase tracking-widest italic py-4 rounded-2xl shadow-lg shadow-cyan-500/20 active:scale-[0.98] transition-all"
                            >
                                Publish Program
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

// Helper Component for the small metric inputs
const MetricInput = ({ label, placeholder, icon }) => (
    <div className="flex flex-col gap-2">
        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-2">{label}</label>
        <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-500/50 text-xs">
                {icon}
            </div>
            <input
                type="text"
                placeholder={placeholder}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-cyan-500/50 transition-all text-sm"
            />
        </div>
    </div>
);

export default AddProgramPage;