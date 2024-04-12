
import * as React from "react"
import '../app/style.css';
import { useState } from "react"
import { cn } from "@/lib/utils";



///next
import Image from "next/image"
//import { useNavigation } from "next/navigation"
import { useRouter } from "next/navigation"
import 'tailwindcss/tailwind.css';
import { Button } from "@/components/ui/button";




import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"




import { FaLinkedin } from 'react-icons/fa';
import { AspectRatioDemo } from "@/components/apic"
import { AspectRatio } from "../components/ui/aspect-ratio"
import InProgressComponent from "@/components/inprogress"


export function Lume() {
    const router = useRouter();

    const toHome = () => {
        router.push('/');
    }

    const toLumeVideo = () => {
        const url = "https://www.youtube.com/watch?v=wQ6zdoXrDTc";
        window.open(url, '_blank');
      }

    return (
        <main className="px-24 py-2" style={{ color: 'rgb(3, 8, 22)', backgroundColor: 'babyblue' }}>

            {/* page */}
                
            <Button onClick={toLumeVideo} variant="ghost">click to see the video</Button>
            <Image src="./Lume_full.png" alt="lume-full" width={1200} />


        </main>
    );
};

export default Lume;
