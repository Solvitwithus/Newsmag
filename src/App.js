import { useState } from "react";
import Navbar from "./components/navbar";
import NewsBoard from "./components/newsboard";

function App(){

 const [category,setCategory] = useState("general");

  return(
    <>
     
  <Navbar setCategory={setCategory}/>
<NewsBoard category ={category}/>


    </>
  )
}
export default App;