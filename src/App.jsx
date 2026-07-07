


import { useState } from 'react';
import siteLogo from './assets/img/logo.jpg';
import { useLanguage } from './context/LanguageContext';
import { useTheme } from './context/ThemeContext';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import CookieBanner from './components/CookieBanner';

import './portfolio.css';


function App() {
  const { language, changeLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    setLanguageMenuOpen(false);
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const flags = { it: '🇮🇹', en: '🇬🇧', es: '🇪🇸' };
  const names = { it: 'IT', en: 'EN', es: 'ES' };

  return (
    <div className="portfolio-container">
    <nav className="navbar">
      <a href="#home" className="brand-mark" aria-label="Miglio Web home" onClick={closeMobileMenu}>
        <img src={siteLogo} alt="Miglio Web logo" className="brand-logo" />
        <span className="brand-name">Miglio Web</span>
      </a>

      <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <li><a href="#home" onClick={closeMobileMenu}>{t.navHome}</a></li>
        <li><a href="#about" onClick={closeMobileMenu}>{t.aboutTitle}</a></li>
        <li><a href="#services" onClick={closeMobileMenu}>{t.servicesTitle}</a></li>
        <li><a href="#contact" onClick={closeMobileMenu}>{t.contactTitle}</a></li>
      </ul>

      <div className="nav-controls">
        <div className="language-selector">
          <button
            className="language-toggle"
            onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
            aria-label={`Lingua: ${names[language]}`}
            aria-expanded={languageMenuOpen}
          >
            {flags[language]} {names[language]}
          </button>
          {languageMenuOpen && (
            <div className="language-menu" role="menu">
              {['it', 'en', 'es'].map((lang) => (
                <button
                  key={lang}
                  className={language === lang ? 'active' : ''}
                  onClick={() => handleLanguageChange(lang)}
                  role="menuitem"
                >
                  {flags[lang]} {lang === 'it' ? 'Italiano' : lang === 'en' ? 'English' : 'Español'}
                </button>
              ))}
            </div>
          )}
        </div>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Modalità chiara' : 'Modalità scura'}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>

        <button
          className={`hamburger-menu ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
          aria-expanded={mobileMenuOpen}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>

    <Routes>
      <Route path="/" element={<Home t={t} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>

    <CookieBanner t={t} />

    <footer className="site-footer">
      <a href="#home" className="footer-brand">
        <img src={siteLogo} alt="Miglio Web logo" />
        <span className="footer-brand-name">Miglio Web</span>
      </a>
      <p className="footer-copy">&copy; {new Date().getFullYear()} Miglio Web. {t.footerText}</p>
    </footer>
    </div>
  );
}

export default App;

