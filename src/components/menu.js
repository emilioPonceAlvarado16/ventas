import React from 'react'

export default function menu(props) {

    const buttonsStyle=props.buttonsStyle
    const addNewField=props.addNewField
    const selectedText=props.selectedText || ""
    const imageTitle=props.imageTitle || ""
    const paragraph=props.paragraph || ""
    const subtitle=props.subtitle
    const title=props.title
    const literal=props.literal

     
  return (
    <div className="row">
                    <div className="columns is-gapless is-center">
                        <div className="type_buttons" style={buttonsStyle}>
                            <button
                                className="button is-danger  is-normal"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    addNewField(title, selectedText);
                                    e.stopPropagation();
                                    e.preventDefault();
                                }}
                                style={{ fontSize: "14px", opacity: "95%" }}
                            >
                                Titulo
                            </button>
                            <button
                                className="button is-danger is-normal"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    addNewField(paragraph, selectedText);
                                    e.stopPropagation();
                                    e.preventDefault();
                                }}
                                style={{ fontSize: "14px", opacity: "95%" }}
                            >
                                Parrafo
                            </button>
                            <button
                                className="button is-danger  is-normal"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    addNewField(subtitle, selectedText);
                                    e.stopPropagation();
                                    e.preventDefault();
                                }}
                                style={{ fontSize: "14px", opacity: "95%" }}
                            >
                                Subtitulo
                            </button>
                            <button
                                className="button is-danger  is-normal"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    addNewField(literal, selectedText);
                                    e.stopPropagation();
                                    e.preventDefault();
                                }}
                                style={{ fontSize: "14px", opacity: "95%" }}
                            >
                                Literal
                            </button>
                            <button
                                className="button is-danger  is-normal"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    addNewField(imageTitle, selectedText);
                                    e.stopPropagation();
                                    e.preventDefault();
                                }}
                                style={{ fontSize: "14px", opacity: "95%" }}
                            >
                                Titulo de imagen
                            </button>
                        </div>
                    </div>
                </div>
  )
}
