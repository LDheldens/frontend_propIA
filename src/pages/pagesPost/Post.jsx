import React, { useState } from "react"
import FormPg1 from '../../components/properties/registerProps/FormPg1'
import FormPg2 from '../../components/properties/registerProps/FormPg2'
import FormPg3 from '../../components/properties/registerProps/FormPg3'
import FormPg4 from "../../components/properties/registerProps/FormPg4"
import api from "../../settings/api"

function Post() {
    const [currentPage, setCurrentPage] = useState(1);

    const goToNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const goToPreviousPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    const isLastPage = currentPage === 4;

    async function handleSubmit(e) {
        e.preventDefault();
        const form = new FormData(e.target);
        const formData = Object.fromEntries(form.entries());

        try {
            await api.post("/properties", formData);
            alert("Datos enviados con éxito");
        } catch (error) {
            alert("Hubo un error al enviar los datos");
            console.error(error);
        }
    }


    return (
        <div className='p-2 flex-row justify-center items-center font-bebas max-w-3xl mx-auto'>
            <div className="text-center">
                <h2 className="text-base font-semibold leading-7 text-gray-900">Formulario de publicación</h2>
            </div>
            <div className="bg-white p-4 w-full ">
                <div className="bg-gray-400 text-white text-center w-full">
                    Página {currentPage} de 4
                </div>
                <form action="" onSubmit={handleSubmit} className="w-full">
                    <FormPg1 currentPage={currentPage} />
                    <FormPg2 currentPage={currentPage} />
                    <FormPg3 currentPage={currentPage} />
                    <FormPg4 currentPage={currentPage} />

                    {isLastPage && (
                        <button
                            type="submit"
                            className="bg-green1 hover:bg-green1 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline transition duration-300"
                        >
                            Publicar
                        </button>
                    )}

                </form>
                <div className="mt-8 flex justify-between font-bebas gap-40">
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
                    {!isLastPage && (
                        <button
                            type="button"
                            onClick={goToNextPage}
                            className="bg-green1 hover:bg-green1 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline transition duration-300 text-right"
                        >
                            Siguiente
                        </button>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Post