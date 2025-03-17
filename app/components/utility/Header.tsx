"use client";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";
import Profile from "../profile/Profile";
import { useState } from "react";

function Header({ logic }: { readonly logic: any }) {
  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);
  return (
    <header className="w-full flex justify-center items-center p-5 header font-mono text-xl">
      <i className="fa-solid fa-heart text-6xl lg:text-4xl animate-bounce me-auto lg:mx-5 "></i>
      <ul className="hidden lg:flex py-2 text-md mx-auto rounded-full w-1/2 font-medium justify-evenly items-center bg-opacity-40 bg-black">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#Certifications">Certifications</a>
        </li>
      </ul>
      {logic ? (
        <Profile user={logic?.user} />
      ) : (
        <>
          <div className="hidden lg:block text-end">
            <button className="button mx-3" onClick={() => setLogin(true)}>
              Log in
            </button>
            <button className="button" onClick={() => setSignUp(true)}>
              Sign up
            </button>
          </div>
          <Menu>
            <MenuButton className=" top-4 right-4 fixed inline-flex lg:hidden items-center rounded-md bg-gray-800 py-1.5 px-3 text-6xl/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
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
                  <button
                    className="button mx-3"
                    onClick={() => setLogin(true)}
                  >
                    Log in
                  </button>
                  <button
                    className="button mx-3"
                    onClick={() => setSignUp(true)}
                  >
                    Sign up
                  </button>
                </div>
              </MenuItem>
            </MenuItems>
          </Menu>
        </>
      )}

      <Login open={login} setOpen={setLogin} />
      <SignUp open={signUp} setOpen={setSignUp} />
    </header>
  );
}

export default Header;
