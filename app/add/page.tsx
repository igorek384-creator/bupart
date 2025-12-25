"use client"

import { addListing } from "@/lib/listings"
import { useState } from "react"

export default function Add() {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")

  return (
    <form
      onSubmit={async e => {
        e.preventDefault()
        await addListing({
          title,
          price: Number(price),
          category: "engine",
          city: "Москва",
        })
        alert("Опубликовано")
      }}
    >
      <input placeholder="Название" onChange={e => setTitle(e.target.value)} />
      <input placeholder="Цена" onChange={e => setPrice(e.target.value)} />
      <button>Опубликовать</button>
    </form>
  )
}