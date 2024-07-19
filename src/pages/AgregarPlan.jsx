import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const AgregarPlan = () => {

    const [busqueda, setBusqueda] = useState('')
    const encodedName = encodeURIComponent(busqueda)
    const [alumno, setAlumno] = useState({})
    const [isVisible, setIsVisible] = useState(false)

    const toggleListVisibility = () => {
        setIsVisible(!isVisible);
    }

    async function searchUser(e) {
        e.preventDefault()
        const response = await fetch(`https://jsonplaceholder.typicode.com/users?name=${encodedName}`)
        const data = await response.json()
        if (data.length > 0) {
            setAlumno(data[0])
            toggleListVisibility()
        } else {
            setAlumno(null)
        }

    }

    return (
        <>
            <Navbar />
            <h2 className='text-2xl font-semibold text-white container mx-auto mt-4 bg-blue-900 p-4 rounded-md flex items-center justify-center'>Agregar Plan</h2>
            <form className='container mx-auto mt-4 bg-blue-900 p-4 rounded-md flex flex-col gap-4 justify-center items-center'>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <h2 className='text-xl text-white font-semibold'>Buscar alumno</h2>
                    <div className='flex gap-4 justify-center items-center'>
                        <label className='text-white font-semibold'>Nombre</label>
                        <input onChange={(e) => setBusqueda(e.target.value)} type='text' />
                        <button onClick={searchUser} className='bg-blue-800 py-1 px-3 rounded-lg hover:bg-blue-600 text-white'>Buscar</button>
                    </div>
                </div>
            </form>

            <div className='container mx-auto mt-4 bg-blue-900 p-4 rounded-md flex flex-col gap-4 justify-center items-center'>
                <h2 className='text-xl text-white font-semibold'>Datos del alumno</h2>
                {
                    isVisible && (
                        <table className='w-full table-auto mt-4'>
                            <thead>
                                <tr>
                                    <th className='text-center text-white px-4 py-2'>Nombre</th>
                                    <th className='text-center text-white px-4 py-2'>Plan</th>
                                    <th className='text-center text-white px-4 py-2'>Estado</th>
                                    <th className='text-center text-white px-4 py-2'>Acción</th>
                                </tr>
                            </thead>
                            <tbody className='rounded'>
                                {
                                    alumno && (
                                        <tr className='odd:bg-blue-700 even:bg-blue-850' key={alumno.id}>
                                            <td className='text-center text-white px-4 py-2'>{alumno.name}</td>
                                            <td className='text-center text-white px-4 py-2'>{alumno.email}</td>
                                            <td className='text-center text-white px-4 py-2'>{alumno.username}</td>
                                            <td className='text-center text-white px-4 py-2'>
                                                <button className='bg-blue-800 py-1 px-3 rounded-lg hover:bg-blue-600'>Agregar</button>
                                            </td>
                                        </tr>
                                    )
                                }


                            </tbody>
                        </table>

                    )
                }
            </div>

        </>
    )
}

export default AgregarPlan