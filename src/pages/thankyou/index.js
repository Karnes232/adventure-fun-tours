import React, { useEffect, useState } from "react"
import Layout from "../../components/layout"
import { IoIosCheckmarkCircleOutline } from "react-icons/io"
const Index = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [excursion, setExcursion] = useState("")
  const [deposit, setDeposit] = useState("")
  const [balance, setBalance] = useState("")
  useEffect(() => {
    const searchParams = new URLSearchParams(document.location.search)
    setFirstName(searchParams.get("firstname"))
    setLastName(searchParams.get("lastname"))
    setExcursion(searchParams.get("excursion"))
    setDeposit(searchParams.get("deposit"))
    setBalance(searchParams.get("balance"))
  }, [])
  const totalPrice = parseFloat(balance) + parseFloat(deposit)
  return (
    <Layout>
      <main className="mt-28 md:mt-32 xl:mt-40 bg-gray-100">
        <div className="flex flex-col items-center max-w-xs xl:max-w-sm mx-auto">
          <div className="absolute top-0 w-full">
            <div className="min-h-[calc(100vh-16rem)] md:min-h-[calc(100vh-11rem)] min-w-full bg-center bg-no-repeat bg-cover paymentImage">
              <div className="hero-text flex flex-col justify-center items-center text-primary-color w-11/12 md:w-9/12 lg:w-6/12 xl:w-4/12">
                <div>
                  <IoIosCheckmarkCircleOutline className="text-green-400 text-3xl xl:text-5xl mt-6 xl:mt-10" />
                </div>
                <div className="text-2xl xl:text-4xl font-serif text-center mt-6">
                  Thank you, {firstName} {lastName} for your deposit!
                </div>

                <div className="w-full mt-2 xl:mt-6 p-2 xl:p-4 bg-white border border-gray-200 rounded-lg shadow flex justify-between">
                  <p className="font-normal xl:text-lg text-gray-500">
                    {excursion}
                  </p>
                  <p className="font-normal xl:text-lg text-gray-500">
                    ${totalPrice.toFixed(2)}
                  </p>
                </div>
                <div className="w-full mt-2 p-2 flex justify-end">
                  <p className="mr-8 font-normal">Deposit:</p>
                  <p className="font-normal">${deposit}</p>
                </div>
                <div className="w-full p-2 flex justify-end">
                  <p className="mr-8 font-normal">Remaining Balance:</p>
                  <p className="font-normal">
                    ${parseFloat(balance).toFixed(2)}
                  </p>
                </div>

                <div className="text-center text-sm xl:text-base mt-2 xl:mt-6">
                  Please feel free to{" "}
                  <a
                    href="mailto:adventurefuntours.dr@gmail.com"
                    aria-label="Gmail"
                    rel="noreferrer"
                    className="underline"
                  >
                    contact us
                  </a>{" "}
                  with any questions or concerns.
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Index
