import React, { useState } from 'react'
import useUser from '../../hooks/useUser'
import { Outlet, Link } from 'react-router-dom'
import { SlSettings } from "react-icons/sl"
import { Dropdown, Button } from '@rewind-ui/core'
import UpdateUser from '../../components/userAccount/UpdateUser'
// import ReactDOM from 'react-dom';
// import Modal from 'react-modal';

export const UserAccount = () => {

    const { user } = useUser();
    console.log(user);

    const [showUpdateUser, setShowUpdateUser] = useState(false);

    const links = [
        {
            link: "/",
            text: "Datos",
            id: 1,
        },
        {
            link: "/",
            text: "Etidar datos",
            id: 2,
        },
        {
            link: "/buscar",
            text: "Cambiar correo",
            id: 3,
        },
        {
            link: "/ia/inicioia",
            text: "Cambiar contraseña",
            id: 4,
        },
        {
            link: "/asesores",
            text: "Ajustes de notificaciones",
            id: 5,
        },

    ];

    return (
        <div className='bg-white flex items-center justify-center'>
            <div className='lg:px-10 md:px-3 items-center'>
                <h3 className='text-gray-900 text-3xl font-bebas'>Mi cuenta</h3>
                <div className='text-center border-gray-500 font-urbanist'>
                    <h3 className='text-center lg:text-[25px] md:text-[20px]'>Datos personales</h3>
                    <div className='flex'>
                        <div className="flex -space-x-2 overflow-hidden">
                            <img
                                className="inline-block h-24 w-24 rounded-full ring-2 ring-white"
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                alt=""
                            />
                        </div>
                        <div className='font-urbanist'>
                            <div className="py-2 px-4 border-t lg:text-[35px] sm:text-[25px] font-urbanist">Nombre: {user.first_name} {user.last_name}</div>
                            <div className="py-2 px-4">Correo: {user.email}</div>
                            <div className="py-2 px-4">Celular: {user.phone}</div>
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
                                    <Dropdown.Item onClick={() => setShowUpdateUser(true)}>
                                        Editar Datos
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        Cambiar contraseña
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        Cambiar correo
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item>
                                        Eliminar Cuenta
                                    </Dropdown.Item>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                    </div>
                </div>
                <div>
                    {showUpdateUser && <UpdateUser />}
                </div>
                <div>
                    <div>
                        {/* <button onClick={openModal}>Open Modal</button>
                        <Modal
                            isOpen={modalIsOpen}
                            onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                        >
                            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
                            <button onClick={closeModal}>close</button>
                            <div>I am a modal</div>
                            <form>
                                <input />
                                <button>tab navigation</button>
                                <button>stays</button>
                                <button>inside</button>
                                <button>the modal</button>
                            </form>
                        </Modal> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
