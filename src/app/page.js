import * as React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaLinkedin } from 'react-icons/fa';
import { useRouter } from "next/router";
import { AspectRatioDemo } from "@/components/apic";
import './style.css';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import InProgressComponent from "@/components/inprogress";
import DoneComponent from "@/components/done";
import FileMind from "@/components/filemind";
import InHunt from "@/components/inhunt";

export default function Home() {
  const router = useRouter();
  const [showReview, setShowReview] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as per your design
    }
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toLinkedIn = () => {
    const linkedInUrl = "https://www.linkedin.com/in/yuran-su-6b96a2281/";
    window.open(linkedInUrl, '_blank');
  };

  const toPIgroupWebsite = () => {
    const PIurl = "https://pi.cs.tsinghua.edu.cn/";
    window.open(PIurl, '_blank');
  }

  const handleClick = (component) => {
    setShowReview(true);
    setSelectedComponent(component);
  };

  return (
    <main className="px-2 md:px-24 py-2">
      {!showReview ? (
        <div className="mainpage">
          <header className="flex justify-between items-center md:px-24"
            style={{
              position: 'fixed', border: '0.4px solid #dddddd',
              width: '100%', margin: 0, padding: 10, zIndex: 1000, borderRadius: '10px',
              backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255, 255, 255, 0.5)'
            }}>
            <div className="flex items-center">
              <Image
                src="./head.png" alt="Logo" width={60} height={60} />
            </div>
            <div className="flex gap-8">
              <button onClick={toLinkedIn} className="flex items-center gap-2">
                <FaLinkedin size={20} />
              </button>
            </div>
          </header>

          <section className="py-24 px-10 flex flex-col item-center text-left gap-3">
            <h1 className="scroll-m-20 text-4xl font-extrabold md:text-4xl" style={{ marginTop: '60px' }}>Erana(Yuran) Su</h1>
            <p className="text-2xl text-muted-foreground">Product Designer@THU IAD</p>
          </section>

          <section className="px-14 gap-8 flex flex-col md:flex-row items-center py-10">
            {/* Content for FileMind */}
          </section>

          <section className="px-14 gap-8 flex flex-col md:flex-row items-center py-10">
            {/* Content for Inhunt */}
          </section>

          <section className="px-14 gap-8 flex flex-col md:flex-row items-center py-10">
            {/* Content for Eno */}
          </section>

          <section className="py-10 px-14 gap-2 flex items-center">
            {/* About me section */}
          </section>
        </div>
      ) : (
        <div style={{ color: 'rgb(3, 8, 22)', backgroundColor: 'babyblue' }}>
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
