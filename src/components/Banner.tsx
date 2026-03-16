"use client"

import { useState } from "react"

export default function Banner(){

  const covers = [
    "/img/cover.jpg",
    "/img/cover2.jpg",
    "/img/cover3.jpg",
    "/img/cover4.jpg"
  ]

  const [index,setIndex] = useState(0)

  function handleClick(){
    setIndex((index+1)%4)
  }

  return(
    <div>

      <img
        src={covers[index]}
        alt="banner"
        onClick={handleClick}
      />

      <h1>Venue Explorer</h1>

    </div>
  )
}