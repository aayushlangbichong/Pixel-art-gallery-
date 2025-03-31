/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function GalleryPage() {
  const images = [
    {
      id: 1,
      title: "Castle",
      image: (
        <img
          src={"https://drct.pixilart.com/sizes/sr2e3fd2abe69aws3_400.png"}
          alt="Night"
        />
      ),
    },
    {
      id: 2,
      title: "UnderSea",
      image: (
        <img
          src={"https://art.pixilart.com/sr2eeeebc64daaws3.gif"}
          alt="Undersea"
        />
      ),
    },
    {
      id: 3,
      title: "Forest",
      image: (
        <img
          src={"https://drct.pixilart.com/sizes/sr23054f7dcb0aws3_400.png"}
          alt="Forest"
        />
      ),
    },
    {
      id: 4,
      title: "Galaxy",
      image: (
        <img
          src={"https://drct.pixilart.com/sizes/sr2f5d198785eaws3_400.png"}
          alt="Night"
        />
      ),
    },
    {
      id: 5,
      title: "Hill Top",
      image: (
        <img
          src={"https://drct.pixilart.com/sizes/sr2782aa1aeeeaws3_400.png"}
          alt="Night"
        />
      ),
    },
    {
      id: 6,
      title: "Seagull by the Sea",
      image: (
        <img
          src={"https://drct.pixilart.com/sizes/sr26c18647fe9aws3_400.png"}
          alt="Night"
        />
      ),
    },
    {
      id: 7,
      title: "Night",
      image: (
        <img
          src={"https://art.pixilart.com/sr26f3b8a3d27aws3.gif"}
          alt="Night"
        />
      ),
    },
    {
      id: 8,
      title: "Sea of Blue moon flower",
      image: (
        <img
          src={"https://art.pixilart.com/sr28bef7ccccbaws3.gif"}
          alt="Night"
        />
      ),
    },
  ];
  return (
    <main>
      <div className="grid grid-cols-4 gap-2 p-4">
        {images.map((img) => (
          <div key={img.id} className="">
            <div className="w-1/2 object-contain">{img.image}</div>
            {img.title}
          </div>
        ))}
      </div>
    </main>
  );
}
