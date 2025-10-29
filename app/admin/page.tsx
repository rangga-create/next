"use client";

import { useContext, useEffect } from "react";
import { AppContext } from "../component/Context";
import { useRouter } from "next/navigation";
import Button from "../component/Button";

export default function AdminPage() {
  const { IsAuth, LogOut } = useContext(AppContext);
  const router = useRouter();

  useEffect(() => {
    if (IsAuth===false) {
      router.push("/dasboard");
    }
  }, [IsAuth, router]);
const { user } = useContext(AppContext);

  return (
    <main className="flex flex-col items-start justify-center  gap-4 p-6">
      <h1 className="text-4xl font-bold">Selamat datang,{user?.nama}!!</h1>
      <h3 className="text-lg">Halaman Admin</h3>

      <Button
        title="Logout"
        colorSchema="blue"
        variant="outline"
        onClick={() => {
          LogOut();
          router.push("/dasboard");
        }}
      />
    </main>
  );
}
