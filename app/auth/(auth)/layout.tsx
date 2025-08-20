"use client";
import { outfit } from "@/app/fonts";
import Button from "@/components/button";
import { login_redirect } from "@/routes";
import classNames from "classnames";
import { signIn } from "next-auth/react";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={`${outfit.className} flex flex-col items-center justify-center min-h-screen w-full`}
    >
      {children}

      {/* OAuth UI */}
      <div
        className={classNames(
          "w-[90%] md:w-[60%] lg:w-[40%] flex flex-col gap-3 py-10"
        )}
      >
        <Button
          className="!bg-white !text-black flex items-center justify-center !border-[2px] !border-gray-200 !text-sm !py-6 !font-light"
          onClick={() => signIn("github", { callbackUrl: login_redirect })}
        >
          <BsGithub className="text-xl" /> Continue with Github
        </Button>
        <Button
          className="!text-black flex items-center justify-center !border-[2px] !border-gray-200 !text-sm !py-6 !font-light"
          onClick={() => signIn("google", { callbackUrl: login_redirect })}
        >
          <FcGoogle className="text-2xl" /> Continue with Google
        </Button>
      </div>
    </main>
  );
}
