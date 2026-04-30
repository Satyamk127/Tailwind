

function MinProject() {


  return (
    <>
      <h1 className="text-center text-white p-4 bg-gray-800 rounded-lg mt-10">Mini Project Work</h1>

      <div className="flex bg-white  justify-center text-white  gap-10 mb-8 h-12 mt-3  ">
        <button className="bg-red-500 text-center cursor-pointer  p-3 text-white rounded-lg hover:bg-green-700 text-xl">Click 1</button>
        <button className="bg-red-500 text-center p-3 cursor-pointer text-white hover:bg-red-700 rounded-lg text-xl">Click 2</button>
        <button className="bg-red-500 text-center  p-3 cursor-pointer text-white hover:bg-yellow-800 rounded-lg text-xl">Click 3</button>
      </div>

      <div className="bg-sky-900 flex gap-10 justify-center items-center p-10 rounded m-10">
        <div className=" p-4 bg-white w-40 text-center rounded text-2xl">Item 1</div>
        <div className="p-4 bg-white w-40 text-center rounded text-2xl">Item 2</div>
        <div className=" p-4 bg-white rounded w-40 text-center text-2xl">Item 3</div>
      </div>

      <div className="bg-white max-w-sm mx-auto shadow-xl h-120">
        <h1 className="font-bold text-2xl mb-8 text-center">Register Here</h1>
        <form action="/">
          <input type="text" placeholder="First Name " className="w-full hover:bg-sky-100 p-3 rounded border mb-2 " />
          <input type="text" placeholder="Last Name " className="w-full p-3 rounded border mb-2" />
          <input type="eamil" placeholder="Enter your eamil " className="w-full rounded border p-3 mb-3" />
          <input type="password" placeholder="enter your password " className="w-full rounded border p-3 mb-3" />
          <input type="password" placeholder="Re-Check password" className="w-full rounded border p-3 mb-3" />
          <button className="w-full p-3 bg-red-900 text-white text-2xl cursor-pointer rounded">Submit</button>
        </form>
      </div>






    </>
  )
}

export default MinProject
