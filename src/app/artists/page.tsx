import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/Card";
import { Mail, MapPin, UserPlus } from "lucide-react";
import Image from "next/image";
import React from "react";

function ArtistsPage() {
  const artists = [
    {
      id: 1,
      name: "Leonardo Da Vinci",
      email: "Leo@gmail.com",
      location: "Italy",
      role: "Realism Artist",
      image: (
        <Image
          src={"/Davinci.jpg"}
          height={100}
          width={100}
          alt="artist"
          className="rounded-full object-cover h-32 w-32"
        />
      ),
    },
    {
      id: 2,
      name: "Michelangelo Buonarroti",
      email: "Michelangelo@gmail.com",
      location: "Italy",
      role: "Renaissance Sculptor",
      image: (
        <Image
          src={"/michelangelo.jpg"}
          height={100}
          width={100}
          alt="artist"
          className="rounded-full object-cover h-32 w-32"
        />
      ),
    },
    {
      id: 3,
      name: "Agrim Pradhananga",
      email: "Rag@gmail.com",
      location: "Nepal",
      role: "High Renaissance Painter",
      image: (
        <Image
          src={"/rag.jpg"}
          height={100}
          width={100}
          alt="artist"
          className="rounded-full object-cover h-32 w-32"
        />
      ),
    },
    {
      id: 4,
      name: "Claude Monet",
      email: "Monet@gmail.com",
      location: "France",
      role: "Impressionist Painter",
      image: (
        <Image
          src={"/monet.jpg"}
          height={100}
          width={100}
          alt="artist"
          className="rounded-full object-cover h-32 w-32"
        />
      ),
    },
    {
      id: 5,
      name: "Vincent van Gogh",
      email: "VanGogh@gmail.com",
      location: "Netherlands",
      role: "Post-Impressionist Painter",
      image: (
        <Image
          src={"/vangogh.jpg"}
          height={100}
          width={100}
          alt="artist"
          className="rounded-full object-cover h-32 w-32"
        />
      ),
    },
    {
      id: 6,
      name: "Pablo Picasso",
      email: "Picasso@gmail.com",
      location: "Spain",
      role: "Cubist Artist",
      image: (
        <Image
          src={"/picasso.jpg"}
          height={100}
          width={100}
          alt="artist"
          className="rounded-full object-cover h-32 w-32"
        />
      ),
    },
    {
      id: 7,
      name: "Manish Gurung",
      email: "shykip@gmail.com",
      location: "Nepal",
      role: "Pro Artist",
      image: (
        <Image
          src={"/shykip.jpg"}
          height={100}
          width={100}
          alt="artist"
          className="rounded-full object-cover h-32 w-32"
        />
      ),
    },
    {
      id: 8,
      name: "Aayush Regmi",
      email: "regs@gmail.com",
      location: "Nepal",
      role: "Surrealist Artist",
      image: (
        <Image
          src={"/regs.jpg"}
          height={100}
          width={100}
          alt="artist"
          className="rounded-full object-cover h-32 w-32"
        />
      ),
    },
  ];
  return (
    <main>
      <div>
        <h1 className="text-center">Here are the artists</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 m-2">
          {artists.map((artist) => (
            <Card key={artist.id} className="bg-[#212124] text-primary">
              <CardContent>
                <div className="mb-2">{artist.image}</div>
                <h1 className="text-lg font-bold">{artist.name}</h1>
                <p>{artist.role}</p>
                <div className="flex flex-col gap-2 my-4">
                  <div className="flex gap-2">
                    <MapPin />
                    {artist.location}
                  </div>

                  <div className="flex gap-2">
                    <Mail />
                    {artist.email}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button className="text-black">
                    <UserPlus />
                    Follow
                  </Button>
                  <Button className="text-black">
                    <Mail />
                    Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}

export default ArtistsPage;
