import React, { useState, useRef } from 'react';

const TextEditor = () => {
  const editorRef = useRef(null);
  const [lineNumbers, setLineNumbers] = useState([1]);

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
    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: '10px', lineHeight: '1.2em' }}>
        {lineNumbers.map((line) => (
          <div key={line} style={{ height: '1.2em' }}>
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
          border: '1px solid #ccc',
          minHeight: '200px',
          padding: '10px',
          borderRadius: '4px',
          width: '300px',
          overflowWrap: 'break-word',
          lineHeight: '1.2em',
          whiteSpace: 'pre-wrap'
        }}
      ></div>
    </div>
  );
};

export default TextEditor;
