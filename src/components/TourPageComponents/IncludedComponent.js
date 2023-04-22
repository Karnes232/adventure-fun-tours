import React from "react"

const IncludedComponent = ({ included }) => {
  return (
    <div className="">
      <h4 className="font-light text-2xl tracking-wider">
        Included On Your Tour
      </h4>
      <ul className="ml-5 mt-2 space-y-1">
        {included.map((object, index) => (
          <li className="capitalize text-sm list-disc" key={index}>
            {object}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default IncludedComponent
