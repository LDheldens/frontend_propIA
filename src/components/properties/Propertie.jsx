import React from 'react'
import { Link } from 'react-router-dom'


function Propertie({ propertie }) {

    return (
        
        <article className='w-full max-w-7xl mx-auto  bg-white rounded'>
            <Link className='grid grid-cols-1 md:grid-cols-3 gap-4' to={`/item/${propertie.id}`}>
                <div className='col-span-1'>
                    <img src={`${import.meta.env.VITE_URL_IMG}${propertie.images[0].image}`} alt="Property" className="w-full rounded h-auto object-cover" />
                </div>
                <div className='col-span-2 p-3'>
                    <h3 className='text-sm text-gray-900'>
                        Departamento desde
                    </h3>
                    <p className='font-bold text-xl'>
                        {propertie?.type_currency == 'PEN' ? 'S./' : '$'}{propertie?.price}
                    </p>
                </div>
            </Link>
        </article>

        
    )
}

export default Propertie