import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const menuItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'projects', label: 'My Projects' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden fixed top-4 right-4 z-50 bg-purple-600/90 backdrop-blur-sm text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={toggleMenu} />
      )}

      {/* Mobile Menu Sidebar */}
      <div className={`md:hidden fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-purple-950 to-black z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-purple-500/20">
            <h2 className="text-white text-xl font-bold">Menu</h2>
            <button
              onClick={toggleMenu}
              className="text-white hover:text-purple-300 transition-colors"
              title="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 p-6">
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left text-white hover:text-purple-300 py-4 px-4 rounded-lg hover:bg-white/10 transition-all duration-300 text-lg font-medium"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-purple-500/20">
            <p className="text-gray-400 text-sm text-center">
              Afifa Husna Portfolio
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
