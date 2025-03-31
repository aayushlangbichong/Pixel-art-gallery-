"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/Card";

export default function GalleryPage() {
  const images = [
    {
      id: 1,
      title: "Night Rain",
      src: "https://art.pixilart.com/sr25ab4b14863aws3.gif",
      alt: "NightRain",
    },
    {
      id: 2,
      title: "UnderSea",
      src: "https://art.pixilart.com/sr2eeeebc64daaws3.gif",
      alt: "Undersea",
    },
    {
      id: 3,
      title: "Forest",
      src: "https://drct.pixilart.com/sizes/sr23054f7dcb0aws3_400.png",
      alt: "Forest",
    },
    {
      id: 4,
      title: "Galaxy",
      src: "https://drct.pixilart.com/sizes/sr2f5d198785eaws3_400.png",
      alt: "Galaxy",
    },
    {
      id: 5,
      title: "Hill Top",
      src: "https://drct.pixilart.com/sizes/sr2782aa1aeeeaws3_400.png",
      alt: "Hill Top",
    },
    {
      id: 6,
      title: "Seagull by the Sea",
      src: "https://drct.pixilart.com/sizes/sr26c18647fe9aws3_400.png",
      alt: "Seagull by the Sea",
    },
    {
      id: 7,
      title: "Night",
      src: "https://art.pixilart.com/sr26f3b8a3d27aws3.gif",
      alt: "Night",
    },
    {
      id: 8,
      title: "Sea of Blue moon flower",
      src: "https://art.pixilart.com/sr28bef7ccccbaws3.gif",
      alt: "Sea of Blue moon flower",
    },
  ];

  return (
    <main className="container mx-auto py-8">
      <h1 className="text-center mb-6 text-3xl">Welcome to the Gallery!</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img) => (
          <Card
            key={img.id}
            className="overflow-hidden bg-[#282828] text-primary"
          >
            <CardContent className="p-0">
              <div className="relative aspect-video w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src || "/placeholder.svg"}
                  alt={img.alt}
                  className="object-cover w-full h-full"
                />
              </div>
            </CardContent>
            <CardFooter>
              <h3 className="font-medium text-md text-center w-full truncate">
                {img.title}
              </h3>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
