import React, { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form'
import api from '../../settings/api'

function Contact() {

    const { register, handleSubmit, formState: { errors },reset } = useForm();

    const handleSubmitContact = async (formData) => {
        try {
            const response = await api.post('/contact/create/', formData);
            const data = response.data;
            console.log('dataaa', data);
            reset()
        } catch (error) {
            console.error('Error submitting form', error);
        }
    }
    return (
        <div className="p-14 max-w-4xl mx-auto">
            <form className='' noValidate onSubmit={handleSubmit(handleSubmitContact)}>
                <div className="space-y-12 font-urbanist">
                    <div className="border-b border-gray-900/10 pb-8 font-urbanist">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Contactanos</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            Para una mayor informacion.
                        </p>
                    </div>
                    <div className="border-b border-gray-900/10 pb-4">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Informacion personal</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">Puede llenar el siguiente formulario.</p>
                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="nombres" className="block text-sm font-medium leading-6 text-gray-900">
                                    Nombres
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="nombres"
                                        id="nombres"
                                        autoComplete="nombres"
                                        className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 ${errors.nombres ? 'ring-red-500' : ''}`}
                                        {...register("nombres", { required: "El nombre es obligatorio",minLength:{value:2,message:"El nombre debe tener al menos 2 caractéres"} })}
                                    />
                                    {errors.nombres && <p className="text-red-500 text-sm">{errors.nombres.message}</p>}
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="apellidos" className="block text-sm font-medium leading-6 text-gray-900">
                                    Apellidos
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="apellidos"
                                        id="apellidos"
                                        autoComplete="apellidos"
                                        className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 ${errors.apellidos ? 'ring-red-500' : ''}`}
                                        {...register("apellidos", { required: "Los apellidos son obligatorios" })}
                                    />
                                    {errors.apellidos && <p className="text-red-500 text-sm">{errors.apellidos.message}</p>}
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 ${errors.email ? 'ring-red-500' : ''}`}
                                        {...register("email", {
                                            required: "El email es obligatorio",
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: "El email no es válido"
                                            }
                                        })}
                                    />
                                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="celular" className="block text-sm font-medium leading-6 text-gray-900">
                                    Teléfono
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="celular"
                                        name="celular"
                                        type="number"
                                        autoComplete="celular"
                                        className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 ${errors.celular ? 'ring-red-500' : ''}`}
                                        {...register("celular", { required: "El teléfono es obligatorio" })}
                                    />
                                    {errors.celular && <p className="text-red-500 text-sm">{errors.celular.message}</p>}
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="tipo_solicitud" className="block text-sm font-medium leading-6 text-gray-900">
                                    Tipo de solicitud
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="tipo_solicitud"
                                        name="tipo_solicitud"
                                        autoComplete="tipo_solicitud"
                                        className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 ${errors.tipo_solicitud ? 'ring-red-500' : ''}`}
                                        {...register("tipo_solicitud", { required: "Seleccione un tipo de solicitud" })}
                                    >
                                        <option value="">Seleccione una opción</option>
                                        <option value="Consulta">Consulta</option>
                                        <option value="Reclamo">Reclamo</option>
                                        <option value="Otro motivo">Otro motivo</option>
                                    </select>
                                    {errors.tipo_solicitud && <p className="text-red-500 text-sm">{errors.tipo_solicitud.message}</p>}
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="mensaje" className="block text-sm font-medium leading-6 text-gray-900">
                                    Mensaje
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="mensaje"
                                        id="mensaje"
                                        autoComplete="mensaje"
                                        className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 ${errors.mensaje ? 'ring-red-500' : ''}`}
                                        {...register("mensaje", { required: "El mensaje es obligatorio" })}
                                    />
                                    {errors.mensaje && <p className="text-red-500 text-sm">{errors.mensaje.message}</p>}
                                </div>
                            </div>

                            <div className="sm:col-span-2 sm:col-start-1">
                                <label htmlFor="ciudad" className="block text-sm font-medium leading-6 text-gray-900">
                                    Ciudad
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="ciudad"
                                        id="ciudad"
                                        autoComplete="ciudad"
                                        className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 ${errors.ciudad ? 'ring-red-500' : ''}`}
                                        {...register("ciudad", { required: "La ciudad es obligatoria" })}
                                    />
                                    {errors.ciudad && <p className="text-red-500 text-sm">{errors.ciudad.message}</p>}
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="provincia" className="block text-sm font-medium leading-6 text-gray-900">
                                    Provincia
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="provincia"
                                        id="provincia"
                                        autoComplete="provincia"
                                        className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 ${errors.provincia ? 'ring-red-500' : ''}`}
                                        {...register("provincia", { required: "La provincia es obligatoria" })}
                                    />
                                    {errors.provincia && <p className="text-red-500 text-sm">{errors.provincia.message}</p>}
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="codigo_postal" className="block text-sm font-medium leading-6 text-gray-900">
                                    Codigo Postal
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="number"
                                        name="codigo_postal"
                                        id="codigo_postal"
                                        autoComplete="codigo_postal"
                                        className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 ${errors.codigo_postal ? 'ring-red-500' : ''}`}
                                        {...register("codigo_postal", { required: "El código postal es obligatorio" })}
                                    />
                                    {errors.codigo_postal && <p className="text-red-500 text-sm">{errors.codigo_postal.message}</p>}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Notificaciones</h2>
                        <div className='flex'>
                            <input type="checkbox" className='m-1 p-2 form-checkbox h-6 w-6 text-green1 px-2' />

                            <p className="mt-1 text-sm leading-6 text-gray-600">
                                Siempre te informaremos sobre cambios importantes, pero tú eliges qué más quieres escuchar.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-green1 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green1"
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Contact