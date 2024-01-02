import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

import Home from './pages/Home'
import Admin from './pages/Admin'
import Company from './pages/Company'
import Dashboard from './pages/Dashboard'
import Expert from './pages/Expert'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'

function NoMatch() {
  return (
    <div style={{ padding: 20 }}>
      <h2>404: Page Not Found</h2>
      <p>You're not supposed to be here (Level Lord)</p>
    </div>
  );
}

function App() {

  const {user} = useAuthContext()

  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <div className="pages">
      <Routes>
        <Route 
          path="/login"
          element={!user ? <Login/> : <Navigate to = "/home"></Navigate>}
        />
        <Route 
          path="/signup"
          element={!user ? <Signup/> : <Navigate to = "/home"></Navigate>}
        />
        <Route 
          path="/admin"
          element={!user ? <Signup/> : user.role === 'admin' ? <Admin/> : <Navigate to = "/home"></Navigate>}
        />
        <Route 
          path="/home"
          element={<Home/>}
        />
         <Route 
          path="/company"
          element={!user ? <Signup/> : <Company/>}
        />
         <Route 
          path="/expert"
          element={!user ? <Signup/> : <Expert/>}
        />
        <Route 
          path="/"
          element={user? <Navigate to = "/"></Navigate> : <Navigate to = "/login"></Navigate>}
        />
         <Route path="*" element={<NoMatch />} />
      </Routes>
     </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
