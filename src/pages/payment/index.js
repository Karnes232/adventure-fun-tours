import React from "react"
import Layout from "../../components/layout"

const index = () => {
  const options = {year: 'numeric', month: 'long', day: 'numeric' };
  const searchParams = new URLSearchParams(document.location.search)
  const name = searchParams.get('name')
  const email = searchParams.get("email")
  const location = searchParams.get("location")
  const excursion = searchParams.get("excursion")
  const date = searchParams.get("Date")
  const newDate = new Date(date).toLocaleDateString("en-US", options)
  const guests = searchParams.get("guests")
  const deposit = searchParams.get("deposit")

  return (
    <Layout>
    <main className="mt-28 md:mt-32 xl:mt-40 flex flex-col justify-center items-center">
    <div>
      <div>Name: {name}</div>
      <div>Email: {email}</div>
      <div>Location: {location}</div>
      <div>Excursion: {excursion}</div>
      <div>Date: {newDate}</div>
      <div>Amount of Guests: {guests}</div>
      <div>Deposit Amount: ${deposit}</div>
      </div>
      </main>
    </Layout>
  )
}

export default index
