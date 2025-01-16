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

import { MoveLeftIcon, AlignLeftIcon, ArrowLeftIcon } from "lucide-react";


import { FaLinkedin } from 'react-icons/fa';
import { AspectRatioDemo } from "@/components/apic"
import { AspectRatio } from "../components/ui/aspect-ratio"
import InProgressComponent from "@/components/inprogress"


export default function Jack() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  


  return (

    <main className="py-0 bg-black text-stone-50 leading-loose">
      {/* 返回键 */}
      <header className="flex justify-between items-center m-2 mt-12 ml-12 p-4 border-stone-200 bg-stone-600/50"
        style={{
          position: 'fixed',
          zIndex: 1000, borderRadius: '50%',
          backdropFilter: 'blur(8px)', cursor: 'pointer',
        }}>
        <ArrowLeftIcon width={20} height={20} className="text-yellow-200" onClick={handleBack} />
      </header>


      {/* page */}
      {/* General Image */}
      <Image src="./jack/cover-2.png" width={600} height={600} className="w-full h-full" />

      
      <section className="flex flex-col text-left gap-3">

        {/* 1-a */}
        <div className="flex justify-center pt-32 pb-20" style={{}}>
          <div className="px-4 gap-2 flex flex-col justify-center items-center " style={{ width: '90%' }}>
            <h1 className="text-stone-200 mb-2 text-lg font-regular">
            01  背景与问题引入 / Project Background</h1>
            <h1 className="text-stone-200 mb-20 text-md font-regular">a.动保科普展览现状调研</h1>

            <Image src="./jack/pic1.png" width={600} height={600} layout="intrinsic" className="mx-auto mb-10"  />
            <p className="mt-2 mb-8 text-sm text-stone-100/70 leading-loose">
            尽管环境保护和物种多样性的重要性早已被广泛宣传，真正能在情感上与这一议题产生深刻共鸣的人却寥寥无几。本项目意在寻找一种新的科普方式，让科普变得更有吸引力。<br />
            传统的科普方式往往通过直接呈现动物的外貌特征——如 Es Devlin 的‘Come Home Again’，以雕塑形式展示伦敦的濒危物种（图1）；或通过视觉冲击力吸引关注，比如 WWF 展览中展示的震撼对比图（图2），反映生态破坏对动物生活的直接影响。这种表达手法常见，似乎已难以再为大众带来新鲜感。<br />
            </p>
            <h1 className="text-stone-200 mb-20 text-md font-regular">b.选择动物呼吸作为新的主体语言</h1>
            <Image src="./jack/pic2.png" width={350} height={600} layout="intrinsic" className="mx-auto mb-10"  />
            <p className="mt-2 mb-8 text-sm text-stone-100/70 leading-loose">
            我选择了呼吸特征，用以替代外貌特征作为新的切入点。
            呼吸作为一种物种的特征，有以下两个传达上的优点，让我选择他们：一是亲密性（Intimacy），二是差异性（Otherness）：
            具体而言，相较外貌，呼吸是一种更为亲密的生命表达——只有当人与其他生物足够接近时，才能真正感受到它们的呼吸。
            此外，物种间呼吸频率的差异很大，一如物种间形貌的差异：人类每分钟15次，蜂鸟而可高达每分钟250次（图3）。
            这种明显的差异性为项目本身内容传达的丰富度提供了可能性。<br />
            因而，本项目意在提炼出濒危物种的呼吸特征，通过这一独特视角，
            引导观众以全新的方式理解动物保护的重要性。</p>
            <Image src="./jack/pic3.png" width={400} height={600} layout="intrinsic" className="mx-auto mb-10"  />
            
          </div>
        </div>

        {/* 2 */}
        <div className="flex justify-center pb-20">
          <div className="px-4 gap-2 flex flex-col justify-center items-center " style={{ width: '90%' }}>
            <h1 className="text-stone-200 mb-20 text-lg font-regular">
            02  概念阐释与设计定位 / Concept interpretation</h1>
            <p className="w-full mt-2 mb-8 text-sm text-stone-100/70 leading-loose">
            根据前文的背景构思，在项目的主体形态上，我们主要有如下三个设计：</p>
            <Image src="./jack/pic4.png" width={600} height={600} layout="intrinsic" className="mx-auto mb-10" />
            <p className="mt-2 mb-8 text-sm text-stone-100/70 leading-loose">
            而在展览环境上，我们希望一个自由、半开放式的、具有阶梯化布局的空间，观众可以自由穿梭、驻足观察，与装置建立多角度的互动关系。
            图4便是一个理想的环境参考。<br />
            </p>
            <Image src="./jack/pic5.png" width={400} height={600} layout="intrinsic" className="mx-auto mb-10" />

          </div>
        </div>

        {/* 3 */}
        <div className="flex justify-center pb-20">
          <div className="px-4 gap-2 flex flex-col justify-center items-center " style={{ width: '90%' }}>
            <h1 className="text-stone-200 mb-20 text-lg font-regular">
              03  场地与布局设计 / Site and layout design</h1>
            <Image src="./jack/pic6.png" width={1200} height={600} layout="intrinsic" className="w-full mb-10" />
            <p className="mt-2 mb-8 text-sm text-stone-100/70 leading-loose">
            本项目的空间设计通过阶梯式布局来呈现物种的多样性与生态差异，大致的空间结构安排如图所示。每个阶梯上，放置某一大类特定的物种呼吸装置；随着观展的层次递进，观众可以更加直观地感受到节奏的宏观变化，
            增强整个展览的整体印象的同时，体现自然界生命形式的差异与生态特性。<br />
              排列逻辑的设计如下所示。<br /><br />
              · 第一层（底层）:<br />
              <b>代表大型陆地哺乳动物。</b><br />这些物种通常拥有较低的呼吸频率，象征稳重与悠长的生命节奏，展现出一种平缓而持久的生命力。<br />
              示例： 大象、牛、马等大型哺乳动物。<br />
              <br />
              · 第二层:<br />
              <b>代表中型哺乳动物与小型哺乳动物。</b><br />这些物种呼吸频率较底层稍快，体现灵活性与活力，适应力和反应速度相对较高。<br />
              示例： 狗、羊、山羊、猫、兔子、老鼠、人类等。<br />
              <br />
              · 第三层:<br />
              <b>代表飞行动物（鸟类）。</b><br />这些物种的呼吸频率介于哺乳动物之间，表现出轻盈与自由的感觉，呼吸的快速变化体现了鸟类独特的生命特征。<br />
              示例： 鸽子等鸟类。<br />
              <br />
              · 第四层（顶层）:<br />
              <b>代表极限呼吸频率的物种（如啮齿类、微小动物）。</b><br />这些物种拥有最快的呼吸频率，体现了生命的高能与脆弱性。<br />
              示例： 仓鼠、鼹鼠、蝙蝠、昆虫等。<br />
              <br />
            </p>
          </div>
        </div>

        {/* 4 */}
        <div className="flex justify-center pb-20">
          <div className="px-4 gap-2 flex flex-col justify-center items-center " style={{ width: '90%' }}>
            <h1 className="text-stone-200 mb-20 text-lg font-regular">
            04  技术可行性和材料选择 / Technology Pipeline and Material Testing</h1>
            <Image src="./jack/pic8.png" width={1200} height={600} layout="intrinsic" className="w-full mb-10" />
            <p className="mt-2 mb-8 text-sm text-stone-100/70 leading-loose">
            本项目的设计方案基于信息设计2课程中的硅胶气囊充气性测试的前期成果，旨在进一步扩大项目规模并进行更全面的验证。
            在之前的测试中，硅胶气囊的充气行为已被初步确认，且能够有效模拟不同物种的呼吸节奏。
            因此，项目在原材料、制造工艺以及充气控制系统方面都有了较好的技术积累。<br />
            为了确保可行性，预计在本项目中将使用更为精细的气囊制作工艺，结合精确的充气系统，确保每个气囊能够按照不同物种的呼吸频率进行充气与放气。对于大型项目的实施，
            将通过模块化设计，分层控制各部分气囊的充气与放气，确保每个物种的呼吸行为能准确体现。<br />
            </p>
            <Image src="./jack/pic9.png" width={400} height={600} layout="intrinsic" className="wx-auto mb-10" />

          </div>
        </div>

        {/* 5 */}
        <div className="flex justify-center pb-20">
          <div className="px-4 gap-2 flex flex-col justify-center items-center " style={{ width: '90%' }}>
            <h1 className="text-stone-200 mb-20 text-lg font-regular">
            05  叙事与展览词设计 / Narrative and exhibition word design</h1>
            
            <p className="mt-2 mb-8 text-sm text-stone-100/70 leading-loose">
            如前所述，本项目旨在引发公众对动物保护和物种多样性问题的关注，是一个以解决问题为导向的作品。<br />
            为此，展览词的设置至关重要。然而，本作品希望通过特别设计的展览词，使其成为艺术观展体验的重要组成部分。<br />
            具体而言，当观众进入展览空间时，映入眼帘的是一系列大小不一的硅胶装置，每个装置以独特的频率“呼吸”。这些装置初看上去或许显得抽象甚至难以理解。然而，当观众靠近后，
            精心设计的展览词会逐步揭示装置背后的故事。采用这种叙事方式，意在营造一种探索与揭秘的体验。<br />

            </p>
            <Image src="./jack/pic7.png" width={600} height={600} layout="intrinsic" className="wx-auto mb-10" />
            <p className="mt-2 mb-8 text-sm text-stone-100/70 leading-loose">

            例如，在上图所示的案例中，一个高度约50-60厘米的硅胶球体以每分钟40次的频率“呼吸”。
            其形态和节奏可能让人联想到某些小型哺乳动物或鸟类。<br />
            只有走近观察，观众才能发现，
            这个装置实际上象征的是鱼鹰/美洲鹗（Osprey），一种以优雅与适应力著称的物种:<br />
            </p>
            <Image src="./jack/pic10.png" width={200} height={600} layout="intrinsic" className="wx-auto m-16" />
            <p className="mt-2 mb-8 text-sm text-stone-100/70 leading-loose">
            展览词进一步介绍了美洲鹗的生活习性、
            栖息地及其保护现状，使观众能够在视觉、听觉和情感上对其形成更深刻的理解。<br />
            通过这种设计，展览鼓励观众靠得更近——不仅是身体上的接近，也是情感上的共鸣，
            在抽象与具体之间搭建了一座理解生命多样性的桥梁。
            </p>
          </div>
        </div>

        {/* 6 */}
        <div className="flex justify-center pb-0">
          <div className="px-4 gap-2 flex flex-col justify-center items-center " style={{ width: '90%' }}>
            <h1 className="text-stone-200 mb-20 text-lg font-regular">
            06 结语 / Conclusion
            </h1>
            
            <p className="mt-2 mb-8 text-sm text-stone-100/70 leading-loose">
            通过以“呼吸”作为核心语言，本项目从生物学特性与情感共鸣的双重维度，尝试探索新的濒危物种科普的表达方式
            。本作品尝试突破传统以外貌为核心的叙事局限，意在寻找一种崭新的引人深思的观展体验。<br />
            未来，希望这类以情感共鸣为基础的设计能够更多地应用到环境保护领域，从而唤起更多人对地球生态系统的关怀与行动。
            </p>
           
          </div>
        </div>
        <Image src="./jack/endpic.png" width={400} height={600} layout="intrinsic" className="w-full mb-10" />

        


      </section>


    </main>
  );
}
