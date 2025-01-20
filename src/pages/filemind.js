'use client'

import * as React from "react"
import '../app/style.css';
import 'tailwindcss/tailwind.css';
import Image from "next/image"
import { useRouter } from "next/navigation"
import ReturnButton from "@/components/return_button";

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

    <main className="py-0">
      {/* 返回键 */}
      <ReturnButton handleBack={handleBack} iconColor='text-slate-900' borderColor='border-slate-900' bgColor='bg-slate-200/50'/>



      {/* page */}
      <div className="">
        {/* <div className="grid grid-cols-1">
        <img className="flex items-center justify-center bg-cover" src="./filemind/filemind-long.png" alt="" />

        </div> */}
      </div>
      <section className="py-0 px-0 flex flex-col text-left gap-3">

        {/* Title */}
        <div className="flex justify-center item-center mt-12 py-14" style={{}}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 px-4 gap-2 " style={{ width: '90%' }}>
            <div className="w-200">
              <h1 className="text-slate-900 mt-2 mb-0 ml-2 text-5xl font-extrabold">Filemind.ai</h1>
              <p className="text-slate-900 mt-0 ml-2 text-sm">Settling mass documents with a<br /> transparent and explainable RAG AI system.</p>
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
        <Image src="./filemind/fm-long2.png" width={600} height={600} className="w-full h-full" />

        {/* Overview */}
        <div className="flex justify-center item-center" style={{}}>
          <div className="px-4 gap-2 item-center justify-between" style={{ width: '90%' }}>
            <h1 className="text-slate-900 mt-2 mb-0 text-2xl font-semibold">Background</h1>
            <p className="text-slate-700 mt-2 mb-8 text-sm">
              Filemind源自我和我来自清华Pervasive HCI Lab的合作者们的业务需求。我们将之发展成了独立的项目，并且进行了界面设计方式的效用研究。<br />
              我们的目标是设计一个更实用的检索增强AI的工具帮助用户更快捷方便地应对大量文件信息。<br />
              我在2023年11月加入这个团队，当时我们刚刚接到来自CCXI等公司的需求，完成这项任务。我从零开始承担了该项目的用户研究以及界面设计工作；<br />
              并在后期协调开发人员进行项目落地，在前端上做了工作。<br />
              全部设计功能在2024年5月开发完毕，并邀请文书人员参与测试。<br />
            </p>
            <Image src="./filemind/fm-photo.jpg" width={400} height={300} className="w-80 h-60 items-center" />
            <p className="text-slate-600 mt-2 mb-8 text-sm">在组会上讨论研发进展</p>
            <p className="text-slate-700 mt-2 mb-8 text-sm">
              我们设计了许多帮助用户快速地提炼信息的feature。我们称之为three P system: Purpose,Process and Performance.
              【这里需要一张大图来强调3P】</p>

          </div>
        </div>
        {/* 问题定位 */}
        <div className="flex justify-center item-center" style={{}}>
          <div className="px-4 gap-2 " style={{ width: '90%' }}>
            <h1 className="text-slate-900 mt-2 mb-0 text-2xl font-semibold">Problem</h1>
            <h1 className="text-slate-900 mb-0 text-xl font-semibold">文书工作人员发现自己疲于处理和提炼大量的文字信息这些机械性工作。</h1>
            <p className="text-slate-700 mt-2 mb-8 text-sm ">
              
              我们在23.11月-24.1跟进采访了校内校外12名文职工作者，其中既有大学教授又有专业的财务工作者。
              除了那些经年工作已经形成了自己处理机械性工作的典型路径的senior公司文员，剩下90%的受访者都表达了自己对提效机械性文书工作的追求。<br />
              【这里需要人物图3张】<br />
              公司文职人员：对其业务需求文件的时候，我需要快速**locate到和我有关的位置**。<br />
              财务人员：我需要处理大量的重复性表格，并**反复检查以保证他们的准确性**。<br />
              学校教授学生：在做学术研究前期调研工作的时候，我需要大量阅读论文，提炼其中**与我的研究有关**的论点。
            </p>
          
          </div>
        </div>
        {/* 研究 */}
        <div className="flex justify-center item-center" style={{}}>
          <div className="px-4 gap-2 " style={{ width: '90%' }}>
            <h1 className="text-slate-900 mt-2 mb-0 text-2xl font-semibold">Research</h1>
            <h1 className="text-slate-900 mb-0 text-2xl font-semibold">...</h1>
            <p className="text-slate-900 mt-2 mb-8 text-sm">
            Semi-structure Interviews：前文已经提到，23.11月-24.1 12人。我们咨询这些人借助工具去整理文件的意愿<br />
            Contextual Inquiry：15人。在第一轮开发完成(2024.5)之后我们邀请了校内外的研究员、财务人员来试用我们的平台，观察他们的行为<br />
            think aloud:2024.6.我们邀请了一些校内的文职人员试用我们的系统。并说出自己的使用体验。<br />
            【这里可以放三张图来说明】
            </p>
            <p className="text-slate-900 mt-2 mb-8 text-sm">
            After synthesizing information we gathered from surveys and interviews, we identified 3 top reasons that further guided us in defining the design opportunity:
            【讲设计机会三张图】<br />
            1. 在一个项目初起，寻找相关资料的过程很麻烦，耽误时间<br />
            2. 用户疲于处理大量重复、机械性的文件信息<br />
            3. 对于文档中与自身研究相关性较强的内容需要有深入的理解和阅读<br />
            </p>
            <h1 className="text-slate-900 mb-0 text-2xl font-semibold">繁琐的大量文件管理过程如果被自动化，可以大大提升文职人员的工作效率。如何自动化？</h1>
            <p className="text-slate-900 mt-2 mb-8 text-sm">
              所以我们迅速locate了一个解决方案：</p>
            <h1 className="text-slate-900 mb-0 text-xl font-semibold">
              我们确定了我们的设计方针：构建一个可信的，全链路的AI文件管理工具。利用AI将文件管理自动化，与此同时留足“链路”，让用户可以快速根据几个关键词定位文件内容和位置。
            </h1>
              <p className="text-slate-900 mt-2 mb-8 text-sm">
            我们发现目前发展迅速的AI工具可以作为解决<br />
            【讲利用AI可以解决的问题】<br />
            我们首先确定要展示-透明链路<br /><br />
            
            1.三个展示策略帮助用户确认AI对文件理解的正确性<br />
            2.一套便捷的链路让用户直接根据AI返回的结果定位源文件中对应的位置<br />
            【竞品的思路：因为无法直接在软件内打开原文件，我通常让ai概括文档内容后，复制感兴趣的关键词回到原文件搜索关键词；或者直接让AI告诉我对应的内容在几行几列。】
            3.对原文件内容的深入解释
            </p>
          </div>
        </div>


      </section>


    </main>
  );
}
