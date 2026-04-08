import { LuLayoutTemplate, LuMonitorSmartphone, LuSparkles } from 'react-icons/lu';

function Services({ t }) {
  const serviceHighlights = [
    {
      title: t.servicesHighlight1Title,
      text: t.servicesHighlight1Text,
    },
    {
      title: t.servicesHighlight2Title,
      text: t.servicesHighlight2Text,
    },
    {
      title: t.servicesHighlight3Title,
      text: t.servicesHighlight3Text,
    },
  ];

  const serviceCards = [
    {
      icon: LuLayoutTemplate,
      badge: t.service1Badge,
      title: t.service1Title,
      text: t.service1Text,
      note: t.service1Note,
    },
    {
      icon: LuMonitorSmartphone,
      badge: t.service2Badge,
      title: t.service2Title,
      text: t.service2Text,
      note: t.service2Note,
    },
    {
      icon: LuSparkles,
      badge: t.service3Badge,
      title: t.service3Title,
      text: t.service3Text,
      note: t.service3Note,
    },
  ];

  return (
    <section className="section services-section services-page">
      <div className="section-heading">
        <span className="section-kicker">{t.servicesKicker}</span>
        <h2>{t.servicesTitle}</h2>
        <p>{t.servicesIntro}</p>
      </div>

      <div className="services-highlight-row">
        {serviceHighlights.map((item) => (
          <article key={item.title} className="services-highlight-card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>

      <div className="services-grid">
        {serviceCards.map((service) => (
          <article key={service.title} className="service-card corporate-service-card">
            <div className="service-card-top">
              <span className="service-icon-badge" aria-hidden="true">
                <service.icon />
              </span>
              <span className="service-pill">{service.badge}</span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <div className="service-card-note">{service.note}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;