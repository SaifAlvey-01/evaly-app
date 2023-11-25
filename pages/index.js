import Head from "next/head";
import Image from "next/image";
import { Inria_Sans } from "@next/font/google";
import { HeroBannerSlider } from "../components";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import Button from "../components/Button";
import { Avatar } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";
const inriaSans = Inria_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

// Dummy Data

const BRANDS = [
  { id: 1, imgSrc: "/images/mi.png", title: "MI" },
  { id: 3, imgSrc: "/images/samsung.png", title: "Samsung" },
  { id: 2, imgSrc: "/images/toyota.png", title: "Toyota" },
  { id: 4, imgSrc: "/images/lux.png", title: "Lux" },
  { id: 5, imgSrc: "/images/nestle.png", title: "Nestle" },
  { id: 7, imgSrc: "/images/apple.png", title: "Apple" },
  { id: 6, imgSrc: "/images/nokia.png", title: "Nokia" },
  { id: 8, imgSrc: "/images/garnier.png", title: "Garnier" },
  { id: 9, imgSrc: "/images/motorola.png", title: "Motorola Coorporation" },
  { id: 10, imgSrc: "/images/lifebuoy.png", title: "Lifebuoy" },
  { id: 11, imgSrc: "/images/tesla.jpeg", title: "Tesla" },
];

const TOUR_DESTINATIONS = [
  {
    id: 1,
    imgSrc: "/images/goldengatebridge.jpeg",
    title:
      "Sundarban Premium Group Tour Package - 50 persons with 1 Night stay",
    oldPrice: "262,500",
    newPrice: "140,000",
  },
  {
    id: 2,
    imgSrc: "/images/tour-1.png",
    title:
      "Economic Sajek Valley Group Tour Package - 35 persons with 1 Night stay",
    newPrice: "140,000",
  },
  {
    id: 3,
    imgSrc: "/images/changi.jpeg",
    title:
      "Economic Sajek Valley Group Tour Package - 35 persons with 1 Night stay",
    oldPrice: "262,500",
    newPrice: "140,000",
  },
  {
    id: 4,
    imgSrc: "/images/sauditwintower.jpeg",
    title:
      "Economic Sajek Valley Group Tour Package - 35 persons with 1 Night stay",
    oldPrice: "262,500",
    newPrice: "140,000",
  },
  {
    id: 5,
    imgSrc: "/images/singapore.jpeg",
    title:
      "Economic Sajek Valley Group Tour Package - 35 persons with 1 Night stay",
    oldPrice: "262,500",
    newPrice: "140,000",
  },
  {
    id: 6,
    imgSrc: "/images/changi.jpeg",
    title:
      "Economic Sajek Valley Group Tour Package - 35 persons with 1 Night stay",
    oldPrice: "262,500",
    newPrice: "140,000",
  },
  {
    id: 7,
    imgSrc: "/images/burjkhalifa.jpeg",
    title:
      "Economic Sajek Valley Group Tour Package - 35 persons with 1 Night stay",
    oldPrice: "262,500",
    newPrice: "140,000",
  },
  {
    id: 8,
    imgSrc: "/images/nwfp.jpeg",
    title:
      "Economic Sajek Valley Group Tour Package - 35 persons with 1 Night stay",
    oldPrice: "262,500",
    newPrice: "140,000",
  },
];

export default function HomePage() {
  const dispatch = useDispatch();
  const showItemAddedToast = () => {
    toast('Item added to cart', {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  const handleAddToCart = (destination) => {
    dispatch(
      addToCart({
        id: destination.id,
        title: destination.title,
        image: destination.imgSrc,
        price: destination.newPrice,
      })
    )
    showItemAddedToast()
  }
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${inriaSans.className} px-4 md:px-10 xl:px-12 max-w-7xl mx-auto pb-9 md:pb-0`}
      >
        <div>
          <HeroBannerSlider />
          <div className="mt-0 sm:mt-4 md:mt-14 lg:mt-5 pb-5">
            <section className="mb-9">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
                Shop by Brands
              </h2>
              <div className="mt-3 shop-by-brands-section md:mt-5 grid auto-rows-[1fr] sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 2xl:grid-cols-8 gap-3">
                {BRANDS.map((brand) => {
                  return (
                    <div
                      key={brand.title}
                      className="flex flex-col justify-between items-center bg-white rounded-md p-3 sm:p-4 shadow-sm"
                    >
                      <div>
                        <Image
                          className="max-w-[90%] object-contain mx-auto h-[80px] md:h-[90px] lg:h-[110px]"
                          src={brand.imgSrc}
                          alt={brand.title}
                          width={150}
                          height={150}
                        />
                      </div>
                      <p className="pt-2 textHideTwoLines text-center text-sm sm:text-md font-bold leading-4 sm:leading-5">
                        {brand.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>
            <section className="pt-2 md:pt-4 mb-5">
              <div className="flex items-center justify-between">
                <h2 className="text-lg sm:text-xl md:text-3xl font-bold">
                  Travel & Tours
                </h2>
                <Button
                  title="View All"
                  icon={<ArrowCircleRightOutlinedIcon fontSize="medium" />}
                />
              </div>
              <div className="mt-5 md:mt-8 travel-tour-section">
                {TOUR_DESTINATIONS.map((destination, index) => {
                  return (
                    <div
                      key={destination.title + index}
                      className="flex flex-col justify-between bg-white destination-card rounded-md px-3 py-3 shadow-sm"
                    >
                      <div>
                        <div className="rounded-md">
                          <Image
                            className="max-w-[100%] w-full h-full object-contain mx-auto rounded-md"
                            src={destination.imgSrc}
                            alt={destination.title}
                            width={150}
                            height={150}
                          />
                        </div>
                        <p className="text-xs title font-normal lines-2 md:text-sm text-gray-700 mt-4 md:mt-6">
                          {destination.title}
                        </p>
                      </div>
                      <div className=" flex flex-col justify-end mt-1 prices w-full">
                        {destination.oldPrice && (
                          <del className="text-sm text-slate-300 font-light mt-1">
                            ${destination.oldPrice}
                          </del>
                        )}
                        <div className="flex justify-between gap-1 items-center w-full">
                          <p className="text-base sm:text-lg xl:text-base font-bold">
                            ${destination.newPrice}
                          </p>
                          <button
                            onClick={() => handleAddToCart(destination)}
                            className="hover:bg-[#F5F5F5] p-1 rounded-full"
                          >
                            <LocalMallOutlinedIcon className="text-slate-300" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-center" />
    </>
  );
}
