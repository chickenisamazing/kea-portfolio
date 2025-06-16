"use client";

import { usePathname } from "next/navigation";

import ProjectNavbar from "./ProjectNavbar";
import Navbar from "./Navbar";

export default function NavbarContainer() {
  const pathname = usePathname();

  if (pathname.startsWith("/project")) {
    return <ProjectNavbar />;
  } else {
    return <Navbar />;
  }
}
