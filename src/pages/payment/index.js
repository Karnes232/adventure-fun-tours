import React, { useEffect, useState } from "react"
import Layout from "../../components/layout"
import CustomPayPal from "../../components/PayPalButtonWrapper/CustomPayPal"

const Index = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [location, setLocation] = useState("")
  const [excursion, setExcursion] = useState("")
  const [newDate, setNewDate] = useState("")
  const [guests, setGuests] = useState("")
  const [deposit, setDeposit] = useState("")
  const [balance, setBalance] = useState("")

  useEffect(() => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    const searchParams = new URLSearchParams(document.location.search)
    setName(searchParams.get("name"))
    setEmail(searchParams.get("email"))
    setLocation(searchParams.get("location"))
    setExcursion(searchParams.get("excursion"))
    const date = searchParams.get("Date")
    setNewDate(new Date(date).toLocaleDateString("en-US", options))
    setGuests(searchParams.get("guests"))
    setDeposit(searchParams.get("deposit"))
    setBalance(searchParams.get("balance"))
  }, [])

  return (
    <Layout>
      <main className="mt-28 md:mt-32 xl:mt-40">
        <div>
          <div className="absolute top-0 w-full h-[100vh]">
            <div className="min-h-screen min-w-full bg-center bg-no-repeat bg-cover paymentImage">
              <div className="hero-text flex flex-col justify-center items-center text-primary-color w-11/12 md:w-9/12 lg:w-6/12 xl:w-4/12">
                {name && <p className="text-2xl font-serif mb-2">{name}</p>}
                {email && <p className="text-2xl font-serif mb-2">{email}</p>}
                {location && (
                  <p className="text-2xl font-serif mb-2">{location}</p>
                )}
                {excursion && (
                  <p className="text-2xl font-serif mb-2">{excursion}</p>
                )}
                {newDate && (
                  <p className="text-2xl font-serif mb-2">{newDate}</p>
                )}
                {guests && (
                  <p className="text-2xl font-serif mb-2">Guests: {guests}</p>
                )}
                {deposit && (
                  <p className="text-2xl font-serif mb-2">
                    Deposit: ${deposit}
                  </p>
                )}
                {balance && (
                  <p className="text-2xl font-serif mb-8">
                    Balance: ${balance}
                  </p>
                )}
                <CustomPayPal price={deposit} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="pb-[86vh]"></div>
    </Layout>
  )
}

export default Index
