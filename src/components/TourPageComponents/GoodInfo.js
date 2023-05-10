import React from "react"

const GoodInfo = ({ goodInfo }) => {
  return (
    <div className="mt-5 basis-1/3">
      <h4 className="font-light text-2xl lg:text-3xl tracking-wider">
        Practical Information
      </h4>
      <ul className="ml-5 mt-2 space-y-1">
        {goodInfo.map((object, index) => (
          <li className="capitalize text-sm lg:text-lg list-disc" key={index}>
            {object}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GoodInfo
