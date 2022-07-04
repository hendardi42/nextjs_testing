import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import Image from "next/image";
import { useEffect } from "react";

import styles from "../styles/GsapSandbox.module.scss";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const heroTextRevealContent =
  "We will take a deep dive tour to understand what does our company do.";

const GsapSandbox = () => {
  const gsapScript = () => {
    let heroTimeline = gsap.timeline();
    heroTimeline
      .fromTo(
        ".intro-text",
        {
          opacity: 0,
          y: -50,
        },
        {
          duration: 1,
          ease: "power2.out",
          opacity: 1,
          stagger: 0.2,
          y: 0,
        }
      )
      .to(
        "#hero-reveal-text",
        {
          duration: 5,
          ease: "power2.out",
          text: {
            value: heroTextRevealContent,
          },
        },
        ">-=0.5"
      );

    gsap.to("#hero-background-image", {
      scrollTrigger: {
        trigger: "#hero",
        scrub: 1,
        start: "top 80%",
        end: "bottom 20%",
      },
      ease: "power1.in",
      scale: 1.5,
    });

    gsap.to("#hero-background-image-after", {
      scrollTrigger: {
        trigger: "#hero",
        scrub: 1,
        start: "top 80%",
        end: "bottom 20%",
      },
      ease: "power1.in",
      scale: 1.5,
    });

    gsap.utils.toArray(".pinned-container").forEach((section) => {
      let comparisonTl = gsap.timeline({
        scrollTrigger: {
          markers: true,
          trigger: section,
          scrub: true,
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: true,
        },
        defaults: { ease: "none" },
      });

      comparisonTl.fromTo(
        section.querySelector(".background-image-container--after"),
        { xPercent: 100, x: 0 },
        { xPercent: 0 }
      );
      comparisonTl.fromTo(
        section.querySelector(".background-image--after"),
        { xPercent: -100, x: 0 },
        { xPercent: 0 },
        0
      );
    });
  };

  useEffect(() => {
    gsapScript();
  }, []);

  return (
    <>
      <section
        className={`pinned-container ${styles["container"]} ${styles["hero"]}`}
        id="hero"
      >
        <div className={styles["background-image-container"]}>
          <Image
            alt="company hero background"
            className={styles["background-image"]}
            id="hero-background-image"
            layout="fill"
            objectFit="cover"
            src="https://assets.codepen.io/16327/before.jpg"
          />
        </div>
        <div
          className={`${styles["background-image-container--after"]} background-image-container--after`}
        >
          <Image
            alt="company hero background after"
            className={`${styles["background-image--after"]} background-image--after`}
            id="hero-background-image-after"
            layout="fill"
            objectFit="cover"
            src="https://assets.codepen.io/16327/after.jpg"
          />
        </div>
        <h1 id="intro-text-container">
          <span
            className={`${styles["intro-text"]} ${styles["intro-text--small"]} intro-text`}
          >
            Hi, and Welcome to
          </span>
          <span className={`${styles["intro-text"]} intro-text`}>
            Our Company
          </span>
          <span className={styles["reveal-text"]} id="hero-reveal-text"></span>
          <span className={styles["pointer"]}>|</span>
        </h1>
      </section>

      <section className={`${styles["container"]} ${styles["container--red"]}`}>
        hello
      </section>
    </>
  );
};

export default GsapSandbox;
