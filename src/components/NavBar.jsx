import { Fragment, useState } from "react";
import { FaBars, FaSearch, FaUserPlus } from "react-icons/fa";
import { BsBell } from "react-icons/bs";
import { Menu, Transition } from "@headlessui/react";

const links = [
  { href: "/dark theme", label: "Dark Mode" },
  { href: "/profile", label: "Profile" },
  { href: "/what's new", label: "What New" },
  { href: "/help", label: "Help" },
  { href: "/send feedback", label: "Send Feedback" },
  { href: "/hint and shortcuts", label: "Hint and Shortcuts" },
  { href: "/out", label: "Logout" },
];

function NavBar() {
  return (
    <nav className="flex flex-row  w-full items-center  h-20 p-2 gap-8 ">
      <FaBars className=" w-8 h-8 pl-1 m-2 ml-6 " />
      <div className="w-full flex flex-row items-center gap-2  ">
        <FaSearch className=" w-4 h-4  text-gray-300" />
        <p className="text-lg text-gray-300">dfin</p>
      </div>
      <div className="flex flex-row items-center w-full gap-3 justify-end pr-16">
        <FaUserPlus className="w-6 h-6  text-gray-400" />
        <p className=" text-gray-400">INVITE TEAM MEMBER</p>

        <BsBell className="w-5 h-5 text-gray-400 ml-8" />
        <div className="m-2 p-2">
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="h-10 w-10 flex justify-center items-center bg-[#a75992] rounded-full shadow-md">
              <p className="text-center text-white font-semibold ">FL</p>
            </Menu.Button>
            {/* <div className="pl-3 rounded-full w-10 h-10   text-center flex">
              
          </div> */}

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none flex flex-col">
                {links.map((link) => (
                  <Menu.Item
                    as="a"
                    key={link.href}
                    href={link.href}
                    className="ui-active:bg-gray-100 ui-active:bg-opacity-60   ui-not-active:text-black w-full p-2 first:rounded-t-md last:rounded-b-md no-underline"
                  >
                    {link.label}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
