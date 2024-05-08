import React from 'react'
import { TbDeviceIpadSearch } from "react-icons/tb"
import { SlRocket } from "react-icons/sl"
import { FaHouseUser } from "react-icons/fa"

function Cards1() {
    return (
        <div>
            <div>
                <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3 m-3">
                    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-3 border-gray-300">
                        <li >
                            <div className="flex items-center gap-x-6 border border-gray-500 bg-white shadow-lg">
                                <div className='rounded-full ml-2 px-3 py-[13px] bg-gray-300'>
                                    <TbDeviceIpadSearch className='text-3xl w-15' />
                                </div>
                                <div className=''>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 font-bebas my-2"> Sección exclusiva de proyectos</h3>
                                    <p className="text-sm font-medium font-urbanist leading-6 text-gray-700 my-2">Una búsqueda ágil y sencilla por los proyectos disponibles con inteligencia articial.</p>
                                    <div className="">

                                    </div>
                                </div>
                            </div>
                        </li>
                        <li >
                            <div className="flex items-center gap-x-6 border border-gray-500 bg-white shadow-md">
                                <div className='rounded-full ml-2 px-3 py-[13px] bg-gray-300'>
                                    <SlRocket className='text-3xl w-15' />
                                </div>
                                <div className=''>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 font-bebas my-2"> Publica hoy</h3>
                                    <p className="text-sm font-medium font-urbanist leading-6 text-gray-700 my-2">Accede a la información de los planes que pensamos para ti.</p>
                                    <div className="">

                                    </div>
                                </div>
                            </div>
                        </li>
                        <li >
                            <div className="flex items-center gap-x-6 border border-gray-500 bg-white shadow-lg ">
                                <div className='rounded-full ml-2 px-3 py-[13px] bg-gray-300'>
                                    <FaHouseUser className='text-4xl w-15' />
                                </div>
                                <div className=''>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 font-bebas my-2">Conoce CasaPaz</h3>
                                    <p className="text-sm font-medium font-urbanist leading-6 text-gray-700 my-2">Accede a la información de los planes que pensamos para ti.</p>
                                    <div className="">

                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards1