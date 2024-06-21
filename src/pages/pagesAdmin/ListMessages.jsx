import React, { useState } from 'react'
import api from '../../settings/api'
import useSWR from 'swr';
import { Switch } from '../../components/compGeneral/Switch';


function ListMessages() {
    const [served, setServed] = useState(false);
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
    }

    const { data: messages, isLoading, mutate } = useSWR(
        `${import.meta.env.VITE_API_URL}/contact/list/`,
        getMessages
    )
    //'nombres', 'apellidos', 'email', 'celular', 'tipo_solicitud', 'mensaje', 'ciudad', 'provincia', 'codigo_postal'
    console.log('sms', messages)

    const handleStateServed = (e) => {
        setServed(e.target.checked)
        console.log(served)
    }



    return (
        <div>
            <ul role="list" className="divide-y divide-gray-100 px-4">
                {messages?.map((message) => (
                    <li key={message.email} className="flex justify-between gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={message.imageUrl} alt="" />
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">{message.nombres}</p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{message.email}</p>
                                <p className="text-sm leading-6 text-gray-900">Tipo de solicitud: {message.tipo_solicitud}</p>
                            </div>
                        </div>
                        <div >
                            <textarea
                                name="mensaje"
                                className="w-full md:w-1/2 lg:w-1/2 p-2 border border-gray-300 rounded resize-none"
                                rows="3"
                                value={message.mensaje}

                            />
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            {message.lastSeen ? (
                                <p className="mt-1 text-xs leading-5 text-gray-500">
                                    Last seen <time dateTime={message.lastSeenDateTime}>{message.lastSeen}</time>
                                </p>
                            ) : (
                                <div className="mt-1 flex items-center gap-x-1.5">
                                    <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                    </div>
                                    <p className="text-xs leading-5 text-gray-500">Online</p>
                                    <div>
                                        {/* Checkbox */}
                                        <Switch handleStateServed={handleStateServed} />
                                    </div>
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListMessages