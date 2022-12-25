import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Trimester from './Components/Trimester/Trimester';
import TrimesterList from './Components/TrimesterList/TrimesterList';

import { trimester } from './data';

export default function App() {
  return (
    <div className="App">
      <Routes>
        
      <Route path="/trimester" element={<TrimesterList/>} />
        <Route path="/trimester/:id" element={<Trimester data={trimester}/>} />
      </Routes>
    </div>
  )
}
