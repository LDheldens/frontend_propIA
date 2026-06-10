import React, { useState, useRef } from "react"
import FormPg1 from '../../../features/properties/components/register/FormPg1'
import FormPg2 from '../../../features/properties/components/register/FormPg2'
import FormPg3 from '../../../features/properties/components/register/FormPg3'
import FormPg4 from '../../../features/properties/components/register/FormPg4'
import api from "../../../api/client"
import { useForm, FormProvider } from "react-hook-form";
import Swal from "sweetalert2"

function Post() {

    const methods = useForm();
    const refSubmitbtn = useRef(null);
    const [currentPage, setCurrentPage] = useState(1);

    const [files, setFiles] = useState([])


    const [operation, setOperation] = useState('Venta')

    const handleOperationChange = (value) => {
        setOperation(value);
    };

    // const goToNextPage = () => {
    //     setCurrentPage((prevPage) => prevPage + 1);
    //     console.log(refSubmitbtn);
    //     //refSubmitbtn.current.submit();
    //     methods.handleSubmit();
    // };

    const fieldsToValidate = {
        1: [
            "type_property",
            "subtype_property",
            "email",
            "first_name",
            "last_name",
            "dni",
            "phone_number",
            "terminos",
            ],
        2: [
            "adress",
            "departamento",
            "provincia",
            "distrito",
            "urbanization",
        ],
        3: [
          /* Campos específicos de la página 3 */
        ],
        4: [
            "area_property",
            "bedrooms_number",
            "garages_number",
            "bathrooms_number",
            "kitchens_number",
            "floors_number",
            "type_currency",
            "price",
            "title",
            "description",
        ],
    };
    const goToNextPage = async () => {
        const isValid = await methods.trigger(fieldsToValidate[currentPage]);
        if (isValid) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };
    const goToPreviousPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    const isLastPage = currentPage === 4;

    const handleSubmit = async (data) => {
        const formData = new FormData();

        if (files.length < 5) {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Necesitas subir por lo menos 5 imágenes",
            });
        }

        Object.entries(data).forEach(([key, value]) => {
            formData.append(key, value);
        });

        files.forEach(file => {
            formData.append('images', file.file);
        });

        formData.append('type_operation', operation)
        
        const token = localStorage.getItem('AUTH_TOKEN_PROPIA');

        try {
            const response = await api.post('/property/add/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Token ${token}`
                }
            });
            if (response.status == 201) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: response.data.message,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (error) {
            console.error(error);
            alert("Hubo un error al enviar los datos");
        }
    };


    return (
        <FormProvider {...methods}>
            <div className='p-2 flex-row justify-center items-center font-bebas tracking-wide max-w-3xl mx-auto'>
                <div className="text-center">
                    <h2 className="text-2xl font-semibold text-gray-900">Formulario de publicación</h2>
                </div>

                <div className="bg-white p-4 w-full ">
                    <div className="bg-gray-400 text-white text-center w-full">
                        Página {currentPage} de 4
                    </div>
                    <form onSubmit={methods.handleSubmit(handleSubmit)} className="w-full" ref={refSubmitbtn}>
                        <FormPg1 currentPage={currentPage} operation={operation} handleOperationChange={handleOperationChange} />
                        <FormPg2 currentPage={currentPage} />
                        <FormPg3 currentPage={currentPage} files={files} setFiles={setFiles} />
                        <FormPg4 currentPage={currentPage} />

                        <div className="mt-8 flex justify-between font-bebas tracking-wide gap-40">
                            {currentPage !== 1 && (
                                <div className="flex justify-end">
                                    <button
                                        type="button"
                                        onClick={goToPreviousPage}
                                        className="bg-green-500 hover:bg-green-500 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline transition duration-300"
                                    >
                                        Anterior
                                    </button>
                                </div>
                            )}
                            {!isLastPage ? (
                                <button
                                    type="button"
                                    onClick={goToNextPage}
                                    className="bg-green-500 hover:bg-green-500 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline transition duration-300 text-right"
                                >
                                    Siguiente
                                </button>
                            ) : null

                            }
                            {
                                isLastPage ? (
                                    <button
                                        type="submit"
                                        className="bg-green-500 hover:bg-green-500 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline transition duration-300"
                                    >
                                        Publicar
                                    </button>
                                ) : null
                            }
                        </div>
                    </form>

                </div>
            </div>
        </FormProvider>
    )
}

export default Post