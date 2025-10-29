"use client";

import { useState } from "react";
import Label from "../component/Label";
import Input from "../component/input";
import RadioButton from "../component/radio"; // Pastikan ini adalah komponen yang benar

interface Profile {
  name: string;
  email: string;
  password: string;
  umur: number | null;
  isLulus: boolean;
}

export default function StateObject() {
  const [profil, setProfil] = useState<Profile>({
    name: "Rangga Saputra",
    email: "angga@gmail.com",
    password: "ROOT123",
    umur: 20,
    isLulus: true,
  });

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Profil Pengguna</h1>

      <Card label="Nama" value={profil.name} />
      <Card label="Email" value={profil.email} />
      <Card label="Password" value={profil.password} />
      <Card label="Umur" value={profil.umur ?? "Belum diisi"} />
      <Card label="Lulus" value={profil.isLulus ? "Lulus" : "Tidak Lulus"} />

      <div className="mt-6 space-y-4">
        {/* Input Nama */}
        <Label htmlFor="nama" title="Edit Nama" />
        <Input
          id="nama"
          type="text"
          value={profil.name}
          onChange={(e) =>
            setProfil((prev) => ({
              ...prev,
              name: e.target.value,
            }))
          }
          isError={profil.name.length === 0}
          messageError="Nama tidak boleh kosong"
        />

        {/* Input Email */}
        <Label htmlFor="email" title="Edit Email" />
        <Input
          id="email"
          type="text"
          value={profil.email}
          onChange={(e) =>
            setProfil((prev) => ({
              ...prev,
              email: e.target.value,
            }))
          }
          isError={profil.email.length === 0}
          messageError="Email tidak boleh kosong"
        />

        {/* Radio Button: isLulus */}
        <Label htmlFor="isLulus" color="green" title="Status Kelulusan" />
        <div className="flex gap-4 items-center">
          <RadioButton
            id="lulus"
            value="true"
            title="Lulus"
            checked={profil.isLulus === true}
            onChange={() =>
              setProfil((prev) => ({
                ...prev,
                isLulus: true,
              }))
            }
          />
          <RadioButton
            id="tidak-lulus"
            value="false"
            title="Tidak Lulus"
            checked={profil.isLulus === false}
            onChange={() =>
              setProfil((prev) => ({
                ...prev,
                isLulus: false,
              }))
            }
          />
        </div>
      </div>
    </>
  );
}

function Card({
  label,
  value,
}: {
  label: string;
  value: string | number | boolean | null;
}) {
  return (
    <div className="grid grid-cols-2 gap-5 mb-2">
      <h2 className="text-2xl text-green-500 font-bold">{label}</h2>
      <h2 className="text-green-600 font-semibold">: {String(value)}</h2>
    </div>
  );
}
