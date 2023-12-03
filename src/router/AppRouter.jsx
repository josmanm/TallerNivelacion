import { BrowserRouter, Route, Routes } from "react-router-dom";
import MiComponente from "../components/MiComponente";
import MiContador from "../components/MiContador";
import MisProductos from "../components/MisProductos";
import Detalles from "../pages/Detalles";
import Layout from "../components/Layout/Layout";
const AppRouter = () => {
  return (
    <div>
        <BrowserRouter basename='/TallerNivelacion'>
            <Routes>
              <Route element={<Layout/>}>
                    <Route index element={<MiComponente />} />
                    <Route path="/micomponente" element={<MiComponente />} />
                    <Route path="/micontador" element={<MiContador/>} />
                    <Route path="/misproductos" element={<MisProductos/>}>
                      <Route path=':name' element={<Detalles />} />
                    </Route>
              </Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter