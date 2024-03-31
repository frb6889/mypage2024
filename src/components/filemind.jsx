import React from 'react';
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
        <main className="px-24 py-2" style={{ color: 'rgb(3, 8, 22)', backgroundColor: 'babyblue' }}>

            {/* page */}
            <section className="py-1 px-10 flex flex-col item-center text-left gap-3">
                <h1 className="scroll-m-20 font-extrabold  lg:text-6xl" style={{ marginTop: '80px' }}>
                    Filemind</h1>
                <div>
                    <div className="flex justify-center item-center gap-6" style={{ marginTop: '20px' }}>
                        <Card className="w-[350px]">
                            <CardHeader>
                                <CardTitle>Working Process</CardTitle>
                                <CardDescription>Started In November 2023
                                    <br />Lasted for 10 Months</CardDescription>
                            </CardHeader>
                        </Card>
                        <Card className="w-[350px]">
                            <CardHeader>
                                <CardTitle>Our Team</CardTitle>
                                <CardDescription>5 Developers
                                    <br />1 Mentor
                                    <br />1 Designer(me)</CardDescription>
                            </CardHeader>
                        </Card>
                        <Card className="w-[350px]">
                            <CardHeader>
                                <CardTitle>My Role As Design Lead</CardTitle>
                                <CardDescription>
                                    User Research And Interviews
                                    <br />Reviewed Relevant Papers
                                    <br />Low/high-fidelity Prototypes
                                    <br />Frontend Development
                                </CardDescription>
                            </CardHeader>
                        </Card>

                    </div>
                </div>
                <Image src="./filemind_research.png" alt="filemind-research" width={600} />


            </section>


        </main>
    );
};

export default FileMind;
