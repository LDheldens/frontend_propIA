import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md"
import { FaEye } from "react-icons/fa"
import { FaPen } from "react-icons/fa"
import api from '../../settings/api'

function Users() {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await api.get('/auth/profile/');
                setProperties(response.data);
                setLoading(false);
                console.log('holaaa', response)
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchProperties();
    }, []);

    const handleUpdate = async (id) => {
        try {
            const response = await api.put(`/property/${id}/`, {
                // Incluye aquí los datos actualizados de la propiedad
            });
            console.log('Updated property:', response.data);
            // Aquí puedes actualizar el estado local o manejar la respuesta como necesites
        } catch (error) {
            console.error('Error updating property:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await api.delete(`/property/${id}/`);
            console.log('Deleted property with ID:', id);
            setProperties(properties.filter(property => property.id !== id)); // Actualiza el estado local
        } catch (error) {
            console.error('Error deleting property:', error);
        }
    };

    if (loading) return <p className="text-center">Loading...</p>;
    if (error) return <p className="text-center text-red-500">Error loading data</p>;
    return (
        <div>
            {/* <div class="flow-root">
                <dl class="-my-3 divide-y divide-gray-100 text-sm">
                    <div class="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt class="font-medium text-gray-900">Title</dt>
                        <dd class="text-gray-700 sm:col-span-2">Mr</dd>
                    </div>

                    <div class="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt class="font-medium text-gray-900">Name</dt>
                        <dd class="text-gray-700 sm:col-span-2">John Frusciante</dd>
                    </div>

                    <div class="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt class="font-medium text-gray-900">Occupation</dt>
                        <dd class="text-gray-700 sm:col-span-2">Guitarist</dd>
                    </div>

                    <div class="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt class="font-medium text-gray-900">Salary</dt>
                        <dd class="text-gray-700 sm:col-span-2">$1,000,000+</dd>
                    </div>

                    <div class="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt class="font-medium text-gray-900">Bio</dt>
                        <dd class="text-gray-700 sm:col-span-2">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et facilis debitis explicabo
                            doloremque impedit nesciunt dolorem facere, dolor quasi veritatis quia fugit aperiam
                            aspernatur neque molestiae labore aliquam soluta architecto?
                        </dd>
                    </div>
                </dl>
            </div> */}

            <div className="p-6 max-w-7xl mx-auto">
                <h1 className="text-2xl font-bold mb-4">Propiedades</h1>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">Num</th>
                                <th className="py-2 px-4 border-b">Nombres</th>
                                <th className="py-2 px-4 border-b">Apellidos</th>
                                <th className="py-2 px-4 border-b">E-mail</th>
                                <th className="py-2 px-4 border-b">Celular</th>
                                <th className="py-2 px-4 border-b">Dirección</th>
                                <th className="py-2 px-4 border-b">Moneda</th>
                                <th className="py-2 px-4 border-b">Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {properties.map((property) => (
                                <tr key={property.id} className="hover:bg-gray-100">
                                    <td className="py-2 px-4 border-b">{property.type_operation}</td>
                                    <td className="py-2 px-4 border-b">{property.type_property}</td>
                                    <td className="py-2 px-4 border-b">{property.subtype_property}</td>
                                    <td className="py-2 px-4 border-b">{property.first_name} {property.last_name}</td>
                                    <td className="py-2 px-4 border-b">{property.phone_number}</td>
                                    <td className="py-2 px-4 border-b">{property.adress}</td>
                                    <td className="py-2 px-4 border-b">{property.area_property}</td>
                                    <td className="py-2 px-4 border-b">{property.type_currency}</td>
                                    <td className="py-2 px-4 border-b">{property.price}</td>
                                    <td className="py-2 px-4 border-b flex space-x-2">
                                        <Link to={`/admin/propiedades/detail/${property.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                                            <FaEye />
                                        </Link>
                                        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded" onClick={() => handleUpdate(property.id)}>
                                            <FaPen />
                                        </button>
                                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" onClick={() => handleDelete(property.id)}>
                                            <MdDelete />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Users