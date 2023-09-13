import React from 'react'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Field from './Field';


export default function draggableComponent(props) {
    const fields=props.fields || []
    const reorder= props.reorder || null
    const setFields= props.setFields || null
    const setLoading= props.setLoading || null
    const loading=props.loading ||  false
    const deleteField=props.deleteField ||  null
    const setSuccess=props.setSuccess ||  null
    const changeFieldValue=props.changeFieldValue ||  null



    return (
        <>
            <DragDropContext
                onDragEnd={(result) => {
                    const { source, destination } = result;
                    if (!result) {
                        return;
                    }
                    if (destination === null) {
                        return;
                    }

                    var fieldss = fields;
                    fieldss = reorder(fieldss, source.index, destination.index);

                    if (
                        source.index === destination.index &&
                        source.droppableId === destination.droppableId
                    ) {
                        return;
                    }
                    setFields(fieldss);
                    setLoading(false);
                    setSuccess(false)

                }}
            >
                <div style={{ display: 'flex', background: '#2c2c2c', height: '100vh', borderRadius: '5px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>
                   
                    <Droppable droppableId="tasks">
                        {(droppableProvided) => (
                            <div
                                {...droppableProvided.droppableProps}
                                ref={droppableProvided.innerRef}
                               
                            >
                                {fields.length == 0 ? (
                                    <span style={{ opacity: "50%" }}>
                                        campos inexistentes!
                                    </span>
                                ) : (
                                    fields.map((field, index) => (
                                        <Draggable
                                            key={field.id}
                                            draggableId={field.id + ""}
                                            index={index}
                                        >
                                            {(draggableProvided) => (
                                                <div
                                                    {...draggableProvided.draggableProps}
                                                    ref={draggableProvided.innerRef}
                                                    {...draggableProvided.dragHandleProps}
                                                >
                                                        <Field
                                                            type={field.type}
                                                            value={field.value}
                                                            index={index}
                                                            change={(e) => {
                                                                e.stopPropagation();
                                                                changeFieldValue(field.id, e);
                                                            }}
                                                            deleteField={deleteField}
                                                        ></Field>
                                                    
                                                </div>
                                            )}
                                        </Draggable>
                                    ))
                                )}
                                {droppableProvided.placeholder}
                                <br></br>
                                <div className="row">
                                    {loading ? console.log("hi") : <></>}
                                </div>
                            </div>
                        )}
                    </Droppable>
                </div>
            </DragDropContext>
        </>

    )
}
