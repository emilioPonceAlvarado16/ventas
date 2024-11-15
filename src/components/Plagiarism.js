import React, { useState, useEffect } from 'react';
export default function Plagiarism(props) {
    const onClose = props.onClose || null;
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



            <div className='f-modal-base-wide' style={{ width: "30vw", backgroundColor: "#080f25", color: "white", border: "1.5px solid white" }} >
                <h2>Plagiarism Detector</h2>
                {state === 'init' && (
                    <div>
                        <p>Press the button to start plagiarism detection.</p>
                        <button style={styles.button} onClick={() => {
                            setState('detecting');
                            setProgress(0); // Reset progress when starting
                        }}>Start Detection</button>
                        <button style={styles.exitButton} onClick={onClose}>Exit</button>
                    </div>

                )}

                {state === 'detecting' && (
                    <div>
                        <p>Reviewing content...</p>
                        <div style={styles.progressContainer}>
                            <div style={{ ...styles.progressBar, width: `${progress}%` }}></div>
                            <span style={styles.progressText}>{progress}%</span>
                        </div>
                    </div>

                )}

                {state === 'report' && (
                    <div>
                        <p>Plagiarism Report:</p>
                        <div>Original Content: 90% - Plagiarized Content: 10%</div>
                        <p>Review <a href="/default-route" style={{ color: "white", fontWeight: "bold", textDecoration: "underline" }}>Report</a></p>
                        <button style={styles.button} onClick={() => setState('init')}>Detect Again</button>
                        <button style={styles.exitButton} onClick={onClose}>Exit</button>

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
        backgroundColor: '#FFC107',
        color: 'black',
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

