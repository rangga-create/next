"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface dataSiswa {
  params: Promise<{ id: string }>;
}

const users = [
  { id: "1", name: "Rangga", role: "Admin" },
  { id: "2", name: "Affan", role: "Siswa" },
  { id: "3", name: "Ihsan", role: "Guru" },
];

export default function UserDetailPage({ params }: dataSiswa) {
  const router = useRouter();

  const Params = React.use(params);
  const user = users.find((u) => u.id === Params.id);

  if (!user) {
    return <div className="p-10 text-red-600">User tidak ditemukan</div>;
  }

  return (
    <div className="max-w mx-auto mt-16 p-8 bg-white rounded-lg shadow-md border border-gray-200">
      <button
        onClick={() => router.back()}
        className="mb-6 inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-700 font-semibold transition hover:underline decoration-blue-500"
      >
        &#8592; Kembali
      </button>

      <h1 className="text-3xl font-extrabold mb-6 text-gray-900">Detail User</h1>

      <div className="space-y-4 text-gray-700">
        <div>
          <p className="text-sm font-semibold text-black uppercase">ID</p>
          <p className="text-lg text-gray-500">{user.id}</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-black uppercase">Nama</p>
          <p className="text-lg text-gray-500">{user.name}</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-black uppercase">Email</p>
          <p className="text-lg text-gray-500">{user.name}@gmail.com</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-black uppercase">Role</p>
          <p className="text-lg text-gray-500 capitalize">{user.role}</p>
        </div>
      </div>
    </div>
  );
}
