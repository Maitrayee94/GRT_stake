
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { GRT_TOKEN_CONTRACT_ADDRESS, GRT_STAKING_CONTRACT_ADDRESS ,GRT_TOKEN_CONTRACT_ABI, GRT_STAKING_CONTRACT_ABI } from "../constants/index.js";

// import airo from "../assets/icons/aarowgreen.svg"
import logo from "../assets/logo/GRT_logo_wht.png"
const Navbar = () => {
    const [account, setAccount] = useState("");
    const [acaddr, setacaddr ] = useState("Connect Wallet");
    const [newValue, SetNewvalue] = useState("");
    const [ address, setAddress] = useState("");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(GRT_STAKING_CONTRACT_ADDRESS, GRT_STAKING_CONTRACT_ABI, signer);

    const connectMetamask = async (event) => {
        event.preventDefault();
        if (typeof window.ethereum !== "undefined") {
          try {
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
            setAccount(accounts[0]);
            console.log(typeof(accounts[0]));
            const format = accounts[0].slice(0,4) + "..." + accounts[0].slice(-3);
            setacaddr(format);
          } catch (error) {
            console.error(error);
          }
        }
      };


    return (
        <>
            <div className="flex flex-wrap pt-5 px-10 justify-between items-center  " >
                {/* <a href="/" className=" h-[3rem]  " >
                  <img loading="lazy" className="h-full w-full" src={logo} alt="" />
                 
              </a> */}

                



                
                <a href=" " className="z-[99]"  >
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img loading="lazy" src={logo} width={82} height={82} alt="GRT" />
                        {/* <h1 className=' text-4xl font-bold font-outfit  text-primary-gradient phone:text-xl ' >grtpay Finance</h1> */}
                    </div>
                </a>

                <div className="flex" >
                    {/* <img  src={airo} className="w-[100px] h-[40px] phone:hidden  " alt="" /> */}
                    <Link to="/" className=" btn2 bg-white w-fit text-white px-5 py-2   rounded-3xl " onClick={connectMetamask}>{acaddr}  </Link>

                </div>

                

            </div>
        </>
    )
}

export default Navbar