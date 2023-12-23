import React from 'react';
import SvgIcons from './svgIcons';

function Loading2({ message, error, setError }) {
    const messageColor = error ? '#ea6c28' : '#E0A900';

    return (
        <div className="loading-container">
            {error && (
                <SvgIcons
                    type="close"
                    style={{
                        color: "red",
                        position: "relative",
                        left: "200px",
                        transition: "transform 0.2s ease", // Agrega una transición suave
                        cursor: "pointer" // Cambia el cursor a una mano para indicar que es interactivo
                    }}
                    onClick={() => { setError("") }}
                    onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.15)"} // Aumenta el tamaño en 1.5% cuando el mouse está encima
                    onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"} // Vuelve al tamaño normal cuando el mouse se aleja
                />
            )}

<div className={`spinner ${error ? 'gear-fall' : ''}`}>
                <SvgIcons type="gear2" width="100" height="100" />
            </div>
            <div className="message" style={{ "color": messageColor }} >
                {error ? error.message : message} {/* Modificado para usar error.message */}
                {!error && (
                    <>
                        <span className="dot">.</span>
                        <span className="dot">.</span>
                        <span className="dot">.</span>
                    </>
                )}
            </div>
            <style jsx>{`
                .loading-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.5);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    z-index: 9999;
                }

                .spinner {
                    width: 200px; 
                    height: 200px;
                    position: relative;
                }

                .message {
                    color: white;
                    font-size: 1.25em;
                }

                .dot {
                    font-size: 2.75em; 
                    animation: blink 1.4s infinite;
                    animation-fill-mode: both;
                }

                .dot:nth-child(2) {
                    animation-delay: 0.2s;
                }

                .dot:nth-child(3) {
                    animation-delay: 0.4s;
                }

                @keyframes blink {
                    0%, 100% { opacity: 0; }
                    50% { opacity: 1; }
                }
                .gear-fall {
                    animation: fall 4.1s ease forwards;
                }

                @keyframes fall {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(500px); opacity: 0; }
                }
                
            `}</style>
        </div>
    );
}

export default Loading2;
