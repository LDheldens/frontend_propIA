import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Selector } from '@rewind-ui/core';

function FormPg1({currentPage}) {

    const { register, formState: { errors } } = useFormContext();
    const [operation,setOperation] = useState('venta')

    const handleOperationChange = (value) => {
        setOperation(value);
    };
    return (
       
        <div className={`${currentPage != 1 ? "hidden" : ""} w-full`}>
            <div className="font-urbanist">
                <h2 className="text-base text-center font-bold leading-7 text-gray-900">Cuéntanos, ¿qué deseas publicar?</h2>
                <div className="flex justify-center items-center gap-3 text-white">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">Tipo de operación:</h3>
                    <div className='my-5'>
                        <Selector className='border border-green-400' value={operation} color='green' onChange={handleOperationChange} >
                            <Selector.Tab anchor="venta" label="VENTA" />
                            <Selector.Tab  anchor="alquiler" label="ALQUILER" />
                            <Selector.Tab anchor="compra" label="COMPRA" />
                        </Selector>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row gap-2'>
                    <div className="w-1/2">
                        <label htmlFor="tipoInmueble" className="block text-sm font-black leading-6 text-gray-700 uppercase">
                            Tipo de inmueble:
                        </label>
                        <select
                            id="tipoInmueble"
                            {...register('tipoInmueble', { required: 'Tipo de inmueble es requerido' })}
                            className="w-full rounded-md p-2 outline-none text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green1 sm:text-sm sm:leading-6"
                        >
                            <option value="">Selecciona tipo de inmueble</option>
                            <option value="Departamento">Departamento</option>
                            <option value="Casa">Casa</option>
                            <option value="Terreno/Lote">Terreno/Lote</option>
                            <option value="Habitación">Habitación</option>
                            <option value="Hotel">Hotel</option>
                            <option value="Cochera">Cochera</option>
                            <option value="Local industrial">Local industrial</option>
                            <option value="Local comercial">Local comercial</option>
                            <option value="Oficina">Oficina</option>
                            <option value="Todos">Todos</option>
                        </select>
                        {errors.tipoInmueble && <p className="text-red-600">{errors.tipoInmueble.message}</p>}
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="subTipoInmueble" className="block text-sm font-black leading-6 text-gray-700 uppercase">
                            Sub tipo de inmueble:
                        </label>
                        <select
                            id="subTipoInmueble"
                            {...register('subTipoInmueble', { required: 'Sub tipo de inmueble es requerido' })}
                            className="w-full rounded-md p-2 outline-none text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green1 sm:text-sm sm:leading-6"
                        >
                            <option value="">Selecciona subtipo de inmueble</option>
                            <option value="Casa de ciudad">Casa de ciudad</option>
                            <option value="Casa de campo">Casa de campo</option>
                            <option value="Casa de playa">Casa de playa</option>
                            <option value="Casa en condominio">Casa en condominio</option>
                            <option value="Casa en quinta">Casa en quinta</option>
                        </select>
                        {errors.subTipoInmueble && <span className="text-red-500 text-sm">{errors.subTipoInmueble.message}</span>}
                    </div>
                </div>
                <div className="my-6 ">
                    <div className='flex flex-col sm:flex-row gap-2 mb-3'>
                        <div className=" w-full">
                            <label
                                htmlFor="email"
                                className="relative rounded-md border border-gray-200 shadow-sm focus-within:border-green1 focus-within:ring-1 focus-within:ring-green1 block text-sm font-medium leading-6 text-gray-900"
                            >
                                <input
                                    type="email"
                                    id="email"
                                    {...register('email', { required: 'Email es requerido' })}
                                    className=" p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-inset focus:ring-green1 sm:text-sm sm:leading-6"
                                    placeholder="email"
                                />
                                <span
                                    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                >
                                    G-mail
                                </span>
                            </label>
                            {errors.email && <p className="text-red-600">{errors.email.message}</p>}
                        </div>
                        <div className="w-full">
                            <label
                                htmlFor="username"
                                className="relative rounded-md border border-gray-200 shadow-sm focus-within:border-green1 focus-within:ring-1 focus-within:ring-green1 block text-sm font-medium leading-6 text-gray-900"
                            >
                                <input
                                    type="text"
                                    id="username"
                                    {...register('username', { required: 'Nombres es requerido' })}
                                    className="peer p-1 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-green1 sm:text-sm sm:leading-6"
                                    placeholder="Nombres"
                                />
                                <span
                                    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                >
                                    Nombres
                                </span>
                            </label>
                            {errors.username && <p className="text-red-600">{errors.username.message}</p>}
                        </div>
                    </div>
                    <div className="my-3">
                        <label
                            htmlFor="apellidos"
                            className="relative rounded-md border border-gray-200 shadow-sm focus-within:border-green1 focus-within:ring-1 focus-within:ring-green1 block text-sm font-medium leading-6 text-gray-900"
                        >
                            <input
                                type="text"
                                id="apellidos"
                                {...register('apellidos', { required: 'Apellidos es requerido' })}
                                className="p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-inset focus:ring-green1 sm:text-sm sm:leading-6"
                                placeholder="Apellidos"
                            />
                            <span
                                className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                            >
                                Apellidos
                            </span>
                        </label>
                        {errors.apellidos && <p className="text-red-600">{errors.apellidos.message}</p>}
                    </div>
                    <div className='flex flex-col sm:flex-row gap-2 mb-3'>
                        <div className="w-full">
                            <label
                                htmlFor="dni"
                                className="relative rounded-md border border-gray-200 shadow-sm focus-within:border-green1 focus-within:ring-1 focus-within:ring-green1 block text-sm font-medium leading-6 text-gray-900"
                            >
                                <input
                                    type="text"
                                    id="dni"
                                    {...register('dni', { required: 'DNI es requerido' })}
                                    className="p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="DNI"
                                />
                                <span
                                    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                >
                                    DNI
                                </span>
                            </label>
                            {errors.dni && <p className="text-red-600">{errors.dni.message}</p>}
                        </div>
                        <div className="w-full">
                            <label
                                htmlFor="celular"
                                className="relative rounded-md border border-gray-200 shadow-sm focus-within:border-green1 focus-within:ring-1 focus-within:ring-green1 block text-sm font-medium leading-6 text-gray-900"
                            >
                                <input
                                    type="number"
                                    id="celular"
                                    {...register('celular', { required: 'Celular es requerido' })}
                                    className="p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Celular"
                                />
                                <span
                                    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                >
                                    Celular
                                </span>
                            </label>
                            {errors.celular && <p className="text-red-600">{errors.celular.message}</p>}
                        </div>
                    </div>
                </div>
                <div className='flex mt-4'>
                    <input type="checkbox" className='m-1 p-2 rounded-sm form-checkbox h-6 w-6 text-green1' {...register('terminos', { required: 'Debe aceptar los términos y condiciones' })} />
                    <span className='text-[13px] p-2'>Acepto los Términos y Condiciones de uso y las politicas de privacidad.</span>
                </div>
                {errors.terminos && <p className="text-red-600">{errors.terminos.message}</p>}
            </div>
        </div>
        
    );
}

export default FormPg1;
