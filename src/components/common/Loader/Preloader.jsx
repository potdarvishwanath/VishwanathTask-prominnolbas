"use client";

import { useEffect, useState } from "react";
import "./Preloader.css";

export default function Preloader() {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState("counting"); // counting | revealing | done

  useEffect(() => {
    const duration = 1200; // ms
    const steps = 100;
    const stepTime = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= 100) {
        clearInterval(timer);
        setTimeout(() => setPhase("revealing"), 300);
        setTimeout(() => setPhase("done"), 4000); 
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  if (phase === "done") return null;

  const COLUMNS_COUNT = 1; 
  const columns = Array.from({ length: COLUMNS_COUNT });

  const filledBlocksCount = Math.round(count / 10);

  return (
    <div
      className={`preloader ${phase === "revealing" ? "preloader--revealing" : ""}`}
    >
      {/* Visual Loader */}
      <div className="preloader__loader-container">
        {/* Label and Percentage Row */}
        <div className="preloader__loader-top-row">
          <span className="preloader__loader-label">LOADER</span>
          <div className="preloader__loader-percentage-container">
            <span className="preloader__loader-count">{count}</span>
            <span className="preloader__loader-percent">%</span>
          </div>
        </div>
        
        {/* Block Progress Bar */}
        <div className="preloader__loader-bar">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className={`preloader__loader-block ${
                i < filledBlocksCount
                  ? "preloader__loader-block--filled"
                  : "preloader__loader-block--unfilled"
              }`}
            />
          ))}
        </div>
      </div>

      {/* The Zipper Columns */}
      <div className="preloader__columns">
        {columns.map((_, i) => {
          const delay = 0; 
          return (
            <div key={i} className="preloader__column">
              {/* Top Half */}
              <div
                className="preloader__half preloader__half--top"
                style={{ transitionDelay: `${delay}s` }}
              />
              {/* Bottom Half */}
              <div
                className="preloader__half preloader__half--bottom"
                style={{ transitionDelay: `${delay}s` }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}