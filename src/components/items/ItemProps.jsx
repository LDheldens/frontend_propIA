import React from 'react'
import { FaRegHeart } from "react-icons/fa"
import { MdOutlineLocationOn } from "react-icons/md"
import { BiArea } from "react-icons/bi"
import { FaRegBuilding } from "react-icons/fa"
import { IoBedOutline } from "react-icons/io5"
import { LuBath } from "react-icons/lu"
import { GiHomeGarage } from "react-icons/gi"
import { FaKitchenSet } from "react-icons/fa6"
import { FaWhatsapp } from "react-icons/fa"
import { MdOutlineLocalOffer } from "react-icons/md"

function ItemProps() {
    const properties = [
        {
            id: 1,
            locate: 'Miraflores, Lima, Lima',
            href: '/item',
            imageSrc: './src/assets/dep1.jpeg',
            imageAlt: "properties in sell.",
            price: 'S/. 360,000.00 ',
            area: '5,642.00 m²',
            debs: '4',
            duildings: '4',
            bath: '2',
            garage: '2',
            kitchen: '2',
            type: 'Departamento en venta',
            propts: '24',
            published: 'Publicado hace una semana en Tacna, TA',
        },
        {
            id: 2,
            locate: 'Lince, Lima, Lima',
            href: '/item',
            imageSrc: './src/assets/dep2.jpeg',
            imageAlt: "properties in sell.",
            price: 'S/. 360,000.00 ',
            area: '5,642.00 m²',
            debs: '4',
            duildings: '4',
            bath: '2',
            garage: '2',
            kitchen: '2',
            type: 'Casa en venta',
            propts: '24',
            published: 'Publicado hace una semana en Tacna, TA',
        },
        {
            id: 3,
            locate: 'San Borja, Lima, Lima',
            href: '/item',
            imageSrc: './src/assets/dep3.jpeg',
            imageAlt: "properties in sell.",
            price: 'S/. 360,000.00 ',
            area: '5,642.00 m²',
            debs: '4',
            duildings: '4',
            bath: '2',
            garage: '2',
            kitchen: '2',
            type: 'Departamento en venta',
            propts: '24',
            published: 'Publicado hace una semana en Tacna, TA',
        },
        {
            id: 4,
            locate: 'Lince, Lima, Lima',
            href: '/item',
            imageSrc: './src/assets/dep2.jpeg',
            imageAlt: "properties in sell.",
            price: 'S/. 360,000.00 ',
            area: '5,642.00 m²',
            debs: '4',
            duildings: '4',
            bath: '2',
            garage: '2',
            kitchen: '2',
            type: 'Casa en venta',
            propts: '24',
            published: 'Publicado hace una semana en Tacna, TA',
        },
        {
            id: 5,
            locate: 'Lince, Lima, Lima',
            href: '/item',
            imageSrc: './src/assets/dep5.jpeg',
            imageAlt: "properties in sell.",
            price: 'S/. 360,000.00 ',
            area: '5,642.00 m²',
            debs: '4',
            duildings: '4',
            bath: '2',
            garage: '2',
            kitchen: '2',
            type: 'Casa en venta',
            propts: '24',
            published: 'Publicado hace una semana en Tacna, TA',
        },
        {
            id: 6,
            locate: 'Lince, Lima, Lima',
            href: '/item',
            imageSrc: './src/assets/dep6.webp',
            imageAlt: "properties in sell.",
            price: 'S/. 360,000.00 ',
            area: '5,642.00 m²',
            debs: '4',
            duildings: '4',
            bath: '2',
            garage: '2',
            kitchen: '2',
            type: 'Casa en venta',
            propts: '24',
            published: 'Publicado hace una semana en Lima, LI',
        },
    ]
    return (
        <div>
            <div>
                <div className='m-4'>
                    <div>
                        {properties.map((props) => (
                            <section class="bg-white w-full">
                                <div class="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6 shadow-lg">
                                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 h-full ">
                                        <div class="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col shadow-lg">
                                            <div onClick={() => openModal(0)} class="group relative flex flex-col overflow-hidden  px-4 pb-4 pt-40 flex-grow">
                                                <a href="/item">
                                                    <img src={props.imageSrc} alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                                    <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                                </a>
                                                <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-lg md:text-xl font-urbanist">{props.type}</h3>
                                            </div>
                                        </div>
                                        <div class="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50 relative shadow-lg">
                                            <div class="group relative flex flex-col overflow-hidden  px-1 font-urbanist">
                                                <div className='flex'>
                                                    <span className='font-bebas'>{props.price}</span>
                                                </div>
                                                <div className='flex'>
                                                    <span className=''>{props.published}</span>
                                                </div>
                                                <div className='flex m-2'>
                                                    <div className='rounded-full bg-gray-400 p-2 text-xl text-white'>
                                                        <MdOutlineLocationOn />
                                                    </div>
                                                    <span className='m-1'>{props.locate}</span>
                                                </div>
                                                <div className='flex m-2'>
                                                    <div className='rounded-full bg-gray-400 p-2 text-xl text-white'>
                                                        <MdOutlineLocalOffer />
                                                    </div>
                                                    <span className='m-1'>Propuestas: {props.propts}</span>
                                                </div>
                                                <div class="absolute inset-0 bg-gradient-to-b from-gray-400/25 to-gray-400/5"></div>
                                            </div>
                                            <div class="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 ">
                                                <div class="group relative flex flex-col overflow-hidden rounded-lg px-1 font-urbanist">
                                                    <div className='flex m-2'>
                                                        <div className='h-9 w-9 rounded-full bg-gray-400 p-2 text-xl text-white' >
                                                            <BiArea />
                                                        </div>
                                                        <span className='m-1'> {props.area}</span>

                                                    </div>
                                                    <div className='flex m-2'>
                                                        <div className='h-9 w-9 rounded-full bg-gray-400 p-2 text-xl text-white'>
                                                            <FaRegBuilding />
                                                        </div>
                                                        <span className='m-1'>Pisos: {props.duildings}</span>
                                                    </div>
                                                    <div className='flex m-2'>
                                                        <div className='h-9 w-9 rounded-full bg-gray-400 p-2 text-xl text-white'>
                                                            <IoBedOutline />
                                                        </div>
                                                        <span className='m-1'>Habitaciones: {props.debs}</span>
                                                    </div>
                                                    {/* <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div> */}
                                                </div>
                                                <div class="group relative flex flex-col overflow-hidden rounded-lg px-1  font-urbanist">
                                                    {/* <img src="./src/assets/dep4.webp" alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" /> */}
                                                    <div className='flex m-2'>
                                                        <div className='h-9 w-9 rounded-full bg-gray-400 p-2 text-xl text-white'>
                                                            <LuBath />
                                                        </div>
                                                        <span className='m-1'>Baños: {props.bath}</span>
                                                    </div>
                                                    <div className='flex m-2'>
                                                        <div className='h-9 w-9 rounded-full bg-gray-400 p-2 text-xl text-white'>
                                                            <GiHomeGarage />
                                                        </div>
                                                        <span className='m-1'>Cocheras: {props.garage}</span>
                                                    </div>
                                                    <div className='flex m-2'>
                                                        <div className='h-9 w-9 rounded-full bg-gray-400 p-2 text-xl text-white'>
                                                            <FaKitchenSet />
                                                        </div>
                                                        <span className='m-1'>Cocinas: {props.kitchen}</span>
                                                    </div>
                                                    {/* <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div> */}
                                                </div>
                                            </div>
                                            <FaWhatsapp class="bg-green-500 z-10 rounded-full text-4xl font-medium text-white absolute bottom-0  right-0 mr-2 p-1 mb-6 shadow-lg" />
                                        </div>
                                    </div>
                                </div>
                            </section>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemProps