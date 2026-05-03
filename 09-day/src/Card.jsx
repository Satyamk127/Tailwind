function Card() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">

        <div className="bg-black border text-center border-red-800 text-white p-4 rounded-lg shadow-lg">
          <img src="https://images.unsplash.com/photo-1773332585698-cba3c91b73e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D" className="border border-red-800 rounded-2xl" alt="" />
          <h2 className="font-bold text-xl mt-5">Card 1</h2>
          <p className="text-gray-500">Description</p>
        </div>

        <div className="bg-black border border-red-800  text-center p-4 rounded-lg shadow-lg">
          <img src="https://plus.unsplash.com/premium_photo-1776981820574-8e9e3ba40109?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDJ8fHxlbnwwfHx8fHw%3D" className="border border-red-800 rounded-2xl" alt="" />
          <h2 className="font-bold text-xl text-white mt-5 text-center">Card 2</h2>
          <p className="text-gray-500">Description 1</p>
        </div>

        <div className="bg-black border text-center text-white border-red-800 p-4 rounded-lg shadow-lg">
          <img src="https://images.unsplash.com/photo-1777153200092-86381afc3792?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTR8fHxlbnwwfHx8fHw%3D" className="border border-red-800 rounded-2xl" alt="" />

          <h2 className="font-bold mt-5 text-xl">Card 3</h2>
          <p className="text-gray-500">Description</p>
        </div>

      </div>
    </>
  );
}
export default Card