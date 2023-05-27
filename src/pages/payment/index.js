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
  const totalPrice = parseFloat(balance) + parseFloat(deposit)
  return (
    <Layout>
      <main className="mt-28 md:mt-32 xl:mt-40">
        <div className="min-h-[calc(100vh-7rem)] md:min-h-[calc(100vh-8rem)] xl:min-h-[calc(100vh-10rem)]">
          <div className="absolute top-0 w-full h-[100vh]">
            <div className="min-h-screen min-w-full bg-center bg-no-repeat bg-cover paymentImage">
              <div className="hero-text flex flex-col justify-center items-center text-primary-color w-11/12 md:w-9/12 lg:w-6/12 xl:w-4/12  md:text-lg">
                {name && (
                  <p className="text-2xl md:text-4xl font-serif mb-2">{name}</p>
                )}
                <div className="w-full mt-2 xl:mt-6 xl:mb-3 p-2 xl:p-4 bg-white border border-gray-200 rounded-lg shadow flex justify-between">
                  <p className="font-normal text-gray-500">{excursion}</p>
                  <p className="font-normal text-gray-500">
                    ${totalPrice.toFixed(2)}
                  </p>
                </div>
                <div className="w-full p-1 flex justify-end">
                  <p className="mr-8 font-normal">Location:</p>
                  <p className="font-normal w-28 text-right">{location}</p>
                </div>
                <div className="w-full p-1 flex justify-end">
                  <p className="mr-8 font-normal">Date:</p>
                  <p className="font-normal w-28 text-right">{newDate}</p>
                </div>
                <div className="w-full p-1 flex justify-end">
                  <p className="mr-8 font-normal">Guests:</p>
                  <p className="font-normal w-28 text-right">{guests}</p>
                </div>
                <div className="w-full p-1 flex justify-end">
                  <p className="mr-8 font-normal">Deposit:</p>
                  <p className="font-normal w-28 text-right">
                    ${parseFloat(deposit).toFixed(2)}
                  </p>
                </div>
                <div className="w-full mb-2 xl:mb-5 p-1 flex justify-end">
                  <p className="mr-8 font-normal">Remaining Balance:</p>
                  <p className="font-normal w-28 text-right">
                    ${parseFloat(balance).toFixed(2)}
                  </p>
                </div>
                <CustomPayPal
                  price={deposit}
                  balance={balance}
                  excursion={excursion}
                  date={newDate}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <div className="pb-[86vh] md:pb-[89vh] lg:pb-[83vh]"></div> */}
    </Layout>
  )
}

export default Index
