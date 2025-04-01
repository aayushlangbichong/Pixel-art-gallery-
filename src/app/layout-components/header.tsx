"use client";
import React, { useState } from "react";
import GooeyNav from "../Reactbits UI/GooeyNav/GooeyNav";
import Link from "next/link";
import Aurora from "../Reactbits UI/Aurora/Aurora";
import Logo from "./logo";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { ROUTES } from "../constants/routes";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export default function Header() {
  const items = [
    { label: "Home", href: "/" },
    { label: "Gallery", href: "/gallery" },
    { label: "Artists", href: "/artists" },
  ];

  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  const activeIndex = items.findIndex((item) => item.href === pathName);
  return (
    <main className="w-full">
      <div className="h-22">
        <Aurora
          colorStops={[
            "#172347",
            "#025385",
            "#0EF3C5",
            "#04E2B7",
            "#038298",
            "#015268",
          ]}
          blend={0.7}
          amplitude={1.0}
          speed={1}
        />
      </div>

      <nav className="fixed hidden top-0 w-full z-50 md:flex justify-between backdrop-blur-xs">
        <div className="ml-4 my-2">
          <Logo />
        </div>
        <div className="mt-4">
          <GooeyNav
            items={items}
            animationTime={500}
            particleCount={18}
            initialActiveIndex={activeIndex}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            timeVariance={200}
          />
        </div>

        <Button className="px-3 py-2 mr-4 mt-2 text-primary hover:bg-primary/60 border bg-transparent rounded-md">
          <Link href="/login">Login </Link>
        </Button>
      </nav>
      {/* mobile view */}
      <nav className="fixed z-50 md:hidden flex justify-between top-0 right-0 backdrop-blur-xs w-full">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="hover:cursor-pointer relative"
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ scale: 0.5, rotate: -90, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                exit={{ scale: 0.5, rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <X className="size-8 mx-2 my-2" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ scale: 0.5, rotate: 90, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                exit={{ scale: 0.5, rotate: -90, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Menu className="size-8 mx-2 my-2" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-12  p-4 w-full"
            >
              <ul className="flex flex-col gap-2">
                <li className=" cursor-pointer">
                  <Link href={ROUTES.HOME}>Home</Link>
                </li>
                <li className="cursor-pointer">
                  <Link href={ROUTES.GALLERY}>Gallery</Link>
                </li>
                <li className="cursor-pointer">
                  <Link href={ROUTES.ARTISTS}>Artists</Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="mr-8 mt-2">
          <Logo />
        </div>
        <Button className="px-3 py-2 mr-4 mt-2 text-primary hover:bg-primary/60 border bg-transparent rounded-md">
          <Link href="/login">Login </Link>
        </Button>
      </nav>
    </main>
  );
}
