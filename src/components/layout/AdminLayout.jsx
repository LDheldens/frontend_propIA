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
import Loading from '../ui/Loading';
import Footer from '../layout/Footer'

const links = [
    {
        link: "/",
        text: "INICIO",
        id: 1,
    },
    {
        link: "dashboard",
        text: "PANEL",
        id: 2,
    },
    {
        link: "propiedades",
        text: "PROPIEDADES",
        id: 3,
    },
    {
        link: "usuarios",
        text: "USUARIOS",
        id: 4,
    },
    {
        link: "mensajes",
        text: "MENSAJES",
        id: 5,
    },
];

const LayoutAdmin = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLgScreen, setIsLgScreen] = useState(window.innerWidth >= 1024);
    const [isLoading, setIsLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    const handleResize = () => {
        setIsLgScreen(window.innerWidth >= 1024);
    };

    setTimeout(() => {
        setIsLoading(false)
    }, 3000);

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

    return (
        <>
            {
                isLoading ? (
                    <Loading />
                ) : (
                    <div>
                        <div className="flex justify-between items-center px-5 md:px-8">
                            <div className="flex items-center pl-8">
                                <Link to={"/"} className="text-white flex justify-start items-center font-semibold text-xl h-24 pr-4">
                                    <img src="/img/logo.png" alt="" width="170" height="120" />
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
                                                className="text-white text-3xl lg:text-gray-700 font-bold lg:text-[20px] transition-opacity duration-300 hover:text-green-500 hover:opacity-75 font-bebas tracking-wide"
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
                                    <button className="bg-white hover:bg-green-500 hover:text-white m-2 p-2 items-center flex text-gray-700 border border-green-500 justify-center z-60">
                                        <FaPlus />
                                        <p className="pl-1 text-sm font-urbanist">Publicar</p>
                                    </button>
                                </a>
                                <a href="/login">
                                    <button className="bg-green-500 hover:bg-gray-400 m-2 p-2 items-center flex text-white justify-center z-60"
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <MdLogin className="text-2xl" />
                                        <p className="pl-1 text-sm font-urbanist">Iniciar sesión</p>
                                    </button>
                                    {isOpen && (
                                        <div
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                        >
                                            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                                <a
                                                    href="#iniciar-sesion"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                    role="menuitem"
                                                >
                                                    Iniciar sesión
                                                </a>
                                                <a
                                                    href="#registrarse"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                    role="menuitem"
                                                >
                                                    Registrarse
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </a>
                            </div>
                        </div>

                        <main className='bg-gray-200 '>
                            <Outlet />
                        </main>
                         <Footer />
                    </div>
                )
            }
        </>
    )
}
export default LayoutAdmin


