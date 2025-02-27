import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-dark">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
