import './App.css';
import {Route,Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Signup from './Pages/Signup/index';
import Login from './Pages/Login/index';
import Edit from './Pages/Edit';
import AddNewBook from './Pages/AddNewBook';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} exact/>
      <Route path='/login' element={<Login/>} exact/>
      <Route path='/signup' element={<Signup/>} exact/>
      <Route path='/editBook/:id' element={<Edit/>} exact/>
      <Route path='/addNewBook' element={<AddNewBook/>} exact/>
    </Routes>
  );
}

export default App;
