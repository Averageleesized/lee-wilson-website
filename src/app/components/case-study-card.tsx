interface CaseStudyCardProps {
  company: string;
  title: string;
  insight: string;
}

export function CaseStudyCard({ company, title, insight }: CaseStudyCardProps) {
  return (
    <div className="bg-white border border-[#E8E8E8] rounded-lg p-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
      <p className="text-sm text-[#6B6B6B] uppercase tracking-wide mb-2">
        {company}
      </p>
      
      <h3 className="text-2xl font-semibold text-[#1A1A1A] mb-4">
        {title}
      </h3>
      
      <p className="text-lg italic text-[#6B6B6B] leading-relaxed mb-6">
        {insight}
      </p>
      
      <a
        href="#"
        className="text-[#7A9E7E] font-medium inline-flex items-center gap-2 hover:underline"
      >
        Read case study
        <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
      </a>
    </div>
  );
}
