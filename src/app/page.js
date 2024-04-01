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

  const resumePdfUrl = "./resume_CN.pdf";



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

              <Button variant="outline" onClick={() => window.open(resumePdfUrl, '_blank')}>Resume</Button>
              {/*  <Button>About</Button> */}
              <button onClick={toLinkedIn} className="flex items-center gap-2">
                <FaLinkedin size={20} />
              </button>
            </div>
          </header>

          {/* my info */}
          <section className="max-w-md mx-auto my-10 flex-col justify-between items-center">
                  <h1 className="text-4xl font-extrabold" style={{ marginTop: '100px' }}>Erana(Yuran) Su</h1>
                  <p className="text-2x1 text-muted-foreground">Product Designer@THU IAD</p>
          </section>
          


          {/* filemind */}
          <div className="max-w-md mx-auto bg-white overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div className="md:shrink-0">
                <img className="h-48 w-full object-cover md:h-full md:w-48" src="./filemind.png" alt="" />
              </div>
              <div class="p-8">
                <a href="#" class="block mt-1 leading-tight text-2xl font-bold text-black">FileMind</a>
                <InProgressComponent />
                <p className="text-muted-foreground text-slate-500" style={{ marginTop: '7px' }}>#Landing Project
                </p>
                <p onClick={toPIgroupWebsite} className="text-muted-foreground text-slate-500 hover:underline" style={{ cursor: 'pointer' }}>
                  #Tsinghua University Pervasive HCI Group</p>
                <p class="mt-2 text-slate-500 text-primary">
                  A Data Management Assistant tailored for financial systems,
                  streamlining the organization and control of data tables for enhanced efficiency.
                </p>
                <Button style={{ marginTop: '20px' }} onClick={() => handleClick('FileMind')}>Click to see more</Button>
              </div>
            </div>
          </div>


          {/* inhunt */}
          <div className="max-w-md mx-auto bg-white overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div className="md:shrink-0">
                <img className="h-48 w-full object-cover md:h-full md:w-48" src="./inhunt1.png" alt="" />
              </div>
              <div class="p-8">
                <a class="block mt-1 leading-tight text-2xl font-bold text-black">InHunt</a>
                <DoneComponent />
                <p className="text-muted-foreground text-slate-500" style={{ marginTop: '7px' }}>#Collaboration With Alibaba
                </p>
                <p className="text-muted-foreground text-slate-500" style={{ marginTop: '7px' }}>#中文
                </p>
                <p class="mt-2 text-slate-500 text-primary">
                  InHunt is an app designed specifically for online novel authors, serving as an inspiration capturing and organizing assistant.
                </p>
                <Button style={{ marginTop: '20px' }} onClick={() => handleClick('InHunt')}>Click to see more</Button>
              </div>
            </div>
          </div>


          {/* eno */}
          <div className="max-w-md mx-auto bg-white overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div className="md:shrink-0">
                <img className="h-48 w-full object-cover md:h-full md:w-48" src="./eno1.png" alt="" />
              </div>
              <div class="p-8">
                <a class="block mt-1 leading-tight text-2xl font-bold text-black">Eno</a>
                <DoneComponent />
                <p class="mt-2 text-slate-500 text-primary">
                  An app for gen-z mental problems.
                </p>
                <Button variant="secondary" style={{ marginTop: '20px' }}>still working...</Button>
              </div>
            </div>
          </div>

          {/* self introduction */}
          <div className="max-w-lg mx-auto bg-white overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div className="md:shrink-0">
              <img className="h-48 w-full object-cover md:h-full md:w-48" src="./me1.jpg" alt="my photo" />
              </div>
              <div class="p-8">
                <a class="block mt-1 leading-tight text-black scroll-m-20 font-extrabold text-2xl">Hi,I am Erana.</a>
                <p class="mt-2 text-slate-500 text-2x1 text-muted-foreground">
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
            </div>
          </div>
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
