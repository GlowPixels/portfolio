import "./styles/main.css";

import sun from "./styles/img/icons/sun.svg";
import moon from "./styles/img/icons/moon.svg";

import vk from "./styles/img/icons/vk.svg";
import instagram from "./styles/img/icons/instagram.svg";
import twitter from "./styles/img/icons/twitter.svg";
import linkedIn from "./styles/img/icons/linkedIn.svg";
import gitHub from "./styles/img/icons/gitHub.svg";

function App() {
  return (
    <div className="App">
     <nav className="nav">
        <div className="container">
            <div className="nav-row">
                <a href="./index.html" className="logo"><strong>Freelancer</strong> portfolio</a>

                <button className="dark-mode-btn">
                    <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
                    <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
                </button>

                <ul className="nav-list">
                    <li className="nav-list__item"><a href="./index.html" className="nav-list__link">Home</a></li>
                    <li className="nav-list__item"><a href="./projects.html" className="nav-list__link">Projects</a></li>
                    <li className="nav-list__item"><a href="./contacts.html" className="nav-list__link nav-list__link--active">Contacts</a></li>
                </ul>
            </div>
        </div>
     </nav>

    <header class="header">
        <div class="header__wrapper">
            <h1 class="header__title">
                <strong>Hi, my name is <em>Anastasia</em></strong><br />
                a frontend developer
            </h1>
            <div class="header__text">
                <p>with passion for learning and creating.</p>
            </div>
            <a href="#!" class="btn">Download CV</a>
        </div>
    </header>

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

    <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="#!"><img src={vk} alt="Link" /></a></li>
                    <li className="social__item"><a href="#!"><img src={instagram} alt="Link" /></a></li>
                    <li className="social__item"><a href="#!"><img src={twitter} alt="Link" /></a></li>
                    <li className="social__item"><a href="#!"><img src={gitHub} alt="Link" /></a></li>
                    <li className="social__item"><a href="#!"><img src={linkedIn} alt="Link" /></a></li>
                </ul>
                <div className="copyright">
                    <p>© 2022 frontend-dev.com</p>
                </div>
            </div>
        </div>
    </footer> 
    </div>
  );
}

export default App;
