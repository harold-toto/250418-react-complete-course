import { useState, version } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from "./pages/home/home";
import KeyboardShortCuts from "./components/topics-components/00-key-board-shortcuts/key-board-shortcuts";
import VariablesReact from "./components/topics-components/01-variables/variables-react";
import PropsReact from "./components/topics-components/02-props/props";
import './App.css'

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
        path="/00-key-board-shortcuts"
        element={
          <KeyboardShortCuts />
        }
      />

      <Route
        path="/01_variablesReact"
        element={
          <VariablesReact />
        }
      />

      <Route
        path="/02_propsReact"
        element={
          <PropsReact 
            title="Esta prop 'title', se pasó como parámetro al Componente" 
            subtitle="Esta prop 'title' --> Curso React"
            versionNumber={ 111436 }
          />
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
