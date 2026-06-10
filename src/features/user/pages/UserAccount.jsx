import React, { useState } from 'react'
import useUser from '../../auth/useUser'
import { Outlet, Link } from 'react-router-dom'
import { SlSettings } from "react-icons/sl"
import { Dropdown, Button } from '@rewind-ui/core'
import UpdateUser from '../components/UpdateUser'
import ChangePassword from '../components/ChangePassword'
import useSWR from 'swr'
import api from '../../../api/client'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import PropertiesUser from '../components/PropertiesUser'

export const UserAccount = () => {
    const navigate = useNavigate()
    const { logout } = useUser()
    const [currentView, setCurrentView] = useState(0);

    const getUser = async () => {
        const token = localStorage.getItem('AUTH_TOKEN_PROPIA');

        try {
            const response = await api.get('/auth/profile/', {
                headers: {
                    Authorization: `Token ${token}`
                }
            });
            return response.data
        } catch (error) {
            console.error('Error fetching user:', error.message);
        }
    };

    const { data: user, IsLoading, mutate } = useSWR(
        `${import.meta.env.VITE_API_URL}/auth/profile/`,
        getUser
    )

    const handleDelete = async (id) => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "Esta acción eliminará el usuario de forma permanente!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await logout()
                    const response = await api.delete(`/auth/${id}/`);
                    if (response.status == 204) {
                        navigate('/')
                    }

                } catch (error) {
                    Swal.fire({
                        title: "Error",
                        text: 'Hubo un problema al intentar eliminar el usuario.',
                        icon: 'error',
                    });
                }
            }
        });
    };

    return (
        <>
            
            <div className='mx-auto max-w-5xl p-5'>
                <h1 className='text-center font-black text-3xl my-5'>Perfil de Usuario</h1>
                <div className='border-gray-500 p-4 rounded bg-white font-urbanist'>
                    <h2 className='text-center lg:text-[25px] md:text-[20px]'>Datos personales</h2>
                    <div className='md:flex md:justify-center md:gap-x-5'>
                        <div>
                            <img
                                className="block mx-auto h-32 w-32 rounded-full ring-2 ring-white"
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                alt=""
                            />
                        </div>
                        <div className='font-urbanist'>
                            <div className="py-2 px-4 border-t lg:text-[35px] sm:text-[25px] font-urbanist">Nombre: {user?.first_name} {user?.last_name}</div>
                            <div className="py-2 px-4">Correo: {user?.email}</div>
                            <div className="py-2 px-4">Celular: {user?.phone}</div>
                            <div className="py-2 px-4 border-b flex space-x-2"></div>
                        </div>
                        <div>
                            <Dropdown radius='sm' itemColor='green'>
                                <Dropdown.Trigger>
                                    <Button color='gray'>
                                        <SlSettings className='text-[20px] font-bold' />
                                    </Button>
                                </Dropdown.Trigger>
                                <Dropdown.Content>
                                    <Dropdown.Item onClick={() => setCurrentView(1)}>
                                        Editar Datos
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={() => setCurrentView(2)}>
                                        Cambiar contraseña
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item onClick={() => handleDelete(user.id)}>
                                        Eliminar Cuenta
                                    </Dropdown.Item>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                    </div>
                </div>

                {currentView === 1 && (
                    <UpdateUser user={user} mutate={mutate} />
                )}
                {currentView === 2 && (
                    <ChangePassword />
                )}

                <PropertiesUser userId={user?.id} />
            </div>
        </>
    )
}
