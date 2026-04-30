import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comp from './Comp'
import Form from './Form'
import MinProject from './MinProject'

function App() {
 

  return (
    <>
    
    <h1 className='text-sm md:text-xl text-center p-4 lg:text-3xl bg-red-400 md:bg-yellow-500 lg:bg-sky-800 text-white md:text-gray-500 lg:text-red-500'>I can user the resposive ui</h1>

    <Comp/>
    <Form/>
    <MinProject/>

     
     
    </>
  )
}

export default App
