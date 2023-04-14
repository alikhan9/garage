import React from 'react'
import schedule from '../Images/horaire.png'
import phone from '../Images/phone.png'
import email from '../Images/email.png'
import address from '../Images/adresse.png'

const Contact = () => {
    return (
        <div className='pb-36 bg-[hsl(200,6%,10%)]' id='contact'>
            <div className='min-h-[80vh] bg-[hsl(200,6%,10%)] pb-44' data-aos="fade-in" data-aos-easing="ease-in-out" data-aos-delay="200" data-aos-once="true">
                <div className='relative'>
                    <div className='text-center p-16'>
                        <span className='font-semibold text-center md:text-3xl text-2xl lg:text-5xl text-[hsl(211,40%,74%)] partial-border py-3'>Contactez-nous</span>
                    </div>
                </div>
                <div className="flex justify-center min-h-[600px]">
                    <div className="flex flex-col  lg:flex-row rounded-md overflow-hidden lg:shadow-lg">
                        <div className="bg-[hsl(200,5%,12%)] px-8 lg:px-20 xl:py-12 pt-12 flex items-center">
                            <div>
                                <div>
                                    <div className="flex items-center mb-10">
                                        <div className="p-2 rounded-full mr-6 bg-blue-100">
                                            <img src={phone} className="w-6" alt="" />
                                        </div>
                                        <div>
                                            <span className="block text-lg font-light text-orange-500">Telephone</span>
                                            <span className="block text-xl font-extralight text-gray-200 italic">02 57 10 14 24</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center mb-10">
                                    <div className="p-2 rounded-full mr-6 bg-blue-100">
                                        <img src={email} className="w-6" alt="" />
                                    </div>
                                    <div>
                                        <span className="block text-lg font-light text-orange-500">Email</span>
                                        <span className="block text-xl font-extralight text-gray-200 italic">accounting@business.com</span>
                                    </div>
                                </div>
                                <div className="flex items-center mb-10">
                                    <div className="p-2 rounded-full bg-blue-100 mr-6">
                                        <img src={schedule} className="w-6" alt="" />
                                    </div>
                                    <div>
                                        <span className="block text-lg font-light text-orange-500">Horaires</span>
                                        <span className="block text-xl font-extralight text-gray-200 italic">Lundi au Vendredi de 9h00-12h00 et 14:00-19h00</span>
                                        <span className="block text-xl font-extralight text-gray-200 italic">Samedi de 9h00-13h00</span>
                                    </div>
                                </div>
                                <div className="flex items-center mb-10">
                                    <div className="p-2 rounded-full bg-blue-100 mr-6">
                                        <img src={address} className="w-6" alt="" />
                                    </div>
                                    <div>
                                        <span className="block text-lg font-light text-orange-500">Adresse</span>
                                        <span className="block text-xl font-extralight text-gray-200 italic">15 Rue du Daguenet, 49100 Angers</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[hsl(200,5%,12%)] px-8 lg:px-20 lg:pt-12">
                            <div className="bg-[hsl(200,5%,12%)] px-8 lg:px-20 pt-12 flex items-center">
                                <div>
                                    <h2 className="text-xl lg:text-2xl font-light mb-1 text-gray-200">Une question?</h2>
                                    <span className="text-base mb-6 text-gray-200 italic">Envoyez-nous un message et nous vous contacterons.</span>
                                    <form name="contact" data-netlify="true" autoComplete="off" netlify-honeypot="bot-field">
                                        <p className="hidden">
                                            <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
                                        </p>
                                        <div className="py-4">
                                            <input type="text" className='block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-orange-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer' id="name" name="name" required pattern="\S+.*" placeholder="Nom" />
                                        </div>
                                        <div className="py-4">
                                            <input type="email" id="email" className='block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer' name="email" required placeholder="Email" />
                                        </div>
                                        <div>
                                            <textarea name="question" placeholder="Votre message ..." className='p-2 w-full' id="question" cols="30" rows="6" minLength="10"
                                                maxLength="100" required></textarea>
                                        </div>
                                        <button type="submit" id="submit-button"
                                            className="w-full text-base uppercase text-center px-5 duration-300 py-3 shadow-md my-4 lg:mb-0 bg-orange-500  text-slate-800 hover:bg-orange-400 hover:text-slate-900 focus:ring-4 focus:ring-blue-300">
                                            Envoyer
                                        </button>
                                        <span id="success"
                                            className="hidden absolute mt-2 px-4 py-2 font-light border rounded-sm border-green-500 bg-green-100 text-green-600">Thanks!
                                            We'll be in touch soon.</span>
                                        <span id="error"
                                            className="hidden absolute mt-2 px-4 py-2 font-light border rounded-sm border-red-500 bg-red-100 text-red-600">Whoops...
                                            Something went wrong.</span>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-96 relative' data-aos="fade-in" data-aos-easing="ease-in-out" data-aos-delay="200" data-aos-once="true">
                <div className="absolute top-0 right-0 left-0 bottom-0 pointer-events-none bg-blue-100 opacity-20 "></div>
                <iframe className='bg-dark' width="100%" height="100%" frameBorder="0" scrolling="yes" marginHeight="0" marginWidth="0" title='map'
                    src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=fr&amp;q=ASM%20AUTO,%20Rue%20du%20Daguenet,%20Angers,%20France&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                </iframe>
            </div>
        </div>

    )
}

export default Contact