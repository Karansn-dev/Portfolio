import React, { useEffect, useMemo, useRef, ReactNode, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./ScrollFloat.css";

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
  children: ReactNode;
  tag?: keyof JSX.IntrinsicElements;
  className?: string;
  scrollContainerRef?: RefObject<HTMLElement>;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  tag = "h2",
  className = "",
  scrollContainerRef,
  animationDuration = 1,
  ease = "back.inOut(2)",
  scrollStart = "center bottom+=50%",
  scrollEnd = "bottom bottom-=40%",
  stagger = 0.03
}) => {
  const containerRef = useRef<HTMLElement>(null);

  // Split text into characters, preserving ReactNodes
  const splitText = useMemo(() => {
    if (typeof children !== "string") return <>{children}</>;
    return (children as string).split("").map((char, i) => (
      <span className="char" key={i}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const scroller = scrollContainerRef?.current || window;
    const charElements = el.querySelectorAll(".char");
    gsap.fromTo(
      charElements,
      {
        willChange: "opacity, transform",
        opacity: 0,
        yPercent: 120,
        scaleY: 2.3,
        scaleX: 0.7,
        transformOrigin: "50% 0%"
      },
      {
        duration: animationDuration,
        ease: ease,
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        stagger: stagger,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          scrub: true
        },
      }
    );
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger]);

  const Tag = tag as keyof JSX.IntrinsicElements;
  return (
    <Tag ref={containerRef} className={`scroll-float ${className}`}>
      <span className="scroll-float-text">{splitText}</span>
    </Tag>
  );
};

export default ScrollFloat;


