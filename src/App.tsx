import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorEffect from './components/CursorEffect';
import AIChatbot from './components/AIChatbot';
import MobileNav from './components/MobileNav';

function App() {
  return (
    <div className="min-h-screen">
      <CursorEffect />
      <MobileNav />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <AIChatbot />
    </div>
  );
}

export default App;