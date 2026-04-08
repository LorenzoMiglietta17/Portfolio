import profilePhoto from '../assets/img/lorenzo.jpg';

function About({ t }) {
  return (
    <section id="about" className="section about-section">
      <h2>{t.aboutTitle}</h2>
      <div className="about-content">
        <aside className="about-profile-card">
          <div className="about-brand-visual">
            <img src={profilePhoto} alt="Lorenzo Miglietta" className="about-brand-logo about-brand-logo--photo" />
          </div>
          <div className="about-profile-meta">
            <span className="about-profile-badge">{t.aboutBadge}</span>
            <strong>Lorenzo Miglietta</strong>
            <span>{t.aboutCardTitle}</span>
          </div>
        </aside>

        <div className="about-card">
          <span className="about-eyebrow">{t.aboutBadge}</span>
          <h3>{t.aboutCardTitle}</h3>
          <p className="about-lead">{t.aboutLead}</p>
          <p>{t.aboutText}</p>

          <div className="about-points">
            <article className="about-point">
              <h4>{t.aboutPoint1Title}</h4>
              <p>{t.aboutPoint1Text}</p>
            </article>
            <article className="about-point">
              <h4>{t.aboutPoint2Title}</h4>
              <p>{t.aboutPoint2Text}</p>
            </article>
            <article className="about-point">
              <h4>{t.aboutPoint3Title}</h4>
              <p>{t.aboutPoint3Text}</p>
            </article>
          </div>

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

          <div className="about-manifesto-card">
            <span className="about-eyebrow">{t.aboutManifestoKicker}</span>
            <h4>{t.aboutManifestoTitle}</h4>
            <p>{t.aboutManifestoText}</p>
            <div className="about-manifesto-tags">
              <span>{t.aboutManifestoTag1}</span>
              <span>{t.aboutManifestoTag2}</span>
              <span>{t.aboutManifestoTag3}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
