

function Manu() {


  return (
    <>
      {/* <div className="flex  justify-between bg-sky-500 p-8 gap-8">
      <div className="text-white">Logo</div>
      
      <div className="text-white" >Menu</div>
    </div>
    <div className="flex bg-red-400 items-center h-10 justify-center">
      <div className="text-white">Item Center</div>
    </div> */}


      <div className="flex justify-between items-center bg-sky-800 p-5 text-white">
        <div>My Logo</div>
        <div className="">

          <form action="/">
            <input className=" text-black bg-white p-2 border rounded-2xl" type="text" placeholder="Search here" />
            <button className="ml-1 text-xl cursor-pointer">Search</button>
          </form>
        </div>
        <div className="flex  gap-10 ">
          <a href="#">Home </a>
          <a href="#">About</a>
          <a href="#">Contect</a>
        </div>
      </div>


    </>
  )
}

export default Manu
