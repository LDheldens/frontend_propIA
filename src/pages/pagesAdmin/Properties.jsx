import React, { useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import api from '../../settings/api';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function Properties() {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await api.get('/property/list/');
                setProperties(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchProperties();
    }, []);

    // const handleView = async (id) => {
    //     try {
    //         const response = await api.get(`/property/${id}/`);
    //         console.log('Property data:', response.data);
    //         // Aquí puedes manejar la visualización de los datos de la propiedad
    //     } catch (error) {
    //         console.error('Error viewing property:', error);
    //     }
    // };

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
        // Mostrar la alerta de confirmación
        Swal.fire({
            title: '¿Estás seguro?',
            text: 'Esta acción eliminará la propiedad de forma permanente!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    // Realizar la solicitud DELETE a la API
                    await api.delete(`/property/${id}/`);
    
                    // Actualizar el estado local eliminando la propiedad
                    setProperties(properties.filter(property => property.id !== id));
    
                    // Mostrar una alerta de éxito
                    Swal.fire({
                        title: 'Eliminado',
                        text: 'Propiedad eliminada exitosamente.',
                        icon: 'success'
                    });
                } catch (error) {
                    console.error('Error deleting property:', error);
    
                    // Mostrar una alerta de error
                    Swal.fire({
                        title: 'Error al eliminar la propiedad',
                        text: 'Hubo un problema al intentar eliminar la propiedad.',
                        icon: 'error'
                    });
                }
            }
        });
    };

    if (loading) return <p className="text-center">Loading...</p>;
    if (error) return <p className="text-center text-red-500">Error loading data</p>;

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Propiedades</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Tipo de operación</th>
                            <th className="py-2 px-4 border-b">Tipo de propiedad</th>
                            <th className="py-2 px-4 border-b">Subtipo de propiedad</th>
                            {/* <th className="py-2 px-4 border-b">Email</th> */}
                            <th className="py-2 px-4 border-b">Vendedor</th>
                            {/* <th className="py-2 px-4 border-b">Apellido</th> */}
                            {/* <th className="py-2 px-4 border-b">DNI</th> */}
                            <th className="py-2 px-4 border-b">Número</th>
                            <th className="py-2 px-4 border-b">Dirección</th>
                            {/* <th className="py-2 px-4 border-b">Departamento</th>
                            <th className="py-2 px-4 border-b">Provincia</th>
                            <th className="py-2 px-4 border-b">Distrito</th>
                            <th className="py-2 px-4 border-b">Urbanización</th> */}
                            <th className="py-2 px-4 border-b">Área</th>
                            {/* <th className="py-2 px-4 border-b">Cuartos</th>
                            <th className="py-2 px-4 border-b">Garajes</th>
                            <th className="py-2 px-4 border-b">Baños</th>
                            <th className="py-2 px-4 border-b">Cocinas</th>
                            <th className="py-2 px-4 border-b">Pisos</th> */}
                            <th className="py-2 px-4 border-b">Moneda</th>
                            <th className="py-2 px-4 border-b">Precio</th>
                            {/* <th className="py-2 px-4 border-b">Descripción</th>
                            <th className="py-2 px-4 border-b">Términos</th> */}
                            <th className="py-2 px-4 border-b">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {properties.map((property) => (
                            <tr key={property.id} className="hover:bg-gray-100">
                                <td className="py-2 px-4 border-b">{property.type_operation}</td>
                                <td className="py-2 px-4 border-b">{property.type_property}</td>
                                <td className="py-2 px-4 border-b">{property.subtype_property}</td>
                                {/* <td className="py-2 px-4 border-b">{property.email}</td> */}
                                <td className="py-2 px-4 border-b">{property.first_name} {property.last_name}</td>
                                {/* <td className="py-2 px-4 border-b">{property.last_name}</td> */}
                                {/* <td className="py-2 px-4 border-b">{property.dni}</td> */}
                                <td className="py-2 px-4 border-b">{property.phone_number}</td>
                                <td className="py-2 px-4 border-b">{property.adress}</td>
                                {/* <td className="py-2 px-4 border-b">{property.departamento}</td>
                                <td className="py-2 px-4 border-b">{property.provincia}</td>
                                <td className="py-2 px-4 border-b">{property.distrito}</td>
                                <td className="py-2 px-4 border-b">{property.urbanization}</td> */}
                                <td className="py-2 px-4 border-b">{property.area_property}</td>
                                {/* <td className="py-2 px-4 border-b">{property.bedrooms_number}</td>
                                <td className="py-2 px-4 border-b">{property.garages_number}</td>
                                <td className="py-2 px-4 border-b">{property.bathrooms_number}</td>
                                <td className="py-2 px-4 border-b">{property.kitchens_number}</td>
                                <td className="py-2 px-4 border-b">{property.floors_number}</td> */}
                                <td className="py-2 px-4 border-b">{property.type_currency}</td>
                                <td className="py-2 px-4 border-b">{property.price}</td>
                                {/* <td className="py-2 px-4 border-b">{property.description}</td>
                                <td className="py-2 px-4 border-b">{property.terms_conditions ? 'Sí' : 'No'}</td> */}
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
    );
}

export default Properties;
