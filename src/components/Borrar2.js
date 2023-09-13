import React, { useState, useRef } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import axios from "axios";
import DraggableComponent from "./draggableComponent";
import Menu from "./menu";


const App = () => {
    const textareaElement = useRef(null);


    const [fields, setFields] = useState([]);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [cx, setCx] = useState(0);
    const [cy, setCy] = useState(0);
    const [buttonsStyle, setButtonsStyle] = useState({ visibility: "hidden" });
    const [visualizer, setVisualizer] = useState(true);
    const [selectedText, setSelectedText] = useState("");
    const [allText, setAllText] = useState(`What is Lorem Ipsum?
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    
    Why do we use it?
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
    
    
    Where does it come from?`);

    const title = "Título";
    const paragraph = "Párrafo";
    const subtitle = "Subtitulo";
    const imageTitle = "Titulo d´ Imagen";
    const literal = "Literal";

    const switchVisualizer = () => {

        setButtonsStyle(!buttonsStyle)

    };
    const reorder = (list, startIndex, endIndex) => {
        const result = [...list];
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };


    const deleteField = (index, e) => {
        const updatedText = allText + '\n\n' + fields[index].value;
        const fields_ = [...fields];
        fields_.splice(index, 1);
        setFields(fields_)
        setAllText(updatedText)
    };

    const exportToWord = (obj) => {
        const buffer = Buffer.from(obj, "base64");
        const blob = new Blob([buffer], {
            type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        });
        let url = window.URL
            ? window.URL.createObjectURL(blob)
            : window.webkitURL.createObjectURL(blob);

        let a = document.createElement("a");
        a.href = url;
        a.download = "https://s3.us-east-1.amazonaws.com/formatmaker.com/carga_masiva.docx?response-content-disposition=inline&X-Amz-Security-Token=...";
        a.click();
    };

    const processData = () => {
        const url = "http://localhost:5000/";
        const currentState = {
            fields, loading, success, cx, cy, buttonsStyle, visualizer, selectedText, allText
        };

        axios.post(url, currentState).then((response) => {
            setLoading(false); // Directamente actualizamos el estado de 'loading'

            if (response.status === 200) {
                console.log(response.data.body);
                setSuccess(true); // Directamente actualizamos el estado de 'success'
            }
        });
    };
    const popup = () => {
        let start = textareaElement.current.selectionStart;
        let end = textareaElement.current.selectionEnd;
        let all = textareaElement.current.value.substring(start, end).trim();

        let visible = "visible";
        if (all.length === 0) {
            visible = "hidden";
        }

        let style = {
            position: "absolute",
            visibility: visible,
            left: cx + "px",
            top: cy + "px",
        };

        setButtonsStyle(style);
        setSelectedText(all);
    };

    const addNewField = (type, valor, e) => {
        if (selectedText.length === 0) {
            return;
        }

        let st = textareaElement.current.selectionStart;
        let ed = textareaElement.current.selectionEnd;
        let startString = textareaElement.current.value.substring(0, st).trim();
        let endString = textareaElement.current.value.substring(ed, allText.length).trim();
        let total = startString + endString;

        let typeShortcut = "";
        let option = "";

        const typeMapping = {
            [paragraph]: ["pa", paragraph],
            [title]: ["ti", title],
            [subtitle]: ["sb", subtitle],
            [imageTitle]: ["im", imageTitle],
            [literal]: ["li", literal]
        };

        if (typeMapping[type]) {
            [typeShortcut, option] = typeMapping[type];
        }

        if (typeShortcut !== "") {
            let newId = fields.length ? Math.max(...fields.map(field => field.id)) + 1 : 1;

            const newField = {
                id: newId,
                name: option,
                value: valor,
                type: typeShortcut,
            };

            setFields(prevFields => [...prevFields, newField]);
            setAllText(total);
            setSelectedText("");
        }
    };

    const handleSubmit = (event) => {
        processData();
        event.preventDefault();
    };

    const changeTextArea = (e) => {
        let changeVal = e.target.value;
        setAllText(changeVal);
    };

    const changeFieldValue = (id, e) => {
        const newValue = e.target.value;
        setFields(prevFields => {
            const updatedFields = [...prevFields];
            const index = updatedFields.findIndex(field => field.id === id);

            if (index !== -1) {
                updatedFields[index] = {
                    ...updatedFields[index],
                    value: newValue
                };
            }

            return updatedFields;
        });

        setLoading(false);
        setSuccess(false);
    };
    const simon = (event) => {
        let corx = event.pageX + event.pageX * 0.1;
        let cory = event.pageY + event.pageY * 0.1;
        setCx(corx);
        setCy(cory)

         
    };

    return (
        <>
            <section className="" style={{ backgroundColor: "#F2F2F2" }}>

                <div className="row  justify-content-start  mt-5 ml-2 ">
                    <div className="bg-white col-5 col-sm-5 col-md-5 col-lg-5 p-0  ">
                       
                            <textarea
                                onChange={(e) => changeTextArea(e)}
                                ref={textareaElement}
                                className={
                                    visualizer ? "bigText " : "bigText rotador"
                                }
                                onMouseMoveCapture={(e) => {
                                    simon(e);
                                }}
                                onSelect={popup}
                                autoComplete="off"
                                value={allText}
                                style={{
                                    border: "1px solid #333",
                                    width: "100%",
                                    height: "calc( 40em + 15vh )",
                                    border: "1px solid #333",
                                    overflow: "auto",
                                    backgroundColor: "#2c2c2c",
                                    color:"white"
                                }}
                            ></textarea>
                        
                    </div>
                    <div

                        className=" col-5"
                        style={{
                            border: "1px solid #333",
                            width: "100%",
                            height: "calc( 40em + 15vh )",
                            border: "1px solid #333",
                            overflow: "auto",
                            backgroundColor: "#2c2c2c !important",
                            color:"white"
                        }}
                    >
                        
                        <DraggableComponent loading={loading} setSuccess={setSuccess}  setLoading={setLoading} fields={fields} reorder={reorder} setFields={setFields}
                            deleteField={deleteField}
                            changeFieldValue={changeFieldValue}
                        />
                    </div>
                </div>
                <Menu buttonsStyle={buttonsStyle} addNewField={addNewField} selectedText={selectedText} paragraph={paragraph} subtitle={subtitle}
                    literal={literal}
                    title={title}
                    imageTitle={imageTitle}
                />
             
                <div className="row justify-content-center">
                    {loading ? (
                        <button
                            type="submit"
                            className="btn-primary is-loading is-primary is-large"
                            disabled={true}
                        >
                            Convertir
                        </button>
                    ) : (
                        fields.length !== 0 && (
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className="btn-primary is-medium"
                            >
                                Convertir
                            </button>
                        )
                    )}
                </div>
            </section>
            <button className="btn-primary" onClick={switchVisualizer}>
                visualizer
            </button>
        </>
    );
};

export default App;
