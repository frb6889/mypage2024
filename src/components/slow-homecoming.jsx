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

    const CircularCard = ({ children }) => (
        <div className="circular-card" style={{ width: '230px', height: '230px', backgroundColor: 'rgba(47, 114, 241, .1)', borderRadius: '50%', margin: '-10px' }}>
            <CardHeader>
                <CardDescription style={{ marginTop: '28%', fontSize: '20px', marginLeft: '20px' }}>
                    {children}
                </CardDescription>
            </CardHeader>
        </div>
    );

    const PointCard = ({ children }) => (
        <Card style={{ width: '180px', marginBottom: '20px' }}>
            <CardHeader>
                <CardTitle className="flex justify-center">
                    {children}
                </CardTitle>
            </CardHeader>
        </Card>
    )

    const PainpointCard = ({ children }) => (
        <div className="painpoint-card">
            {children}
        </div>
    );


    return (
        <main className="px-10 py-2" style={{ color: 'rgb(3, 8, 22)', backgroundColor: 'babyblue' }}>

            {/* page */}
            
            <Image src="./slow_homecoming_full.png" alt="filemind-research" width={1200} />


        </main>
    );
};

export default FileMind;
