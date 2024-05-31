
import htb1 from "../../assets/icons/htb1.svg"
import htb2 from "../../assets/icons/htb2.svg"
import htb3 from "../../assets/icons/htb3.svg"
import htb4 from "../../assets/icons/htb4svg.svg"
import htbairos from "../../assets/icons/htbairos.webp"


const HowToStake = () => {
    return (
        <>
            <div id="howtostake" className=" flex flex-col  gap-20 min-h-[70vh] w-screen my-20 "  >

                <div id="heading" className=" flex flex-col items-center gap-3  " >
                    <h1 className=" text-5xl font-bold tablet:text-4xl  text-center px-4  " >How to <span className="text-primary-gradient"> stake GrtPay </span> Token  </h1>
                    <p className=" text-md  text-center  max-w-[50rem] text-gray-200 px-4 " >To stake GrtPay tokens, navigate to the designated staking page on the GrtPay platform. Connect your wallet, choose the amount of GrtPay tokens you wish to stake, and confirm the transaction to start earning rewards and participate in network consensus.</p>
                </div>

                <div className=" relative flex gap-3 justify-between px-5  tablet:flex-wrap tablet:justify-center tablet:gap-10 ">

                    <img loading="lazy" className="absolute laptop:hidden  w-[70vw]   top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 " src={htbairos} alt="" />

                    <div className=" max-w-[20rem] tablet:max-w-[15rem] tablet:phone:max-w-[25rem] flex gap-7 flex-col items-center justify-center text-center " >
                        <img loading="lazy" src={htb1} alt="" />
                        <div className=" space-y-1 " >
                            <h3 className=" font-bold  " >Connect wallet </h3>
                            <p className="text-gray-200 max-w-[19rem] font-thin" >Hook up your wallet, follow the prompts. Easy peasy.
                            </p>
                        </div>
                    </div>

                    <div className=" max-w-[20rem] tablet:max-w-[15rem] tablet:phone:max-w-[25rem] flex gap-7 flex-col items-center justify-center text-center " >
                        <img loading="lazy" src={htb2} alt="" />
                        <div className=" space-y-1 " >
                            <h3 className=" font-bold  " >Select Amount And Duration </h3>
                            <p className="text-gray-200 max-w-[19rem] font-thin" >Decide how much and how long you wanna stake. {"We've"} got options.
                            </p>
                        </div>
                    </div>
                    <div className=" max-w-[20rem] tablet:max-w-[15rem] tablet:phone:max-w-[25rem] flex gap-7 flex-col items-center justify-center text-center " >
                        <img loading="lazy" src={htb3} alt="" />
                        <div className=" space-y-1 " >
                            <h3 className=" font-bold  " >Stake GrtPay</h3>
                            <p className="text-gray-200 max-w-[19rem] font-thin" >Hit {"'Stake Now'"} to get started. {"You're"} now earning while you sleep.</p>
                        </div>
                    </div>


                    <div className=" max-w-[20rem] tablet:max-w-[15rem] tablet:phone:max-w-[25rem] flex gap-7 flex-col items-center justify-center text-center " >
                        <img loading="lazy" src={htb4} alt="" />
                        <div className=" space-y-1 " >
                            <h3 className=" font-bold  " >Clame Reward</h3>
                            <p className="text-gray-200 max-w-[19rem] font-thin" >  {"Don't"} forget to claim your staking reward now. {"It's"} waiting for you!</p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default HowToStake