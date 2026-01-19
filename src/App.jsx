


import { useState } from 'react';
import { icons } from './assets/TechIcons';
import lorenzoImg from './assets/img/lorenzo.jpg';
import burger1 from './assets/img/burger1.jpg';
import burger2 from './assets/img/burger2.jpg';
import burger3 from './assets/img/burger3.jpg';
import '@google/model-viewer';


import './App.css';


function App() {
  const [activeBurger, setActiveBurger] = useState(null);
  const burgerImages = [burger1, burger2, burger3];
  
  const handleBurgerClick = (idx) => {
    setActiveBurger(idx);
  };
  
  const handleCloseModal = () => {
    setActiveBurger(null);
  };
  
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
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
    <div className="about-content">
    <img src={lorenzoImg} alt="Lorenzo Miglietta" className="about-photo" />
    <p>
    "Ciao, sono Lorenzo Miglietta. Sono un Full Stack Web Developer di 23 anni con una forte dedizione
    all'innovazione. Formatomi nel 2025, ho fatto dell'aggiornamento costante il mio marchio di fabbrica, 
    integrando sempre le ultime tecnologie nei miei flussi di lavoro.
    Non mi limito a scrivere codice: trasformo le tue idee in soluzioni digitali concrete e performanti. 
    Che si tratti di una startup o di un progetto personale, 
    metto le mie competenze al servizio del tuo obiettivo per costruire insieme il progetto dei tuoi sogni."
    </p>
    </div>
    </section>
    <section id="projects" className="section projects-section">
    <h2>Progetti</h2>
    <ul>
    <li>7Burger</li>
    <p className="project-description">Un progetto vetrina realizzato con Laravel che mostra il menu e i servizi di un fast food. Realizzato con Laravel 12, HTML5, CSS3 e JavaScript per un'esperienza utente moderna e responsive.</p>
    <div className="burger-images-future">
    <img
    src={burger1}
    alt="Burger 1"
    className="burger-future"
    onClick={() => handleBurgerClick(1)}
    style={{ cursor: 'pointer' }}
    />
    <img
    src={burger2}
    alt="Burger 2"
    className="burger-future"
    onClick={() => handleBurgerClick(2)}
    style={{ cursor: 'pointer' }}
    />
    <img
    src={burger3}
    alt="Burger 3"
    className="burger-future"
    onClick={() => handleBurgerClick(3)}
    style={{ cursor: 'pointer' }}
    />
    </div>
    <li>Progetto 2</li>
    <li>Progetto 3</li>
    </ul>
    </section>
    <section id="contact" className="section contact-section">
    <h2>Contatti</h2>
    <p>
      Mi piacerebbe sentire da te! Che tu abbia una domanda, una proposta di progetto o semplicemente voglia dire ciao, 
      non esitare a contattarmi. Sono sempre disponibile per discutere di nuove opportunità e collaborazioni.
    </p>
    
    <div className="contact-methods">
      <div className="contact-item">
        <h3>📧 Email</h3>
        <p><a href="mailto:migliolory29@gmail.com">migliolory29@gmail.com</a></p>
      </div>
      
      <div className="contact-item">
        <h3>📱 Telefono</h3>
        <p><a href="tel:+393339794245">+39 333 97 94 245</a></p>
      </div>
    </div>

    {/* Sezione Social */}
    <div className="social-section">
    <h3>Seguimi sui Social</h3>
    <p>Connettiti con me sui principali social network per restare aggiornato sui miei ultimi progetti e articoli.</p>
    <div className="social-icons">
    <a href="https://www.linkedin.com/in/lorenzo-miglietta-developer/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" style={{width: '32px', marginRight: '10px'}} />
    </a>
    <a href="https://github.com/LorenzoMiglietta17" target="_blank" rel="noopener noreferrer" title="GitHub">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" style={{width: '32px', marginRight: '10px'}} />
    </a>
    <a href="https://www.instagram.com/lorenzomiglietta._/" target="_blank" rel="noopener noreferrer" title="Instagram">
    <img src="https://simpleicons.org/icons/instagram.svg" alt="Instagram" style={{width: '32px', marginRight: '10px', background: 'white', borderRadius: '8px'}} />
    </a>
    </div>
    </div>
    </section>
    {/* Sezione a scorrimento con icone */}
    <section className="tech-scroll-section">
    <h2 className="tech-section-title">Competenze</h2>
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
    <p>&copy; {new Date().getFullYear()} Lorenzo Miglietta. Tutti i diritti riservati.</p>
    </footer>
    
    {/* Modal Lightbox */}
    {activeBurger !== null && (
      <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
      <button className="modal-close" onClick={handleCloseModal}>✕</button>
      <img src={burgerImages[activeBurger - 1]} alt="Progetto" className="modal-image" />
      </div>
      </div>
    )}
    </div>
  );
}

export default App;
