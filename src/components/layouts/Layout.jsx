import React, { useEffect, useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { BiMenuAltLeft } from "react-icons/bi";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io"
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdLogin } from "react-icons/md"
import { BiSolidChat } from "react-icons/bi"
import { FaPlus } from "react-icons/fa6";
import ChatBot from '../ChatBot'


const links = [
    {
        link: "/",
        text: "INICIO",
        id: 1,
    },
    {
        link: "/buscar",
        text: "BUSCAR PROPIEDADES",
        id: 2,
    },
    {
        link: "/asesores",
        text: "ASESORES",
        id: 3,
    },
    {
        link: "/contacto",
        text: "CONTACTOS",
        id: 5,
    },
];

const Layout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLgScreen, setIsLgScreen] = useState(window.innerWidth >= 1024);

    const handleResize = () => {
        setIsLgScreen(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);

    const [windowDimension, setWindowDimension] = useState({
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
    });

    const detectZise = () => {
        setWindowDimension({
            innerHeight: window.innerHeight,
            innerWidth: window.innerWidth,
        });
    };



    // useEffect(() => {
    //     window.addEventListener("resize", detectZise);
    //     return () => {
    //         window.addEventListener("resize", detectZise);
    //     };
    // }, [windowDimension.innerWidth]);

    const [chatBot, setChatBot] = useState(false);
    const toggleChatbot = () => {
        setChatBot(!chatBot);
    };

    return (
        <div>
            <div className="flex justify-between items-center px-5 md:px-8">
                <div className="flex items-center">
                    <Link to={"/"} className="text-white justify-start font-semibold text-xl">
                        <img src="/src/assets/logo.png" alt="" width="170" height="100" />
                    </Link>
                    <div
                        className={`absolute ${isMenuOpen ? 'flex' : 'hidden'} h-screen z-30 bg-black bg-opacity-75 top-0 bottom-0 left-0 flex lg:flex right-0 justify-center items-center gap-5  font-bold p-3 lg:p-0 lg:static lg:bg-transparent lg:h-auto`}
                    >
                        {
                            isMenuOpen ? (
                                <button
                                    onClick={() => setIsMenuOpen(false)} className='bg-red-600 absolute top-5 right-5 rounded-full transition-colors duration-300 hover:bg-red-800  p-3'
                                >
                                    <AiOutlineClose className='text-white text-2xl font-bold' />
                                </button>
                            ) : null
                        }
                        <div className='flex flex-col gap-10 lg:gap-5 lg:flex-row'>
                            {links.map(link => (
                                <Link
                                    to={link.link}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-white text-3xl lg:text-gray-500 font-bold lg:text-[20px] transition-opacity duration-300 hover:text-green-400 hover:opacity-75 font-bebas"
                                    key={link.id}
                                >
                                    {link.text}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <AiOutlineClose className="text-[35px] text-gray-500" /> : <AiOutlineMenu className="text-[35px] text-gray-500" />}
                    </button>
                </div>
                <div className='flex flex-col md:flex-row'>
                    <a href="/publicar/formulario">
                        <button className="bg-white hover:bg-green-600 hover:text-white m-2 p-2 items-center flex text-gray-700 rounded-lg border border-green-500 justify-center z-60">
                            <FaPlus />
                            <p className="pl-1 text-sm font-urbanist font-bold">Publicar</p>
                        </button>
                    </a>
                    <a href="/login">
                        <button className="bg-green-600 hover:bg-gray-500 m-2 p-2 items-center flex text-white rounded-lg justify-center z-60">
                            <MdLogin className="text-2xl" />
                            <p className="pl-1 text-sm font-bold font-urbanist">Iniciar sesión</p>
                        </button>
                    </a>
                </div>
            </div>

            <main className='bg-gray-200'>
                <Outlet />
            </main>

            <footer class="">
                <div className='text-center inset-x-0 flex justify-center bg-white p-4'>
                    <ul className='justify-center flex text-green-600 text-3xl bg-white p-4 shadow-md shadow-green-400  pl-10 pr-10 rounded-lg'>
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
                                <p className='text-gray-700 font-bebas font-bold mb-2'>CasaPaz Inmobiliaria</p>
                                <span className='text-gray-400 font-urbanist'>La Inmobiliaria es un nuevo e innovador Portal Inmobiliario donde podrá encontrar el inmueble que necesita.</span>
                            </div>
                        </div>
                        <div className='bg-white text-gray-400 text-sm flex-1 font-urbanist'>
                            <p className='text-gray-700 font-bebas font-bold text-base'>Accesos directos</p>
                            <nav>
                                <p className='p-2 hover:text-green-600'>Inicio</p>
                                <p className='p-2 hover:text-green-600'>Buscar propiedades</p>
                                <p className='p-2 hover:text-green-600'>Asesores</p>
                                <p className='p-2 hover:text-green-600'>Contactos</p>
                                <p className='p-2 hover:text-green-600'>Nosotros</p>
                                <p className='p-2 hover:text-green-600'>Politica de privacidad</p>
                            </nav>
                        </div>
                        <div className='flex-1 bg-white font-urbanist'>
                            <p className='text-gray-700 font-bebas font-bold'>Contáctanos</p>
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
                <div className="text-xs mx-auto flex justify-center text-white bg-green-700 p-5">
                    <nav>
                        <span>© Copyright 2024 Polariss Technology - Términos y Condiciones de Uso Términos y Condiciones de Contratación Política de privacidad.</span>
                    </nav>
                </div>
            </footer>
            <div className='fixed bottom-3 right-3 z-50' >
                <button className='bg-green-600 p-5 rounded-full text-white text-4xl animate-pulse' onClick={toggleChatbot}>
                    <BiSolidChat />
                </button>

                <div className={`bg-gray-200 right-3  transition-transform duration-300 absolute top-[-410px] p-0 text-gray-600 rounded-lg shadow-lg ${chatBot ? 'translate-x-0' : 'translate-x-[500px]'}`}>
                    <ChatBot />
                </div>
            </div>
        </div>
    )
}
export default Layout


