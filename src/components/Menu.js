import React from 'react'

export default function Menu(props) {
    const buttonsStyle = props.buttonsStyle
    const addNewField = props.addNewField
    const selectedText = props.selectedText || ""
    const imageTitle = props.imageTitle || ""
    const paragraph = props.paragraph || ""
    const subtitle = props.subtitle
    const title = props.title
    const literal = props.literal

    // Estilos
    const containerStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        // padding: "10px",
    }

    const buttonStyle = {
        backgroundColor: "#ff3860", // Color de fondo
        color: "#ffffff",          // Color de texto
        padding: "6px 10px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "13px",
        opacity: "95%",
        transition: "opacity 0.3s ease"
    }

    return (
        <>
            <div style={{ ...containerStyle, ...buttonsStyle }}>
                <button
                    style={buttonStyle}
                    onClick={(e) => {
                        e.stopPropagation();
                        addNewField(title, selectedText);
                        e.preventDefault();
                    }}
                >
                    Titulo
                </button>
                <button
                    style={buttonStyle}
                    onClick={(e) => {
                        e.stopPropagation();
                        addNewField(paragraph, selectedText);
                        e.preventDefault();
                    }}
                >
                    Parrafo
                </button>
                <button
                    style={buttonStyle}
                    onClick={(e) => {
                        e.stopPropagation();
                        addNewField(subtitle, selectedText);
                        e.preventDefault();
                    }}
                >
                    Subtitulo
                </button>
                <button
                    style={buttonStyle}
                    onClick={(e) => {
                        e.stopPropagation();
                        addNewField(literal, selectedText);
                        e.preventDefault();
                    }}
                >
                    Literal
                </button>
                <button
                    style={buttonStyle}
                    onClick={(e) => {
                        e.stopPropagation();
                        addNewField(imageTitle, selectedText);
                        e.preventDefault();
                    }}
                >
                    Titulo de imagen
                </button>
            </div>
        </>
    )
}
