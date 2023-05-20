import React, { useContext } from "react";
import "./Resume.scss";
import { motion } from "framer-motion";
import { store } from "../../App";
import { ReactComponent as Download } from "../../assets/images/download.svg";
import { ReactComponent as Contact } from "../../assets/images/contact.svg";
import scroll from "../../utils/helpers/scroll";
import playAudio from "../../utils/helpers/playAudio";

export default function Resume() {
  const [state, dispatch] = useContext(store);

  return (
    <div
      className={`resume-container ${
        state.darkmode ? "dark-bg-1" : "light-bg-1"
      }`}
    >
      <div className="anchor" id="resume" />
      <motion.h3
        className={`eyebrow ${
          state.darkmode ? "dark-eyebrow" : "light-eyebrow"
        }`}
        initial={{ y: 350 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
      >
        {"Resume"}
      </motion.h3>
      <motion.h1
        className="heading"
        initial={{ y: 300 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
      >
        {"Interested in working with me?"}
      </motion.h1>

      <div className="resume-box">
        <div className="resume-box-left">
          <img className="cta" src={require("../../assets/images/cta.png")} alt="" />
        </div>

        <div className="resume-box-right">
          <p>
            {"If  you  have any questions, feel free to contact me. Additionally, you can download my resume below."}
          </p>
          <a
            download="AbhishekGusain_Resume.pdf"
            href={require("../../assets/documents/AbhishekGusain_Resume.pdf")}
          >
            <button
              className="download"
              onMouseDown={playAudio}
              onMouseUp={playAudio}
            >
              <Download
                className="download-svg svg"
                style={{ height: "22px" }}
              />
              Download CV
            </button>
          </a>

          <button
            className="contact"
            onClick={(e) => scroll("contact")}
            onMouseDown={playAudio}
            onMouseUp={playAudio}
          >
            <Contact className="contact-svg svg" style={{ height: "20px" }} />
            {"Contact me"}
          </button>
        </div>
      </div>
    </div>
  );
}
