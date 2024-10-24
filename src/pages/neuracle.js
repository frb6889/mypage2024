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
    { title: 'Working Process', content: 'Started In November 2023<br />Lasted for 10 Months<br />Launched Project in Tsinghua PI lab' },
    { title: 'Our Team', content: '4 Developers<br />1 Mentor<br />1 Designer(my role)' },
    /*  { title: 'My Role As Design Lead', content: 'User Research And Interviews<br />Reviewed Relevant Papers<br />Low/high-fidelity Prototypes<br />Frontend Development' },
  */
  ]


  return (

    <main className="py-0 bg-slate-50">
      {/* 返回键 */}
      <header className="flex justify-between items-center m-2 mt-6"
        style={{
          position: 'fixed', border: '0.4px solid #dddddd',
          padding: 0, zIndex: 1000, borderRadius: '50%', padding: '10px',
          backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255, 255, 255, 0.5)', cursor: 'pointer',
          marginLeft: '5%',
        }}>
        <Image src="./back.png" alt="Logo" width={40} height={40} onClick={handleBack} />
      </header>


      {/* page */}
      <div className="">
       
      </div>
      <section className="py-0 px-0 flex flex-col text-left gap-3">

        {/* Title */}
        <div className="flex justify-center item-center mt-12 py-14" style={{}}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 px-4 gap-2 " style={{ width: '90%' }}>
            <div className="w-200">
              <h1 className="text-slate-900 mt-2 mb-0 ml-2 text-5xl font-extrabold">Neo Desktop Interface</h1>
              <p className="text-slate-900 mt-0 ml-2 text-sm opacity-60">Designed for the Brain-Computer Interface (BCI) Product of Neuracle.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2" style={{ borderLeft: '1px solid #000000' }}>
              {sections_sm.map((sec, index) => (
                <div key="index" className=" h-30">
                  <p className="text-slate-900 mt-2 ml-8 text-xs">
                    {sec.title}
                  </p>
                  <p className="text-slate-400 ml-8 text-xs" dangerouslySetInnerHTML={{ __html: sec.content }}>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* General Image */}
        {/* <Image src="./filemind/fm-long2.png" width={600} height={600} className="w-full h-full" /> */}

        {/* Overview */}
        <div className="flex justify-center item-center" style={{}}>
          <div className="px-4 gap-2 item-center justify-between" style={{ width: '90%' }}>
            <h1 className="text-slate-900 mt-2 mb-0 text-2xl font-semibold">Background</h1>
            <p className="text-slate-700 mt-2 mb-8 text-sm">
              
              半侵入式的接口比起直接与人脑相接在现阶段更加安全，但是在一定程度上牺牲精度。<br />
              因此，用户操作对脑力的需求更高，学习成本也相应更高。<br />
              为了弥补这个问题，我们的用户界面需要设计得简单和易于操作，并且教学关卡变得更加重要。<br />
              在采访中,我们对不同的操作形式和难度进行了评估,发现短距离的方向移动操作更加便捷，这就是为什么我们选择圆形交互界面作为解决方案。
              <br />
            </p>
            {/* <Image src="./filemind/fm-photo.jpg" width={400} height={300} className="w-80 h-60 items-center" /> */}
            {/* <p className="text-slate-600 mt-2 mb-8 text-sm">在组会上讨论研发进展</p> */}
            

          </div>
        </div>
        {/* 问题定位 */}
        <div className="flex justify-center item-center" style={{}}>
          <div className="px-4 gap-2 " style={{ width: '90%' }}>
            <h1 className="text-slate-900 mt-2 mb-0 text-2xl font-semibold">用户画像</h1>
            <h1 className="text-slate-900 mb-0 text-xl font-semibold"> 用户需求</h1>
            <p className="text-slate-700 mt-2 mb-8 text-sm ">
            小白相关的信息
            </p>
          
          </div>
        </div>
        {/* 研究 */}
        <div className="flex justify-center item-center" style={{}}>
          <div className="px-4 gap-2 " style={{ width: '90%' }}>
            <h1 className="text-slate-900 mt-2 mb-0 text-2xl font-semibold">解决方案</h1>
            <h1 className="text-slate-900 mb-0 text-2xl font-semibold">...</h1>
            <p className="text-slate-900 mt-2 mb-8 text-sm">
            进入界面：
            </p>
            <img src="./main_connecting.gif" className="px-20" />
            
          </div>
        </div>


      </section>


    </main>
  );
}
