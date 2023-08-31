import React, { useState, useRef, useEffect } from 'react';

const TextEditor = () => {
  const editorRef = useRef(null);
  const [lineNumbers, setLineNumbers] = useState([1]);

  const handleContentChange = () => {
    const currentContent = editorRef.current.innerText;
    updateLineNumbers(currentContent);
  };

  const updateLineNumbers = (text) => {
    const lines = text.split('\n');
    setLineNumbers(lines.map((_, index) => index + 1));
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: '10px' }}>
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
        style={{
          border: '1px solid #ccc',
          minHeight: '200px',
          padding: '10px',
          borderRadius: '4px',
          width: '300px',
          overflowWrap: 'break-word',
        }}
      ></div>
    </div>
  );
};

export default TextEditor;
