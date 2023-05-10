import React from "react"

const ExtraInfo = ({ extras }) => {
  const { duration, pickUp, minAge, pregnant } = extras
  return (
    <div className="mt-5 basis-1/3">
      <h4 className="font-light text-2xl lg:text-3xl tracking-wider">Good to Know</h4>
      <ul className="ml-5 mt-2 space-y-1">
        <li className="capitalize text-sm lg:text-lg list-disc">
          <span className="font-medium">Duration:</span> {duration}
        </li>
        <li className="capitalize text-sm lg:text-lg list-disc">
          <span className="font-medium">Hotel Pick-up:</span> {pickUp}
        </li>
        <li className="capitalize text-sm lg:text-lg list-disc">
          <span className="font-medium">Minimum Age:</span> {minAge}
        </li>
        <li className="capitalize text-sm lg:text-lg list-disc">
          <span className="font-medium">Pregnant Woman Allowed:</span>{" "}
          {pregnant}
        </li>
      </ul>
    </div>
  )
}

export default ExtraInfo
