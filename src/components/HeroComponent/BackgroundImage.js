import React from "react"

const BackgroundImage = ({ page }) => {
  return (
    <>
      <div className="w-full h-[25vh] lg:h-[50vh]">
        <div className={`bgImage midImage ${page}`}>
          {/* <div className="hero-text text-gray-200 w-11/12">
          <h1 className='text-4xl font-bold mb-6'>Explore the Dominican Republic</h1>
          <p className='text-lg font-light'>Find awesome water sports, buggies, horseback riding, and more!</p>
        </div> */}
        </div>
      </div>
  
    </>
  )
}

export default BackgroundImage
