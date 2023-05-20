import React, { useContext } from 'react';
import './Manifest.scss';
import { motion } from "framer-motion";
import { store } from '../../App';

export default function Manifest () {
  const [state, dispatch] = useContext(store);

  return (
    <div className={`container-manifest ${state.darkmode ? "dark-bg-1" : "light-bg-1"}`}>
        <motion.a className="manifest"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
            <h1>Ambitious developer with a passion to build impressive user experiences</h1>
        </motion.a>
    </div>
  );
}
