import React, { useState } from 'react'

function FormPg3({ currentPage }) {
    const [images, setImages] = useState(new Array(6).fill(null));

    const handleSelect = (e, index) => {
        const file = e.target.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = (event) => {
            const imageDataUrl = event.target.result;
            const updatedImages = [...images];
            updatedImages[index] = imageDataUrl;
            setImages(updatedImages);
        };

        reader.readAsDataURL(file);
    };

    const handleRemove = (index) => {
        const updatedImages = [...images];
        updatedImages[index] = null;
        setImages(updatedImages);
    };
    return (
        <div className={`${currentPage != 3 ? "hidden" : ""}`}>
            <div className=''>
                {/* <div>
                    <label htmlFor="cover-photo" className="block text-xl font-medium leading-6 text-gray-900">
                        Subir fotos
                    </label>
                    <div className="flex flex-col items-center font-urbanist">
                        <div className="grid grid-cols-3 gap-4">
                            {images.map((imageUrl, index) => (
                                <div key={index} className="relative">
                                    <label htmlFor={`file-upload-${index}`} className="md:w-60 h-60 border border-dashed border-gray-400 flex items-center justify-center cursor-pointer rounded-lg">
                                        {imageUrl ? (
                                            <>
                                                <img
                                                    src={imageUrl}
                                                    alt={`Image ${index + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                                <button
                                                    onClick={() => handleRemove(index)}
                                                    className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full"
                                                >
                                                    X
                                                </button>
                                            </>
                                        ) : (
                                            <span className='text-blue-500'>Subir imagen</span>
                                        )}
                                    </label>
                                    <input
                                        id={`file-upload-${index}`}
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={(e) => handleSelect(e, index)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div> */}
                <div className="col-span-full">
                    <label htmlFor="cover-photo" className="block text-xl font-medium leading-6 text-gray-900">
                        Subir fotos
                    </label>
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 font-urbanist">
                        <div className="text-center">
                            {/* <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" /> */}
                            <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                <label
                                    htmlFor="file-upload"
                                    className="relative cursor-pointer rounded-md bg-white font-semibold text-green-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-green-400 focus-within:ring-offset-2 hover:text-gray-500"
                                >
                                    <span>Cargar un archivo</span>
                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                </label>
                                <p className="pl-1">o arrastrar y soltar</p>
                            </div>
                            <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormPg3