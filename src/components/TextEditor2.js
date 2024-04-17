import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Field from './Field';
import FileSystem from './FileSystem';
import ImageResizeModal from './ImageResizerModal';


const TextEditor = (props) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const editorObjects = props.editorObjects || []
  const setEditorObjects = props.setEditorObjects
  const foundedField=props.foundedField || 0

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

  const renderPagination = () => {
    const totalPages = Math.ceil(props.totalItems / props.itemsPerPage);
    const currentSetStart = Math.floor((props.currentPage - 1) / 10) * 10 + 1;
    const currentSetEnd = Math.min(currentSetStart + 9, totalPages);
  
    const pageNumbers = Array.from({ length: currentSetEnd - currentSetStart + 1 }, (_, i) => currentSetStart + i);
    if(totalPages<2)return null
    return (
      <div style={{ position: 'absolute', top: "-4.5vh", right: "65vw", width: '25%', zIndex: 1000 }}>
        {!props.showTemplates &&
          <nav>
            <ul className='pagination'>
              {/* Botón para ir a la página anterior */}
              {props.currentPage > 1 && (
                <li className='page-item'>
                  <a onClick={() => props.paginate(props.currentPage - 1)} className='page-link'>&laquo;</a>
                </li>
              )}
    
              {/* Números de página */}
              {pageNumbers.map(number => (
                <li key={number} className={`page-item ${props.currentPage === number ? 'active' : ''} ${number > totalPages ? 'disabled' : ''}`}>
                  <a onClick={() => props.paginate(number)} className='page-link'>
                    {number}
                  </a>
                </li>
              ))}
    
              {/* Botón para ir a la página siguiente */}
              {props.currentPage < totalPages && (
                <li className='page-item'>
                  <a onClick={() => props.paginate(props.currentPage + 1)} className='page-link'>&raquo;</a>
                </li>
              )}
            </ul>
          </nav>
        }
      </div>
    );
  };
const findPageOfField = (fieldId) => {
  const numericFieldId = Number(fieldId); // Convierte fieldId a número
  console.log("Buscando ID:", numericFieldId); // Debugging: verifica el ID que buscas
  // console.log("All Fields:", JSON.stringify(props.allFields)); // Debugging: verifica la estructura de allFields

  const fieldIndex = props.allFields.findIndex(obj => obj.id === numericFieldId);
  console.log("Índice encontrado:", fieldIndex); // Debugging: verifica el índice encontrado

  if (fieldIndex === -1) return null;
  return Math.ceil((fieldIndex + 1) / props.itemsPerPage);
};

  // Efecto que se ejecuta cuando foundedField cambia
 useEffect(() => {
    const page = findPageOfField(foundedField);
    if (page && page !== props.currentPage) {
        props.paginate(page);
    }
}, [foundedField]);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {renderPagination()}
      <div style={{ display: 'flex', background: '#2c2c2c', height: '100vh', width: '50vw', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>
        <FileSystem isCollapsed={isCollapsed}
          isImageModalOpen={props.isImageModalOpen}
          setImageSelected={props.setImageSelected}
          imageSelected={props.imageSelected}
          setIsImageModalOpen={props.setIsImageModalOpen}
          setIsCollapsed={setIsCollapsed}
          fields={props.allFields}/>
          
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
                <Draggable key={obj.id} draggableId={obj.id} index={index}>
                  {(Draggableprovided) => (

                    <Field
                      ref={Draggableprovided.innerRef}
                      {...Draggableprovided.draggableProps}
                      {...Draggableprovided.dragHandleProps}
                      id={obj.id}
                      shouldHighlight={obj.id === foundedField}
                      updateField={props.updateField || null}
                      setIsImageModalOpen={props.setIsImageModalOpen}
                      setImageSelected={props.setImageSelected}
                      imageSelected={props.imageSelected}
                      type={obj.type}
                      value={obj.value}
                      url={obj.url}
                      index={index}
                      removeField={props.removeField || null}
                      showFieldType={props.showFieldType || false}
                      imageObj={obj}
                      setAllText={props.setAllText || null}
                      allText={props.allText || ""}
                    />
                  )}
                </Draggable>
              ))
              }
              {Droppableprovided.placeholder}
            </div>
          )}
        </Droppable>
        {props.isImageModalOpen && (
          <ImageResizeModal
            onClose={()=>props.setIsImageModalOpen(false)}
            title="Image Preview"
            imageObj={props.imageSelected}
            imageUrl={props.imageSelected?.url}
            updateField={props.updateField || null}
          />
        )}

      </div>
    </DragDropContext>
  );
}
export default TextEditor;
