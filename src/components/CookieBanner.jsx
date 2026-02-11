import { useEffect, useState } from 'react';

function CookieBanner({ t }) {
  const [visible, setVisible] = useState(false);
  const [consent, setConsent] = useState(null);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('cookieConsent');
    if (!stored) {
      setVisible(true);
    } else {
      setConsent(stored);
    }
  }, []);

  const handleConsent = (value) => {
    localStorage.setItem('cookieConsent', value);
    setConsent(value);
    setVisible(false);
    setSettingsOpen(false);
  };

  return (
    <>
      {visible && (
        <div className="cookie-banner" role="dialog" aria-live="polite" aria-label={t.cookieTitle}>
          <div className="cookie-content">
            <div className="cookie-banner-icon" aria-hidden="true">
              <svg className="cookie-icon" viewBox="0 0 64 64">
                <circle className="cookie-icon__base" cx="32" cy="32" r="26" />
                <circle className="cookie-icon__chip" cx="22" cy="24" r="4" />
                <circle className="cookie-icon__chip" cx="40" cy="22" r="3" />
                <circle className="cookie-icon__chip" cx="42" cy="38" r="4" />
                <circle className="cookie-icon__chip" cx="26" cy="40" r="3" />
              </svg>
            </div>
            <div className="cookie-content-text">
              <p className="cookie-title">{t.cookieTitle}</p>
              <p className="cookie-text">{t.cookieText}</p>
            </div>
          </div>
          <div className="cookie-actions">
            <button className="cookie-btn cookie-btn--outline" onClick={() => handleConsent('rejected')}>
              {t.cookieReject}
            </button>
            <button className="cookie-btn" onClick={() => handleConsent('accepted')}>
              {t.cookieAccept}
            </button>
          </div>
        </div>
      )}

      {consent && (
        <div className="cookie-fab">
          <button
            className="cookie-fab-btn"
            type="button"
            aria-label={t.cookieSettingsOpen}
            onClick={() => setSettingsOpen(!settingsOpen)}
          >
            <svg className="cookie-gear" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19.14 12.94c.04-.31.06-.63.06-.94s-.02-.63-.06-.94l2.03-1.58a.5.5 0 0 0 .12-.64l-1.92-3.32a.5.5 0 0 0-.6-.22l-2.39.96a7.3 7.3 0 0 0-1.62-.94l-.36-2.54a.5.5 0 0 0-.5-.42h-3.84a.5.5 0 0 0-.5.42l-.36 2.54a7.3 7.3 0 0 0-1.62.94l-2.39-.96a.5.5 0 0 0-.6.22L2.71 8.84a.5.5 0 0 0 .12.64l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58a.5.5 0 0 0-.12.64l1.92 3.32a.5.5 0 0 0 .6.22l2.39-.96c.5.38 1.04.7 1.62.94l.36 2.54a.5.5 0 0 0 .5.42h3.84a.5.5 0 0 0 .5-.42l.36-2.54c.58-.24 1.12-.56 1.62-.94l2.39.96a.5.5 0 0 0 .6-.22l1.92-3.32a.5.5 0 0 0-.12-.64l-2.03-1.58ZM12 15.5A3.5 3.5 0 1 1 12 8a3.5 3.5 0 0 1 0 7.5Z" />
            </svg>
          </button>
          {settingsOpen && (
            <div className="cookie-settings" role="dialog" aria-label={t.cookieSettingsTitle}>
              <p className="cookie-settings-title">{t.cookieSettingsTitle}</p>
              <p className="cookie-settings-row">
                {t.cookieSettingsChoice}{' '}
                <strong>{consent === 'accepted' ? t.cookieStatusAccepted : t.cookieStatusRejected}</strong>
              </p>
              <button
                className="cookie-btn cookie-btn--outline cookie-settings-close"
                type="button"
                onClick={() => setSettingsOpen(false)}
              >
                {t.cookieClose}
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default CookieBanner;
