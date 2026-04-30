import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <>

      <div className='flex bg-amber-600  gap-20 justify-center  items-center h-screen p-30' >
        <div className='flex bg-sky-400 w-70 p-5 flex-col text-white  items-center'>
          <img className='h-50 border rounded-sm' src="https://images.unsplash.com/photo-1761839258044-e59f324b5a7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8" alt="" />
          <p>image 1</p>
          <p>discription</p>

        </div>
        <div className='flex bg-sky-400 w-70 p-5 flex-col text-white  items-center'>

          <img className='h-50  border rounded-sm' src="https://images.unsplash.com/photo-1776549821469-e8aab812dba0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D" alt="" />
           <p>image 2</p>
          <p>discription</p>
        </div>
        <div className='flex bg-sky-400 w-70 p-5 flex-col text-white  items-center'>
          <img className='h-50 border rounded-sm' src="https://images.unsplash.com/photo-1761839257864-c6ccab7238de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D" alt="" />
           <p>image 3</p>
          <p>discription</p>
        </div>
      </div>

    </>
  )
}

export default App
