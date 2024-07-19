import React, { useState } from 'react'

const PlanesPendientesCard = () => {

    const planesPendientes = [{ Nombre: 'Juan', plan: '3 dias fullbody', Estado: 'Pendiente' }, { Nombre: 'Maria', plan: '2 dias fullbody', Estado: 'Pendiente' }, { Nombre: 'Pedro', plan: '1 dia fullbody', Estado: 'Pendiente' }]
    const [isVisible, setIsVisible] = useState(false)

    const toggleListVisibility = () => {
        setIsVisible(!isVisible);
    }

    return (
        <div className='bg-blue-900 p-4 rounded-md text-white flex flex-col gap-4 items-center justify-between'>
            <div onClick={toggleListVisibility} className='cursor-pointer flex gap-4 items-center justify-between w-full'>
                <h1 className='font-semibold'>Planes pendientes</h1>
                <button onClick={toggleListVisibility} className='bg-blue-800 py-1 px-3 rounded-lg hover:bg-blue-600'>{isVisible ? '-' : '+'}</button>
            </div>
            {
                isVisible && (
                    <table className='w-full table-auto mt-4'>
                        <thead>
                            <tr>
                                <th className='px-4 py-2'>Nombre</th>
                                <th className='px-4 py-2'>Plan</th>
                                <th className='px-4 py-2'>Estado</th>
                                <th className='px-4 py-2'>Acción</th>
                            </tr>
                        </thead>
                        <tbody className='rounded'>
                            {planesPendientes.map((plan) => (
                                <tr className='odd:bg-blue-700 even:bg-blue-850' key={plan.Nombre}>
                                    <td className='text-center px-4 py-2'>{plan.Nombre}</td>
                                    <td className='text-center px-4 py-2'>{plan.plan}</td>
                                    <td className='text-center px-4 py-2'>{plan.Estado}</td>
                                    <td className='text-center px-4 py-2'>
                                        <button className='bg-blue-800 py-1 px-3 rounded-lg hover:bg-blue-600'>Agregar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
        </div>
    )
}

export default PlanesPendientesCard