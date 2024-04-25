import React, { useEffect, useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { BiMenuAltLeft } from "react-icons/bi";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { ImMail } from "react-icons/im";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdLogin } from "react-icons/md"
import { BiSolidChat } from "react-icons/bi"
import ChatBot from './ChatBot'


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
                        <img src="./src/assets/logo.png" alt="" width="170" height="100" />
                    </Link>
                    <div 
                        className={`absolute ${isMenuOpen ? 'flex':'hidden'} h-screen z-30 bg-black bg-opacity-75 top-0 bottom-0 left-0 flex lg:flex right-0 justify-center items-center gap-5  font-bold p-3 lg:p-0 lg:static lg:bg-transparent lg:h-auto`}
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
                                    className="text-white text-xl lg:text-gray-500 font-bold lg:text-[16px] transition-opacity duration-300 hover:text-green-400 hover:opacity-75" 
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
                <div>
                    <button className="bg-green-600 hover:bg-gray-500 m-3 p-2 items-center flex text-white rounded-lg justify-center">
                        <MdLogin className="text-2xl" />
                        <p className="pl-1 text-sm">Iniciar sesión</p>
                    </button>
                </div>
            </div>

            <main className='bg-gray-200'>
                <Outlet />
            </main>

            <footer class="bg-green-700 ">
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
                    <div className='flex bg-white'>
                        <div className='bg-white p-14 text-gray-400 text-sm flex-1'>
                            <nav>
                                <p className='p-2 hover:text-green-600'>ADQUIERE UNA FRANQUICIA</p>
                                <p className='p-2 hover:text-green-600 '>NOSOTROS</p>
                                <p className='p-2 hover:text-green-600'>NOTICIAS</p>
                                <p className='p-2 hover:text-green-600'>OFICINAS</p>
                                <p className='p-2 hover:text-green-600'>CONTACTANOS</p>
                                <p className='p-2 hover:text-green-600'>SÉ UN ASESOR</p>
                                <p className='p-2 hover:text-green-600'>BUSCA UN ASESOR</p>
                                <p className='p-2 hover:text-green-600'>POLITICA DE PRIVACIDAD</p>
                            </nav>
                        </div>
                        <div className='p-14 flex-1'>
                            <p className='text-gray-700'>INFORMES</p>
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
                                        <ImMail className='text-white bg-green-500 text-2xl' />
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
                <div className="container text-xs mx-auto flex justify-center text-white bg-green-700 p-5">
                    <nav>
                        <span>© Copyright 2024 Polariss Technology - Términos y Condiciones de Uso Términos y Condiciones de Contratación Política de privacidad.</span>
                    </nav>
                </div>
            </footer>
            <div className='fixed bottom-3 right-3 z-50' >
                <button className='bg-green-600 p-5 rounded-full text-white text-4xl animate-pulse' onClick={toggleChatbot}>
                    <BiSolidChat />
                </button>

                <div className={`bg-gray-200 right-3  transition-transform duration-300 absolute top-[-330px] p-0 text-gray-600 rounded-lg shadow-lg ${chatBot ? 'translate-x-0' : 'translate-x-[500px]'}`}>
                    <ChatBot/>
                </div>
            </div>
        </div>
    )
}
export default Layout


