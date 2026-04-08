function Projects({ t, burgerImages, onBurgerClick }) {
  return (
    <section className="section projects-section projects-page">
      <div className="section-heading">
        <span className="section-kicker">{t.projectsKicker}</span>
        <h2>{t.projectsTitle}</h2>
        <p>{t.projectsIntro}</p>
      </div>

      <div className="projects-metrics-row">
        <article className="project-metric-card">
          <strong>{t.projectMetric1Value}</strong>
          <span>{t.projectMetric1Label}</span>
        </article>
        <article className="project-metric-card">
          <strong>{t.projectMetric2Value}</strong>
          <span>{t.projectMetric2Label}</span>
        </article>
        <article className="project-metric-card">
          <strong>{t.projectMetric3Value}</strong>
          <span>{t.projectMetric3Label}</span>
        </article>
      </div>

      <div className="projects-wrapper">
        <div className="project-card">
          <div className="project-header">
            <span className="project-case-kicker">{t.projectCaseKicker}</span>
            <h3>{t.project1Name}</h3>
            <p className="project-description">{t.project1Description}</p>
            <div className="project-results">
              <p>{t.project1Result1}</p>
              <p>{t.project1Result2}</p>
            </div>
            <div className="project-tag-row">
              <span className="project-tag">{t.projectTag1}</span>
              <span className="project-tag">{t.projectTag2}</span>
              <span className="project-tag">{t.projectTag3}</span>
            </div>
          </div>

          <div className="mac-gallery">
            {burgerImages.map((img, idx) => (
              <button
                key={img}
                type="button"
                className="mac-shot"
                style={{ '--shot-index': idx + 1 }}
                onClick={() => onBurgerClick(idx + 1)}
                aria-label={`${t.projectPreviewAction} ${idx + 1}`}
              >
                <div className="mac-window">
                  <div className="mac-toolbar">
                    <span className="mac-dot mac-dot--red"></span>
                    <span className="mac-dot mac-dot--yellow"></span>
                    <span className="mac-dot mac-dot--green"></span>
                    <span className="mac-title">macOS Preview</span>
                  </div>
                  <div className="mac-screen">
                    <img src={img} alt={`${t.projectImageAlt} ${idx + 1}`} className="mac-image" />
                    <div className="mac-screen-overlay">
                      <span className="mac-screen-label">0{idx + 1}</span>
                      <strong>{t.projectPreviewLabel}</strong>
                      <span>{t.projectPreviewAction}</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;