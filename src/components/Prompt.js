import React, { useRef, useEffect, useState } from 'react';
import Chat from './Chat';

export default function Prompt(props) {
    const onClose = props.onClose || null
    const modalRef = useRef();
    const [status, setStatus] = useState('entering');

    useEffect(() => {
        const timer = setTimeout(() => setStatus('entered'), 0);
        return () => clearTimeout(timer);
    }, []);

    const handleOutsideClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target) && onClose) {
            setStatus('exiting');
            console.log("entro aqui")
            setTimeout(() => onClose(), 10);
        }
    };
    return (
        <div className='f-modal-overlay'
            onClick={handleOutsideClick} >
            <div ref={modalRef}>

                <Chat className={` f-modal-entered`} />
            </div>
        </div>
    )
}
