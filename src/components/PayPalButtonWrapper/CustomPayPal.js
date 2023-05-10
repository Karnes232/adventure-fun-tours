import React from "react"
import { PayPalScriptProvider } from "@paypal/react-paypal-js"
import PayPalButtonWrapper from "../PayPalButtonWrapper/PayPalButtonWrapper"

const liveId =
  "AbUo_XM21MJPbYtGorBEsVKSQXeD6o08uCphb06NVKCmwly9IT4NC5Qo3NjSyMdwCGDVZov1Yeys8x-J"
const sandBox =
  "AWKpOxlq063t4e3-YvGIHBWohFbzZ_o0Y1M2juHc6EaAr5iK_UfOAEKb_YxhdpRvC5uu_Sj444MyUzmZ"

const CustomPayPal = ({ price, balance, excursion }) => {
  const currency = "USD"
  return (
    <div className="flex justify-center md:w-80 xl:w-96">
      <PayPalScriptProvider
        options={{
          "client-id": sandBox,
          components: "buttons",
          currency: "USD",
        }}
      >
        <PayPalButtonWrapper
          currency={currency}
          showSpinner={false}
          amount={price}
          balance={balance}
          excursion={excursion}
        />
      </PayPalScriptProvider>
    </div>
  )
}

export default CustomPayPal
