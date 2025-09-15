"use client";

import React from 'react'
import { featureData } from '@/app/data.js/feature';
const Feature = () => {
  return (
    <section className="bg-offBlack py-8 relative z-20">
        <div className="max-w-7xl mx-auto px-3 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featureData.map((feature) => ( 
            <div key={feature.id} className="flex justify-center items-start flex-col gap-2 relative w-[200px] hover:scale-125 transition-all duration-300">
              <div className="relative ">
                <div className="absolute -right-2 top-0 w-8 h-8 rounded-full bg-blue-500/50 blur-xs animate-float"></div>
                {feature.icon}
              </div>
              <h2 className="text-base font-bold text-white">{feature.title}</h2>
            </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Feature
