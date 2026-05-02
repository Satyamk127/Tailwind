function Card() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">

        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="font-bold text-xl">Card 1</h2>
          <p className="text-gray-500">Description</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="font-bold text-xl">Card 2</h2>
          <p className="text-gray-500">Description</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="font-bold text-xl">Card 3</h2>
          <p className="text-gray-500">Description</p>
        </div>

      </div>
    </>
  );
}
export default Card