import { useState } from 'react';

function Contact({ t, id }) {
  const [submitState, setSubmitState] = useState('idle');

  const contactTrustCards = [
    { title: t.contactTrust1Title, text: t.contactTrust1Text },
    { title: t.contactTrust2Title, text: t.contactTrust2Text },
    { title: t.contactTrust3Title, text: t.contactTrust3Text },
  ];

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setSubmitState('submitting');

    try {
      const response = await fetch('https://formsubmit.co/ajax/infomiglioweb@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });
      if (!response.ok) throw new Error('Request failed');
      setSubmitState('success');
      form.reset();
    } catch {
      setSubmitState('error');
    }
  }

  return (
    <section id={id} className="section contact-page">
      <div className="section-head">
        <span className="kicker">{t.requestFormKicker}</span>
        <h2>{t.contactTitle}</h2>
        <p className="section-intro">{t.contactIntro}</p>
      </div>

      <div className="contact-layout">
        {/* Form */}
        <div className="contact-form-card">
          <div className="contact-form-head">
            <span className="kicker">{t.requestFormKicker}</span>
            <h3>{t.requestFormTitle}</h3>
            <p style={{ marginTop: '8px', fontSize: '0.9rem', color: 'var(--text-2)' }}>
              {t.requestFormIntro}
            </p>
          </div>

          <form className="request-form" onSubmit={handleSubmit}>
            <input type="hidden" name="_subject" value="Nuova richiesta dal sito Miglio Web" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <label className="form-field">
              <span>{t.formNameLabel}</span>
              <input
                type="text"
                name="name"
                placeholder={t.formNamePlaceholder}
                required
                disabled={submitState === 'submitting'}
              />
            </label>

            <label className="form-field">
              <span>{t.formEmailLabel}</span>
              <input
                type="email"
                name="email"
                placeholder={t.formEmailPlaceholder}
                required
                disabled={submitState === 'submitting'}
              />
            </label>

            <label className="form-field">
              <span>{t.formBusinessLabel}</span>
              <input
                type="text"
                name="business"
                placeholder={t.formBusinessPlaceholder}
                disabled={submitState === 'submitting'}
              />
            </label>

            <label className="form-field">
              <span>{t.formMessageLabel}</span>
              <textarea
                name="message"
                rows="5"
                placeholder={t.formMessagePlaceholder}
                required
                disabled={submitState === 'submitting'}
              />
            </label>

            <button
              type="submit"
              className={`btn btn--primary form-submit-btn${submitState === 'submitting' ? ' form-submit-btn--loading' : ''}`}
              disabled={submitState === 'submitting'}
            >
              {submitState === 'submitting' ? t.formSubmitting : t.formSubmit}
            </button>

            {submitState !== 'idle' && (
              <p
                className={`request-form-status request-form-status--${submitState}`}
                aria-live="polite"
              >
                {submitState === 'success'
                  ? t.formSuccess
                  : submitState === 'error'
                  ? t.formError
                  : t.formSubmittingHint}
              </p>
            )}
          </form>
        </div>

        {/* Info column */}
        <div className="contact-info-col">
          <div className="contact-trust-cards">
            {contactTrustCards.map((item) => (
              <article key={item.title} className="contact-trust-card-new">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="contact-methods-new">
            <a href="mailto:infomiglioweb@gmail.com" className="contact-method-item">
              <span className="contact-method-icon">📧</span>
              <div className="contact-method-text">
                <strong>Email</strong>
                <span>infomiglioweb@gmail.com</span>
              </div>
            </a>
            <a href="tel:+393339794245" className="contact-method-item">
              <span className="contact-method-icon">📱</span>
              <div className="contact-method-text">
                <strong>Telefono</strong>
                <span>+39 333 97 94 245</span>
              </div>
            </a>
          </div>

          <div className="social-row">
            <h3>{t.socialTitle}</h3>
            <div className="social-icons-row">
              <a
                href="https://www.linkedin.com/in/lorenzo-miglietta-developer/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
                title="LinkedIn"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                  alt="LinkedIn"
                />
              </a>
              <a
                href="https://github.com/LorenzoMiglietta17"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
                title="GitHub"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="GitHub"
                />
              </a>
              <a
                href="https://www.instagram.com/lorenzomiglietta._/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
                title="Instagram"
              >
                <img
                  src="https://simpleicons.org/icons/instagram.svg"
                  alt="Instagram"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
