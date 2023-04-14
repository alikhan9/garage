import React from 'react'

const About = () => {

    return (
        <div className='p-8 bg-[hsl(200,6%,10%)] min-h-[75vh] overflow-hidden ' >
            <div className='md:max-w-[1280px] max-w-[100vw] flex-col flex justify-center mx-auto text-xl text-slate-300' data-aos="fade-in" data-aos-easing="ease-in-out" data-aos-delay="200" data-aos-once="true">
                <div className='flex xl:flex-row flex-col justify-center 2xl:max-w-none xl:max-w-6xl lg:justify-between w-full min-h-[75vh]  items-center relative'>
                    <div className='flex flex-col justify-between max-w-[578px]'>
                        <div className=' py-8 xl:text-start text-center'>
                            <span className='lg:text-5xl md:text-4xl text-3xl relative  text-[hsl(210,37%,72%)] partial-border-left font-light'>Qui somme nous?</span>
                        </div>
                        <p className='leading-10 text-xl md:text-2xl md:text-justify text-[hsl(34,7%,60%)] font-light'>
                            Nous sommes un Garage situé à Angers, avec pour activité principale la vente de véhicules d'occasion de toutes marques et de tous types.<br /><br />
                            Avec une sélection de plus de 30 véhicules rigoureusement sélectionnés, révisés et garantis.<br /><br />
                            ASM AUTO c'est : <span className='text-orange-500 italic'>simplicité</span>,  <span className='text-orange-500 italic'>rapidité</span> et des <span className='italic text-orange-500'>prix très attractifs.</span>
                        </p>
                    </div>
                    <div className='relative py-4'>
                        <div className='text-white flex md:gap-20 gap-6 absolute md:right-[-55%] right-[-55%] top-[31%] md:top-[29%]'>
                            <div className='bg-[hsl(268,91%,21%)] rounded-[50%] xl:w-[300px] xl:h-[300px] md:w-[280px] w-[150px] h-[150px] md:h-[280px] z-10 opacity-80 flex items-center flex-col justify-center md:gap-6 gap-2'>
                                <h1 className='md:text-5xl text-2xl font-light'>200+</h1>
                                <p className='font-light'>Voiture repris</p>
                            </div>
                            <div className='bg-[hsl(39,91%,27%)] rounded-[50%]  z-10 opacity-80 xl:w-[300px] xl:h-[300px] md:w-[280px] w-[150px] h-[150px] md:h-[280px] flex items-center flex-col justify-center md:gap-6 gap-2'>
                                <h1 className='md:text-5xl text-2xl font-light'>1026</h1>
                                <p className='font-light'>Client satisfait</p>
                            </div>
                        </div>
                        <div className='text-white flex flex-col md:right-[8%] gap-20  relative'>
                            <div className='bg-[hsl(202,91%,23%)] rounded-[50%] xl:w-[300px] xl:h-[300px] md:w-[280px] w-[150px] h-[150px] md:h-[280px] flex items-center flex-col justify-center md:gap-6 gap-2'>
                                <h1 className='md:text-5xl text-2xl font-light'>500+</h1>
                                <p className='font-light'>Voiture vendu</p>
                            </div>
                            <div className='bg-[hsl(17,88%,20%)] rounded-[50%] z-20 opacity-80 xl:w-[300px] xl:h-[300px] md:w-[280px] w-[150px] h-[150px] md:h-[280px] flex items-center flex-col justify-center md:gap-6 gap-2'>
                                <h1 className='md:text-5xl text-2xl'>25+</h1>
                                <p className='font-light text-center'>Année d'expérience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About