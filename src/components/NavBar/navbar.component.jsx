import React, { useState } from "react";
import { Transition } from "@headlessui/react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className=""
        style={{
          zIndex: " 5",
          width: "100%",
          position: "fixed",
          top: 0,
        }}
      >
        <nav className="" style={{ backgroundColor: "#2F1893" }}>
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <p className=" text-white px-3 py-2  text-sm font-bold">
                StartUp 3
              </p>

              <div className="flex items-center">
                <div className="flex-shrink-0"></div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <p
                      className="text-white px-3 py-2  text-sm font-bold"
                      style={{ cursor: "pointer" }}
                    >
                      Features
                    </p>

                    <p
                      className="text-white px-3 py-2  text-sm font-bold"
                      style={{ cursor: "pointer" }}
                    >
                      Subscribe
                    </p>
                    <p>
                      <button
                        className="text-white p-1 rounded-full"
                        style={{
                          backgroundColor: "#482BE7",
                          width: "80px",
                        }}
                      >
                        Sign Up
                      </button>
                    </p>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className=" inline-flex items-center justify-center p-2  text-blue-400 hover:text-white hover:bg-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Open main menu</span>

                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>

                    <svg
                      className="hidden h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <Transition
              show={isOpen}
              enter="transition ease-out duration-100 transform"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-75 transform"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {(ref) => (
                <div
                  className="md:hidden"
                  id="mobile-menu"
                  style={{ height: "" }}
                >
                  <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
                    <p className="hover:bg-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">
                      Features
                    </p>

                    <p className="text-gray-300 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">
                      Subscribe
                    </p>

                    <p className="hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                      <button
                        className="text-gray-300 p-1 rounded-full  hover:bg-blue-500 hover:text-white "
                        style={{
                          backgroundColor: "#482BE7",
                          width: "80px",
                        }}
                      >
                        Sign Up
                      </button>
                    </p>
                  </div>
                </div>
              )}
            </Transition>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
