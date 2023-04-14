import { collection, getDocs } from "@firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, storage } from "../firebase";
import Image from 'react-image-webp';
import ReactPaginate from "react-paginate";

const items = [...Array(33).keys()];

function Items({ currentItems }) {

  const navigate = useNavigate();


  const [imgs, setImgs] = useState(new Map());

  const [fetching, setFetching] = useState(true);

  const openCarDetail = (car) => {
    localStorage.setItem('car', JSON.stringify(car));
    navigate('/voiture');
  }

  useEffect(() => {
    currentItems?.forEach((val, index) => {
      setImgUrl(val);
    })
    setFetching(true);
  }, [currentItems])

  const setImgUrl = (car) => {
    setImgs(new Map());
    const pathReference = ref(storage, `images/${car.id}/mini/${car.mini}`);
    getDownloadURL(pathReference).then(url => {
      setImgs(new Map(imgs.set(car.id, url)))
    }).catch(err => console.log(err))
  }


  return (
    <div className="bg-[hsl(200,5%,12%)] flex justify-center font-light w-[100vw] md:w-full text-slate-200 md:p-4 min-h-[90vh]">
      <div className="md:gap-x-4 md:gap-y-4 gap-y-8 h-full grid grid-cols-1 md:grid-cols-2 md:p-5 w-[100vw] md:max-w-[900px]">
        {fetching && currentItems && currentItems.map((item, index) => (
          ((index !== (currentItems.length - 1)) || (currentItems.length % 2 === 0)) ?
            <div key={index} className="md:w-[400px] w-[100vw] bg-[hsl(200,5%,10%)]">
              <Image src={imgs.get(item.id)} webp={imgs.get(item.id)} className="md:w-full object-cover md:h-[300px] w-[100vw] md:rounded-t-lg" alt="" />
              <div className="p-2 [&>div]:py-[0.4rem]">
                <div className="flex justify-between pt-2 pb-1 px-4 text-2xl text-blue-300">
                  <h1 className="font-light">{item.fiche_technique["Modèle"]}</h1>
                  <p className="font-light">{item.fiche_technique["Prix TTC"]}</p>
                </div>
                <p className="px-4 font-light">{item.fiche_technique["Finition"]}</p>
                <p className="px-4 font-light">{item.fiche_technique["Millésime"]} | {item.fiche_technique["Énergie"]} | {item.fiche_technique["Kilométrage"]} </p>
                <p className="px-4 pb-2 font-light">{item.fiche_technique["Boîte de vitesse"]}</p>
              </div>
              <button className="w-full bg-orange-500 py-[.65rem] px-2 font-medium text-gray-100 hover:bg-orange-600" onClick={() => openCarDetail(item)}>Voir cette voiture</button>
            </div>
            :
            <div key={index} className="md:w-[400px] w-[100vw] bg-[hsl(200,5%,10%)] col-span-1">
              <Image src={imgs.get(item.id)} webp={imgs.get(item.id)} className="md:w-full object-cover md:h-[250px] w-[100vw] md:rounded-t-lg" alt="" />
              <div className="p-2 [&>div]:py-[0.4rem]">
                <div className="flex justify-between pt-2 pb-1 px-4 text-2xl text-blue-300">
                  <h1 className="font-light">{item.fiche_technique["Modèle"]}</h1>
                  <p className="font-light">{item.fiche_technique["Prix TTC"]}</p>
                </div>
                <p className="px-4 font-light">{item.fiche_technique["Finition"]}</p>
                <p className="px-4 font-light">{item.fiche_technique["Millésime"]} | {item.fiche_technique["Énergie"]} | {item.fiche_technique["Kilométrage"]} </p>
                <p className="px-4 pb-2 font-light">{item.fiche_technique["Boîte de vitesse"]}</p>
              </div>
              <button className="w-full bg-orange-500 py-[.65rem] px-2 font-medium text-gray-100 hover:bg-orange-600" onClick={() => openCarDetail(item)}>Voir cette voiture</button>
            </div>

        ))}
      </div>
    </div>
  );
}

function Cars({ itemsPerPage, setCar }) {

  const [pageCount, setPageCount] = useState(0);

  const [itemOffset, setItemOffset] = useState(0);

  const [cars, setCars] = useState([]);

  const dbCarRef = collection(db, "voiture");


  const [currentItems, setCurrentItems] = useState(null);


  useEffect(() => {
    setCars([]);
    getDocs(dbCarRef).then(response => {
      if (parseInt(response.docs.length / itemsPerPage) < 1)
        setPageCount(1);
      else
        setPageCount(parseInt(response.docs.length / itemsPerPage));

      response.forEach(doc => {
        let newCar = { ...doc.data(), id: doc.id };
        setCars(old => {
          let toAdd = { id: doc.id, Status: newCar.Status, vue: newCar.vue, mini: newCar.mini, carrosserie: newCar.carrosserie, fiche_technique: newCar.fiche_technique, motorisation: newCar.motorisation, equipement: newCar.equipement, images: newCar.images }
          return [...old, toAdd];
        });
      })
    })
  }, [])


  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(cars.slice(itemOffset, endOffset));
    // setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, cars]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage % items.length;
    // console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  return (
    <div>
      <Items currentItems={currentItems} setCar={setCar} className="min-h-[60vh]" />
      <div className="flex justify-center w-full backgroundPagination">
        <ReactPaginate
          nextLabel="Suivant"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          marginPagesDisplayed={0}
          pageCount={pageCount}
          previousLabel="Précédent"
          pageClassName="numbers"
          pageLinkClassName="page-link"
          previousClassName="prev"
          previousLinkClassName="page-link"
          nextClassName="next"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="numbers"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
}

export default Cars;