import PodcastCover from "@/components/shared/podcast-cover";
import { trendingPodcasts } from "@/constants/podcast";
import { FC } from "react";

const TrendingPodcastSection: FC = () => {
  return (
    <div className="space-y-4">
      <h4>Trending Podacasts</h4>
      <div className="flex overflow-scroll w-full justify-center gap-x-2 no-scrollbar">
        {[...trendingPodcasts].map((podcast) => (
          <PodcastCover key={podcast.id} podcast={podcast} />
        ))}
      </div>
    </div>
  );
};

export default TrendingPodcastSection;
