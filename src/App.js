import "./styles/main.css";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/footer/Footer";
import Home from "./pages/Hom";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Project from "./pages/Project";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes> 
        <Footer />
      </Router>  
      

    </div>
  );
}

export default App;
