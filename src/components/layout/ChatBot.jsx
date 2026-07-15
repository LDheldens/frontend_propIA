import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTiktok, FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt, FaHome } from "react-icons/fa";
import api from '../../api/client';

const PropertyCard = ({ propiedad }) => {
    return (
        <Link
            to={`/item/${propiedad.id}`}
            target="_blank"
            className="block bg-white rounded-lg shadow-md border border-gray-200 p-3 my-2 hover:shadow-lg hover:border-green-400 transition-all duration-200 max-w-xs"
        >
            <div className="flex items-center gap-2 mb-2">
                <FaHome className="text-green-500" />
                <span className="font-bold text-gray-800 text-sm">
                    {propiedad.type_property || 'Propiedad'}
                </span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full ml-auto">
                    {propiedad.type_operation || ''}
                </span>
            </div>

            <div className="flex items-center gap-1 text-gray-500 text-xs mb-2">
                <FaMapMarkerAlt />
                <span>{propiedad.adress || 'N/A'}</span>
            </div>

            <div className="flex items-center gap-1 text-gray-500 text-xs mb-2">
                <span>{propiedad.distrito || ''}, {propiedad.provincia || ''}</span>
            </div>

            <div className="flex items-center gap-3 text-xs text-gray-600 mb-2 border-t pt-2">
                <div className="flex items-center gap-1">
                    <FaBed className="text-gray-400" />
                    <span>{propiedad.bedrooms_number || '-'}</span>
                </div>
                <div className="flex items-center gap-1">
                    <FaBath className="text-gray-400" />
                    <span>{propiedad.bathrooms_number || '-'}</span>
                </div>
                <div className="flex items-center gap-1">
                    <FaRulerCombined className="text-gray-400" />
                    <span>{propiedad.area_property || '-'} m2</span>
                </div>
            </div>

            <div className="border-t pt-2">
                <span className="font-bold text-green-600 text-sm">
                    {propiedad.type_currency || ''} {propiedad.price || 'Consultar'}
                </span>
            </div>

            <div className="text-center mt-2">
                <span className="text-xs text-green-500 underline">Ver detalle</span>
            </div>
        </Link>
    );
};

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (inputValue.trim() && !isLoading) {
            const userMessage = inputValue;
            const newMessages = [...messages, { text: userMessage, sender: 'user' }];
            setMessages(newMessages);
            setInputValue('');
            setIsLoading(true);

            try {
                const { data } = await api.post('property/buscar-propiedades/', {
                    message: userMessage
                });

                if (data.error) {
                    setMessages([...newMessages, {
                        text: 'Disculpa, hubo un error procesando tu solicitud. Intenta de nuevo.',
                        sender: 'bot'
                    }]);
                } else if (data.results && data.results.length > 0) {
                    setMessages([...newMessages, {
                        text: data.message || `Encontre ${data.results.length} propiedades:`,
                        sender: 'bot'
                    }]);

                    data.results.forEach(propiedad => {
                        setMessages(prev => [...prev, {
                            type: 'property',
                            propiedad: propiedad,
                            sender: 'bot'
                        }]);
                    });
                } else {
                    const filtros = data.filtros || {};
                    const filtrosStr = Object.entries(filtros)
                        .map(([k, v]) => `${k}: ${v}`)
                        .join(', ');

                    let msg = 'No encontre propiedades que coincidan con tu busqueda.';
                    if (filtrosStr) {
                        msg += ` Busque con: ${filtrosStr}.`;
                    }
                    msg += ' Podes intentar con otros criterios, por ejemplo:\n\n';
                    msg += '- Departamentos en alquiler en Miraflores\n';
                    msg += '- Casas en venta menores a 500000\n';
                    msg += '- Terrenos en Lima';

                    setMessages([...newMessages, {
                        text: msg,
                        sender: 'bot'
                    }]);
                }
            } catch (error) {
                console.error('Error:', error);
                setMessages([...newMessages, {
                    text: 'No pude conectarme al servidor. Verifica que el backend este corriendo e intenta de nuevo.',
                    sender: 'bot'
                }]);
            } finally {
                setIsLoading(false);
            }
        }
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="flex flex-col h-100 lg:w-120 sm:w-auto font-urbanist">
            <div className='bg-gray-400 flex p-2'>
                <div className='rounded-full px-2 py-[10px] bg-white flex items-center'>
                    <img src="/public/img/logo.png" alt="" className='w-10' />
                </div>
                <h3 className='p-4 text-white font-urbanist'>ChatWeb</h3>
            </div>
            <div className="flex-1 p-4 overflow-y-auto h-120 bg-white">
                {messages.length === 0 && (
                    <div className="text-center text-gray-400 py-8">
                        <p className="text-sm">Escribi en lenguaje natural para buscar propiedades.</p>
                        <p className="text-xs mt-2">Ejemplo: "Casas en venta en Lima con 3 banos"</p>
                    </div>
                )}
                {messages.map((message, index) => {
                    if (message.type === 'property') {
                        return (
                            <div key={index} className="my-1 flex justify-start">
                                <PropertyCard propiedad={message.propiedad} />
                            </div>
                        );
                    }
                    return (
                        <div
                            key={index}
                            className={`my-2 rounded-lg p-2 max-w-xs whitespace-pre-line ${
                                message.sender === 'user'
                                    ? 'bg-green-500 text-white self-end ml-auto'
                                    : 'bg-gray-300 self-start'
                            }`}
                        >
                            {message.text}
                        </div>
                    );
                })}
                {isLoading && (
                    <div className="my-2 rounded-lg p-2 bg-gray-300 self-start animate-pulse">
                        Buscando propiedades...
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
            <form onSubmit={handleSubmit} className="flex p-1 mx-2">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="flex-1 border border-gray-300 rounded-l-lg p-2 mr-2"
                    placeholder="Escriba su mensaje..."
                    disabled={isLoading}
                />
                <button
                    type="submit"
                    className={`pl-3 pr-3 rounded-r-lg p-1 ${
                        isLoading
                            ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                            : 'bg-green-500 text-white'
                    }`}
                    disabled={isLoading}
                >
                    <FiSend />
                </button>
            </form>
            <div className='text-center inset-x-0 flex justify-center p-1'>
                <ul className='justify-center flex text-xl p-1 pl-5 pr-5 rounded-lg'>
                    <li>
                        <FaFacebookF className="ml-1 text-blue-500" />
                    </li>
                    <li>
                        <FaYoutube className="ml-8 text-red-500" />
                    </li>
                    <li>
                        <FaTiktok className="ml-8" />
                    </li>
                    <li>
                        <FaInstagram className="ml-8 text-pink-500" />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ChatBot;
