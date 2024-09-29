import { useState } from 'react'
import Title from './components/titulo.jsx'
import Conte from './components/contenedorCrud.jsx'
import './App.css'

function AppT() {

  return (
    <div>
      <Title />
      <Conte />

    </div>
  );
}

export default function App() {
  return (
    <>
      <div>
        <AppT />
      </div>

    </>

  );
}
