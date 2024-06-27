import React, { useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import api from '../../settings/api';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import DataTable from "react-data-table-component";

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

    const columns = [
        {
            name: 'Tipo de operación',
            selector: row => row.type_operation,
            sortable: true,
        },
        {
            name: 'Tipo de propiedad',
            selector: row => row.type_property,
            sortable: true,
        },
        {
            name: 'Subtipo de propiedad',
            selector: row => row.subtype_property,
            sortable: true,
        },
        {
            name: 'Vendedor',
            selector: row => `${row.first_name} ${row.last_name}`,
            sortable: true,
        },
        {
            name: 'Número',
            selector: row => row.phone_number,
            sortable: true,
        },
        {
            name: 'Dirección',
            selector: row => row.adress,
            sortable: true,
        },
        {
            name: 'Área',
            selector: row => row.area_property,
            sortable: true,
        },
        {
            name: 'Moneda',
            selector: row => row.type_currency,
            sortable: true,
            width: '80px'
        },
        {
            name: 'Precio',
            selector: row => row.price,
            sortable: true,
        },
        {
            name: 'Acciones',
            cell: row => (
                <div className="flex space-x-2">
                    <Link to={`/admin/propiedades/detail/${row.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                        <FaEye />
                    </Link>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" onClick={() => handleDelete(row.id)}>
                        <MdDelete />
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Propiedades</h1>
            <div className="overflow-x-auto">
                <DataTable 
                    columns={columns}
                    data={properties}
                    pagination
                    customStyles={{
                        headCells: {
                            style: {
                                paddingLeft: '1rem',
                                paddingRight: '1rem',
                                backgroundColor: '#f8f9fa',
                                fontWeight: 'bold',
                                fontSize: '.9rem'
                            },
                        },
                        cells: {
                            style: {
                                paddingLeft: '1rem',
                                paddingRight: '1rem',
                            },
                        },
                        rows: {
                            style: {
                                '&:hover': {
                                    backgroundColor: '#f1f3f5',
                                },
                            },
                        },
                    }}
                />
            </div>
        </div>
    );
}

export default Properties;
