import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

import Home from './pages/Home'
import Admin from './pages/Admin'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'

function App() {

  const {user} = useAuthContext()
  console.log(user)

  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <div className="pages">
      <Routes>
        <Route 
          path="/"
          element={user && user.role === 'admin' ? <Admin/> : user? <Home/> :<Navigate to = "/"></Navigate>}
        />
        <Route 
          path="/login"
          element={!user ? <Login/> : <Navigate to = "/"></Navigate>}
        />
        <Route 
          path="/signup"
          element={!user ? <Signup/> : <Navigate to = "/"></Navigate>}
        />
      </Routes>
     </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
