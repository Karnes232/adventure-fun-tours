import React, { useEffect, useState } from "react"
import locations from '../../data/locations'
import puntacanaTours from "../../data/tours/puntacanaTours"
import sosuaTours from '../../data/tours/sosuaTours'
import DatePickerComponent from "./DatePickerComponent"
import LocationSelect from "./LocationSelect"
import InfoInputs from "./InfoInputs"
import TourSelect from "./TourSelect"

const ContactForm = () => {
  const actualLocations = locations.slice(0, -1)
  const [location, setLocation] = useState('')
  const [tours, setTours] = useState(puntacanaTours)
  useEffect(() => {
    if (location === 'Punta Cana') {
      setTours(puntacanaTours)
    } else if (location === 'Sosua') {
      setTours(sosuaTours)
    }
  }, [location])
  
  return (
    <>
      <form
        name="contact"
        method="POST"
        action="/thankyou"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        id="contact"
        className="w-64 md:w-full max-w-md flex flex-col justify-center items-center mx-auto my-5"
      >
        <input type="hidden" name="form-name" value="contact" />
        <>
          <InfoInputs />
        </>
        <>
          <LocationSelect actualLocations={actualLocations} setLocation={setLocation}/>
        </>
        <>
          <TourSelect tours={tours} />
        </>
        <div className="relative z-10 mb-6 w-full group">
          <DatePickerComponent />
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-500"
          >
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Leave a comment..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </>
  )
}

export default ContactForm
