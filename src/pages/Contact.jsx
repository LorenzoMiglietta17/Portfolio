import { useState } from 'react';

function Contact({ t }) {
  const [submitState, setSubmitState] = useState('idle');

  const contactTrustCards = [
    {
      title: t.contactTrust1Title,
      text: t.contactTrust1Text,
    },
    {
      title: t.contactTrust2Title,
      text: t.contactTrust2Text,
    },
    {
      title: t.contactTrust3Title,
      text: t.contactTrust3Text,
    },
  ];

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmitState('submitting');

    try {
      const response = await fetch('https://formsubmit.co/ajax/migliolory29@gmail.com', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setSubmitState('success');
      form.reset();
    } catch {
      setSubmitState('error');
    }
  }

  return (
    <section className="section contact-section contact-page">
      <div className="section-heading">
        <span className="section-kicker">{t.requestFormKicker}</span>
        <h2>{t.contactTitle}</h2>
        <p>{t.contactIntro}</p>
      </div>

      <div className="contact-layout">
        <div className={`contact-form-card ${submitState !== 'idle' ? `contact-form-card--${submitState}` : ''}`}>
          <div className="contact-form-heading">
            <span className="section-kicker">{t.requestFormKicker}</span>
            <h3>{t.requestFormTitle}</h3>
            <p>{t.requestFormIntro}</p>
          </div>

          <form className="request-form" onSubmit={handleSubmit}>
            <input type="hidden" name="_subject" value="Nuova richiesta dal sito Miglio Web" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <label className="form-field">
              <span>{t.formNameLabel}</span>
              <input type="text" name="name" placeholder={t.formNamePlaceholder} required disabled={submitState === 'submitting'} />
            </label>

            <label className="form-field">
              <span>{t.formEmailLabel}</span>
              <input type="email" name="email" placeholder={t.formEmailPlaceholder} required disabled={submitState === 'submitting'} />
            </label>

            <label className="form-field">
              <span>{t.formBusinessLabel}</span>
              <input type="text" name="business" placeholder={t.formBusinessPlaceholder} disabled={submitState === 'submitting'} />
            </label>

            <label className="form-field">
              <span>{t.formMessageLabel}</span>
              <textarea name="message" rows="5" placeholder={t.formMessagePlaceholder} required disabled={submitState === 'submitting'}></textarea>
            </label>

            <button type="submit" className={`hero-cta hero-cta--primary form-submit-btn ${submitState === 'submitting' ? 'form-submit-btn--loading' : ''}`} disabled={submitState === 'submitting'}>
              {submitState === 'submitting' ? t.formSubmitting : t.formSubmit}
            </button>

            {submitState !== 'idle' && (
              <p className={`request-form-status request-form-status--${submitState}`} aria-live="polite">
                {submitState === 'success' ? t.formSuccess : submitState === 'error' ? t.formError : t.formSubmittingHint}
              </p>
            )}
          </form>
        </div>

        <div className="contact-info-column">
          <div className="contact-trust-grid">
            {contactTrustCards.map((item) => (
              <article key={item.title} className="contact-trust-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

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
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" style={{ width: '32px' }} />
              </a>
              <a href="https://github.com/LorenzoMiglietta17" target="_blank" rel="noopener noreferrer" title="GitHub">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" style={{ width: '32px' }} />
              </a>
              <a href="https://www.instagram.com/lorenzomiglietta._/" target="_blank" rel="noopener noreferrer" title="Instagram">
                <img src="https://simpleicons.org/icons/instagram.svg" alt="Instagram" style={{ width: '32px', background: 'white', borderRadius: '8px' }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;