import React, { useState } from 'react';
import api from '../../settings/api';
import useSWR from 'swr';

function ListMessages() {
    const getMessages = async () => {
        try {
            const response = await api.get('/contact/list/', {
                headers: {
                    'Accept': 'application/json'
                }
            });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    };

    const { data: messages, isLoading, mutate } = useSWR(
        `${import.meta.env.VITE_API_URL}/contact/list/`,
        getMessages
    );

    const handleStateServed = async (message, newServed) => {
        const updatedMessage = { ...message, atendido: newServed };
        try {
            const response = await api.put(`/contact/${message.id}/`, updatedMessage);
            console.log('Updated property:', response.data);
            // Actualiza la lista de mensajes con el mensaje actualizado
            mutate();
        } catch (error) {
            console.error('Error updating property:', error);
        }
    };

    return (
        <div>
            <ul role="list" className="divide-y divide-gray-100 px-4">
                {messages?.map((message) => (
                    <li key={message.id} className="flex justify-between gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={message.imageUrl} alt="" />
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">{message.nombres}</p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{message.email}</p>
                                <p className="text-sm leading-6 text-gray-900">Tipo de solicitud: {message.tipo_solicitud}</p>
                            </div>
                        </div>
                        <div>
                            <p>{message.mensaje}</p>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            <div className="mt-1 flex items-center gap-x-1.5">
                                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                </div>
                                <p className="text-xs leading-5 text-gray-500">Online</p>
                                <div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            className="sr-only peer"
                                            type="checkbox"
                                            checked={message.atendido}
                                            onChange={(e) => handleStateServed(message, e.target.checked)}
                                        />
                                        <div className="peer rounded-full outline-none duration-100 after:duration-500 w-20 h-10 bg-green1 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-500  after:content-['No'] after:absolute after:outline-none after:rounded-full after:h-8 after:w-8 after:bg-white after:top-1 after:left-1 after:flex after:justify-center after:items-center  after:text-sky-800 after:font-bold peer-checked:after:translate-x-10 peer-checked:after:content-['Si'] peer-checked:after:border-white">
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListMessages;
