import React, { useRef } from 'react'
import Image from 'next/image'; // Importar el componente Image de Next.js

export default function Modal({ onClose, imageUrl }) {

    const modalRef = useRef();

    const handleOutsideClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target) && onClose) {
           console.log("afuera")
            onClose();
        }
    };
    return (
        <div className="f-modal-overlay" onClick={handleOutsideClick}>

            <div className="f-modal-base-small" ref={modalRef}>
                {imageUrl && (
                    <Image
                        src={imageUrl}
                        alt="Image1.png"
                        width={500} // Puedes ajustar las dimensiones según tus necesidades
                        height={200}
                    />
                )}

                <br />
                
                    <div className="f-modal-wrapper-right" style={{ fontWeight: "bold"}}>

                        Image1.png</div>





            </div>
        </div>
    )
}
