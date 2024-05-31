 
import diverceimg from "../../assets/images/diverceimg.svg"

const DiverceS3 = () => {
  return (
      <>
      <div id="diverce-main" className=" relative w-screen my-20 ">

        <div className=" absolute left-0 top-[-60%]    z-[-1]">
          <svg xmlns="http://www.w3.org/2000/svg" width={"100%"} height={1275} viewBox="0 0 877 1275" fill="none">
            <g filter="url(#filter0_bdf_1102_467)">
              <path d="M294.359 651.975C292.306 744.87 98.1467 866.605 5.2512 864.552C-87.6443 862.499 -156.825 717.23 -154.772 624.335C-152.719 531.439 37.7847 408.148 130.68 410.201C223.576 412.254 296.412 559.079 294.359 651.975Z" fill="#6721E6" />
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

        <div className=" absolute right-0 top-[-40%] tablet:top-[0%]    z-[-1]">
          <svg xmlns="http://www.w3.org/2000/svg" width={899} height={1192} viewBox="0 0 899 1192" fill="none">
            <g filter="url(#filter0_bdf_1102_466)">
              <path d="M975 668.438C975 741.567 654.343 839.181 569.628 739.677C481.468 739.677 410 680.394 410 607.264C410 534.135 566.183 410 654.343 410C742.503 410 975 595.308 975 668.438Z" fill="#8E00D3" fillOpacity="0.9" shapeRendering="crispEdges" />
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


        <div className="flex gap-10 px-3 justify-between w-full items-center  laptop:flex-col-reverse  " >

          <div id="left" className=" flex justify-center w-[50%] laptop:w-[100%]" >
            <img loading="lazy" src={diverceimg} alt="" />
          </div>

          <div id="right" className=" w-[40%] laptop:w-[100%] p-3  flex gap-5 flex-col  laptop:items-center ">
            <h1 className="text-5xl laptop:phone:text-3xl leading-tight laptop:text-center " >Diversify Your Staking Portfolio with <span className="text-primary-gradient" >Voip Token</span> </h1>
            <p className=" text-lg text-gray-400  laptop:text-center " >Voip Token supports a diverse range of cryptocurrencies for staking, providing you with ample opportunities to diversify your portfolio. Explore our list of supported cryptocurrencies and seize the chance to stake.</p>
            <a href="" className=" btn2 bg-white w-fit text-white px-4 py-2  rounded-3xl " > stake now ➜ </a>

          </div>
        </div>
      </div>
      </>
  )
}

export default DiverceS3