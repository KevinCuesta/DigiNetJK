
import Layaut  from "./components/Layaut"
import Navbar from "./components/navbar"

import { Navigate, Route, Routes } from "react-router-dom"
import Inicio from "./pages/inicio"
import QuienesSomos from "./pages/quienessomos"
import Imagenes from "./pages/imagenes"
import Valores from "./pages/valores"

import Footer from "./components/footer"
import Contactanos from "./pages/contactanos"
function App() {

  return (
    <>
      <div className="bg-primary min-h-screen">
        <Navbar></Navbar>
        <Layaut>
          <Routes>
            <Route path= '/' element={<Inicio></Inicio>}></Route>
            <Route path= '/quienessomos' element={<QuienesSomos></QuienesSomos>}></Route>
            <Route path= '/valores' element={<Valores></Valores>}></Route>
            <Route path= '/imagenes' element={<Imagenes></Imagenes>}></Route>
            <Route path= '/contactanos' element={<Contactanos></Contactanos>}></Route>
            <Route path= '*' element={<Navigate to="/" ></Navigate>}></Route>
          </Routes>
        </Layaut>
      <Footer/>
      </div>
      
    </>
  )
}

export default App
