import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { Resizable } from 'react-resizable';
import 'react-resizable/css/styles.css';

export default function Modal({ onClose, imageUrl }) {
  const modalRef = useRef();
  const [status, setStatus] = useState('entering');
  const [size, setSize] = useState({ width: 200, height: 200 });

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

  const handleResize = (event, { element, size }) => {
    setSize(size);
  };

  return (
    <div className="f-modal-overlay" onClick={handleOutsideClick}>
      <div className={`f-modal-base-wide f-modal-${status}`} ref={modalRef}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <Resizable width={size.width} height={size.height} onResize={handleResize} resizeHandles={['se', 'e', 's', 'w', 'n', 'nw', 'ne', 'sw']}>
            <div style={{ width: size.width, height: size.height }}>
              <Image src={imageUrl} alt="Resizable image" layout="fill" objectFit="contain" />
            </div>
          </Resizable>
        </div>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}
