import React from "react"

import { Menu, Transition } from "@headlessui/react"
import { Bars3Icon } from "@heroicons/react/24/outline"
import { Link } from "gatsby"
import { links } from "../../data/links"
const HamburgerMenu = () => {
  const borderColor = "text-gray-800"
  return (
    <div className="cursor-pointer">
      <Menu>
        {({ open }) => (
          <>
            <span className="rounded-md shadow-sm">
              <Menu.Button
                className="inline-flex justify-center w-10 px-4 py-2 font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-transparent border border-[#F58634] rounded-md hover:text-gray-500 focus:outline-none focus:border-[#F58634] focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                aria-label="menu"
              >
                <span>
                  <Bars3Icon className="h-6 text-[#F58634]" />
                </span>
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Menu.Button>
            </span>

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
                    {links.map(link => {
                      return (
                        <Menu.Item key={link.id}>
                          {({ active }) => (
                            <Link to={link.link} className="no-underline">
                              <button
                                className={`${
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700"
                                } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                              >
                                {link.name}
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
    </div>
  )
}

export default HamburgerMenu
