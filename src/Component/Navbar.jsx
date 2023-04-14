import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    const resetScrollPosition = () => {
        window.scrollTo(0, 0);
        setShowNavbar(false);
    }

    const [showNavbar, setShowNavbar] = useState(false);

    return (
        <div className='mx-auto p-8 bg-[hsl(200,6%,10%)]' id='home'>
            <div className='max-w-[1280px] md:flex justify-between hidden  items-center mx-auto text-xl text-slate-400'>
                <div className='flex items-center gap-4'>
                    <p className='text-4xl text-orange-600'>ASM AUTO</p>
                </div>
                <div>
                    <ul className='flex gap-8'>
                        <li className='hover:cursor-pointer hover:text-slate-100 duration-300'>
                            <Link to="/" onClick={resetScrollPosition}>
                                Acceuil
                            </Link>
                        </li>
                        <li className='hover:cursor-pointer hover:text-slate-100 duration-300'>
                            <Link to="/vehicules" onClick={resetScrollPosition}>
                                Véhicules
                            </Link>
                        </li>
                        <li className='hover:cursor-pointer hover:text-slate-100 duration-300'>
                            <Link to="/contact" onClick={resetScrollPosition}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={`max-w-[1280px] md:hidden bg-[hsl(200,6%,10%)] left-0 fixed top-0 z-50 text-xl text-slate-300`}>
                <div className='flex justify-between items-center w-[100vw] h-14 px-12 py-6'>
                    <p className='text-3xl text-orange-600'>ASM AUTO</p>
                    {showNavbar ?
                        <AiOutlineClose color={"rgb(203 213 225)"} onClick={() => setShowNavbar(!showNavbar)} size={35} />
                        :
                        <FiMenu color={"rgb(203 213 225)"} onClick={() => setShowNavbar(!showNavbar)} size={35} />}
                </div>
                <div className={`${showNavbar ? 'translate-x-0' : 'translate-x-[-100%]'} duration-300 bg-[hsl(200,6%,10%)] absolute h-[100vh] w-[50vw] z-40 left-0`}>
                    <ul className='flex flex-col text-center py-4 text-3xl'>
                        <li className='border-b-[1px] border-[hsl(200,6%,22%)] py-4 w-full'>
                            <Link to="/" onClick={resetScrollPosition}>
                                Acceuil
                            </Link>
                        </li>
                        <li className='border-b-[1px] border-[hsl(200,6%,22%)] py-4 w-full'>
                            <Link to="/vehicules" onClick={resetScrollPosition}>
                                Véhicules
                            </Link>
                        </li>
                        <li className='border-b-[1px] border-[hsl(200,6%,22%)] py-4 w-full'>
                            <Link to="/contact" onClick={resetScrollPosition}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;