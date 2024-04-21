"use client";

import '../user';
import { useEffect, useState } from "react"

export default function mypage() {
  const [state, setstate] = useState('');
  useEffect(() => {
    setstate('client loaded');
  }, [])

  return (
    <>
      <div>{state}</div>
    </>
  )
}