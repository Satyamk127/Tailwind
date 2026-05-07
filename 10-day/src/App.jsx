import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-between p-6 items-center text-black'>
        <div className='flex gap-5'>
          <div>WIX</div>
          <div>Prduct</div>
          <div>Solution</div>
          <div>Resources</div>
          <div>Price</div>
          <div>Wix Studio</div>
          <div>Enterprise</div></div>

        <div className='flex gap-5'>
          <div className='bg-red-500'>Loing</div>
          <div><button>Get Started</button></div>
        </div>
      </div>


    </>
  )
}

export default App
