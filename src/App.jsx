import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-dark">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
