
function Nav() {


  return (
    <>

      <div className="flex justify-between items-center bg-black  border border-red-500 rounded text-white p-4">
        <div className="text-xl font-bold">MySite</div>

        <div className="flex gap-4">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </div>


    </>
  )
}

export default Nav
