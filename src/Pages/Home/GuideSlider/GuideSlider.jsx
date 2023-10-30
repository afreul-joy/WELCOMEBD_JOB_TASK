import React, {  useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import axios from "axios";

const GuideSlider = () => {
  const [guideDataList, setGuideDataList] = useState([]);

  useEffect(() => {
    axios
      .get("/guideData.json")
      .then((response) => {
        // setGuideDataList(guideData);
        setGuideDataList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <RiArrowRightSFill className="text-black dark:text-white" size="2em" />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <RiArrowLeftSFill className="text-black dark:text-white" size="2em" />
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

  const productsToShow = guideDataList.slice(1, 6);

  return (
    <div className="container mx-auto text-gray-800 rounded-lg dark:text-white">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold p-2">Top Rated Guides</h2>
        <Link to="/guide" className="cursor-pointer underline p-2">
          See all
        </Link>
      </div>

      <Slider {...settings}>
        {productsToShow.map((product, index) => (
          <Link to={`/guide/${product._id}`} key={index}>
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={product.img}
                alt={`Image ${index}`}
                className="w-full h-48  transition-transform transform hover:scale-105 duration-300"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black text-white p-2 opacity-80 hover:opacity-100">
                <h2 className="text-lg font-semibold">{product.name}</h2>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default GuideSlider;
