import React, { useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineNoteAlt } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { HiHome } from "react-icons/hi2";
import ImageGallery from '../ImageGallery';
import { MdOutlineLocationOn } from "react-icons/md"
import { BiArea } from "react-icons/bi"
import { FaRegBuilding } from "react-icons/fa"
import { IoBedOutline } from "react-icons/io5"
import { LuBath } from "react-icons/lu"
import { GiHomeGarage } from "react-icons/gi"
import { FaKitchenSet } from "react-icons/fa6"
import { FaWhatsapp } from "react-icons/fa"
import { GiTap } from "react-icons/gi"
import { FaRegLightbulb } from "react-icons/fa"
import { GiKitchenScale } from "react-icons/gi"
import { MdOutlineLocalOffer } from "react-icons/md"
import SendMsg from '../SendMsg';
import Map from '../Map';

function Item() {
    //const [modalOpen, setModalOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const images = ["./src/assets/edf1.jpeg", "./src/assets/dep1.jpeg", "./src/assets/dep3.jpeg", "./src/assets/dep4.jpeg", "./src/assets/dep5.jpeg"]; // Rutas de tus imágenes

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
            type: 'Departamento en venta',
            propts: '24',
            published: 'Publicado hace una semana en Tacna, TA',
        },
    ]

    const products = [
        {
            id: 1,
            locate: 'Lima, Lima, Miraflores',
            href: '/item',
            imageSrc: './src/assets/dep8.jpeg',
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
            imageSrc: './src/assets/dep6.webp',
            imageAlt: "Front of men's Basic Tee in black.",
            price: 'S/. 360,000.00 ',
            ruc: 'En construcción',
            society: 'Junio 2025',
            type: 'HOTEL EN VENTA',
            area: '5,642.00 m²',
        },
        {
            id: 3,
            locate: 'Lima, Lima, Miraflores',
            href: '#',
            imageSrc: './src/assets/dep7.jpeg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: 'S/. 360,000.00 ',
            ruc: 'En construcción',
            society: 'Junio 2025',
            type: 'HOTEL EN VENTA',
            area: '5,642.00 m²',
        },
        {
            id: 4,
            locate: 'Lima, Lima, Miraflores',
            href: '#',
            imageSrc: './src/assets/dep4.jpeg',
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
                        <form action="" className="flex w-full">
                            <div className="font-normal flex gap-2 w-full flex-col items-center justify-center sm:flex-row sm:justify-center sm:gap-3 rounded-t m-2 font-urbanist">
                                <button className="flex items-center gap-1 border border-gray-400 hover:bg-green-700 hover:text-white text-gray-600  py-2 px-4 ">
                                    Favorito
                                    <FaRegHeart />
                                </button>
                                <button className="flex items-center gap-1 border border-gray-400 hover:bg-green-700 hover:text-white text-gray-600  py-2 px-4 ml-2">
                                    Compartir
                                    <IoShareSocialOutline />
                                </button>
                                <button className="flex items-center gap-1 border border-gray-400 hover:bg-green-700 hover:text-white text-gray-600 py-2 px-4 ml-2">
                                    Notas personales
                                    <MdOutlineNoteAlt />
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
                <div className=' mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 w-full'>
                    <div className=' md:m-4 w-full '>
                        <div>
                            <h5 className='font-bold text-xl font-bebas'>Detalles</h5>
                        </div>
                        <div>
                            <div>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 h-full font-urbanist">
                                    {properties.map((props) => (
                                        <div class=" col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50 relative shadow-lg">
                                            <div class="group relative flex flex-col overflow-hidden px-4 mb-4">
                                                <div className=''>
                                                    <span className=''>{props.price}</span>
                                                </div>
                                                <div className=''>
                                                    <span className=''>{props.published}</span>
                                                </div>
                                                <div className='flex m-2'>
                                                    <div className='h-9 w-9 rounded-full bg-gray-400 p-2 text-xl text-white'>
                                                        <MdOutlineLocationOn />
                                                    </div>
                                                    <span className='m-1'>{props.locate}</span>
                                                </div>
                                                <div className='flex m-2'>
                                                    <div className=' h-9 w-9 rounded-full bg-gray-400 p-2 text-xl text-white'>
                                                        <MdOutlineLocalOffer />
                                                    </div>
                                                    <span className='m-1'>Propuestas: {props.propts}</span>
                                                </div>
                                                <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                            </div>
                                            <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
                                                <div class="group relative flex flex-col overflow-hidden px-2">
                                                    <div className='flex m-2'>
                                                        <div className='h-9 w-9 rounded-full bg-gray-400 p-2 text-xl text-white' >
                                                            <BiArea />
                                                        </div>
                                                        <span className='m-1'> {props.area}</span>

                                                    </div>
                                                    <div className='flex m-2'>
                                                        <div className=' h-9 w-9 rounded-full bg-gray-400 p-2 text-xl text-white'>
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
                                                </div>
                                                <div class="group relative flex flex-col overflow-hidden px-2">
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
                                                </div>
                                                <div class="group relative flex flex-col overflow-hidden px-2">
                                                    <div className='flex m-2'>
                                                        <div className='h-9 w-9 rounded-full bg-gray-400 p-2 text-xl text-white' >
                                                            <GiTap />
                                                        </div>
                                                        <span className='m-1'>Servicio de Agua: </span>
                                                    </div>
                                                    <div className='flex m-2'>
                                                        <div className='h-9 w-9 rounded-full bg-gray-400 p-2 text-xl text-white'>
                                                            <FaRegLightbulb />
                                                        </div>
                                                        <span className='m-1'>Energía: Privado</span>
                                                    </div>
                                                    <div className='flex m-2'>
                                                        <div className='h-9 w-9 rounded-full bg-gray-400 p-2 text-xl text-white'>
                                                            <GiKitchenScale />
                                                        </div>
                                                        <span className='m-1'>Gas: {props.debs}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h3 class="bg-gray-500 z-10 text-lg font-medium text-white absolute top-0 right-0 mr-2 p-1 pl-2 pr-2 xs:text-lg mt-3 md:text-lg font-bebas">{props.type}</h3>
                                            {/* <FaWhatsapp class="bg-green-500 z-10 rounded-full text-4xl font-medium text-white absolute bottom-0  right-0 mr-2 p-1 mb-6 shadow-lg" /> */}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <div className='mt-4'>
                                    <h4 className='text-xl font-bold font-bebas'>Descripción: </h4>
                                    <p className='font-urbanist'>
                                        Vendo Casa en Zona Comercial de Santa Anita
                                        80M2 de terreno
                                        208.15 M2. ( área construida).

                                        Cerca  a  las Avenidas
                                        Av. 28 de Julio, Av. Metropolitana y Av. De la Cultura

                                        Excelente ubicación, cerca a Mercado Productores y Gran Mercado Mayorista de Santa Anita 🍊🍐🍓🥬🥦🫑

                                        Cuenta con 3 pisos construidos :
                                        *Primer y segundo piso son un dúplex,
                                        1º     🛋️ Sala, 🪑comedor, 🍳cocina,🚽  baño ,🚰  lavandería
                                        2º     🛏️🛏️🛏️ 3  Habitaciones, 🚽  baño ,🚰  lavandería
                                        *El tercer piso es  un departamento con entrada independiente, ( perfecto para alquilar )
                                        🛋️ Sala🪑comedor, 🍳cocina abierta,🚽  baño ,   🛏️🛏️🛏️  3 Habitaciones
                                        *Cuarto piso ideal para terraza o área de parrilla.⚗️🎍
                                        Cuenta con sistema de Gas Natural

                                        Toda la documentación en regla y lista para transferir.

                                    </p>
                                </div>
                            </div>


                        </div>

                    </div>
                    <div className="flex mx-auto w-auto">
                        <SendMsg /> {/*Formulario para enviar mesaje*/}
                    </div>

                </div>
                <div>
                    <div className='mt-6 lg:mx-20 border border-gray-300 rounded-lg'>
                        <h2 className='m-4 font-bold text-2xl font-bebas'>Ubicación:</h2>
                        <Map />
                    </div>
                </div>
                <div className='mt-4 m-4'>
                    <h2 className='font-bold text-2xl'>Otras propiedades</h2>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
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
                <br />
            </div>
        </div>
    )
}

export default Item