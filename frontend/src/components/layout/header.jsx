import { FaUserCircle, FaSearch } from "react-icons/fa";

const Header = () => {
    return (
        <header className="h-16 px-8 flex items-center justify-between bg-white border-b border-gray-200">
            {/* Left: Logo */}
            <div className="text-xl font-bold text-gray-900">FitnessGuide</div>

            {/* Center: Search */}
            <div className="flex-1 max-w-[520px] mx-10 relative">
                <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search courses..."
                    className="w-full py-2.5 px-10 rounded-lg border border-gray-300 outline-none text-sm focus:border-blue-600"
                />
            </div>

            {/* Right: Navigation */}
            <nav className="flex items-center gap-7">
                <a href="/" className="no-underline text-gray-700 font-medium hover:text-blue-600 transition-colors">
                    Courses
                </a>
                <a href="/" className="no-underline text-gray-700 font-medium hover:text-blue-600 transition-colors">
                    Dashboard
                </a>
                <a href="/" className="no-underline text-gray-700 font-medium hover:text-blue-600 transition-colors">
                    Nutrition
                </a>

                <div className="flex items-center gap-1.5 cursor-pointer text-gray-700">
                    <FaUserCircle size={18} />
                    <span>User Name</span>
                </div>
            </nav>
        </header>
    );
};

export default Header;