import React, { useState, useRef, useEffect } from 'react';
import ModalHeading from './modalHeading';
import EditableElement from '@/components/EditableElement';

const TextEditor = () => {

  const [editorObjects, setEditorObjects] = useState(
    [
      {
          "id": 2,
          "name": "Párrafo",
          "value": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          "type": "pa"
      },
      {
          "id": 1,
          "name": "Título",
          "value": "What is Lorem Ipsum?",
          "type": "ti"
      },
      {
          "id": 3,
          "name": "Título",
          "value": "Why do we use it?",
          "type": "ti"
      },
      {
          "id": 4,
          "name": "Párrafo",
          "value": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          "type": "pa"
      },
      {
          "id": 5,
          "name": "Título",
          "value": "Where does it come from?",
          "type": "ti"
      }
  ]
  
  
  );

  const editorRef = useRef(null);
  const lineNumberRef = useRef(null);
  const [lineNumbers, setLineNumbers] = useState([1]);
  const [highlightedLine, setHighlightedLine] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImageName, setSelectedImageName] = useState('');
  const [message, setMessage] = useState(null); // Nuevo estado para el mensaje
  const [imageLocation, setImageLocation] = useState(null); // Nuevo estado para la ubicación de la imagen


  const handleUpdate = (id, type, newValue) => {
    // Encuentra el objeto por ID y actualiza su valor
    const updatedEditorObjects = editorObjects.map((obj) => {
      if (obj.id === id) {
        return { ...obj, value: newValue, type: type };
      }
      return obj;
    });
    setEditorObjects(updatedEditorObjects);
  };
  
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
    console.log("Drop event triggered"); // Añade esta línea
    const file = e.dataTransfer.items[0].getAsFile();
    console.log("File type:", file.type); // Añade esta línea

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
       console.log("Handling image file"); // Añade esta línea

        const photoTag = document.createElement('span');
        photoTag.innerHTML = `<PHOTO title="${file.name}">`;
        photoTag.onclick = () => {
          setIsModalVisible(true);
          setSelectedImageName(file.name);
        };
        range.insertNode(photoTag);
        setImageLocation(file.name); // Guardar la ubicación de la imagen
        setMessage("Imagen cargada exitosamente!"); // Mostrar mensaje
        setTimeout(() => setMessage(null), 3000); // Ocultar mensaje después de 3 segundos
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
      >             {editorObjects.map((obj) => (
        <EditableElement 
          key={obj.id}
          id={obj.id}
          type={obj.type}
          name={obj.name}
          value={obj.value}
          onUpdate={handleUpdate}
        />
      ))}      </div>
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
