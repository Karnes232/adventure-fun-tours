import React from 'react'
import Layout from '../../components/layout'

const message = () => {
  return (
    <Layout>
      <main className="bg-center bg-no-repeat bg-cover paymentImage">
        <div className="flex flex-col items-center max-w-xs xl:max-w-sm mx-auto">
            <div className="min-h-[calc(100vh-16rem)] md:min-h-[calc(100vh-11rem)] min-w-full">
              <div className="min-h-[calc(100vh-16rem)] flex flex-col justify-center items-center text-secondary-color ">
                <div className="text-2xl xl:text-4xl font-serif text-center mt-6">
                  Thank you for your message, our team will reach out to you shortly!
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
      </main>
    </Layout>
  )
}

export default message