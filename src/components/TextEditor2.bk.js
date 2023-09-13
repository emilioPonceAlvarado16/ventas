import React, { useState, useRef, useEffect } from 'react';
// import React, { useState, useEffect } from 'react';
import ModalHeading from './modalHeading';
import EditableElement from '@/components/EditableElement';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Field from './Field';

const TextEditor = (props) => {

  const [editorObjects, setEditorObjects] = useState([])

  useEffect(() => {
    
  setEditorObjects(props.fields)
   
  }, [props.fields])
  
 

// const editorRef = useRef(null);
// const lineNumberRef = useRef(null);
const [lineNumbers, setLineNumbers] = useState([1]);
const [highlightedLine, setHighlightedLine] = useState(0);
const [isModalVisible, setIsModalVisible] = useState(false);
const [selectedImageName, setSelectedImageName] = useState('');
const [message, setMessage] = useState(null); // Nuevo estado para el mensaje
const [imageLocation, setImageLocation] = useState(null); // Nuevo estado para la ubicación de la imagen


const handleUpdate = (id, type, newValue) => {
  // Encuentra el objeto por ID y actualiza su valor
  const updatedEditorObjects = editorObjects.map((obj) => {
    if (obj.id == id) {
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

// const handleContentChange = () => {
//   const currentContent = editorRef.current.innerHTML;
//   updateLineNumbers(currentContent);
// };

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
    // handleContentChange();
  }
};

// const handleDrop = async (e) => {
//   e.preventDefault();
//   console.log("Drop event triggered"); // Añade esta línea
//   const file = e.dataTransfer.items[0].getAsFile();
//   console.log("File type:", file.type); // Añade esta línea

//   const fileType = file.type.split('/')[0];

//   const selection = window.getSelection();
//   let range;
//   if (selection.rangeCount > 0) {
//       range = selection.getRangeAt(0);
//   } else {
//       range = document.createRange();
//       range.selectNodeContents(editorRef.current);
//       range.collapse(false);
//   }

//   if (fileType === 'image') {
//      console.log("Handling image file"); // Añade esta línea

//       const photoTag = document.createElement('span');
//       photoTag.innerHTML = `<PHOTO title="${file.name}">`;
//       photoTag.onclick = () => {
//         setIsModalVisible(true);
//         setSelectedImageName(file.name);
//       };
//       range.insertNode(photoTag);
//       setImageLocation(file.name); // Guardar la ubicación de la imagen
//       setMessage("Imagen cargada exitosamente!"); // Mostrar mensaje
//       setTimeout(() => setMessage(null), 3000); // Ocultar mensaje después de 3 segundos
//   } else {
//       const reader = new FileReader();
//       reader.onload = (event) => {
//           const textNode = document.createTextNode(event.target.result);
//           range.insertNode(textNode);
//       };
//       reader.readAsText(file);
//   }

//   handleContentChange();
//   updateLineNumbers(editorRef.current.innerHTML);
// };

// const handleDragEnd = (result) => {
//   const { destination, source, draggableId } = result;

//   if (!destination) {
//     return;
//   }

//   if (
//     destination.droppableId === source.droppableId &&
//     destination.index === source.index
//   ) {
//     return;
//   }

//   const newEditorObjects = Array.from(editorObjects);
//   const [removed] = newEditorObjects.splice(source.index, 1);
//   newEditorObjects.splice(destination.index, 0, removed);

//   setEditorObjects(newEditorObjects);
// };


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

const onDragEnd = (result) => {
  const { destination, source } = result;

  if (!destination) {
    return;
  }

  if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  ) {
    return;
  }

  const newEditorObjects = [...editorObjects];
  const [removed] = newEditorObjects.splice(source.index, 1);
  newEditorObjects.splice(destination.index, 0, removed);

  setEditorObjects(newEditorObjects);
};




const lineHeightStyle = '20px';


return (
  <DragDropContext onDragEnd={onDragEnd}>
    <div style={{ display: 'flex', background: '#2c2c2c', height: '100vh', width: '50vw', borderRadius: '5px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>
      {/* <div ref={lineNumberRef} style={{ width: '50px', lineHeight: lineHeightStyle, background: '#1a1a1a', padding: '10px 5px', color: '#b5b5b5', borderRight: '1px solid #aaa', overflowY: 'hidden' }}> */}
      <div style={{ width: '50px', lineHeight: lineHeightStyle, background: '#1a1a1a', padding: '10px 5px', color: '#b5b5b5', borderRight: '1px solid #aaa', overflowY: 'hidden' }}>
      
      </div>

      <Droppable droppableId="textEditor">
        {(Droppableprovided) => (
          <div
            // ref={editorRef}
            ref={Droppableprovided.innerRef}
            {...Droppableprovided.droppableProps}
            // contentEditable={true}
            // onInput={handleContentChange}
            // onKeyDown={handleKeyDown}
            // onDragOver={(e) => e.preventDefault()}
            // onClick={handleEditorClick}
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
          >
            {editorObjects.map((obj, index) => (
              <Draggable key={obj.id} draggableId={obj.id} index={index}>
                {(Draggableprovided) => (

                  <Field
                    ref={Draggableprovided.innerRef}
                    {...Draggableprovided.draggableProps}
                    {...Draggableprovided.dragHandleProps}
                    id={obj.id}
                    type={obj.type}
                    name={obj.name}
                    value={obj.value}
                  // onUpdate={handleUpdate}
                  />
                )}
              </Draggable>
            ))
            }
            {Droppableprovided.placeholder}
          </div>
        )}
      </Droppable>
      {isModalVisible && (
        <ModalHeading
          title="Image Preview"
          details={selectedImageName}
          onConfirm={() => setIsModalVisible(false)}
        />
      )}
    </div>
  </DragDropContext>
);
}
export default TextEditor;
