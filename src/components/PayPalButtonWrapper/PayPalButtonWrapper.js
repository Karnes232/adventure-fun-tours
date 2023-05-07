import React, { useEffect } from "react"
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js"

const PayPalButtonWrapper = ({
  currency,
  showSpinner,
  amount,
  balance,
  excursion,
}) => {
  const style = { layout: "vertical", shape: "pill" }
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer()

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    })
  }, [currency, showSpinner])

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
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
            const firstName = details.payer.name.given_name
            const lastName = details.payer.name.surname
            const deposit = details.purchase_units[0].amount.value
            window.location.href = `http://localhost:8000/thankyou/?firstname=${firstName}&lastname=${lastName}&deposit=${deposit}&balance=${balance}&excursion=${excursion}`
          })
        }}
      />
    </>
  )
}

export default PayPalButtonWrapper
