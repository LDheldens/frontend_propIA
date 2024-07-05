import React, { useState, useRef, useEffect } from 'react';
import { FaTiktok, FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoIosMail } from 'react-icons/io';

function Footer() {
    return(
        <footer >
        <div className='text-center inset-x-0 flex justify-center bg-white p-4'>
            <ul className='justify-center flex text-green-500 text-3xl bg-white p-4 shadow-md shadow-green-500  pl-10 pr-10 rounded-lg'>
                <li>
                    <FaFacebookF className="ml-1 " />
                </li>
                <li>
                    <FaYoutube className="ml-8" />
                </li>
                <li>
                    <FaTiktok className="ml-8" />
                </li>
                <li>
                    <FaInstagram className="ml-8" />
                </li>
            </ul>
        </div>
        <div className=' bg-white'>
            <div className='bg-white mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-3 xl:gap-x-8 p-14'>
                <div className='flex bg-white'>
                    <div className='flex-1 font-josefin '>
                        <p className='text-gray-700 font-bebas tracking-wide font-bold mb-2'>CasaPaz Inmobiliaria</p>
                        <span className='text-gray-400 font-urbanist'>La Inmobiliaria es un nuevo e innovador Portal Inmobiliario donde podrá encontrar el inmueble que necesita.</span>
                    </div>
                </div>
                <div className='bg-white text-gray-400 text-sm flex-1 font-urbanist'>
                    <p className='text-gray-700 font-bebas tracking-wide font-bold text-base'>Accesos directos</p>
                    <nav>
                        <p className='p-2 hover:text-green-500'>Inicio</p>
                        <p className='p-2 hover:text-green-500'>Buscar propiedades</p>
                        <p className='p-2 hover:text-green-500'>Asesores</p>
                        <p className='p-2 hover:text-green-500'>Contactos</p>
                        <p className='p-2 hover:text-green-500'>Nosotros</p>
                        <p className='p-2 hover:text-green-500'>Politica de privacidad</p>
                    </nav>
                </div>
                <div className='flex-1 bg-white font-urbanist'>
                    <p className='text-gray-700 font-bebas tracking-wide font-bold'>Contáctanos</p>
                    <ul>
                        <li className='flex items-center mb-2'>
                            <div className='m-3'>
                                <BiSolidPhoneCall className='text-green-500 text-2xl' />
                            </div>
                            <div className='text-gray-500 text-sm'>
                                <h5>TELEFONO</h5>
                                (511) 4444 555
                            </div>
                        </li>
                        <li className='flex items-center'>
                            <div className='bg-white m-3'>
                                <IoIosMail className='text-green-500 text-2xl' />
                            </div>
                            <div className='flex flex-col text-xs'>
                                <h5 className='text-gray-500 whitespace-normal'>EMAILS</h5>
                                <a className='text-blue-500' href="info@remax.net.pe">info@remax.net.pe</a>
                                <a className='text-blue-500' href="">ventas@remax.net.pe</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="text-xs mx-auto flex justify-center text-white bg-green-500 p-5">
            <nav>
                <span>© Copyright 2024 Polariss Technology - Términos y Condiciones de Uso Términos y Condiciones de Contratación Política de privacidad.</span>
            </nav>
        </div>
    </footer>

    )

} 
export default Footer