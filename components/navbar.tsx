import React from "react";
import { ModeToggle } from "./ui/mode-toggle";
import SpotifyLoginButton from "./ui/spotify-login-button";

interface NavbarProps {
  children: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <>
      <div className="relative flex flex-col min-h-screen bg-background">
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 max-w-screen-2xl justify-end items-center gap-2">
            <SpotifyLoginButton />
            <ModeToggle />
          </div>
        </header>
        {children}
      </div>
    </>
  );
};

export default Navbar;
