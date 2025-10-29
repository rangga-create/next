"use client";

import { useEffect, useState } from "react";
import Input from "../component/input";
import { text } from "stream/consumers";
import Link from "next/link";

export default function BelajarUseEffect(){

const [count,setCount] = useState<number>(0);
let [text,setText] = useState<string>("");


useEffect( () => {
let interval = setInterval( () => {
    console.log("berjalan");
setCount ((c)=> c + 1);

},1000);
return ()=> {
    clearInterval(interval)
}

},[text] )

// useEffect( () => {
// //kode yang akan di jalankan ketika component di render
// console.log("berjalan");
// setCount ((c)=> c + 1);

// },[text] )


    return <>
    <div className="border border-red-500 rounded-full flex justify-center items-center mt-6 mb-6">ini count : {count}
    <Link href={"/belajar-state"} className="text-blue-500 underline ml-3" >Pindah</Link>
    </div>
   
      <h2>{text}</h2>
   <Input value={text} onChange={(e)=>{
        setText(e.target.value)
      }} />
    </>
}