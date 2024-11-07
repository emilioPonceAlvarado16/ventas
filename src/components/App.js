import React, { useState, useRef } from "react";
import Menu from "./Menu";


const App = (props) => {
  
    const { fields,addField, allText,setAllText} = props;

    const textareaElement = useRef(null);
    // const [fields, setFields] = useState([]);
    const [cx, setCx] = useState(0);
    const [cy, setCy] = useState(0);
    const [buttonsStyle, setButtonsStyle] = useState({ visibility: "hidden", position:"absolute",top:"20%" });
    const [selectedText, setSelectedText] = useState("");

    // const [allText, setAllText] = useState(`What is Lorem Ipsum?
    // Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    
    // Why do we use it?
    // It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
    
    
    // Where does it come from?`);

    const title = "Título";
    const paragraph = "Párrafo";
    const subtitle = "Subtitulo";
    const imageTitle = "Titulo de Imagen";
    const literal = "Literal";



    const popup = (event) => {
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
            left: (cx+20) + "px",            
            top:(cy-220) + "px",
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
            addField(newField)

            setAllText(total);
            setSelectedText("");
        }
    };



    const changeTextArea = (e) => {
        let changeVal = e.target.value;
        setAllText(changeVal);
    };


    const simon = (event) => {
      
    setCx(event.clientX);
    let textAreaScrollTop = textareaElement.current.scrollTop;
    setCy(event.clientY + window.scrollY + textAreaScrollTop);
    };

    return (
            <div >
                <textarea
                    onChange={(e) => changeTextArea(e)}
                    ref={textareaElement}

                    onMouseMoveCapture={(e) => {
                        simon(e);
                    }}
                    onSelect={popup}
                    autoComplete="off"
                    value={allText}
                    style={{
                        width: "98%",
                        height: '100vh ',
                        overflowY: 'auto',
                        overflowX: 'hidden',
                        paddingLeft:"24px",
                        background: '#2c2c2c',
                        color: '#e5e5e5'
                    }}
                    placeholder="Copy/write text, underline and have fun..."
                ></textarea>


                <Menu buttonsStyle={buttonsStyle} addNewField={addNewField} selectedText={selectedText} paragraph={paragraph} subtitle={subtitle}
                    literal={literal}
                    title={title}
                    imageTitle={imageTitle}
                />

            </div>
    );
};

export default App;
