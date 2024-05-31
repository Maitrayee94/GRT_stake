import st from "../../assets/icons/safe tick.webp"
import rcoin from "../../assets/voip_logo (1)/logo2.webp"
import graf1 from "../../assets/icons/graf.svg"
import approveImg from "../../assets/icons/stake-approve-img.svg"
import duration from "../../assets/icons/duration.svg"
import returns from "../../assets/icons/returns.svg"
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { GRT_TOKEN_CONTRACT_ADDRESS, GRT_STAKING_CONTRACT_ADDRESS ,GRT_TOKEN_CONTRACT_ABI, GRT_STAKING_CONTRACT_ABI } from "../constants/index.js";
 

const StakeHero = () => {

    const [rightContainer, setrightContainer] = useState(true);
     
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(0);
    const [voipTokenCount, setvoipTokenCount] = useState("");
    const [voipApproveToken, setvoipApproveToken] = useState("");

    const [account, setAccount] = useState("");
    const { wallet } = useMetaMask();
    
    let reward = !isNaN(voipTokenCount) && selectedItem !== 0 ? (voipTokenCount * selectedItem) / 100 : "";

    useEffect(() => {
        if (wallet && wallet.accounts && wallet.accounts.length > 0) {
          setAccount(wallet.accounts[0]);
        }
      }, [wallet]);

      useEffect(() => {
        const readingData = async () => {
            if (account) {
                try {
                    const provider = new ethers.providers.Web3Provider(window.ethereum);
                    const signer = provider.getSigner();
                    const contract = new ethers.Contract(GRT_TOKEN_CONTRACT_ADDRESS, GRT_TOKEN_CONTRACT_ABI, signer);
                    const approve = await contract.approve(account, ethers.utils.parseUnits(100, 18));
                    console.log(approve);
                } catch (error) {
                    console.error("Error in approving tokens:", error);
                }
            }
        };
},[account]);

    const handlerightContainer = () => {
        setrightContainer(false);
    }


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setIsOpen(false);
    };
    return (
        <>



            <div id="hero-main" className=" min-h-[90vh]  flex items-center bg-[url('/bgimg/bgimg1.svg')] bg-cover bg-center px-3  py-10  mx-5 phone:mx-2 my-10 rounded-[40px]   ">

                <div className="h-full w-full flex laptop:flex-col items-center justify-center ">

                    <div id="hero-left"
                        className="w-[55%] h-[100%] flex flex-col justify-center  gap-10 desktop:w-[100%]  desktop:mt-[50px]"
                    >

                        <div id="hero-left-top" className="  flex flex-col gap-8">

                            <h1 className=" text-[70px] font-normal relative  leading-tight  laptop:text-center desktop:text-[60px]  desktop:laptop:text-[50px]  desktop:laptop:phone:text-[30px]    ">
                                Empower Your Wealth, Stake Now for Lucrative Returns!
                            </h1>

                            <p className=" flex leading-snug font-normal   text-[17px] w-[80%] tracking-[0.35px] desktop:w-[90%] laptop:text-center  laptop:m-auto desktop:phone:w-[100%] ">
                                Earn staking rewards every second with Voip Token , a staking token with slashing protection.Earn staking rewards every second with Voip Token , a staking token with slashing protection. Earn staking rewards every second with Voip Token , a staking token with slashing protection.

                            </p>
                        </div>
                    </div>


                    <div
                        id="hero-right"
                        className=" text-white relative z-10 laptop:mt-10 w-[40%] h-[100%] flex justify-center gap-0  desktop:w-[100%] "
                    >



                        {
                            rightContainer ?
                                <div id="hero-right-container"
                                    className=" flex   flex-col py-6 justify-center gap-5        w-[500px] max-w-[600px] overflow-hidden rounded-[20px]   bg-cover bg-opacity-80 bg-center  px-5"
                                >
                                    <h1>Step 01</h1>


                                    <div className="flex items-center  justify-between phone:flex-col-reverse" >
                                        <h2 className=" text-4xl text-white  font-normal">Approve Tokens</h2>
                                        <div className="flex items-center  justify-center gap-2 bg-gray-100   px-3 py-1 h-fit  rounded-lg w-fit" >
                                            <img loading="lazy" src={st} alt="" />
                                            <p className=" text-black text-nowrap" >Safe & secured</p>
                                        </div>
                                    </div>
                                    <p className=" tablet:text-center text-white " >Approve Voip Token Token and start to stake.</p>

                                    <div>
                                        <div className="relative mb-6">
                                            <div className=" absolute inset-y-0 start-0 mx-3 flex items-center   pointer-events-none">
                                                <img loading="lazy" src={rcoin} className="h-[30px]  w-[30px] " alt="" />
                                            </div>

                                            <input type="number" id="input-group-1" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg  block w-full px-14 py-4 " placeholder=" Voip Token Amount "
                                                value={voipApproveToken}
                                                onChange={(event) => event.target.value <= 0 ? setvoipApproveToken("") : setvoipApproveToken(parseFloat(event.target.value))}
                                                
                                            />

                                        </div>


                                        <div className="flex justify-center" >

                                            <button type="submit" onClick={() =>{ readingData; handlerightContainer();}} className=" btn2 text-white   px-5 py-2 rounded-xl     " >
                                                Approve Token
                                            </button>
                                        </div>

                                    </div>




                                </div>
                                :
                                <div id="hero-right-container"
                                    className=" flex   flex-col py-5 justify-center gap-5     min-h-[600px]  w-[500px] max-w-[600px] overflow-hidden rounded-[20px]   bg-cover bg-opacity-80 bg-center  px-4"
                                >

                                    <h1>Step 02</h1>
                                    <div className="flex items-center   justify-between phone:flex-col-reverse" >
                                        <h2 className=" text-4xl font-normal">Stake Voip Token </h2>
                                        <div className="flex items-center  justify-center gap-2 bg-gray-100   px-3 py-1 h-fit  rounded-lg w-fit" >
                                            <img loading="lazy" src={st} alt="" />
                                            <p className=" text-black text-nowrap" >Safe & secured</p>
                                        </div>
                                    </div>
                                    <p className=" tablet:text-center" >Stake Voip Token and earn staking rewards.</p>

                                    <div>
                                        <div className="relative mb-6">
                                            <div className=" absolute inset-y-0 start-0 mx-3 flex items-center   pointer-events-none">
                                                <img loading="lazy" src={rcoin} className="h-[30px]  w-[30px] " alt="" />
                                            </div>

                                            <input type="number" id="input-group-2" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg  block w-full px-14 py-4 " placeholder=" Voip Token Amount  "
                                                value={voipTokenCount}
                                                onChange={(event) =>event.target.value<=0? setvoipTokenCount("") : setvoipTokenCount(parseFloat(event.target.value))}
                                            />

                                        </div>
                                        <div className="relative mb-6">
                                            <div className=" absolute inset-y-0 start-0 mx-3 flex items-center   pointer-events-none">
                                                <img loading="lazy" src={duration} className="h-[30px]  w-[30px] " alt="" />
                                            </div>

                                            <input type="text" id="input-group-3" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg  block w-full px-14 py-4         " placeholder=" Duration " value={selectedItem ? `${selectedItem} Days` : ""} />

                                             
                                            <div className="  " >
                                                <button
                                                    id="dropdownDefaultButton"
                                                    onClick={toggleDropdown}
                                                    className="absolute inset-y-0 end-0 px-5 mx-3 my-2 rounded-lg flex items-center  text-black   bg-gray-300  "
                                                    type="button"
                                                >
                                                    v
                                                    
                                                </button>
                                                {/* Dropdown menu */}
                                                {isOpen && (
                                                    <div
                                                        id="dropdown"
                                                        className="z-10 absolute bg-gray-700 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                                                    >
                                                        <ul className="py-2 text-sm text-gray-200" aria-labelledby="dropdownDefaultButton">
                                                            <li>
                                                                <button
                                                                    onClick={() => handleItemClick( 90  )}
                                                                    className="block px-4 py-2 hover:bg-gray-600 dark:hover:bg-gray-600 dark:hover:text-white"
                                                                >
                                                                    90 
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button
                                                                    onClick={() => handleItemClick( 180 )}
                                                                    className="block px-4 py-2 hover:bg-gray-600 dark:hover:bg-gray-600 dark:hover:text-white"
                                                                >
                                                                    180 
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button
                                                                    onClick={() => handleItemClick( 360  )}
                                                                    className="block px-4 py-2 hover:bg-gray-600 dark:hover:bg-gray-600 dark:hover:text-white"
                                                                >
                                                                    360 
                                                                </button>
                                                            </li>
                                                             
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>




                                        </div>

                                        <div className="relative mb-6">
                                            <div className=" absolute inset-y-0 start-0 mx-3 flex items-center   pointer-events-none">
                                                <img loading="lazy" src={returns} className="h-[30px]  w-[30px] " alt="" />
                                            </div>

                                            <input type="text" id="input-group-3" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg  block w-full px-14 py-4         " value={reward} placeholder=" Returns " disabled />

                                        </div>

                                        <div className="flex justify-center" >

                                            <button type="submit" className=" btn2   text-white px-5 py-2 rounded-xl   ">
                                                Connect wallet
                                            </button>
                                        </div>

                                    </div>
                                    <div className="flex  flex-col gap-2" >
                                        <div className="flex justify-between" >
                                            <p className="text-white" >You will receive</p>
                                            <p>0.0 Voip Token </p>
                                        </div>
                                        <div className="flex justify-between" >
                                            <p className="text-white" >Returns</p>
                                            <p>21% Monthly</p>
                                        </div>
                                        <div className="flex justify-between" >
                                            <p className="text-white" >Token Price</p>
                                            <p>$2.2869</p>
                                        </div>
                                        <div className="flex justify-between" >
                                            <p className="text-white" >Referral</p>
                                            <p>Nan</p>
                                        </div>
                                    </div>



                                </div>

                        }

                    </div>
                </div>


            </div>

            {
                rightContainer ?
                    " "
                    :
                    <div id="approve-banner" className="flex tablet:flex-wrap tablet:gap-5 gap-3 justify-evenly my-10 px-5 " >

                        <div className="flex gap-2 items-start max-w-[28rem] " >
                            <img className=" w-[2rem]" src={approveImg} alt="" />
                            <div className="flex flex-col justify-start gap-3" >

                                <h1 className="text-3xl" >Approve Tokens</h1>
                                <p className="text-gray-300 font-thin" >Approve Voip Token to interact with Voip Token Staking smart contract</p>
                            </div>
                        </div>

                        <div className="flex  w-[25rem] " >
                            <div className="relative h-fit w-full ">
                                <div className="  absolute inset-y-0 start-0 mx-3 flex items-center   pointer-events-none">
                                    <img loading="lazy" src={rcoin} className="h-[30px]  w-[30px] " alt="" />
                                </div>

                                <input type="number" id="input-group-1" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg  block w-full px-14 py-4 " placeholder=" Voip Token Amount " />

                            </div>
                        </div>

                        <div className="flex w-[25rem] h-fit justify-center" >

                            <button type="submit" className="  py-[0.8rem]  btn2 border-2 w-full px-5 rounded-xl    " onClick={readingData}> 
                                Approve Token
                            </button>
                        </div>
                    </div>

            }


            <div className=" px-14 py-2 w-full laptop:px-10 laptop:tablet:px-2    " >
                <div id="banner-main" className="  rounded-[10px] flex    gap-10 laptop:tablet:gap-5 flex-wrap justify-evenly">

                    <div id="banner-inner" className="flex gap-3 flex-col items-start justify-center rounded-2xl p-5 px-10 " >
                        <h5 className="text-lg text-white " >Token live price</h5>
                        <div className="flex gap-5" >

                            <p className="text-xl   " >$2.302</p>
                            <img className=" w-[7rem] " src={graf1} alt="" />
                        </div>
                    </div>

                    <div id="banner-inner" className="flex gap-3 flex-col items-start justify-center rounded-2xl p-5 px-10 " >
                        <h5 className="text-lg text-white " >Token live price</h5>
                        <div className="flex gap-5" >

                            <p className="text-xl   " >$2.302</p>
                            <img className=" w-[7rem] " src={graf1} alt="" />
                        </div>
                    </div>
                    <div id="banner-inner" className="flex gap-3 flex-col items-start justify-center rounded-2xl p-5 px-10 " >
                        <h5 className="text-lg text-white " >Token live price</h5>
                        <div className="flex gap-5" >

                            <p className="text-xl   " >$2.302</p>
                            <img className=" w-[7rem] " src={graf1} alt="" />
                        </div>
                    </div>
                    <div id="banner-inner" className="flex gap-3 flex-col items-start justify-center rounded-2xl p-5 px-10 " >
                        <h5 className="text-lg text-white " >Token live price</h5>
                        <div className="flex gap-5" >

                            <p className="text-xl   " >$2.302</p>
                            <img className=" w-[7rem] " src={graf1} alt="" />
                        </div>
                    </div>



                </div>
            </div>

        </>
    )
}