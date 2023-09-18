import React, { useState } from 'react';
// import EditableElement from '@/components/EditableElement';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Field from './Field';
import FileSystem from './FileSystem';
import Modal from './Modal';


const TextEditor = (props) => {

  const [isCollapsed, setIsCollapsed] = useState(true);
  const editorObjects = props.editorObjects || []
  const setEditorObjects = props.setEditorObjects
  const assetList = props.assetList || []
  const handleOpenModal = props.handleOpenModal || null

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
      <div style={{ display: 'flex', background: '#2c2c2c', height: '100vh', width: '50vw', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>
        <FileSystem isCollapsed={isCollapsed}
          isImageModalOpen={props.isImageModalOpen}
          setImageSelected={props.setImageSelected}
          setIsImageModalOpen={props.setIsImageModalOpen}
          setIsCollapsed={setIsCollapsed}

          assetList={assetList} />
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
                      updateField={props.updateField || null}
                      setIsImageModalOpen={props.setIsImageModalOpen}
                      setImageSelected={props.setImageSelected}
                      imageSelected={props.imageSelected}
                      type={obj.type}
                      name={obj.name}
                      value={obj.value}
                      url={obj.url}
                      index={index}
                      removeField={props.removeField || null}
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
        {props.isImageModalOpen && (
          <Modal
            onClose={props.setIsImageModalOpen}
            title="Image Preview"
            details={props.selectedImageName}
            imageUrl={props.imageSelected}
          />
        )}
      </div>
    </DragDropContext>
  );
}
export default TextEditor;
