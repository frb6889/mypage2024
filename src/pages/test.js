'use client'

import * as React from "react"
import { cn } from "@/lib/utils";
import Page from '@/app/page';
import Image from "next/image"
//import { useNavigation } from "next/navigation"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { FaLinkedin } from 'react-icons/fa';
import { AspectRatioDemo } from "@/components/apic"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import InProgressComponent from "@/components/inprogress"

export default function Filemind() {
  
  return (

    <main className="px-24 py-2">
      <section className="py-24 px-10 flex flex-col item-center text-left gap-3">
        <h1 className="scroll-m-20 text-4xl font-extrabold  lg:text-4xl"style={{marginTop:'60px'}}>Test</h1>
        <p className="text-2x1 text-muted-foreground">Product Designer@THU IAD</p>
        <Button />
      </section>

      <section>
        
      </section>
    </main>
  );
}
