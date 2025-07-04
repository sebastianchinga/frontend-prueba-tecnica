import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Admin from './layout/Admin'
import Home from './pages/Home'
import Auth from './layout/Auth'
import Login from './pages/auth/Login'
import { AuthProvider } from './context/AuthProvider'
import { TaskProvider } from './context/TaskProvider'
import Registro from './pages/auth/Registro'
import ConfirmarCuenta from './pages/auth/ConfirmarCuenta'
import OlvidePassword from './pages/auth/OlvidePassword'
import CambiarPassword from './pages/auth/CambiarPassword'

function App() {

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <TaskProvider>
            <Routes>
              <Route path='/' element={<Auth />}>
                <Route index element={<Login />} />
                <Route path='registro' element={<Registro />} />
                <Route path='confirmar-cuenta/:token' element={<ConfirmarCuenta />} />
                <Route path='olvide-password' element={<OlvidePassword />} />
                <Route path='olvide-password/:token' element={<CambiarPassword />} />
              </Route>

              <Route path='admin' element={<Admin />}>
                <Route index element={<Home />} />
              </Route>
            </Routes>
          </TaskProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
