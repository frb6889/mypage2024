'use client'

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


export default function Filemind() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const sections_sm = [
    {title:'Working Process',content:'Started In November 2023<br />Lasted for 10 Months'},
    {title:'Our Team',content:'4 Developers<br />1 Mentor<br />1 Designer(me)'},
    {title:'My Role As Design Lead',content:'User Research And Interviews<br />Reviewed Relevant Papers<br />Low/high-fidelity Prototypes<br />Frontend Development'},

  ]


  return (

    <main className="py-0">
      {/* 返回键 */}
      <header className="flex justify-between items-center m-2 mt-6"
        style={{
          position: 'fixed', border: '0.4px solid #dddddd',
          padding: 0, zIndex: 1000, borderRadius: '50%', padding: '10px',
          backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255, 255, 255, 0.5)',cursor:'pointer',
          marginLeft:'5%',
        }}>
        <Image src="./back.png" alt="Logo" width={40} height={40} onClick={handleBack} />
      </header>
      

      {/* page */}
      <div className="">
        <div className="grid grid-cols-1">
        <img className="flex items-center justify-center bg-cover" src="./filemind/filemind-long.png" alt="" />

        </div>
        </div>
      <section className="py-0 px-0 flex flex-col  text-left gap-3">
        <div>
        
        </div>
        <div>
          <div className="flex justify-center item-center gap-6 " style={{ marginTop: '20px' }}>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3">
            {sections_sm.map((sec, index) => (
              <div key="index" className="w-60 h-30 bg-slate-200">
                <p className="text-slate-900 mt-2 ml-2 text-xs">
                  {sec.title}
                </p>
                <p className="text-muted-foreground ml-2 mr-2 mb-8 text-xs" dangerouslySetInnerHTML={{ __html: sec.content }}>
                </p>
              </div>
            ))}
            </div>
            

          </div>
        </div>
        {/* <Image src="./filemind_research.png" alt="filemind-research" width={600}  /> */}

      
      </section>


    </main>
  );
}
