import React from 'react';
import { useFormContext } from 'react-hook-form';
import Map from '../Map';

function FormPg2({ currentPage }) {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className={`${currentPage != 2 ? "hidden" : ""} w-full`}>
            <div className='font-urbanist sm:80'>
                <h2 className="text-base font-semibold my-5 text-gray-900">¿Dónde está ubicado tu inmueble?</h2>
                <div>
                    <label
                        htmlFor="address"
                        className="relative rounded-md border border-gray-200 shadow-sm focus-within:border-green1 focus-within:ring-1 focus-within:ring-green1 block text-sm font-medium leading-6 text-gray-900"
                    >
                        <input
                            type="text"
                            id="address"
                            {...register('address', { required: 'Dirección es requerida' })}
                            className=" p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-inset focus:ring-green1 sm:text-sm sm:leading-6"
                            placeholder="address"
                        />
                        <span
                            className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                        >
                            Dirección:
                        </span>
                    </label>
                    {errors.address && <p className="text-red-600">{errors.address.message}</p>}
                </div>

                <div className='flex-1 gap-x-6 gap-y-8'>
                    <div className='flex flex-col sm:flex-row gap-2 my-3'>
                        <div className="w-full">
                            <label htmlFor="department" className="block text-sm font-medium leading-6 text-gray-900">
                                Departamento
                            </label>
                            <div className="mt-1">
                                <select
                                    id="department"
                                    {...register('department', { required: 'Departamento es requerido' })}
                                    className="block w-full rounded-md p-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green1  sm:text-sm sm:leading-6"
                                >
                                    <option value="">Selecciona Departamento</option>
                                    <option value="Lima">Lima</option>
                                    <option value="Arequipa">Arequipa</option>
                                    <option value="Huancayo">Huancayo</option>
                                </select>
                                {errors.department && <p className="text-red-600">{errors.department.message}</p>}
                            </div>
                        </div>
                        <div className="w-full">
                            <label htmlFor="province" className="block text-sm font-medium leading-6 text-gray-900">
                                Provincia
                            </label>
                            <div className="mt-1">
                                <select
                                    id="province"
                                    {...register('province', { required: 'Provincia es requerida' })}
                                    autoComplete="province-name"
                                    className="block w-full rounded-md p-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green1  sm:text-sm sm:leading-6"
                                >
                                    <option value="">Selecciona Provincia</option>
                                    <option value="Lima">Lima</option>
                                    <option value="Barranca">Barranca</option>
                                    <option value="Cajatambo">Cajatambo</option>
                                </select>
                                {errors.province && <p className="text-red-600">{errors.province.message}</p>}
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-2 my-3'>
                        <div className="w-full">
                            <label htmlFor="district" className="block text-sm font-medium leading-6 text-gray-900">
                                Distrito
                            </label>
                            <div className="mt-1">
                                <select
                                    id="district"
                                    {...register('district', { required: 'Distrito es requerido' })}
                                    autoComplete="district-name"
                                    className="w-full rounded-md p-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green1  sm:text-sm sm:leading-6"
                                >
                                    <option value="">Selecciona Distrito</option>
                                    <option value="Lima">Lima</option>
                                    <option value="Arequipa">Arequipa</option>
                                    <option value="Huancayo">Huancayo</option>
                                </select>
                                {errors.district && <p className="text-red-600">{errors.district.message}</p>}
                            </div>
                        </div>
                        <div className="w-full">
                            <label htmlFor="urbanization" className="block text-sm font-medium leading-6 text-gray-900">
                                Urbanización
                            </label>
                            <div className="mt-1">
                                <select
                                    id="urbanization"
                                    {...register('urbanization', { required: 'Urbanización es requerida' })}
                                    autoComplete="urbanization-name"
                                    className="w-full rounded-md p-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green1  sm:text-sm sm:leading-6"
                                >
                                    <option value="">Selecciona Urbanización</option>
                                    <option value="Lima">Lima</option>
                                    <option value="Barranca">Barranca</option>
                                    <option value="Cajatambo">Cajatambo</option>
                                </select>
                                {errors.urbanization && <p className="text-red-600">{errors.urbanization.message}</p>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-4'>
                    <h2 className="text-base font-semibold leading-7 text-gray-900">¿Cómo deseas mostrar tu ubicación?</h2>
                    <Map />
                </div>
            </div>
        </div>
    );
}

export default FormPg2;
