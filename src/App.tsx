import {BrowserRouter, Route, Routes} from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/HomePage"
import Register from "./pages/Register"
import LoginPage from "./pages/LoginPage"
import DashBoard from "./pages/DashBoard"
import AuthLayout from "./layouts/AuthLayout"
const App = () => {
  return (
    <BrowserRouter>
       <Routes>

        <Route path="/" element={<MainLayout/>}>
          <Route index element={<HomePage/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<LoginPage/>} />
        </Route>

           <Route path="" element={<AuthLayout/>}>
                <Route path="/dashboard" element={<DashBoard/>} />
           </Route>

       </Routes>      
    </BrowserRouter>
  )
}

export default App
