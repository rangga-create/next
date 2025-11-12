"use client";
 
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Swal from "sweetalert2";
import Button from "@/app/component/Button";// pastikan path sesuai
import { Latihan } from "../../interface";
import { latihanService } from "../../service";
import { useQuery } from "@tanstack/react-query";

export default function LatihanDetailPage() {
  const { id } = useParams(); // menangkap parameter id dari URL
  const router = useRouter();


 

 const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["latihan-detail", id],
    queryFn: () => latihanService.detail(Number(id)),
    enabled: !! id, // hanya fetch kalau id ada
  });


 
    
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
        <p className="ml-3 text-blue-600 font-medium">
          Memuat data detail latihan...
        </p>
      </div>
    );
  }
  if (isError || !data) {
    return (
      <div className="flex flex-col justify-center items-center h-[60vh] text-center">
        <p className="text-red-600 font-semibold mb-2">
          {isError ?? "Data tidak ditemukan 😢"}
        </p>
        <Button
          title="Kembali"
          colorSchema="blue"
          onClick={() => router.push("/latihan")}
        />
      </div>
    );
  }
 
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        📋 Detail Latihan
      </h1>
 
      <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
        
      {/* data disini */}
      {data?.data && (
        <>
        <p className="text-gray-700">Name : {data.data.name}</p>
        <p className="text-gray-700">Alamat : {data.data.alamat}</p>
        <p className="text-gray-700">Umur : {data.data.umur}</p>
        <p className="text-gray-700">Title : {data.data.title}</p>
        </>
      )}
         
      </div>
 
      <div className="mt-6">
        <Button
          title="Kembali ke Daftar"
          colorSchema="blue"
          onClick={() => router.push("/latihan")}
        />
      </div>
    </div>
  );
}