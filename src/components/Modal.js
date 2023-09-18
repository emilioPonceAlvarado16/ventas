import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

export default function Modal({ onClose, imageUrl }) {
  const modalRef = useRef();
  const [status, setStatus] = useState('entering');
  const fileName = imageUrl ? imageUrl.substring(imageUrl.lastIndexOf('/') + 1) : '';

  useEffect(() => {
    const timer = setTimeout(() => setStatus('entered'), 0);
    return () => clearTimeout(timer);
  }, []);

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target) && onClose) {
      setStatus('exiting');
      setTimeout(() => onClose(), 80);
    }
  };

  return (
    <div className="f-modal-overlay" onClick={handleOutsideClick}>
      <div className={`f-modal-base-small f-modal-${status}`} ref={modalRef}>
        {imageUrl && (
          <Image
            src={imageUrl}
            alt="Image1.png"
            width={500}
            height={200}
          />
        )}
        <br />
        <div className="f-modal-wrapper-right" style={{ fontWeight: 'bold' }}>
        {fileName}
        </div>
      </div>
    </div>
  );
}
