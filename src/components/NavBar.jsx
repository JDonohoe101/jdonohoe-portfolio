// components/Navbar.jsx
export default function Navbar() {
    return (
      <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-sm z-50">
        <div className="font-inter max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-lg font-black text-grey-text">This website is a work in progress!</div>
            <div className="space-x-6 text-sm font-medium text-grey-text">
              <a href="#about" className="hover:text-picton-blue transition-colors">About</a>
              <a href="#projects" className="hover:text-picton-blue transition-colors">Projects</a>
              <a href="#contact" className="hover:text-picton-blue transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
  