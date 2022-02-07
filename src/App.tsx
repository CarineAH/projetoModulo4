import React from 'react';
import { Routes, Route } from "react-router-dom";

import { GlobalStyle } from './Styles/GlobalStyle';

// COMPONENTS
import Header from './Components/Header/Header';

import Contato from './Pages/Contato/Contato';
import Destino from './Pages/Destino/Destino';
import Home from './Pages/Home/Home';
import Promocoes from './Pages/Promocoes/Promocoes';
import Footer from './Components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/destino" element={<Destino />}/>
                <Route path="/promocoes" element={<Promocoes />}/>
                <Route path="/contato" element={<Contato />}/>
            </Routes>
            <Footer/>
            <GlobalStyle/>
        </div>
    );
}

export default App;