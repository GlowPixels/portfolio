import "./styles/main.css";

import vk from "./styles/img/icons/vk.svg";
import instagram from "./styles/img/icons/instagram.svg";
import twitter from "./styles/img/icons/twitter.svg";
import linkedIn from "./styles/img/icons/linkedIn.svg";
import gitHub from "./styles/img/icons/gitHub.svg";

import Navbar from "./Components/navbar/Navbar";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";

function App() {
  return (
    <div className="App">
        
      <Navbar />
      <Header />
      
     

    <main className="section">
        <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                      <h2 className="title-2">Location</h2>
                      <p>St. Petersburg, Russia</p>
                    </li>
                    <li className="content-list__item">
                      <h2 className="title-2">Telegram / WhatsApp</h2>
                      <p><a href="tel:+79051234567">+7 (905) 123-45-67</a></p>
                    </li>
                    <li className="content-list__item">
                      <h2 className="title-2">Email</h2>
                      <p><a href="mailto:webdev@protonmail.com">webdev@protonmail.com</a></p>
                    </li>
                </ul>

        </div>
    </main>

    <Footer />
    
    </div>
  );
}

export default App;
