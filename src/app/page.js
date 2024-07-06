'use client'

import * as React from "react"
import { useState } from "react"

//framer motion
import { motion } from "framer-motion"

import Image from "next/image"
//import { useNavigation } from "next/navigation"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

import { FaLinkedin } from 'react-icons/fa';
import { AspectRatioDemo } from "@/components/apic"
import './style.css';
import { AspectRatio } from "@/components/ui/aspect-ratio"
import InProgressComponent from "@/components/inprogress"
import DoneComponent from "@/components/done"

//单独页面
import FileMind from "@/components/filemind"
import InHunt from "@/components/inhunt"
import Eno from "@/components/eno"

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


  const cards = [
    { title: 'Filemind', content: 'Content for card 1', imageUrl: "./filemind-1_1.png", hoverImageUrl: "./lume-1_1.png", clickFunc:() => handleClick('InHunt')  },
    { title: 'Lume', content: 'Content for card 2', imageUrl: "./lume-1_1.png", hoverImageUrl: "./lume-1_1.png" },
    { title: 'Card 3', content: 'Content for card 3', imageUrl: "./jellybreathe-1_1.png", hoverImageUrl: "./lume-1_1.png" },
    { title: 'Card 4', content: 'Content for card 4', imageUrl: "./eno-1_1.png", hoverImageUrl: "./lume-1_1.png" },
    { title: 'Card 5', content: 'Content for card 5', imageUrl: "./inhunt-1_1.png", hoverImageUrl: "./lume-1_1.png", clickFunc:() => handleClick('InHunt')},
    { title: 'Card 5', content: 'Content for card 5', imageUrl: "./tmb-1_1.png", hoverImageUrl: "./lume-1_1.png" },

  ];


  return (

    <main className="py-2">
      {!showReview ? (
        <div className="mainpage">

          {/* header */}
          <header className="flex justify-between items-center"
            style={{
              position: 'fixed', border: '0.4px solid #dddddd',
              width: '90%', marginLeft: '5%', marginRight: '5%', marginTop: '-100px', padding: 10, paddingLeft: 40, paddingRight: 40, zIndex: 1000, borderRadius: '10px',
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
          <section className="max-w-md mx-auto my-10 flex-col justify-between items-center" style={{ marginTop: '50px', marginBottom: '50px' }}>
            <h1 className="text-4xl font-extrabold" style={{ marginTop: '100px' }}>Erana(Yuran) Su</h1>
            <p className="text-2x1 text-muted-foreground">Product Designer@THU IAD @Tencent</p>
          </section>

          <div className="flex items-center justify-center min-h-screen ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {cards.map((card, index) => (

                <motion.div
                  key={index}
                  className="box w-60 h-60 bg-slate-200"
                  whileHover={{ scale: 1.06 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  style={{cursor:'pointer'}}
                  onClick={card.clickFunc}
                  
                >
                <img className="flex items-center justify-center bg-cover" src={card.imageUrl} alt="" />

                </motion.div>

              ))}
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
          {/* 条件渲染selectedComponent对应的组件 */}
          {
            selectedComponent === 'FileMind' ? <FileMind /> :
              selectedComponent === 'InHunt' ? <InHunt /> :
                selectedComponent === 'Eno' ? <Eno /> : null
          }
        </div>
      )}
    </main>
  );
}
