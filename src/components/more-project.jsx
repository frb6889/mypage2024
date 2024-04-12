import * as React from "react"
import Image from "next/image"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button";



const MoreProject = ({ onClickDir }) => {
  const works = [
    {
      artist: "Slow Homecoming",
      art: "./slow_homecoming.png",
    },
    {
      artist: "Lume",
      art: "./lume.png",
    },
    {
      artist: "Fragmentation",
      art: "./Fragmentation.png",
    },
  ]

  return (


    <div className="max-w-md mx-auto bg-white md:max-w-2xl whitespace-nowrap">
      <a class="block mt-1 leading-tight text-black scroll-m-20 font-extrabold text-2xl">More project</a>
      <ScrollArea className="max-w-md mx-auto bg-white md:max-w-2xl whitespace-nowrap rounded-md border">

        <div className="flex w-max space-x-4 p-4">
          {works.map((artwork) => (
            <figure key={artwork.artist} className="shrink-0">
              <div className="overflow-hidden rounded-md">
                <Image
                  src={artwork.art}
                  alt={`Photo by ${artwork.artist}`}
                  className="aspect-[4/3] h-fit w-fit object-cover"
                  width={300}
                  height={400}
                />
              </div>
              <figcaption className="pt-2 text-xs text-muted-foreground">
                Photo by{" "}
                <span className="font-semibold text-foreground">
                  {artwork.artist}
                </span>
                <Button style={{ marginTop: '20px' }} onClick={onClickDir}>
                  Click to see more
                </Button>
              </figcaption>
            </figure>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>

  )
}

export default MoreProject;