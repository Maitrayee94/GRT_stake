// import cardbg from "../../assets/images/ReferEarncard.svg"

const RefarEarn = () => {
    return (
        <>
            <div id="howtostake" className=" relative flex flex-col  gap-28 min-h-[70vh] w-screen mt-20 mb-28   "  >

                <div className=" absolute left-0 top-[-50%]    z-[-1]">
                    <svg xmlns="http://www.w3.org/2000/svg" width={"100%"} height={1275} viewBox="0 0 877 1275" fill="none">
                        <g filter="url(#filter0_bdf_1102_467)">
                            <path d="M294.359 651.975C292.306 744.87 98.1467 866.605 5.2512 864.552C-87.6443 862.499 -156.825 717.23 -154.772 624.335C-152.719 531.439 37.7847 408.148 130.68 410.201C223.576 412.254 296.412 559.079 294.359 651.975Z" fill="#79c3256a" />
                        </g>
                        <defs>
                            <filter id="filter0_bdf_1102_467" x="-564.617" y="0.375549" width="1440.92" height={1274} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="45.7" />
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1102_467" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx={352} dy={4} />
                                <feGaussianBlur stdDeviation="114.95" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="effect1_backgroundBlur_1102_467" result="effect2_dropShadow_1102_467" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1102_467" result="shape" />
                                <feGaussianBlur stdDeviation="204.9" result="effect3_foregroundBlur_1102_467" />
                            </filter>
                        </defs>
                    </svg>
                </div>

                <div className=" absolute right-0 top-[55%] tablet:top-[90%]    z-[-1]">
                    <svg xmlns="http://www.w3.org/2000/svg" width={899} height={1192} viewBox="0 0 899 1192" fill="none">
                        <g filter="url(#filter0_bdf_1102_466)">
                            <path d="M975 668.438C975 741.567 654.343 839.181 569.628 739.677C481.468 739.677 410 680.394 410 607.264C410 534.135 566.183 410 654.343 410C742.503 410 975 595.308 975 668.438Z" fill="#63d91e68" fillOpacity="0.9" shapeRendering="crispEdges" />
                        </g>
                        <defs>
                            <filter id="filter0_bdf_1102_466" x="0.200012" y="0.200012" width="1556.7" height="1191.6" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="45.7" />
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1102_466" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx={352} dy={4} />
                                <feGaussianBlur stdDeviation="114.95" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="effect1_backgroundBlur_1102_466" result="effect2_dropShadow_1102_466" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1102_466" result="shape" />
                                <feGaussianBlur stdDeviation="204.9" result="effect3_foregroundBlur_1102_466" />
                            </filter>
                        </defs>
                    </svg>

                </div>

                <div id="heading" className=" flex flex-col items-center gap-3  " >
                    <h1 className=" text-5xl font-bold tablet:text-4xl  text-center px-4  " >Our   <span className="text-primary-gradient" >Staking </span>Plan  </h1>
                    <p className=" text-md  text-center  max-w-[50rem] text-gray-200 px-4 " >Grt Pay is revolutionizing the staking game. With top-notch protection and sweet rewards, we set the global standard in crypto earnings. Join us, and {"let's"} make your money work smarter.</p>
                </div>
                <div className="flex justify-evenly gap-5 laptop:flex-wrap laptop:justify-center laptop:gap-28 px-3 " >

                    <div className="boxRef">
                        <span></span>
                        <div className="contentRef">
                            <div className="text-center" >
                                <h2 className="text-4xl font-bold " >   30%    </h2>
                                <p className="text-sm"  >(Annual Percentage Yield)</p>
                            </div>
                            <div className=" w-full flex flex-col gap-2  " >
                                <p className="text-center text-xl font-medium " >Plan Details </p>
                                <div className="flex justify-between  text-gray-200" >
                                    <p>Duration</p>
                                    <p>-</p>
                                    <p>30 Days </p>
                                </div>
                                <div className="flex justify-between  text-gray-200" >
                                    <p>Returns</p>
                                    <p>-</p>
                                    <p>30% APY </p>
                                </div>
                            </div>
                            {/* <div>
                                <p className="text-[13px] leading-tight text-gray-200 text-center " >Stack your Grt Pay for 56 days and snag a sweet 36% annual return.</p>
                            </div> */}

                        </div>
                    </div>
                    <div className="boxRef">
                        <span></span>
                        <div className="contentRef">
                            <div className="text-center" >
                                <h2 className="text-4xl font-bold " >   60%    </h2>
                                <p className="text-sm"  >(Annual Percentage Yield)</p>
                            </div>
                            <div className=" w-full flex flex-col gap-2  " >
                                <p className="text-center text-xl font-medium " >Plan Details </p>
                                <div className="flex justify-between  text-gray-200" >
                                    <p>Duration</p>
                                    <p>-</p>
                                    <p>90 Days </p>
                                </div>
                                <div className="flex justify-between  text-gray-200" >
                                    <p>Returns</p>
                                    <p>-</p>
                                    <p>60% APY </p>
                                </div>
                            </div>
                            {/* <div>
                                <p className="text-[13px] leading-tight text-gray-200 text-center " >Lock in for 100 days and rake in 72% annual gains. Easy money.</p>
                            </div> */}

                        </div>
                    </div>
                    <div className="boxRef">
                        <span></span>
                        <div className="contentRef">
                            <div className="text-center" >
                                <h2 className="text-4xl font-bold " >   80%    </h2>
                                <p className="text-sm"  >(Annual Percentage Yield)</p>
                            </div>
                            <div className=" w-full flex flex-col gap-2  " >
                                <p className="text-center text-xl font-medium " >Plan Details </p>
                                <div className="flex justify-between  text-gray-200" >
                                    <p>Duration</p>
                                    <p>-</p>
                                    <p>180 Days </p>
                                </div>
                                <div className="flex justify-between  text-gray-200" >
                                    <p>Returns</p>
                                    <p>-</p>
                                    <p>80% APY </p>
                                </div>
                            </div>

                            {/* <div>
                                <p className="text-[13px] leading-tight text-gray-200 text-center " >Go big with 180 days and watch your investment grow by 108% annually.</p>
                            </div> */}

                        </div>
                    </div>
                    <div className="boxRef">
                        <span></span>
                        <div className="contentRef">
                            <div className="text-center" >
                                <h2 className="text-4xl font-bold " >   110%    </h2>
                                <p className="text-sm"  >(Annual Percentage Yield)</p>
                            </div>
                            <div className=" w-full flex flex-col gap-2  " >
                                <p className="text-center text-xl font-medium " >Plan Details </p>
                                <div className="flex justify-between  text-gray-200" >
                                    <p>Duration</p>
                                    <p>-</p>
                                    <p>365 Days </p>
                                </div>
                                <div className="flex justify-between  text-gray-200" >
                                    <p>Returns</p>
                                    <p>-</p>
                                    <p>110% APY </p>
                                </div>
                            </div>
                            {/* <div>
                                <p className="text-[13px] leading-tight text-gray-200 text-center " >Maximize your earnings with a full year stake for a massive 144% return.</p>
                            </div> */}

                        </div>
                    </div>
                </div>

                {/* <div className="flex justify-evenly gap-5 tablet:flex-wrap tablet:justify-center tablet:gap-40 px-3 " >


                    <div id="card" className=" relative max-w-[20rem] flex flex-col gap-5 justify-center items-center text-center " >
                        <img loading="lazy" className="w-full z-[-1] opacity-70 absolute" src={cardbg} alt="" />
                        <h3>90 Days Plans</h3>
                        <h1 className="text-4xl phone:text-3xl tracking-wide font-bold">
                            Get First 
                            <span className="  text-primary-gradient"> 90%  </span> APY Back
                        </h1>
                        <p className="text-gray-200 max-w-[22rem] text-base" >Unlock your financial potential with our exclusive staking program offering an incredible 90% APY over 90 days!</p>
                    </div>
                    <div id="card" className=" relative max-w-[20rem] flex flex-col gap-5 justify-center items-center text-center " >
                        <img loading="lazy" className="w-full z-[-1] opacity-70 absolute" src={cardbg} alt="" />
                        <h3>180 Days Plans </h3>
                        <h1 className="text-4xl phone:text-3xl tracking-wide font-bold">
                            Get First 
                            <span className="  text-primary-gradient"> 180%</span> APY  Back
                        </h1>
                        <p className="text-gray-200 max-w-[22rem] text-base" >Unlock your financial potential with our exclusive staking program offering an incredible 180% APY over 180 days!</p>
                    </div>
                    <div id="card" className=" relative max-w-[20rem] flex flex-col gap-5 justify-center items-center text-center " >
                        <img loading="lazy" className="w-full z-[-1] opacity-70 absolute" src={cardbg} alt="" />
                        <h3>360 Days Plans </h3>
                        <h1 className="text-4xl phone:text-3xl tracking-wide font-bold">
                            Get First 
                            <span className="  text-primary-gradient"> 360%</span> APY Back
                        </h1>
                        <p className="text-gray-200 max-w-[22rem] text-base" >Unlock your financial potential with our exclusive staking program offering an incredible 360% APY over 360 days!</p>
                    </div>
                    <div id="card" className=" relative max-w-[20rem] flex flex-col gap-5 justify-center items-center text-center " >
                        <img loading="lazy" className="w-full z-[-1] opacity-70 absolute" src={cardbg} alt="" />
                        <h3>360 Days Plans </h3>
                        <h1 className="text-4xl phone:text-3xl tracking-wide font-bold">
                            Get First 
                            <span className="  text-primary-gradient"> 360%</span> APY Back
                        </h1>
                        <p className="text-gray-200 max-w-[22rem] text-base" >Unlock your financial potential with our exclusive staking program offering an incredible 360% APY over 360 days!</p>
                    </div>
                    
                </div> */}
            </div>
        </>
    )
}

export default RefarEarn