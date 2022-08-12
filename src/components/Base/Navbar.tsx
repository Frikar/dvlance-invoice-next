import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <nav
      className="z-40 sticky top-0"
      data-aos="fade-down"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <div className="navbar bg-base-200">
        <div className="navbar-start text-xl text-secondary-content font-bold">
          <ul className="menu menu-horizontal p-0 hidden lg:flex">
            <li>
              <Link href={"/"}>Inicio</Link>
            </li>
            <li>
              <Link href={"/blog"}>Blog</Link>
            </li>
            <li>
              <Link href={"/contacto"}>Contacto</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-3xl font-bold uppercase text-primary-content">
            Dvlance Invoice
          </a>
        </div>
        <div className="navbar-end text-xl text-secondary-content font-bold">
          {session ? (
            <button className="btn btn-primary" onClick={() => signOut()}>
              Sign out
            </button>
          ) : (
            <button className="btn btn-primary" onClick={() => signIn()}>
              Sign in
            </button>
          )}
          {/* <div
            onClick={() => setMobileNav(!mobileNav)} 
            className="text-3xl text-secondary-content md:hidden lg:text-3xl cursor-pointer"
          >
            {mobileNav ? <CgClose /> : <CgMenuRight />}
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
