import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"

export function AspectRatioDemo() {
  return (
    <AspectRatio ratio={4 / 3} className=" w-30">
      <Image
      //src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        src="./filemind1.png"
        alt="Photo by Drew Beamer"
        fill
        className="rounded-md object-contain"
      />
    </AspectRatio>
  )
}
