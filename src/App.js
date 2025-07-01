import "./styles/main.css";


import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/footer/Footer";
import Home from "./pages/Hom";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Project from "./pages/Project";

function App() {
  return (
    <div className="App">
        
      <Navbar />
      {/* <Home /> */}
      {/* <Projects /> */}
      <Project />
      {/* <Contacts />  */}
     

      <Footer />

    </div>
  );
}

export default App;
