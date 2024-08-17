import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Gallery from "./pages/gallery/Gallery";
import Plans from "./pages/plans/Plans";
import Trainers from "./pages/trainers/Trainers";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/notFound/NotFound";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/gallery" Component={Gallery} />
          <Route path="/plans" Component={Plans} />
          <Route path="/trainers" Component={Trainers} />
          <Route path="/contact" Component={Contact} />
          <Route path="*" Component={NotFound} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
