import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ForgotPassword from './pages/ForgotPassword';
import ContactDirectory from './pages/ContactDirectory';
function App(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/forgot-password' element={<ForgotPassword/>}/>
                <Route path='/contact-directory' element={<ContactDirectory/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;