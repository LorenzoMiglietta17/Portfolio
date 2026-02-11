import lorenzoImg from '../assets/img/lorenzo.jpg';

function About({ t }) {
  return (
    <section id="about" className="section about-section">
      <h2>{t.aboutTitle}</h2>
      <div className="about-content">
        <img src={lorenzoImg} alt="Lorenzo Miglietta" className="about-photo" />
        <div className="about-card">
          <h3>{t.aboutCardTitle}</h3>
          <p>{t.aboutText}</p>
        </div>
      </div>
    </section>
  );
}

export default About;
