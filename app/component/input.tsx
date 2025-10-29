import clsx from "clsx";
import React from "react";

interface InputProps {
  messageError?: string;
  isError?: boolean;
  disabled?: boolean;
}

export default function Input({
  messageError,
  isError,
  disabled,
  ...props
}: InputProps & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <>
      <input
        disabled={disabled}
        {...props}
        className={clsx(
          "rounded-lg p-2 w-full",
          {
            "border-red-400 border-2": isError,
            "border-gray-300 border-2": !isError && !disabled,
            "border-gray-200  border-2 bg-gray-100": disabled,
          }
        )}
      />
          {/* {IsError? <span className="text-red-400 italic" >Wajib Di isi</span> : <></>} */}
      {isError && (
        <span className="text-red-400 italic">
          {messageError || "Wajib diisi"}
        </span>
      )}
    </>
  );
}
