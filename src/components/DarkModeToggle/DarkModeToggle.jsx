import React, { useEffect, useState } from 'react'
import styles from './DarkModeToggle.module.css';
import { IoSunnyOutline } from "react-icons/io5";
import { FiMoon } from "react-icons/fi";
const DarkModeToggle = ({ themeToggle, themeMode }) => {
    
  return (
    <div className={styles.container} onClick={() => themeToggle()}>
      <div className={styles.icon}>
        <IoSunnyOutline size={20} color="gold" />
      </div>
      <div className={styles.icon}>
        <FiMoon size={20} color="gold" />
      </div>

      <div
        className={styles.ball}
        style={themeMode === "light" ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default DarkModeToggle
