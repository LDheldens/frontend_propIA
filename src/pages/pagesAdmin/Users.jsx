import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md"
import { FaPen } from "react-icons/fa"
import api from '../../settings/api'
import Swal from 'sweetalert2'

function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await api.get('/auth/list/');
                setUsers(response.data);
                setLoading(false);
                console.log('holaaa', response)
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const handleDelete = async (id) => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "Esta acción eliminará el usuario de forma permanente!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar",
            cancelButtonText: "Cancelar"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await api.delete(`/auth/${id}/`);
                    setUsers(users.filter(user => user.id !== id));


                    Swal.fire({
                        title: "Eliminado",
                        text: "Producto eliminado de manera exitosa.",
                        icon: "success"
                    });
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

    if (loading) return <p className="text-center">Loading...</p>;
    if (error) return <p className="text-center text-red-500">Error loading data</p>;
    return (
        <div className="p-6 max-w-7xl mx-auto font-urbanist">
            <h1 className="text-2xl font-bold mb-4">Usuarios registrados</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">N°</th>
                            <th className="py-2 px-4 border-b">Nombres</th>
                            <th className="py-2 px-4 border-b">Apellidos</th>
                            <th className="py-2 px-4 border-b">E-mail</th>
                            <th className="py-2 px-4 border-b">Celular</th>
                            <th className="py-2 px-4 border-b">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((users, index) => (
                            <tr key={users.id} className="hover:bg-gray-100">
                                <td className='py-2 px-4 border-b'>{index + 1}</td>
                                <td className="py-2 px-4 border-b">{users.first_name}</td>
                                <td className="py-2 px-4 border-b">{users.last_name}</td>
                                <td className="py-2 px-4 border-b">{users.email}</td>
                                {/* <td className="py-2 px-4 border-b">{users.first_name} {users.last_name}</td> */}
                                <td className="py-2 px-4 border-b">{users.phone}</td>
                                <td className="py-2 px-4 border-b flex space-x-2">
                                    <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded" onClick={() => handleUpdate(users.id)}>
                                        <FaPen />
                                    </button>
                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" onClick={() => handleDelete(users.id)}>
                                        <MdDelete />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users