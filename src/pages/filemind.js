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

  const toHome = () => {
    router.push('/');
  }

  const CircularCard = ({ children }) => (
    <div className="circular-card" style={{ width: '230px', height: '230px', backgroundColor: 'rgba(47, 114, 241, .1)', borderRadius: '50%', margin: '-10px' }}>
      <CardHeader>
        <CardDescription style={{ marginTop: '28%', fontSize: '20px', marginLeft: '20px' }}>
          {children}
        </CardDescription>
      </CardHeader>
    </div>
  );

  const PointCard = ({children}) => (
    <Card style={{width:'180px',marginBottom:'20px'}}>
              <CardHeader>
                <CardTitle className="flex justify-center">
                {children}
                </CardTitle>
              </CardHeader>
            </Card>
  )

  const PainpointCard = ({ children }) => (
    <div className="painpoint-card">
      {children}
    </div>
  );



  return (

    <main className="px-24 py-2" style={{color:'rgb(3, 8, 22)',backgroundColor:'babyblue'}}>
      {/* 返回键 */}
      <header className="flex justify-between items-center"
        style={{
          position: 'fixed', border: '0.4px solid #dddddd',
          margin: 0, padding: 0, zIndex: 1000, borderRadius: '50%', padding: '10px',
          backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255, 255, 255, 0.5)'
        }}>
        <img src="/back.png" className="" onClick={toHome} style={{ cursor: "pointer", width: "40px" }}></img>
      </header>

      {/* page */}
      <section className="py-1 px-10 flex flex-col item-center text-left gap-3">
        <h1 className="scroll-m-20 font-extrabold  lg:text-6xl" style={{ marginTop: '80px' }}>
          Filemind</h1>
        <div>

          <div className="flex justify-center item-center gap-6" style={{ marginTop: '20px' }}>
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle>Working Process</CardTitle>
                <CardDescription>Started In November 2023
                  <br />Lasted for 10 Months</CardDescription>
              </CardHeader>
            </Card>
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle>Our Team</CardTitle>
                <CardDescription>5 Developers
                  <br />1 Mentor
                  <br />1 Designer(me)</CardDescription>
              </CardHeader>
            </Card>
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle>My Role As Design Lead</CardTitle>
                <CardDescription>
                  User Research And Interviews
                  <br />Reviewed Relevant Papers
                  <br />Low/high-fidelity Prototypes
                  <br />Frontend Development
                </CardDescription>
              </CardHeader>
            </Card>

          </div>
          <div>
            <div>
              <h1 className="py-10 font-bold  lg:text-4xl" style={{ marginTop: '20px' }}>
                🧐 Project At A Glance</h1>
            </div>
            <div className="flex justify-center item-center gap-6">
              <div className="flex-col gap-3 px-5" style={{ width: "36%", height: "500px", overflow: "scroll" }}>

                {/* context */}
                <h1 className="py-10 font-bold lg:text-2xl">Context</h1>
                <div className="flex justify-center item-center gap-5 py-10" >
                  <Card><img style={{ height: '70px' }} src="/zhongchengxin.png"></img></Card>
                  <Card><img style={{ height: '70px' }} src="/inno.webp"></img></Card>
                </div>
                <p>The finance departments of two collaborating companies associated with our Lab are in need of an efficiency-improving tool from us.
                  <br />We are seeking a solution that can address the goals of both stakeholders:
                  <br />1. Company Management: They aim to reduce manpower expenses in the finance departments.
                  <br />2. Finance Departments: They urgently need software to enhance their own performance.
                </p>

                {/* solution */}
                <h1 className="py-10 font-bold  lg:text-2xl">Solution</h1>
                <p>We have proposed a data and information management software designed for finance professionals.
                  <br />We have designed it with a focus on three key points:Uniformity,Accuracy and Imformativeness.</p>
                <Button>See Full Project Case</Button>

                {/* goal */}
                <h1 className="py-10 font-bold  lg:text-2xl">Goal</h1>
                <p>Full Paper Draft
                  <br />Product Launched
                </p>

                {/* impact */}
                <h1 className="py-10 font-bold  lg:text-2xl">Impact</h1>
                <p>Still Working
                </p>
              </div>

              <div className="py-10" style={{ width: "60%" }}>
                <img src="/filemind1.png"></img>
              </div>
            </div>
          </div>
          <h1 className="py-10 font-bold  lg:text-4xl" style={{ marginTop: '20px' }}>
            📈 A Typical Workflow Of An Accountant</h1>
          <div className="flex">

              <img src="/workflow.png" style={{height:'600px',marginTop:'100px'}}></img>
         
            
            
            

            <div className="px-20">
            <Carousel className="flex-col item-center">
            
            <CarouselContent>
              <CarouselItem>
              <Card style={{height:'190px',margin:'10px',overflow:'scroll'}}>
              <CardHeader style={{color:'rgb(103, 116, 137)'}}>
                <CardTitle style={{fontSize:'20px',color:'rgb(3, 8, 22)'}}>Gathering Information</CardTitle>
                <CardDescription style={{color:'rgb(103, 116, 137)'}}>
                Extract necessary information from electronic or paper contracts and documents. 
                </CardDescription>
                <div className="flex">
                <img style={{height:'50px'}} src="/investment.png"></img>
                <p style={{fontSize:'14px'}}>For accountants in <span style={{ backgroundColor: 'rgba(47, 114, 241,.1)',borderRadius:'0.1rem', 
                padding: '2px 4px' }}>
                investment-oriented companies</span>, 
                  the main task is to collect financial statements of investment targets. 
                </p>
                </div>
                <div className="flex">
                <img style={{height:'40px',margin:'5px'}} src="/production.png"></img>
                <p style={{fontSize:'14px'}}>For accountants in <span style={{ backgroundColor: 'rgba(47, 114, 241,.1)',borderRadius:'0.1rem', 
                padding: '2px 4px' }}>
                  production-oriented companies</span>, 
                  the primary focus is to sift through specific timeframes of 
                  order records or shipment amounts from the company's order software. 
                </p>
                
                </div>{/* 
                <p>This may also include paper-based reimbursement forms from employees </p> */}
              </CardHeader>
              </Card>

              <Card style={{height:'190px',margin:'10px'}}>
              <CardHeader style={{color:'rgb(103, 116, 137)'}}>
                <CardTitle style={{fontSize:'20px',color:'rgb(3, 8, 22)'}}>Organizing And Creating Vouchers & Records</CardTitle>
                <CardDescription>
                In this procedure, extracted information is entered into the bill, and income and expenditure vouchers are created. 
                In most cases, manual filtering and categorization are required.
                </CardDescription>
              </CardHeader>
              </Card>

              <Card style={{height:'190px',margin:'10px'}}>
              <CardHeader style={{color:'rgb(103, 116, 137)'}}>
                <CardTitle style={{fontSize:'20px',color:'rgb(3, 8, 22)'}}>Tax Filing</CardTitle>
                <CardDescription>
                Retrieve corresponding information from the accounts 
                and enter it into the system of the State Administration of Taxation. 
                </CardDescription>
              </CardHeader>
              </Card>

              <Card style={{height:'190px',margin:'10px'}}>
              <CardHeader style={{color:'rgb(103, 116, 137)'}}>
                <CardTitle style={{fontSize:'20px',color:'rgb(3, 8, 22)'}}>Providing support to the company's management</CardTitle>
                <CardDescription>
                Data is extracted from the accounts based on corresponding categories 
                to generate daily, monthly, and other reports, which are then 
                submitted to the management. 
                </CardDescription>
              </CardHeader>
              </Card>
              </CarouselItem>
              <CarouselItem>
              <Card style={{height:'190px',margin:'10px'}}>
              <CardHeader style={{color:'rgb(103, 116, 137)'}}>
                <CardTitle style={{fontSize:'20px',color:'rgb(3, 8, 22)'}}>Gathering Imformation</CardTitle>
                <div className="flex gap-3" style={{color:'rgb(103, 116, 137)',overflow:"scroll"}}>
                  <PainpointCard>
                  "I spend one-third of my working time coordinating these spreadsheets."
                  </PainpointCard>
                  <PainpointCard>
                  "Project names vary, and there are different standards. 
                Some lack standards, making it challenging to control. 
                Where everyone gets their templates from is unknown."
                  </PainpointCard>
                  <PainpointCard>
                  "For instance, the money in short-term investments is considered cash, 
                but in the company's financial statements, it is not categorized under cash and cash equivalents.
                 This might make the cash balance appear lower than it actually is, 
                 which doesn't align with the true situation."
                  </PainpointCard>
                </div>
              </CardHeader>
              </Card>

              <Card style={{height:'190px',margin:'10px'}}>
              <CardHeader style={{color:'rgb(103, 116, 137)'}}>
                <CardTitle style={{fontSize:'20px',color:'rgb(3, 8, 22)'}}>Gather Imformation</CardTitle>
                <CardDescription style={{color:'rgb(103, 116, 137)'}}>
                Extract necessary information from electronic or paper contracts and documents. 
                </CardDescription>
              </CardHeader>
              </Card>

              <Card style={{height:'190px',margin:'10px'}}>
              <CardHeader style={{color:'rgb(103, 116, 137)'}}>
                <CardTitle style={{fontSize:'20px',color:'rgb(3, 8, 22)'}}>Gather Imformation</CardTitle>
                <CardDescription style={{color:'rgb(103, 116, 137)'}}>
                Extract necessary information from electronic or paper contracts and documents. 
                </CardDescription>
              </CardHeader>
              </Card>

              <Card style={{height:'190px',margin:'10px'}}>
              <CardHeader style={{color:'rgb(103, 116, 137)'}}>
                <CardTitle style={{fontSize:'20px',color:'rgb(3, 8, 22)'}}>Gather Imformation</CardTitle>
                <CardDescription style={{color:'rgb(103, 116, 137)'}}>
                Extract necessary information from electronic or paper contracts and documents. 
                </CardDescription>
              </CardHeader>
              </Card>


              </CarouselItem>
              </CarouselContent>

              <CarouselPrevious />
              <CarouselNext />

              

            </Carousel>
            </div>
          </div>

          <h1 className="py-10 font-bold  lg:text-4xl" style={{ marginTop: '20px' }}>
            ✅ From Painpoints To Design Opportunities</h1>


          {/* 痛点 */}
          <div className="flex justify-center item-center gap-10 py-3">
            <Card className="w-[350px]">
              <CardHeader>
                <CardDescription>
                  Lack of uniformity of input/output formats (and ways of describing them)
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="w-[350px]">
            <CardHeader>
                <CardDescription>
                The review process is cumbersome
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="w-[350px]">
            <CardHeader>
                <CardDescription>
                Fragmented workload, 
            dealing with a large number of different documents on a daily basis.
             Difficulty in integrating multiple pieces of information
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          

          <div className="flex justify-center item-center py-3 gap-10">

            <div className="flex-col item-center justify-center">
            <PointCard>UNIFORMITY</PointCard>
            <CircularCard>Integrating Information Input and output</CircularCard>
            </div>
            <div>
            <PointCard>ACCURACY</PointCard>
            <CircularCard><br />Accessible Review Procedures</CircularCard>
            </div>
            <div>
            <PointCard>INFORMATIVENESS</PointCard>
            <CircularCard>Managing large amounts of Imformations</CircularCard>
            </div>
            

          </div>

          <div className="flex justify-center item-center gap-10 py-3">
            <Card className="w-[350px]">
              <CardHeader>
                <CardDescription>
                - Text Recognition and Reading
                <br />- Natural language understanding
                <br />- Integration of multiple and ambiguous information into a single classification format

                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="w-[350px]">
            <CardHeader>
                <CardDescription>
                - Visualization of the entire operation process
                <br />- review options 
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="w-[350px]">
            <CardHeader>
                <CardDescription>
                - Manage documents and data according to procedure and time classification
                </CardDescription>
              </CardHeader>
            </Card>
          </div>


        </div>

      </section>


    </main>
  );
}
