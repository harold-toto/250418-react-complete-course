import { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from "./pages/home/home";
import VariablesReact from "./components/topics-components/01-variables/variables-react";
//import './App.css'

function App() {

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage />
        }
      />
      <Route
        path="/01_variablesReact"
        element={
          <VariablesReact />
        }
      />
      {/* Catch-all route */}
      <Route
        path="*"
        element={
          <div>
            <h2>404 Not Found</h2>
            <p>Sorry, the page you are looking for does not exist.</p>
          </div>
        }
      />
    </Routes>
  )
}

export default App
