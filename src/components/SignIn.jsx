import React from 'react'

function SignIn() {
    return (
        <div>
            <div className="min-h-full flex justify-center items-center mx-auto px-6 py-12 lg:px-8" style={{ backgroundImage: "url('./src/assets/dep1.jpeg')" }}>
                <div className='bg-black bg-opacity-40 ml-4 mr-4 mb-10 rounded-lg p-6 w-160 '>
                    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <img
                                className="mx-auto h-10 w-auto"
                                src="./src/assets/logo.png"
                                alt="my Company"
                            />
                            <h2 className="mt-10 mb-5 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                                Inciar sesión
                            </h2>
                        </div>
                        <form className="space-y-6" action="#" method="POST">
                            <div className="col-span-full">
                                <label
                                    htmlFor="Username"
                                    className="relative rounded-md border border-gray-200 shadow-sm focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green-600 block text-sm font-medium leading-6 text-gray-900 bg-gray-200"
                                >
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        autoComplete="email"
                                        required
                                        class=" p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                        placeholder="Username"
                                    />
                                    <span
                                        className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-gray-200 p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs rounded-sm"
                                    >
                                        Ingrese su email
                                    </span>
                                </label>
                            </div>
                            <div className="col-span-full">
                                <label
                                    htmlFor="Username"
                                    className="relative rounded-md border border-gray-200 shadow-sm focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green-600 block text-sm font-medium leading-6 text-gray-900 bg-gray-200"
                                >
                                    <input
                                        id="name"
                                        type="name"
                                        name="name"
                                        autoComplete="name"
                                        required
                                        class=" p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                        placeholder="Username"
                                    />
                                    <span
                                        className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-gray-200 p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs rounded-sm"
                                    >
                                        Nombres
                                    </span>
                                </label>
                            </div>
                            <div className="col-span-full">
                                <label
                                    htmlFor="Username"
                                    className="relative rounded-md border border-gray-200 shadow-sm focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green-600 block text-sm font-medium leading-6 text-gray-900 bg-gray-200"
                                >
                                    <input
                                        id="name"
                                        type="name"
                                        name="name"
                                        autoComplete="name"
                                        required
                                        class=" p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                        placeholder="Username"
                                    />
                                    <span
                                        className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-gray-200 p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs rounded-sm"
                                    >
                                        Apellidos
                                    </span>
                                </label>
                            </div>
                            <div className="col-span-full">
                                <label
                                    htmlFor="Username"
                                    className="relative rounded-md border border-gray-200 shadow-sm focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green-600 block text-sm font-medium leading-6 text-gray-900 bg-gray-200"
                                >
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        class=" p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                        placeholder="Username"
                                    />
                                    <span
                                        className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-gray-200 p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs rounded-sm"
                                    >
                                        Contraseña
                                    </span>
                                </label>
                            </div>
                            <div className="col-span-full">
                                <label
                                    htmlFor="Username"
                                    className="relative rounded-md border border-gray-200 shadow-sm focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green-600 block text-sm font-medium leading-6 text-gray-900 bg-gray-200"
                                >
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        class=" p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                        placeholder="Username"
                                    />
                                    <span
                                        className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-gray-200 p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs rounded-sm"
                                    >
                                        Confirmar Contraseña
                                    </span>
                                </label>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className=" w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Registrarse
                                </button>
                            </div>
                        </form>
                        <div className='flex mt-4'>
                            <input type="checkbox" className='m-1 p-3 form-checkbox h-8 w-8 text-green-500' />
                            <span className='text-[12px] text-white'>Acepto los Términos y Condiciones de Uso. y las politicas de privacidad.</span>
                        </div>

                        {/* <p className="mt-10 text-center text-sm text-white">
                            ¿No es un miembro? {' '}
                            <a href="#" className="font-semibold leading-6 text-green-600 hover:text-gray-500">
                                Terminos y condiciones
                            </a>
                        </p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn