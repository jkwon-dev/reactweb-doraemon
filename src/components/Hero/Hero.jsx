import { FaStar, FaYoutube } from 'react-icons/fa'
import HeroImg from '../../assets/dora-hero.png'
import DoraImg from '../../assets/dora.png'
import HeroBottom from './HeroBottom'
import { useState } from 'react'
import { IoIosClose } from 'react-icons/io'


const Hero = () => {
    const[isPlay, setIsPlay] = useState(false)
    const handlePlay = () => {
        setIsPlay(!isPlay)
    }
  return (
    <>
        <div className='min-h-[700px] center flex-col relative'>
            <div className='container mt-12 sm:mt-0 pb-20 sm:pb-0'>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 relative z-20'>
                {/* text content section */}
                <div className='space-y-3 md:space-y-7 flex flex-col justify-center text-center sm:text-left px-10 sm:px-0'>
                    <div data-aos="fade-up">
                        <h1 data-aos="fade-up" className='text-4xl md:text-6xl font-bold'>Watch Now in</h1>
                        <h1 data-aos="fade-up" className='text-6xl font-bold text-primary'>3D</h1>
                    </div>
                    <p  data-aos="fade-up" data-aos-delay="300" className='text-gray-500 text-sm font-semibold'>
                        This first full story in the Doraemon series 
                        was published in January 1970
                    </p>
                    <div data-aos="fade-up" data-aos-delay="400" className='mx-auto sm:mx-0'>
                        <button 
                        onClick={handlePlay}
                        className='primary-btn flex items-center justify-center gap-3'>Play on
                            <span>
                                <FaYoutube  className='text-2xl'/>
                            </span>
                        </button>
                    </div>
                </div>
                {/* Image content section */}
                <div data-aos="zoom-in" className='relative'>
                    <img src={HeroImg} alt="Image" className='w-[180px] sm:w-[240px] lg:w-[340px] mx-auto relative z-30'/>
                    <div className='absolute z-0 bottom-0 left-0 bg-black w-[240px] h-[20px] mx-auto blur-2xl'></div>
                </div>
                {/* Review content section */}
                <div data-aos="slide-left" className='sm:pl-16 md:pl-24 flex justify-center sm:justify-end'>
                    <div className='flex items-center justify-end'>
                        <div className='space-y-4'>
                        <img src={DoraImg} alt="" className='w-full h-[100px] object-cover rounded-xl shadow-md hover:scale-110 duration-200 cursor-pointer' />
                        <p className='text-sm flex items-center gap-2'>
                            4.7{ " "}
                            <span>
                                <FaStar className='text-primary' />
                            </span>
                        </p>
                        <p className='text-sm text-gray-400'> 
                            Bandai Figuartszero Doraemon
                        </p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            {/*  Hero Bottom section */}
            <HeroBottom />
        </div>

        {/* video Player */}
        {isPlay && ( 
            <div className='absolute z-[9999] top-0 left-0 w-full h-full bg-black/70 backdrop-blur-sm'>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <div className='bg-white m-3 p-5 rounded-lg shadow-md'>
                        <div className='flex items-center justify-between pb-3'>
                            <h1>Subscribe out TCJ YouTube chanel</h1>
                            <IoIosClose className='text-3xl cursor-pointer hover:scale-110 duration-200'
                            onClick={handlePlay}
                            />
                        </div>

                        <iframe 
                            width="600" 
                            height="315" 
                            src="https://www.youtube.com/embed/8QW_tgAYM5Y?si=MwJnIGNWU1XBH-i0" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>
                            </iframe>

                    </div>
                </div>
            </div>
        )}
    </>
  )
}

export default Hero