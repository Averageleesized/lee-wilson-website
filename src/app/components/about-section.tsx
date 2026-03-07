export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-[#7A9E7E] mb-4">
          ABOUT
        </p>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6 text-lg leading-relaxed text-[#1A1A1A]">
            <p>
              I've spent my career figuring out what people actually need — not what they say they need, and not what the dashboard says they need. Both matter. Neither is the whole picture.
            </p>
            
            <p>
              I've led teams at Fourth Enterprises, VF Corporation, and Snagajob, and taught Product Management at VCU for two years. I'm also a Certified Scrum Master with a Master's in Product Innovation.
            </p>
            
            <p>
              Outside of work: I grow strawberries in my backyard and turn them into sous vide mezcal infusions. I'm learning Vietnamese to talk to my partner's family. I'm always building something.
            </p>
          </div>
          
          <div className="flex items-center justify-center lg:justify-end">
            <div className="text-[200px] font-bold text-[#F0EEEB] leading-none select-none">
              L
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
