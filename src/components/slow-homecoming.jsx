//https://youtu.be/dgUgggu8VEc
//slow_homecoming_full.png
import * as React from "react"
import '../app/style.css';
import 'tailwindcss/tailwind.css';
import { Button } from "@/components/ui/button";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { cn } from "@/lib/utils";
import Image from "next/image"
import { useRouter } from "next/navigation"


import { FaLinkedin } from 'react-icons/fa';
import { AspectRatioDemo } from "@/components/apic"
import { AspectRatio } from "../components/ui/aspect-ratio"
import InProgressComponent from "@/components/inprogress"


export function FileMind() {
    const router = useRouter();

    const toHome = () => {
        router.push('/');
    }

    const toVideo = () => {
        const url = "https://youtu.be/dgUgggu8VEc";
        window.open(url, '_blank');
      }

    return (
        <main className="px-10 py-2" style={{ color: 'rgb(3, 8, 22)', backgroundColor: 'babyblue' }}>

            {/* page */}
            <Button onClick={toVideo} variant="ghost">click to see the video</Button>
            
            <Image src="./slow_homecoming_full.png" alt="filemind-research" width={1200} />


        </main>
    );
};

export default FileMind;
