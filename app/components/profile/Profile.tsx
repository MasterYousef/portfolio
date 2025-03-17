import useProfileLogic from "@/hooks/logOutHook";
import Image from "next/image";
import React from "react";
import UserData from "./UserData";
import { User } from "@/types/user";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

function Profile({ user }: { readonly user: User }) {
  const logic = useProfileLogic();
  return (
    <div className="lg:flex flex-row-reverse justify-center items-center">
      <div className="hidden lg:flex relative duration-300 w-24 h-24 mx-10 rounded-full profile">
        <Image
          src={user.image || "/image/default.png"}
          alt="profile"
          width={500}
          height={500}
          className="w-full h-full rounded-full "
        />

        <button
          onClick={() => logic.setOpen(true)}
          className="absolute duration-300 opacity-0 text-xs w-full h-full 
        rounded-full flex justify-center items-center top-1/2 left-1/2 
        -translate-x-1/2 -translate-y-1/2 bg-overlay"
        >
          View Profile
        </button>
      </div>
      <button onClick={logic.handleLogout} className="button hidden lg:block">
        Log Out
      </button>
      <UserData open={logic.open} setOpen={logic.setOpen} user={user} />
      <Menu>
        <MenuButton className="top-4 right-4 fixed inline-flex lg:hidden items-center rounded-md bg-gray-800 py-1.5 px-3 text-6xl/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
          <i className="fa-solid fa-bars"></i>
        </MenuButton>
        <MenuItems
          anchor="bottom end"
          className="right-0 me-4 rounded-xl border border-white/5 bg-black p-1 text-sm/6 text-white transition-all duration-300 ease-in-out scale-95 opacity-0 data-[open]:scale-100 data-[open]:opacity-100 data-[open]:translate-y-0 focus:outline-none"
        >
          <MenuItem>
            <a
              href="/"
              className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
            >
              home
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#skills"
              className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
            >
              skills
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#projects"
              className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
            >
              projects
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#Certifications"
              className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
            >
              certifications
            </a>
          </MenuItem>
          <MenuItem>
            <div className="auth my-3 ">
              <button className="button mx-3" onClick={logic.handleLogout}>
                Log out
              </button>
              <button
                className="button mx-3"
                onClick={() => logic.setOpen(true)}
              >
                view profile
              </button>
            </div>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
}

export default Profile;
