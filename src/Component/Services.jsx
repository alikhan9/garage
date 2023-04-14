import React from 'react'
import motor from '../Images/motor.png'
import tires from '../Images/tires.png'
import transmiss from '../Images/transmission.png'
import diagnostic from '../Images/diagnostic.png'
import battery from '../Images/battery.png'
import breaks from '../Images/pedal.png'

const Services = () => {
    return (
        <div className='p-8 bg-[hsl(200,5%,12%)] min-h-[90vh]'>
            <div className='max-w-[1280px] flex-col flex justify-center mx-auto text-xl text-slate-300' data-aos="fade-in" data-aos-easing="ease-in-out" data-aos-delay="200" data-aos-once="true">
                <div className='text-center p-6 mb-4 lg:m-0'>
                    <p className='text-xl text-orange-600 pb-4 font-medium'>Ce que l'on fait</p>
                    <div className='text-center'>
                        <span className='md:text-3xl text-2xl font-bold partial-border py-3'>Nos Services</span>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3  justify-between gap-10 items-center lg:[&>div]:h-[350px] [&>div]:h-[250px] min-h-[80vh]'>
                    <div className='flex flex-col justify-center items-center text-center p-4 bg-[hsl(200,6%,10%)]' data-aos="fade-in" data-aos-delay="250" data-aos-easing="ease-in-out" data-aos-once="true">
                        <div className='bg-[hsl(17,95%,22%)] rounded-[50%] p-2 border border-black relative'>
                            <div className='bg-[hsl(17,86%,39%)] border border-black p-3 lg:p-5 rounded-[50%]'>
                                <img src={motor} alt="..." className='w-[50px]' />
                            </div>
                        </div>
                        <h1 className='text-[hsl(211,40%,74%)] text-2xl py-4'>Moteur</h1>
                        <p className='text-lg text-[hsl(34,7%,60%)] pb-4'>There are many variations of passages of Lorem Ipsum available, but the majority have</p>
                    </div>
                    <div className='flex flex-col justify-center items-center text-center p-4 bg-[hsl(200,6%,10%)]' data-aos="fade-in" data-aos-delay="450" data-aos-easing="ease-in-out" data-aos-once="true">
                        <div className='bg-[hsl(155,100%,23%)] rounded-[50%] p-2 border border-black relative'>
                            <div className='bg-[hsl(156,79%,38%)] border border-black p-3 lg:p-5  rounded-[50%]'>
                                <img src={tires} alt="..." className='w-[50px]' />
                            </div>
                        </div>
                        <h1 className='text-[hsl(211,40%,74%)] text-2xl py-4'>Pneus</h1>
                        <p className='text-lg text-[hsl(34,7%,60%)] pb-4'>There are many variations of passages of Lorem Ipsum available, but the majority have</p>
                    </div>
                    <div className='flex flex-col justify-center items-center text-center p-4 bg-[hsl(200,6%,10%)]' data-aos="fade-in" data-aos-delay="650" data-aos-easing="ease-in-out" data-aos-once="true">
                        <div className='bg-[hsl(269,100%,22%)] rounded-[50%] p-2 border border-black relative'>
                            <div className='bg-[hsl(268,100%,27%)] border border-black p-3 lg:p-5  rounded-[50%]'>
                                <img src={transmiss} alt="..." className='w-[50px]' />
                            </div>
                        </div>
                        <h1 className='text-[hsl(211,40%,74%)] text-2xl py-4'>Transmission</h1>
                        <p className='text-lg text-[hsl(34,7%,60%)] pb-4'>There are many variations of passages of Lorem Ipsum available, but the majority have</p>
                    </div>
                    <div className='flex flex-col justify-center items-center text-center p-4 bg-[hsl(200,6%,10%)]' data-aos="fade-in" data-aos-delay="250" data-aos-easing="ease-in-out" data-aos-once="true">
                        <div className='bg-[hsl(201,100%,22%)] rounded-[50%] p-2 border border-black relative'>
                            <div className='bg-[hsl(202,100%,26%)] border border-black p-3 lg:p-5  rounded-[50%]'>
                                <img src={diagnostic} alt="..." className='w-[50px]' />
                            </div>
                        </div>
                        <h1 className='text-[hsl(211,40%,74%)] text-2xl py-4'>Diagnostique</h1>
                        <p className='text-lg text-[hsl(34,7%,60%)] pb-4'>There are many variations of passages of Lorem Ipsum available, but the majority have</p>
                    </div>
                    <div className='flex flex-col justify-center items-center text-center p-4 bg-[hsl(200,6%,10%)]' data-aos="fade-in" data-aos-delay="450" data-aos-easing="ease-in-out" data-aos-once="true">
                        <div className='bg-[hsl(39,97%,23%)] rounded-[50%] p-2 border border-black relative'>
                            <div className='bg-[hsl(39,99%,31%)] border border-black p-3 lg:p-5   rounded-[50%]'>
                                <img src={battery} alt="..." className='w-[50px]' />
                            </div>
                        </div>
                        <h1 className='text-[hsl(211,40%,74%)] text-2xl py-4'>Batterie</h1>
                        <p className='text-lg text-[hsl(34,7%,60%)] pb-4'>There are many variations of passages of Lorem Ipsum available, but the majority have</p>
                    </div>
                    <div className='flex flex-col justify-center items-center text-center p-4 bg-[hsl(200,6%,10%)]' data-aos="fade-in" data-aos-delay="650" data-aos-easing="ease-in-out" data-aos-once="true">
                        <div className='bg-[hsl(343,91%,22%)] rounded-[50%] p-2 border border-black relative'>
                            <div className='bg-[hsl(342,100%,32%)] border border-black p-3 lg:p-5  rounded-[50%]'>
                                <img src={breaks} alt="..." className='w-[50px]' />
                            </div>
                        </div>
                        <h1 className='text-[hsl(211,40%,74%)] text-2xl py-4'>Freins</h1>
                        <p className='text-lg text-[hsl(34,7%,60%)] pb-4'>There are many variations of passages of Lorem Ipsum available, but the majority have</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Services