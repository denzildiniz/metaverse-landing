'use client'
import React, { useEffect, useState } from 'react'
import { FaMeta } from 'react-icons/fa6'
import { FaCalculator } from "react-icons/fa";
import { plansData } from '@/app/data.js/plans';

const Plans = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 830);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <section className={`bg-filterBlack py-8 relative z-20  overflow-hidden ${isMobile ? 'min-h-50vh' : 'max-h-[695px]'}`}>
            <div className="max-w-7xl mx-auto px-3 flex justify-center items-center flex-col gap-8">
                <div className="flex justify-start items-center md:items-start gap-2 z-20 flex-col md:flex-row mt-12 lg:mt-0 ">
                    <div className="flex justify-center items-end gap-0 flex-col">
                        <FaMeta className="text-orange-500 text-2xl" />
                        <p className="text-4xl text-white font-semibold font-montserrat gradient-text z-20 capitalize">
                            Invesment
                        </p>
                    </div>
                    <h2 className="text-7xl text-white font-bold font-montserrat leading-[90%]">PLANS</h2>
                </div>

                {!isMobile && plansData.map((container, idx) => (
                    <div key={idx} className={container.containerClass}>
                        <div className={container.circleClass}></div>
                        {container.plans.map((plan, pIdx) => (
                            <div key={pIdx} className={`${plan.wrapperClass} plan-glow`}
                                style={{ animationDelay: `${pIdx * 0.7}s` }}>
                                <p className='font-montserrat text-xs font-medium'>Upto</p>
                                <h3 className='font-montserrat text-xl font-bold leading-[85%]'>{plan.percentage}</h3>
                                <p className='font-montserrat font-medium text-xs capitalize leading-[95%]'>{plan.title}</p>

                                <div className={plan.descClass}>
                                    <h4>{plan.min}</h4>
                                    <div className={plan.descContentClass}>
                                        <div className="vertical-label">Basic plan</div>
                                        <div className='flex flex-1 justify-center items-center flex-col min-w-[160px]'>
                                            <h2 className='font-montserrat font-bold text-2xl'>{plan.mainPercentage}</h2>
                                            <div className='flex justify-center items-center gap-2'>
                                                <div className='flex flex-col justify-center items-center'>
                                                    <p className='pb-2 font-montserrat font-normal text-base'>{plan.duration}</p>
                                                    <p className='font-montserrat font-light text-sm'>Min-Max investments</p>
                                                </div>
                                            </div>
                                            <h3 className='font-montserrat font-semibold text-base'>
                                                {plan.range} <span>{plan.currency}</span>
                                            </h3>
                                            <p className='font-montserrat font-light text-sm'>Coupon ID</p>
                                        </div>
                                        <div className='flex justify-center items-center rounded-full bg-blue-500 p-2'>
                                            <FaCalculator className='text-white text-2xl' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}


                {isMobile && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                        {plansData.flatMap((container) =>
                            container.plans.map((plan, pIdx) => (
                                <div
                                    key={`${pIdx}-${plan.title}`}
                                    className="gradient-card rounded-xl p-6 flex flex-col justify-between hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.2)] hover:cursor-pointer transition-all duration-300"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 bg-pink rounded-full border border-white flex justify-center items-center">
                                                <span className="text-white font-bold text-sm">{plan.percentage}</span>
                                            </div>
                                            <div>
                                                <p className="text-xs font-montserrat font-medium text-gray-300">Upto</p>
                                                <h3 className="text-xl font-bold font-montserrat text-white">
                                                    {plan.percentage}
                                                </h3>
                                                <p className="text-sm font-montserrat font-medium text-gray-200 capitalize">
                                                    {plan.title}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex justify-center items-center rounded-full bg-blue-500 p-2">
                                            <FaCalculator className="text-white text-lg" />
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-300 text-sm font-montserrat">Minimum:</span>
                                            <span className="text-white font-semibold font-montserrat">{plan.min}</span>
                                        </div>

                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-300 text-sm font-montserrat">Duration:</span>
                                            <span className="text-white font-semibold font-montserrat">{plan.duration}</span>
                                        </div>

                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-300 text-sm font-montserrat">Range:</span>
                                            <span className="text-white font-semibold font-montserrat">{plan.range} {plan.currency}</span>
                                        </div>

                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                )}

                {/* container plan 7 */}
                {
                    !isMobile && (
                        <div className='absolute w-[250px] h-[250px] bg-blue-200/20 backdrop-blur-md rounded-full md:top-[575px] lg:top-[534px] flex justify-center items-start z-20 shadow-lg supply-glow'>
                            <div className='absolute flex justify-center items-start p-4 md:pt-8 lg:pt-12 flex-col'>
                                <p className='font-montserrat font-bold text-base text-left'>Total</p>
                                <h3 className='font-montserrat font-bold md:text-4xl lg:text-6xl leading-[95%]'>100M</h3>
                                <p className='font-montserrat font-bold text-base w-full text-right'>supply</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default Plans
