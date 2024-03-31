'use client'

import Image from "next/image"
//import { useNavigation } from "next/navigation"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { FaLinkedin } from 'react-icons/fa';
import { AspectRatioDemo } from "@/components/apic"
import { MainPage } from "@/components/mainpage"
import './style.css';
import { AspectRatio } from "@/components/ui/aspect-ratio"
import InProgressComponent from "@/components/inprogress"
import DoneComponent from "@/components/done"



export default function Home() {
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

    
    <main>
      <MainPage />
    </main>

    
    
  );
}
