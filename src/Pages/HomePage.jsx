
import Footer from '../Components/Footer'
// import DiverceS3 from '../Components/Home-ke-components/DiverceS3'
// import Earning from '../Components/Home-ke-components/Earning'
import Hero from '../Components/Home-ke-components/Hero'
import HowToStake from '../Components/Home-ke-components/HowToStake'
import RefarEarn from '../Components/Home-ke-components/RefarEarn'
// import Navbar from '../Components/Navbar'
import Refral from '../Components/StakePage-ke-sections/Refral'

const HomePage = () => {
  return (
    <>
      
      <Hero />
      <Refral/>
      {/* <Earning /> */}
      {/* <DiverceS3 /> */}
      <RefarEarn />
      <HowToStake />
      <Footer/>
    </>
  )
}

export default HomePage