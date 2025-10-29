// export default function Home() {
// return (
//   <div>
//     <h1 className="text-red-500">Welcome to Rafasy</h1>
//     <Card count={1} wording="test aja"/>
//      <Card count={2} isView={false}/>
//       <Card count={3} isView/>
//        <Card count={4} isView={true}/>

import React from "react";

//   </div>

// )
// }

// function Card({count,wording,isView}:{count:number; wording?:string, isView?:boolean}){
//   return(
//     <div className=" h-40 w-40 mt-10 border rounded-2xl  border-red-500">
//       {count}
//      <span className="text-red-400">{wording}</span>
//      {isView? <span>Ok</span> : <div>tidak ok</div>}
//     </div>
//   )
// }

export default function Home() {
  return (
    <section>
      <div className="bg-black min-h-screen">
        <h1 className=" flex items-center justify-center mt-14 text-4xl">
          {" "}
          Projek <span className="text-blue-700 ml-2 text-4xl">
            {" "}
            Dashboard
          </span>{" "}
        </h1>
        <p className="flex items-center justify-center mt-6 text-gray-400 ">
          Welcome back.Budi santoso Here's an overview of your corrent project
          and task{" "}
        </p>
        <div className="flex items-center justify-center gap-10">
          <Container gambar="📚" nomor={12} judul="Project" />
          <Container gambar="✅" nomor={7} judul="Complited" />
          <Container gambar="♻️" nomor={3} judul="in progres" />
          <Container gambar="🕛" nomor={2} judul="pending" />
        </div>
        <div className="flex flex-col items-start justify-start gap-10">
          <p className="text-white text-2xl ml-56 mt-24 ">Task Overview</p>
        </div>

        <div className=" ml-52 flex flex-col items-start justify-start gap-2">
          <Task label="Create user" keterangan="proses">
            <div>
            <h1>HELLO</h1>
            <div className="bg-blue-300 w-20 h-20 rounded-full flex flex-col ">
             
            </div>
            </div>
            </Task>
          <Task label="Design" keterangan="deplo" />
          <Task label="Write" keterangan="pending" />
          <Task label="Test" keterangan="Complite" />
        </div>
      </div>
    </section>
  );
}

function Container({
  gambar,
  nomor,
  judul,
}: {
  gambar?: string;
  nomor?: number;
  judul?: string;
}) {
  return (
    <div className=" h-40 w-72 mt-10 border rounded-2xl bg-white text-black border-white/10">
      <div className="">
        <p className=" text-2xl mt-4">{gambar}</p>
        <h1 className="flex items-center justify-start mt-4 text-4xl">
          {" "}
          {nomor}{" "}
        </h1>
        <p className="flex items-center justify-start mb-4 text-gray-400 ">
          {judul}
        </p>
      </div>
    </div>
  );
}

function Task({ label, keterangan,children }: { label: string; keterangan: string ,children?:React.ReactNode}) {
  return (
    <section>
    <div className="h-32 w-[500px] mt-10 border rounded-2xl bg-white text-black border-white/10 flex flex-col items-start p-4 gap-4">
      <div className="flex items-center">
        <input type="checkbox" id="taskCheckbox1" className="mr-4 h-5 w-5" />
        <label htmlFor="taskCheckbox1" className="text-lg">
          {label}
        </label>
      </div>

      <div className=" ml-12 flex items-center">
        <input type="checkbox" className="h-5 w-5" />
        <div className=" ml-4 bg-gray-200 rounded-lg px-4 py-2 flex items-center">
          <span className="text-gray-700 text-[10px]">{keterangan}</span>
        </div>
      </div>
    </div>
    <div  className="bg-red-300 rounded-2xl text-2xl text-white mt-4 p-2">{children}</div>
    </section>
  );
}
