"use client";

import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FilterProduk, Produk } from "./interface";
import { produkService } from "./service";

import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Drawer from "../component/Drawer";
import Input from "../component/input";
import Button from "../component/Button";

export default function LatihanPage() {
  const [open, setOpen] = useState<boolean>(false);
  const [filter, setFilter] = useState<FilterProduk>({
   Keyword: "",
    nama: "",
    harga: "",
    dekskripsi: "",
    page:1,
    limit:5
  });

  const [filterSubmit, setFilterSubmit] = useState<FilterProduk>(filter);

  const handleChangeFilter = (e: any) => {
    setFilter((i) => {
      return {
        ...i,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = () => {
    setFilterSubmit(filter);
    setOpen(false);
  };

const handlePageChange = (newPage: number) => {
    if (newPage < 1) return;
    setFilter((prev) => ({ ...prev, page: newPage }));
    setFilterSubmit((prev) => ({ ...prev, page: newPage }));
  };

useEffect(() => {
  const timer = setTimeout(() => {
    setFilterSubmit((prev) => ({
      ...prev,
      Keyword: filter.Keyword, // ambil Keyword dari input
      page: 1, // reset halaman ke 1 kalau Keyword berubah
    }));
  }, 500); // jeda 500ms

  return () => clearTimeout(timer);
}, [filter.Keyword]);


  const handleLimitChange = (limit: number) => {
    setFilter((prev) => ({ ...prev, limit: limit, page: 1 }));
    setFilterSubmit((prev) => ({ ...prev, limit: limit, page: 1 }));
  }; 
  const nilaiSiswa = [
    { nama: "Matematika", nilai: 85 },
    { nama: "B.inggris", nilai: 100 },
  ];

  const router = useRouter();

  const { data, isFetching, isError, refetch } = useQuery({
    queryKey: ["Produk-List",filterSubmit], // nama dari cache
    queryFn: () => produkService.list(filterSubmit),
    select: (res) => res,
  });

  console.log("data isi apa", data);
  console.log("handle page", handlePageChange )

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
        <div className="space-y-5">
          <Input
            name="nama"
            value={filter.nama}
            placeholder="Nama..."
            onChange={handleChangeFilter}
          />
          <Input
            name="harga"
            value={filter.harga}
            placeholder="harga..."
            onChange={handleChangeFilter}
          />
          <Input
            name="dekskripsi"
            value={filter.dekskripsi}
            placeholder="deskripsi..."
            onChange={handleChangeFilter}
          />
          <Button onClick={handleSubmit} title="Submit" colorSchema="green" />
        </div>
      </Drawer>

      <div className="grid grid-cols-12 space-y-5">
        <div className="col-span-5">
          <Input
      name="keyword"
      value={filter.Keyword}
      placeholder="Cari latihan..."
      onChange={(e) =>
        setFilter((prev) => ({
          ...prev,
          Keyword: e.target.value,
        }))
      }
    />
        </div>

        <div className="col-end-12 w-full] ">
          <Button
            onClick={() => setOpen(!open)}
            title="Filter"
            colorSchema="blue"
          />
        </div>
      </div>

 {data?.data.length === 0 ? (
  <p className="text-gray-500 italic">Belum ada data produk.</p>
) : (
  <table className="min-w-full border border-gray-200 shadow-md rounded-lg overflow-hidden">
    <thead className="bg-gray-100">
      <tr>
        <th className="px-4 py-2 text-left text-gray-700 font-semibold">#</th>
        <th className="px-4 py-2 text-left text-gray-700 font-semibold">Nama</th>
        <th className="px-4 py-2 text-left text-gray-700 font-semibold">harga</th>
        <th className="px-4 py-2 text-left text-gray-700 font-semibold">deskripsi</th>
      </tr>
    </thead>
    <tbody>
      {data?.data.map((item, i) => (
        <tr
          key={item.id}
          className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50 transition-colors`}
        >
          <td className="px-4 py-2">{i + 1}</td>
          <td className="px-4 py-2 font-medium text-gray-800">{item.nama}</td>
          <td className="px-4 py-2 text-gray-700">{item.harga}</td>
          <td className="px-4 py-2 text-gray-700">{item.deskripsi}</td>
          <td className="px-4 py-2 text-gray-500 text-sm">
            {item.updated_at ? new Date(item.updated_at).toLocaleString("id-ID") : "-"}
          </td>
          <td>
            <Button
              colorSchema="blue"
              title="detail"
              onClick={() => router.push(`produk/${item.id}/detail`)}
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

      <div className="flex justify-center items-center mt-6 space-x-5">
  <select
    className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
    onChange={(e) => {
      handleLimitChange(Number(e.target.value));
    }}
  >
    <option value={5}>5</option>
    <option value={10}>10</option>
    <option value={25}>25</option>
    <option value={50}>50</option>
    <option value={100}>100</option>
  </select>
 
  <div className="flex items-center">
    <button
      className="border rounded-full h-8 w-8 bg-blue-400 text-white hover:bg-blue-500 disabled:opacity-50"
      onClick={() => handlePageChange(filterSubmit.page - 1)}
      disabled={filterSubmit.page === 1}
    >
      ←
    </button>
 
    <p className="text-gray-600 whitespace-nowrap border p-2 rounded-lg mx-5">
      Halaman {filterSubmit.page} dari {data?.meta.lastPage || 1}
    </p>
 
    <button
      className="border rounded-full h-8 w-8 bg-blue-400 text-white hover:bg-blue-500 disabled:opacity-50"
      onClick={() => handlePageChange(filterSubmit.page + 1)}
      disabled={filterSubmit.page === data?.meta.lastPage}
    >
      →
    </button>
  </div>
</div>
    </div>


  );
}
