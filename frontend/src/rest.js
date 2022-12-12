/*<BrowserRouter>
      <div className='container' style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
        <Header /> 
        <Routes>
                 <Route exact path='/Form' element={< Form />}></Route>
                 <Route exact path='/payment' element={< Payment />}></Route>
                 <Route exact path='/slot' element={< Slot />}></Route>
          </Routes> 
      </div>
      </BrowserRouter>

      import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
    return <div>
    <h1 className="header">Yoga App</h1>
    <div className="nav-link">
        <NavLink to="/" active>
          Form
        </NavLink>
        <NavLink to="/payment" >
          Payment
        </NavLink>
</div>
</div>
}
 
export default Header; 

import 'bootstrap/dist/css/bootstrap.min.css';
import Payment from './Payment';
import Form from './Form';
import axios from 'axios'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';

function App() {
  return <>
  <Header/>
  <BrowserRouter>
      <div className='container' style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
        <Header /> 
        <Routes>
                 <Route exact path='/' element={< Form />}></Route>
                 <Route exact path='/payment' element={< Payment />}></Route>
        </Routes> 
      </div>
      </BrowserRouter>
  </>
}

export default App;
*/