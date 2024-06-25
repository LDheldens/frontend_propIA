import React from 'react';
import { useFormContext } from 'react-hook-form';

function FormPg4({currentPage}) {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className={`${currentPage != 4 ? "hidden" : ""} w-full`}>
            <h2 className="text-xl font-semibold leading-7 text-gray-900">Características principales</h2>
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
                                {...register('area', { required: 'Área es requerida' })}
                                className=" p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-green1 sm:text-sm sm:leading-6"
                                placeholder="area"
                            />
                            <span
                                className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                            >
                                Área del propiedad
                            </span>
                        </label>
                        {errors.area && <p className="text-red-600">{errors.area.message}</p>}
                    </div>
                    <div className="w-full">
                        <label
                            htmlFor="bedroom"
                            className="relative rounded-md border border-gray-200 shadow-sm focus-within:border-green1 focus-within:ring-1 focus-within:ring-green1 block text-sm font-medium leading-6 text-gray-900"
                        >
                            <input
                                type="number"
                                id="bedroom"
                                {...register('bedroom', { required: 'Dormitorios es requerido' })}
                                className=" p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-green1 sm:text-sm sm:leading-6"
                                placeholder="bedroom"
                            />
                            <span
                                className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                            >
                                Dormitorios
                            </span>
                        </label>
                        {errors.bedroom && <p className="text-red-600">{errors.bedroom.message}</p>}
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row gap-2 my-3'>
                    <div className="w-full">
                        <label
                            htmlFor="garage"
                            className="relative rounded-md border border-gray-200 shadow-sm focus-within:border-green1 focus-within:ring-1 focus-within:ring-green1 block text-sm font-medium leading-6 text-gray-900"
                        >
                            <input
                                type="number"
                                id="garage"
                                {...register('garage', { required: 'Cocheras es requerido' })}
                                className=" p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-green1 sm:text-sm sm:leading-6"
                                placeholder="garage"
                            />
                            <span
                                className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                            >
                                Cocheras
                            </span>
                        </label>
                        {errors.garage && <p className="text-red-600">{errors.garage.message}</p>}
                    </div>
                    <div className="w-full">
                        <label
                            htmlFor="bathroom"
                            className="relative rounded-md border border-gray-200 shadow-sm focus-within:border-green1 focus-within:ring-1 focus-within:ring-green1 block text-sm font-medium leading-6 text-gray-900"
                        >
                            <input
                                type="number"
                                id="bathroom"
                                {...register('bathroom', { required: 'Baños es requerido' })}
                                className=" p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-green1 sm:text-sm sm:leading-6"
                                placeholder="bathroom"
                            />
                            <span
                                className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                            >
                                Baños
                            </span>
                        </label>
                        {errors.bathroom && <p className="text-red-600">{errors.bathroom.message}</p>}
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
                                {...register('kitchen', { required: 'Cocinas es requerido' })}
                                className=" p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-green1 sm:text-sm sm:leading-6"
                                placeholder="kitchen"
                            />
                            <span
                                className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                            >
                                Cocinas
                            </span>
                        </label>
                        {errors.kitchen && <p className="text-red-600">{errors.kitchen.message}</p>}
                    </div>
                    <div className="w-full">
                        <label
                            htmlFor="floor"
                            className="relative rounded-md border border-gray-200 shadow-sm focus-within:border-green1 focus-within:ring-1 focus-within:ring-green1 block text-sm font-medium leading-6 text-gray-900"
                        >
                            <input
                                type="number"
                                id="floor"
                                {...register('floor', { required: 'Pisos es requerido' })}
                                className=" p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-green1 sm:text-sm sm:leading-6"
                                placeholder="floor"
                            />
                            <span
                                className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                            >
                                Pisos
                            </span>
                        </label>
                        {errors.floor && <p className="text-red-600">{errors.floor.message}</p>}
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row gap-2 my-3'>
                    <div className="w-full font-urbanist">
                        <div className="w-full">
                            <label htmlFor="priceIn" className="block text-sm uppercase font-black text-gray-700">
                                Precio en:
                            </label>
                            <div className="mt-1">
                                <select
                                    id="priceIn"
                                    {...register('priceIn', { required: 'Precio en es requerido' })}
                                    autoComplete="priceIn-name"
                                    className="block w-full outline-none rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green1 sm:text-sm sm:leading-6"
                                >
                                    <option value="">Selecciona opción</option>
                                    <option value="PEN">Soles</option>
                                    <option value="USD">Dólares</option>
                                </select>
                                {errors.priceIn && <p className="text-red-600">{errors.priceIn.message}</p>}
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-[22px]">
                        <label
                            htmlFor="price"
                            className="relative rounded-md border border-gray-200 shadow-sm focus-within:border-green1 focus-within:ring-1 focus-within:ring-green1 block text-sm font-medium leading-6 text-gray-900"
                        >
                            <input
                                type="number"
                                id="price"
                                {...register('price', { required: 'Precio es requerido' })}
                                className=" p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-green1 sm:text-sm sm:leading-6"
                                placeholder="price"
                            />
                            <span
                                className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                            >
                                Precio
                            </span>
                        </label>
                        {errors.price && <p className="text-red-600">{errors.price.message}</p>}
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
                            {...register('title', { required: 'Título es requerido' })}
                            className=" p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-green1 sm:text-sm sm:leading-6"
                            placeholder="title"
                        />
                        <span
                            className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                        >
                            Título
                        </span>
                    </label>
                    {errors.title && <p className="text-red-600">{errors.title.message}</p>}
                </div>
                <div className="col-span-full">
                    <label
                        htmlFor="description"
                        className="relative rounded-md border border-gray-200 shadow-sm focus-within:border-green1 focus-within:ring-1 focus-within:ring-green1 block text-sm font-medium leading-6 text-gray-900"
                    >
                        <input
                            type="text"
                            id="description"
                            {...register('description', { required: 'Descripción es requerida' })}
                            className=" p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-green1 sm:text-sm sm:leading-6"
                            placeholder="description"
                        />
                        <span
                            className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                        >
                            Descripción
                        </span>
                    </label>
                    {errors.description && <p className="text-red-600">{errors.description.message}</p>}
                </div>
            </div>
        </div>
    );
}

export default FormPg4;
