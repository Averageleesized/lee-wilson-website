export function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#F9F7F4]/95 backdrop-blur-sm border-b border-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
        <button 
          onClick={() => scrollToSection('hero')}
          className="text-lg font-semibold text-[#1A1A1A] hover:text-[#7A9E7E] transition-colors"
        >
          Lee Wilson
        </button>
        
        <div className="flex items-center gap-8">
          <button
            onClick={() => scrollToSection('work')}
            className="text-[#6B6B6B] hover:text-[#7A9E7E] transition-colors"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection('process')}
            className="text-[#6B6B6B] hover:text-[#7A9E7E] transition-colors"
          >
            How I Work
          </button>
          <button
            onClick={() => scrollToSection('building')}
            className="text-[#6B6B6B] hover:text-[#7A9E7E] transition-colors"
          >
            Building
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-[#6B6B6B] hover:text-[#7A9E7E] transition-colors"
          >
            About
          </button>
        </div>
      </div>
    </nav>
  );
}
