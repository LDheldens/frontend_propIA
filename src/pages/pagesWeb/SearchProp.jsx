import React from 'react'
import ItemProps from '../../components/items/ItemProps'
import { FaSearch } from "react-icons/fa"

function SearchProp() {
    return (
        <div className='p-6'>
            <div>
                <div>
                    <div className='flex rounded-b-lg rounded-r-lg bg-white'>
                        <div className='p-4 w-full sm:w-1/2 md:w-1/3'>
                            <select
                                id="country"
                                name="country"
                                autoComplete="country-name"
                                className="inline-flex w-full justify-center rounded border border-gray-300 shadow-sm px-4 py-2 bg-white text-[16px] font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-offset-2 focus:ring-offset-gray-100"
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
                        <div className=" inset-0 flex items-center  text-white ">
                            <form action="" className="flex">
                                <div className="font-normal flex flex-col md:flex-row items-center justify-center rounded-t-lg p-2 bg-white">
                                    <button className=" hover:bg-green-700 hover:text-white text-gray-600 border border-gray-200 p-2 m-2 py-2 px-4 rounded w-full md:w-auto">
                                        Alquilar
                                    </button>
                                    <button className=" hover:bg-green-700 hover:text-white text-gray-600 border border-gray-200 p-2 m-2 py-2 px-4 rounded w-full md:w-auto">
                                        Comprar
                                    </button>
                                    <button className=" hover:bg-green-700 hover:text-white text-gray-600 py-2 px-4 border border-gray-200 p-2 m-2 rounded w-full md:w-auto">
                                        Proyectos
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className='container mx-auto p-4'>
                            <input aria-haspopup="true"
                                aria-expanded="true"
                                type="text" placeholder="Ingresa ubicaciones o características" className="inline-flex justify-center w-full border border-gray-200 shadow-sm px-2 py-3 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-offset-2 focus:ring-offset-gray-100 rounded" />
                        </div>
                        <div className="flex justify-center items-center p-4 space-x-4">
                            <button
                                type="button"
                                className="px-5 py-3 bg-green-600 text-white hover:bg-gray-500 focus:outline-none rounded-lg items-center flex text-mx font-bold"
                            >
                                <FaSearch className='flex mr-1 selection: ' /> Buscar
                            </button>
                        </div>
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