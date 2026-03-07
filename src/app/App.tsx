import { Navigation } from './components/navigation';
import { Hero } from './components/hero';
import { WorkSection } from './components/work-section';
import { ProcessSection } from './components/process-section';
import { BuildingSection } from './components/building-section';
import { AboutSection } from './components/about-section';
import { ContactSection } from './components/contact-section';
import { Footer } from './components/footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <WorkSection />
      <ProcessSection />
      <BuildingSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
