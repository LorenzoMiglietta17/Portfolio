


import { useEffect, useState } from 'react';
import burger1 from './assets/img/burger1.jpg';
import burger2 from './assets/img/burger2.jpg';
import burger3 from './assets/img/burger3.jpg';
import siteLogo from './assets/img/logo.jpg';
import { useLanguage } from './context/LanguageContext';
import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import CookieBanner from './components/CookieBanner';

import './App.css';


function RouteScrollController() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


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
    <RouteScrollController />
    <div className="animated-bg"></div>
    
    <nav className="navbar">

    <NavLink to="/" className="brand-mark" aria-label="Miglio Web Dev Innovative Digital Solutions home">
      <img src={siteLogo} alt="Miglio Web Dev Innovative Digital Solutions logo" className="brand-logo" />
    </NavLink>

    <ul className="nav-links">
      <li><NavLink to="/" end>{t.navHome}</NavLink></li>
      <li><NavLink to="/services">{t.servicesTitle}</NavLink></li>
      <li><NavLink to="/projects">{t.projectsTitle}</NavLink></li>
      <li><NavLink to="/contact">{t.contactTitle}</NavLink></li>
      <li><NavLink to="/about">{t.aboutTitle}</NavLink></li>
    </ul>
    
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
            🇬🇧 English
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
    </nav>
    <Routes>
      <Route path="/" element={<Home t={t} />} />
      <Route path="/services" element={<Services t={t} />} />
      <Route path="/projects" element={<Projects t={t} burgerImages={burgerImages} onBurgerClick={handleBurgerClick} />} />
      <Route path="/contact" element={<Contact t={t} />} />
      <Route path="/about" element={<About t={t} />} />
    </Routes>
    <CookieBanner t={t} />
    <footer className="footer">
    <p>&copy; {new Date().getFullYear()} Miglio Web Dev Innovative Digital Solutions. {t.footerText}</p>
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
