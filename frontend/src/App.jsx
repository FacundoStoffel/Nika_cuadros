import './styles/App.css';
import Menu from './Menu';
import { Route, Routes } from "react-router-dom";
import Inicio from './Inicio';
import Productos from './Productos';
import Nosotros from './Nosotros';
import Footer from './Footer';

function App() {
  return (
    <>
      <Menu></Menu>
      {/* <div className='container'> */}
        <Routes>
          <Route path='/' element={<Inicio></Inicio>}></Route>
          <Route path='/productos' element={<Productos></Productos>}></Route>
          <Route path='/nosotros' element={<Nosotros></Nosotros>}></Route>
        </Routes>
      {/* </div> */}
      <Footer></Footer>
    </>
  );
}

export default App;
