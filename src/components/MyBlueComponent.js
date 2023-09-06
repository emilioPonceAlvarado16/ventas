import React from 'react';

const MyBlueComponent = () => {
  return (
    <div className="blue-container">
      <svg className="shining-line" viewBox="0 0 100 100">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <path
          d="M0 100 C25 50 75 50 100 0"
          stroke="white"
          strokeWidth="2"
          fill="transparent"
          filter="url(#glow)"
        />
      </svg>
      <p>Mi componente azul moderno</p>
    </div>
  );
};

export default MyBlueComponent;
