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
          <h4>{t.cookieTitle}</h4>
          <p>{t.cookieText}</p>
          <div className="cookie-actions">
            <button className="cookie-reject" onClick={() => handleConsent('rejected')}>
              {t.cookieReject}
            </button>
            <button className="cookie-accept" onClick={() => handleConsent('accepted')}>
              {t.cookieAccept}
            </button>
          </div>
        </div>
      )}

      {consent && (
        <div style={{ position: 'fixed', bottom: '16px', right: '16px', zIndex: 998 }}>
          <button
            className="cookie-settings-btn"
            type="button"
            style={{ position: 'static', background: 'var(--bg-card)', border: '1px solid var(--border-2)', padding: '8px 14px', borderRadius: 'var(--r-sm)', color: 'var(--text-2)', fontSize: '0.78rem', cursor: 'pointer' }}
            aria-label={t.cookieSettingsOpen}
            onClick={() => setSettingsOpen(!settingsOpen)}
          >
            🍪 {t.cookieSettingsOpen}
          </button>
          {settingsOpen && (
            <div
              style={{
                position: 'absolute',
                bottom: 'calc(100% + 8px)',
                right: 0,
                background: 'var(--bg-card)',
                border: '1px solid var(--border-2)',
                borderRadius: 'var(--r-md)',
                padding: '16px 20px',
                minWidth: '220px',
                boxShadow: '0 16px 40px rgba(0,0,0,0.5)',
              }}
              role="dialog"
              aria-label={t.cookieSettingsTitle}
            >
              <p style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text)', marginBottom: '8px' }}>
                {t.cookieSettingsTitle}
              </p>
              <p className="cookie-settings-info">
                {t.cookieSettingsChoice}{' '}
                <strong style={{ color: 'var(--gold)' }}>
                  {consent === 'accepted' ? t.cookieStatusAccepted : t.cookieStatusRejected}
                </strong>
              </p>
              <button
                className="cookie-close-btn"
                type="button"
                style={{ marginTop: '12px' }}
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
