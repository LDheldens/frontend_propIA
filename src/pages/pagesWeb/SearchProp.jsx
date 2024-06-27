// import React, { useState, useEffect } from 'react';
// import useSWR from 'swr';
// import api from '../../settings/api';
// import { FaSearch } from "react-icons/fa";
// import Propertie from '../../components/properties/Propertie';
// import { Selector } from '@rewind-ui/core';

// const SearchProp = () => {
//     const [propertyType, setPropertyType] = useState('');
//     const [searchText, setSearchText] = useState('');
//     const [transactionType, setTransactionType] = useState('');

//     const getProperties = async (type = '', text = '', transaction = '') => {
//         try {
//             const response = await api.get('/property/list/', {
//                 params: {
//                     type,
//                     text,
//                     transaction
//                 },
//                 headers: {
//                     'Accept': 'application/json'
//                 }
//             });
//             return response.data;
//         } catch (error) {
//             console.error(error);
//         }
//     }

//     const { data: properties, isLoading, mutate } = useSWR(
//         `${import.meta.env.VITE_API_URL}/property/list/?type=${propertyType}&text=${searchText}&transaction=${transactionType}`,
//         () => getProperties(propertyType, searchText, transactionType)
//     )
//     console.log(properties);

//     // const handleSearch = () => {
//     //     mutate(); // Trigger a re-fetch with the new filters
//     // }

//     if (isLoading) {
//         return <h1>Cargando</h1>
//     }
//     return (
//         <div className='p-3'>
//             <div className='bg-white rounded container space-y-4 lg:space-y-0 p-2 mx-auto lg:grid lg:grid-cols-5 lg:gap-x-5'>
//                 <div className='lg:col-span-3 flex flex-col gap-y-5 sm:gap-x-5 sm:flex-row items-center justify-between'>
//                     <div className='w-full xs:w-1/2 mx-auto'>
//                         <select
//                             id="propertyType"
//                             name="propertyType"
//                             autoComplete="property-type"
//                             className="inline-flex w-full justify-center border border-gray-300 shadow-sm px-5 py-3 bg-white text-[16px] font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-offset-2 focus:ring-offset-gray-100 font-urbanist rounded"
//                             value={propertyType}
//                             onChange={(e) => setPropertyType(e.target.value)}
//                         >
//                             <option value=''>Departamento</option>
//                             <option value='casa'>Casa</option>
//                             <option value='terreno'>Terreno/Lote</option>
//                             <option value='habitacion'>Habitación</option>
//                             <option value='hotel'>Hotel</option>
//                             <option value='cochera'>Cochera</option>
//                             <option value='industrial'>Local industrial</option>
//                             <option value='comercial'>Local comercial</option>
//                             <option value='oficina'>Oficina</option>
//                             <option value='todos'>Todos</option>
//                         </select>
//                     </div>
//                     <Selector value={transactionType} onChange={(value)=>setTransactionType(value)} className='xs:hidden' color='green' size='md'>
//                         <Selector.Tab  anchor="Venta" label="VENTA" />
//                         <Selector.Tab  anchor="Alquiler" label="ALQUILER" />
//                         <Selector.Tab  anchor="Pre-venta" label="PRE-VENTA" />
//                     </Selector>
//                     <Selector value={transactionType} onChange={(value)=>setTransactionType(value)} className='hidden xs:flex'  color='green' size='lg'>
//                         <Selector.Tab  anchor="Venta" label="VENTA" />
//                         <Selector.Tab  anchor="Alquiler" label="ALQUILER" />
//                         <Selector.Tab className='w-[180px]' anchor="Pre-venta" label="PRE-VENTA" />
//                     </Selector>
//                 </div>
//                 <div className='lg:col-span-2 flex items-center gap-3'>
//                     <input
//                         type="search"
//                         placeholder="Ingresa ubicaciones o características"
//                         className="inline-flex justify-center w-full border border-gray-200 shadow-sm px-5 py-3 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-offset-2 focus:ring-offset-gray-100"
//                         value={searchText}
//                         onChange={(e) => setSearchText(e.target.value)}
//                     />
//                     <button
//                         type="button"
//                         className="px-5 py-3 bg-green1 text-white hover:bg-gray-500 focus:outline-none items-center flex text-mx font-bold"
//                         // onClick={handleSearch}
//                     >
//                         <FaSearch className='flex mr-1 selection:' /> Buscar
//                     </button>
//                 </div>
//             </div>
            
//             <h2 className="text-2xl font-bold text-gray-700 text-center p-4 font-bebas tracking-wide ">Resultados : {properties?.length} Inmuebles en la Zona.</h2>
//             <div className='my-4 space-y-5'>
//                 {properties?.map((propertie) => (
//                     <Propertie propertie={propertie} key={propertie.id} />
//                 ))}
//             </div>
            
//         </div>
//     );
// }

// export default SearchProp;

import React, { useState, useEffect, useMemo } from 'react';
import useSWR from 'swr';
import api from '../../settings/api';
import { FaSearch } from "react-icons/fa";
import Propertie from '../../components/properties/Propertie';
import { Selector } from '@rewind-ui/core';
import { FaFilter } from "react-icons/fa";
import Skeleton from '../../components/compGeneral/Skeleton';

