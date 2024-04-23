import React, { useState, useRef, useEffect } from 'react';

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            setMessages([...messages, { text: inputValue, sender: 'user' }]);
            setInputValue('');
            // Aquí puedes agregar la lógica para obtener la respuesta del bot
            const botResponse = 'Esta es una respuesta de prueba del bot';
            setMessages([...messages, { text: inputValue, sender: 'user' }, { text: botResponse, sender: 'bot' }]);
        }
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="flex flex-col h-80">
            <div className='bg-gray-400 flex rounded-lg'>
                <div className='rounded-full p-2 bg-white'>
                    <img src="./src/assets/logo.png" alt="" width="50" height="10" />
                </div>
                <h3 className='p-4'>Chat CasaPaz</h3>
            </div>
            <div className="flex-1 p-4 overflow-y-auto h-80 bg-white">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`my-2 rounded-lg p-2 max-w-xs ${message.sender === 'user' ? 'bg-green-500 text-white self-end' : 'bg-gray-300 self-start'
                            }`}
                    >
                        {message.text}
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
            <form onSubmit={handleSubmit} className="flex p-4">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="flex-1 border border-gray-300 rounded-l-lg p-2 mr-2"
                    placeholder="Escribe tu mensaje..."
                />
                <button type="submit" className="bg-green-500 text-white rounded-r-lg p-2">
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default ChatBot;