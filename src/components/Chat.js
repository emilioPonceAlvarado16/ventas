import React, { useState, useEffect, useRef } from 'react';
import Avatar from './avatarName';
import SvgIcons from './svgIcons';
import { useChat } from '@/contexts/ChatContext';


const styles = {
    chatContainer: {
        border: '1px solid #ccc',
        borderRadius: '5px',
        width: '50vw',
        height: '500px',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        backgroundColor: '#333'  // Fondo oscuro
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
      yourMessage: {
        background: '#555',  // Gris
        padding: '10px',
        borderRadius: '10px',
        color: 'white',
        maxWidth: '70%',
        alignSelf: 'flex-end',
        marginBottom: '5px'
      },
      otherMessage: {
        background: '#777',  // Gris un poco más claro
        padding: '10px',
        borderRadius: '10px',
        color: 'white',
        maxWidth: '70%',
        marginBottom: '5px'
      },
      avatar: {
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        marginRight: '10px',
      
  }
};

export default function Chat(props) {
  const { messages, setMessages, newMessage, setNewMessage } = useChat();  // <-- Aquí obtienes newMessage y setNewMessage
  // const [newMessage, setNewMessage] = useState('');
  const messageRef = useRef(null);


  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollTop = messageRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = () => {
    if (newMessage.trim() === '') return;
    setMessages([...messages, { text: newMessage, sender: 'you' }]);
    setNewMessage('');
  };


  return (
    <div style={styles.chatContainer} {...props}>
      <div ref={messageRef} style={styles.messageArea}>
        {messages.map((message, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: message.sender === 'you' ? 'row-reverse' : 'row', alignItems: 'center' }}>
            {/* <img style={styles.avatar} src={`https://yt3.googleusercontent.com/vRF8BHREiJ3Y16AbMxEi_oEuoQlnNNqGpgULuZ6zrWSAi24HcxX3Vko42RN8ToctH-G0qlWd=s900-c-k-c0x00ffffff-no-rj`} alt="avatar" /> */}
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
          <SvgIcons type="send"/>
        </button>
      </div>
    </div>
  );
}
