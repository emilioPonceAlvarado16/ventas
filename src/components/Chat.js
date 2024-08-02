import React, { useEffect, useRef } from "react";
import Avatar from "./avatarName";
import SvgIcons from "./svgIcons";
import { useChat } from "@/contexts/ChatContext";
import Draggable from "react-draggable";

const styles = {
  chatContainer: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    width: "500px",
    minHeight: "50px",
    maxHeight: "600px",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    backgroundColor: "#333",
    position: "fixed",
    bottom: "20px",
    right: "20px",
    transition: "all 0.3s ease",
    opacity:"90%"
  },
  collapsedContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "5px 10px",
    cursor: "pointer",
    color: "white",
    backgroundColor: "#222",
    borderRadius: "10px 10px 0 0",
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
  },
  messageArea: {
    flex: 1,
    padding: "10px",
    overflowY: "scroll",
    color: "#fff",
  },
  inputArea: {
    display: "flex",
    borderTop: "1px solid #ccc",
    padding: "10px",
    backgroundColor: "#444",
  },
  input: {
    flex: 1,
    border: "none",
    borderRadius: "20px",
    padding: "8px",
    color: "#fff",
    backgroundColor: "#333",
  },
  sendButton: {
    marginLeft: "5px",
    backgroundColor: "#5cb85c",
    border: "none",
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  expandIcon: {
    cursor: "pointer",
    color: "#fff",
    marginRight: "5px",  // Espacio entre los íconos
  },
};

