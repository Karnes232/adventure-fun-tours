import React from 'react'

const AvailableComponent = ({available}) => {
    console.log(available)
  return (
    <div className='max-w-6xl mx-5 xl:mx-auto'>
    <div><span className='font-medium text-lg md:text-xl'>Available:</span>
    <p className='inline-block pl-3 md:pl-6 text-sm md:text-xl space-x-2'>
        {available.map((day, index) => (
            <span key={index}>{day}</span>
        ))}
    </p></div>
    </div>
  )
}

export default AvailableComponent