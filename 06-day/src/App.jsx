
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <>
      <h1 className='p-10 text-center bg-red-800 md:bg-sky-600 lg:bg-green-700 text-sm md:text-xl lg:text-3xl text-white'>Today I learn Responsive Ui</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-4 bg-gray-200'>

        <div className='bg-red-600 text-white p-6 rounded-lg shadow-lg text-center col-span-1 md:col-span-2'>
          Item 1
        </div>

        <div className='bg-red-600 text-white p-6 rounded-lg shadow-lg text-center'>
          Item 2
        </div>

        <div className='bg-red-600 text-white p-6 rounded-lg shadow-lg text-center'>
          Item 3
        </div>

        <div className='bg-red-600 text-white p-6 rounded-lg shadow-lg text-center'>
          Item 4
        </div>

        <div className='bg-red-600 text-white p-6 rounded-lg shadow-lg text-center'>
          Item 5
        </div>

        <div className='bg-red-600 text-white p-6 rounded-lg shadow-lg text-center lg:col-span-3'>
          Item 6
        </div>

      </div>


    </>
  )
}

export default App
