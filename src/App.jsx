


import { useState } from 'react';
import { icons } from './assets/TechIcons';
import lorenzoImg from './assets/img/lorenzo.jpg';
import burger1 from './assets/img/burger1.jpg';
import burger2 from './assets/img/burger2.jpg';

import './App.css';


function App() {
  const [activeBurger, setActiveBurger] = useState(null);
  const handleBurgerClick = (idx) => {
    setActiveBurger(activeBurger === idx ? null : idx);
  };
  return (
    <div className="portfolio-container">
      <div className="animated-bg"></div>
      <nav className="navbar">
        <div className="logo logo-3d">
          {"Lorenzo Miglietta".split("").map((char, i) => (
            <span key={i} className="logo-letter" style={{ animationDelay: `${i * 0.08 + 0.2}s` }}>{char === " " ? "\u00A0" : char}</span>
          ))}
        </div>
      </nav>
      <section id="home" className="section home-section">
        <h1>Benvenuto nel mio Portfolio</h1>
        <p>Sviluppatore Web Full Stack Certificato | Web Designer</p>
      </section>
      <section id="about" className="section about-section">
        <h2>Chi sono</h2>
        <img src={lorenzoImg} alt="Lorenzo Miglietta" className="about-photo" />
        <p>Mi chiamo Lorenzo Miglietta ho studiato come web developer nel 2025 , mi aggiorno sempre sulle nuove tecnologie 
          sono un sviluppatore web full stack,un appassionato di tecnologia e di sviluppo. Posso creare il progetto dei tuoi sogni 
          grazie alle mie abilità e competenze.</p>
      </section>
      <section id="projects" className="section projects-section">
        <h2>Progetti</h2>
        <ul>
          <li>7Burger</li>
          <div className="burger-images-future">
            <img
              src={burger1}
              alt="Burger 1"
              className={`burger-future${activeBurger === 1 ? ' burger-active' : ''}`}
              onClick={() => handleBurgerClick(1)}
              style={{ cursor: 'pointer' }}
            />
            <img
              src={burger2}
              alt="Burger 2"
              className={`burger-future${activeBurger === 2 ? ' burger-active' : ''}`}
              onClick={() => handleBurgerClick(2)}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <li>Progetto 2</li>
          <li>Progetto 3</li>
        </ul>
      </section>
      <section id="contact" className="section contact-section">
        <h2>Contatti</h2>
        <p>Email: migliolory29@gmail.com</p>
        <p>Telefono: +39 333 97 94 245</p>
      </section>
      {/* Sezione a scorrimento con icone */}
      <section className="tech-scroll-section">
        <div className="tech-scroll-wrapper">
          <div className="tech-scroll">
            {icons.concat(icons).map((icon, i) => (
              <div className="tech-icon" key={i} title={icon.name}>
                {icon.icon}
                <span className="tech-label">{icon.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Il Mio Portfolio. Tutti i diritti riservati.</p>
      </footer>
    </div>
  );
}

export default App;
