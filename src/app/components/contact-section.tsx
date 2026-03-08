export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-semibold text-[#1A1A1A] mb-12">
          Let's work together.
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
          <a
            href="https://www.linkedin.com/in/leewilson9/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#7A9E7E] text-lg font-medium hover:underline inline-flex items-center gap-2"
          >
            LinkedIn
            <span className="inline-block">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
