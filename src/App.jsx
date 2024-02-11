import { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

const App =() =>{
  useEffect(() => {
    AOS.init(
      {
        duration: 600,
        easing: "ease-in",
        offset: 100,
      }
    )
  }, [])

  return (
    <>
    <div className='overflow-hidden'>
      <Navbar />
      <Hero />
    </div>
    </>
    
  )
}

export default App
