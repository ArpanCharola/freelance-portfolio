import Hero from '../components/Hero';
import Services from '../components/Services';
import FeaturedWork from '../components/FeaturedWork';
import HowIWork from '../components/HowIWork';
import About from '../components/About';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="animate-fade-in">
      <Hero />
      <Services />
      <FeaturedWork />
      <HowIWork />
      <About />
      <Contact />
    </div>
  );
}
