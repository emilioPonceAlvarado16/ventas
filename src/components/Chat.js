import React, { useState, useEffect, useRef } from 'react';
import Avatar from './avatarName';
import SvgIcons from './svgIcons';
import { useChat } from '@/contexts/ChatContext';
import Draggable from 'react-draggable';

const styles = {
    chatContainer: {
        border: '1px solid #ccc',
        borderRadius: '5px',
        width: '50vw',
        minWidth: '300px',  
        minHeight: '300px',
        height: '500px',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        backgroundColor: '#333',  // Fondo oscuro
        resize: 'both', // Permitir redimensionamiento
        overflow: 'auto' // Asegurar el contenido es accesible aún al redimensionar
  },
  collapsedContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '2px 5px', 
        // padding: '5px',
        cursor: 'pointer',
        color: 'white',
        backgroundColor: '#222'
    },
    messageArea: {
        flex: 1,
        padding: '10px',
        overflowY: 'scroll',
        color: '#fff'  // Texto en blanco
    },
    inputArea: {
        display: 'flex',
        borderTop: '1px solid #ccc'
    },
    input: {
        flex: 1,
        padding: '10px',
        border: 'none',
        borderRadius: '0',
        color: '#fff',  // Texto en blanco
        backgroundColor: '#444'  // Fondo de entrada ligeramente más claro que el contenedor
    },
    sendButton: {
        padding: '10px',
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        color: '#fff'  // Icono en blanco
    },
    avatar: {
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        marginRight: '10px',
    }
};
export default function Chat(props) {
    const { messages, setMessages, newMessage, setNewMessage } = useChat();
    const [isMinimized, setIsMinimized] = useState(false);
    const messageRef = useRef(null);
    const selectedText = props.selectedText;

    useEffect(() => {
        if (messageRef.current) {
            messageRef.current.scrollTop = messageRef.current.scrollHeight;
        }
    }, [messages]);

    useEffect(() => {
        setNewMessage(selectedText);  // Set the message input to the selected text
    }, [selectedText, setNewMessage]);

    const sendMessage = () => {
        if (newMessage.trim() === '') return;
        setMessages([...messages, { text: newMessage, sender: 'you' }]);
        setNewMessage('');
    };

    const toggleMinimize = () => {
        setIsMinimized(!isMinimized);
    };

    return (
        <Draggable handle=".handle">
            <div style={{ ...styles.chatContainer, height: isMinimized ? '25px' : '500px', width: isMinimized ? '10vw' : '50vw', minHeight: isMinimized ? '25px' : '300px'  }}>
                <div className="handle"  style={styles.collapsedContainer} onDoubleClick={toggleMinimize}>
                  Drag here to move
                  <SvgIcons type={isMinimized ? 'expand' : 'collapse'} style={styles.expandIcon} onClick={toggleMinimize} />
                </div>
           
                {!isMinimized && (
                    <>
                        <div ref={messageRef} style={styles.messageArea}>
                            {messages.map((message, index) => (
                                <div key={index} style={{ display: 'flex', flexDirection: message.sender === 'you' ? 'row-reverse' : 'row', alignItems: 'center' }}>
                                    <Avatar size="small" />
                                    <div style={message.sender === 'you' ? styles.yourMessage : styles.otherMessage}>
                                        {message.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div style={styles.inputArea}>
                            <input
                                style={styles.input}
                                type="text"
                                placeholder="Escribe un mensaje..."
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
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