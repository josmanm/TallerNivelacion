import { BrowserRouter, Route, Routes } from "react-router-dom";
import MiComponente from "../components/MiComponente";
import MiContador from "../components/MiContador";
import MisProductos from "../components/MisProductos";
import Detalles from "../pages/Detalles";
import Layout from "../components/Layout/Layout";
import MiContadorConUseReducer from "../components/MiContadorConUseReducer";
import { createContext, useEffect, useReducer } from "react";
import PublicRoutes from "./publicRouter";
import PrivatedRoutes from "./privateRouter";
import useSessionStorage from "../hooks/useStorage";
import userLoggedReducer, { userLoggedInitial } from "../reducers/userLoggedReducer";
import Login from "../pages/Login/Login";
import MiToDoList from "../components/MiToDoList";
import tasksReducer, { tasksInitialState } from "../reducers/tasksReducer";

export const AppContext = createContext({});
const AppRouter = () => {
  const [userLogged, userLoggedDispatch] = useReducer(userLoggedReducer, userLoggedInitial);
  const [tasks, tasksDispatch] = useReducer(tasksReducer, tasksInitialState);
  const { storagedData } = useSessionStorage('user');

  useEffect(() => {
    if (!userLogged.user && storagedData) {
      userLoggedDispatch({
        type: 'LOGIN',
        payload: {
          isAuthenticated: true,
          user: storagedData
        }
      })
    }
  }, [userLogged, storagedData])

  const globalStates = {
    userLogged: { userLogged, userLoggedDispatch },
    tasks: {tasks, tasksDispatch}
  }
  return (
    <div>
      <AppContext.Provider value={globalStates}>
        <BrowserRouter basename="/TallerNivelacion">
          <Routes>
            <Route element={<PublicRoutes isAuthenticate={userLogged.isAuthenticated} />}>
              <Route element={<Layout />}>
                <Route path='login' element={<Login />} />
                <Route index element={<MiComponente />} />
                <Route path="/micontadorConReducer" element={<MiContadorConUseReducer />} />
                <Route path="/micomponente" element={<MiComponente />} />
                <Route path="/micontador" element={<MiContador />} />
                <Route path="/misproductos" element={<MisProductos />}>
                  <Route path=':name' element={<Detalles />} />
                </Route>
              </Route>
            </Route>
            <Route element={<PrivatedRoutes isAuthenticate={userLogged.isAuthenticated} />}>
                  <Route path="/miTodoList" element={<MiToDoList />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  )
}

export default AppRouter