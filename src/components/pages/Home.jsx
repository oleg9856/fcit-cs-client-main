import React from "react";
import HeroSection from "../UI/main/HeroSection";
import MainLenta from "../UI/main/MainLenta";
import Slider from "../UI/slider/MainSlider";
import Qa from "../UI/main/Qa";
import MainLayout from "../layout/main/MainLayout";

const Home = () => (
  <MainLayout isHomePage={true}>
    <HeroSection />
    <MainLenta />
    <Slider />
    <Qa />
  </MainLayout>
);

export default Home;
