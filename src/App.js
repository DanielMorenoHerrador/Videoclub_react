
import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Containers/Home/Home';
import Login from './Containers/Login/Login';
import Profile from './Containers/Profile/Profile';
import Register from './Containers/Register/Register';
import Nav from './Components/Barranaveg/Nav';
import Peliculas from './Containers/Peliculas/Peliculas';
import Perfilpelicula from './Containers/Perfilpelicula/Perfilpelicula';
import TodosLosPedidos from './Containers/Todoslospedidos/Todoslospedidos';
import Pedidos from './Containers/Pedidos/Pedidos';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>

        <Nav/>

        <Routes>

          
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/peliculas" element={<Peliculas/>}/>
          <Route path="/perfilpelicula" element={<Perfilpelicula/>}/>
          <Route path="/todoslospedidos" element={<TodosLosPedidos/>}/>
          <Route path="/pedidos" element={<Pedidos/>}/>


        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
