import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav
      className="bg-gray-50 w-7xl rounded-full"
      style={{
        position: "absolute",
        top: "10%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      <div className=" px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div
            className="absolute inset-y-0 left-0 flex items-center sm:hidden
        "
          >
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:ring-inset"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg
                  className="size-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="size-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 ">
                {["Dashboard", "Team", "Projects", "Calendar"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="relative ml-3">
            <button
              className="flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <img
                className="size-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
              />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5">
                {["Your Profile", "Settings", "Sign out"].map((option) => (
                  <a
                    key={option}
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                  >
                    {option}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="sm:hidden px-2 pt-2 pb-3 space-y-1">
          {["Dashboard", "Team", "Projects", "Calendar"].map((item) => (
            <a
              key={item}
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
