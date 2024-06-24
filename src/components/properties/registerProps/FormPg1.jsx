import React from 'react'

function FormPg1({ currentPage }) {
    return (
        <div className={`${currentPage != 1 ? "hidden" : ""} w-full`}>
            <div className="">
                <div className=" font-urbanist">
                    <h2 className="text-base text-center font-bold leading-7 text-gray-900">Cuéntanos, ¿qué deseas publicar?</h2>
                    <div className=" flex justify-center text-white ">
                        <div className="font-normal flex flex-col sm:flex-row items-center justify-center p-2 bg-white">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Tipo de operación:</h2>
                            <div className='flex'>
                                <button
                                    type="button"
                                    className=" hover:bg-green1 hover:text-white text-gray-600 border border-gray-200 p-2 m-2 rounded w-full md:w-auto"
                                    onClick={() => handleInputChange('tipoOperacion', 'Venta')}
                                >
                                    Venta
                                </button>
                                <button
                                    type="button"
                                    className=" hover:bg-green1 hover:text-white text-gray-600 border border-gray-200 p-2 m-2 rounded w-full md:w-auto"
                                    onClick={() => handleInputChange('tipoOperacion', 'Alquiler')}
                                >
                                    Alquiler
                                </button>
                                <button
                                    type="button"
                                    className=" hover:bg-green1 hover:text-white text-gray-600 border border-gray-200 p-2 m-2 rounded w-full md:w-auto"
                                    onClick={() => handleInputChange('tipoOperacion', 'Temporada')}
                                >
                                    Temporada
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-2'>
                        <div className=" w-full">
                            <label htmlFor="tipoInmueble" className="block text-lg font-medium leading-6 text-gray-900 ">
                                Tipo de inmueble
                            </label>
                            <select
                                id="tipoInmueble"
                                name="tipoInmueble"
                                autoComplete="tipoInmueble"
                                className=" w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green1 sm:max-w-xs sm:text-sm sm:leading-6"
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
                        </div>
                        <div className="w-full">
                            <label htmlFor="subTipoInmueble" className="block text-lg font-medium leading-6 text-gray-900 ">
                                Sub tipo de inmueble
                            </label>
                            <select
                                id="subTipoInmueble"
                                name="subTipoInmueble"
                                autoComplete="subTipoInmueble"
                                className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green1 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                                <option value="">Selecciona subtipo de inmueble</option>
                                <option value="Casa de ciudad">Casa de ciudad</option>
                                <option value="Casa de campo">Casa de campo</option>
                                <option value="Casa de playa">Casa de playa</option>
                                <option value="Casa en condominio">Casa en condominio</option>
                                <option value="Casa en quinta">Casa en quinta</option>
                            </select>
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
                                        name="email"
                                        className=" p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-inset focus:ring-green1 sm:text-sm sm:leading-6"
                                        placeholder="email"
                                    />
                                    <span
                                        className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                    >
                                        G-mail
                                    </span>
                                </label>
                            </div>
                            <div className="w-full">
                                <label
                                    htmlFor="username"
                                    className="relative rounded-md border border-gray-200 shadow-sm focus-within:border-green1 focus-within:ring-1 focus-within:ring-green1 block text-sm font-medium leading-6 text-gray-900"
                                >
                                    <input
                                        type="text"
                                        id="username"
                                        name='username'
                                        className="peer p-1 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-green1 sm:text-sm sm:leading-6"
                                        placeholder="Nombres"
                                    />

                                    <span
                                        className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                    >
                                        Nombres
                                    </span>
                                </label>
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
                                    name='apellidos'
                                    className="p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-inset focus:ring-green1 sm:text-sm sm:leading-6"
                                    placeholder="Apellidos"
                                />

                                <span
                                    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                >
                                    Apellidos
                                </span>
                            </label>

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
                                        name='dni'
                                        className="p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="DNI"
                                    />

                                    <span
                                        className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                    >
                                        DNI
                                    </span>
                                </label>
                            </div>
                            <div className="w-full">
                                <label
                                    htmlFor="celular"
                                    className="relative rounded-md border border-gray-200 shadow-sm focus-within:border-green1 focus-within:ring-1 focus-within:ring-green1 block text-sm font-medium leading-6 text-gray-900"
                                >
                                    <input
                                        type="number"
                                        id="celular"
                                        name='celular'
                                        className="p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Celular"
                                    />

                                    <span
                                        className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                    >
                                        Celular
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='flex mt-4'>
                        <input type="checkbox" className='m-1 p-3 form-checkbox h-6 w-6 text-green1' name='terminos' />
                        <span className='text-[13px] p-2'>Acepto los Términos y Condiciones de uso y las politicas de privacidad.</span>
                    </div>
                    {/* <div className='flex mt-3'>
                            <input type="checkbox" id="miCheckbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} className='m-1 p-3 form-checkbox h-6 w-6 text-green1' />
                            <span className='text-[12px]'>Autorizo el uso de mi información para fines adicionales.</span>
                        </div> */}
                    {/* <div className='mt-4'>
                            <button className='bg-green1 w-full p-3 rounded-lg'>
                                Contactar
                            </button>
                        </div> */}
                </div>
            </div>
        </div>
    )
}

export default FormPg1