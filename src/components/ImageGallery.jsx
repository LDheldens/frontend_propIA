import React, { useState } from 'react';

const ImageGallery = ({ imageUrls }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div>
            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50 flex justify-center items-center">
                    <div className="relative">
                        <button
                            className="absolute top-0 right-0 m-4 text-white text-2xl"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <img
                            src={imageUrls[currentIndex]}
                            alt={`Imagen ${currentIndex + 1}`}
                            className="h-160 w-160"
                        />
                        <button
                            className="absolute top-1/2 transform -translate-y-1/2 left-4 text-white text-2xl"
                            onClick={goToPrevious}
                        >
                            &#8249;
                        </button>
                        <button
                            className="absolute top-1/2 transform -translate-y-1/2 right-4 text-white text-2xl"
                            onClick={goToNext}
                        >
                            &#8250;
                        </button>
                    </div>
                </div>
            )}

            <div className=" gap-4">
                <div>

                    <section class="bg-white w-full">
                        <div class="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
                            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
                                <div class="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
                                    <div onClick={() => openModal(0)} class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                                        <img src="./src/assets/edf1.jpeg" alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                        <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                        <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Edificio</h3>
                                    </div>
                                </div>
                                <div class="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
                                    <div onClick={() => openModal(1)} class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
                                        <img src="./src/assets/dep1.jpeg" alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                        <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                        <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Sala de juego</h3>
                                    </div>
                                    <div class="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                                        <div onClick={() => openModal(2)} class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                            <img src="./src/assets/dep3.jpeg" alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                            <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                            <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Dormitorio</h3>
                                        </div>
                                        <div onClick={() => openModal(3)} class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                            <img src="./src/assets/dep6.webp" alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                            <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                            <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Sala</h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
                                    <a href="" onClick={() => openModal(4)} class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                                        <img src="./src/assets/dep8.jpeg" alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                        <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                        <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Salón</h3>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ImageGallery;
