import { Link } from 'react-router-dom';
import { icons } from '../assets/TechIcons';
import siteLogo from '../assets/img/logo.jpg';

function Home({ t }) {
  const trustItems = [t.heroTrust1, t.heroTrust2, t.heroTrust3];
  const orbitTools = icons.slice(0, 9);
  const valueCards = [
    {
      id: '01',
      title: t.value1Title,
      text: t.value1Text,
    },
    {
      id: '02',
      title: t.value2Title,
      text: t.value2Text,
    },
    {
      id: '03',
      title: t.value3Title,
      text: t.value3Text,
    },
  ];
  const processSteps = [
    {
      step: t.processStep1Label,
      title: t.processStep1Title,
      text: t.processStep1Text,
    },
    {
      step: t.processStep2Label,
      title: t.processStep2Title,
      text: t.processStep2Text,
    },
    {
      step: t.processStep3Label,
      title: t.processStep3Title,
      text: t.processStep3Text,
    },
  ];
  return (
    <>
      <section id="home" className="section home-section">
        <div className="hero-shell hero-shell--impact">
          <span className="hero-badge-large">{t.homeBadge}</span>
          <h1>{t.homeTitle}</h1>
          <p className="hero-subtitle-large">{t.homeSubtitle}</p>

          <div className="hero-stage">
            <div className="hero-stage-glow hero-stage-glow--blue"></div>
            <div className="hero-stage-glow hero-stage-glow--lime"></div>
            <div className="hero-stage-core">
              <img src={siteLogo} alt="Miglio Web logo" className="hero-stage-logo" />
            </div>
            {orbitTools.map((tool, index) => (
              <div key={tool.name} className={`hero-orbit hero-orbit--${index + 1}`}>
                <span className="hero-orbit-icon">{tool.icon}</span>
                <span className="hero-orbit-label">{tool.name}</span>
              </div>
            ))}
          </div>

          <div className="hero-cta-row">
            <Link className="hero-cta hero-cta--primary" to="/contact">{t.homeCtaPrimary}</Link>
            <Link className="hero-cta hero-cta--secondary" to="/projects">{t.homeCtaSecondary}</Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <strong>{t.statDeliveryValue}</strong>
              <span>{t.statDeliveryLabel}</span>
            </div>
            <div className="hero-stat">
              <strong>{t.statStackValue}</strong>
              <span>{t.statStackLabel}</span>
            </div>
            <div className="hero-stat">
              <strong>{t.statSupportValue}</strong>
              <span>{t.statSupportLabel}</span>
            </div>
          </div>
          <div className="hero-trust-row">
            {trustItems.map((item) => (
              <span key={item} className="hero-trust-chip">{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="value" className="section value-section">
        <div className="section-heading">
          <span className="section-kicker">{t.valueKicker}</span>
          <h2>{t.valueTitle}</h2>
          <p>{t.valueIntro}</p>
        </div>
        <div className="value-grid">
          {valueCards.map((card) => (
            <article key={card.id} className="value-card">
              <span className="value-index">{card.id}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="section process-section">
        <div className="section-heading">
          <span className="section-kicker">{t.processKicker}</span>
          <h2>{t.processTitle}</h2>
          <p>{t.processIntro}</p>
        </div>
        <div className="process-timeline">
          {processSteps.map((item) => (
            <article key={item.step} className="process-step-card">
              <span className="process-step-label">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
