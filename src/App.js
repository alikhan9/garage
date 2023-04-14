import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Services from "./Component/Services";
import Pricing from "./Component/Pricing";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cars from "./Component/Cars";
import CarDetail from "./Component/CarDetail";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Pricing />
          <Contact />
          <Footer />
        </>}
        />
        <Route path="/vehicules" element={<>
          <Navbar />
          <Cars itemsPerPage={6} />
          <Footer />
        </>}
        />
        <Route path="/contact" element={<>
          <Navbar />
          <Contact />
          <Footer />
        </>}
        />
        <Route path="/voiture" element={<>
          <Navbar />
          <CarDetail />
          <Footer />
        </>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
