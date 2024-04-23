import React, { useRef } from 'react';

export default function TextEditor() {
  const editorRef = useRef(null);

  const handleMouseUp = () => {
    // Al soltar el mouse, verifica y ajusta la selección para incluir solo elementos <p>
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      let startNode = range.startContainer;
      let endNode = range.endContainer;

      // Asegúrate de que ambos nodos estén dentro de elementos <p>
      while (startNode.parentNode && startNode.tagName !== 'P') {
        startNode = startNode.parentNode;
      }

      while (endNode.parentNode && endNode.tagName !== 'P') {
        endNode = endNode.parentNode;
      }

      if (startNode.tagName === 'P' && endNode.tagName === 'P') {
        const newRange = document.createRange();
        newRange.setStartBefore(startNode);
        newRange.setEndAfter(endNode);
        selection.removeAllRanges();
        selection.addRange(newRange);
      } else {
        selection.removeAllRanges();  // Remueve la selección si no está dentro de <p>
      }
    }
  };

  return (
    <div ref={editorRef} onMouseUp={handleMouseUp}>
      <p>Este es el primer párrafo. Intenta seleccionar a través de los párrafos.</p>
      <p>Este es el segundo párrafo. La selección debería continuar fluidamente desde el primero.</p>
      <div>Este texto no se debe seleccionar fluidamente con los párrafos.</div>
    </div>
  );
}
