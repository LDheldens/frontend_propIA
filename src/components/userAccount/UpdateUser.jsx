import React from 'react'
import { useForm, Controller } from 'react-hook-form'

const UpdateUser = () => {
    return (
        <div>
            <form className="space-y-6" noValidate onSubmit={handleSubmit(onSubmit)}>
                <div className="col-span-full">
                    <label
                        htmlFor="email"
                        className="relative border border-gray-200 shadow-sm focus-within:border-green1 focus-within:ring-1 focus-within:ring-green1 block text-sm font-medium leading-6 text-gray-900 bg-gray-200"
                    >
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: 'El correo electrónico es obligatorio',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Ingrese un correo electrónico válido'
                                }
                            }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="email"
                                    id="email"
                                    autoComplete="email"
                                    className={`p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-green1 sm:text-sm sm:leading-6 ${errors.email ? 'ring-red-500' : ''}`}
                                    placeholder="Correo electrónico"
                                />
                            )}
                        />
                        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-gray-200 p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs rounded-sm">
                            Ingrese su email
                        </span>
                        {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                    </label>
                </div>
                <div className="col-span-full">
                    <label
                        htmlFor="first_name"
                        className="relative border border-gray-200 shadow-sm focus-within:border-green1 focus-within:ring-1 focus-within:ring-green1 block text-sm font-medium leading-6 text-gray-900 bg-gray-200"
                    >
                        <Controller
                            name="first_name"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'El nombre es obligatorio' }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="text"
                                    id="first_name"
                                    autoComplete="given-name"
                                    className={`p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-green1 sm:text-sm sm:leading-6 ${errors.first_name ? 'ring-red-500' : ''}`}
                                    placeholder="Nombres"
                                />
                            )}
                        />
                        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-gray-200 p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs rounded-sm">
                            Nombres
                        </span>
                        {errors.first_name && <span className="text-red-500 text-xs">{errors.first_name.message}</span>}
                    </label>
                </div>
                <div className="col-span-full">
                    <label
                        htmlFor="last_name"
                        className="relative border border-gray-200 shadow-sm focus-within:border-green1 focus-within:ring-1 focus-within:ring-green1 block text-sm font-medium leading-6 text-gray-900 bg-gray-200"
                    >
                        <Controller
                            name="last_name"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'Los apellidos son obligatorios' }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="text"
                                    id="last_name"
                                    autoComplete="family-name"
                                    className={`p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-green1 sm:text-sm sm:leading-6 ${errors.last_name ? 'ring-red-500' : ''}`}
                                    placeholder="Apellidos"
                                />
                            )}
                        />
                        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-gray-200 p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs rounded-sm">
                            Apellidos
                        </span>
                        {errors.last_name && <span className="text-red-500 text-xs">{errors.last_name.message}</span>}
                    </label>
                </div>
                <div id="celular" className="col-span-full">
                    <label
                        htmlFor="phone"
                        className="relative border border-gray-200 shadow-sm focus-within:border-green1 focus-within:ring-1 focus-within:ring-green1 block text-sm font-medium leading-6 text-gray-900 bg-gray-200"
                    >
                        <Controller
                            name="phone"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: 'El número es obligatorio',
                                maxLength: {
                                    value: 9,
                                    message: 'El número debe tener un máximo de 9 dígitos'
                                },
                                pattern: {
                                    value: /^\d*$/,
                                    message: 'Solo se permiten números'
                                }
                            }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="number"
                                    id="phone"
                                    autoComplete="phone"
                                    inputMode="numeric"
                                    pattern="[0-9]{9}"
                                    maxLength="9"
                                    className={`p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-green1 sm:text-sm sm:leading-6 ${errors.phone ? 'ring-red-500' : ''}`}
                                    placeholder="Número celular"
                                />
                            )}
                        />
                        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-gray-200 p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs rounded-sm">
                            Número celular
                        </span>
                        {errors.phone && <span className="text-red-500 text-xs">{errors.phone.message}</span>}
                    </label>
                </div>
                <div className="col-span-full">
                    <label
                        htmlFor="password"
                        className="relative border border-gray-200 shadow-sm focus-within:border-green1 focus-within:ring-1 focus-within:ring-green1 block text-sm font-medium leading-6 text-gray-900 bg-gray-200"
                    >
                        <Controller
                            name="password"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'La contraseña es obligatoria' }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    className={`p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-green1 sm:text-sm sm:leading-6 ${errors.password ? 'ring-red-500' : ''}`}
                                    placeholder="Contraseña"
                                />
                            )}
                        />
                        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-gray-200 p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs rounded-sm">
                            Contraseña
                        </span>
                        {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
                    </label>
                </div>
                <div className="col-span-full">
                    <label
                        htmlFor="confirm_password"
                        className="relative border border-gray-200 shadow-sm focus-within:border-green1 focus-within:ring-1 focus-within:ring-green1 block text-sm font-medium leading-6 text-gray-900 bg-gray-200"
                    >
                        <Controller
                            name="confirm_password"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'Por favor confirme su contraseña', validate: passwordMatchValidator }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="password"
                                    id="confirm_password"
                                    autoComplete="current-password"
                                    className={`p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-green1 sm:text-sm sm:leading-6 ${errors.confirm_password ? 'ring-red-500' : ''}`}
                                    placeholder="Confirmar contraseña"
                                />
                            )}
                        />
                        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-gray-200 p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs rounded-sm">
                            Confirmar Contraseña
                        </span>
                        {errors.confirm_password && <span className="text-red-500 text-xs">{errors.confirm_password.message}</span>}
                    </label>
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full justify-center bg-green1 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded"
                    >
                        Registrarse
                    </button>
                </div>
            </form>
        </div>
    )
}

export default UpdateUser