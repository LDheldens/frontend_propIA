import React, { useState } from "react"
import FormPg1 from '../../components/properties/registerProps/FormPg1'
import FormPg2 from '../../components/properties/registerProps/FormPg2'
import FormPg3 from '../../components/properties/registerProps/FormPg3'
import FormPg4 from "../../components/properties/registerProps/FormPg4"
import api from "../../settings/api"
import { useForm, FormProvider } from "react-hook-form";

function Post() {

    const methods = useForm();
    const [currentPage, setCurrentPage] = useState(1);

    const goToNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const goToPreviousPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    const isLastPage = currentPage === 4;

    const handleSubmit = async (data) => {
        console.log(data);
        try {
            await api.post("/properties", data);
            alert("Datos enviados con éxito");
        } catch (error) {
            alert("Hubo un error al enviar los datos");
            console.error(error);
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
                    <form onSubmit={methods.handleSubmit(handleSubmit)} className="w-full">
                        <FormPg1 currentPage={currentPage} />
                        <FormPg2 currentPage={currentPage} />
                        <FormPg3 currentPage={currentPage} />
                        <FormPg4 currentPage={currentPage} />

                        <div className="mt-8 flex justify-between font-bebas tracking-wide gap-40">
                            {currentPage !== 1 && (
                                <div className="flex justify-end">
                                    <button
                                        type="button"
                                        onClick={goToPreviousPage}
                                        className="bg-green1 hover:bg-green1 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline transition duration-300"
                                    >
                                        Anterior
                                    </button>
                                </div>
                            )}
                            {!isLastPage ? (
                                <button
                                    type="button"
                                    onClick={goToNextPage}
                                    className="bg-green1 hover:bg-green1 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline transition duration-300 text-right"
                                >
                                    Siguiente
                                </button>
                            ) : null

                            }
                            {
                                isLastPage ? (
                                    <button
                                        type="submit"
                                        className="bg-green1 hover:bg-green1 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline transition duration-300"
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