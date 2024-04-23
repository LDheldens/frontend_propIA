import React from 'react'

function SendMsg() {
    return (
        <div>
            <div className="flex w-90">
                <div className=" border border-spacing-3 p-4 rounded-lg mr-6 pb-12 ">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Contáctate con EFRON ARQUITECTOS por el proyecto en Risso, Lince</h2>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
                        <div className="sm:col-span-4">
                            <label
                                htmlFor="Username"
                                className="relative rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 block text-sm font-medium leading-6 text-gray-900"
                            >
                                <input
                                    type="text"
                                    id="Username"
                                    class=" p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Username"
                                />

                                <span
                                    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-gray-100 p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                >
                                    G-mail
                                </span>
                            </label>
                            {/* <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Email
                                    </label>
                                    <div className="mt-1">
                                        <input id="email" placeholder='Email' name="email" type="email" autoComplete="email"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div> */}
                        </div>
                        <div className="sm:col-span-3">
                            <label
                                htmlFor="Username"
                                className="relative rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 block text-sm font-medium leading-6 text-gray-900"
                            >
                                <input
                                    type="text"
                                    id="Username"
                                    class="peer p-1 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Username"
                                />

                                <span
                                    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-gray-100 p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                >
                                    Nombres
                                </span>
                            </label>
                            {/* <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Nombres
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div> */}
                        </div>

                        <div className="sm:col-span-3">
                            <label
                                htmlFor="Username"
                                className="relative rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 block text-sm font-medium leading-6 text-gray-900"
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
                                    Apellidos
                                </span>
                            </label>
                            {/* <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Apellidos
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div> */}
                        </div>
                        <div className="sm:col-span-4">
                            <label
                                htmlFor="Username"
                                className="relative rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 block text-sm font-medium leading-6 text-gray-900"
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
                            {/* <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        DNI
                                    </label>
                                    <div className="mt-1">
                                        <input type="number"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div> */}
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                Unidad de interés
                            </label>
                            <div className="mt-2">
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    aria-placeholder=''
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option>1 Dormitorio</option>
                                    <option>2 Dormitorios</option>
                                    <option>3 Dormitorios</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label
                                htmlFor="Username"
                                className="relative rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 block text-sm font-medium leading-6 text-gray-900"
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
                                    Mensage
                                </span>
                            </label>
                            {/* <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                        Mensage
                                    </label>
                                    <div className="mt-2">
                                        <input type="text" name="street-address"
                                            id="street-address"
                                            autoComplete="street-address"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div> */}
                        </div>
                    </div>
                    <div className='flex mt-4'>
                        <input type="checkbox" className='m-1 p-3' />
                        <span className='text-[12px]'>Acepto los Términos y Condiciones de Uso. y las politicas de privacidad.</span>
                    </div>
                    <div className='flex'>
                        <input type="checkbox" className='m-1 p-3' />
                        <span className='text-[12px]'>Autorizo el uso de mi información para fines adicionales.</span>
                    </div>
                    <div className='mt-4'>
                        <button className='bg-green-600 w-full p-3 rounded-lg'>
                            Contactar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SendMsg