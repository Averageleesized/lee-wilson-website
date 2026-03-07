import { CaseStudyCard } from './case-study-card';

export function WorkSection() {
  const caseStudies = [
    {
      company: 'Snagajob',
      title: 'Fixing onboarding by getting out of the way',
      insight: "Users weren't abandoning video interviews because of bad UX — they didn't have a professional-looking room. Switching to phone changed everything."
    },
    {
      company: 'Fourth Enterprises',
      title: 'Reducing support tickets from 30+ to 2–5 per week',
      insight: 'New customer implementation was painful. Better documentation and a clearer onboarding path fixed what no feature could.'
    },
    {
      company: 'Side Project',
      title: 'Currently building',
      insight: 'Using AI and APIs to solve my own problems. Details coming soon.'
    }
  ];

  return (
    <section id="work" className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-[#7A9E7E] mb-4">
          WORK
        </p>
        
        <h2 className="text-4xl md:text-5xl font-semibold text-[#1A1A1A] mb-16">
          A few things I've built
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} {...study} />
          ))}
        </div>
      </div>
    </section>
  );
}
