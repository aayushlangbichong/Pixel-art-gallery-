"use client";
import { Button } from "@/components/ui/button";
import { CircleArrowRight } from "lucide-react";
import Link from "next/link";
import { ROUTES } from "./constants/routes";
import Stack from "./Reactbits UI/CardStack/Stack";

export default function Home() {
  const images = [
    {
      id: 1,
      img: "https://drct.pixilart.com/sizes/sr23054f7dcb0aws3_400.png",
    },
    {
      id: 2,
      img: "https://drct.pixilart.com/sizes/sr2f5d198785eaws3_400.png",
    },
    {
      id: 3,
      img: "https://drct.pixilart.com/sizes/sr2adbb9a1fe5aws3_400.png",
    },
    {
      id: 4,
      img: "https://drct.pixilart.com/sizes/sr2eda5b805b4aws3_400.png",
    },
    {
      id: 5,
      img: "https://art.pixilart.com/sr2eeeebc64daaws3.gif",
    },
  ];
  return (
    <main className="relative">
      <div className="text-center text-2xl md:text-4xl">
        <h1>
          Welcome to
          <span className="text-3xl ml-1 md:text-5xl text-[#c4e62d]">
            PixL:
          </span>
        </h1>
        <p>Your Online Digital Pixel Art Gallery</p>
        <div className="flex justify-center gap-2 mt-4">
          <Button className="bg-gray-400 hover:cursor-pointer">
            Submit Artwork
          </Button>
          <Button className="text-black">
            <Link href={ROUTES.GALLERY} className="flex items-center gap-2">
              Discover Gallery
              <CircleArrowRight />
            </Link>
          </Button>
        </div>
      </div>
      <div className="md:flex justify-center md:p-6 hidden md:mt-2">
        <Stack
          randomRotation={true}
          sensitivity={180}
          sendToBackOnClick={false}
          cardDimensions={{ width: 300, height: 300 }}
          cardsData={images}
        />
      </div>
      <div className="flex md:hidden justify-center items-center mt-12 p-4">
        <Stack
          randomRotation={true}
          sensitivity={180}
          sendToBackOnClick={false}
          cardDimensions={{ width: 280, height: 280 }}
          cardsData={images}
        />
      </div>
    </main>
  );
}

