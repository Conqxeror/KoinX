import React from "react";
import About from "./components/About";
import HeroChart from "./section/HeroChart";
import InfoBar from "./components/InfoBar";
import Sentiment from "./section/Sentiment";
import Sticker from "./section/Sticker";
import Trending from "./section/Trending";
import Breadcrums from "./components/Breadcrums";

export default function Home() {
  return (
    <main className="mx-auto px-2 md:px-16">
      <div className="my-5">
        <Breadcrums />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="md:col-span-2">
          <HeroChart />
          <InfoBar />
          <Sentiment />
          <About />
        </div>
        <div className="md:col-span-1">
          <Sticker />
          <Trending />
        </div>
      </div>
    </main>
  );
}
