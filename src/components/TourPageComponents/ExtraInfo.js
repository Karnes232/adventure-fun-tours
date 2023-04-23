import React from 'react'

const ExtraInfo = ({extras}) => {
    console.log(extras)
  return (
    <div className="mt-5">
        <h4 className="font-light text-2xl tracking-wider">
      Good to Know
      </h4>
      <ul className="ml-5 mt-2 space-y-1">
      <li className="capitalize text-sm list-disc"><span className='font-medium'>Duration:</span> {extras.extras.duration}</li>
      <li className="capitalize text-sm list-disc"><span className='font-medium'>Hotel Pick-up:</span> {extras.extras.pickUp}</li>
      <li className="capitalize text-sm list-disc"><span className='font-medium'>Minimum Age:</span> {extras.extras.minAge}</li>
      <li className="capitalize text-sm list-disc"><span className='font-medium'>Pregnant Woman Allowed:</span> {extras.extras.pregnant}</li>
      </ul>
    </div>
  )
}

export default ExtraInfo