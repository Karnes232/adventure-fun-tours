import React from "react"
import Header from "../components/HeaderComponents/Header"
import Footer from "./FooterComponent/Footer"
import Helment from "react-helmet"

const FloatingButton = React.lazy(() =>
  import("./FloatingButtonComponent/FloatingButton")
)

export default function Layout({ children }) {
  const isSSR = typeof window === "undefined"
  return (
    <div className="min-h-screen flex flex-col justify-between overflow-x-hidden">
      <Helment>
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </Helment>
      <Header />
      {children}
      {/* {!isSSR && (
        <React.Suspense fallback={<div />}>
          <FloatingButton />
        </React.Suspense>
      )} */}
      <Footer />
    </div>
  )
}
