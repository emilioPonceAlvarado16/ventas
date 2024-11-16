// src/contexts/ChatContext.js
import React, { createContext, useState, useContext, useMemo } from 'react';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [chatPosition, setChatPosition] = useState({ x: 0, y: 0 }); // Default position

    // Memorizar el valor del contexto para evitar recrearlo en cada render
    const value = useMemo(() => ({
        messages,
        setMessages,
        newMessage,
        setNewMessage,
        chatPosition,
        setChatPosition
    }), [messages, setMessages, newMessage, setNewMessage, chatPosition, setChatPosition]);

    return (
        <ChatContext.Provider value={value}>
            {children}
        </ChatContext.Provider>
    );
}

export const useChat = () => {
    const context = useContext(ChatContext);
    if (!context) {
        throw new Error("useChat must be used within a ChatProvider");
    }
    return context;
}
