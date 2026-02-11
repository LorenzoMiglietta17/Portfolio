import { icons } from '../assets/TechIcons';

function Home({ t, burgerImages, onBurgerClick }) {
  return (
    <>
      <section id="home" className="section home-section">
        <div className="home-name logo logo-3d">
          {t.logoName.split("").map((char, i) => (
            <span
              key={i}
              className={`logo-letter${char === " " ? " logo-break" : ""}`}
              style={{ animationDelay: `${i * 0.08 + 0.2}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
        <h1>{t.homeTitle}</h1>
        <p>{t.homeSubtitle}</p>
      </section>

      <section id="how-it-works" className="section how-section">
        <h2><span className="how-title-badge">{t.howTitle}</span></h2>
        <div className="how-list">
          <div className="how-item">
            <h3>{t.howPoint1Title}</h3>
            <p>{t.howPoint1Text}</p>
          </div>
          <div className="how-item">
            <h3>{t.howPoint2Title}</h3>
            <p>{t.howPoint2Text}</p>
          </div>
          <div className="how-item">
            <h3>{t.howPoint3Title}</h3>
            <p>{t.howPoint3Text}</p>
          </div>
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <h2>{t.projectsTitle}</h2>
        <div className="projects-wrapper">
          <div className="project-card">
            <div className="project-header">
              <h3>{t.project1Name}</h3>
              <p className="project-description">{t.project1Description}</p>
            </div>

            <div className="mac-gallery">
              {burgerImages.map((img, idx) => (
                <button
                  key={img}
                  type="button"
                  className="mac-shot"
                  onClick={() => onBurgerClick(idx + 1)}
                  aria-label={`Apri immagine progetto ${idx + 1}`}
                >
                  <div className="mac-window">
                    <div className="mac-toolbar">
                      <span className="mac-dot mac-dot--red"></span>
                      <span className="mac-dot mac-dot--yellow"></span>
                      <span className="mac-dot mac-dot--green"></span>
                      <span className="mac-title">macOS Preview</span>
                    </div>
                    <div className="mac-screen">
                      <img src={img} alt={`Burger ${idx + 1}`} className="mac-image" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <h2>{t.contactTitle}</h2>
        <p>{t.contactIntro}</p>

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
    </>
  );
}

export default Home;
