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
                    inHunt</h1>
                <div>
                    <div className="flex justify-center item-center gap-6" style={{ marginTop: '20px' }}>
                        <Card className="w-[450px]">
                            <CardHeader>
                                <CardTitle>Working Process</CardTitle>
                                <CardDescription>Started In December 2023
                                    <br />Lasted for 1.2 Months</CardDescription>
                            </CardHeader>
                        </Card>
                        <Card className="w-[450px]">
                            <CardHeader>
                                <CardTitle>Our Team</CardTitle>
                                <CardDescription>3 Designers</CardDescription>
                            </CardHeader>
                        </Card>
                        <Card className="w-[450px]">
                            <CardHeader>
                                <CardTitle>My Role As Design Lead</CardTitle>
                                <CardDescription>
                                    设计方案提出
                                    <br />用户需求调研和采访，使用场景刻画
                                    <br />总体架构设计
                                    <br />灵感库管理部分界面设计
                            
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
                <Image src="./inhunt-full.png" alt="inhunt-full" width={1200} height={2400} />


            </section>


        </main>
    );
};

export default FileMind;
