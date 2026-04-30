

function Comp() {


  return (
    <>

      <div className="bg-white p-4 rounded-lg shadow-lg w-60 flex-col justify-center  flex items-center h-30">
        <h2 className="text-xl font-bold">Title</h2>
        <p className="text-gray-500">This is a card</p>
      </div>

      <div className="flex gap-4 mt-10">
        <div className="bg-white p-4 rounded-lg shadow-lg text-center w-60">Card 1</div>
        <div className="bg-white p-4 rounded-lg shadow-lg text-center w-60">Card 2</div>
        <div className="bg-white p-4 rounded-lg shadow-lg text-center w-60">Card 3</div>
      </div>
      <button className="bg-red-400 text-white rounded-lg p-2 m-5 cursor-pointer hover:bg-red-800">Click Me</button>




    </>
  )
}

export default Comp
