import React from 'react'
import { FaMeta } from 'react-icons/fa6'
import { FaCalculator } from "react-icons/fa";

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
                    <h2 className="text-7xl text-white font-bold font-montserrat leading-[90%]">META</h2>
                </div>
                <div className='relative w-[800px] h-[800px] rounded-full top-24 flex justify-center items-center'>
                    <div className='absolute w-full h-full inset-0 !rounded-full border-4 rotating-circle'></div>
                    <div className='absolute flex justify-center items-center flex-col rounded-full w-[70px] h-[70px] plan-spear plan-spear-one'>
                        <p className='font-montserrat text-xs font-medium'>Upto</p>
                        <h3 className='font-montserrat text-xl font-bold leading-[85%]'>0.2%</h3>
                        <p className='font-montserrat font-medium text-xs capitalize leading-[95%]'>Plan 1</p>

                        <div className='absolute plan-spear-desc plan-spear-desc-one'>
                            <h4>MIN &euro;20.00</h4>
                            <div className='flex justify-center items-center gap-2 plan-spear-desc-content plan-spear-desc-one-content absolute'>
                                <div className="vertical-label">Basic plan</div>
                                <div className='flex flex-1 justify-center items-center flex-col min-w-[160px]'>
                                    <h2 className='font-montserrat font-bold text-2xl'>0.2%</h2>
                                    <div className='flex justify-center items-center gap-2'>
                                        <div className='flex flex-col justify-center items-center'>
                                            <p className='pb-2 font-montserrat font-normal text-base'>hourly for 96 hours</p>
                                            <p className='font-montserrat font-light text-sm'>Min-Max investments</p>
                                        </div>
                                        {/* here  */}

                                    </div>
                                    <h3 className='font-montserrat font-semibold text-base'>
                                        $10.00-$500.00 <span>USD</span>
                                    </h3>
                                    <p className='font-montserrat font-light text-sm'>Apply Now</p>
                                </div>
                                <div className='flex justify-center items-center rounded-full bg-blue-500 p-2'>
                                            <FaCalculator className='text-white text-2xl' />
                                        </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Plans
