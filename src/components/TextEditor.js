import React, { useState, useRef, useEffect } from 'react';

const TextEditor = () => {
  const editorRef = useRef(null);
  const lineNumberRef = useRef(null);
  const [lineNumbers, setLineNumbers] = useState([1]);
  const [highlightedLine, setHighlightedLine] = useState(0);

  const updateHighlightedLine = () => {
    const selection = window.getSelection();    
    setHighlightedLine(selection.focusOffset);
  };

  useEffect(() => {
    editorRef.current.addEventListener('keyup', updateHighlightedLine);
    editorRef.current.addEventListener('click', updateHighlightedLine);
    editorRef.current.addEventListener('scroll', (e) => {
      lineNumberRef.current.scrollTop = e.target.scrollTop;
    });
  }, [lineNumbers]);

  const handleContentChange = () => {
    const currentContent = editorRef.current.innerHTML;
    updateLineNumbers(currentContent);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const selection = window.getSelection();
      const range = selection.getRangeAt(0);
      const br = document.createElement('br');
      range.insertNode(br);
      range.setStartAfter(br);
      range.setEndAfter(br);
      selection.removeAllRanges();
      selection.addRange(range);
      handleContentChange();
    }
  };

  const updateLineNumbers = (htmlContent) => {
    const lines = htmlContent.split('<br>');
    setLineNumbers(lines.map((_, index) => index + 1));
  };

  const lineHeightStyle = '20px'; // Establece la altura de línea que desees

  return (
    <div style={{ display: 'flex', background: '#2c2c2c', height: '100vh', width: '50vw', borderRadius: '5px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>
      <div ref={lineNumberRef} style={{ width: '50px', lineHeight: lineHeightStyle, background: '#1a1a1a', padding: '10px 5px', color: '#b5b5b5', borderRight: '1px solid #aaa', overflowY: 'hidden' }}>
        {lineNumbers.map((line, index) => (
          <div key={line} style={{ height: lineHeightStyle, background: highlightedLine === index ? '#3a3a3a' : 'transparent' }}>
            {line}
          </div>
        ))}
      </div>
      <div
        ref={editorRef}
        contentEditable={true}
        onInput={handleContentChange}
        onKeyDown={handleKeyDown}
        style={{
          padding: '10px',
          overflowY: 'auto',
          flex: 1,
          overflowWrap: 'break-word',
          lineHeight: lineHeightStyle,
          whiteSpace: 'pre-wrap',
          color: '#e5e5e5',
          fontSize: '16px',
          fontFamily: 'Arial, sans-serif'
        }}
      ></div>
    </div>
  );
};

export default TextEditor;
