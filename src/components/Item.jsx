import React, { useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineNoteAlt } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { HiHome } from "react-icons/hi2";
import ImageGallery from './ImageGallery';
import { MdOutlineLocationOn } from "react-icons/md"
import { BiArea } from "react-icons/bi"
import { FaRegBuilding } from "react-icons/fa"
import { IoBedOutline } from "react-icons/io5"
import { LuBath } from "react-icons/lu"
import { GiHomeGarage } from "react-icons/gi"
import { FaKitchenSet } from "react-icons/fa6"
import { FaWhatsapp } from "react-icons/fa"

function Item() {
    //const [modalOpen, setModalOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const images = ["./src/assets/edf1.jpeg", "./src/assets/dep1.jpg", "./src/assets/dep3.jpeg", "./src/assets/dep4.webp", "./src/assets/dep1.jpg"]; // Rutas de tus imágenes

    const [modalOpen, setModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (index) => {
        setCurrentImageIndex(index);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
    // const openModal = (index) => {
    //     setSelectedImageIndex(index);
    //     setModalOpen(true);
    // };

    // const closeModal = () => {
    //     setModalOpen(false);
    //     setSelectedImageIndex(null);
    // };

    const properties = [
        {
            id: 1,
            locate: 'Miraflores, Lima, Lima',
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
            type: 'DEPARTAMENTO EN VENTA'
        },
    ]

    const products = [
        {
            id: 1,
            locate: 'Lima, Lima, Miraflores',
            href: '/item',
            imageSrc: './src/assets/plan1.webp',
            imageAlt: "Front of men's Basic Tee in black.",
            price: 'S/. 360,000.00 ',
            ruc: 'En construcción',
            society: '2 trimestre 2024',
            type: 'HOTEL EN VENTA',
            area: '5,642.00 m²',
        },
        {
            id: 2,
            locate: 'Lima, Lima, Miraflores',
            href: '#',
            imageSrc: './src/assets/dep4.webp',
            imageAlt: "Front of men's Basic Tee in black.",
            price: 'S/. 360,000.00 ',
            ruc: 'En construcción',
            society: 'Junio 2025',
            type: 'HOTEL EN VENTA',
            area: '5,642.00 m²',
        },
        {
            id: 2,
            locate: 'Lima, Lima, Miraflores',
            href: '#',
            imageSrc: './src/assets/dep4.webp',
            imageAlt: "Front of men's Basic Tee in black.",
            price: 'S/. 360,000.00 ',
            ruc: 'En construcción',
            society: 'Junio 2025',
            type: 'HOTEL EN VENTA',
            area: '5,642.00 m²',
        },
    ]

    return (
        <div className='bg-gray-100'>
            <div className='m-3'>
                <div className='justify-end border-gray-500'>
                    <div className=" inset-0 flex items-center justify-end text-white ">
                        <form action="" className="flex">
                            <div className="font-normal flex items-center justify-center rounded-t bg-white m-2">
                                <button className="flex border border-gray-600 hover:bg-green-700 hover:text-white text-gray-600  py-2 px-4 rounded-lg">
                                    Favorito
                                    <FaRegHeart className='m-1 justify-center' />
                                </button>
                                <button className="flex border border-gray-600 hover:bg-green-700 hover:text-white text-gray-600  py-2 px-4 rounded-lg ml-2">
                                    Compartir
                                    <IoShareSocialOutline className='m-1 justify-center' />
                                </button>
                                <button className="flex border border-gray-600 hover:bg-green-700 hover:text-white text-gray-600 py-2 px-4 rounded-lg ml-2">
                                    Notas personales
                                    <MdOutlineNoteAlt className='m-1 justify-center' />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-4">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Imagen ${index + 1}`}
                            className={index === 0 ? "w-160 h-160 object-cover cursor-pointer" : "w-90 h-60 object-cover cursor-pointer"}
                            onClick={() => openModal(index)}
                        />
                    ))}
                    {modalOpen && (
                        <ImageModal
                            images={images}
                            onClose={closeModal}
                            selectedImageIndex={selectedImageIndex}
                        />
                    )}
                </div> */}
                <div>
                    {/* Integrar el ImageViewerModal */}
                    <ImageGallery imageUrls={images} />

                    <div className="col-span-1 relative">
                        {/* <img
                            src={images[0]}
                            alt="Imagen 1"
                            className="absolute inset-0 w-full h-full object-cover"
                        /> */}
                        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-2">

                        </div>
                    </div>
                </div>
                <div>

                    {/* <section class="bg-white">
                        <div class="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
                            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
                                <div class="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
                                    <a href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                                        <img src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                        <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                        <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Wines</h3>
                                    </a>
                                </div>
                                <div class="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
                                    <a href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
                                        <img src="https://images.unsplash.com/photo-1504675099198-7023dd85f5a3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                        <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                        <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Gin</h3>
                                    </a>
                                    <div class="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                                        <a href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                            <img src="https://images.unsplash.com/photo-1571104508999-893933ded431?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                            <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                            <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Whiskey</h3>
                                        </a>
                                        <a href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                            <img src="https://images.unsplash.com/photo-1626897505254-e0f811aa9bf7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                            <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                            <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Vodka</h3>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
                                    <a href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                                        <img src="https://images.unsplash.com/photo-1693680501357-a342180f1946?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                        <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                        <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Brandy</h3>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section> */}
                </div>
                <div className='flex mt-4'>
                    <div className='m-4 w-full '>
                        <div>
                            <h5>Detalles</h5>
                        </div>
                        <div>
                            <div className=''>
                                <FaLocationDot />
                                <p>Joaquin Bernal 708 esquina con Francisco de Zela, Risso, Lince</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>
                                    {properties.map((props) => (
                                        <div class="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50 relative shadow-lg rounded-b-lg">
                                            <div class="group relative flex flex-col overflow-hidden rounded-t-lg px-4 pb-4 pt-4 mb-4">
                                                <div className='flex'>
                                                    <span className=''>{props.price}</span>
                                                </div>
                                                <div className='flex m-2'>
                                                    <div className='rounded-full bg-green-500 p-2 text-xl text-white'>
                                                        <MdOutlineLocationOn />
                                                    </div>
                                                    <span className='m-1'>{props.locate}</span>
                                                </div>
                                                <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                            </div>
                                            <div class="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 ">
                                                <div class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-4">
                                                    <div className='flex m-2'>
                                                        <div className='rounded-full bg-green-500 p-2 text-xl text-white' >
                                                            <BiArea />
                                                        </div>
                                                        <span className='m-1'> {props.area}</span>

                                                    </div>
                                                    <div className='flex m-2'>
                                                        <div className='rounded-full bg-green-500 p-2 text-xl text-white'>
                                                            <FaRegBuilding />
                                                        </div>
                                                        <span className='m-1'>Pisos: {props.duildings}</span>
                                                    </div>
                                                    <div className='flex m-2'>
                                                        <div className='rounded-full bg-green-500 p-2 text-xl text-white'>
                                                            <IoBedOutline />
                                                        </div>
                                                        <span className='m-1'>Habitaciones: {props.debs}</span>
                                                    </div>
                                                    {/* <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div> */}
                                                </div>
                                                <div class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-4">
                                                    {/* <img src="./src/assets/dep4.webp" alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" /> */}
                                                    <div className='flex m-2'>
                                                        <div className='rounded-full bg-green-500 p-2 text-xl text-white'>
                                                            <LuBath />
                                                        </div>
                                                        <span className='m-1'>Baños: {props.bath}</span>
                                                    </div>
                                                    <div className='flex m-2'>
                                                        <div className='rounded-full bg-green-500 p-2 text-xl text-white'>
                                                            <GiHomeGarage />
                                                        </div>
                                                        <span className='m-1'>Cocheras: {props.garage}</span>
                                                    </div>
                                                    <div className='flex m-2'>
                                                        <div className='rounded-full bg-green-500 p-2 text-xl text-white'>
                                                            <FaKitchenSet />
                                                        </div>
                                                        <span className='m-1'>Cocinas: {props.kitchen}</span>
                                                    </div>
                                                    {/* <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div> */}
                                                </div>
                                            </div>
                                            <h3 class="bg-green-500 z-10 rounded-full text-2xl font-medium text-white absolute top-0 right-0 mr-2 p-1 pl-2 pr-2 xs:text-lg mt-3 md:text-lg">{props.type}</h3>
                                            <FaWhatsapp class="bg-green-500 z-10 rounded-full text-4xl font-medium text-white absolute bottom-0  right-0 mr-2 p-1 mb-6 shadow-lg" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
                                {products.map((product) => (
                                    <div key={product.id} className=" group m-2 ">
                                        <div className=''>
                                            <a href="">
                                                <div className="w-full overflow-hidden rounded-t-lg bg-gray-200 lg:h-80">
                                                    <img
                                                        src={product.imageSrc}
                                                        alt={product.imageAlt}
                                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                                    />
                                                </div>
                                            </a>
                                        </div>
                                        <div className='bg-white p-2 '>
                                            <div className="mt-4  ">
                                                <div className='ml-3'>
                                                    <p className="text-xs font-medium text-gray-700 mb-4">{product.price}</p>
                                                    <h3 className="text-xs text-gray-600 mb-5 flex">
                                                        <a href={product.href}>
                                                        </a>
                                                    </h3>
                                                </div>
                                                <div className='rounded-lg border border-green-400 bg-white m-2 p-2 w-full'>
                                                    <button className='w-full'>
                                                        Contactar
                                                    </button>
                                                </div>
                                                <div className='rounded-lg bg-green-600 m-2 p-2 w-full'>
                                                    <button className='w-full'>
                                                        Cotizar
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div>
                                <h4>Descripción</h4>
                                <p>
                                    El proyecto “Schell” está ubicado estratégicamente en la esquina de las calles Schell y Grimaldo del Solar, en la zona más céntrica y “vibrante” del distrito de Miraflores, cercano a restaurantes y tiendas, de muy fácil acceso a través de las principales vías del distrito.
                                    Características del proyecto

                                </p>
                            </div>
                        </div>
                        <div>
                            <div className='mt-6 border border-spacing-3'>
                                <h3>Ubicación</h3>
                                {/* <Map /> */}
                            </div>
                        </div>
                    </div>
                    <div className="flex w-90">
                        <div className=" border border-spacing-3 p-4 rounded-lg mr-6 pb-12 ">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Contáctate con EFRON ARQUITECTOS por el proyecto en Risso, Lince</h2>
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
                                <div className="sm:col-span-4">
                                    <label
                                        htmlFor="Username"
                                        className="relative rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        <input
                                            type="text"
                                            id="Username"
                                            class=" p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="Username"
                                        />

                                        <span
                                            className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-gray-100 p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                        >
                                            G-mail
                                        </span>
                                    </label>
                                    {/* <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Email
                                    </label>
                                    <div className="mt-1">
                                        <input id="email" placeholder='Email' name="email" type="email" autoComplete="email"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div> */}
                                </div>
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="Username"
                                        className="relative rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        <input
                                            type="text"
                                            id="Username"
                                            class="peer p-1 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="Username"
                                        />

                                        <span
                                            className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-gray-100 p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                        >
                                            Nombres
                                        </span>
                                    </label>
                                    {/* <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Nombres
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div> */}
                                </div>

                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="Username"
                                        className="relative rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        <input
                                            type="text"
                                            id="Username"
                                            class="p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="Username"
                                        />

                                        <span
                                            className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-gray-100 p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                        >
                                            Apellidos
                                        </span>
                                    </label>
                                    {/* <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Apellidos
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div> */}
                                </div>
                                <div className="sm:col-span-4">
                                    <label
                                        htmlFor="Username"
                                        className="relative rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        <input
                                            type="text"
                                            id="Username"
                                            class="p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="Username"
                                        />

                                        <span
                                            className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-gray-100 p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                        >
                                            DNI
                                        </span>
                                    </label>
                                    {/* <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        DNI
                                    </label>
                                    <div className="mt-1">
                                        <input type="number"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div> */}
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                        Unidad de interés
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country-name"
                                            aria-placeholder=''
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                        >
                                            <option>1 Dormitorio</option>
                                            <option>2 Dormitorios</option>
                                            <option>3 Dormitorios</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label
                                        htmlFor="Username"
                                        className="relative rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        <input
                                            type="text"
                                            id="Username"
                                            class="p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="Username"
                                        />

                                        <span
                                            className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-gray-100 p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                        >
                                            Mensage
                                        </span>
                                    </label>
                                    {/* <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                        Mensage
                                    </label>
                                    <div className="mt-2">
                                        <input type="text" name="street-address"
                                            id="street-address"
                                            autoComplete="street-address"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div> */}
                                </div>
                            </div>
                            <div className='flex mt-4'>
                                <input type="checkbox" className='m-1 p-3' />
                                <span className='text-[12px]'>Acepto los Términos y Condiciones de Uso. y las politicas de privacidad.</span>
                            </div>
                            <div className='flex'>
                                <input type="checkbox" className='m-1 p-3' />
                                <span className='text-[12px]'>Autorizo el uso de mi información para fines adicionales.</span>
                            </div>
                            <div className='mt-4'>
                                <button className='bg-green-600 w-full p-3 rounded-lg'>
                                    Contactar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h5>Parque Castilla</h5>
                </div>
            </div>
        </div>
    )
}

export default Item