function Footer(){
  return(
    <>
    

     <div className="bg-black text-white  text-center h-40 ">
      <form   className="flex flex-col h-30" action="">
        <input className="text-white" type="text"  placeholder="Enter your first name "/>
        <input type="text" placeholder="Enter your last name " />
        <input type="text" placeholder="Enter your  Email "/>
        <input type="text" placeholder="Enter your password " />
       <button>Submit</button>
      </form>

      © 2026 Satyam Keshari. All Rights Reserved.
      
     </div>
    </>
  );
}

export default Footer;