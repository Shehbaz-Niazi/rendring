"use client"
import { useState } from "react"
import Test from "../../component/test"
import Test1 from "../../component/test1"

export default function Home(){
  const [show,setShow] = useState(true)

  return(
    <div>
      <h1>Conditional Rendring</h1>
      {
        show? <Test/>
        : <Test1/>
      };
      <br />
      <button onClick={()=>setShow(!show)}>click me</button>
    </div>
)
}
