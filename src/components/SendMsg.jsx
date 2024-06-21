import React, { useState } from "react"

function SendMsg() {
    const [isChecked, setIsChecked] = useState(false);
    const [inputValues, setInputValues] = useState({
        campo1: "",
        campo2: "",
        campo3: ""
    });
    const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValues({
            ...inputValues,
            [name]: value
        });
    };

    const handleSubmit = () => {
        // Verificar si algún campo está vacío
        const isEmpty = Object.values(inputValues).some(value => value.trim() === "");
        if (isEmpty) {
            setShowAlert(true);
        } else {
            // Aquí puedes hacer cualquier cosa que necesites con los valores de los campos de entrada cuando no están vacíos
            setShowAlert(false);
        }
    };
    return (
        <div>
            <div className="flex w-auto font-urbanist">
                <div className=" border border-gray-400 p-4 pb-12 ">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Enviar mensage</h2>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
                        <div className="col-span-full">
                            <label
                                htmlFor="Username"
                                className="relative border border-gray-200 shadow-sm focus-within:border-green1 focus-within:ring-1 focus-within:ring-green1 block text-sm font-medium leading-6 text-gray-900"
                            >
                                <input
                                    type="text"
                                    id="Username"
                                    className=" p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-inset focus:ring-green1 sm:text-sm sm:leading-6"
                                    placeholder="Username"
                                />
                                <span
                                    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-gray-100 p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                >
                                    G-mail
                                </span>
                            </label>
                            {/* <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Email
                                    </label>
                                    <div className="mt-1">
                                        <input id="email" placeholder='Email' name="email" type="email" autoComplete="email"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div> */}
                        </div>
                        <div className="col-span-full">
                            <label
                                htmlFor="Username"
                                className="relative border border-gray-200 shadow-sm focus-within:border-green1 focus-within:ring-1 focus-within:ring-green1 block text-sm font-medium leading-6 text-gray-900"
                            >
                                <input
                                    type="text"
                                    id="Username"
                                    className="peer p-1 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-green1 sm:text-sm sm:leading-6"
                                    placeholder="Username"
                                />

                                <span
                                    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-gray-100 p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                >
                                    Nombres
                                </span>
                            </label>
                            {/* <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Nombres
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div> */}
                        </div>

                        <div className="col-span-full">
                            <label
                                htmlFor="Username"
                                className="relative border border-gray-200 shadow-sm focus-within:border-green1 focus-within:ring-1 focus-within:ring-green1 block text-sm font-medium leading-6 text-gray-900"
                            >
                                <input
                                    type="text"
                                    id="Username"
                                    className="p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-inset focus:ring-green1 sm:text-sm sm:leading-6"
                                    placeholder="Username"
                                />

                                <span
                                    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-gray-100 p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                >
                                    Apellidos
                                </span>
                            </label>
                            {/* <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Apellidos
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div> */}
                        </div>
                        {/* <div className="sm:col-span-4">
                            <label
                                htmlFor="Username"
                                className="relative border border-gray-200 shadow-sm focus-within:border-green1 focus-within:ring-1 focus-within:ring-green1 block text-sm font-medium leading-6 text-gray-900"
                            >
                                <input
                                    type="text"
                                    id="Username"
                                    className="p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Username"
                                />

                                <span
                                    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-gray-100 p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                >
                                    DNI
                                </span>
                            </label>
                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        DNI
                                    </label>
                                    <div className="mt-1">
                                        <input type="number"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                        </div> */}
                        <div className="sm:col-span-4">
                            <label
                                htmlFor="Username"
                                className="relative border border-gray-200 shadow-sm focus-within:border-green1 focus-within:ring-1 focus-within:ring-green1 block text-sm font-medium leading-6 text-gray-900"
                            >
                                <input
                                    type="number"
                                    id="Username"
                                    className="p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Username"
                                />

                                <span
                                    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-gray-100 p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                >
                                    Celular
                                </span>
                            </label>
                            {/* <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        DNI
                                    </label>
                                    <div className="mt-1">
                                        <input type="number"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div> */}
                        </div>
                        {/* <div className="sm:col-span-3">
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                Unidad de interés
                            </label>
                            <div className="mt-2">
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    aria-placeholder=''
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green1 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option>1 Dormitorio</option>
                                    <option>2 Dormitorios</option>
                                    <option>3 Dormitorios</option>
                                </select>
                            </div>
                        </div> */}

                        <div className="col-span-full">
                            <label
                                htmlFor="Username"
                                className="relative border border-gray-200 shadow-sm focus-within:border-green1 focus-within:ring-1 focus-within:ring-green1 block text-sm font-medium leading-6 text-gray-900"
                            >
                                <input
                                    type="text"
                                    id="Username"
                                    className="p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-inset focus:ring-green1 sm:text-sm sm:leading-6"
                                    placeholder="Username"
                                />

                                <span
                                    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-gray-100 p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                >
                                    Mensage
                                </span>
                            </label>
                            {/* <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                        Mensage
                                    </label>
                                    <div className="mt-2">
                                        <input type="text" name="street-address"
                                            id="street-address"
                                            autoComplete="street-address"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div> */}
                        </div>
                    </div>
                    <div className='flex mt-3'>
                        <input type="checkbox" className='m-1 p-3 form-checkbox h-6 w-6 text-green1' />
                        <span className='text-[12px]'>Acepto los Términos y Condiciones de Uso. y las politicas de privacidad.</span>
                    </div>
                    <div className='flex mt-3'>
                        <input type="checkbox" id="miCheckbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} className='m-1 p-3 form-checkbox h-6 w-6 text-green1' />
                        <span className='text-[12px]'>Autorizo el uso de mi información para fines adicionales.</span>
                    </div>
                    <div className='mt-4'>
                        <button className='bg-green1 w-full p-3 rounded-lg text-white hover:bg-gray-300 hover:text-black'>
                            Contactar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SendMsg