import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import AgregarPlan from './pages/AgregarPlan'
import EditarPlan from './pages/EditarPlan'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/agregar-plan' element={<AgregarPlan/>}/>
        <Route path='/editar-plan' element={<EditarPlan/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
