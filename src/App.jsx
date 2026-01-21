


import { useState } from 'react';
import { icons } from './assets/TechIcons';
import lorenzoImg from './assets/img/lorenzo.jpg';
import burger1 from './assets/img/burger1.jpg';
import burger2 from './assets/img/burger2.jpg';
import burger3 from './assets/img/burger3.jpg';
import '@google/model-viewer';
import { useLanguage } from './context/LanguageContext';

import './App.css';


function App() {
  const { language, changeLanguage, t } = useLanguage();
  const [activeBurger, setActiveBurger] = useState(null);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
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

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    setLanguageMenuOpen(false);
  };

  const getLanguageFlag = (lang) => {
    const flags = {
      it: '🇮🇹',
      en: '🇬🇧',
      es: '🇪🇸'
    };
    return flags[lang];
  };

  const getLanguageName = (lang) => {
    const names = {
      it: 'IT',
      en: 'EN',
      es: 'ES'
    };
    return names[lang];
  };

  return (
    <div className="portfolio-container">
    <div className="animated-bg"></div>
    
    {/* Language Toggle Button */}
    <div className="language-selector">
      <button 
        className="language-toggle" 
        onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
      >
        {getLanguageFlag(language)} {getLanguageName(language)}
      </button>
      {languageMenuOpen && (
        <div className="language-menu">
          <button 
            className={`language-option ${language === 'it' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('it')}
          >
            🇮🇹 Italiano
          </button>
          <button 
            className={`language-option ${language === 'en' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('en')}
          >
            En English
          </button>
          <button 
            className={`language-option ${language === 'es' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('es')}
          >
            🇪🇸 Español
          </button>
        </div>
      )}
    </div>
    
    <nav className="navbar">
    <div className="logo logo-3d">
    {t.logoName.split("").map((char, i) => (
      <span key={i} className="logo-letter" style={{ animationDelay: `${i * 0.08 + 0.2}s` }}>{char === " " ? "\u00A0" : char}</span>
    ))}
    </div>
    </nav>
    <section id="home" className="section home-section">
    <h1>{t.homeTitle}</h1>
    <p>{t.homeSubtitle}</p>
    </section>
    <section id="about" className="section about-section">
    <h2>{t.aboutTitle}</h2>
    <div className="about-content">
    <img src={lorenzoImg} alt="Lorenzo Miglietta" className="about-photo" />
    <p>
    {t.aboutText}
    </p>
    </div>
    </section>
    <section id="projects" className="section projects-section">
    <h2>{t.projectsTitle}</h2>
    <ul>
    <li>{t.project1Name}</li>
    <p className="project-description">{t.project1Description}</p>
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
    <li>{t.project2Name}</li>
    <li>{t.project3Name}</li>
    </ul>
    </section>
    <section id="contact" className="section contact-section">
    <h2>{t.contactTitle}</h2>
    <p>
      {t.contactIntro}
    </p>
    
    <div className="contact-methods">
      <div className="contact-item">
        <h3>{t.contactEmail}</h3>
        <p><a href="mailto:migliolory29@gmail.com">migliolory29@gmail.com</a></p>
      </div>
      
      <div className="contact-item">
        <h3>{t.contactPhone}</h3>
        <p><a href="tel:+393339794245">+39 333 97 94 245</a></p>
      </div>
    </div>

    {/* Sezione Social */}
    <div className="social-section">
    <h3>{t.socialTitle}</h3>
    <p>{t.socialDescription}</p>
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
    <h2 className="tech-section-title">{t.techTitle}</h2>
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
    <p>&copy; {new Date().getFullYear()} Lorenzo Miglietta. {t.footerText}</p>
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
