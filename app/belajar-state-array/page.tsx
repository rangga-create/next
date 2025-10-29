"use client";
import { useState } from "react";


interface HasilUjian {
  mata_pelajaran: string;
  nilai: number;
  IsRemedial: boolean;
}


function RadioButton({ id, value, title, checked, onChange }: any) {
  return (
    <label htmlFor={id}>
      <input
        type="radio"
        id={id}
        value={value}
        checked={checked}
        onChange={onChange}
        className="mr-1"
      />
      {title}
    </label>
  );
}

export default function StateArray() {
  let [hasil, setHasil] = useState<HasilUjian[]>([
    { mata_pelajaran: "Matematika", nilai: 90, IsRemedial: false },
    { mata_pelajaran: "Bahasa Indonesia", nilai: 80, IsRemedial: false },
    { mata_pelajaran: "Bahasa Inggris", nilai: 70, IsRemedial: true },
  ]);

 
  let [mapel, setMapel] = useState("");
  let [nilai, setNilai] = useState("");
  let [isRemedial, setIsRemedial] = useState(false);


  let [Form, setForm] = useState(false);


  let simpanData = () => {
    let dataBaru: HasilUjian = {
      mata_pelajaran: mapel,
      nilai: +nilai, 
      IsRemedial: isRemedial,
    };

    setHasil([...hasil, dataBaru]);
    setMapel("");
    setNilai("");
    setIsRemedial(false);
    setForm(false); 
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">Data Hasil Ujian</h2>

    
      <table className="border w-full mb-5">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">No</th>
            <th className="border p-2">Mata Pelajaran</th>
            <th className="border p-2">Nilai</th>
            <th className="border p-2">Keterangan</th>
          </tr>
        </thead>
        <tbody>
          {hasil.map((item, index) => (
            <tr key={index}>
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{item.mata_pelajaran}</td>
              <td className="border p-2">{item.nilai}</td>
              <td className="border p-2">
                {item.IsRemedial ? "Remedial" : "Tidak"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {!Form && (
        <button
          onClick={() => setForm(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Tambah
        </button>
      )}

      {Form && (
        <div className="mt-5 border p-4 rounded-xl shadow-md bg-gray-50">
          <input
            type="text"
            placeholder="Mata Pelajaran"
            value={mapel}
            onChange={(e) => setMapel(e.target.value)}
            className="border my-5 rounded-2xl px-[800px] py-1 mr-2"
          />

          <input
            type="text"
            placeholder="Nilai"
            value={nilai}
            onChange={(e) => setNilai(e.target.value)}
            className="border rounded-2xl px-[800px] py-1 mr-2"
          />

          <div className="flex gap-10 ml-10 mt-5">
            <RadioButton
              id="lulus"
              value="true"
              title="Remedial"
              checked={isRemedial === true}
              onChange={() => setIsRemedial(true)}
            />
            <RadioButton
              id="tidak-lulus"
              value="false"
              title="Tidak Remedial"
              checked={isRemedial === false}
              onChange={() => setIsRemedial(false)}
            />
          </div>

          <div className="mt-5">
            <button
              onClick={simpanData}
              className="bg-green-500 text-white px-4 py-2 rounded mr-2"
            >
              Simpan
            </button>
            <button
              onClick={() => setForm(false)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Batal
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
