import React from "react"
import { Menu, Transition } from "@headlessui/react"
import { Link } from "gatsby"
import locations from "../../data/locations"

const TourMenu = () => {
  return (
    <>
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button className="navLinks" aria-label="menu">
              <span>Location</span>
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="white">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Menu.Button>

            <Transition
              show={open}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                static
                className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none cursor-default"
              >
                <>
                  <div className="py-1">
                    {locations.map(location => {
                      return (
                        <Menu.Item key={location.id}>
                          {({ active }) => (
                            <Link to={location.link} className="no-underline">
                              <button
                                className={`${
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700"
                                } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                              >
                                {location.name}
                              </button>
                            </Link>
                          )}
                        </Menu.Item>
                      )
                    })}
                  </div>
                </>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </>
  )
}

export default TourMenu
