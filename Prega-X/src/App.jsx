import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Trimester from './Components/Trimester/Trimester';
import TrimesterList from './Components/TrimesterList/TrimesterList';
import Todo from './Components/todo/todo'
import Chatbox from './Components/chat/Chatbox'

import { trimester } from './data';
import LoginForm from './Components/login/Loginform';
import SignupForm from './Components/login/Signup';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/trimester" element={<TrimesterList />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/chat" element={<Chatbox></Chatbox>} />
        <Route path="/trimester/:id" element={<Trimester data={trimester} />} />
        <Route path="/login" element={<LoginForm></LoginForm>} />
        <Route path="/signup" element={<SignupForm></SignupForm>} />
      </Routes>
    </div>
  )
}
