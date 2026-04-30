

function Form() {


  return (
    <>
      <h1 className="bg-blue-400   text-center p-4 text-xl text-white"> I Make from using html and css </h1>
      <div className="max-w-sm mx-auto bg-white mt-10 rounded-lg shadow-lg">

        <h1 className=" mb-4  font-bold  text-2xl text-center">Log-In</h1>
        <form action="https://www.linkedin.com/in/satyamkeshari/">
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 mb-3 rounded"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 mb-3 rounded"
          />

          <button className=" w-full bg-blue-500 text-white p-2 rounded">
            Login
          </button>

        </form>



      </div>





    </>
  )
}

export default Form
