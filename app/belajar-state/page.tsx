"use client";

import { useContext, useState } from "react";
import Button from "../component/Button";

import clsx from "clsx";
import { AppContext } from "../component/Context";
import Input from "../component/input";

export default function BelajarState() {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>("");
  const [isOn, setIsOn] = useState<boolean>(false);

  const appContext = useContext(AppContext);
  const { toggleTheme, theme } = appContext;

  return (
    <>
      <h1>Siap Belajar State</h1>

    
      {theme === "dark" ? "Ini malam" : "Ini siang"}

    
      <Button
        onClick={() => {
          toggleTheme();
        }}
        title="Berubah Gelap"
        colorSchema="green"
      />

   
      <div
        className={clsx(
          "border mt-5 border-red-500 rounded-full flex justify-center items-center h-10 w-10",
          {
            "bg-red-500": isOn === true,
            "bg-black": isOn === false,
          }
        )}
      ></div>

      <div className="border border-red-500 rounded-full flex justify-center items-center mt-6 mb-6">
        Ini count: {count}
      </div>

      <div className="border mb-6 h-36 border-red-500 rounded-full flex justify-center items-center">
        Ini input text yang telah di update: {text}
      </div>

   
      <Input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          setCount(count + 1);
        }}
      />

      <div className="flex-col items-center justify-center flex gap-8 mt-4">
        <Button
          onClick={() => {
            setIsOn(!isOn);
          }}
          title="Mati/Nyala"
          colorSchema="red"
          variant="solid"
          width="md"
        />

        <Button
          onClick={() => {
            setCount(count + 1);
            setIsOn(true);
          }}
          title="Tambah"
          colorSchema="green"
          variant="outline"
          width="md"
        />

        <Button
          onClick={() => {
            setCount(count - 1);
            setIsOn(false);
          }}
          title="Kurang"
          colorSchema="green"
          variant="outline"
          width="md"
        />
      </div>
    </>
  );
}
