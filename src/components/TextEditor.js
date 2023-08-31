import React, { useState, useRef, useEffect } from 'react';

const TextEditor = () => {
  const editorRef = useRef(null);
  const lineNumberRef = useRef(null);
  const [lineNumbers, setLineNumbers] = useState([1]);
  const [highlightedLine, setHighlightedLine] = useState(0);

  useEffect(() => {
    editorRef.current.addEventListener('keyup', (e) => {
      const selection = window.getSelection();
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      const editorRect = editorRef.current.getBoundingClientRect();
      const lineHeight = editorRef.current.offsetHeight / lineNumbers.length;
      const position = Math.floor((rect.top - editorRect.top) / lineHeight);
      setHighlightedLine(position);
    });

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

  return (
    <div style={{ display: 'flex', background: '#2c2c2c', height: '100vh', width: '50vw', borderRadius: '5px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>
      <div ref={lineNumberRef} style={{ width: '50px', lineHeight: '1.2em', background: '#1a1a1a', padding: '10px 5px', color: '#b5b5b5', borderRight: '1px solid #aaa', overflowY: 'hidden' }}>
        {lineNumbers.map((line, index) => (
          <div key={line} style={{ height: '1.2em', background: highlightedLine === index ? '#3a3a3a' : 'transparent' }}>
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
          lineHeight: '1.2em',
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
