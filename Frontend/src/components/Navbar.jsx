import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="sticky top-0 z-40 w-full backdrop-blur-lg bg-white/70 border-b border-white/20 shadow-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Left Side: Logo with Gradient Text */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-2xl">🚀</span>
            <span className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 group-hover:to-indigo-600 transition-all duration-300">
              Job Tracker
            </span>
          </Link>

          {/* Right Side: Cleaned up */}
          <div className="flex space-x-4">
            <Link to="/" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;