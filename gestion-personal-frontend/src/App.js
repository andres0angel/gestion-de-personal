import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import AddEmployeeComponent from './components/AddEmployeeComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <br></br>

        <div className='container'>
            <Routes>
              <Route exact path='/' element={<ListEmployeeComponent />}></Route>
              <Route path='/empleados' element={<ListEmployeeComponent />}></Route>
              <Route path='/add-employee' element={<AddEmployeeComponent />}></Route>
              <Route path='/edit-employee/:id' element={<AddEmployeeComponent />}></Route>
            </Routes>
        </div>

        <FooterComponent />

      </BrowserRouter>
    </div>
  );
}

export default App;
