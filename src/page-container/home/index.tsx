"use client";
import { FC } from "react";

import LatestPodcast from "./latest-podcast";
import TrendingPodcastSection from "./trending";
const HomeContainer: FC = () => {
  return (
    <div className="px-6 h-screen overflow-y-scroll no-scrollbar bg-[#0f1114] py-6 space-y-6">
      <TrendingPodcastSection />
      <LatestPodcast />
    </div>
  );
};

export default HomeContainer;
