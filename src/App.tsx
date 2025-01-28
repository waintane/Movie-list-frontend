import React from 'react';
import './style/style.scss';
import {Routes, Route} from "react-router-dom";
import Accueil from './pages/Accueil.tsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Accueil/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
