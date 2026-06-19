"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SiteShell({ children }) {
  const pathname = usePathname();

  const hideLayoutRoutes = ["/registration", "/register"];

  const shouldHideNavbarFooter = hideLayoutRoutes.includes(pathname);

  return (
    <>
      {!shouldHideNavbarFooter && <Navbar />}

      {children}

      {!shouldHideNavbarFooter && <Footer />}
    </>
  );
}