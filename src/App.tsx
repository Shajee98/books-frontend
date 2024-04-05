import { Navigate, Route, BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import ProtectedRoute from './ProtectedRoutes'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <BrowserRouter>
              <Routes>
                <Route element={<ProtectedRoute redirectPath="/login" />}>
                  <Route path="/dashboard" element={<Dashboard />}/>
                </Route>
                <Route path="/" element={<Navigate to="/login"/>}/>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
              </Routes>
            {/* </div> */}
          {/* </div> */}
        </BrowserRouter>
  )
}

export default App
