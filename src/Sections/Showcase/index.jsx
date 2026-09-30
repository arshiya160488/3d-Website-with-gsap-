import "./style.css";

export default function Showcase() {
  return (
    <section id="showcase" className="showcase">
      <div className="showcase__header">
        <span className="showcase__number">02</span>

        <div>
          <p className="showcase__eyebrow">SELECTED WORK</p>

          <h2 className="showcase__title">
            GO
            <span>DEEPER.</span>
          </h2>
        </div>
      </div>

      <div className="showcase__grid">
        <article className="showcase__card showcase__card--large">
          <div className="showcase__card-number">01</div>

          <div className="showcase__card-content">
            <span>IMMERSIVE</span>
            <h3>Digital Space</h3>
          </div>

          <div className="showcase__orb"></div>
        </article>

        <article className="showcase__card">
          <div className="showcase__card-number">02</div>

          <div className="showcase__card-content">
            <span>INTERACTION</span>
            <h3>Motion Lab</h3>
          </div>

          <div className="showcase__grid-shape"></div>
        </article>

        <article className="showcase__card">
          <div className="showcase__card-number">03</div>

          <div className="showcase__card-content">
            <span>EXPERIMENTAL</span>
            <h3>Future Form</h3>
          </div>

          <div className="showcase__rings">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </article>
      </div>
    </section>
  );
}