const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    <div>
                        <h2 className="text-white text-xl font-bold mb-4">FitnessGuide</h2>
                        <p className="text-sm text-gray-400">
                            Your ultimate destination for fitness and health.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="list-none p-0 m-0">
                            <li className="mb-2 text-sm cursor-pointer hover:text-emerald-400 transition-colors">Browse Courses</li>
                            <li className="mb-2 text-sm cursor-pointer hover:text-emerald-400 transition-colors">About Us</li>
                            <li className="mb-2 text-sm cursor-pointer hover:text-emerald-400 transition-colors">Contact</li>
                            <li className="mb-2 text-sm cursor-pointer hover:text-emerald-400 transition-colors">Privacy Policy</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Categories</h3>
                        <ul className="list-none p-0 m-0">
                            <li className="mb-2 text-sm cursor-pointer hover:text-emerald-400 transition-colors">Yoga</li>
                            <li className="mb-2 text-sm cursor-pointer hover:text-emerald-400 transition-colors">Weight Training</li>
                            <li className="mb-2 text-sm cursor-pointer hover:text-emerald-400 transition-colors">HIIT</li>
                            <li className="mb-2 text-sm cursor-pointer hover:text-emerald-400 transition-colors">Calisthenics</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                        <div className="flex gap-4">
                            <span className="cursor-pointer hover:text-emerald-400 transition-colors">Facebook</span>
                            <span className="cursor-pointer hover:text-emerald-400 transition-colors">Twitter</span>
                            <span className="cursor-pointer hover:text-emerald-400 transition-colors">Instagram</span>
                            <span className="cursor-pointer hover:text-emerald-400 transition-colors">YouTube</span>
                        </div>
                    </div>

                </div>

                <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
                    © 2026 FitnessGuide. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;