import React from "react"

const index = () => {
  const searchParams = new URLSearchParams(document.location.search)
  const excursion = searchParams.get("excursion")
  const deposit = searchParams.get("deposit")
  const location = searchParams.get("location")
  const guests = searchParams.get("guests")
  return (
    <>
      <div>{location}</div>
      <div>{excursion}</div>
      <div>{deposit}</div>
      <div>{guests}</div>
    </>
  )
}

export default index
