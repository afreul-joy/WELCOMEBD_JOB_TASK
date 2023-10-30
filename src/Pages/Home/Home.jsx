import React from "react";
import Banner from "./Banner/Banner";
import NewsLetter from "./NewsLetter/NewsLetter";
import DraggableSlider from "./ImgSlider/ImgSlider";
import ExploreSlider from "./ExploreSlider/ExploreSlider";
import Special_Offers from "./Special_Offers/Special_Offers";
import GuideSlider from "./GuideSlider/GuideSlider";
import SubBanner from "./SubBanner/SubBanner";
import SubBanner2 from "./SubBanner/SubBanner2";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <ExploreSlider></ExploreSlider>
      <Special_Offers></Special_Offers>
      <SubBanner></SubBanner>
      <GuideSlider></GuideSlider>
      <SubBanner2></SubBanner2>
      <DraggableSlider></DraggableSlider>
      <NewsLetter></NewsLetter>
    </>
  );
};

export default Home;
