function Nav() {
  return (
    <>
      <div className='flex justify-between p-6 bg-gray-300 items-center text-black'>
        <div className='flex text-gray-700 gap-5'>
          <div className="text-white bg-black p-2 rounded-2xl border border-red-500">WIX</div>
          <div className="text-white bg-black p-2 rounded-2xl border border-red-500">Prduct</div>
          <div className="text-white bg-black p-2 rounded-2xl border border-red-500">Solution</div>
          <div className="text-white bg-black p-2 rounded-2xl border border-red-500">Resources</div>
          <div className="text-white bg-black p-2 rounded-2xl border border-red-500">Price</div>
          <div className="text-white bg-black p-2 rounded-2xl border border-red-500">Wix Studio</div>
          <div className="text-white bg-black p-2 rounded-2xl border border-red-500">Enterprise</div></div>

        <div className='flex gap-5'>
          <div className="text-white bg-black p-2 rounded-2xl border border-red-500" >Loing</div>
          <div ><button className="text-white bg-black p-2 rounded-2xl border border-red-500">Get Started</button></div>
        </div>
      </div>
    </>
  );
}
export default Nav;