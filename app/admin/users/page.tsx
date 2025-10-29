"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const users = [
  { id: "1", name: "Rangga", role: "Admin" },
  { id: "2", name: "Affam", role: "Siswa" },
  { id: "3", name: "Ihsan", role: "Guru" },
];

export default function User() {
  const path = usePathname(); 

  return (
    <>
      <h1 className="mt-10 text-2xl font-semibold">Daftar User</h1>

      <div className="mt-6 grid grid-cols-3 gap-4 font-bold text-gray-600 border-b pb-2">
        <div>Nama</div>
        <div>Role</div>
        <div>Aksi</div>
      </div>

      {users.map((user) => (
        <div
          key={user.id}
          className="grid grid-cols-3 gap-4 py-4 border-b items-center text-gray-800"
        >
          <div>{user.name}</div>
          <div>{user.role}</div>
          <div>
            <Link
              href={`${path}/${user.id}`}
              className="text-blue-600  px-3 py-1 rounded transition-colors  hover:underline decoration-blue-500"
            >
              Lihat Detail
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
