import React, { useState } from "react"
import FormPg1 from '../../components/formProps/FormPg1'
import FormPg2 from '../../components/formProps/FormPg2'
import FormPg3 from '../../components/formProps/FormPg3'
import FormPg4 from "../../components/formProps/FormPg4"

function Post() {
    const [currentPage, setCurrentPage] = useState(1);

    const goToNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const goToPreviousPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    const isLastPage = currentPage === 4;
    return (
        <div>
            <div className='p-2 md:p-4 flex justify-center items-center font-bebas max-w-5xl mx-auto'>
                <div>
                    <div className="flex justify-center items-center">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Formulario de publicación</h2>
                    </div>
                    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center ">
                        <div className="bg-white shadow-lg p-2 max-w-5xl">
                            <div className="bg-gray-400 text-white text-center py-2  mb-4">
                                Página {currentPage} de 4
                            </div>
                            <div >
                                <form action="">

                                    {/* {currentPage === 1 && <FormPg1 />}
                                    {currentPage === 2 && <FormPg2 />}
                                    {currentPage === 3 && <FormPg3 />}
                                    {currentPage === 4 && <FormPg4 />} */}
                                    <FormPg1 currentPage={currentPage} />
                                    <FormPg2 currentPage={currentPage} />
                                    <FormPg3 currentPage={currentPage} />
                                    <FormPg4 currentPage={currentPage} />

                                </form>
                                <div className="mt-8 flex justify-between font-bebas">
                                    {currentPage !== 1 && (
                                        <button
                                            onClick={goToPreviousPage}
                                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline transition duration-300"
                                        >
                                            Anterior
                                        </button>
                                    )}
                                    {!isLastPage && (
                                        <button
                                            onClick={goToNextPage}
                                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline transition duration-300"
                                        >
                                            Siguiente
                                        </button>
                                    )}
                                    {isLastPage && (
                                        <button
                                            onClick={() => alert("¡Formulario guardado/enviado!")}
                                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline transition duration-300"
                                        >
                                            Publicar
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Post