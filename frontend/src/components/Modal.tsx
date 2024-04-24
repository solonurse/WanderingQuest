"use client";

import { useState } from 'react';
import { type ReactNode } from "react";

const Modal = ({ children, buttonLabel } : { children: ReactNode, buttonLabel: string } ) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button onClick={toggleModal}>
        {buttonLabel}
      </button>
      {isOpen && (
        <div className='fixed left-0 top-0 z-10 flex h-full w-full items-center justify-center overflow-auto bg-gray-900 bg-opacity-50'>
          <div className='relative z-10 inline-block rounded-lg bg-white p-10 shadow-xl top-5 animate-slide-in-fwd-center'>
            <button onClick={toggleModal} className='absolute end-10 top-0 text-black text-2xl bg-gray-100 border-solid border-2 border-indigo-600 my-1 px-2'>x</button>
            {children}
          </div>
          <div onClick={toggleModal} className='fixed left-0 top-0 flex h-full w-full  items-center justify-center overflow-auto bg-gray-900 bg-opacity-50'></div>
        </div>
      )}
    </>
  )
}

export default Modal;