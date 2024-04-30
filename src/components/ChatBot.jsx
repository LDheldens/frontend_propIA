import React, { useState, useRef, useEffect } from 'react'
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa"
import { FiSend } from "react-icons/fi"

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
        <div className="flex flex-col h-80 w-120">
            <div className='bg-gray-400 flex rounded-t-lg p-2'>
                <div className='rounded-full px-4 py-[10px] bg-white'>
                    <img src="/src/assets/logo4.png" alt="" className='w-8' />
                </div>
                <h3 className='p-4 text-white'>ChatWeb</h3>
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
            <form onSubmit={handleSubmit} className="flex p-1">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="flex-1 border border-gray-300 rounded-l-lg p-2 mr-2"
                    placeholder="Escriba su mensaje..."
                />
                <button type="submit" className="bg-green-500 text-white pl-3 pr-3 rounded-r-lg p-1">
                    <FiSend />
                </button>
            </form>
            <div className='text-center inset-x-0 flex justify-center p-1'>
                <ul className='justify-center flex text-green-600 text-xl  p-1 pl-5 pr-5 rounded-lg'>
                    <li>
                        <FaFacebookF className="ml-1 " />
                    </li>
                    <li>
                        <FaYoutube className="ml-8" />
                    </li>
                    <li>
                        <FaTiktok className="ml-8" />
                    </li>
                    <li>
                        <FaInstagram className="ml-8" />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ChatBot;