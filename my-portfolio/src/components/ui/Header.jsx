import React from "react";
import NavLink from "./NavLinks";

const Header = () => {
  const navLinks = [
    { children: "About me", path: "about" },
    { children: "Contact me", path: "contact" },
    { children: "My Skills", path: "skills" },
  ];
  return (
    <header className="holder flex justify-between holder py-2 text-secondary-900 mb-12">
      <h1 className="font-bold text-[20px] lg:text-[30px]">Moein Ganji</h1>
      <nav>
        <ul className="flex gap-5 text-base">
          {navLinks.map((navLink, index) => {
            return (
              <li key={index}>
                <NavLink
                  children={navLink.children}
                  path={navLink.path}
                  index={index}
                />
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
