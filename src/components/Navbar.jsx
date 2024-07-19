import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()

    const cerrarSesion = () => {
        localStorage.removeItem("session")
        navigate('/')
      }

    return (
        <nav className='w-full h-16 flex justify-between px-8 items-center bg-blue-900' >
            <h1 className='text-white text-3xl font-bold'>Logo</h1>
            <ul className='flex gap-4 text-white'>
                <li><Link to='/dashboard'>Home</Link></li>
                <li><button onClick={cerrarSesion}>Cerrar sesion</button></li>
            </ul>
        </nav>
    )
}

export default Navbar