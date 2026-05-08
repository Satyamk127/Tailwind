function Nav() {
  return (
    <>
      <div className='flex justify-between p-6 bg-gray-300 items-center text-black'>
        <div className='flex text-gray-700 gap-5'>
          <div>WIX</div>
          <div>Prduct</div>
          <div>Solution</div>
          <div>Resources</div>
          <div>Price</div>
          <div>Wix Studio</div>
          <div>Enterprise</div></div>

        <div className='flex gap-5'>
          <div className='bg-red-500 p-2 rounded-xl text-white'>Loing</div>
          <div ><button className='bg-red-500 p-2 rounded-xl text-white'>Get Started</button></div>
        </div>
      </div>
    </>
  );
}
export default Nav;