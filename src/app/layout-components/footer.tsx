"use client";
import React from "react";
import Dock from "../Reactbits UI/Dock/Dock";
import { Home, Info, Link, User } from "lucide-react";
import { useRouter } from "next/navigation";

function Footer() {
  const router = useRouter();
  const items = [
    {
      icon: <Home size={18} />,
      label: "Home",
      onClick: () => router.push("/"),
    },
    {
      icon: <Info size={18} />,
      label: "About us",
      onClick: () => router.push("/"),
    },
    {
      icon: <Link size={18} />,
      label: "Links",
      onClick: () => router.push("/"),
    },
    {
      icon: <User size={18} />,
      label: "Contact Us",
      onClick: () => router.push("/"),
    },
  ];
  return (
    <main className="w-full md:bg-gray-700 p-3 fixed bottom-0">
      <div className="hidden md:flex justify-center w-full gap-4">
        <p>About</p>
        <p>Links</p> <p>Contact us</p>
      </div>
      <div className="md:hidden">
        <Dock
          items={items}
          panelHeight={68}
          baseItemSize={40}
          magnification={50}
        />
      </div>
    </main>
  );
}

export default Footer;
