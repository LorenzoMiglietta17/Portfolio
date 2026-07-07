import profilePhoto from '../assets/img/lorenzo.jpg';
import { LuCodeXml, LuSparkles, LuUserRound } from 'react-icons/lu';
import { icons } from '../assets/TechIcons';
import Reveal from '../components/Reveal';

function About({ t, id }) {
  return (
    <section id={id} className="section about-section">
      <Reveal className="section-head" delay={40}>
        <span className="kicker">{t.aboutBadge}</span>
        <h2 className="title-with-icon about-title-with-icon">
          <span className="title-inline-icon" aria-hidden="true">
            <LuUserRound />
          </span>
          {t.aboutTitle}
        </h2>
      </Reveal>

      <div className="about-hero">
        {/* Photo column */}
        <Reveal className="about-photo-col" delay={120}>
          <div className="about-photo-wrap">
            <img src={profilePhoto} alt="Lorenzo Miglietta" />
            <div className="about-photo-meta">
              <strong>Lorenzo Miglietta</strong>
              <span>{t.aboutCardTitle}</span>
            </div>
          </div>
        </Reveal>

        {/* Content column */}
        <div className="about-content-col">
          <Reveal className="about-lead-text" delay={180} as="p">{t.aboutLead}</Reveal>

          <Reveal className="about-bio" delay={240} as="blockquote">{t.aboutText}</Reveal>

          <Reveal className="about-points-grid" delay={300}>
            <article className="about-point-card">
              <h4>{t.aboutPoint1Title}</h4>
              <p>{t.aboutPoint1Text}</p>
            </article>
            <article className="about-point-card">
              <h4>{t.aboutPoint2Title}</h4>
              <p>{t.aboutPoint2Text}</p>
            </article>
            <article className="about-point-card">
              <h4>{t.aboutPoint3Title}</h4>
              <p>{t.aboutPoint3Text}</p>
            </article>
          </Reveal>

          <Reveal className="about-stats-row" delay={360}>
            <div className="about-stat-block">
              <strong>{t.aboutStat1Value}</strong>
              <span>{t.aboutStat1Label}</span>
            </div>
            <div className="about-stat-block">
              <strong>{t.aboutStat2Value}</strong>
              <span>{t.aboutStat2Label}</span>
            </div>
            <div className="about-stat-block">
              <strong>{t.aboutStat3Value}</strong>
              <span>{t.aboutStat3Label}</span>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Tech skills */}
      <Reveal className="about-tech-block tech-section" delay={120}>
        <div className="section-head">
          <span className="kicker">{t.techTitle}</span>
          <h3 className="title-with-icon about-subtitle-with-icon">
            <span className="title-inline-icon" aria-hidden="true">
              <LuCodeXml />
            </span>
            {t.techTitle}
          </h3>
        </div>
        <div className="tech-grid">
          {icons.map((tool) => (
            <span key={tool.name} className="tech-chip">
              <span className="tech-chip-icon">{tool.icon}</span>
              {tool.name}
            </span>
          ))}
        </div>
      </Reveal>

      {/* Manifesto */}
      <Reveal className="about-manifesto" delay={180}>
        <div>
          <span className="kicker">{t.aboutManifestoKicker}</span>
          <h3 className="title-with-icon about-subtitle-with-icon about-manifesto-title">
            <span className="title-inline-icon" aria-hidden="true">
              <LuSparkles />
            </span>
            {t.aboutManifestoTitle}
          </h3>
          <div className="about-manifesto-tags">
            <span className="manifesto-tag">{t.aboutManifestoTag1}</span>
            <span className="manifesto-tag">{t.aboutManifestoTag2}</span>
            <span className="manifesto-tag">{t.aboutManifestoTag3}</span>
          </div>
        </div>
        <p className="about-manifesto-right">{t.aboutManifestoText}</p>
      </Reveal>
    </section>
  );
}

export default About;
