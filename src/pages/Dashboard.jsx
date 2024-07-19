import Navbar from '../components/Navbar'
import CardOpciones from '../components/CardOpciones'
import PlanesPendientesCard from '../components/PlanesPendientesCard'


const Dashboard = () => {



  return (
    <>
      <Navbar />
      <div className='container mx-auto grid grid-cols-2 gap-4 mt-4'>
        <CardOpciones titulo="Agregar Plan" icono="+" link={'/agregar-plan'} />
        <CardOpciones titulo="Editar Plan" icono="+" link={'/editar-plan'} />
      </div>
      <div className='container mx-auto grid grid-cols-1 gap-4 mt-4'>
        <PlanesPendientesCard />
      </div>


    </>

  )
}

export default Dashboard