import React from 'react'

const LocationSelect = ({actualLocations}) => {
  return (
    <div className="relative z-0 mb-6 w-full group">
        <label
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              htmlFor="tourSelect"
            >
              Choose your Location:
            </label>
          <select
            name="locationSelect"
            id="locationSelect"
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          >
            {actualLocations.map(location => {
              return (
                <option key={location.id} value={location.name}>
                  {location.name}
                </option>
              )
            })}
          </select>
        </div>
  )
}

export default LocationSelect