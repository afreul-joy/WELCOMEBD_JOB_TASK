import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ExploreSliderContext } from "../../../context/ExploreSliderContext";

const Special_Offers = () => {
  const { products } = useContext(ExploreSliderContext);

  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <AiOutlineArrowRight
          className="text-black dark:text-white"
          size="2em"
        />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <AiOutlineArrowLeft className="text-black dark:text-white" size="2em" />
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Use slice to get the first 6 items from the products array
  const productsToShow = products.slice(4, 8);

  return (
    <div className="container mx-auto text-gray-800 rounded-lg dark:text-white">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold p-2">Best Holiday Packages</h2>
        <Link to="/explore" className="cursor-pointer underline p-2">
          Explore all
        </Link>
      </div>

      <Slider {...settings}>
        {productsToShow.map((product, index) => (
          <Link to={`/explore/${product._id}`} key={index}>
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={product.img[0]}
                alt={`Image ${index}`}
                className="w-full h-48 object-cover transition-transform transform hover:scale-105 duration-300"
              />
              <h2 className="absolute bottom-0 left-0 bg-white text-black p-2 opacity-80 hover:opacity-100">
                {product.location}
              </h2>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Special_Offers;
