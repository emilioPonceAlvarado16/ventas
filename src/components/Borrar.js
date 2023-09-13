import React, { useState, useRef, useEffect } from 'react';
// import React, { useState, useEffect } from 'react';
import ModalHeading from './modalHeading';
import EditableElement from '@/components/EditableElement';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Field from './Field';
const Borrar = () => {

  const [editorObjects, setEditorObjects] = useState(
    [
      {
          "id": "1",
          "name": "Título",
          "value": "What is Lorem Ipsum?",
          "type": "ti"
      },
      {
          "id": "2",
          "name": "Párrafo",
          "value": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          "type": "pa"
      },
      {
          "id": "3",
          "name": "Título",
          "value": "Why do we use it?",
          "type": "ti"
      },
      {
          "id": "4",
          "name": "Párrafo",
          "value": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          "type": "pa"
      },
      {
          "id": "5",
          "name": "Título",
          "value": "Where does it come from?",
          "type": "ti"
      }
  ]


);


 





  const lineHeightStyle = '20px';
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

  
  return (
    <DragDropContext onDragEnd={onDragEnd}>
    <div style={{ display: 'flex', background: '#2c2c2c', height: '100vh', width: '50vw', borderRadius: '5px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>
      {/* <div ref={lineNumberRef} style={{ width: '50px', lineHeight: lineHeightStyle, background: '#1a1a1a', padding: '10px 5px', color: '#b5b5b5', borderRight: '1px solid #aaa', overflowY: 'hidden' }}> */}
      <div style={{ width: '50px', lineHeight: lineHeightStyle, background: '#1a1a1a', padding: '10px 5px', color: '#b5b5b5', borderRight: '1px solid #aaa', overflowY: 'hidden' }}>
   
      </div>
       
        <Droppable droppableId="textEditor">
          {(Droppableprovided) => (
            <div
            ref={Droppableprovided.innerRef}
              {...Droppableprovided.droppableProps}

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
                <Draggable key={obj.id} draggableId={obj.id + ""} index={index}>
                  {(Draggableprovided) => (
                   
                      <p
                       ref={Draggableprovided.innerRef}
                       {...Draggableprovided.draggableProps}
                       {...Draggableprovided.dragHandleProps}
                       
                       id={obj.id + ""}
                        type={obj.type}
                        name={obj.name}
                        value={obj.value}
                        index={index}
                      >
                        sklddclldclcd
                      </p>
                  )}
                </Draggable>
              ))
              }
              {Droppableprovided.placeholder}
            </div>
          )}
        </Droppable>
   
    </div>
        </DragDropContext>
  );
}
export default Borrar;
