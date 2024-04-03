import React, { useState, useEffect, useRef } from 'react';
import styles from './ProjectPencil.module.css';
import SvgIcons from '../svgIcons';

export default function ProjectPencil() {
  const [isEditable, setIsEditable] = useState(false);
  const [projectName, setProjectName] = useState('Untitled Project');
  const inputRef = useRef(null); 
//   const [charLimitReached, setCharLimitReached] = useState(false); // Nuevo estado para la advertencia
  const charLimit = 25

  const handleEdit = () => {
    setIsEditable(true);
    setTimeout(() => inputRef.current && inputRef.current.focus(), 0);
  };

  const handleChange = (e) => {
    if (e.target.value.length <= charLimit) {
      setProjectName(e.target.value);
    //   setCharLimitReached(false); 
    } else {
    //   setCharLimitReached(true); 
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
      <SvgIcons type='pencil' className={styles.pencilIcon} onClick={handleEdit} />
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
