import React from "react"
import InfoInputs from "../../components/PaymentComponents/InfoInputs"
import Layout from "../../components/layout"
import DatePickerComponent from "../../components/ContactForm/DatePickerComponent"
import AmountInputs from '../../components/PaymentComponents/AmountInputs'

const Create = () => {
 
  return (
    <Layout>
      <main className="mt-28 md:mt-32 xl:mt-40">
        <form
          name="payment"
          method="GET"
          action="/payment/"
          id="payment"
          className="w-64 md:w-full max-w-md flex flex-col justify-center items-center mx-auto my-5"
       
        >
          <>
            <InfoInputs />
          </>
          <>
            <DatePickerComponent/>
          </>
          <>
            <AmountInputs />
          </>
          <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
        </form>
      </main>
    </Layout>
  )
}

export default Create
