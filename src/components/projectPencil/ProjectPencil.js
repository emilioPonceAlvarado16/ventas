// src/components/ProjectPencil.js

import React, { useState, useRef } from 'react';
import styles from './ProjectPencil.module.css';
import SvgIcons from '../svgIcons';

export default function ProjectPencil() {
  const [isEditable, setIsEditable] = useState(false);
  const [projectName, setProjectName] = useState('Untitled Project');
  const inputRef = useRef(null); 
  const charLimit = 25;

  const handleEdit = () => {
    setIsEditable(true);
    setTimeout(() => inputRef.current?.focus(), 0); // Uso de encadenamiento opcional
  };

  const handleChange = (e) => {
    if (e.target.value.length <= charLimit) {
      setProjectName(e.target.value);
    } else {
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setIsEditable(false); 
    }
  };

  const handleBlur = () => {
    setIsEditable(false);
  };

  return (
    <div className={styles.container}>
      <SvgIcons type='edit' className={styles.pencilIcon} onClick={handleEdit} />
      <input
        ref={inputRef}
        type="text"
        className={styles.projectNameInput}
        value={projectName}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        disabled={!isEditable}
      />
    </div>
  );
}
