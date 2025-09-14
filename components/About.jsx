"use client";
import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import Image from "next/image";

const About = () => {
  return (
    <section className="py-20 relative z-20" style={{
        background: 'linear-gradient(135deg, #090e50 0%, #481e72 100%)'
      }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Left Column - Image's */}
            <div className="order-1 relative flex justify-center items-center gap-2 w-max mx-auto md:pt-10 pt-0">
            <div className="absolute -bottom-12 left-0 w-max z-20 rounded-xl gradient-card px-4 pr-6 py-2">
               <div className="flex justify-center items-start gap-2 flex-col">
                <p className="text-sm text-white font-normal font-montserrat">
                  Official registered company
                </p>
                <h2 className="text-2xl font-bold text-white font-montserrat">#563789523</h2>
                <p className="text-sm text-white font-medium font-montserrat capitalize">Click here for more info</p>

               </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/emblem-removebg-preview.png"
                  alt="Emblem Image"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>
              <div className="relative">
                <Image
                  src="/images/pdf.png"
                  alt="Pdf Image"
                  width={150}
                  height={150}
                  className=""
                />
              </div>
            </div>
            
            {/* Right Column - Content */}
            <div className="order-2 text-center lg:text-left col-span-2 relative">
              <div className="absolute top-[-68px] right-[-28%] w-[250px] h-[250px] object-cover -z-10 custom-moon-image">
                <Image
                  src="/images/halfMoon.png"
                  alt="About Image"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-start items-center md:items-start gap-2 z-20 flex-col md:flex-row mt-12 lg:mt-0 ">
                <div className="flex justify-center items-end gap-0 flex-col">
                  <FaMeta className="text-orange-500 text-2xl" />
                  <p className="text-4xl text-white font-semibold font-montserrat gradient-text z-20">
                    ABOUT
                  </p>
                </div>
                <h2 className="text-7xl text-white font-bold font-montserrat leading-[90%]">META</h2>
              </div>
              
              <p className="text-sm text-gray-300 font-montserrat mb-6 leading-relaxed z-20 mt-5 md:mt-0">
                Join thousands of developers building the future of the metaverse. 
                Experience cutting-edge technology and create immersive digital worlds.
                Join thousands of developers building the future of the metaverse.
              </p>
              
              <p className="text-sm text-gray-300 font-montserrat mb-8 leading-relaxed z-20">
                Our platform provides the tools, resources, and community you need 
                to bring your virtual reality dreams to life. and community you need 
                to bring your virtual reality dreams to life.
              </p>
             
              <button className="cta-btn"><span>Read More</span></button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default About
