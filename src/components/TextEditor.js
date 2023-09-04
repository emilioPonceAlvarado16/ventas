import React, { useState, useRef, useEffect } from 'react';
import ModalHeading from './modalHeading';

const TextEditor = () => {
  const editorRef = useRef(null);
  const lineNumberRef = useRef(null);
  const [lineNumbers, setLineNumbers] = useState([1]);
  const [highlightedLine, setHighlightedLine] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImageName, setSelectedImageName] = useState('');

  const updateHighlightedLine = () => {
    const selection = window.getSelection();    
    setHighlightedLine(selection.focusOffset);
  };

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

  const handleDrop = async (e) => {
    e.preventDefault();
    const file = e.dataTransfer.items[0].getAsFile();
    const fileType = file.type.split('/')[0];

    const selection = window.getSelection();
    let range;
    if (selection.rangeCount > 0) {
        range = selection.getRangeAt(0);
    } else {
        range = document.createRange();
        range.selectNodeContents(editorRef.current);
        range.collapse(false);
    }

    if (fileType === 'image') {
        const photoTag = document.createElement('span');
        photoTag.innerHTML = `<PHOTO ${file.name}>`;
        photoTag.onclick = () => {
          console.log("Photo tag clicked"); // Añade esta línea

          setIsModalVisible(true)
          setSelectedImageName(file.name)
          
        };
        range.insertNode(photoTag);
    } else {
        const reader = new FileReader();
        reader.onload = (event) => {
            const textNode = document.createTextNode(event.target.result);
            range.insertNode(textNode);
        };
        reader.readAsText(file);
    }

    handleContentChange();
    updateLineNumbers(editorRef.current.innerHTML);
};

  const updateLineNumbers = (htmlContent) => {
    const lines = htmlContent.replace(/<br\s*\/?>/g, '\n').split('\n');
    setLineNumbers(lines.map((_, index) => index + 1));
  };

  const handleEditorClick = (e) => {
    if (e.target.textContent.startsWith('<PHOTO')) {
      const imageName = e.target.textContent.replace('<PHOTO ', '').replace('>', '');
      setSelectedImageName(imageName);
      setIsModalVisible(true);
    }
};
  useEffect(() => {
    editorRef.current.addEventListener('keyup', updateHighlightedLine);
    editorRef.current.addEventListener('click', updateHighlightedLine);
    editorRef.current.addEventListener('click', handleEditorClick);
    editorRef.current.addEventListener('scroll', (e) => {
      lineNumberRef.current.scrollTop = e.target.scrollTop;
    });

    return () => {
      editorRef.current.removeEventListener('click', handleEditorClick);
    };
  }, [lineNumbers]);

  const lineHeightStyle = '20px';

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
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onClick={handleEditorClick}  // Manejar el clic directamente aquí

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
      {isModalVisible && (
        <ModalHeading
          title="Image Preview"
          details={selectedImageName}
          onConfirm={() => setIsModalVisible(false)}
        />
      )}
  
    </div>
   
      
  );
};

export default TextEditor;
