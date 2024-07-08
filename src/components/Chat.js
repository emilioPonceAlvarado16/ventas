import React, { useState, useEffect, useRef } from "react";
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
    maxHeight: "600px", // Fixed max height
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    backgroundColor: "#333",
    position: "fixed",
    bottom: "20px",
    right: "20px",
    transition: "all 0.3s ease", // Smooth transition for expanding/collapsing
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
  avatar: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    marginRight: "10px",
  },
  expandIcon: {
    cursor: "pointer",
    color: "#fff",
    display: "flex",
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
  const visualizePrompt = props.visualizePrompt || {isMinimized: false}
  const {isMinimized} = props.visualizePrompt
  const setVisualizePrompt=props.setVisualizePrompt || null
  const messageRef = useRef(null);
  const selectedText = props.selectedText;

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollTop = messageRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    setNewMessage(selectedText);
  }, [selectedText, setNewMessage]);

  const sendMessage = () => {
    if (newMessage.trim() === "") return;
    setMessages([...messages, { text: newMessage, sender: "you" }]);
    setNewMessage("");
  };

  const toggleMinimize = () => {
    setVisualizePrompt({...visualizePrompt, isMinimized: !isMinimized})
  };
  useEffect(() => {
    setNewMessage(selectedText);
  }, [selectedText, setNewMessage]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && !isMinimized) {
        toggleMinimize();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isMinimized]); // Solo añadirá el listener cuando esté expandido

  return (
    <Draggable
      handle=".handle"
      disabled={isMinimized}
      position={chatPosition}
      onStop={(e, data) => setChatPosition({ x: data.x, y: data.y })}
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
        >
          {isMinimized ? (
            <SvgIcons type="expand" onClick={toggleMinimize} style={styles.expandIcon} />
          ) : (
            "ChatGPT4 - Drag and Drop"
          )}
          {isMinimized ? null : (
            <SvgIcons
              type="collapse"
              style={styles.expandIcon}
              onClick={toggleMinimize}
            />
          )}
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
              <input
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
