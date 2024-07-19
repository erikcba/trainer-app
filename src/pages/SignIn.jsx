import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../index.css'

const SignIn = () => {

    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [userLocal, setUserLocal] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {
        const storedUser = localStorage.getItem("usuario")
        if (storedUser) {
            setUserLocal(storedUser)
        } else {
            navigate('/')
        }
        console.log(storedUser)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (userLocal) {
            const parsedUser = JSON.parse(userLocal)
            if (parsedUser.mail === mail && parsedUser.password === password) {
                console.log(userLocal)
                localStorage.setItem("session", JSON.stringify(true))
                navigate('/dashboard')
            } else {
                alert("Usuario o contraseña mal")
            }
        } else {
            alert("Usuario no registrado")
        }
    }


    return (
        <div className='bg-blue-800 h-screen flex justify-center items-center'>
            <form className='bg-white w-96 p-8 rounded-lg shadow-md flex flex-col items-center justify-center' onSubmit={handleSubmit}>
                <h1 className='text-4xl font-bold text-blue-600 mb-4 text-center'>Inicia Sesión</h1>
                <label className='text-xl my-2 font-medium text-gray-500'>Mail</label>
                <input className='h-8 w-full border-2 border-gray-300 rounded-lg px-2 py-4 text-gray-700 focus:outline-none focus:border-blue-500' value={mail} onChange={(e) => setMail(e.target.value)} type='mail' required></input>
                <label className='text-xl my-2 font-medium text-gray-500' >Password</label>
                <input className='h-8 w-full border-2 border-gray-300 rounded-lg px-2 py-4 text-gray-700 focus:outline-none focus:border-blue-500' value={password} onChange={(e) => setPassword(e.target.value)} type='password' required></input>
                <button className='bg-blue-600 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-500'>Iniciar sesion</button>
            </form>
        </div>
    )
}

export default SignIn