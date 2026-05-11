import { ReactNode } from "react";
import Navbar from "./Navigation";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  
  // On the home route, the Webflow iframe has its own navbar —
  // hide the React navbar to avoid a duplicate/overlapping navbar.
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col">
      {!isHome && <Navbar />}
      <main className={isHome ? "flex-1 p-0 m-0" : "flex-1"}>
        {children}
      </main>
    </div>
  );
}