"use client"
import React from 'react'
import ParticlesComponent from "../components/ParticlesComponent";
import { FaMeta } from 'react-icons/fa6';
import { GoInfinity } from "react-icons/go";
import { FaRocket } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { BiSolidShoppingBag } from "react-icons/bi";
import { BiMoneyWithdraw } from "react-icons/bi";
import { FaCalendarAlt } from "react-icons/fa";
import { GoPersonFill } from "react-icons/go";
import Image from "next/image";

const HeroSection = () => {
  
  return (
    <section className="hero-section min-h-screen relative overflow-hidden">
       
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <ParticlesComponent id="hero-particles" />
    </div>

   <div className="flex flex-col justify-between h-full md:h-screen max-w-7xl mx-auto">
   <div className="max-w-7xl mx-auto h-full flex items-center flex-col mt-[124px] justify-center px-3 relative z-10">
      <div className="w-max mx-auto flex flex-col justify-center items-start">
      <h5 className="text-3xl font-bold font-montserrat ml-3">The</h5>
       <h1 className="text-5xl font-bold flex justify-center items-center leading-[100%]">META<GoInfinity  className="text-blue-400 text-7xl meta-icon-animated" />SE</h1>
      <h2 className="text-4xl font-bold font-montserrat">CAN CHANGE <span className="gradient-text block md:inline-block">SOCIETY</span></h2>
      </div>
      
    </div>

   <div className="relative max-w-7xl h-full px-3 z-30 gap-8 md:gap-16 flex flex-col py-8 md:py-0 md:pb-10">
    {/* First cards section  */}
    <div className="flex justify-between items-center w-full max-w-[1200px] mx-auto flex-col md:flex-row gap-8 md:gap-0">
      <div className="w-max gradient-card rounded-xl flex justify-center items-center gap-2 p-2 mr-[100px] md:mr-0 hover:shadow-[inset_0_0_30px_rgba(255,255,255,0.6)] hover:cursor-pointer transition-all duration-300">
        {/* Image  */}
        <div className="w-12 h-12 bg-pink rounded-full border border-white flex justify-center items-center animate-icon">
        <FaRocket  className="text-white text-2xl" />
        </div>
        <div className="flex flex-col justify-center items-start">
          <h6 className="text-sm font-montserrat font-bold">
            Running days
          </h6>
          <h2 className="text-4xl font-bold font-montserrat">6113</h2>
        </div>
      </div>

      <div className="w-max gradient-card rounded-xl flex justify-center items-center gap-2 p-2 ml-[100px] md:ml-0 hover:shadow-[inset_0_0_30px_rgba(255,255,255,0.6)] hover:cursor-pointer transition-all duration-300">
        <div className="flex flex-col justify-center items-end">
          <h6 className="text-sm font-montserrat font-bold">
            Online Visitors
          </h6>
          <h2 className="text-4xl font-bold font-montserrat">6113</h2>
        </div>
        <div className="w-12 h-12 bg-pink rounded-full border border-white flex justify-center items-center animate-icon">
        <BsPeopleFill  className="text-white text-2xl" />
        </div>
        
      </div>
    </div>

    {/* second card section  */}
    <div className="flex justify-between items-center w-full max-w-[1000px] h-full mx-auto flex-col md:flex-row gap-8 md:gap-0">
      <div className="w-max gradient-card rounded-xl flex justify-center items-center gap-2 p-2 mr-[100px] md:mr-0 hover:shadow-[inset_0_0_30px_rgba(255,255,255,0.6)] hover:cursor-pointer transition-all duration-300">
        {/* Image  */}
        <div className="w-12 h-12 bg-pink rounded-full border border-white flex justify-center items-center animate-icon">
        <BiSolidShoppingBag  className="text-white text-2xl" />
        </div>
        <div className="flex flex-col justify-center items-start">
          <h6 className="text-sm font-montserrat font-bold">
            Total Investment
          </h6>
          <h2 className="text-4xl font-bold font-montserrat">$0.00</h2>
        </div>
      </div>

      <div className="w-max gradient-card rounded-xl flex justify-center items-center gap-2 p-2 ml-[100px] md:ml-0 hover:shadow-[inset_0_0_30px_rgba(255,255,255,0.6)] hover:cursor-pointer transition-all duration-300">
        <div className="flex flex-col justify-center items-end">
          <h6 className="text-sm font-montserrat font-bold">
            Total Withdrawals
          </h6>
          <h2 className="text-4xl font-bold font-montserrat">$0.00</h2>
        </div>
        <div className="w-12 h-12 bg-pink rounded-full border border-white flex justify-center items-center animate-icon">
        <BiMoneyWithdraw  className="text-white text-2xl" />
        </div>
        
      </div>
    </div>

    {/*Third card section   */}
    <div className="flex justify-between items-center w-full max-w-[800px] h-full mx-auto flex-col md:flex-row gap-8 md:gap-0">
      <div className="w-max gradient-card rounded-xl flex justify-center items-center gap-2 p-2 mr-[100px] md:mr-0 hover:shadow-[inset_0_0_30px_rgba(255,255,255,0.6)] hover:cursor-pointer transition-all duration-300">
        {/* Image  */}
        <div className="w-12 h-12 bg-pink rounded-full border border-white flex justify-center items-center animate-icon">
        <FaCalendarAlt  className="text-white text-2xl" />
        </div>
        <div className="flex flex-col justify-center items-start">
          <h6 className="text-sm font-montserrat font-bold">
            Project Started
          </h6>
          <h2 className="text-4xl font-bold font-montserrat">Feb 21</h2>
        </div>
      </div>

      <div className="w-max gradient-card rounded-xl flex justify-center items-center gap-2 p-2 ml-[100px] md:ml-0 hover:shadow-[inset_0_0_30px_rgba(255,255,255,0.6)] hover:cursor-pointer transition-all duration-300">
        <div className="flex flex-col justify-center items-end">
          <h6 className="text-sm font-montserrat font-bold">
            Visitors online
          </h6>
          <h2 className="text-4xl font-bold font-montserrat">2</h2>
        </div>
        <div className="w-12 h-12 bg-pink rounded-full border border-white flex justify-center items-center animate-icon">
        <GoPersonFill  className="text-white text-2xl" />
        </div>
        
      </div>
    </div>

   <div className="absolute bottom-0 w-[408px] h-[612px] left-1/2 -translate-x-1/2 -z-10">
      <Image src="/images/vision.png" alt="Vision Image" width={500} height={500} className="w-full h-full object-cover" />
  </div>

   </div>
   </div>
    
  
  </section>
  )
}

export default HeroSection
