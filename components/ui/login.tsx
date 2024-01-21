"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

interface LoginButtonProps {
  displayText?: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({ displayText }) => {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <Button
      onClick={() => {
        if (session) {
          console.log(session);
          router.push("/graph");
        } else {
          router.push("/login");
        }
      }}
    >
      {displayText || "Login"}
    </Button>
  );
};

export default LoginButton;
