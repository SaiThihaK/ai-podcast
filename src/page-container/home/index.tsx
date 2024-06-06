import { FC } from "react";
import TrendingPodcastSection from "./trending";

const HomeContainer: FC = () => {
  return (
    <div className="px-6 h-screen bg-[#0f1114] py-6">
      <TrendingPodcastSection />
    </div>
  );
};

export default HomeContainer;
