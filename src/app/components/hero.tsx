export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = document.querySelector('header')?.offsetHeight ?? 80;
      const top = element.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center px-6 lg:px-12">
      <div className="max-w-7xl mx-auto w-full py-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#1A1A1A] leading-tight mb-6">
            I'm Lee.
            <br />
            I find what's really blocking people — then fix it.
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-[#6B6B6B] font-medium leading-relaxed mb-8">
            Senior Product Manager. Human-centered by instinct, data-driven by practice. Based in Richmond, VA.
          </p>
          
          <button
            onClick={() => scrollToSection('work')}
            className="text-[#7A9E7E] text-lg font-medium hover:underline transition-all inline-flex items-center gap-2"
          >
            View my work
            <span className="inline-block">↓</span>
          </button>
        </div>
      </div>
    </section>
  );
}
