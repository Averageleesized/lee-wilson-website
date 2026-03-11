import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Work', id: 'work' },
  { label: 'How I Work', id: 'process' },
  { label: 'Building', id: 'building' },
  { label: 'About', id: 'about' },
];

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = document.querySelector('header')?.offsetHeight ?? 80;
      const top = element.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-[#F9F7F4]/95 backdrop-blur-sm border-b border-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
        <button
          onClick={() => scrollToSection('hero')}
          className="text-lg font-semibold text-[#1A1A1A] hover:text-[#7A9E7E] transition-colors"
        >
          Lee Wilson
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="text-[#6B6B6B] hover:text-[#7A9E7E] transition-colors"
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#1A1A1A] hover:text-[#7A9E7E] transition-colors p-1"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#E8E8E8] bg-[#F9F7F4]">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {NAV_LINKS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-left text-lg text-[#1A1A1A] hover:text-[#7A9E7E] transition-colors py-3 border-b border-[#E8E8E8] last:border-0"
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
