import React from 'react';
import layout from "../../layouts/Layout/Layout.jsx";
import Hero from '../../components/Hero/Hero';
import HomeCard from '../../components/HomeCard/HomeCard';
import Ad from '../../components/Ad/Ad';

const Home = () => {
  return (
    <div>
      <Hero />
      <HomeCard />
      <Ad />
    </div>
  );
};

export default Home;
