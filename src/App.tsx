import Hero from './components/Hero';
import NavBar from './components/NavBar';
import About from './components/About';
import PractiseAreas from './components/PractiseAreas';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <PractiseAreas />
      <About />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

export default App;
