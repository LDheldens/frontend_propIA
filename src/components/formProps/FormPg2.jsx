import React from 'react'
import Map from '../Map'

function FormPg2({ currentPage }) {
    return (
        <div className={`${currentPage != 2 ? "hidden" : ""}`}>
            <div className='font-urbanist sm:80'>
                <h2 className="text-base font-semibold leading-7 text-gray-900">¿Dónde está ubicado tu inmueble?</h2>
                <div className="mt-10 gap-x-6 gap-y-8">
                    <div className="col-span-2">
                        <label
                            htmlFor="address"
                            className="relative rounded-md border border-gray-200 shadow-sm focus-within:border-green1 focus-within:ring-1 focus-within:ring-green1 block text-sm font-medium leading-6 text-gray-900"
                        >
                            <input
                                type="text"
                                id="address"
                                className=" p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-inset focus:ring-green1 sm:text-sm sm:leading-6"
                                placeholder="address"
                            />
                            <span
                                className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                            >
                                Dirección
                            </span>
                        </label>
                    </div>

                </div>

                <div className=' flex-1 gap-x-6 gap-y-8'>
                    <div className='flex flex-col sm:flex-row gap-2 my-3'>
                        <div className="w-full ">
                            <label htmlFor="department" className="block text-sm font-medium leading-6 text-gray-900">
                                Departamento
                            </label>
                            <div className="mt-2">
                                <select
                                    id="department"
                                    name="department"
                                    autoComplete="departament-name"
                                    aria-placeholder=''
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green1 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option>Selecciona Depatamento</option>
                                    <option>Lima</option>
                                    <option>Arequipa</option>
                                    <option>Huancayo</option>
                                </select>
                            </div>
                        </div>
                        <div className="w-full">
                            <label htmlFor="province" className="block text-sm font-medium leading-6 text-gray-900">
                                Provicia
                            </label>
                            <div className="mt-2">
                                <select
                                    id="province"
                                    name="countprovincery"
                                    autoComplete="province-name"
                                    aria-placeholder=''
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green1 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option>Selecciona Provincia</option>
                                    <option>Lima</option>
                                    <option>Barranca</option>
                                    <option>Cajatambo</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-2 my-3'>
                        <div className="w-full">
                            <label htmlFor="district" className="block text-sm font-medium leading-6 text-gray-900">
                                Distrito
                            </label>
                            <div className="mt-2">
                                <select
                                    id="district"
                                    name="district"
                                    autoComplete="district-name"
                                    aria-placeholder=''
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green1 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option>Selecciona Distrito</option>
                                    <option>Lima</option>
                                    <option>Arequipa</option>
                                    <option>Huancayo</option>
                                </select>
                            </div>
                        </div>
                        <div className="w-full ">
                            <label htmlFor="urbanization" className="block text-sm font-medium leading-6 text-gray-900">
                                Urbanización
                            </label>
                            <div className="mt-2">
                                <select
                                    id="urbanization"
                                    name="urbanization"
                                    autoComplete="urbanization-name"
                                    aria-placeholder=''
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green1 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option>Selecciona Urbanización</option>
                                    <option>Lima</option>
                                    <option>Barranca</option>
                                    <option>Cajatambo</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-4'>
                    <h2 className="text-base font-semibold leading-7 text-gray-900">¿Cómo deseas mostrar tu ubicación?</h2>
                    <Map />
                </div>
            </div>
        </div>
    )
}

export default FormPg2