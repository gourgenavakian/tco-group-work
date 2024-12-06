import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ForgotPassword from './pages/ForgotPassword';
import ContactDirectory from './pages/ContactDirectory';
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";

function App(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/forgot-password' element={<ForgotPassword/>}/>
                <Route path='/contact-directory' element={<ContactDirectory/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/reset-password' element={<ResetPassword/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;