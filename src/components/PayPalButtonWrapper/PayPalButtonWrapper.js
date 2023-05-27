import React, { useEffect, useState } from "react"
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js"
import axios from "axios"
const PayPalButtonWrapper = ({
  currency,
  showSpinner,
  amount,
  balance,
  excursion,
  date,
}) => {
  const style = { layout: "vertical", shape: "pill" }
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer()
  const [host, setHost] = useState("")
  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    })
    setHost(window.location.origin)
  }, [currency, showSpinner])

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        className="w-full"
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
              application_context: {
                shipping_preference: "NO_SHIPPING",
              },
            })
            .then(orderId => {
              return orderId
            })
        }}
        onApprove={function (data, actions) {
          return actions.order.capture().then(function (details) {
            const email = details.payer.email_address
            const firstName = details.payer.name.given_name
            const lastName = details.payer.name.surname
            const deposit = details.purchase_units[0].amount.value
            axios.post("/api/email", {
              clientName: `${firstName} ${lastName}`,
              deposit: deposit,
              totalCost: parseFloat(deposit) + parseFloat(balance),
              date: date,
              excursion: excursion,
              email: email,
            })
            window.location.href = `${host}/thankyou/?firstname=${firstName}&lastname=${lastName}&deposit=${deposit}&balance=${balance}&excursion=${excursion}`
          })
        }}
      />
    </>
  )
}

export default PayPalButtonWrapper
