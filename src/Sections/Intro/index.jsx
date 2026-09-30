import "./style.css";

export default function Intro() {
  return (
    <section id="intro" className="intro">
      <div className="intro__wrapper">
        <div className="intro__number">
          <span>01</span>
        </div>

        <div className="intro__content">
          <p className="intro__eyebrow">
            THE EXPERIENCE
          </p>

          <h2 className="intro__title">
            DESIGN
            <span>IN MOTION.</span>
          </h2>

          <p className="intro__description">
            We combine technology, motion and visual design to create
            digital experiences that feel alive.
          </p>

          <div className="intro__line"></div>

          <div className="intro__meta">
            <span>SCROLL TO EXPLORE</span>
            <span>2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}