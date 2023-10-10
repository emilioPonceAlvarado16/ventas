import React, { useState, useEffect } from 'react';
export default function Plagiarism(props) {
    const onClose=props.onClose || null;
    const [state, setState] = useState('init'); // init, detecting, report
    const [progress, setProgress] = useState(0); // progress value from 0 to 100

    useEffect(() => {
        let timer;
        if (state === 'detecting') {
            timer = setInterval(() => {
                setProgress((prevProgress) => {
                    if (prevProgress < 100) {
                        return prevProgress + 10; // Increment by 10% every second
                    } else {
                        clearInterval(timer);
                        setState('report');
                        return 100; // Set to 100% when done
                    }
                });
            }, 1000);
        }

        return () => clearInterval(timer);
    }, [state]);

    return (
        <div className='f-modal-overlay'>



            <div className='f-modal-base-wide' style={{ width: "30vw" }} >
                <h2>Detector de Plagio</h2>
                {state === 'init' && (
                    <div>
                        <p>Presiona el botón para iniciar la detección de plagio.</p>
                        <button style={styles.button} onClick={() => {
                            setState('detecting');
                            setProgress(0); // Reset progress when starting
                        }}>Iniciar detección</button>
                        <button style={styles.exitButton} onClick={onClose}>Salir</button>

                    </div>
                )}

                {state === 'detecting' && (
                    <div>
                        <p>Revisando contenido...</p>
                        <div style={styles.progressContainer}>
                            <div style={{ ...styles.progressBar, width: `${progress}%` }}></div>
                            <span style={styles.progressText}>{progress}%</span>
                        </div>
                    </div>
                )}

                {state === 'report' && (
                    <div>
                        <p>Reporte de plagio:</p>
                        <div>Contenido original: 90% - Contenido plagiado: 10%</div>
                        <p>Revisar <a style={{ color: "blue", textDecoration: "underline" }}>Reporte</a></p>
                        <button style={styles.button} onClick={() => setState('init')}>Volver a detectar</button>
                        <button style={styles.exitButton} onClick={onClose}>Salir</button>

                    </div>
                )}
            </div>
        </div>
    );
}

const styles = {

    separator: {
        height: '1px',
        backgroundColor: '#ddd',
        margin: '20px 0',
    },
    progressContainer: {
        position: 'relative',
        height: '20px',
        backgroundColor: '#e8e8e8',
        borderRadius: '10px',
        marginTop: '15px',
    },
    progressBar: {
        height: '100%',
        background: 'linear-gradient(to right, #66ff66, #009900)',
        transition: 'width 0.5s',
        borderRadius: '10px',
    },
    progressText: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontWeight: 'bold',
        color: '#333',
    },
    button: {
        backgroundColor: '#009900',
        color: '#fff',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginTop: '20px',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '20px',
    },
    exitButton: {
        backgroundColor: '#ccc',
        color: '#333',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginLeft: '10px', // Espacio entre botones
    },
};

