import React from "react"

const AvailableComponent = ({ available }) => {
  return (
    <div className="max-w-6xl xl:mx-auto">
      <div className="flex items-center">
        <h4 className="font-light text-2xl md:text-3xl tracking-wider">Available:</h4>
        <p className="inline-block pl-3 md:pl-6 text-sm md:text-xl space-x-2 md:space-x-4">
          {available.map((day, index) => (
            <span key={index}>{day}</span>
          ))}
        </p>
      </div>
    </div>
  )
}

export default AvailableComponent
