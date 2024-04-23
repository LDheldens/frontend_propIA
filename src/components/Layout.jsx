import React, { useEffect, useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
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
    // {
    //     link: "/oficinas",
    //     text: "OFICINAS",
    //     id: 4,
    // },
];

const Layout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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

    useEffect(() => {
        window.addEventListener("resize", detectZise);
        return () => {
            window.addEventListener("resize", detectZise);
        };
    }, [windowDimension.innerWidth]);

    const [chatBot, setChatBot] = useState(false);
    const toggleChatbot = () => {
        setChatBot(!chatBot);
    };

    return (
        <div>
            {/* <div className="bg-blue-900 p-2">
                <div className="flex items-center justify-end text-white ml-4 text-sm">
                    <div className="ml-4 text-xs">
                        <span>
                            Sé un asesor
                        </span>
                    </div>
                    <div className="ml-4 text-xs">
                        <span>
                            Franquicias
                        </span>
                    </div>
                    <FaFacebookF className="ml-4 " />
                    <FaTiktok className="ml-4" />
                    <FaYoutube className="ml-4" />
                    <FaInstagram className="ml-4" />
                    <IoMdLogIn className='ml-4 mr-1' />
                    <div className="ml-1 mr-8 text-xs">
                        <span>
                            Mi RE/MAX
                        </span>
                    </div>

                </div>
            </div> */}
            <div className="flex">
                <div className=" ml-4 items-center p-2">
                    <Link to={"/"} className="text-white justify-start font-semibold text-xl " >
                        <img src="./src/assets/logo.png" alt="" width="170" height="100" />
                    </Link>
                </div>
                <div className={
                    !isMenuOpen
                        ? " mr-5 flex  items-center w-full px-4 justify-start bg-white"
                        : "flex flex-col w-full px-4 justify-around bg-green-700"
                } >
                    {
                        windowDimension.innerWidth > 768 ?
                            links.map((l) => (
                                <Link className="text-sm font-normal justify-end text-gray-500 hover:text-green-600 hover:underline ml-2 mr-2 pl-2 pr-2" to={l.link} key={l.id}>{l.text}</Link>
                            )) :
                            isMenuOpen &&
                            links.map((l) => (
                                <Link className="text-m text-gray-400 font-semibold" to={l.link} key={l.id}>{l.text}</Link>
                            ))
                    }
                    {!isMenuOpen && windowDimension.innerWidth < 768 ? (
                        <AiOutlineMenu cursor={"pointer"} size={24} color="blue-900" onClick={() => setIsMenuOpen(true)} />
                    ) : (
                        windowDimension.innerWidth < 768 && (
                            <AiOutlineClose cursor={"pointer"} size={24} color="blue-900" onClick={() => setIsMenuOpen(false)} />))}
                </div>
                <div className='justify-center'>
                    <div className='w-40 h-5 text-center items-center justify-center mt-8' >
                        <a href="/login">
                            <button className='bg-green-600 hover:bg-gray-500 m-3 p-2 items-center flex text-white rounded-lg justify-center' width="250" height="250" >
                                <MdLogin className='text-2xl' />
                                <p className='pl-1 text-sm'>Iniciar sesión</p>
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            <main className='bg-gray-200'>
                <Outlet />
            </main>

            <footer class="bg-green-700 relative">
                <div className='text-center inset-x-0 mx-auto bg-white p-4  '>
                    <ul className='justify-center flex text-green-600 text-3xl bg-white p-4 shadow-md absolute top-[-40px] right-[35%] pl-10 pr-10 rounded-lg'>
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
                <button className='bg-green-600 p-5 rounded-full text-white text-4xl' onClick={toggleChatbot}>
                    <BiSolidChat />
                </button>
                <div className={`bg-gray-200 right-3 translate-x-[500px] transition-transform duration-300 absolute top-[-330px] p-0 text-gray-600 rounded-lg shadow-lg ${chatBot ? 'translate-x-0' : ''}`}>
                    <div >
                        <ChatBot />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Layout