export default function Chat(props) {
  const {
    messages,
    setMessages,
    newMessage,
    setNewMessage,
    chatPosition,
    setChatPosition,
  } = useChat();
  const visualizePrompt = props.visualizePrompt || {isMinimized: false};
  const {isMinimized} = props.visualizePrompt;
  const setVisualizePrompt = props.setVisualizePrompt || null;
  const messageRef = useRef(null);
  const inputRef = useRef(null);
  const selectedText = props.selectedText;

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollTop = messageRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = "0px"; // Reset height
      const newHeight = inputRef.current.scrollHeight;
      inputRef.current.style.height = `${newHeight}px`; // Set to new height
    }
  }, [newMessage]);

  useEffect(() => {
    setNewMessage(selectedText);
  }, [selectedText, setNewMessage]);

  const sendMessage = () => {
    if (newMessage.trim() === "") return;
    setMessages([...messages, { text: newMessage, sender: "you" }]);
    setNewMessage("");
  };

  const toggleMinimize = () => {
    setVisualizePrompt({ ...visualizePrompt, isMinimized: !isMinimized });
    // console.log("la ventana es ", window.innerHeight, " y el tope es ", window.innerHeight - 600,"y la posicion en Y es ", chatPosition.y )
    console.log("la ventana es ", window.innerWidth, " y el tope es ", window.innerWidth - 500, "y la posicion en X es ", chatPosition.x )
    if (!isMinimized) { 
      setChatPosition({ ...chatPosition, y: 0 })
    } else {
      if ((Math.abs(chatPosition.y) + 620) >= window.innerHeight) {
          console.log("excedió") 
          setChatPosition({  ...chatPosition, y: 0 })
      }
    }

      
  };
  const onClose = () => {
    event.stopPropagation();
    setVisualizePrompt({...visualizePrompt, isPromptOpen: false});
  };

    useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && !isMinimized) {
        toggleMinimize();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isMinimized]); // Solo añadirá el listener cuando esté expandido

  // const onStop = (e, data) => {
  //   // console.log("en x queda igual a ", data.x, "x el ancho es", window.innerWidth)
  //   console.log("en y queda igual a ", data.y, "y el alto es", window.innerHeight)
  //   const extremoIzquierda = data.x > 0
  //   const extremoDerecha = Math.abs(data.x) + 600 > window.innerWidth
  //   const extremoAlto = Math.abs(data.y) + 600 > window.innerHeight
  //   const extremoBajo = data.y > 0

  //   const esquinas = {
  //       "esquinaInferiorDerecha": extremoDerecha && extremoBajo,
  //       "esquinaSuperiorDerecha": extremoDerecha && extremoAlto,
  //       "esquinaSuperiorIzquierda": extremoIzquierda && extremoAlto,
  //       "esquinaInferiorIzquierda": extremoIzquierda && extremoBajo,
  //   }

  //   const mapperCorrection = {
  //     "esquinaInferiorDerecha": () => setChatPosition({  x: 0, y: 0 }),
  //     "esquinaSuperiorDerecha": () => setChatPosition({  x: 0, y: window.innerHeight - 500}),
  //     "esquinaSuperiorIzquierda": () => setChatPosition({ y: window.innerHeight - 500, x: data.x + 220 }),
  //     "esquinaInferiorIzquierda": () => setChatPosition({ ...chatPosition, x: data.x + 220 }),
  //   }

  //   const correctDragDrop = () => {
  //     Object.keys(esquinas).forEach((key) => {
  //       if (esquinas[key]) {
  //         mapperCorrection[key]
  //       }
  //     })
  //   }
  //   correctDragDrop()

  //   setChatPosition({ x: data.x, y: data.y }) //sino entra ningun
  //   // // eje en x
  //   // if (Math.abs(data.x) + 600 > window.innerWidth) {
  //   //   setChatPosition({ ...chatPosition, x: data.x + 220 })//derecha
  //   // } else if (data.x > 0) {// izquierda
  //   //   setChatPosition({ ...chatPosition, x: 0 })
  //   // }
    
  //   // // eje en y
  //   // if (Math.abs(data.y) + 600 > window.innerHeight) {//alto
  //   //   setChatPosition({ ...chatPosition, y: data.y + 100 })
  //   // // } else if (data.y + 500 > window.innerHeight) {
  //   // } else if (data.y > 0) {//bajo
  //   // // } if (data.y > 0) {
  //   //   setChatPosition({ ...chatPosition, y: 0 })
  //   // }
      
  //   //   else {
  //   //     setChatPosition({ x: data.x, y: data.y })
        
  //   //   }
      
  // }

  // const onStop = (e, data) => {
  //   const chatWidth = 500; // ancho del chat es de 500px
  //   const chatHeight = 600; // la altura del chat es de 600px

  //   // Calcular los límites extremos
  //   const extremoDerecha = data.x + chatWidth > window.innerWidth;
  //   const extremoIzquierda = data.x < 0;
  //   const extremoBajo = data.y + chatHeight > window.innerHeight;
  //   const extremoAlto = data.y < 0;

  //   //data.x en el extremo derecho es 0 y se hace negativo cuando va hacia la izquierda
  //   //data.y en el extremo inferior es 0 y se hace negativo cuando va hacia la izquierda
  //   if (extremoDerecha) {
  //     data.x = window.innerWidth - chatWidth; // borde derecho
  //   }
  //   if (extremoIzquierda) {
  //     data.x = 0; // borde izquierdo
  //   }
  //   if (extremoBajo) {
  //     data.y = window.innerHeight - chatHeight; // el borde inferior
  //   }
  //   if (extremoAlto) {
  //     data.y = 0; // el borde superior
  //   }

  //   // Establecer la nueva posición corregida
  //   setChatPosition({ x: data.x, y: data.y });
  // }



  // cdmc

  const onStop = (e, data) => {
    const chatWidth = 500; // Ancho del chat es de 500px
    const chatHeight = 600; // Altura del chat es de 600px

    // Calcular los límites extremos
    const extremoDerecha = data.x + chatWidth > window.innerWidth;
    const extremoIzquierda = data.x < 0;
    const extremoBajo = data.y + chatHeight > window.innerHeight;
    const extremoAlto = data.y < 0;

    // Corregir la posición según los límites detectados
    if (extremoDerecha) {
      // Si el chat se extiende más allá del borde derecho de la ventana, ajustar `data.x` para que el chat no desaparezca
      data.x = data.x + chatWidth; // Ajustar al borde derecho
    }
    if (extremoIzquierda) {
      // Si el chat se extiende más allá del borde izquierdo de la ventana, ajustar `data.x` a 0
      data.x = 0; // Ajustar al borde izquierdo
    }
    if (extremoBajo) {
      // Si el chat se extiende más allá del borde inferior de la ventana, ajustar `data.y` para que el chat no desaparezca
      // data.y = window.innerHeight - chatHeight; // Ajustar al borde inferior
      data.y = data.y - chatHeight; // Ajustar al borde inferior
    }
    if (extremoAlto) {
      // Si el chat se extiende más allá del borde superior de la ventana, ajustar `data.y` a 0
      data.y = 0; // Ajustar al borde superior
    }

    // Establecer la nueva posición corregida del chat
    setChatPosition({ x: data.x, y: data.y });
  }

  return (
    <Draggable
      handle=".handle"
      position={chatPosition}
      onStop={(e, data)=>onStop(e, data)}
    >
      <div
        style={{
          ...styles.chatContainer,
          height: isMinimized ? "50px" : "600px",
          width: isMinimized ? "320px" : styles.chatContainer.width,
        }}
      >
        <div
          className="handle"
          style={styles.collapsedContainer}
          onClick={isMinimized ? toggleMinimize : null}
          onDoubleClick={isMinimized ? null : toggleMinimize}
        >
          {!isMinimized && <span>ChatGPT4 - Drag and Drop</span>}
          <div style={styles.iconContainer}>
            {isMinimized ? (
              <SvgIcons type="expand" onClick={toggleMinimize} style={styles.expandIcon} />
            ) : (
                <>
                <SvgIcons type="collapse" onClick={toggleMinimize} style={styles.expandIcon} />
                <SvgIcons type="close" onClick={onClose} style={styles.expandIcon} />
                </>
            )}
          </div>
        </div>
        {!isMinimized && (
          <>
            <div ref={messageRef} style={styles.messageArea}>
              {messages.map((message, index) => (
                <div
                  key={index}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Avatar size="small" />
                  <div>{message.text}</div>
                </div>
              ))}
            </div>
            <div style={styles.inputArea}>
              <textarea
                ref={inputRef}
                style={styles.input}
                type="text"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              />
              <button style={styles.sendButton} onClick={sendMessage}>
                <SvgIcons type="send" />
              </button>
            </div>
          </>
        )}
      </div>
    </Draggable>
  );
}
