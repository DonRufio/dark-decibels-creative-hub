import NavBar from '../components/NavBar';
import HeroCarousel from '../components/HeroCarousel';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <HeroCarousel />
      <Services />
      <Portfolio />
      <Testimonials />
      <ContactSection />
    </div>
  );
};

export default Index;