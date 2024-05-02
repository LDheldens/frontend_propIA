import React, { Fragment, useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { ChevronDownIcon } from '@heroicons/react/solid';
import { MdExpandCircleDown } from "react-icons/md";
import Cards1 from '../../components/cards/Cards1';
import Cards2 from '../../components/cards/Cards2';
import ItemSell from '../../components/items/ItemSell';
import ItemSellOk from '../../components/items/ItemSellOk';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Arrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "gray" }}
            onClick={onClick}
        />
    )
}

const options = [
    { value: 'all', label: 'Todos los inmuebles' },
    { value: 'house', label: 'Casas' },
    { value: 'department', label: 'Departamentos' },
    { value: 'office', label: 'Oficinas' },
    { value: 'lot', label: 'Terrenos' },
    { value: 'rental', label: 'Locales' },
    { value: 'rental', label: 'Condominio' },
    { value: 'rental', label: 'Hotel' },
    { value: 'rental', label: 'Oportunidades' },
    { value: 'rental', label: 'Proyectos' },
    { value: 'rental', label: 'Aires' },
    { value: 'rental', label: 'Edificios' }
];

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const selectOption = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };
    const [inputValue, setInputValue] = useState('');
    const [inputValue1] = useState('');
    const [inputValue2] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const products = [
        {
            id: 1,
            locate: 'Lima, Lima, Miraflores',
            href: '/item',
            imageSrc: './src/assets/dep3.jpeg',
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
            href: '/item',
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
            href: '/item',
            imageSrc: './src/assets/dep1.jpeg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: 'S/. 360,000.00 ',
            ruc: 'En construcción',
            society: 'Junio 2025',
            type: 'HOTEL EN VENTA',
            area: '5,642.00 m²',
        },

    ]


    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (

        <main className='bg-gray-100'>
            <div className="bg-cover bg-center " style={{ backgroundImage: "url('./src/assets/init.gif')" }}>
                {/* <video
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    autoPlay loop muted
                >
                    <source src="./src/assets/font.jpeg" type="video/mp4" />
                </video> */}

                <div className="relative z-10 items-center justify-center p-2 md:p-8">
                    <h3 className="text-2xl font-bold  text-white  text-center p-8 pb-3 font-montserrat">La llave al espacio que buscas</h3>
                    <div className="m-14">
                        <div className=" inset-0 flex items-center  text-white ">
                            <form action="" className="flex">
                                <div className="font-normal flex flex-col md:flex-row items-center justify-center rounded-t-lg p-2 bg-white">
                                    <button className=" hover:bg-green-700 hover:text-white text-gray-600 border border-gray-200 p-2 m-2 py-2 px-4 rounded w-full md:w-auto">
                                        Alquilar
                                    </button>
                                    <button className=" hover:bg-green-700 hover:text-white text-gray-600 border border-gray-200 p-2 m-2 py-2 px-4 rounded w-full md:w-auto">
                                        Comprar
                                    </button>
                                    <button className=" hover:bg-green-700 hover:text-white text-gray-600 py-2 px-4 border border-gray-200 p-2 m-2 rounded w-full md:w-auto">
                                        Proyectos
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className='flex flex-col md:flex-row rounded-b-lg rounded-r-lg bg-white '>
                            <div className='p-4 w-full sm:w-1/2 md:w-1/3'>
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="inline-flex w-full justify-center rounded border border-gray-300 shadow-sm px-4 py-2 bg-white text-[16px] font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-offset-2 focus:ring-offset-gray-100"
                                >
                                    <option>Departamento</option>
                                    <option>Casa</option>
                                    <option>Terreno/Lote</option>
                                    <option>Habitación</option>
                                    <option>Hotel</option>
                                    <option>Cochera</option>
                                    <option>Local industrial</option>
                                    <option>Local comercial</option>
                                    <option>Oficina</option>
                                    <option>Todos</option>
                                </select>
                            </div>
                            <div className='container mx-auto p-4'>
                                <input aria-haspopup="true"
                                    aria-expanded="true"
                                    type="text" placeholder="Ingresa ubicaciones o características" className="inline-flex justify-center w-full border border-gray-200 shadow-sm px-2 py-3 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-offset-2 focus:ring-offset-gray-100 rounded" />
                            </div>
                            <div className="flex justify-center items-center p-4 space-x-4">
                                <button
                                    type="button"
                                    className="px-5 py-3 bg-green-600 text-white hover:bg-gray-500 focus:outline-none rounded-lg items-center flex text-mx font-bold"
                                >
                                    <FaSearch className='flex mr-1 selection: ' /> Buscar
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='m-8'>
                        <h6 className="text-xs text-white text-center">Ver más</h6>
                        <div className="text-center inset-x-0 flex justify-center w-8 h-8 animate-ping absolute left-[48%] ">
                            <MdExpandCircleDown className=" justify-center flex w-full h-full text-white" />
                        </div>
                    </div>
                    <br />
                </div>
            </div>

            <div className='my-20'>
                <Cards1 />
                <br className='m-4' />
                <div className='p-8 slider-container '>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-700 text-center p-4 font-montserrat">Inmuebles similares a los que viste</h2>
                    <Slider {...settings}>
                        <div>
                            <h1> <ItemSellOk /></h1>
                        </div>
                        <div>
                            <h2><ItemSellOk /></h2>
                        </div>
                        <div>
                            <h2><ItemSellOk /></h2>
                        </div>
                        <div>
                            <h4><ItemSellOk /></h4>
                        </div>
                        <div>
                            <h5><ItemSellOk /></h5>
                        </div>
                    </Slider>
                </div>

                <div className='m-4'>
                    <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3 m-3">
                        <div className="max-w-2xl pt-8">
                            <h4 className="text-sm font-bold tracking-tight text-gray-900 sm:text-2xl text-center font-montserrat">Listados de inmuebles que te pueden interesar.</h4>
                        </div>
                        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-3 border-gray-300">
                            <li >
                                <div className="flex items-center gap-x-6 border border-gray-500 bg-white shadow-md rounded-lg">
                                    <div className='m-5'>
                                        <p className="text-xl font-semibold leading-6 text-gray-700 font-montserrat">Departamentos en alquiler más vistos.</p>
                                    </div>
                                    <a href="/ia/inicioia">
                                        <FaArrowRight className='bg-green-200 h-10 w-12 rounded-full m-3' />
                                    </a>
                                </div>
                            </li>
                            <li >
                                <div className="flex items-center gap-x-6 border border-gray-500 bg-white shadow-md rounded-lg">
                                    <div className='m-5'>
                                        <p className="text-xl font-semibold leading-6 text-gray-700 font-montserrat">Los inmuebles recién publicados.</p>
                                    </div>
                                    <FaArrowRight className='bg-green-200 h-10 w-10 rounded-full m-3' />
                                </div>
                            </li>
                            <li >
                                <div className="flex items-center gap-x-6 border border-gray-500 bg-white shadow-md rounded-lg">
                                    <div className='m-5'>
                                        <p className="text-xl font-semibold leading-6 text-gray-700 font-montserrat">Inmuebles que bajaron de precio.</p>
                                    </div>
                                    <FaArrowRight className='bg-green-200 h-10 w-10 rounded-full m-3' />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <br className='' />
            <ItemSell />
            <div>
                <div className="max-w-2xl my-5">
                    <h4 className="text-sm font-bold tracking-tight text-gray-900 sm:text-2xl text-center font-montserrat">Te acompañamos en cada paso.</h4>
                </div>
                <br />
                <Cards2 className='my-' />
            </div>
            <div>
                <div className="">
                    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-700 text-center p-4 font-montserrat">Más propiedades</h2>
                        <div className='justify-end border-gray-500'>
                            <div className=" inset-0 flex items-center justify-end text-white ">
                                <form action="" className="flex">
                                    <div className="font-normal flex items-center justify-center rounded-t bg-white m-2">
                                        <button className=" border border-gray-600 hover:bg-green-700 text-gray-600  py-2 px-4 rounded-lg">
                                            En construcción
                                        </button>
                                        <button className="border border-gray-600 hover:bg-green-700 text-gray-600  py-2 px-4 rounded-lg ml-2">
                                            En planos
                                        </button>
                                        <button className="border border-gray-600 hover:bg-green-700 text-gray-600 py-2 px-4 rounded-lg ml-2">
                                            Entrega inmediata
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            <div className="max-w-2xl ">
                                <h4 className="text-sm font-bold tracking-tight text-gray-900 sm:text-2xl text-center font-montserrat">¿Conoces nuestras opciones de desarrollos?</h4>
                                <p className='font-josefin'>Puedes verlos según la etapa de construcción que más se ajusta a tu búsqueda.</p>
                            </div>
                            {products.map((product) => (
                                <div key={product.id} className="group relative">
                                    <div className=''>
                                        <a href="">
                                            <div className="w-full overflow-hidden rounded-t-lg bg-gray-200 lg:h-80">
                                                <img
                                                    src={product.imageSrc}
                                                    alt={product.imageAlt}
                                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                                />
                                                <FaRegHeart className="bg-white absolute top-5 right-2 py-1 px-3 rounded-full text-black text-[40px]" />
                                                {/* <span className="bg-[#DC3545] absolute top-5 right-2 py-1 px-3 rounded-full text-white text-[10px]" >ID: {product.id}</span>
                                            <span className="bg-blue-800 absolute text-end bottom-36 right-2 py-1 px-3 rounded-full text-white text-[10px]" >{product.type}</span> */}
                                            </div>
                                        </a>
                                    </div>
                                    <div className='bg-white p-2'>
                                        <div className="mt-4 flex justify-between">
                                            <div className='ml-3'>
                                                <p className="text-xs font-medium text-gray-700 mb-4">{product.price}</p>
                                                <h3 className="text-xs text-gray-600 mb-5 flex">
                                                    <a href={product.href}>
                                                        <span aria-hidden="true" className="absolute inset-0 flex-initial" />
                                                        <FaLocationDot className="mr-1 mt-1" />{product.locate}
                                                    </a>
                                                </h3>
                                                <p className="text-[10px] text-gray-400">{product.ruc}</p>
                                                <p className="text-[11px] text-gray-400">{product.society}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center p-4'>
                <h5 className='mr-1 text-xl text-gray-600 font-montserrat'>Busca entre más de 17,976 Propiedades</h5>
                <button className='bg-green-600 p-3 text-white text-sm rounded-lg'>
                    <a href="/buscar">VER MÁS</a>
                </button>
            </div>

            <div className="">
                <div className="" >
                </div>
            </div>
        </main>
    )
}

export default Home