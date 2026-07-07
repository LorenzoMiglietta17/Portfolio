import { LuLayoutTemplate, LuMonitorSmartphone, LuSparkles } from 'react-icons/lu';

function Services({ t, id }) {
  const serviceHighlights = [
    { title: t.servicesHighlight1Title, text: t.servicesHighlight1Text },
    { title: t.servicesHighlight2Title, text: t.servicesHighlight2Text },
    { title: t.servicesHighlight3Title, text: t.servicesHighlight3Text },
  ];

  const serviceCards = [
    {
      Icon: LuLayoutTemplate,
      badge: t.service1Badge,
      title: t.service1Title,
      text: t.service1Text,
      note: t.service1Note,
    },
    {
      Icon: LuMonitorSmartphone,
      badge: t.service2Badge,
      title: t.service2Title,
      text: t.service2Text,
      note: t.service2Note,
    },
    {
      Icon: LuSparkles,
      badge: t.service3Badge,
      title: t.service3Title,
      text: t.service3Text,
      note: t.service3Note,
    },
  ];

  return (
    <section id={id} className="section services-page">
      <div className="section-head">
        <span className="kicker">{t.servicesKicker}</span>
        <h2>{t.servicesTitle}</h2>
        <p className="section-intro">{t.servicesIntro}</p>
      </div>

      <div className="services-intro-row">
        {serviceHighlights.map((item) => (
          <article key={item.title} className="services-intro-card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>

      <div className="services-grid">
        {serviceCards.map((service) => (
          <article key={service.title} className="service-card-new">
            <div className="service-icon-wrap">
              <service.Icon />
            </div>
            <span className="service-pill-new">{service.badge}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            {service.note && <p className="service-note-new">{service.note}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;