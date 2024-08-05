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
    if (!isMinimized) { 
      setChatPosition({ ...chatPosition, y: 0 })
    } else {
      if ((Math.abs(chatPosition.y) + 620) >= window.innerHeight) {
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

  const onStop = (e, data) => {
    const chatWidth = 500; // Ancho del chat es de 500px
    const chatHeight = 600; // Altura del chat es de 600px

    // Calculando los límites extremos
    let coorX = - data.x
    let coorY = - data.y
    const extremoIzquierda = coorX + chatWidth >= window.innerWidth ;
    const extremoDerecha = coorX < 0;
    const extremoAlto  = coorY + chatHeight >= window.innerHeight;
    const extremoBajo = coorY < 0;


    // Corregir la posición en caso de tocar alguno de estos extremos
    if (extremoIzquierda) {
      // Si el chat se extiende más allá del borde derecho de la ventana
      coorX = coorX - Math.abs(chatWidth - window.innerHeight); 
    }
    // if (extremoIzquierda) {
    if (extremoDerecha) {
      // Si el chat se extiende más allá del borde derecho de la ventana, ajustar `data.x` para que el chat no desaparezca
      coorX = 0;  // Ajustando al borde derecho
    }
    if (extremoAlto) {
      // Si el chat se extiende más allá del borde superior de la ventana, ajustar `data.y` a 0
      coorY = coorY - Math.abs(chatHeight - window.innerHeight); // Ajustar al borde inferior
    }
    // if (extremoAlto) {
    if (extremoBajo) {
      // Si el chat se extiende más allá del borde inferior de la ventana, ajustar `data.y` para que el chat no desaparezca
      coorY = 0; // Ajustar al borde superior
    }

    // Establecer la nueva posición corregida del chat
    setChatPosition({ x: -coorX, y: -coorY });
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
                onChange={(e) => setNewMessage(e.target.value)}/>
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
