import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './components/pages/Login'
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './components/common/Footer'
import Inicio from './components/pages/Inicio'
import Administrador from './components/pages/Administrador';
import Candidatos from './components/pages/Candidatos'
import Menu from './components/common/Menu';

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Menu></Menu>

      <Routes>
      <Route path='/' element={<Inicio></Inicio>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/administrador' element={<Administrador></Administrador>}></Route>
      <Route path='/candidatos' element={<Candidatos></Candidatos>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
