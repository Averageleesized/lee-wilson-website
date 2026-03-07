export function BuildingSection() {
  const projects = [
    {
      name: 'Project Odin',
      description: 'Learning front-end development from scratch',
      status: 'In progress'
    },
    {
      name: 'Fantasy Tennis Site',
      description: 'A tool for tennis fans',
      status: 'In progress'
    },
    {
      name: 'AI + APIs',
      description: 'Solving my own problems with code',
      status: 'Ongoing'
    }
  ];

  return (
    <section id="building" className="py-24 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-[#7A9E7E] mb-4">
          BUILDING
        </p>
        
        <h2 className="text-4xl md:text-5xl font-semibold text-[#1A1A1A] mb-12">
          What I'm working on
        </h2>
        
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-[#E8E8E8] last:border-b-0"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-1">
                  {project.name}
                </h3>
                <p className="text-[#6B6B6B]">
                  {project.description}
                </p>
              </div>
              
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#7A9E7E] text-white text-sm font-medium whitespace-nowrap self-start sm:self-center">
                {project.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
