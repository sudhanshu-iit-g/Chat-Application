import React, { useEffect, useState, useRef } from 'react';
import socketIo from 'socket.io-client';
import { user } from '../Join/Join'; // Make sure this import is correct
import './Chat.css';
import sendLogo from '../../images/send.png';
import Message from '../Message/Message';
import ReactScrollToBottom from 'react-scroll-to-bottom';
import closeIcon from '../../images/closeIcon.png';

const ENDPOINT = "http://localhost:3000"; // Adjust if your server runs on a different endpoint

const Chat = () => {
    const [id, setId] = useState('');
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const socketRef = useRef(null);

    useEffect(() => {
        // Initialize socket when component mounts
        socketRef.current = socketIo(ENDPOINT, { transports: ['websocket'] });

        // Event listeners for socket events
        socketRef.current.on('connect', () => {
            console.log('Connected');
            setId(socketRef.current.id);
            socketRef.current.emit('joined', { user }); // Emit joined event with user info
        });

        socketRef.current.on('welcome', (data) => {
            setMessages(prevMessages => [...prevMessages, data]);
        });

        socketRef.current.on('userJoined', (data) => {
            setMessages(prevMessages => [...prevMessages, data]);
        });

        socketRef.current.on('leave', (data) => {
            setMessages(prevMessages => [...prevMessages, data]);
        });

        socketRef.current.on('sendMessage', (data) => {
            setMessages(prevMessages => [...prevMessages, data]);
        });

        // Clean up function to disconnect socket and remove event listeners
        return () => {
            if (socketRef.current) {
                socketRef.current.emit('disconnected');
                socketRef.current.off();
                socketRef.current.disconnect();
            }
        };
    }, []); // Empty dependency array ensures useEffect runs only once

    const send = () => {
        if (inputValue.trim() && socketRef.current) {
            socketRef.current.emit('message', { message: inputValue, id }); // Emit message event with message and user ID
            setInputValue(''); // Clear input field
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            send();
        }
    };

    return (
        <div className="chatPage">
            <div className="chatContainer">
                <div className="header">
                    <h2>CHAT_IT_OUT</h2>
                    <a href="/"><img src={closeIcon} alt="Close" /></a>
                </div>
                <ReactScrollToBottom className="chatBox">
                    {messages.map((item, i) => (
                        <Message
                            key={i}
                            user={item.id === id ? '' : item.user}
                            message={item.message}
                            classs={item.id === id ? 'right' : 'left'}
                        />
                    ))}
                </ReactScrollToBottom>
                <div className="inputBox">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        id="chatInput"
                    />
                    <button onClick={send} className="sendBtn">
                        <img src={sendLogo} alt="Send" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chat;
