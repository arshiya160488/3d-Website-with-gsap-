import { useRef } from "react";
import "./style.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const cubeRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=2000",
          scrub: true,
          pin: true,
        },
      });

      tl.to(
        cubeRef.current,
        {
          rotationY: 360,
          rotationX: 180,
          rotationZ: 90,
          scale: 1.6,
          x: 120,
          ease: "none",
        },
        0
      );

      tl.to(
        contentRef.current,
        {
          x: -120,
          opacity: 0,
          scale: 0.8,
          ease: "none",
        },
        0
      );
    },
    { scope: heroRef }
  );

  return (
    <section ref={heroRef} className="hero">
      <div ref={contentRef} className="hero__content">
        <span className="hero__eyebrow">DIGITAL EXPERIENCE</span>

        <h1 className="hero__title">
          ENTER THE
          <span> VOID.</span>
        </h1>

        <p className="hero__description">
          An interactive 3D experience built with React and GSAP.
        </p>

        <button className="hero__button">Explore</button>
      </div>

      <div className="hero__scene">
        <div ref={cubeRef} className="hero__object">
          <div className="face front">01</div>
          <div className="face back">02</div>
          <div className="face right">03</div>
          <div className="face left">04</div>
          <div className="face top">05</div>
          <div className="face bottom">06</div>
        </div>
      </div>

      <div className="hero__scroll">
        SCROLL
        <span>↓</span>
      </div>
    </section>
  );
}