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
import { FaRegUser } from "react-icons/fa"
import ChatBot from '../compGeneral/ChatBot'
import Footer from '../compGeneral/Footer'


const links = [
    {
        link: "/",
        id: 1,
    },
    {
        link: "cuenta",
        text: "CUENTA",
        id: 2,
    },
    {
        link: "publicar",
        text: "PUBLICAR",
        id: 3,
    },
    {
        link: "actividad",
        text: "ANUNCIOS",
        id: 4,
    },

    // {
    //     link: "/actividad",
    //     text: "Mi actividad",
    //     id: 3,
    // },
    // {
    //     link: "/contratacion",
    //     text: "Contrataciones",
    //     id: 5,
    // },
];

const LayoutUser = () => {
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

    const [chatBot, setChatBot] = useState(false);
    const toggleChatbot = () => {
        setChatBot(!chatBot);
    };

    return (
        <div>
            <div className="flex justify-between items-center px-5 md:px-8">
                <div className="flex items-center font-bebas tracking-wide pl-8">
                    <Link to={"/"} className="text-white  flex justify-start items-center font-semibold text-xl h-24">
                        <img src="/public/img/logo.png" alt="" width="170" height="100" />
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
                    {/* <a href="/publicar/publicar">
                        <button className="bg-white hover:bg-green-500 hover:text-white m-2 p-2 items-center flex text-gray-700 rounded-lg border border-green-500 justify-center z-60">
                            <p className="pl-1 text-sm">Publicar</p>
                        </button>
                    </a> */}
                    <a href="cuenta">
                        <button className="bg-green-500 hover:bg-gray-500 m-2 p-2 items-center flex text-white rounded-sm justify-center z-60">
                            <FaRegUser className="text-2xl" />
                            <p className="pl-1 text-sm font-urbanist">Usuario</p>
                        </button>
                    </a>
                </div>
            </div>

            <main className='bg-gray-200'>
                <Outlet />
            </main>
            <Footer />
            <div className='fixed bottom-3 right-3 z-50' >
                <button className='bg-green-500 p-5 rounded-full text-white text-4xl animate-pulse' onClick={toggleChatbot}>
                    <BiSolidChat />
                </button>

                <div className={`bg-gray-200 right-3  transition-transform duration-300 absolute top-[-410px] p-0 text-gray-600 rounded-lg shadow-lg ${chatBot ? 'translate-x-0' : 'translate-x-[500px]'}`}>
                    <ChatBot />
                </div>
            </div>
        </div>
    )
}
export default LayoutUser


