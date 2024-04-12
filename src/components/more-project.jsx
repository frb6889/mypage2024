import * as React from "react"
import Image from "next/image"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button";



const MoreProject = ({dir1,dir2,dir3}) => {
  const works = [
    {
      name: "Slow Homecoming",
      urll: "./slow_homecoming.png",
      
    },
    {
      name: "Lume",
      urll: "./lume.png",
     
    },
    {
      name: "Fragmentation",
      urll: "./Fragmentation.png",
      
    },
  ]

  return (


    <div className="max-w-md mx-auto bg-white md:max-w-2xl whitespace-nowrap">
      <a class="block mt-1 leading-tight text-black scroll-m-20 font-extrabold text-2xl"
      style={{margin:'20px'}}>More project</a>
      <ScrollArea className="max-w-md mx-auto bg-white md:max-w-2xl whitespace-nowrap">

        <div className="flex w-max space-x-4 p-4">
          {/* {works.map((artwork) => (
            <figure key={artwork.name} className="shrink-0">
              <div className="overflow-hidden rounded-md">
                <Image
                  src={artwork.urll}
                  className="aspect-[4/3] h-fit w-fit object-cover"
                  width={300}
                  height={400}
                />
              </div>
              <figcaption className="pt-2 text-xs text-muted-foreground gap-3">
                
                <Button variant="outline" style={{ height:"30px" }} onClick={artwork.onClickDir}>
                {artwork.name}
                </Button>
              </figcaption>
            </figure>
          ))} */}
          <figure key="Slow Homecoming" className="shrink-0">
              <div className="overflow-hidden rounded-md">
                <Image
                  src="./slow_homecoming.png"
                  className="aspect-[4/3] h-fit w-fit object-cover"
                  width={300}
                  height={400}
                />
              </div>
              <figcaption className="pt-2 text-xs text-muted-foreground gap-3">
                
                <Button variant="outline" style={{ height:"30px" }} onClick={artwork.onClickDir}>
                {artwork.name}
                </Button>
              </figcaption>
            </figure>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>

  )
}

export default MoreProject;