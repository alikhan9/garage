import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import * as Scroll from 'react-scroll';

const Hero = () => {

    var scroll = Scroll.animateScroll;

    const navigate = useNavigate();

    const resetScrollPosition = () => {
        scroll.scrollToTop();
    }

    return (
        <div className='mx-auto p-8 bg-[hsl(200,6%,10%)] min-h-[90vh] relative home z-10'>
            <div className='layer flex justify-center items-center'>
                <div className='max-w-[1280px] flex flex-col gap-12 justify-center items-center mx-auto [&>h1]:text-slate-200 '>
                    <h1 className='md:text-5xl text-4xl text-center font-light'>Découvrez notre sélection de véhicules au meilleur prix</h1>
                    <button onClick={() => navigate("/vehicules")} className='text-slate-200 font-light border-slate-200 border-2 overflow-hidden py-3 hover:text-orange-400 hover:border-orange-400 duration-300 px-10 md:text-5xl text-4xl  rounded-lg'>
                        Véhicules
                    </button>
                </div>
            </div>
            <button onClick={resetScrollPosition} className='bg-orange-600 rounded-[50%] fixed right-[3%] bottom-[4%] border border-black p-2 hover:scale-105'>
                <AiOutlineArrowUp size={35} color={'rgb(203 213 225)'} />
            </button>
        </div>
    )
}

export default Hero;