import React, { useState } from 'react';
import api from '../../settings/api';
import useSWR from 'swr';
import { FaInfoCircle } from "react-icons/fa"

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

    //fields = ['id', 'nombres', 'apellidos', 'email', 'celular', 'tipo_solicitud', 'mensaje', 'ciudad', 'provincia', 'codigo_postal', 'atendido']


    return (
        <div className='p-14 max-w-7xl mx-auto'>
            <ul role="list" className='flex justify-between p-3 w-full '>
                <li className='flex-1 flex justify-start p-2 '>
                    <div className='bg-white px-4 py-2'>
                        <h3 className='font-bebas'>USUARIOS</h3>
                    </div>
                </li>
                <li className='flex-1 flex justify-center p-2 '>
                    <div className='bg-white px-4 py-2'>
                        <h3 className='font-bebas'>MENSAJE</h3>
                    </div>
                </li>
                <li className='flex-1 flex justify-end p-2 '>
                    <div className='bg-white px-4 py-2'>
                        <h3 className='font-bebas'>ATENDIDO</h3>
                    </div>
                </li>
            </ul>

            <ul role="list" className="divide-y divide-gray-100 px-4 font-urbanist">
                {messages?.map((message) => (
                    <li key={message.id} className="flex justify-between gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                            {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={message.imageUrl} alt="" /> */}
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">Nombre: {message.nombres}</p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">Emai: {message.email}</p>
                                <p className="text-sm leading-6 text-gray-900">Tipo de solicitud: {message.tipo_solicitud}</p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">Cel: {message.celular}</p>
                            </div>
                        </div>
                        <div className='flex min-w-0 gap-x-2 font-urbanist'>
                            <p> {message.mensaje}</p>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            <div className="mt-1 flex items-center gap-x-1.5">
                                {/* <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                </div>
                                <p className="text-xs leading-5 text-gray-500">Online</p> */}
                                <div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            className="sr-only peer"
                                            type="checkbox"
                                            checked={message.atendido}
                                            onChange={(e) => handleStateServed(message, e.target.checked)}
                                        />
                                        <div className="peer rounded-full outline-none duration-100 after:duration-500 w-16 h-8 bg-green1 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-500  after:content-['No'] after:absolute after:outline-none after:rounded-full after:h-6 after:w-6 after:bg-white after:top-1 after:left-1 after:flex after:justify-center after:items-center  after:text-sky-800 after:font-bold peer-checked:after:translate-x-8 peer-checked:after:content-['Si'] peer-checked:after:border-white">
                                        </div>
                                    </label>
                                    {/* <div className='flex items-center justify-center'>
                                        <FaInfoCircle className='text-[25px]' />
                                    </div> */}
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