const SearchProp = () => {
    const [propertyType, setPropertyType] = useState('');
    const [searchText, setSearchText] = useState('');
    const [transactionType, setTransactionType] = useState('');
    const [queryParams, setQueryParams] = useState({}); // Estado para controlar cuándo realizar la búsqueda

    const getProperties = async (type = '', text = '', transaction = '') => {
        await new Promise(resolve => setTimeout(resolve, 3000));
        try {
            const response = await api.get('/property/list/', {
                params: {
                    type,
                    text,
                    transaction
                },
                headers: {
                    'Accept': 'application/json'
                }
            });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    const { data: properties, isLoading, mutate } = useSWR(
        queryParams.type !== undefined ? `${import.meta.env.VITE_API_URL}/property/list/?type=${queryParams.type}&text=${queryParams.text}&transaction=${queryParams.transaction}` : null,
        () => getProperties(queryParams.type, queryParams.text, queryParams.transaction)
    );

    const handleSearch = () => {
        setQueryParams({
            type: propertyType,
            text: searchText,
            transaction: transactionType
        });
        mutate(); 
    }

    const handleClear = () => {
        setPropertyType('');
        setSearchText('');
        setTransactionType('');
        setQueryParams({
            type: '',
            text: '',
            transaction: ''
        });
        mutate();
    }

    useEffect(() => {

        setQueryParams({
            type: '',
            text: '',
            transaction: ''
        });
    }, []);

    // const verifyParamsLength = () => {
    //     return Object.values(queryParams).some(value => value !== '');
    // }
    const verifyParamsLength = useMemo(() => {
        return Object.values(queryParams).some(value => value !== '');
    }, [queryParams]);

    if (isLoading) {
        return (
            <div className='space-y-5 py-5'>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
            </div>
        )
    }

    return (
        <div className='p-3'>
            {
                verifyParamsLength ? (
                    <button 
                        type='button' 
                        className='bg-blue2 p-1 rounded flex items-center gap-1 justify-center text-white mb-3' 
                        onClick={handleClear} 
                    >
                        <FaFilter/> Limpiar Busqueda
                    </button>
                ) : null
            }
            
            <div className='bg-white rounded container space-y-4 lg:space-y-0 p-2 mx-auto lg:grid lg:grid-cols-5 lg:gap-x-5'>
                <div className='lg:col-span-3 flex flex-col gap-y-5 sm:gap-x-5 sm:flex-row items-center justify-between'>
                    <div className='w-full xs:w-1/2 mx-auto'>
                        <select
                            id="propertyType"
                            name="propertyType"
                            autoComplete="property-type"
                            className="inline-flex w-full justify-center border border-gray-300 shadow-sm px-5 py-3 bg-white text-[16px] font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-offset-2 focus:ring-offset-gray-100 font-urbanist rounded"
                            value={propertyType}
                            onChange={(e) => setPropertyType(e.target.value)}
                        >
                            <option value=''>Todos</option>
                            <option value='casa'>Casa</option>
                            <option value='terreno'>Terreno/Lote</option>
                            <option value='habitacion'>Habitación</option>
                            <option value='hotel'>Hotel</option>
                            <option value='cochera'>Cochera</option>
                            <option value='industrial'>Local industrial</option>
                            <option value='comercial'>Local comercial</option>
                            <option value='oficina'>Oficina</option>
                            <option value='todos'>Todos</option>
                        </select>
                    </div>
                    <Selector value={transactionType} onChange={(value) => setTransactionType(value)} className='xs:hidden' color='green' size='md'>
                        <Selector.Tab anchor="Venta" label="VENTA" />
                        <Selector.Tab anchor="Alquiler" label="ALQUILER" />
                        <Selector.Tab anchor="Pre-venta" label="PRE-VENTA" />
                    </Selector>
                    <Selector value={transactionType} onChange={(value) => setTransactionType(value)} className='hidden xs:flex' color='green' size='lg'>
                        <Selector.Tab anchor="Venta" label="VENTA" />
                        <Selector.Tab anchor="Alquiler" label="ALQUILER" />
                        <Selector.Tab className='w-[180px]' anchor="Pre-venta" label="PRE-VENTA" />
                    </Selector>
                </div>
                <div className='lg:col-span-2 flex items-center gap-3'>
                    <input
                        type="search"
                        placeholder="Ingresa ubicaciones o características"
                        className="inline-flex justify-center w-full border border-gray-200 shadow-sm px-5 py-3 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-offset-2 focus:ring-offset-gray-100"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button
                        type="button"
                        className="px-5 py-3 bg-green1 text-white hover:bg-gray-500 focus:outline-none items-center flex text-mx font-bold"
                        onClick={handleSearch}
                    >
                        <FaSearch className='flex mr-1 selection:' /> Buscar
                    </button>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-700 text-center p-4 font-bebas tracking-wide ">Resultados : {properties?.length} Inmuebles en la Zona.</h2>
            <div className='my-4 space-y-5'>
                {properties?.map((propertie) => (
                    <Propertie propertie={propertie} key={propertie.id} />
                ))}
            </div>

        </div>
    );
}

export default SearchProp;
