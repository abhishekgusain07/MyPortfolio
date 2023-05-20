import React, { useContext } from "react";
import "./Projects.scss";
import { motion } from "framer-motion";
import { store } from "../../App";
import playAudio from "../../utils/helpers/playAudio";

export default function Projects() {
  const [state, dispatch] = useContext(store);

  return (
    <div className={`projects-container ${state.darkmode ? "dark-bg-1" : "light-bg-1"}`}>
      <div className="anchor" id="portfolio" />
      <motion.h3
        className={`eyebrow ${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}
        initial={{ y: 300 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
      >Projects
      </motion.h3>
      <motion.h1
        className={`heading ${state.darkmode ? "dark-heading" : "light-heading"}`}
        initial={{ y: 250 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
      >
        {"A small preview of my projects."}
      </motion.h1>

      <div className="project-list">
        <a
          rel = "noreferrer"
          href="https://get-fully-social.netlify.app/"
          className="ecom"
          target="_blank"
          onMouseDown={playAudio}
          onMouseUp={playAudio}
        >
          <div className="tooltip upper ecom" />
          <motion.img
            whileHover={{ scale: 1.025 }}
            transition={{ type: "tween", duration: 0.15 }}
            className="project-preview"
            src={require("../../assets/images/socialize.png")}
          />
        </a>

        <a
          rel = "noreferrer"
          href="https://code-recoded.vercel.app/"
          className="cv"
          target="_blank"
          onMouseDown={playAudio}
          onMouseUp={playAudio}
        >
          <div className="tooltip upper cv" />
          <motion.img
            whileHover={{ scale: 1.025 }}
            transition={{ type: "tween", duration: 0.15 }}
            className="project-preview"
            src={require("../../assets/images/recoded.png")}
          />
        </a>

        <a
          rel = "noreferrer"
          href="https://gym-mate.vercel.app/"
          className="reddit lower"
          target="_blank"
          onMouseDown={playAudio}
          onMouseUp={playAudio}
        >
          <div className="tooltip lower reddit" />
          <motion.img
            whileHover={{ scale: 1.025 }}
            transition={{ type: "tween", duration: 0.15 }}
            className="project-preview"
            src={require("../../assets/images/gym.png")}
          />
        </a>

        <a
          rel = "noreferrer"
          href="https://rentcar-easyway.vercel.app/"
          className="mac lower"
          target="_blank"
          onMouseDown={playAudio}
          onMouseUp={playAudio}
        >
          <div className="tooltip lower mac" />
          <motion.img
            whileHover={{ scale: 1.025 }}
            transition={{ type: "tween", duration: 0.15 }}
            className="project-preview"
            src={require("../../assets/images/car.png")}
          />
        </a>
      </div>

      <a
        rel = "noreferrer"
        href="https://github.com/abhishekgusain07"
        target="_blank"
        className="more"
        onMouseDown={playAudio}
        onMouseUp={playAudio}
      >
        {"Show More"}
      </a>
    </div>
  );
}
