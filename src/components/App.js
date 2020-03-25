import React, { useState } from "react";

const App = () => {
  let [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* Off-canvas menu for mobile */}
      <div
        x-show="sidebarOpen"
        className={`md:hidden ${sidebarOpen ? "" : "hidden"} `}
      >
        <div
          click="sidebarOpen = false"
          x-show="sidebarOpen"
          xTransitionEnter-start="opacity-0"
          xTransitionEnter-end="opacity-100"
          xTransitionLeave-start="opacity-100"
          xTransitionLeave-end="opacity-0"
          className="fixed inset-0 z-30 transition-opacity ease-linear duration-300"
        >
          <div className="absolute inset-0 bg-gray-600 opacity-75" />
        </div>
        <div className="fixed inset-0 flex z-40">
          <div
            x-show="sidebarOpen"
            xTransitionEnter-start="-translate-x-full"
            xTransitionEnter-end="translate-x-0"
            xTransitionLeave-start="translate-x-0"
            xTransitionLeave-end="-translate-x-full"
            className="flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white transform ease-in-out duration-300 "
          >
            <div className="absolute top-0 right-0 -mr-14 p-1">
              <button
                x-show="sidebarOpen"
                click="sidebarOpen = false"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
              >
                <svg
                  className="h-6 w-6 text-white"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-shrink-0 flex items-center px-4">
              <img
                className="h-8 w-auto"
                src={require("./images/asana.png")}
                alt=" "
              />
            </div>
            <div className="mt-5 flex-1 h-0 overflow-y-auto">
              <nav className="px-2 ">
                <h3 className="px-3 text-xs leading-4 font-semibold text-gray-500 uppercase tracking-wider">
                  issues
                </h3>
                <a
                  href="#"
                  className="mt-1 group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-gray-50 bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150 "
                >
                  <span className="truncate">All</span>
                  <span className="ml-auto inline-block py-0.5 px-3 text-xs leading-4 rounded-full   group-hover:bg-gray-200 group-focus:bg-gray-200 transition ease-in-out duration-150">
                    36
                  </span>
                </a>

                <a
                  href="#"
                  className="mt-1 group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600  rounded-md hover:text-gray-900 hover:bg-gray-50   focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150 "
                >
                  <span className="truncate">Assign to me</span>
                  <span className="ml-auto inline-block py-0.5 px-3 text-xs leading-4 rounded-full   group-hover:bg-gray-200 group-focus:bg-gray-200 transition ease-in-out duration-150">
                    2
                  </span>
                </a>

                <a
                  href="#"
                  className="mt-1 group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150 "
                >
                  <span className="truncate">Created by me</span>
                  <span className="ml-auto inline-block py-0.5 px-3 text-xs leading-4 rounded-full   group-hover:bg-gray-200 group-focus:bg-gray-200 transition ease-in-out duration-150">
                    1
                  </span>
                </a>
                <a
                  href="#"
                  className="mt-1 group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150 "
                >
                  <span className="truncate">Archived</span>
                </a>

                <div className="mt-8">
                  <h3 className="px-3 text-xs leading-4 font-semibold text-gray-500 uppercase tracking-wider">
                    TAGS
                  </h3>
                  <div className="mt-1">
                    <a
                      href="#"
                      className="group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150"
                    >
                      <span className="truncate">Bug</span>
                    </a>
                    <a
                      href="#"
                      className="mt-1 group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150"
                    >
                      <span className="truncate">Feature Request</span>
                    </a>
                    <a
                      href="#"
                      className="mt-1 group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150"
                    >
                      <span className="truncate">Marketing</span>
                    </a>
                    <a
                      href="#"
                      className="mt-1 group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150"
                    >
                      <span className="truncate">v2.0</span>
                    </a>
                    <a
                      href="#"
                      className="mt-1 group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150"
                    >
                      <span className="truncate">Enhancment</span>
                    </a>
                    <a
                      href="#"
                      className="mt-1 group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150"
                    >
                      <span className="truncate">Design</span>
                    </a>

                    <div className="ml-3 mt-2 flex-shrink-0">
                      <span className="inline-flex rounded-md  ">
                        <button
                          type="button"
                          className="relative inline-flex items-center      text-sm leading-5 font-medium    bg-transparent hover:bg-indigo-500 focus:outline-none  leading-5 font-medium text-gray-600 "
                        >
                          <span className="text-gray-300 font-bold pr-1">
                            +
                          </span>{" "}
                          New Project
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="flex-shrink-0 w-14">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </div>
      </div>
      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64 border-r border-gray-200 pt-5 pb-4 bg-white">
          <div className="flex items-center flex-shrink-0 px-4">
            <img
              className="h-8 w-auto"
              src={require("./images/asana.png")}
              alt=" "
            />
          </div>
          <div className="mt-5 h-0 flex-1 flex flex-col overflow-y-auto">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <nav className="flex-1 px-2 bg-white">
              <h3 className="px-3 text-xs leading-4 font-semibold text-gray-500 uppercase tracking-wider">
                issues
              </h3>
              <a
                href="#"
                className="mt-1 group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-gray-50 bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150 "
              >
                <span className="truncate">All</span>
                <span className="ml-auto inline-block py-0.5 px-3 text-xs leading-4 rounded-full   group-hover:bg-gray-200 group-focus:bg-gray-200 transition ease-in-out duration-150">
                  36
                </span>
              </a>

              <a
                href="#"
                className="mt-1 group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600  rounded-md hover:text-gray-900 hover:bg-gray-50   focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150 "
              >
                <span className="truncate">Assign to me</span>
                <span className="ml-auto inline-block py-0.5 px-3 text-xs leading-4 rounded-full   group-hover:bg-gray-200 group-focus:bg-gray-200 transition ease-in-out duration-150">
                  2
                </span>
              </a>

              <a
                href="#"
                className="mt-1 group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150 "
              >
                <span className="truncate">Created by me</span>
                <span className="ml-auto inline-block py-0.5 px-3 text-xs leading-4 rounded-full   group-hover:bg-gray-200 group-focus:bg-gray-200 transition ease-in-out duration-150">
                  1
                </span>
              </a>
              <a
                href="#"
                className="mt-1 group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150 "
              >
                <span className="truncate">Archived</span>
              </a>

              <div className="mt-8">
                <h3 className="px-3 text-xs leading-4 font-semibold text-gray-500 uppercase tracking-wider">
                  TAGS
                </h3>
                <div className="mt-1">
                  <a
                    href="#"
                    className="group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150"
                  >
                    <span className="truncate">Bug</span>
                  </a>
                  <a
                    href="#"
                    className="mt-1 group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150"
                  >
                    <span className="truncate">Feature Request</span>
                  </a>
                  <a
                    href="#"
                    className="mt-1 group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150"
                  >
                    <span className="truncate">Marketing</span>
                  </a>
                  <a
                    href="#"
                    className="mt-1 group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150"
                  >
                    <span className="truncate">v2.0</span>
                  </a>
                  <a
                    href="#"
                    className="mt-1 group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150"
                  >
                    <span className="truncate">Enhancment</span>
                  </a>
                  <a
                    href="#"
                    className="mt-1 group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150"
                  >
                    <span className="truncate">Design</span>
                  </a>

                  <div className="ml-3 mt-2 flex-shrink-0">
                    <span className="inline-flex rounded-md  ">
                      <button
                        type="button"
                        className="relative inline-flex items-center      text-sm leading-5 font-medium    bg-transparent hover:bg-indigo-500 focus:outline-none  leading-5 font-medium text-gray-600 "
                      >
                        <span className="text-gray-300 font-bold pr-1">+</span>{" "}
                        New Project
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
          <button
            click_stop="sidebarOpen = true"
            onClick={() => setSidebarOpen(true)}
            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-600 md:hidden"
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </button>
          <div className="flex-1 px-4 flex justify-between">
            <div className="flex-1 flex">
              <div className="w-full flex md:ml-0">
                <label htmlFor="search_field" className="sr-only">
                  Search
                </label>
                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      />
                    </svg>
                  </div>
                  <input
                    id="search_field"
                    className="block w-full h-full pl-8 pr-3 py-2 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 sm:text-sm "
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              <button className="p-1 text-gray-400 rounded-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:shadow-outline focus:text-gray-500">
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
              <div
                clickaway="open = false"
                className="ml-3 relative"
                x-data="{ open: false }"
              >
                <div>
                  <button
                    click="open = !open"
                    className="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:shadow-outline"
                  >
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>
                <div
                  x-show="open"
                  xTransitionEnter="transition ease-out duration-100"
                  xTransitionEnter-start="transform opacity-0 scale-95"
                  xTransitionEnter-end="transform opacity-100 scale-100"
                  xTransitionLeave="transition ease-in duration-75"
                  xTransitionLeave-start="transform opacity-100 scale-100"
                  xTransitionLeave-end="transform opacity-0 scale-95"
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg"
                >
                  <div className="py-1 rounded-md bg-white shadow-xs hidden">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150"
                    >
                      Your Profile
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150"
                    >
                      Settings
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <main
          className="flex-1 relative z-0 overflow-y-auto py-0 focus:outline-none"
          tabIndex={0}
          x-data
          x-init="$el.focus()"
        >
          <div className="bg-white px-4 py-3 border-b border-gray-200 sm:px-6">
            <div className="-ml-4 -mt-2 flex items-center justify-between flex-no-wrap sm:flex-no-wrap">
              <div className="ml-4 mt-2 flex ">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  All Issues
                </h3>
                <div className=" ml-8 overflow-hidden ">
                  <img
                    className="inline-block h-6 w-6 rounded-full text-white shadow-solid"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="-ml-1 inline-block h-6 w-6 rounded-full text-white shadow-solid"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="-ml-1 inline-block h-6 w-6 rounded-full text-white shadow-solid"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="-ml-1 inline-block h-6 w-6 rounded-full text-white shadow-solid"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
              </div>

              <div className="ml-4 mt-2 flex-shrink-0 flex ">
                <span className="relative z-0 inline-flex  pr-4 bg-">
                  <button
                    type="button"
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md   bg-gray-200 text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                  >
                    <svg
                      className="a-s-fa-Ha-pa"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      focusable="false"
                      fill="#000000"
                    >
                      <path d="M3,5v14h18V5H3z M7,7v2H5V7H7z M5,13v-2h2v2H5z M5,15h2v2H5V15z M19,17H9v-2h10V17z M19,13H9v-2h10V13z M19,9H9V7h10V9z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md  bg-gray-200 text-sm leading-5 font-medium text-gray-300 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                  >
                    <svg
                      className="a-s-fa-Ha-pa text-gray-400  "
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M2,5v14h20V5H2z M14,7v4h-4V7H14z M4,7h4v4H4V7z M16,11V7h4v4H16z M4,17v-4h4v4H4z M10,17v-4h4v4H10z M20,17 h-4v-4h4V17z"></path>
                      <path d="M0 0h24v24H0z" fill="none"></path>
                    </svg>
                  </button>
                </span>

                <span className="inline-flex rounded-md shadow-sm">
                  <button
                    type="button"
                    className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-gray-300 bg-gray-900 hover:bg-indigo-500 focus:outline-none focus:shadow-outline"
                  >
                    <span className="mr-3 font-bold">+</span> New Issue
                  </button>
                </span>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            {/* Replace with your content */}

            {/* /End replace */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
