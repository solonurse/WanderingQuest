"use client";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import {ToastProviderProps } from "@/types/toast";

export default function ToastProvider({ children }: ToastProviderProps) {

  return (
    <>
      {children}
      <ToastContainer
        bodyClassName={() => "text-sm font-white font-med block p-3"}
        position="bottom-right"
        autoClose={2000}
        theme="colored"
      />
    </>
  );
};
