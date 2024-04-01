'use client'

import * as React from "react"
import { useState } from "react"

import Image from "next/image"
//import { useNavigation } from "next/navigation"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { FaLinkedin } from 'react-icons/fa';
import { AspectRatioDemo } from "@/components/apic"
import './style.css';
import { AspectRatio } from "@/components/ui/aspect-ratio"
import InProgressComponent from "@/components/inprogress"
import DoneComponent from "@/components/done"
import FileMind from "@/components/filemind"
import InHunt from "@/components/inhunt"
/* 
git add .
git commit -m "r4"
git push origin main
 */



export default function Home() {
  const router = useRouter();

  const toLinkedIn = () => {
    const linkedInUrl = "https://www.linkedin.com/in/yuran-su-6b96a2281/";
    window.open(linkedInUrl, '_blank');
  };

  const toPIgroupWebsite = () => {
    const PIurl = "https://pi.cs.tsinghua.edu.cn/";
    window.open(PIurl, '_blank');
  }

  const [showReview, setShowReview] = React.useState(false);
  const [selectedComponent, setSelectedComponent] = React.useState(null);


  // 点击表格中的 "accounting" 单元格时，显示新的界面
  const handleClick = (component) => {
    setShowReview(true); // Set showReview to true to display review section
    setSelectedComponent(component); // Set the selected component
  };

  const [open, setOpen] = React.useState(false)



  return (

    <main className="py-2">
      {!showReview ? (
        <div className="mainpage">
          <header className="flex justify-between items-center"
            style={{
              position: 'fixed', border: '0.4px solid #dddddd',
              width: '80%', marginLeft: '10%', marginRight: '10%', marginTop: '-100px', padding: 10, paddingLeft: 40, paddingRight: 40, zIndex: 1000, borderRadius: '10px',
              backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255, 255, 255, 0.5)'
            }}>
            <div className="flex items-center">
              <Image
                src="./head.png" alt="Logo" width={60} height={60} />
            </div>


            <div className="flex gap-8">

              {/*  <Button>Resume</Button>
              <Button>About</Button> */}

              <button onClick={toLinkedIn} className="flex items-center gap-2">
                <FaLinkedin size={20} />
              </button>
            </div>
          </header>

          {/* my info */}
          <section className="flex-col justify-between items-center sm:w-80 md:w-600 lg:w-900" style={{ marginLeft: '16%' }}>
            <h1 className="scroll-m-20 text-4xl font-extrabold" style={{ marginTop: '100px' }}>Erana(Yuran) Su</h1>
            <p className="text-2x1 text-muted-foreground">Product Designer@THU IAD</p>
          </section>

          {/* filemind */}
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div className="md:shrink-0">
                <img className="h-48 w-full object-cover md:h-full md:w-48" src="./filemind.png" alt="" />
              </div>
              <div class="p-8">
                <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black">FileMind</a>
                <InProgressComponent />
                <p className="text-muted-foreground mt-2 text-slate-500" style={{ marginTop: '7px' }}>#Landing Project
                </p>
                <p onClick={toPIgroupWebsite} className="text-muted-foreground mt-2 text-slate-500 hover:underline" style={{ cursor: 'pointer' }}>
                  #Tsinghua University Pervasive HCI Group</p>
                <p class="mt-2 text-slate-500">
                A Data Management Assistant tailored for financial systems,
                streamlining the organization and control of data tables for enhanced efficiency.
                </p>
                <Button style={{ marginTop: '20px' }} onClick={() => handleClick('FileMind')}>Click to see more</Button>
              </div>
            </div>
          </div>
          {/* <section className="flex-col justify-between items-center lg:px-20 md:px-14 sm:px-8 py-10">
            <div className="Container">
              <AspectRatio ratio={4 / 3} className="w-30">
                <Image
                  //src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                  src="./filemind.png"
                  alt="Photo by Drew Beamer"
                  fill
                  className="rounded-md object-contain"
                />
              </AspectRatio>
            </div>
            <div className="flex-col gap-10 items-left">
              <h1 className="scroll-m-20 text-2xl font-bold  lg:text-3xl">FileMind</h1>
              <InProgressComponent />
              <p className="text-muted-foreground lg:text-2l" style={{ marginTop: '7px' }}>#Landing Project
              </p>
              <p onClick={toPIgroupWebsite} className="text-muted-foreground lg:text-2l" style={{ cursor: 'pointer' }}>#Tsinghua University Pervasive HCI Group</p>
              <h1 className="scroll-m-20 text-2l text-primary" style={{ marginTop: '2px' }}>
                A Data Management Assistant tailored for financial systems,
                streamlining the organization and control of data tables for enhanced efficiency.
              </h1>
              <Button style={{ marginTop: '20px' }} onClick={() => handleClick('FileMind')}>Click to see more</Button>
            </div>
          </section> */}

          {/* inhunt */}
          <section className="px-14 gap-8 flex-col items-center py-10">
            <div className="Container">
              <AspectRatio ratio={4 / 3} className=" w-30">
                <Image
                  //src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                  src="./inhunt.png"
                  alt="Photo by Drew Beamer"
                  fill
                  className="rounded-md object-contain"
                />
              </AspectRatio>
            </div>
            <div className="Container flex-col gap-10 items-left">

              <h1 className="scroll-m-20 text-2xl font-bold  lg:text-3xl">Inhunt</h1>
              <DoneComponent />
              <p className="text-muted-foreground lg:text-2l" style={{ marginTop: '7px' }}>#Collaboration With Alibaba
              </p>
              <h1 className="scroll-m-20 text-2l text-primary" style={{ marginTop: '2px' }}>
                InHunt is an app designed specifically for online novel authors, serving as an inspiration capturing and organizing assistant.
              </h1>
              <Button sclassName="inhuntButton" onClick={() => handleClick(InHunt)} style={{ marginTop: '20px' }}>Click to see more</Button>
            </div>
          </section>

          {/* eno */}
          <section className="px-14 gap-8 flex-col items-center py-10">
            <div className="Container">
              <AspectRatio ratio={4 / 3} className=" w-30">
                <Image
                  //src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                  src="./eno.png"
                  alt="Photo by Drew Beamer"
                  fill
                  className="rounded-md object-contain"
                />
              </AspectRatio>
            </div>
            <div className="Container flex-col gap-10 items-left">

              <h1 className="scroll-m-20 text-2xl font-bold  lg:text-3xl">Eno</h1>
              <DoneComponent />
              <p className="text-muted-foreground lg:text-2l" style={{ marginTop: '7px' }}>#Collaboration With Alibaba
              </p>
              <h1 className="scroll-m-20 text-2l text-primary" style={{ marginTop: '2px' }}>
                An app for gen-z mental problems.
              </h1>
              <Button variant="secondary" style={{ marginTop: '20px' }}>still working...</Button>
            </div>
          </section>

          <section className="py-10 px-14 gap-2 flex items-center">
            <div style={{ width: 200 + 'px', }}>
              <AspectRatio ratio={4 / 3} className=" w-30" >
                <Image
                  //src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                  src="./head.png"
                  alt="Photo by Drew Beamer"
                  width={300}
                  height={200}
                  className="rounded-md object-contain"
                />
              </AspectRatio>
            </div>
            <div className="py-24 px-10 flex flex-col item-center text-left gap-3">
              <h1 className="scroll-m-20 text-4xl font-extrabold  lg:text-2xl">Hi,I am Erana.</h1>
              <p className="text-2x1 text-muted-foreground">
                Since I am a non-binary, you can also call me Eran.
                <br />
                I am a student at Tsinghua University, studying Information Art and Design.
                <br />
                I got into design and coding because I wanted to create tools that actually make life easier.
                Over time, this has also become a way for my self-expression.
                <br />
                Outside of design, I love drinking tea, camping, and writing.
                <br />
                Oolong tea and Earl Grey are my go-to favorites.
              </p>
            </div>

          </section>
        </div>) : (
        <div style={{ color: 'rgb(3, 8, 22)', backgroundColor: 'babyblue' }}>
          {/* 返回键 */}
          <header className="flex justify-between items-center"
            style={{
              position: 'fixed', border: '0.4px solid #dddddd',
              margin: 0, padding: 0, zIndex: 1000, borderRadius: '50%', padding: '10px',
              backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255, 255, 255, 0.5)'
            }}>
            <Image src="./back.png" onClick={() => setShowReview(false)} alt="Logo" width={40} height={40} />
          </header>
          {selectedComponent === 'FileMind' ? <FileMind /> : <InHunt />}
        </div>
      )}
    </main>
  );
}
