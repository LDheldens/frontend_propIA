import React, { useState } from 'react';
function FormPg4({ currentPage }) {
    const [number, setNumber] = useState(0);

    const incrementNumber = () => {
        setNumber(prevNumber => prevNumber + 1);
    };

    const decrementNumber = () => {
        setNumber(prevNumber => prevNumber - 1);
    };
    return (
        <div className={`${currentPage != 4 ? "hidden" : ""}`}>
            <div className=''>
                <h2 className="text-base font-semibold leading-7 text-gray-900">Características principales</h2>
                <div className="mt-2 font-urbanist">

                    <div className='flex flex-col sm:flex-row gap-2 my-3'>
                        <div className="w-full">
                            <label
                                htmlFor="area"
                                className="relative rounded-md border border-gray-200 shadow-sm focus-within:border-green1 focus-within:ring-1 focus-within:ring-green1 block text-sm font-medium leading-6 text-gray-900"
                            >
                                <input
                                    type="number"
                                    id="area"
                                    name='area'
                                    class=" p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-inset focus:ring-green1 sm:text-sm sm:leading-6"
                                    placeholder="area"
                                />
                                <span
                                    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                >
                                    Area del propiedad
                                </span>
                            </label>
                        </div>
                        <div className="w-full">
                            <label
                                htmlFor="bedroom"
                                className="relative rounded-md border border-gray-200 shadow-sm focus-within:border-green1 focus-within:ring-1 focus-within:ring-green1 block text-sm font-medium leading-6 text-gray-900"
                            >
                                <input
                                    type="number"
                                    id="bedroom"
                                    name='bedroom'
                                    class=" p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-inset focus:ring-green1 sm:text-sm sm:leading-6"
                                    placeholder="bedroom"
                                />
                                <span
                                    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                >
                                    Dormitorios
                                </span>
                            </label>
                        </div>
                    </div>
                    {/* <div className='flex'>
                        <button
                            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-l"
                            onClick={decrementNumber}
                        >
                            -
                        </button>
                        <input
                            type="text"
                            className="text-center border border-gray-400 py-2 px-4 w-16"
                            value={number}
                            readOnly
                        />
                        <button
                            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-r"
                            onClick={incrementNumber}
                        >
                            +
                        </button>
                    </div> */}

                    <div className='flex flex-col sm:flex-row gap-2 my-3'>
                        <div className="w-full">
                            <label
                                htmlFor="garage"
                                className="relative rounded-md border border-gray-200 shadow-sm focus-within:border-green1 focus-within:ring-1 focus-within:ring-green1 block text-sm font-medium leading-6 text-gray-900"
                            >
                                <input
                                    type="number"
                                    id="garage"
                                    name='garage'
                                    class=" p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-inset focus:ring-green1 sm:text-sm sm:leading-6"
                                    placeholder="garage"
                                />
                                <span
                                    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                >
                                    Cocheras
                                </span>
                            </label>
                        </div>
                        <div className="w-full">
                            <label
                                htmlFor="bathroom"
                                className="relative rounded-md border border-gray-200 shadow-sm focus-within:border-green1 focus-within:ring-1 focus-within:ring-green1 block text-sm font-medium leading-6 text-gray-900"
                            >
                                <input
                                    type="number"
                                    id="bathroom"
                                    name='bathroom'
                                    class=" p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-inset focus:ring-green1 sm:text-sm sm:leading-6"
                                    placeholder="bathroom"
                                />
                                <span
                                    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                >
                                    Baños
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-2 my-3'>
                        <div className="w-full">
                            <label
                                htmlFor="kitchen"
                                className="relative rounded-md border border-gray-200 shadow-sm focus-within:border-green1 focus-within:ring-1 focus-within:ring-green1 block text-sm font-medium leading-6 text-gray-900"
                            >
                                <input
                                    type="number"
                                    id="kitchen"
                                    name='kitchen'
                                    class=" p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-inset focus:ring-green1 sm:text-sm sm:leading-6"
                                    placeholder="kitchen"
                                />
                                <span
                                    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                >
                                    Cocinas
                                </span>
                            </label>
                        </div>

                        <div className="w-full">
                            <label
                                htmlFor="floor"
                                className="relative rounded-md border border-gray-200 shadow-sm focus-within:border-green1 focus-within:ring-1 focus-within:ring-green1 block text-sm font-medium leading-6 text-gray-900"
                            >
                                <input
                                    type="number"
                                    id="floor"
                                    name='floor'
                                    class=" p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-inset focus:ring-green1 sm:text-sm sm:leading-6"
                                    placeholder="floor"
                                />
                                <span
                                    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                >
                                    Pisos
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-2 my-3'>
                        <div className="w-full font-urbanist">
                            <div className="w-full">
                                <label htmlFor="priceIn" className="block text-sm font-medium leading-6 text-gray-900">
                                    Precio en
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="priceIn"
                                        name="priceIn"
                                        autoComplete="priceIn-name"
                                        aria-placeholder=''
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green1 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                        <option>Selecciona opción</option>
                                        <option>Soles</option>
                                        <option>Dólares</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-7">
                            <label
                                htmlFor="price"
                                className="relative rounded-md border border-gray-200 shadow-sm focus-within:border-green1 focus-within:ring-1 focus-within:ring-green1 block text-sm font-medium leading-6 text-gray-900"
                            >
                                <input
                                    type="number"
                                    id="price"
                                    name='price'
                                    class=" p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-inset focus:ring-green1 sm:text-sm sm:leading-6"
                                    placeholder="price"
                                />
                                <span
                                    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                >
                                    Precio
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="col-span-full my-3">
                        <label
                            htmlFor="title"
                            className="relative rounded-md border border-gray-200 shadow-sm focus-within:border-green1 focus-within:ring-1 focus-within:ring-green1 block text-sm font-medium leading-6 text-gray-900"
                        >
                            <input
                                type="text"
                                id="title"
                                name='title'
                                class=" p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-inset focus:ring-green1 sm:text-sm sm:leading-6"
                                placeholder="title"
                            />
                            <span
                                className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                            >
                                Título
                            </span>
                        </label>
                    </div>
                    <div className="col-span-full">
                        <label
                            htmlFor="description"
                            className="relative rounded-md border border-gray-200 shadow-sm focus-within:border-green1 focus-within:ring-1 focus-within:ring-green1 block text-sm font-medium leading-6 text-gray-900"
                        >
                            <input
                                type="text"
                                id="description"
                                name='description'
                                class=" p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-inset focus:ring-green1 sm:text-sm sm:leading-6"
                                placeholder="description"
                            />
                            <span
                                className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                            >
                                Descripción
                            </span>
                        </label>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FormPg4