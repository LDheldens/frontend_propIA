import React from 'react'

function FormPg1({ currentPage }) {
    return (
        <div className={`${currentPage != 1 ? "hidden" : ""}`}>
            <div>
                <div className="flex w-160">
                    <div className=" border border-green-400 p-4 rounded-lg mr-6 ">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Cuéntanos, ¿qué deseas publicar?</h2>

                        <div>
                            <div className=" inset-0 flex items-center text-white ">
                                <div className="font-normal flex flex-col md:flex-row items-center justify-center rounded-t-lg p-2 bg-white">
                                    <h2 className="text-base font-semibold leading-7 text-gray-900">Tipo de operación:</h2>
                                    <button className=" hover:bg-green-700 hover:text-white text-gray-600 border border-gray-200 p-2 m-2 py-2 px-4 rounded w-full md:w-auto">
                                        Venta
                                    </button>
                                    <button className=" hover:bg-green-700 hover:text-white text-gray-600 border border-gray-200 p-2 m-2 py-2 px-4 rounded w-full md:w-auto">
                                        Alquiler
                                    </button>
                                    <button className=" hover:bg-green-700 hover:text-white text-gray-600 py-2 px-4 border border-gray-200 p-2 m-2 rounded w-full md:w-auto">
                                        Temporada
                                    </button>
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="country" className="block text-lg font-medium leading-6 text-gray-900 ">
                                    Tipo de inmueble
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                        aria-placeholder=''
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                        <option>Selecciona subtipo de inmueble</option>
                                        <option>Departamento</option>
                                        <option>Casa</option>
                                        <option>Terreno/Lote</option>
                                        <option>Habitación</option>
                                        <option>Hotel</option>
                                        <option>Cochera</option>
                                        <option>Local industrial</option>
                                        <option>Local comercial</option>
                                        <option>Oficina</option>
                                        <option>Todos</option>
                                    </select>
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="country" className="block text-lg font-medium leading-6 text-gray-900 ">
                                    Sub tipo de inmueble
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                        aria-placeholder=''
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                        <option>Selecciona subtipo de inmueble</option>
                                        <option>Casa de ciudad</option>
                                        <option>Casa de campo</option>
                                        <option>Casa de playa</option>
                                        <option>Casa en condominio</option>
                                        <option>Casa en quinta</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4 ">

                            <div className="col-span-full">
                                <label
                                    htmlFor="Username"
                                    className="relative rounded-md border border-gray-200 shadow-sm focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green-600 block text-sm font-medium leading-6 text-gray-900"
                                >
                                    <input
                                        type="text"
                                        id="Username"
                                        class=" p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                        placeholder="Username"
                                    />
                                    <span
                                        className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-gray-100 p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                    >
                                        G-mail
                                    </span>
                                </label>
                            </div>
                            <div className="col-span-full">
                                <label
                                    htmlFor="Username"
                                    className="relative rounded-md border border-gray-200 shadow-sm focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green-600 block text-sm font-medium leading-6 text-gray-900"
                                >
                                    <input
                                        type="text"
                                        id="Username"
                                        class="peer p-1 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                        placeholder="Username"
                                    />

                                    <span
                                        className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-gray-100 p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                    >
                                        Nombres
                                    </span>
                                </label>
                            </div>

                            <div className="col-span-full">
                                <label
                                    htmlFor="Username"
                                    className="relative rounded-md border border-gray-200 shadow-sm focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green-600 block text-sm font-medium leading-6 text-gray-900"
                                >
                                    <input
                                        type="text"
                                        id="Username"
                                        class="p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                        placeholder="Username"
                                    />

                                    <span
                                        className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-gray-100 p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                    >
                                        Apellidos
                                    </span>
                                </label>

                            </div>
                            <div className="sm:col-span-4">
                                <label
                                    htmlFor="Username"
                                    className="relative rounded-md border border-gray-200 shadow-sm focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green-600 block text-sm font-medium leading-6 text-gray-900"
                                >
                                    <input
                                        type="text"
                                        id="Username"
                                        class="p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Username"
                                    />

                                    <span
                                        className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-gray-100 p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                    >
                                        DNI
                                    </span>
                                </label>
                            </div>
                            <div className="sm:col-span-4">
                                <label
                                    htmlFor="Username"
                                    className="relative rounded-md border border-gray-200 shadow-sm focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green-600 block text-sm font-medium leading-6 text-gray-900"
                                >
                                    <input
                                        type="number"
                                        id="Username"
                                        class="p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Username"
                                    />

                                    <span
                                        className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-gray-100 p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                    >
                                        Celular
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className='flex mt-4'>
                            <input type="checkbox" className='m-1 p-3 form-checkbox h-6 w-6 text-green-500' />
                            <span className='text-[13px] p-2'>Acepto los Términos y Condiciones de uso y las politicas de privacidad.</span>
                        </div>
                        {/* <div className='flex mt-3'>
                            <input type="checkbox" id="miCheckbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} className='m-1 p-3 form-checkbox h-6 w-6 text-green-500' />
                            <span className='text-[12px]'>Autorizo el uso de mi información para fines adicionales.</span>
                        </div> */}
                        {/* <div className='mt-4'>
                            <button className='bg-green-600 w-full p-3 rounded-lg'>
                                Contactar
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormPg1