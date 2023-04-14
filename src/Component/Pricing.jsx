import React, { useState } from 'react'
import car from '../Images/voiture.jpg'
import motor from '../Images/motor.png'
import tires from '../Images/tires.png'
import transmiss from '../Images/transmission.png'
import diagnostic from '../Images/diagnostic.png'
import battery from '../Images/battery.png'
import breaks from '../Images/pedal.png'

const moteur = ["50", "Moteur", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi natus id facilis quae", "bg-[hsl(15,87%,15%)]", "text-[hsl(17,86%,59%)]", "right-[74%] top-[40%]"];
const pneus = ["75", "Pneus", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi natus id facilis quae", "bg-[hsl(161,84%,15%)]", "text-[hsl(156,79%,58%)]", "right-[86%] top-[61.5%]"];
const transmission = ["90", "Transmission", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi natus id facilis quae", "bg-[hsl(210,6%,13%)]", "text-[hsl(268,100%,57%)]", "right-[58%] top-[38%]"];
const diagnostique = ["30", "Diagnostique", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi natus id facilis quae", "bg-[hsl(210,6%,14%)]", "text-[hsl(201,100%,71%)]", "right-[74%] top-[40%]"];
const batterie = ["150", "Batterie", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi natus id facilis quae", "bg-[hsl(39,72%,15%)]", "text-[hsl(39,99%,65%)]", "right-[74%] top-[40%]"];
const freins = ["60", "Freins", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi natus id facilis quae", "bg-[hsl(343,90%,15%)]", "text-[hsl(342,100%,65%)]", "right-[76%] top-[70%]"];



const Pricing = () => {

    const [active, setActive] = useState({ name: moteur[1], price: moteur[0], description: moteur[2], color: moteur[3], title: moteur[4], position: moteur[5] });

    const setDetails = (details) => {
        setActive({ price: details[0], name: details[1], description: details[2], color: details[3], title: details[4], position: details[5] });
    }


    return (
        <div className='p-8 bg-[rgb(29,31,32)] min-h-[90vh]' id='pricing'>
            <div className='max-w-[1280px] flex-col flex justify-center mx-auto text-xl text-slate-300' data-aos="fade-in" data-aos-easing="ease-in-out" data-aos-delay="200" data-aos-once="true">
                <div className='text-center p-6'>
                    <p className='text-xl text-orange-600 pb-4 font-medium'>Nos tarifs</p>
                    <div className='text-center'>
                        <span className='md:text-3xl text-2xl font-bold partial-border py-3'>Prix des services</span>
                    </div>
                </div>
                <div className='grid md:flex md:[&>div]:w-[110px] xl:[&>div]:w-w-[140px] grid-cols-[_repeat(3,_100px)_] md:justify-between xl:gap-0 md:gap-2 justify-evenly gap-4 py-6 [&>div]:hover:cursor-pointer'>
                    <div className='bg-[hsl(17,95%,22%)] rounded-[50%] p-2 border-[1px] border-black relative' onClick={() => setDetails(moteur)} data-aos="fade-down" data-aos-delay="300" data-aos-easing="ease-in-out" data-aos-once="true" >
                        <div className={`${active.name === "Moteur" ? "bg-[hsl(17,86%,39%)]" : "bg-[rgb(29,31,32)]"} border-[1px] border-black p-6 rounded-[50%]`}>
                            <img src={motor} alt="..." className='w-[50px]' />
                        </div>
                    </div>
                    <div className='bg-[hsl(155,100%,23%)] rounded-[50%] p-2 border border-black relative' onClick={() => setDetails(pneus)} data-aos="fade-down" data-aos-delay="500" data-aos-easing="ease-in-out" data-aos-once="true">
                        <div className={`${active.name === "Pneus" ? "bg-[#14ad70]" : "bg-[rgb(29,31,32)]"} border border-black p-6 rounded-[50%]`}>
                            <img src={tires} alt="..." className='w-[50px]' />
                        </div>
                    </div>
                    <div className='bg-[hsl(269,100%,22%)] rounded-[50%] p-2 border border-black relative' onClick={() => setDetails(transmission)} data-aos="fade-down" data-aos-delay="700" data-aos-easing="ease-in-out" data-aos-once="true">
                        <div className={`${active.name === "Transmission" ? "bg-[#40008a]" : "bg-[rgb(29,31,32)]"} border border-black p-6 rounded-[50%]`}>
                            <img src={transmiss} alt="..." className='w-[50px]' />
                        </div>
                    </div>
                    <div className='bg-[hsl(201,100%,22%)] rounded-[50%] p-2 border border-black relative' onClick={() => setDetails(diagnostique)} data-aos="fade-down" data-aos-delay="900" data-aos-easing="ease-in-out" data-aos-once="true">
                        <div className={`${active.name === "Diagnostique" ? "bg-[#005485]" : "bg-[rgb(29,31,32)]"} border border-black p-6 rounded-[50%]`}>
                            <img src={diagnostic} alt="..." className='w-[50px]' />
                        </div>
                    </div>
                    <div className='bg-[hsl(39,97%,23%)] rounded-[50%] p-2 border border-black relative' onClick={() => setDetails(batterie)} data-aos="fade-down" data-aos-delay="1100" data-aos-easing="ease-in-out" data-aos-once="true">
                        <div className={`${active.name === "Batterie" ? "bg-[#9d6701]" : "bg-[rgb(29,31,32)]"} border border-black p-6 rounded-[50%]`}>
                            <img src={battery} alt="..." className='w-[50px]' />
                        </div>
                    </div>
                    <div className='bg-[hsl(343,91%,22%)] rounded-[50%] p-2 border border-black relative' onClick={() => setDetails(freins)} data-aos="fade-down" data-aos-delay="1300" data-aos-easing="ease-in-out" data-aos-once="true">
                        <div className={`${active.name === "Freins" ? "bg-[#a30031]" : "bg-[rgb(29,31,32)]"} border border-black p-6 rounded-[50%]`}>
                            <img src={breaks} alt="..." className='w-[50px]' />
                        </div>
                    </div>
                </div>
                <div className='xl:flex gap-4 py-6 relative'>
                    <div className={`xl:w-[30%] w-full text-center xl:text-start ${active.color} flex flex-col gap-4 rounded-lg p-10 duration-300 ease-linear`}>
                        <h1 className={`${active.title} font-bold text-3xl lg:text-5xl`}>${active.price}</h1>
                        <h2 className={`text-2xl lg:text-3xl font-light`}>{active.name}</h2>
                        <p className='text-lg font-extralight'>{active.description}</p>
                    </div>
                    <div className='w-full relative'>
                        <img src={car} alt="..." className='w-[100%] ' />
                        <div className={`${active.color} rounded-[50%] flex justify-center lg:[&>div]:w-[16px] lg:[&>div]:h-[16px] [&>div]:w-[10px] [&>div]:h-[10px]  items-center absolute  ${active.position} pulse lg:w-[25px] w-[18px] h-[18px] lg:h-[25px]`}>
                            {active.name === "Moteur" ? <div className={`bg-[hsl(17,86%,59%)] rounded-[50%]`}></div> : null}
                            {active.name === "Pneus" ? <div className={`bg-[hsl(156,79%,58%)] rounded-[50%]`}></div> : null}
                            {active.name === "Transmission" ? <div className={`bg-[hsl(268,100%,57%)] rounded-[50%]`}></div> : null}
                            {active.name === "Diagnostique" ? <div className={`bg-[hsl(201,100%,71%)] rounded-[50%]`}></div> : null}
                            {active.name === "Batterie" ? <div className={`bg-[hsl(39,99%,65%)] rounded-[50%]`}></div> : null}
                            {active.name === "Freins" ? <div className={`bg-[hsl(342,100%,65%)] rounded-[50%]`}></div> : null}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Pricing