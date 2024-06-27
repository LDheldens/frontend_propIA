import React from 'react'
import useUser from '../../hooks/useUser'
export const UserAccount = () => {

    const { user } = useUser();
    console.log(user);
    return (
        <div className='mx-4'>
            <h3 className='text-gray-900 text-3xl font-bebas'>
                Mi cuenta
            </h3>
            <div>
                <h3>
                    Datos personales
                </h3>
                <div className='flex'>
                    <div className="flex -space-x-2 overflow-hidden">
                        <img
                            className="inline-block h-16 w-16 rounded-full ring-2 ring-white"
                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                            alt=""
                        />
                    </div>

                    <div className='bg-white'>
                        <div className="py-2 px-4 border-b text-[35px] font-urbanist ">Nombre: {user.first_name} {user.last_name}</div>
                        <div className="py-2 px-4 border-b"> Correo: {user.email}</div>
                        <div className="py-2 px-4 border-b">Celular: {user.phone}</div>
                        <div className="py-2 px-4 border-b flex space-x-2">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
