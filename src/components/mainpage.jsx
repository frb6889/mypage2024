import React from 'react';

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

const MainPage = () => {
    const router = useRouter();

    const toLinkedIn = () => {
      const linkedInUrl = "https://www.linkedin.com/in/yuran-su-6b96a2281/";
      window.open(linkedInUrl,'_blank');
    };
  
    const toPIgroupWebsite = () => {
      const PIurl = "https://pi.cs.tsinghua.edu.cn/";
      window.open(PIurl,'_blank');
    }
  
    const toFileMind = () => {
      window.open('/filemind','_blank');
    }

  return (
    <main className="px-24 py-2">

      <header className="flex justify-between items-center" 
      style={{position:'fixed',border:'0.4px solid #dddddd',
      width: '80%', margin: 0, padding: 10,paddingLeft:40,paddingRight:40, zIndex: 1000,borderRadius:'10px',
      backdropFilter: 'blur(8px)',backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
        <div className="flex items-center">
          <Image
            src="./head.png" alt="Logo" width={60} height={60} />
        </div>


        <div className="flex gap-8">

          <Button>Resume</Button>
          <Button>About</Button>

          <button onClick={toLinkedIn} className="flex items-center gap-2">
            <FaLinkedin size={20} />
          </button>
        </div>
      </header>

      <section className="py-24 px-10 flex flex-col item-center text-left gap-3">
        <h1 className="scroll-m-20 text-4xl font-extrabold  lg:text-4xl" style={{marginTop:'60px'}}>Erana(Yuran) Su</h1>
        <p className="text-2x1 text-muted-foreground">Product Designer@THU IAD</p>
      </section>

      <section className="px-14 gap-8 flex items-center py-10">
        <div className="Container">
          <AspectRatioDemo />
        </div>
        <div className="Container flex-col gap-10 items-left">
          
          <h1 className="scroll-m-20 text-2xl font-bold  lg:text-3xl">FileMind</h1>
          <InProgressComponent />
          <p className="text-muted-foreground lg:text-2l" style={{ marginTop: '7px' }}>#Landing Project 
          </p>
          <p onClick={toPIgroupWebsite} className="text-muted-foreground lg:text-2l" style ={{cursor:'pointer'}}>#Tsinghua University Pervasive HCI Group</p>
          <h1 className="scroll-m-20 text-2l text-primary" style={{ marginTop: '2px' }}>
            A Data Management Assistant tailored for financial systems, 
            streamlining the organization and control of data tables for enhanced efficiency.
          </h1>
          <Button style={{ marginTop: '20px' }} onClick={toFileMind}>Click to see more</Button>
        </div>
      </section>

      <section className="px-14 gap-8 flex items-center py-10">
        <div className="Container">
        <AspectRatio ratio={4 / 3} className=" w-30">
      <Image
      //src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        src="/inhunt.png"
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
            A Data Management Assistant tailored for financial systems, 
            streamlining the organization and control of data tables for enhanced efficiency.
          </h1>
          <Button style={{ marginTop: '20px' }} onClick={toFileMind}>Click to see more</Button>
        </div>
      </section>

      <section className="px-14 gap-8 flex items-center py-10">
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
            A Data Management Assistant tailored for financial systems, 
            streamlining the organization and control of data tables for enhanced efficiency.
          </h1>
          <Button style={{ marginTop: '20px' }} onClick={toFileMind}>Click to see more</Button>
        </div>
      </section>

      <section className="py-10 px-14 gap-2 flex items-center">
      <div style={{width:200+'px',}}>
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

    </main>
    
  );
};

export default MainPage;
