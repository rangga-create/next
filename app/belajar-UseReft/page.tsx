"use client";
import { useRef } from "react";
import Button from "../component/Button";

export default function Reft() {

const RefBelajar = useRef<HTMLDivElement>(null);

  return (
    <>
      <h1>UseReft</h1>
      <div onMouseEnter={()=>{
        console.log("ok",RefBelajar)
        if (RefBelajar.current) {
            RefBelajar.current.classList.remove("bg-red-400")
            RefBelajar.current.classList.add("bg-yellow-400")
            // RefBelajar.current.innerText = "ok"
        }
      }} onMouseLeave={()=>{
        console.log("keluar")
          if (RefBelajar.current) {
            RefBelajar.current.classList.remove("bg-yellow-400")
            RefBelajar.current.classList.add("bg-red-400")
                // RefBelajar.current.innerText = ""
            
        }
      }} ref={RefBelajar} className="bg-red-400 border-2 border-green-300 h-20 w-full rounded-2xl">
    
      </div>
          <Button onClick={()=>{
            if (RefBelajar.current) {
                const btn = document.createElement("div")
                btn.innerText = "Water"
                RefBelajar.current.appendChild(btn)
                btn.classList.add("rounded-lg","text-white","p-2","mt-2")
            }
        }} colorSchema="green" title="Tambah" />
    </>
  );
}
