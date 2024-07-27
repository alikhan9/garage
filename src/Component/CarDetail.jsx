import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import 'pure-react-carousel/dist/react-carousel.es.css';
import distanceImg from '../Images/route.png'
import motorImg from '../Images/moteur.png'
import transmissionImg from '../Images/manual-transmission.png'
import gasolineImg from '../Images/gasoline.png'
import calendarImg from '../Images/calendar.png'
import { AiFillCaretRight } from 'react-icons/ai'
import DoubleDivFlex from './DoubleDivFlex';
import { db, storage } from '../firebase';
import { doc, increment, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';
import Carousel from 'react-gallery-carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-gallery-carousel/dist/index.css';

const CarDetail = () => {

    const navigate = useNavigate();

    const [car, setCar] = useState([]);

    const [images, setImages] = useState([]);


    useEffect(() => {
        const val = JSON.parse(localStorage.getItem("car"));
        setCar(val);
        if (!val?.id)
            navigate('/vehicules');
        else {
            const dbCar = doc(db, 'voiture', val.id);
            updateDoc(dbCar, { vue: increment(1) });
            fetchImages(val);
        }
    }, []);

    const fetchImages = (val) => {
        setImages([]);
        val?.images?.forEach((img, index) => {
            const pathReference = ref(storage, `images/${val.id}/normal/${img}`);
            getDownloadURL(pathReference).then((url) => {
                setImages((prev) => [...prev, {
                    filename: img,
                    src: url,
                    sizes: '(max-width: 400px) 400px',
                    alt: `...`,
                    thumbnail: url,
                    order: index
                }]);
            });
        });
    }

    useEffect(() => {
        window.localStorage.setItem('car', JSON.stringify(car));
    }, [car]);

    return (
        <div className="flex justify-center  bg-[hsl (200,5%,12%)] slick-thumb mx-auto w-full font-light text-slate-200 p-4">
            <div className="xl:max-w-[1280px] md:max-w-2xl lg:max-w-4xl  w-[100vw] px-4 text-slate-100">
                <div className='pb-6 flex justify-center items-center min-w-full'>
                    <Carousel images={images?.sort((a, b) => a.order > b.order ? 1 : -1)} isLoop={false} hasLeftButton={false} hasRightButton={false} hasIndexBoard={"topRight"} shouldLazyLoad={true} canAutoPlay={false} shouldMaximizeOnClick={true} shouldMinimizeOnClick={true} hasSizeButton={false} widgetsHasShadow={false} style={{height: 600, maxWidth: 800, background: 'rgb(29,31,32)' }} />
                </div>
                {!car?.id ? null :
                    <div className='mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-none'>
                        <div className='bg-[hsl(200,5%,10%)] flex md:justify-between md:flex-row flex-col'>
                            <div className='p-6'>
                                <div className='flex justify-between'>
                                    <h1 className='text-blue-400 md:text-3xl text-2xl'>{car.fiche_technique["Modèle"]}</h1>
                                    <h1 className='text-blue-400 md:text-3xl text-2xl min-h-full md:hidden'>{car.fiche_technique["Prix TTC"]}</h1>
                                </div>
                                <p className='text-gray-100 text-lg font-extralight'>{car.fiche_technique["Finition"]}</p>
                            </div>
                            <div className='flex p-6 items-center justify-center h-full gap-4'>
                                <h1 className='text-blue-400 md:text-3xl text-2xl min-h-full hidden md:block'>{car.fiche_technique["Prix TTC"]}</h1>
                                <button className='border border-orange-400 hover:text-orange-500 md:mt-6 hover:border-orange-600 text-orange-400 px-4 translate-y-[-20%] h-[50px] hover:cursor-pointer rounded-lg' onClick={() => navigate("/contact")}>Contactez-nous</button>
                            </div>
                        </div>
                        <div className='bg-[hsl(200,5%,10%)] p-2 pb-14 mx-auto mt-2'>
                            <div className='text-center my-10'>
                                <span className='w-full text-3xl text-blue-400 partial-border ajust py-3'>Informations</span>
                            </div>
                            <div className='md:flex grid grid-cols-2 gap-4 mt-9 text-center'>
                                <div className="flex flex-col mx-auto items-center bg-[hsl(200,5%,12%)] py-2 w-[160px]">
                                    <img className='w-8 py-2' src={calendarImg} alt="" />
                                    <h1 className=''>Année</h1>
                                    <h2 className='text-gray-300 font-extralight'>{car.fiche_technique['Millésime']}</h2>
                                </div>
                                <div className="flex flex-col mx-auto items-center bg-[hsl(200,5%,12%)]  py-2 w-[160px]">
                                    <img className='w-8 py-2' src={distanceImg} alt="" />
                                    <h1 className=''>Kilométrage</h1>
                                    <h2 className='text-gray-300 font-extralight'>{car.fiche_technique['Kilométrage']}</h2>
                                </div>
                                <div className="flex flex-col mx-auto items-center bg-[hsl(200,5%,12%)] py-2 w-[160px]">
                                    <img className='w-8 py-2' src={gasolineImg} alt="" />
                                    <h1 className=''>Carburant</h1>
                                    <h2 className='text-gray-300 font-extralight'>{car.fiche_technique['Énergie']}</h2>
                                </div>
                                <div className="flex flex-col mx-auto items-center bg-[hsl(200,5%,12%)] py-2 w-[160px]">
                                    <img className='w-8 py-2' src={transmissionImg} alt="" />
                                    <h1 className=''>Transmission</h1>
                                    <h2 className='text-gray-300 font-extralight '>{car.fiche_technique['Boîte de vitesse']}</h2>
                                </div>
                                <div className="flex flex-col col-span-2 mx-auto items-center bg-[hsl(200,5%,12%)] py-2 w-[160px]">
                                    <img className='w-8 py-2' src={motorImg} alt="" />
                                    <h1 className=''>Puissance</h1>
                                    <h2 className='text-gray-300 font-extralight '>{car.motorisation['Puissance réelle']}</h2>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[hsl(200,5%,10%)] flex justify-center p-2 pb-14  mt-2'>
                            <div className='md:max-w-[800px] w-full'>
                                <div className='text-center my-10'>
                                    <span className='w-full text-3xl text-blue-400 partial-border ajust py-3'>Détails</span>
                                </div>
                                <h1 className='text-2xl font-light text-gray-300 pt-1 lg:pb-1'>Fiche Technique</h1>
                                <div className='grid lg:grid-cols-2 gap-4 max-w-[800px] mx-auto'>
                                    <DoubleDivFlex name={"Modèle"} value={car.fiche_technique['Modèle']} />
                                    <DoubleDivFlex name={"Prix TTC"} value={car.fiche_technique['Prix TTC']} />
                                    <DoubleDivFlex name={"Finition"} value={car.fiche_technique['Finition']} />
                                    <DoubleDivFlex name={"Kilométrage"} value={car.fiche_technique['Kilométrage']} />
                                    <DoubleDivFlex name={"Boîte de vitesse"} value={car.fiche_technique['Boîte de vitesse']} />
                                    <DoubleDivFlex name={"Énergie"} value={car.fiche_technique['Énergie']} />
                                    <DoubleDivFlex name={"Mise en circulation"} value={car.fiche_technique['Mise en circulation']} />
                                    <DoubleDivFlex name={"Garantie"} value={car.fiche_technique['Garantie']} />
                                    <DoubleDivFlex name={"État du véhicule"} value={car.fiche_technique['État du véhicule']} />
                                </div>
                                <h1 className='text-2xl font-light text-gray-300 pt-1 lg:pb-1 mt-10'>Motorisation</h1>
                                <div className='grid lg:grid-cols-2 gap-4 max-w-[800px] mx-auto'>
                                    <DoubleDivFlex name={"Puissance réelle"} value={car.motorisation['Puissance réelle']} />
                                    <DoubleDivFlex name={"Puissance fiscale"} value={car.motorisation['Puissance fiscale']} />
                                    <DoubleDivFlex name={"Consommation"} value={car.motorisation['Consommation']} />
                                    <DoubleDivFlex name={"Émission de CO2 (NEDC)"} value={car.motorisation['Émission de CO2 (NEDC)']} />
                                </div>
                                <h1 className='text-2xl font-light text-gray-300 pt-1 lg:pb-1 mt-10'>Carrosserie</h1>
                                <div className='grid lg:grid-cols-2 gap-4 max-w-[800px] mx-auto'>
                                    <DoubleDivFlex name={"Type de carrosserie"} value={car.carrosserie['Type de carrosserie']} />
                                    <DoubleDivFlex name={"Nombre de portes"} value={car.carrosserie['Nombre de portes']} />
                                    <DoubleDivFlex name={"Nombre de places"} value={car.carrosserie['Nombre de places']} />
                                    <DoubleDivFlex name={"Largeur"} value={car.carrosserie['Largeur']} />
                                    <DoubleDivFlex name={"Longueur"} value={car.carrosserie['Longueur']} />
                                </div>

                            </div>
                        </div>
                        <div className='bg-[hsl(200,5%,10%)] p-2 pb-14  mt-2'>
                            <div className='md:max-w-[800px] mx-auto'>
                                <div className='text-center my-10'>
                                    <span className='w-full text-3xl text-blue-400 partial-border ajust py-3'>Équipements</span>
                                </div>
                                <div className=' pb-10 py-3 gap-4 grid '>
                                    {car.equipement.map((val, index) => {
                                        return <div key={index} className='flex items-center gap-2 font-extralight text-slate-300'><AiFillCaretRight size={15} color="rgb(251 146 60)" /><div>{val}</div></div>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div >
    )
}

export default CarDetail