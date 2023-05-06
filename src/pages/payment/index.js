import React, { useEffect, useState } from "react"
import Layout from "../../components/layout"

const index = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [location, setLocation] = useState('')
  const [excursion, setExcursion] = useState('')
  const [newDate, setNewDate] = useState('')
  const [guests, setGuests] = useState('')
  const [deposit, setDeposit] = useState('')
  const options = {year: 'numeric', month: 'long', day: 'numeric' };
  useEffect(() => {
    const searchParams = new URLSearchParams(document.location.search)
    setName(searchParams.get('name'))
    setEmail(searchParams.get("email"))
    setLocation(searchParams.get("location"))
    setExcursion(searchParams.get("excursion"))
    const date = searchParams.get("Date")
    setNewDate(new Date(date).toLocaleDateString("en-US", options))
    setGuests(searchParams.get("guests"))
    setDeposit(searchParams.get("deposit"))
  }, [])
  
 

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
