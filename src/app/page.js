'use client'

import * as React from "react"



//framer motion
import { motion } from "framer-motion"

import Image from "next/image"
//import { useNavigation } from "next/navigation"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"


import { FaLinkedin } from 'react-icons/fa';
import './style.css';



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


  const projects = [
    { title: 'Filemind', content: 'A trustworthy AI(RAG) application design based on my HCI research and technology in Tsinghua PI Lab.', imageUrl: "./filemind-1_1.png" , clickFunc: () => router.push('/filemind')},
    { title: 'NEO Desktop Interface',content: 'Designed for the Brain-Computer Interface (BCI) Product of Neuracle', imageUrl: "./neuracle-1_1.png" },
    { title: 'JellyBreathe', content: 'Take a break from work. A design for mild anxiety people.', imageUrl: "./jellybreathe-1_1.png"},
    /* { title: 'Fluidity', content: 'Smart spatial design for regulating visitors Flow between tourist attractions and residential areas.', imageUrl: "./fluidity-1_1.png"}, */
    { title: 'Im Jacks breathing soul', content: 'Exploration of Exhibition Design for Species Conservation.', imageUrl: "./jack/cover-1.png",clickFunc: () => router.push('/imjacksbreathingsoul')},
    { title: 'Huuu', content: 'Designing gloves that are more suitable for women in the workplace to alleviate cold hands and feet issues.', imageUrl: "./huuu-1_1.png"},
    { title: 'the Melting Boundaries', content: 'Speculative Design based on social media data + genAI.', imageUrl: "./tmb-1_1.png", },

  ];

  const experiments = [
    { title: 'The Meme of Unbearableness', content: 'A piece of meat wants to become a rectangle, this is the five stages that he experienced.', imageUrl: "./3_1/meat-3_1.png"  },
    { title: 'Illustrations', content: 'I draw illustrations for fun.', imageUrl: "./3_1/illustrations-3_1.png"  },

    { title: 'Taxi Dance Hall', content: 'VR digital city installation based on a sociological term.', imageUrl: "./3_1/tdh-3_1.png"  },
    { title: 'Slow Homecoming', content: 'Will future residents of Mars be curious about what water is?', imageUrl: "./3_1/slhkm-3_1.png"  },

    { title: 'The Repulsive Flowers', content: 'p5.js practice.', imageUrl: "./3_1/trf-3_1.png"  },
    { title: 'Roommate Clash', content: 'Compete with your roommate through in-dorm excercise game.', imageUrl: "./3_1/roommate-clash-3_1.png"  },

    { title: 'I hereby...', content: 'Train my own stable diffusion model based on my own illustrations.', imageUrl: "./3_1/dedicate-3_1.png"  },
    { title: 'Haunting the Crocodile', content: 'Blender + TouchDesigner practice.', imageUrl: "./3_1/htc-3_1.png"  },

    { title: 'Elephant talk', content: 'Animations made with After Effects.', imageUrl: "./3_1/elephant-talk-3_1.png"  },
    { title: 'The Lantern Riddle', content: 'Happy Mid-Autumn Festival!', imageUrl: "./3_1/lantern-3_1.png"  },
  ];


  return (

    <main className="py-2">
      
        <div className="mainpage">

          {/* header */}
          <header className="flex justify-between items-center border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/30"
            style={{
              position: 'fixed', border: '0.4px solid #dddddd',
              width: '90%', marginLeft: '5%', marginRight: '5%', marginTop: '-40px', padding: 10, paddingLeft: 40, paddingRight: 40, zIndex: 1000, borderRadius: '10px',
              /* backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255, 255, 255, 0.5)' */
            }}>
            <div className="flex items-center text-slate-700 font-semibold">
              {/* <Image
                src="./head.png" alt="Logo" width={60} height={60} /> */}
                <p>eranasu</p>
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
          <section className="flex my-0 flex-col justify-between items-center" style={{ marginTop: '50px', marginBottom: '50px',padding: '50px 0'  }}>
            <div>
            <h1 className="text-6xl font-extrabold mb-2" style={{ marginTop: '100px' }}>Erana(Yuran) Su</h1>
            <p className="text-2x1 text-muted-foreground">Product Designer@THU IAD @Tencent</p>
            <div className="flex gap-2 items-center mt-2">
            <motion.div className="h-4 w-4 bg-slate-800"></motion.div>
            <p className="text-sm text-muted-foreground">I focus on space and perception within the digital realm.</p>
            </div>
            </div>

          </section>

          {/* Projects */}
          <div className="flex items-center justify-center mb-4 text-base text-slate-900 font-semibold">
            Projects
          </div>
          <div className="flex items-center justify-center min-h-screen ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {projects.map((project, index) => (
                <div key={index}>
                  <motion.div
                    key={index}
                    className="box w-70 h-70 bg-slate-200"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    style={{ cursor: 'pointer' }}
                    onClick={project.clickFunc}
                  >
                    <img className="flex items-center justify-center bg-cover" src={project.imageUrl} alt="" />
                  </motion.div>
                  <p className="text-slate-900 mt-2 ml-2 text-xs">
                    {project.title}
                  </p>
                  <p className="text-muted-foreground ml-2 mr-2 mb-8 text-xs">
                    {project.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Experiments */}
          <div className="flex items-center justify-center mb-4 mt-10 text-base text-slate-900 font-semibold">
            Experiments
          </div>
          <div className="flex items-center justify-center min-h-screen ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2">
              {experiments.map((experiment, index) => (
                <div key={index}>
                  <motion.div
                    key={index}
                    className="box w-90 h-30 bg-slate-200"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    style={{ cursor: 'pointer' }}
                    
                  >
                    <img className="flex items-center justify-center bg-cover" src={experiment.imageUrl} alt="" />
                  </motion.div>
                  <p className="text-slate-900 mt-2 ml-2 text-xs">
                    {experiment.title}
                  </p>
                  <p className="text-muted-foreground ml-2 mr-2 mb-8 text-xs">
                    {experiment.content}
                  </p>
                </div>
              ))}
            </div>
          </div>


          
        </div>
    </main>
  );
}
