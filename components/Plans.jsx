import React from 'react'
import { FaMeta } from 'react-icons/fa6'
import { FaCalculator } from "react-icons/fa";
import { plansData } from '@/app/data.js/plans';

const Plans = () => {
    return (
        <section className="bg-filterBlack py-8 relative z-20 max-h-[695px] overflow-hidden">
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

                {plansData.map((container, idx) => (
                    <div key={idx} className={container.containerClass}>
                        <div className={container.circleClass}></div>
                        {container.plans.map((plan, pIdx) => (
                            <div key={pIdx} className={plan.wrapperClass}>
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
                                            <p className='font-montserrat font-light text-sm'>Apply Now</p>
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


                {/* container plan 7 */}
                <div className='absolute w-[250px] h-[250px] bg-blue-200/20 backdrop-blur-md  rounded-full md:top-[575px] lg:top-[534px] flex justify-center items-start z-20 shadow-lg'>
                    {/* <div className='absolute w-full h-full inset-0 !rounded-full border-4 rotating-circle'></div> */}
                    <div className='absolute flex justify-center items-start p-4 md:pt-8 lg:pt-12 flex-col'>
                        <p className='font-montserrat font-bold text-base text-left'>Total</p>
                        <h3 className='font-montserrat font-bold md:text-4xl lg:text-6xl leading-[95%]'>100M</h3>
                        <p className='font-montserrat font-bold text-base w-full text-right'>supply</p>
                    </div>


                </div>
            </div>


        </section>
    )
}

export default Plans
