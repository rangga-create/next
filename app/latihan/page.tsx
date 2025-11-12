"use client";

import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FilterLatihan, Latihan } from "./interface";
import { latihanService } from "./service";
import Button from "../component/Button";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Drawer from "../component/Drawer";
import Input from "../component/input";

export default function LatihanPage() {
  const [open, setOpen] = useState<boolean>(false);
  const [filter, setFilter] = useState<FilterLatihan>({
    title: "",
    name: "",
    umur: "",
    alamat: "",
  });

  const [filterSubmit, setFilterSubmit] = useState<FilterLatihan>({
    title: "",
    name: "",
    umur: "",
    alamat: "",
  });

  const handleChangeFilter = (e: any) => {
    setFilter((v) => {
      return {
        ...v,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = () => {
    setFilterSubmit(filter);
    setOpen(false);
  };

  const nilaiSiswa = [
    { nama: "Matematika", nilai: 85 },
    { nama: "B.inggris", nilai: 100 },
  ];

  const router = useRouter();

  const { data, isFetching, isError, refetch } = useQuery({
    queryKey: ["Latihan-List",{filterSubmit}], // nama dari cache
    queryFn: () => latihanService.list(filterSubmit),
    select: (res) => res.data,
  });

  console.log("data isi apa", data);
  console.log('filter', filter );
    console.log('filter submit',filterSubmit)

  if (isFetching) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
        <p className="ml-3 text-blue-600 font-medium">Memuat data latihan...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col justify-center items-center h-[60vh] text-center">
        <p className="text-red-600 font-semibold mb-2">{isError}</p>
        <button
          onClick={() => refetch}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all"
        >
          Coba Lagi
        </button>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        📚 Daftar Latihan
      </h1>

      <Drawer title="Filter" isOpen={open} onClose={() => setOpen(false)}>
        <div>
          <Input
            name="title"
            value={filter.title}
            placeholder="title..."
            onChange={handleChangeFilter}
          />
          <Input
            name="name"
            value={filter.name}
            placeholder="Name..."
            onChange={handleChangeFilter}
          />
          <Input
            name="alamat"
            value={filter.alamat}
            placeholder="alamat..."
            onChange={handleChangeFilter}
          />
          <Input
            name="umur"
            value={filter.umur}
            placeholder="umur..."
            onChange={handleChangeFilter}
          />

          <Button onClick={handleSubmit} title="Submit" colorSchema="green" />
        </div>
      </Drawer>

      <div className="grid grid-cols-12 space-y-5">
        <div className="col-span-5">
          <Input placeholder="Cari latihan..." />
        </div>

        <div className="col-end-12 w-full] ">
          <Button
            onClick={() => setOpen(!open)}
            title="Filter"
            colorSchema="blue"
          />
        </div>
      </div>

      {data && data.length === 0 ? (
        <p className="text-gray-500 italic">Belum ada data latihan.</p>
      ) : (
        <table className="min-w-full border border-gray-200 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold">
                #
              </th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold">
                Nama
              </th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold">
                Alamat
              </th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold">
                Umur
              </th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold">
                Diupdate
              </th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold">
                Detail
              </th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item, i) => (
                <tr
                  key={item.id}
                  className={`${
                    i % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-blue-50 transition-colors`}
                >
                  <td className="px-4 py-2">{i + 1}</td>
                  <td className="px-4 py-2 font-medium text-gray-800">
                    {item.name}
                  </td>
                  <td className="px-4 py-2 text-gray-700">{item.alamat}</td>
                  <td className="px-4 py-2 text-gray-700">{item.umur}</td>
                  <td className="px-4 py-2 text-gray-500 text-sm">
                    {new Date(item.updated_at).toLocaleString("id-ID")}
                  </td>

                  <td>
                    <Button
                      colorSchema="blue"
                      title="detail"
                      onClick={() => {
                        router.push(`latihan/${item.id}/detail`);
                      }}
                    />
                  </td>
                </tr>
              ))}

            <td className="px-4 py-2 font-medium text-gray-800">
              {nilaiSiswa.map((item, ii) => (
                <p key={ii}>
                  pelajaran {item.nama} nilai : {item.nilai}
                </p>
              ))}
            </td>
          </tbody>
        </table>
      )}
    </div>
  );
}
