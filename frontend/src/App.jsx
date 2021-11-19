
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Scoreboard from "./pages/Scoreboard";
import Settings from "./pages/Settings";

import "antd/dist/antd.css"


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Scoreboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;