import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import Home from '../Compo/Home';
import Registerform from '../Compo/Registerform';
import Login from '../Compo/Login';

function RouteCompo() {
    return (
        <div>
            <div className='flexarr'>
                <NavLink to="/" ><h3>Home</h3></NavLink>
                <NavLink to="/register" ><h3>Register</h3></NavLink>
                <NavLink to="/login" ><h3>Login</h3></NavLink>
            </div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/register" element={<Registerform />}></Route >
                <Route path="/login" element={<Login />}></Route>
            </Routes>
        </div>
    )
}

export default RouteCompo