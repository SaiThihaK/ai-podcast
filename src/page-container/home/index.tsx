"use client";
import { FC } from "react";

import LatestPodcast from "./latest-podcast";
import TrendingPodcastSection from "./trending";
import { useQuery } from "convex/react";
import { api } from "convex/_generated/api";
const HomeContainer: FC = () => {
  const tasks = useQuery(api.tasks.get);
  return (
    <div className="px-6 h-screen overflow-y-scroll no-scrollbar bg-[#0f1114] py-6 space-y-6">
      {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}
      <TrendingPodcastSection />
      <LatestPodcast />
    </div>
  );
};

export default HomeContainer;
