import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form'
import Swal from 'sweetalert2';
import useUser from '../../hooks/useUser';
import { useNavigate } from 'react-router-dom';
const ChangePassword = () => {
    const navigate = useNavigate()

    const { register } = useUser()

    const { control, handleSubmit, formState: { errors }, watch } = useForm();
    const password = watch('password');
    const [terminos, setTerminos] = useState(false)
    const [errores, setErrores] = useState([])

    const onSubmit = async (user) => {
        if (!terminos) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Necesitas aceptar nuestros terminos y condiciones",
            });
            return
        }
        const { confirm_password, ...data } = user
        data.username = ''

        const response = await register(data, setErrores)

        console.log(response)

        setTimeout(() => {
            setErrores([])
        }, 5000)

        if (response) {
            navigate('/')
        }

    };
    const passwordMatchValidator = (value) => {
        return value === password || 'Las contraseñas no coinciden';
    };
    return (
        <div>
            <div>
                <h3 className='text-center lg:text-[25px] md:text-[20px]'>Cambiar contraseña</h3>

                <form className="space-y-6" noValidate onSubmit={handleSubmit(onSubmit)}>
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
                                Contraseña actual
                            </span>
                            {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
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
                                Nueva contraseña
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
                            Guardar Cambios
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ChangePassword