import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-dark overflow-x-hidden">
      <div className="px-10">
        <Navbar />
      </div>
      <div className="px-10 lg:px-52 xl:px-72">
        <Hero />
        <Education />
        <Experience />
        <Footer />
      </div>
    </div>
  );
}

export default App;
