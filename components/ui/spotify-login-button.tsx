import React from "react";
import { Button } from "@/components/ui/button";
import { FaSpotify } from "react-icons/fa";
import Link from "next/link";

const spotifyLoginButton = () => {
  return (
    <>
      <Button className="bg-green-700" asChild>
        <Link href="/api/login" className="flex gap-1">
          <FaSpotify className="mr-2 h-4 w-4" /> Login with Spotify
        </Link>
      </Button>
    </>
  );
};

export default spotifyLoginButton;
