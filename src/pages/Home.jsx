import { useState } from 'react';
import profilePhoto from '../assets/img/lorenzo.jpg';
import { icons } from '../assets/TechIcons';
import Reveal from '../components/Reveal';
import Marquee from '../components/Marquee';
function Home({ t }) {
  const [openService, setOpenService] = useState(null);
  const [submitState, setSubmitState] = useState('idle');

  const services = [
    { id: 1, num: '01', title: t.service1Title, text: t.service1Text, badge: t.service1Badge },
    { id: 2, num: '02', title: t.service2Title, text: t.service2Text, badge: t.service2Badge },
    { id: 3, num: '03', title: t.service3Title, text: t.service3Text, badge: t.service3Badge },
  ];

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setSubmitState('submitting');
    try {
      const res = await fetch('https://formsubmit.co/ajax/migliolory29@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error();
      setSubmitState('success');
      form.reset();
    } catch {
      setSubmitState('error');
    }
  }

  return (
    <>
      {/* ── Hero ── */}
      <section id="home" className="hero">
        <div className="hero-body">
          <p className="hero-eyebrow">{t.welcomeRole}</p>
          <h1 className="hero-name">
            Lorenzo<br />Miglietta.
          </h1>
          <div className="hero-footer">
            <p className="hero-tagline">{t.welcomeTagline}</p>
            <a href="#contact" className="btn btn--primary">{t.homeCtaPrimary}</a>
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
          </div>
        </div>
      </section>

      {/* ── Skills Marquee ── */}
      <div className="marquee-section" aria-hidden="true">
        <Marquee items={icons} />
      </div>

      {/* ── About ── */}
      <section id="about" className="about-section">
        <Reveal>
          <p className="section-label">{t.aboutBadge}</p>
        </Reveal>
        <div className="about-grid">
          <Reveal delay={80} className="about-photo-col">
            <div className="about-photo-wrap">
              <img src={profilePhoto} alt="Lorenzo Miglietta" />
            </div>
          </Reveal>
          <Reveal delay={180} className="about-content">
            <h2 className="about-headline">{t.aboutTitle}</h2>
            <p className="about-lead">{t.aboutLead}</p>
            <p className="about-bio-quote">{t.aboutText}</p>
            <div className="about-stats">
              <div className="about-stat">
                <strong>{t.aboutStat1Value}</strong>
                <span>{t.aboutStat1Label}</span>
              </div>
              <div className="about-stat">
                <strong>{t.aboutStat2Value}</strong>
                <span>{t.aboutStat2Label}</span>
              </div>
              <div className="about-stat">
                <strong>{t.aboutStat3Value}</strong>
                <span>{t.aboutStat3Label}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="services-section">
        <Reveal>
          <div className="services-head">
            <h2 className="services-headline">{t.servicesTitle}</h2>
            <p className="services-intro">{t.servicesIntro}</p>
          </div>
        </Reveal>
        <div className="services-list">
          {services.map((svc) => (
            <div
              key={svc.id}
              className={`service-row${openService === svc.id ? ' is-open' : ''}`}
              onClick={() => setOpenService(openService === svc.id ? null : svc.id)}
            >
              <div className="service-row-top">
                <span className="service-num">{svc.num}</span>
                <h3 className="service-name">{svc.title}</h3>
                <span className="service-arrow" aria-hidden="true">↗</span>
              </div>
              <div className="service-body">
                <div className="service-body-inner">
                  <p>{svc.text}</p>
                  {svc.badge && <span className="service-pill">{svc.badge}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="contact-section">
        <Reveal>
          <h2 className="contact-display">
            {t.contactHeadline}
          </h2>
        </Reveal>
        <div className="contact-layout">
          <Reveal delay={80} className="contact-info-col">
            <p className="contact-info-lead">{t.contactIntro}</p>
            <div className="contact-methods">
              <a href="mailto:migliolory29@gmail.com" className="contact-method-link">
                <span className="contact-method-icon">✉</span>
                migliolory29@gmail.com
              </a>
              <a href="tel:+393339794245" className="contact-method-link">
                <span className="contact-method-icon">☎</span>
                +39 333 97 94 245
              </a>
            </div>
            <div className="contact-social-row">
              <a href="https://www.linkedin.com/in/lorenzo-miglietta-developer/" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="LinkedIn">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
              </a>
              <a href="https://github.com/LorenzoMiglietta17" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="GitHub">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
              </a>
              <a href="https://www.instagram.com/lorenzomiglietta._/" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="Instagram">
                <img src="https://simpleicons.org/icons/instagram.svg" alt="Instagram" />
              </a>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="hidden" name="_captcha" value="false" />
              <div className="form-row">
                <label className="form-field">
                  <span>{t.formNameLabel}</span>
                  <input type="text" name="name" placeholder={t.formNamePlaceholder} required disabled={submitState === 'submitting'} />
                </label>
                <label className="form-field">
                  <span>{t.formEmailLabel}</span>
                  <input type="email" name="email" placeholder={t.formEmailPlaceholder} required disabled={submitState === 'submitting'} />
                </label>
              </div>
              <label className="form-field">
                <span>{t.formBusinessLabel}</span>
                <input type="text" name="business" placeholder={t.formBusinessPlaceholder} disabled={submitState === 'submitting'} />
              </label>
              <label className="form-field">
                <span>{t.formMessageLabel}</span>
                <textarea name="message" rows="5" placeholder={t.formMessagePlaceholder} required disabled={submitState === 'submitting'} />
              </label>
              <button type="submit" className="btn btn--primary form-submit-btn" disabled={submitState === 'submitting'}>
                {submitState === 'submitting' ? t.formSubmitting : t.formSubmit}
              </button>
              {submitState !== 'idle' && (
                <p className={`form-status form-status--${submitState}`} aria-live="polite">
                  {submitState === 'success' ? t.formSuccess : t.formError}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default Home;

