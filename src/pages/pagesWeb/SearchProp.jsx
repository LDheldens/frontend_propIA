import React from 'react'
import ItemProps from '../../components/items/ItemProps'
import { FaSearch } from "react-icons/fa"

function SearchProp() {
    return (
        <div className='p-3'>
            <div>
                <div className='bg-white flex flex-col md:flex-row p-4 gap-2'>
                    <div className=' sm: w-full md:w-1/3 sm:w-full'>
                        <select
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            className="inline-flex w-full justify-center border border-gray-300 shadow-sm px-5 py-3 bg-white text-[16px] font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-offset-2 focus:ring-offset-gray-100 font-urbanist"
                        >
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
                    <div className=" inset-0 flex items-center justify-center text-white sm:w-full">
                        <form action="" className="flex">
                            <div className="font-normal flex items-center justify-center gap-x-2 rounded-t-lg bg-white font-bebas">
                                <button className=" hover:bg-green1 hover:text-white text-gray-600 border border-gray-200 py-3 px-5 md:w-auto">
                                    Alquilar
                                </button>
                                <button className=" hover:bg-green1 hover:text-white text-gray-600 border border-gray-200 py-3 px-5 md:w-auto">
                                    Comprar
                                </button>
                                <button className=" hover:bg-green1 hover:text-white text-gray-600 border border-gray-200 py-3 px-5 md:w-auto">
                                    Proyectos
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className='container mx-auto font-urbanist md:w-full sm:w-full'>
                        <input aria-haspopup="true"
                            aria-expanded="true"
                            type="text" placeholder="Ingresa ubicaciones o características" className="inline-flex justify-center w-full border border-gray-200 shadow-sm px-5 py-3 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-offset-2 focus:ring-offset-gray-100" />
                    </div>
                    <div className="flex justify-center items-center font-urbanist">
                        <button
                            type="button"
                            className="px-5 py-3 bg-green1 text-white hover:bg-gray-500 focus:outline-none items-center flex text-mx font-bold"
                        >
                            <FaSearch className='flex mr-1  selection: ' /> Buscar
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-700 text-center p-4 font-bebas">Resultados : 18,522 Inmuebles en la Zona.</h2>
                <ItemProps />
            </div>
        </div>
    )
}

export default SearchProp