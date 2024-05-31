

import st from "../../assets/icons/safe tick.webp"
import rcoin from "../../assets/logo/icon2.png"

import duration from "../../assets/icons/duration.svg"
import returns from "../../assets/icons/returns.svg"
import { useEffect, useRef, useState } from "react"
import { ethers } from "ethers";
import { GRT_TOKEN_CONTRACT_ADDRESS, GRT_STAKING_CONTRACT_ADDRESS ,GRT_TOKEN_CONTRACT_ABI, GRT_STAKING_CONTRACT_ABI } from "../../constants/index.js";


const Hero = () => {



    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(0);
    const [GrtTokenCount, setGrtTokenCount] = useState(0);
    const [APTpercentage, setAPTpercentage] = useState();
    const [grtApproveToken, setgrtApproveToken] = useState();
    const [ApprovedDone, setApprovedDone] = useState(false);
    const refaddr ="0x5c2e2282a12F470519097447d5B1376A15e082CF";
    const [triggerStake, setTriggerStake] = useState(false);
    const [loading, setLoading] = useState(false);

    const [IsKeyPresent, setIsKeyPresent] = useState(false);

    const [account, setAccount] = useState("");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(GRT_TOKEN_CONTRACT_ADDRESS, GRT_TOKEN_CONTRACT_ABI, signer);
    const stakecontract = new ethers.Contract(GRT_STAKING_CONTRACT_ADDRESS, GRT_STAKING_CONTRACT_ABI, signer);
    

    function keyPresentHandle() {
        setIsKeyPresent(!IsKeyPresent);
    }

    useEffect(() => {
        const handleApprovalAndStaking = async () => {
          if (!account || !GrtTokenCount) return;
    
          setLoading(true);
    
          try {
            // Check if approval is needed and approve tokens if necessary
            const approve = await contract.approve(
              GRT_STAKING_CONTRACT_ADDRESS,
              ethers.utils.parseUnits(GrtTokenCount.toString(), 18)
            );
            await approve.wait(); // Wait for the transaction to be mined
            console.log(approve);
    
            const balance = await contract.balanceOf(account);
            const allowance = await contract.allowance(account, GRT_STAKING_CONTRACT_ADDRESS);
    
            console.log("Balance:", balance.toString());
            console.log("Allowance:", allowance.toString());
    
            // Stake tokens
            const stake = await stakecontract.stakeTokens(
              ethers.utils.parseUnits(GrtTokenCount.toString(), 18),
              selectedItem,
              refaddr
            );
            console.log(stake);
          } catch (error) {
            console.error("Error in staking:", error);
          } finally {
            setLoading(false);
          }
        };
    
        handleApprovalAndStaking();
      }, [account, GrtTokenCount, selectedItem, refaddr]); // This effect runs when these state variables change
    
      const stakeAmount = async (event) => {
        event.preventDefault();
    
        // Ensure the user is connected and get their account
        if (typeof window.ethereum !== "undefined") {
          try {
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
            setAccount(accounts[0]);
          } catch (error) {
            console.error(error);
            return;
          }
        } else {
          console.error("Ethereum object not found");
        }
      };

    //  timer start
    // const [timer, setTimer] = useState("");
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         const endDate = new Date("2024-05-23T12:30:00Z"); // Set your presale end date here
    //         const now = new Date();
    //         const distance = endDate - now;

    //         const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    //         const hours = Math.floor(
    //             (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    //         );
    //         const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //         const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //         setTimer(`${days}d ${hours}h ${minutes}m ${seconds}s`);

    //         if (distance < 0) {
    //             clearInterval(interval);
    //             setTimer("We Are Live");
    //         }
    //     }, 1000);

    //     return () => clearInterval(interval);
    // }, []);

    //  timer end


    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (item, APYper) => {
        setSelectedItem(item);
        setAPTpercentage(APYper)
        setIsOpen(false);
    };
    let reward = !isNaN(GrtTokenCount) && selectedItem !== 0 ? (APTpercentage / 100) * GrtTokenCount : "";

    return (
        <>
            <div id="hero-main" className=" relative  min-h-[80vh]  flex items-center   bg-black   bg-cover bg-center px-3 z-0 py-10   phone:mx-2 my-10 rounded-[40px]   ">

                <div className=" absolute left-0 top-[-50%]    z-[-99]">
                    <svg xmlns="http://www.w3.org/2000/svg" width={"100%"} height={1275} viewBox="0 0 877 1275" fill="none">
                        <g filter="url(#filter0_bdf_1102_467)">
                            <path d="M294.359 651.975C292.306 744.87 98.1467 866.605 5.2512 864.552C-87.6443 862.499 -156.825 717.23 -154.772 624.335C-152.719 531.439 37.7847 408.148 130.68 410.201C223.576 412.254 296.412 559.079 294.359 651.975Z" fill="#2bed1d7f" />
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


                <div
                    className="absolute z-[-1] blur-3xl inset-0 h-full bg-black opacity-30 rounded-[40px]"
                ></div>

                <div className="h-full   w-full flex laptop:flex-col items-center justify-center ">

                    <div id="hero-left"
                        className="     w-[55%] h-[100%] flex flex-col justify-center  gap-10 desktop:w-[100%]    "
                    >
                        <div id="hero-left-top" className="  flex flex-col gap-5">

                            <div className="  w-full text-white  rounded-lg  ">
                                {/* <div className="   flex   gap-2  laptop:justify-center text-3xl ">
                                   
                                    <div className="card">
                                        <h2 className="text-primary-gradient tracking-wider text-5xl phone:text-3xl font-bold " > {timer}</h2>
                                        <h2 className="text-primary-gradient tracking-wider text-5xl phone:text-3xl font-bold " >  </h2>
                                    </div>
                                    <p className=" font-bold text-4xl phone:text-2xl " >   <span className="text-primary-gradient">Going To Be Live Soon ...</span>  </p>
                                </div> */}
                            </div>

                            <h1 className=" text-[70px] font-bold relative leading-tight laptop:text-center desktop:text-[60px]  desktop:laptop:text-[50px]  desktop:laptop:phone:text-[30px]    ">

                                Bag Daily Cash, Earn Upto 18% a Year!


                            </h1>

                            <p className=" flex leading-snug font-normal    text-[17px] w-[80%] tracking-[0.35px] desktop:w-[90%] laptop:text-center  laptop:m-auto desktop:phone:w-[100%]    ">
                                Get in on the action with GrtPay Token. Cash in rewards every second with top-tier slashing protection. {"Let's"} make your crypto work while you chill.


                            </p>

                            <a href="" className="btn2 w-fit py-2 rounded-full " > Buy now</a>
                        </div>
                    </div>

                    <div
                        id="hero-right"
                        className=" text-white relative z-10 laptop:mt-10 w-[40%] h-fit flex justify-center gap-0  desktop:w-[100%] "
                    >
 
                        <div id="hero-right-container"
                            className=" flex   flex-col py-5 justify-center gap-5     min-h-fit  w-[500px] max-w-[600px] overflow-hidden rounded-[20px]   bg-cover bg-opacity-80 bg-center  px-6"
                        >


                            <div className=" space-y-4" >

                                <div className="flex items-center   justify-between phone:flex-col-reverse phone:gap-3 " >
                                    <h2 className=" text-4xl font-bold phone:text-center phone:text-3xl ">Stake GrtPay  </h2>
                                    <div className="flex items-center  justify-center gap-2 bg-gray-100   px-3 py-1 h-fit  rounded-lg w-fit" >
                                        <img loading="lazy" src={st} alt="" />
                                        <p className=" text-black  text-sm text-nowrap" >Safe & secured</p>
                                    </div>
                                </div>
                                <p className=" tablet:text-center max-w-[18rem] leading-tight " >Cash in, with $GrtPay Token. Secure, easy, and profitable.</p>
                            </div>

                            <div>
                                <div className="relative mb-6">

                                    
                                   

                                </div>
                                <div className="relative mb-6">
                                    <div className=" absolute inset-y-0 start-0 mx-3 flex items-center   pointer-events-none">
                                        <img loading="lazy" src={rcoin} className="h-[30px]  w-[30px] " alt="" />
                                    </div>

                                    <input type="number" id="input-group-2" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg  block w-full px-14 py-3 " placeholder=" GrtPay Token Amount  "
                                        value={GrtTokenCount}
                                        onChange={(event) => event.target.value <= 0 ? setGrtTokenCount("") : setGrtTokenCount(parseFloat(event.target.value))}
                                    />

                                </div>
                                <div className="relative mb-6">
                                    <div className=" opacity-[0.5] absolute inset-y-0 start-0 mx-3 flex items-center   pointer-events-none">
                                        <img loading="lazy" src={duration} className="h-[30px]  w-[30px] " alt="" />
                                    </div>

                                    <input type="text" id="input-group-3" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg  block w-full px-14 py-3         " placeholder=" Duration " value={selectedItem ? `${selectedItem} Days` : ""} disabled />


                                    <div ref={dropdownRef} className="  " >
                                        <button

                                            id="dropdownDefaultButton"
                                            onClick={toggleDropdown}
                                            className="absolute inset-y-0 end-0 px-5 mx-3 my-2 rounded-lg flex items-center  text-black   bg-gray-300  "
                                            type="button"
                                        >
                                            <svg className="w-2.5 h-2.5  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                                            </svg>


                                        </button>
                                        {/* Dropdown menu */}
                                        {isOpen && (
                                            <div
                                                id="dropdown"
                                                className="z-10   absolute right-0  border-[#a5a5a5]  border-[2px] divide-y divide-gray-100 rounded-lg shadow w-44  bg-gray-800"
                                            >
                                                <ul className="  text-sm text-gray-200" aria-labelledby="dropdownDefaultButton">
                                                    <li className=" border-b-[#1a9f08] border-b-[1px] " >
                                                        <button
                                                            onClick={() => handleItemClick(30, 30)}
                                                            className="block w-full px-4 py-2    hover:bg-gray-600  hover:text-white"
                                                        >
                                                            30 Days
                                                        </button>
                                                    </li>
                                                    <li className=" border-b-[#1a9f08] border-b-[1px] ">
                                                        <button
                                                            onClick={() => handleItemClick(90, 55)}
                                                            className="block w-full px-4 py-2 hover:bg-gray-600 dark:hover:bg-gray-600 dark:hover:text-white"
                                                        >
                                                            90 Days
                                                        </button>
                                                    </li>
                                                    <li className=" border-b-[#1a9f08] border-b-[1px] ">
                                                        <button
                                                            onClick={() => handleItemClick(180, 72)}
                                                            className="block w-full px-4 py-2 hover:bg-gray-600 dark:hover:bg-gray-600 dark:hover:text-white"
                                                        >
                                                            180 Days
                                                        </button>
                                                    </li>
                                                    <li >
                                                        <button
                                                            onClick={() => handleItemClick(365, 120)}
                                                            className="block w-full px-4 py-2 hover:bg-gray-600 dark:hover:bg-gray-600 dark:hover:text-white"
                                                        >
                                                            365 Days
                                                        </button>
                                                    </li>

                                                </ul>
                                            </div>
                                        )}
                                    </div>




                                </div>

                                <div className="relative mb-6">
                                    <div className=" absolute opacity-[0.5] inset-y-0 start-0 mx-3 flex items-center   pointer-events-none">
                                        <img loading="lazy" src={returns} className="h-[30px]  w-[30px] " alt="" />
                                    </div>

                                    <input type="text" id="input-group-3" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg  block w-full px-14 py-3         " value={reward} placeholder=" Returns " disabled />

                                </div>

                                <div className="flex justify-center" >

                                    <button type="submit" className=" btn2   text-white px-5 py-2 rounded-xl   " onClick={stakeAmount}>
                                        Stake Now
                                    </button>
                                </div>

                            </div>
                            <div className="flex  flex-col gap-2" >

                                <div className="special_key_container flex flex-col items-center w-full gap-4">
                                    <p className="w-full text-center text-sm">
                                        Do you have Special Referral code ?
                                        <span
                                            onClick={keyPresentHandle}
                                            className="text-blue-600 font-bold cursor-pointer"
                                        >
                                            {IsKeyPresent ? " No" : "  Yes"}
                                        </span>
                                    </p>

                                     
                                        <div
                                            className={`${IsKeyPresent ? "block" : "hidden"
                                                } flex flex-col w-full md:flex-row items-center`}
                                        >
                                            <input
                                                type="text"
                                                placeholder="Enter key"
                                                className="w-full md:w-auto flex-grow p-2 px-4 mb-2 md:mb-0 md:mr-2 text-black bg-gray-200 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                                            />
                                            <button className="px-4 py-2 font-semibold text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
                                                Apply
                                            </button>
                                        </div>
                                     
                                </div>


                            </div>
                                



                        </div>

                        

                    </div>
                </div>


            </div>

            
            <div className=" px-14 py-2 w-full laptop:px-10 laptop:tablet:px-2    " >
                <div id="banner-inner" className="  rounded-[10px] flex  p-5 gap-10 laptop:tablet:gap-5 flex-wrap justify-evenly">
                    <div id="banner-card" className="flex gap-2 flex-col items-center justify-center" >
                        <h5 className="text-xl text-white " >Token live price</h5>
                        <p className="text-4xl laptop:text-3xl laptop:tablet:text-2xl laptop:tablet:phone:text-2xl font-bold text-[--primary-color] " >$2.3024</p>
                    </div>

                    <div className="w-[3px] h-24 tablet:hidden bg-gradient-to-b from-transparent via-gray-200    via-50% to-transparent" />



                    <div id="banner-card" className="flex gap-2 flex-col items-center justify-center" >
                        <h5 className="text-xl text-white " >Total staked tokens</h5>
                        <p className="text-4xl laptop:text-3xl laptop:tablet:text-2xl laptop:tablet:phone:text-2xl font-bold text-[--primary-color] " >$0,000,0000</p>
                    </div>

                    <div className="w-[3px] h-24 tablet:hidden bg-gradient-to-b from-transparent via-gray-200    via-50% to-transparent" />

                    <div id="banner-card" className="flex gap-2 flex-col items-center justify-center" >
                        <h5 className="text-xl text-white " >Total rewards paid</h5>
                        <p className="text-4xl laptop:text-3xl laptop:tablet:text-2xl laptop:tablet:phone:text-2xl font-bold text-[--primary-color] " >$0,00,000</p>
                    </div>

                    <div className="w-[3px] h-24 tablet:hidden bg-gradient-to-b from-transparent via-gray-200    via-50% to-transparent" />

                    <div id="banner-card" className="flex gap-2 flex-col items-center justify-center" >
                        <h5 className="text-xl text-white " >Stakers</h5>
                        <p className="text-4xl laptop:text-3xl laptop:tablet:text-2xl laptop:tablet:phone:text-2xl font-bold text-[--primary-color] " >$2,000</p>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Hero