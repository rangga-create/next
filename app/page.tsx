// "use client";

// import Button from "./component/Button";
// import Input from "./component/input";
// import Label from "./component/Label";

// export default function Home() {
//   return (
//     <div className="flex items-center justify-center h-screen w-screen">
//       <form>
//         <Label title="Nama" color="red" />
//         <Input
//           IsError={true}
//           className="border border-black-50 p-2 w-full"
//           onChange={() => {
//             alert("Hello");
//           }}
//           type="text"
//           name="name"
//           placeholder="Name"
//         />

//         <input
//           className="border border-black-50 p-2 w-full"
//           onChange={() => {
//             alert("Hello");
//           }}
//           type="text"
//           name="name"
//           placeholder="Email"
//         />
        
//         <Label title="Telepon" isRequired color="green" text="lg" />
//         <Input
//           IsError
//           massageError="Sesuaikan dengan no telepon anda"
//           className="border border-black-50 p-2 w-full"
//           onChange={() => {
//             alert("Hello");
//           }}
//           type="text"
//           name="name"
//           placeholder="Telepon"
//         />
//         <Input
//           className="border border-black-50 p-2 w-full"
//           onChange={() => {
//             alert("Hello");
//           }}
//           type="text"
//           name="name"
//           placeholder="Password"
//         />
//         <Button title="Simpan" colorSchema="blue" variant="solid" />
//         <Button title="Simpan" colorSchema="green" variant="outline" />
//         <Button width="md" title="Simpan" colorSchema="green" variant="solid" />
//         <Button
//           isLoading
//           width="md"
//           title="Simpan"
//           colorSchema="green"
//           variant="solid"
//         />
//          <Button
//           isLoading
//           width="md"
//           title="Simpan"
//           colorSchema="red"
//           variant="solid"
//         />
//       </form>
//     </div>
//   );
// }
