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

function Propertie({ propertie }) {
    console.log('xdxd', propertie);
    return (
        <section class="bg-white w-full">
            <div class="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6 shadow-lg">
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 h-full ">
                    <div class="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col shadow-lg">
                        <div class="group relative flex flex-col overflow-hidden  px-4 pb-4 pt-40 flex-grow">
                            <a href="/item">
                                <img src={propertie.imageSrc} alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                            </a>
                            <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-lg md:text-xl font-urbanist">{propertie.type_property}</h3>
                        </div>
                    </div>
                    <div class="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50 relative shadow-lg">
                        <div class="group relative flex flex-col overflow-hidden  px-1 font-urbanist">
                            <div className='flex'>
                                <span className='font-bebas'>{propertie.price}</span>
                            </div>
                            <div className='flex'>
                                <span className=''>{propertie.published}</span>
                            </div>
                            <div className='flex m-2'>
                                <div className='rounded-full bg-gray-400 p-2 text-xl text-white'>
                                    <MdOutlineLocationOn />
                                </div>
                                <span className='m-1'>{propertie.adress}</span>
                            </div>
                            <div className='flex m-2'>
                                <div className='rounded-full bg-gray-400 p-2 text-xl text-white'>
                                    <MdOutlineLocalOffer />
                                </div>
                                <span className='m-1'>Propuestas: {propertie.propts}</span>
                            </div>
                            <div class="absolute inset-0 bg-gradient-to-b from-gray-400/25 to-gray-400/5"></div>
                        </div>
                        <div class="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 ">
                            <div class="group relative flex flex-col overflow-hidden rounded-lg px-1 font-urbanist">
                                <div className='flex m-2'>
                                    <div className='h-9 w-9 rounded-full bg-gray-400 p-2 text-xl text-white' >
                                        <BiArea />
                                    </div>
                                    <span className='m-1'> {propertie.area_property}</span>

                                </div>
                                <div className='flex m-2'>
                                    <div className='h-9 w-9 rounded-full bg-gray-400 p-2 text-xl text-white'>
                                        <FaRegBuilding />
                                    </div>
                                    <span className='m-1'>Pisos: {propertie.floors_number}</span>
                                </div>
                                <div className='flex m-2'>
                                    <div className='h-9 w-9 rounded-full bg-gray-400 p-2 text-xl text-white'>
                                        <IoBedOutline />
                                    </div>
                                    <span className='m-1'>Habitaciones: {propertie.debs}</span>
                                </div>
                                {/* <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div> */}
                            </div>
                            <div class="group relative flex flex-col overflow-hidden rounded-lg px-1  font-urbanist">
                                {/* <img src="./src/assets/dep4.webp" alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" /> */}
                                <div className='flex m-2'>
                                    <div className='h-9 w-9 rounded-full bg-gray-400 p-2 text-xl text-white'>
                                        <LuBath />
                                    </div>
                                    <span className='m-1'>Baños: {propertie.bathrooms_number}</span>
                                </div>
                                <div className='flex m-2'>
                                    <div className='h-9 w-9 rounded-full bg-gray-400 p-2 text-xl text-white'>
                                        <GiHomeGarage />
                                    </div>
                                    <span className='m-1'>Cocheras: {propertie.garages_number}</span>
                                </div>
                                <div className='flex m-2'>
                                    <div className='h-9 w-9 rounded-full bg-gray-400 p-2 text-xl text-white'>
                                        <FaKitchenSet />
                                    </div>
                                    <span className='m-1'>Cocinas: {propertie.kitchens_number}</span>
                                </div>
                                {/* <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div> */}
                            </div>
                        </div>
                        <FaWhatsapp class="bg-green-500 z-10 rounded-full text-4xl font-medium text-white absolute bottom-0  right-0 mr-2 p-1 mb-6 shadow-lg" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Propertie