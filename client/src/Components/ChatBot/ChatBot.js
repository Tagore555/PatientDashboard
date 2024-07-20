import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.css'; // Import CSS for styling (create ChatBot.css file)

function ChatBot() {
    const [messages, setMessages] = useState([]);
    axios.defaults.withCredentials = true;
    const handleSubmit = async (e) => {
        e.preventDefault();
        const prompt = e.target.elements.prompt.value;
        if (!prompt) return; // Prevent empty submission

        try {
            const res1 = await axios.post('http://localhost:5000/chatbot', { prompt });
            const response = res1.data.response;
            console.log(response);
            try {
                const res2 = await axios.get('http://localhost:5000/login/hello');
                const { patient_id, doctor_id } = res2.data; 
                await axios.post('http://localhost:5000/individualUserData', { patient_id, doctor_id,prompt, response });
            } catch (error) {
                console.error('Error:', error);
                const errorMessage = { type: 'error', text: 'Error retrieving data', timestamp: new Date() };
                setMessages(prevMessages => [...prevMessages, errorMessage]);
            }
            const newMessage = { type: 'user', text: prompt, timestamp: new Date() };
            const botMessage = { type: 'bot', text: response, timestamp: new Date() };

            setMessages(prevMessages => [...prevMessages, newMessage, botMessage]);
        } catch (error) {
            console.error('Error:', error);
            const errorMessage = { type: 'error', text: 'Error generating response', timestamp: new Date() };
            setMessages(prevMessages => [...prevMessages, errorMessage]);
        }

        // Clear input after submission
        e.target.elements.prompt.value = '';
    };

    return (
        <div className="chatbot-container">
            <h1 className="chatbot-title">Chatbot Example</h1>
            <div className="chatbot-messages">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.type === 'user' ? 'user' : 'bot'}`}>
                        <div className="message-text">{message.text}</div>
                        <div className="message-timestamp">{formatTimestamp(message.timestamp)}</div>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit} className="chatbot-form">
                <input
                    type="text"
                    name="prompt"
                    placeholder="Enter your message..."
                    className="chatbot-input"
                    autoComplete="off"
                    required
                />
                <button type="submit" className="chatbot-submit">Submit</button>
            </form>
        </div>
    );
}

function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    // const day = date.getDate().toString().padStart(2, '0');
    // const month = (date.getMonth() + 1).toString().padStart(2, '0');
    // const year = date.getFullYear().toString();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

export default ChatBot;
