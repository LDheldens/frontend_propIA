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