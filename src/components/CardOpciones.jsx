import { Link } from "react-router-dom"

const CardOpciones = ({titulo, link, icono}) => {
    return (
        <div className='bg-blue-900 p-4 rounded-md text-white flex gap-4 items-center justify-between'>
            <h1 className="font-semibold">{titulo}</h1>
            <button className='bg-blue-800 py-1 px-3 rounded-lg hover:bg-blue-600'><Link to={link}>{icono}</Link></button>
        </div>
    )
}

export default CardOpciones