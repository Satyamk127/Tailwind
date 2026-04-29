

function Col_Span() {


  return (
    <>
      <h1 className='bg-sky-800 mb-10 text-white text-center p-4'>Col Span  </h1>
      <div className='grid grid-cols-3 gap-3 '>
        <div className='bg-red-600 p-4 col-span-2 text-center '>Item 1</div>
        <div className='bg-red-600 p-4 text-center '>Item 2</div>
       
      </div>



    </>
  )
}

export default Col_Span;
