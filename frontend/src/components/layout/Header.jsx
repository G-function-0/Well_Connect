import React from 'react';
import { FaUserCircle, FaSearch } from "react-icons/fa";
import { Link } from 'react-router';
import { useNavigate } from 'react-router';
import { useState } from 'react';

const Header = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setOpen(!open);
    };

    return (
        /* Updated background to match footer navy and changed border to subtle white/10 */
        <header className="h-16 px-8 flex items-center justify-between bg-[#0f172a] border-b border-white/10 sticky top-0 z-50">
            {/* Left: Logo - Set to white for dark mode visibility */}
            <div className="text-xl font-bold text-white tracking-tight">
                <Link to="/">
                    Fitness<span className="text-cyan-400">Guide</span>
                </Link>
            </div>

            {/* Center: Search - Darkened input to match the theme */}
            <div className="flex-1 max-w-[520px] mx-10 relative">
                <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                    type="text"
                    placeholder="Search courses..."
                    /* Dark background for input with light text */
                    className="w-full py-2 px-10 rounded-lg bg-white/5 border border-white/10 outline-none text-sm text-white placeholder:text-slate-500 focus:border-cyan-500 transition-all"
                />
            </div>

            {/* Right: Navigation - Cleaned up with matching colors */}
            <nav className="flex items-center gap-7">
                <Link to="/courses" className="no-underline text-slate-300 font-medium hover:text-cyan-400 transition-colors">
                    Courses
                </Link>
                <Link to="/dashboard" className="no-underline text-slate-300 font-medium hover:text-cyan-400 transition-colors">
                    Dashboard
                </Link>
                <Link to="/nutrition" className="no-underline text-slate-300 font-medium hover:text-cyan-400 transition-colors">
                    Nutrition
                </Link>

                {/* Profile Section */}
                {/* Profile Section */}
                <div className="relative">
                    <div
                        onClick={toggleDropdown}
                        className="flex items-center gap-1.5 cursor-pointer text-slate-300 hover:text-white transition-colors"
                    >
                        <FaUserCircle size={20} className="text-cyan-400" />
                        <span className="text-sm font-semibold">Sarfaraz Shaikh</span>
                    </div>

                    {/* Dropdown */}
                    {open && (
                        <div className="absolute right-0 mt-3 w-48 bg-slate-900 border border-slate-700 rounded-xl shadow-xl overflow-hidden z-50">
                            <ul className="text-sm text-slate-200">
                                <li
                                    onClick={() => navigate("/profile")}
                                    className="px-4 py-3 hover:bg-slate-800 cursor-pointer"
                                >
                                    Profile
                                </li>

                                <li
                                    onClick={() => navigate("/my-courses")}
                                    className="px-4 py-3 hover:bg-slate-800 cursor-pointer"
                                >
                                    My Courses
                                </li>

                                <li
                                    onClick={() => navigate("/settings")}
                                    className="px-4 py-3 hover:bg-slate-800 cursor-pointer"
                                >
                                    Settings
                                </li>

                                <li className="border-t border-slate-700" />

                                <li
                                    onClick={() => console.log("logout")}
                                    className="px-4 py-3 text-red-400 hover:bg-red-500/10 cursor-pointer"
                                >
                                    Logout
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;