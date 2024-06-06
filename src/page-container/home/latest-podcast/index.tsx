import { Button } from "@/components/ui/button";
import { latestPodcasts } from "@/constants/podcast";
import { FC } from "react";
import PodcastDisplay from "./podcast-display";

const LatestPodcast: FC = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h4>Latest Podcasts</h4>
        <Button variant="link" className="px-0">
          See All
        </Button>
      </div>

      {latestPodcasts.map((podcast, index) => (
        <PodcastDisplay podcast={podcast} number={index + 1} key={podcast.id} />
      ))}
    </div>
  );
};

export default LatestPodcast;
