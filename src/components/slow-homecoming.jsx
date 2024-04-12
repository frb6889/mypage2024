//https://youtu.be/dgUgggu8VEc
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


export function Slhkm() {
    const router = useRouter();

    const toHome = () => {
        router.push('/');
    }



    const toSHVideo = () => {
        const url = "https://youtu.be/dgUgggu8VEc";
        window.open(url, '_blank');
      }

    return (
        <main className="px-24 py-2" style={{ color: 'rgb(3, 8, 22)', backgroundColor: 'babyblue' }}>

            {/* page */}
            <section className="py-1 px-10 flex flex-col item-center text-left gap-3">
                <h1 className="scroll-m-20 font-extrabold  lg:text-6xl" style={{ marginTop: '80px' }}>
                    Slow Homecoming</h1>
                <Button onClick={toSHVideo} variant="secondary">click to see the video</Button>
                <Image src="./lume-full.png" alt="lume-full" width={1200} />

            </section>


        </main>
    );
};

export default Slhkm;
