"use client";

import { usePathname } from "next/navigation";
import { Link } from "react-scroll";

function NavLink({ path, children }) {
  const pathname = usePathname();

  return (
    <Link
      to={path}
      smooth={true}
      duration={500}
      className={`hover:cursor-pointer block py-2 hover:text-secondary-900 transition-all ease-out
        ${pathname === path ? "text-primary-900" : ""}
      `}
    >
      {children}
    </Link>
  );
}

export default NavLink;
