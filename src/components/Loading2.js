import React from 'react';
import SvgIcons from './svgIcons';

function Loading2({ message }) {
    return (
        <div className="loading-container">
            <div className="spinner">
                <SvgIcons type="gear2" width="100" height="100" />
            </div>
            <div className="message" style={{"color":"#E0A900"}}>
                {message}
                <span className="dot">.</span>
                <span className="dot">.</span>
                <span className="dot">.</span>
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
            `}</style>
        </div>
    );
}

export default Loading2;
