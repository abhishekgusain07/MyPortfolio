import React, { useContext, useRef } from 'react';
import { store } from '../../App';
import { motion } from "framer-motion";
import './IntroCards.scss';

export default function IntroCards () {
  const [state, dispatch] = useContext(store);
  const scrollRef = useRef(null);

  return (
    <div className="container-intro">
      <section className={`left-intro big-card ${state.darkmode ? "dark-card" : "light-card"}`}>
        <h3 className={`${state.darkmode ? "dark-heading" : "light-heading"}`}>React developer at the intersection between design and code</h3>
        <p className={`${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}>Starting with HTML, CSS and JavaScript, I taught myself programming on my own. However, nowadays there is a lot to discover far beyond vanilla JavaScript: Today I work with TypeScript in React, use Redux Toolkit for state management and sometimes use SASS as a pre-processor for CSS. As you can see, I also like to work with motion libraries - e.g. Framer Motion.</p>
      </section>
    </div>
  );
}
